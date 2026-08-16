'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import AuthLayout from '../auth-layout';
import { auth, firebaseConfigured } from '../../lib/firebase';
import { signInTestGoogle, signInTestUser, testAuthEnabled } from '../../lib/test-auth';

export default function SignInPage() {
  const router = useRouter();
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [loading,setLoading]=useState(false);
  const testMode = testAuthEnabled();

  const google=async()=>{setError('');setLoading(true);try{if(testMode){signInTestGoogle();router.push('/dashboard');return;}if(!firebaseConfigured||!auth)throw new Error('Firebase authentication is not configured.');await signInWithPopup(auth,new GoogleAuthProvider());router.push('/dashboard')}catch(e:any){setError(e?.message||'Google sign-in failed.')}finally{setLoading(false)}};
  const submit=async(e:React.FormEvent)=>{e.preventDefault();setError('');setLoading(true);try{if(testMode){signInTestUser(email,password);router.push('/dashboard');return;}if(!firebaseConfigured||!auth)throw new Error('Firebase authentication is not configured.');await signInWithEmailAndPassword(auth,email,password);router.push('/dashboard')}catch(e:any){setError(e?.message||'Sign in failed.')}finally{setLoading(false)}};

  return <AuthLayout><div className="w-full max-w-md"><div className="lg:hidden"><Link href="/" className="text-xl font-bold">ARCUS <span className="text-[var(--arcus-green)]">STRATEGY</span></Link></div><div className="mt-8 rounded-2xl border border-[var(--arcus-border)] bg-white p-7 shadow-sm"><div className="mb-5 rounded-lg bg-[#fff8e8] px-3 py-2 text-[11px] font-semibold text-[#8a6410]">{testMode ? 'TEST MODE — Firebase authentication will be enabled later.' : 'Production authentication'}</div><h2 className="text-2xl font-bold">Sign in</h2><p className="mt-2 text-sm text-[var(--arcus-muted)]">Access your Arcus Strategy customer workspace.</p><button type="button" disabled={loading} onClick={google} className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--arcus-border)] px-4 py-3 text-sm font-semibold hover:border-[var(--arcus-green)] disabled:opacity-50">Continue with Google{testMode && ' (Test)'}</button><div className="my-5 flex items-center gap-3 text-xs text-[var(--arcus-muted)]"><span className="h-px flex-1 bg-[var(--arcus-border)]"/>OR<span className="h-px flex-1 bg-[var(--arcus-border)]"/></div><form onSubmit={submit}><label className="text-sm font-semibold">Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="mt-2 w-full rounded-lg border border-[var(--arcus-border)] px-3 py-3 outline-none focus:border-[var(--arcus-green)]" placeholder="you@example.com"/><label className="mt-4 block text-sm font-semibold">Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="mt-2 w-full rounded-lg border border-[var(--arcus-border)] px-3 py-3 outline-none focus:border-[var(--arcus-green)]" placeholder="••••••••"/><div className="mt-3 text-right"><Link href="/forgot-password" className="text-sm font-semibold text-[var(--arcus-green)]">Forgot password?</Link></div>{error&&<p className="mt-4 rounded-lg bg-[#fff1f2] p-3 text-[11px] leading-5 text-[#c93642]">{error}</p>}<button disabled={loading} type="submit" className="mt-5 w-full rounded-lg bg-[var(--arcus-green)] px-4 py-3 text-sm font-bold text-white disabled:opacity-50">{loading?'Signing in…':'Sign in'}</button></form><p className="mt-6 text-center text-sm text-[var(--arcus-muted)]">Don't have an account? <Link href="/signup" className="font-bold text-[var(--arcus-green)]">Create one</Link></p></div></div></AuthLayout>;
}

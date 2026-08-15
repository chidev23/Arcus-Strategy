import Link from 'next/link';
import AuthLayout from '../auth-layout';

export default function ForgotPasswordPage() {
  return <AuthLayout><div className="w-full max-w-md"><div className="lg:hidden"><Link href="/" className="text-xl font-bold">ARCUS <span className="text-[var(--arcus-green)]">STRATEGY</span></Link></div><div className="mt-8 rounded-2xl border border-[var(--arcus-border)] bg-white p-7 shadow-sm"><Link href="/signin" className="text-sm font-semibold text-[var(--arcus-green)]">← Back to sign in</Link><h2 className="mt-7 text-2xl font-bold">Reset your password</h2><p className="mt-2 text-sm leading-6 text-[var(--arcus-muted)]">Enter the email associated with your account and we'll send instructions to reset your password.</p><label className="mt-6 block text-sm font-semibold">Email</label><input type="email" required className="mt-2 w-full rounded-lg border border-[var(--arcus-border)] px-3 py-3" placeholder="you@example.com"/><button className="mt-5 w-full rounded-lg bg-[var(--arcus-green)] px-4 py-3 text-sm font-bold text-white">Send reset instructions</button></div></div></AuthLayout>;
}

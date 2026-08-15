import Link from 'next/link';

export default function ForgotPasswordPage() {
  return <main className="min-h-screen bg-[var(--arcus-surface)] px-6 py-12"><div className="mx-auto max-w-md rounded-2xl border border-[var(--arcus-border)] bg-white p-8 shadow-sm"><Link href="/signin" className="text-sm font-bold text-[var(--arcus-green)]">← Back to sign in</Link><h1 className="mt-8 text-3xl font-bold">Reset your password</h1><p className="mt-2 text-sm leading-6 text-[var(--arcus-muted)]">Enter your account email and we will send instructions to reset your password.</p><form className="mt-8 space-y-4"><label className="block text-sm font-semibold">Email<input type="email" required className="mt-2 w-full rounded-lg border border-[var(--arcus-border)] px-4 py-3" /></label><button className="w-full rounded-lg bg-[var(--arcus-green)] px-4 py-3 font-bold text-white">Send reset instructions</button></form></div></main>;
}

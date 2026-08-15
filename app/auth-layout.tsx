import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--arcus-surface)]">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        <section className="hidden border-r border-[var(--arcus-border)] bg-white p-12 lg:flex lg:flex-col lg:justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">ARCUS <span className="text-[var(--arcus-green)]">STRATEGY</span></Link>
          <div className="max-w-lg">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--arcus-green)]">Private trading technology</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight">Access your Arcus Strategy workspace.</h1>
            <p className="mt-5 leading-7 text-[var(--arcus-muted)]">Authenticate to access services, performance analytics, risk analysis and your customer workspace.</p>
          </div>
          <p className="text-xs text-[var(--arcus-muted)]">Trading leveraged financial instruments carries a high level of risk. Past performance is not indicative of future results.</p>
        </section>
        <section className="flex items-center justify-center px-6 py-12">{children}</section>
      </div>
    </main>
  );
}

import Link from 'next/link';

const products = [
  ['Algorithmic Execution', 'Technology for systematic, rules-based execution and disciplined risk controls.'],
  ['Trade Replication', 'Infrastructure designed to mirror qualifying trading activity across supported environments.'],
  ['Risk Management', 'Risk-aware execution architecture designed around exposure, drawdown and trading constraints.'],
  ['Trading Infrastructure', 'Financial technology supporting automated strategies and multi-asset workflows.'],
];

export default function WelcomePage() {
  return (
    <main>
      <header className="border-b border-[var(--arcus-border)] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="text-lg font-bold tracking-tight">ARCUS <span className="text-[var(--arcus-green)]">STRATEGY</span></Link>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#technology">Technology</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/signin" className="rounded-lg px-4 py-2 text-sm font-semibold">Sign in</Link>
            <Link href="/signup" className="rounded-lg bg-[var(--arcus-green)] px-4 py-2 text-sm font-semibold text-white shadow-sm">Get started</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[var(--arcus-surface)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[var(--arcus-green)]">Algorithmic trading infrastructure</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">Technology for disciplined, automated trading.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--arcus-muted)]">Arcus Strategy develops multi-asset algorithmic execution, trade replication and risk-management technology for traders seeking systematic access to modern trading infrastructure.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup" className="rounded-lg bg-[var(--arcus-green)] px-6 py-3 text-sm font-bold text-white">Create an account</Link>
              <Link href="/signin" className="rounded-lg border border-[var(--arcus-border)] bg-white px-6 py-3 text-sm font-bold">Sign in</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--arcus-border)] bg-white p-6 shadow-[0_20px_60px_rgba(16,22,21,.08)]">
            <div className="flex items-center justify-between border-b border-[var(--arcus-border)] pb-5"><span className="text-sm font-semibold">Arcus Technology</span><span className="rounded-full bg-[#e8f6ef] px-3 py-1 text-xs font-bold text-[var(--arcus-green-dark)]">SYSTEMATIC</span></div>
            <div className="mt-6 space-y-4">
              {['Automated execution', 'Trade replication protocols', 'Risk-aware controls', 'Multi-asset infrastructure'].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-[var(--arcus-surface)] p-4"><span className="h-2.5 w-2.5 rounded-full bg-[var(--arcus-green)]" /><span className="text-sm font-semibold">{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--arcus-green)]">Our products</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Financial technology built around execution and control.</h2><p className="mt-4 leading-7 text-[var(--arcus-muted)]">Explore the technology behind the Arcus Strategy ecosystem. Customer services remain inside the authenticated application.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {products.map(([title, text], index) => <article key={title} className="rounded-2xl border border-[var(--arcus-border)] bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg"><span className="text-sm font-bold text-[var(--arcus-green)]">0{index + 1}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-[var(--arcus-muted)]">{text}</p></article>)}
        </div>
      </section>

      <section id="about" className="border-y border-[var(--arcus-border)] bg-[var(--arcus-surface)]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><h2 className="text-3xl font-bold tracking-tight">Built for systematic trading workflows.</h2><p className="mt-5 max-w-3xl leading-8 text-[var(--arcus-muted)]">Arcus Strategy combines algorithmic execution, trade replication and risk-management concepts into a professional financial technology ecosystem. Users retain ownership and control of their capital while choosing which services to access after authentication.</p></div></section>

      <footer id="contact" className="border-t border-[var(--arcus-border)] bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-[var(--arcus-muted)] lg:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row"><span className="font-bold text-[var(--arcus-ink)]">ARCUS STRATEGY</span><div className="flex gap-5"><Link href="/legal/terms">Terms</Link><Link href="/legal/privacy">Privacy</Link><Link href="/legal/risk-disclosure">Risk Disclosure</Link></div></div><p>Trading leveraged financial instruments carries a high level of risk. Past performance is not indicative of future results.</p><p>© 2026 Arcus Strategy Ltd. Registration No. HE 492810. Arch. Makariou III, 224, Office 401, 3030 Limassol, Cyprus. All rights reserved.</p></div></footer>
    </main>
  );
}

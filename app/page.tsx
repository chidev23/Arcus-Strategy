import Link from 'next/link';
import { ArrowRight, BarChart3, Bot, ShieldCheck, Zap } from 'lucide-react';

const technology = [
  { number: '01', title: 'Algorithmic Execution', text: 'Rules-based automated execution designed for systematic trading workflows and disciplined risk controls.', icon: Zap },
  { number: '02', title: 'Trade Replication', text: 'Infrastructure for mirroring qualifying strategy activity across supported trading environments.', icon: BarChart3 },
  { number: '03', title: 'Risk Management', text: 'Risk-aware controls built around exposure, drawdown, execution conditions and account constraints.', icon: ShieldCheck },
  { number: '04', title: 'Trading Infrastructure', text: 'A multi-asset technology layer connecting strategies, execution workflows and account-level controls.', icon: Bot },
];

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-white text-[var(--arcus-ink)]">
      <header className="sticky top-0 z-50 border-b border-[var(--arcus-border)]/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Arcus Strategy home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--arcus-ink)] text-sm font-black text-white shadow-sm">A</span>
            <span className="leading-none"><span className="block text-[15px] font-extrabold tracking-[0.08em]">ARCUS</span><span className="mt-0.5 block text-[9px] font-bold tracking-[0.28em] text-[var(--arcus-green)]">STRATEGY</span></span>
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] font-semibold text-slate-600 md:flex">
            <a href="#technology" className="transition hover:text-[var(--arcus-green)]">Technology</a>
            <a href="#about" className="transition hover:text-[var(--arcus-green)]">About</a>
            <a href="#contact" className="transition hover:text-[var(--arcus-green)]">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/signin" className="rounded-xl px-3.5 py-2.5 text-[13px] font-bold text-slate-700 transition hover:bg-slate-50">Sign in</Link>
            <Link href="/signup" className="rounded-xl bg-[var(--arcus-green)] px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(22,138,85,.20)] transition hover:-translate-y-0.5 hover:bg-[var(--arcus-green-dark)]">Get started</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[var(--arcus-border)] bg-[#f7faf8]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-red-50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--arcus-green-dark)] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--arcus-green)]" /> Algorithmic trading infrastructure
            </div>
            <h1 className="max-w-3xl text-[2.65rem] font-extrabold leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[4.15rem]">Technology for disciplined, automated trading.</h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">Arcus Strategy develops multi-asset algorithmic execution, trade replication and risk-management technology for traders seeking systematic access to modern trading infrastructure.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-xl bg-[var(--arcus-green)] px-5 py-3 text-[13px] font-extrabold text-white shadow-[0_12px_30px_rgba(22,138,85,.22)] transition hover:-translate-y-0.5 hover:bg-[var(--arcus-green-dark)]">Create an account <ArrowRight size={16} /></Link>
              <Link href="/signin" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-[13px] font-extrabold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">Sign in</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
              <span>Multi-asset</span><span>Systematic</span><span>Risk-aware</span><span>Automated</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="rounded-[26px] border border-slate-200 bg-white p-3 shadow-[0_28px_80px_rgba(15,23,42,.12)]">
              <div className="rounded-[20px] bg-[#0d1512] p-5 text-white sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">Arcus Technology</p><p className="mt-1 text-sm font-bold">Execution Control</p></div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-emerald-300">Systematic</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    ['Execution', 'Automated'],
                    ['Replication', 'Enabled'],
                    ['Risk controls', 'Active'],
                    ['Assets', 'Multi-asset'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-[10px] text-slate-400">{label}</p><p className="mt-2 text-[13px] font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="mb-4 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Execution activity</span><span className="text-[10px] font-bold text-emerald-300">LIVE SYSTEM</span></div>
                  <div className="flex h-20 items-end gap-1.5">
                    {[25, 38, 31, 48, 42, 61, 54, 72, 63, 80, 75, 91, 82, 96].map((height, i) => <span key={i} className={`w-full rounded-t ${i > 10 ? 'bg-emerald-400' : 'bg-emerald-500/40'}`} style={{ height: `${height}%` }} />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block"><p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Architecture</p><p className="mt-1 text-xs font-extrabold text-slate-800">Execution + Control</p></div>
          </div>
        </div>
      </section>

      <section id="technology" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl"><p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--arcus-green)]">Arcus technology</p><h2 className="mt-3 text-2xl font-extrabold tracking-[-0.025em] text-slate-950 sm:text-3xl">Financial technology built around execution and control.</h2><p className="mt-4 text-[14px] leading-7 text-slate-600">Explore the technology behind the Arcus Strategy ecosystem. Customer services remain inside the authenticated application.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {technology.map(({ number, title, text, icon: Icon }) => <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_45px_rgba(15,23,42,.08)]"><div className="flex items-start justify-between"><span className="text-[11px] font-extrabold tracking-wider text-[var(--arcus-green)]">{number}</span><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-[var(--arcus-green)]"><Icon size={17} /></span></div><h3 className="mt-6 text-[17px] font-extrabold text-slate-900">{title}</h3><p className="mt-2 text-[13px] leading-6 text-slate-600">{text}</p></article>)}
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-slate-50"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--arcus-green)]">About Arcus</p><h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">Built for systematic trading workflows.</h2></div><p className="max-w-3xl text-[14px] leading-7 text-slate-600">Arcus Strategy combines algorithmic execution, trade replication and risk-management concepts into a professional financial technology ecosystem. Users retain ownership and control of their capital while choosing which services to access after authentication.</p></div></section>

      <footer id="contact" className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 text-[12px] text-slate-500 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><span className="font-extrabold tracking-wide text-slate-900">ARCUS STRATEGY</span><p className="mt-1 text-[11px]">Algorithmic execution & financial technology.</p></div><div className="flex flex-wrap gap-5 font-semibold"><Link href="/legal/terms">Terms</Link><Link href="/legal/privacy">Privacy</Link><Link href="/legal/risk-disclosure">Risk Disclosure</Link></div></div><p className="max-w-4xl leading-5">Trading leveraged financial instruments carries a high level of risk. Past performance is not indicative of future results.</p><p>© 2026 Arcus Strategy Ltd. Registration No. HE 492810. Arch. Makariou III, 224, Office 401, 3030 Limassol, Cyprus. All rights reserved.</p></div></footer>
    </main>
  );
}

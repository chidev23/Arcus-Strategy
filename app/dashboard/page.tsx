import Link from 'next/link';
import { ArrowRight, BarChart3, BookOpen, ChevronRight, CircleAlert, LayoutDashboard, ShieldCheck, Sparkles } from 'lucide-react';

const quickActions = [
  { title: 'Services', label: 'Explore Arcus services', description: 'Access copy trading, MAM, prop-firm and algorithmic trading services.', href: '/services', icon: Sparkles, accent: 'green' },
  { title: 'Performance Statistics', label: 'Review performance', description: 'View strategy performance by supported trading environment.', href: '/performance-statistics', icon: BarChart3, accent: 'green' },
  { title: 'Risk Analysis', label: 'Understand risk', description: 'Review drawdown, exposure, volatility and risk information.', href: '/risk-analysis', icon: CircleAlert, accent: 'red' },
];

const featured = [
  ['Social Trading', 'MT4 · MT5 · cTrader · Synthetic', '/services'],
  ['Crypto Copy Trading', 'Supported crypto exchange environments', '/services'],
  ['MAM Trading', 'Structured multi-account management', '/services'],
  ['Prop Firm A.T', 'Challenge and funded-account workflows', '/services'],
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
      <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[74px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link href="/dashboard" className="flex items-center gap-3" aria-label="Arcus Strategy Home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white shadow-sm">A</span>
            <span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span>
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#53605a] lg:flex">
            <Link className="text-[#087f3f]" href="/dashboard">Home</Link>
            <Link className="hover:text-[#087f3f]" href="/services">Services</Link>
            <Link className="hover:text-[#087f3f]" href="/performance-statistics">Performance</Link>
            <Link className="hover:text-[#087f3f]" href="/risk-analysis">Risk Analysis</Link>
            <Link className="hover:text-[#087f3f]" href="/education">Education</Link>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-[#dbe7df] bg-[#f4faf6] px-3 py-1.5 text-[11px] font-bold text-[#087f3f] sm:inline-flex">CUSTOMER ACCOUNT</span>
            <Link href="/" className="rounded-lg border border-[#dfe5e1] bg-white px-3.5 py-2 text-[12px] font-bold text-[#45514b] hover:border-[#087f3f] hover:text-[#087f3f]">Sign out</Link>
          </div>
        </div>
      </header>

      <section className="border-b border-[#e4e9e6] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-16">
          <div>
            <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-[#087f3f]"><LayoutDashboard size={14} /> Customer Home</div>
            <h1 className="max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-5xl lg:text-6xl">Your gateway to the <span className="text-[#087f3f]">Arcus Strategy</span> ecosystem.</h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#68726e]">Welcome back. From this authenticated workspace you can explore available services, review verified performance information and understand the risk characteristics of each strategy before taking the next step.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center gap-2 rounded-lg bg-[#087f3f] px-5 py-3 text-[13px] font-extrabold text-white shadow-lg shadow-[#087f3f]/15 hover:bg-[#066b35]">Explore Services <ArrowRight size={16} /></Link>
              <Link href="/risk-analysis" className="inline-flex items-center gap-2 rounded-lg border border-[#d7e0da] bg-white px-5 py-3 text-[13px] font-extrabold text-[#26302b] hover:border-[#087f3f] hover:text-[#087f3f]">Review Risk</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[#dfe7e2] bg-[#101714] p-6 text-white shadow-[0_25px_60px_rgba(16,40,27,.13)]">
            <div className="flex items-center justify-between"><div><span className="text-[9px] font-black tracking-[.2em] text-[#65d995]">ARCUS CONTROL CENTRE</span><h2 className="mt-2 text-lg font-extrabold">System overview</h2></div><span className="rounded-full border border-[#65d995]/25 bg-[#65d995]/10 px-3 py-1.5 text-[9px] font-black tracking-wider text-[#65d995]">READY</span></div>
            <div className="my-6 h-px bg-white/10" />
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[.035] p-4"><span className="text-[9px] font-bold tracking-wider text-[#8d9993]">ACCOUNT CONTROL</span><strong className="mt-2 block text-sm">Your capital stays with your broker.</strong></div>
              <div className="rounded-xl border border-white/10 bg-white/[.035] p-4"><span className="text-[9px] font-bold tracking-wider text-[#8d9993]">EXECUTION</span><strong className="mt-2 block text-sm">Replicate qualifying Arcus trades.</strong></div>
              <div className="rounded-xl border border-white/10 bg-white/[.035] p-4"><span className="text-[9px] font-bold tracking-wider text-[#8d9993]">RISK</span><strong className="mt-2 block text-sm">Review risk before choosing a service.</strong></div>
              <div className="rounded-xl border border-white/10 bg-white/[.035] p-4"><span className="text-[9px] font-bold tracking-wider text-[#8d9993]">ACCESS</span><strong className="mt-2 block text-sm">Services are available inside your account.</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-6 flex items-end justify-between gap-5"><div><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">QUICK ACCESS</span><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Everything you need, in one workspace.</h2></div><Link href="/services" className="hidden text-[12px] font-extrabold text-[#087f3f] sm:block">View all services →</Link></div>
        <div className="grid gap-4 md:grid-cols-3">
          {quickActions.map(({ title, label, description, href, icon: Icon, accent }) => <Link key={title} href={href} className="group rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#b9ddc7] hover:shadow-xl">
            <div className={`grid h-11 w-11 place-items-center rounded-xl ${accent === 'red' ? 'bg-[#fff0f1] text-[#d52f3f]' : 'bg-[#edf8f1] text-[#087f3f]'}`}><Icon size={19} /></div>
            <span className="mt-7 block text-[10px] font-black tracking-[.16em] text-[#68726e]">{label}</span><h3 className="mt-2 text-lg font-extrabold">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#68726e]">{description}</p><span className="mt-5 inline-flex items-center gap-1 text-[12px] font-extrabold text-[#087f3f]">Open <ChevronRight size={14} className="transition group-hover:translate-x-1" /></span>
          </Link>)}
        </div>
      </section>

      <section className="border-y border-[#e4e9e6] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
          <div className="flex items-end justify-between"><div><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">FEATURED SERVICES</span><h2 className="mt-2 text-2xl font-black tracking-tight">Choose how you want to access Arcus.</h2></div><Link href="/services" className="text-[12px] font-extrabold text-[#087f3f]">All services →</Link></div>
          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {featured.map(([title, meta, href], i) => <Link href={href} key={title} className="rounded-xl border border-[#e2e8e4] bg-[#fbfcfb] p-5 hover:border-[#b9ddc7] hover:bg-white"><span className="text-[9px] font-black tracking-[.18em] text-[#9aa39f]">0{i + 1}</span><h3 className="mt-5 text-[15px] font-extrabold">{title}</h3><p className="mt-2 text-[11px] leading-5 text-[#68726e]">{meta}</p></Link>)}
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-4 lg:px-10">
          <div className="md:col-span-2"><strong className="text-sm tracking-[.15em]">ARCUS STRATEGY</strong><p className="mt-3 max-w-md text-[11px] leading-5 text-[#68726e]">Institutional-grade algorithmic replication, trade mirroring protocols and risk-aware trading technology.</p></div>
          <div><h3 className="text-[11px] font-black uppercase tracking-wider">Products</h3><div className="mt-4 space-y-2 text-[11px] text-[#68726e]"><Link className="block hover:text-[#087f3f]" href="/products">Product information</Link><Link className="block hover:text-[#087f3f]" href="/services">Services</Link></div></div>
          <div><h3 className="text-[11px] font-black uppercase tracking-wider">Legal</h3><div className="mt-4 space-y-2 text-[11px] text-[#68726e]"><Link className="block hover:text-[#087f3f]" href="/legal">Legal & Governance</Link><Link className="block hover:text-[#087f3f]" href="/risk-analysis">Risk Disclosure</Link></div></div>
        </div>
        <div className="border-t border-[#e4e9e6] px-5 py-5 text-center text-[10px] text-[#7b8580]">© 2026 Arcus Strategy Ltd. Registration No. HE 492810. All rights reserved.</div>
      </footer>
    </main>
  );
}

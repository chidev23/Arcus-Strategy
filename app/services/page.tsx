import Link from 'next/link';
import { ArrowRight, BarChart3, Bot, ChartNoAxesCombined, ChevronRight, CircleDollarSign, Gauge, Layers3, Server, Waypoints } from 'lucide-react';

const services = [
  ['Social Trading', 'Replicate qualifying Arcus trades through supported MT4, MT5, cTrader and Synthetic broker environments.', '01', BarChart3],
  ['Crypto Copy Trading', 'Follow supported crypto strategies through selected exchange environments, with the account remaining under your control.', '02', CircleDollarSign],
  ['MAM Trading', 'Structured multi-account management for customers seeking a professional managed-account framework.', '03', Layers3],
  ['Prop Firm A.T', 'Technology and operational support for eligible prop-firm challenge and funded-account workflows.', '04', Gauge],
  ['ServerLess Algotrading', 'Automated execution workflows designed to operate without requiring a local trading workstation.', '05', Server],
  ['TradingView Indicator', 'TradingView-based technical analysis tools designed to provide structured market signals.', '06', ChartNoAxesCombined],
  ['TradingView Strategy', 'Strategy automation built around TradingView alerts and supported execution integrations.', '07', Waypoints],
  ['TradingView Bridge', 'Connect TradingView webhook events with supported automated execution workflows.', '08', Bot],
  ['Retail Tradar', 'Retail-focused trading technology for systematic execution, automation and structured workflows.', '09', BarChart3],
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
      <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[74px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#53605a] lg:flex"><Link href="/dashboard" className="hover:text-[#087f3f]">Home</Link><Link href="/services" className="text-[#087f3f]">Services</Link><Link href="/performance-statistics" className="hover:text-[#087f3f]">Performance</Link><Link href="/risk-analysis" className="hover:text-[#087f3f]">Risk Analysis</Link></nav>
          <Link href="/dashboard" className="rounded-lg border border-[#dfe5e1] px-4 py-2 text-[12px] font-bold text-[#45514b] hover:border-[#087f3f] hover:text-[#087f3f]">Home</Link>
        </div>
      </header>

      <section className="border-b border-[#e4e9e6] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="max-w-3xl"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">AUTHENTICATED SERVICES</span><h1 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">Select a service built for your trading workflow.</h1><p className="mt-5 text-[15px] leading-7 text-[#68726e]">These services are available inside the authenticated Arcus Strategy application. Open a service to review what it does, who it is for, how it works, supported platforms, risk considerations and the next step.</p></div>
          <div className="mt-7 flex flex-wrap gap-2 text-[10px] font-bold text-[#59645f]"><span className="rounded-full border border-[#dce6e0] bg-[#f6faf7] px-3 py-2">Trade replication</span><span className="rounded-full border border-[#dce6e0] bg-[#f6faf7] px-3 py-2">Algorithmic execution</span><span className="rounded-full border border-[#dce6e0] bg-[#f6faf7] px-3 py-2">Risk-aware controls</span><span className="rounded-full border border-[#dce6e0] bg-[#f6faf7] px-3 py-2">Multi-asset infrastructure</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(([title, description, number, Icon]) => <Link key={title} href={`/services/${title.toLowerCase().replaceAll(' ', '-').replace('prop-firm-a.t', 'prop-firm-at')}`} className="group flex min-h-[270px] flex-col rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#add8bd] hover:shadow-xl">
            <div className="flex items-center justify-between"><span className="text-[9px] font-black tracking-[.18em] text-[#9aa39f]">SERVICE {number}</span><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><Icon size={18} /></span></div>
            <h2 className="mt-9 text-xl font-black tracking-tight">{title}</h2><p className="mt-3 text-[13px] leading-6 text-[#68726e]">{description}</p>
            <span className="mt-auto flex items-center gap-1 pt-7 text-[12px] font-extrabold text-[#087f3f]">Explore service <ChevronRight size={15} className="transition group-hover:translate-x-1" /></span>
          </Link>)}
        </div>
      </section>

      <section className="border-t border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10"><div className="grid gap-5 md:grid-cols-3"><div><span className="text-[9px] font-black tracking-[.18em] text-[#087f3f]">01</span><h3 className="mt-2 text-sm font-extrabold">Choose</h3><p className="mt-1 text-[11px] leading-5 text-[#68726e]">Select the service that matches your objective.</p></div><div><span className="text-[9px] font-black tracking-[.18em] text-[#087f3f]">02</span><h3 className="mt-2 text-sm font-extrabold">Review</h3><p className="mt-1 text-[11px] leading-5 text-[#68726e]">Read the service information, limitations and risk disclosures.</p></div><div><span className="text-[9px] font-black tracking-[.18em] text-[#087f3f]">03</span><h3 className="mt-2 text-sm font-extrabold">Start</h3><p className="mt-1 text-[11px] leading-5 text-[#68726e]">Follow the service-specific onboarding and activation process.</p></div></div></div></section>
    </main>
  );
}

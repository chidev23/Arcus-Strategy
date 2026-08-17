import Link from 'next/link';
import { ArrowRight, BarChart3, Bot, CircleDollarSign, Gauge, Layers3, Server, Waypoints } from 'lucide-react';

const products = [
  ['Social Trading', 'Algorithmic trade replication across supported brokerage environments.', BarChart3, null],
  ['Crypto Copy Trading', 'Crypto strategy replication through supported exchange environments.', CircleDollarSign, null],
  ['MAM Trading', 'Structured multi-account management infrastructure.', Layers3, null],
  ['Prop Firm A.T', 'Automated trading technology for eligible prop-firm workflows.', Gauge, null],
  ['ServerLess Algotrading', 'Automation infrastructure designed without a local workstation.', Server, null],
  ['TradingView Indicator', 'TradingView analysis and signal technology.', Waypoints, '/products/tradingview-indicator'],
  ['TradingView Strategy', 'TradingView strategy automation and execution workflows.', Bot, '/products/tradingview-strategy'],
  ['TradingView Bridge', 'Webhook connectivity for supported automated execution workflows.', ArrowRight, null],
  ['Retail Tradar', 'Retail-focused systematic trading technology.', BarChart3, null],
] as const;

export default function ProductsPage() {
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]"><header className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto flex min-h-[74px] max-w-[1200px] items-center justify-between px-5 sm:px-8"><Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><Link href="/" className="text-[12px] font-bold text-[#087f3f]">← Home</Link></div></header><section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">PRODUCT INFORMATION</span><h1 className="mt-3 text-4xl font-black tracking-[-.04em]">The Arcus Strategy product ecosystem.</h1><p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#68726e]">Product information is available here for reference. Customer service activation and trading workflows remain inside the authenticated application.</p><div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{products.map(([title, description, Icon, href]) => { const card = <article className={`group rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm transition ${href ? 'hover:-translate-y-1 hover:border-[#add8bd] hover:shadow-lg' : ''}`}><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><Icon size={18}/></div><div className="mt-5 flex items-start justify-between gap-3"><h2 className="text-lg font-black">{title}</h2>{href && <ArrowRight size={17} className="mt-1 text-[#087f3f] transition group-hover:translate-x-1" />}</div><p className="mt-2 text-[12px] leading-6 text-[#68726e]">{description}</p>{href && <span className="mt-5 block text-[10px] font-black tracking-[.12em] text-[#087f3f]">VIEW PRODUCT</span>}</article>; return href ? <Link key={title} href={href}>{card}</Link> : <div key={title}>{card}</div>; })}</div></section></main>;
}

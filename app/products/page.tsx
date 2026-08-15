import Link from 'next/link';
import { ArrowLeft, ArrowRight, BarChart3, Bot, CircleDollarSign, Gauge, Layers3, Server, Waypoints } from 'lucide-react';

const products = [
  ['Social Trading', 'Algorithmic trade replication across supported brokerage environments.', BarChart3],
  ['Crypto Copy Trading', 'Crypto strategy replication through supported exchange environments.', CircleDollarSign],
  ['MAM Trading', 'Structured multi-account management infrastructure.', Layers3],
  ['Prop Firm A.T', 'Automated trading technology for eligible prop-firm workflows.', Gauge],
  ['ServerLess Algotrading', 'Automation infrastructure designed without a local workstation.', Server],
  ['TradingView Indicator', 'TradingView analysis and signal technology.', Waypoints],
  ['TradingView Strategy', 'TradingView strategy automation and execution workflows.', Bot],
  ['TradingView Bridge', 'Webhook connectivity for supported automated execution workflows.', ArrowRight],
  ['Retail Tradar', 'Retail-focused systematic trading technology.', BarChart3],
] as const;

export default function ProductsPage() {
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]"><header className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto flex min-h-[74px] max-w-[1200px] items-center justify-between px-5 sm:px-8"><Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><Link href="/dashboard" className="text-[12px] font-bold text-[#087f3f]">← Home</Link></div></header><section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">PRODUCT INFORMATION</span><h1 className="mt-3 text-4xl font-black tracking-[-.04em]">The Arcus Strategy product ecosystem.</h1><p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#68726e]">Product information is available here for reference. Customer service activation and trading workflows remain inside the authenticated application.</p><div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{products.map(([title, description, Icon]) => <article key={title} className="rounded-2xl border border-[#dfe7e2] bg-white p-6"><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><Icon size={18}/></div><h2 className="mt-5 text-lg font-black">{title}</h2><p className="mt-2 text-[12px] leading-6 text-[#68726e]">{description}</p></article>)}</div></section></main>;
}

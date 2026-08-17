import Link from 'next/link';
import { ArrowRight, BarChart3, Bot, ChartNoAxesCombined, CircleDollarSign, Gauge, Layers3, Server, Waypoints } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import CustomerMenu from '../../components/CustomerMenu';

type Service = { title: string; description: string; href: string; number: string; Icon: LucideIcon };

const services: Service[] = [
  { title: 'Copy Trading', description: 'Copy qualifying Arcus trades through your own supported broker account. Choose your execution platform first, then the broker.', href: '/services/social-trading', number: '01', Icon: BarChart3 },
  { title: 'PAMM Trading', description: 'Access the Arcus PAMM environment through supported MT4 and MT5 broker structures.', href: '/services/pamm-trading', number: '02', Icon: CircleDollarSign },
  { title: 'MAM Trading', description: 'Access the Arcus MAM environment through supported MT4 and MT5 broker structures.', href: '/services/mam-trading', number: '03', Icon: Layers3 },
  { title: 'ServerLess Algotrading', description: 'Automated execution infrastructure designed to operate without requiring you to maintain a local trading workstation.', href: '/services/serverless-algotrading', number: '04', Icon: Server },
  { title: 'TradingView Indicator', description: 'TradingView-based technical analysis technology designed for structured market decision support.', href: '/services/tradingview-indicator', number: '05', Icon: ChartNoAxesCombined },
  { title: 'TradingView Strategy', description: 'Strategy automation workflows built around TradingView alerts and supported execution integrations.', href: '/services/tradingview-strategy', number: '06', Icon: Waypoints },
  { title: 'TradingView Bridge', description: 'Connect TradingView webhook events with supported automated execution workflows.', href: '/services/tradingview-bridge', number: '07', Icon: Bot },
  { title: 'Retail Tradar', description: 'Retail-focused trading technology for systematic execution, automation and structured workflows.', href: '/services/retail-tradar', number: '08', Icon: BarChart3 },
  { title: 'Prop Firm A.T', description: 'Professional account-trading service for selected prop firm challenges and funded accounts, structured around applicable trading rules.', href: '/services/prop-firm-at', number: '09', Icon: Gauge },
];

export default function ServicesPage() {
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
    <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl"><div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10"><Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><CustomerMenu /></div></header>
    <section className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">SERVICES HUB</span><h1 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">Choose the Arcus service you want to explore.</h1><p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#68726e]">Each service is an autonomous workflow. Copy trading, PAMM, MAM and Prop Firm A.T are organised separately so each account environment can be reviewed without mixing performance, risk or onboarding information.</p></div></section>
    <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{services.map(({ title, description, href, number, Icon }) => <Link key={title} href={href} className="group flex min-h-[270px] flex-col rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#add8bd] hover:shadow-xl"><div className="flex items-center justify-between"><span className="text-[9px] font-black tracking-[.18em] text-[#9aa39f]">SERVICE {number}</span><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><Icon size={18} /></span></div><div className="mt-9 flex items-start justify-between gap-4"><h2 className="text-xl font-black tracking-tight">{title}</h2></div><p className="mt-3 text-[13px] leading-6 text-[#68726e]">{description}</p><span className="mt-auto flex items-center gap-1 pt-7 text-[12px] font-extrabold text-[#087f3f]">Explore service <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span></Link>)}</div></section>
  </main>;
}

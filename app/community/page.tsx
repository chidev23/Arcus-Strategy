'use client';

import Link from 'next/link';
import CustomerMenu from '../../components/CustomerMenu';
import { ArrowRight, Bot, Copy, MessagesSquare, Server, ShieldCheck, Users } from 'lucide-react';

const communities = [
  { href: '/community/copy-trading', title: 'Copy Trading Community', description: 'Discuss copy-trading experiences, onboarding, brokers and execution with other Arcus customers.', icon: Copy, tag: 'COPY TRADING' },
  { href: '/community/pamm', title: 'PAMM Community', description: 'A dedicated space for PAMM customers to discuss accounts, onboarding and the Arcus PAMM experience.', icon: Users, tag: 'PAMM' },
  { href: '/community/mam', title: 'MAM Community', description: 'Connect with other MAM customers and discuss the service, account management and updates.', icon: MessagesSquare, tag: 'MAM' },
  { href: '/community/serverless-algo-trading', title: 'Serverless AlgoTrading Community', description: 'Share experiences, ask questions and discuss algorithm and hosting workflows.', icon: Server, tag: 'SERVERLESS ALGOTRADING' },
  { href: '/community/propfirm-assisted-trading', title: 'PropFirm Assisted Trading Community', description: 'A dedicated community for customers using Arcus PropFirm Assisted Trading.', icon: ShieldCheck, tag: 'PROP AT' },
];

export default function CommunityPage() {
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
    <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl"><div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10"><Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><CustomerMenu/></div></header>
    <section className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">COMMUNITY HUB</span><h1 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.045em] sm:text-5xl">Connect with the Arcus community.</h1><p className="mt-5 max-w-3xl text-[14px] leading-7 text-[#68726e]">Choose a dedicated community below. Each area has its own discussion space so conversations stay relevant to the service you use.</p></div></section>
    <section className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14"><div className="mb-7 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><Bot size={18}/></span><div><h2 className="text-lg font-black">Choose your community</h2><p className="text-[12px] text-[#68726e]">Each community opens as its own discussion room.</p></div></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{communities.map(({href,title,description,icon:Icon,tag})=><Link key={href} href={href} className="group flex min-h-[220px] flex-col rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#add8bd] hover:shadow-xl"><div className="flex items-center justify-between"><span className="text-[9px] font-black tracking-[.18em] text-[#9aa39f]">{tag}</span><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><Icon size={18}/></span></div><h2 className="mt-8 text-xl font-black tracking-tight">{title}</h2><p className="mt-3 text-[13px] leading-6 text-[#68726e]">{description}</p><span className="mt-auto flex items-center gap-1 pt-6 text-[12px] font-extrabold text-[#087f3f]">Open community <ArrowRight size={15} className="transition group-hover:translate-x-1"/></span></Link>)}</div></section>
  </main>;
}

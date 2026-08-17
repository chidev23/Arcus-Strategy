import Link from 'next/link';
import { ArrowRight, Layers2, Split } from 'lucide-react';
import CustomerMenu from '../../../../components/CustomerMenu';

const types = [
  { title: 'One-Step Challenge', description: 'Designed for traders participating in one-step evaluation programs.', href: '/services/prop-firm-at/challenge/one-step', icon: Layers2 },
  { title: 'Two-Step Challenge', description: 'Ideal for traders taking traditional two-step evaluation programs.', href: '/services/prop-firm-at/challenge/two-step', icon: Split },
];

export default function ChallengePage() {
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
    <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl"><div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10"><Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><CustomerMenu /></div></header>
    <section className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">PROP FIRM A.T · CHALLENGE</span><h1 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">Select your challenge type.</h1><p className="mt-5 max-w-3xl text-[14px] leading-7 text-[#68726e]">Choose the evaluation structure that matches the challenge you intend to trade. Each option leads to its own account-size and service-fee packages.</p></div></section>
    <section className="mx-auto max-w-[1100px] px-5 py-12 sm:px-8 lg:py-16"><div className="grid gap-5 md:grid-cols-2">{types.map(({title,description,href,icon:Icon})=><Link key={title} href={href} className="group rounded-3xl border border-[#dfe7e2] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#add8bd] hover:shadow-xl"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#edf8f1] text-[#087f3f]"><Icon size={24}/></span><h2 className="mt-7 text-2xl font-black">{title}</h2><p className="mt-3 text-[14px] leading-7 text-[#68726e]">{description}</p><span className="mt-7 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#087f3f]">View packages <ArrowRight size={15}/></span></Link>)}</div></section>
  </main>;
}

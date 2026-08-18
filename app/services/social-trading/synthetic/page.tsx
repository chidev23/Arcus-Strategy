import Link from 'next/link';
import { ArrowRight, Gauge } from 'lucide-react';
import CustomerMenu from '../../../../components/CustomerMenu';
import { singleBrokers } from '../../../../lib/broker-config';

export default function SyntheticPage(){
  const b=singleBrokers.synthetic;
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
    <header className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10"><Link href="/services/social-trading" className="font-black text-[#087f3f]">← Copy Trading</Link><CustomerMenu/></div></header>
    <section className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:px-10"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">COPY TRADING / SYNTHETIC INDICES</span><h1 className="mt-3 text-4xl font-black">Choose your synthetic copy-trading environment.</h1><p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#68726e]">Review the supported synthetic-index environment, then open its broker-specific onboarding, performance and risk information.</p></div></section>
    <section className="mx-auto max-w-[900px] px-5 py-10 sm:px-8 lg:px-10"><Link href={`/services/social-trading/synthetic/${b.slug}`} className="block rounded-2xl border border-[#dfe7e2] bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl"><Gauge className="text-[#087f3f]"/><h2 className="mt-6 text-2xl font-black">{b.name}</h2><p className="mt-2 text-[12px] leading-6 text-[#68726e]">Explore the supported synthetic-index environment and review the account requirements before connecting.</p><span className="mt-6 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#087f3f]">Open broker page <ArrowRight size={15}/></span></Link></section>
  </main>
}

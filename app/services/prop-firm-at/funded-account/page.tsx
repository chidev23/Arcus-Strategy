import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CustomerMenu from '../../../../components/CustomerMenu';

const packages = [
  { size: '$5,000 – $20,000', fee: '$100' },
  { size: 'Above $20,000 – $50,000', fee: '$200' },
  { size: 'Above $50,000 – $200,000', fee: '$300' },
  { size: 'Above $200,000', fee: 'Custom Pricing', custom: true },
];

export default function FundedAccountPage() {
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
    <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl"><div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10"><Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><CustomerMenu /></div></header>
    <section className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">PROP FIRM A.T · FUNDED ACCOUNT</span><h1 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">Choose your funded account size.</h1><p className="mt-5 max-w-3xl text-[14px] leading-7 text-[#68726e]">Already have a funded account? Select the applicable service package for professional account management under the agreed service terms.</p></div></section>
    <section className="mx-auto max-w-[1250px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{packages.map(({size,fee,custom})=><article key={size} className="flex flex-col rounded-3xl border border-[#dfe7e2] bg-white p-7 shadow-sm"><span className="text-[9px] font-black tracking-[.18em] text-[#9aa39f]">FUNDED ACCOUNT</span><h2 className="mt-5 text-xl font-black">{size}</h2><div className="mt-8 border-y border-[#edf0ee] py-5"><span className="text-[10px] font-black uppercase tracking-wider text-[#68726e]">Service Fee</span><strong className="mt-1 block text-3xl font-black">{fee}</strong></div><ul className="mt-6 space-y-3 text-[12px] text-[#68726e]"><li className="flex gap-2"><Check size={15} className="shrink-0 text-[#087f3f]"/>Ongoing management request</li><li className="flex gap-2"><Check size={15} className="shrink-0 text-[#087f3f]"/>Post-payment account submission</li><li className="flex gap-2"><Check size={15} className="shrink-0 text-[#087f3f]"/>Appointment and onboarding workflow</li></ul><Link href={custom ? '/about?contact=sales' : `/services/prop-firm-at/request?challenge=funded&account=${encodeURIComponent(size)}&fee=${encodeURIComponent(fee)}`} className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-[12px] font-black ${custom ? 'border border-[#087f3f] text-[#087f3f]' : 'bg-[#087f3f] text-white'}`}>{custom ? 'Contact Sales' : 'Request Service'} <ArrowRight size={15}/></Link></article>)}</div></section>
  </main>;
}

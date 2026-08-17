import Link from 'next/link';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';
import CustomerMenu from '../../../../components/CustomerMenu';

export default async function AccountSubmissionPage({ searchParams }: { searchParams: Promise<{ challenge?: string; account?: string; fee?: string; payment?: string }> }) {
  const params = await searchParams;
  const challenge = params.challenge || 'funded';
  const account = params.account || 'Selected account size';
  const paid = params.payment === 'successful';

  if (!paid) return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]"><section className="mx-auto max-w-[700px] px-5 py-20 text-center"><h1 className="text-3xl font-black">Payment confirmation required</h1><p className="mt-4 text-sm leading-7 text-[#68726e]">Complete the checkout stage before submitting trading account details.</p><Link href="/services/prop-firm-at" className="mt-7 inline-flex rounded-xl bg-[#087f3f] px-5 py-3 text-xs font-black text-white">Return to Prop Firm A.T</Link></section></main>;

  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
    <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl"><div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10"><Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><CustomerMenu /></div></header>
    <section className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1000px] px-5 py-12 sm:px-8 lg:px-10"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">PAYMENT SUCCESSFUL · ACCOUNT SUBMISSION</span><h1 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">Submit your trading account details.</h1><p className="mt-5 max-w-3xl text-[14px] leading-7 text-[#68726e]">Your selected package is <strong>{account}</strong>. Complete the secure onboarding form so the Arcus team can review and assign the request.</p></div></section>
    <section className="mx-auto max-w-[1000px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14"><form className="rounded-3xl border border-[#dfe7e2] bg-white p-6 shadow-sm sm:p-9">
      <div className="mb-8 flex gap-3 rounded-2xl bg-[#edf8f1] p-4"><ShieldCheck className="mt-0.5 shrink-0 text-[#087f3f]" size={20}/><p className="text-[12px] leading-6 text-[#3f5147]">Only submit credentials through the official Arcus Strategy application. The production backend must encrypt, restrict and audit credential storage before this form is enabled for real customer submissions.</p></div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-[11px] font-bold">Trading Platform<select name="platform" className="mt-2 w-full rounded-xl border border-[#dfe7e2] bg-white px-4 py-3 text-sm"><option>MT4</option><option>MT5</option></select></label>
        <label className="text-[11px] font-bold">Account Number<input name="accountNumber" required className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-sm" placeholder="Trading account number"/></label>
        <label className="text-[11px] font-bold">Trading Password<div className="relative mt-2"><LockKeyhole className="absolute left-3 top-3.5 text-[#9aa39f]" size={16}/><input name="tradingPassword" type="password" required autoComplete="off" className="w-full rounded-xl border border-[#dfe7e2] py-3 pl-10 pr-4 text-sm" placeholder="Trading password"/></div></label>
        <label className="text-[11px] font-bold">Broker / Prop Firm<input name="broker" required className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-sm" placeholder="e.g. FTMO"/></label>
        <label className="text-[11px] font-bold">Server Name<input name="server" className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-sm" placeholder="Broker / server name"/></label>
        <label className="text-[11px] font-bold">Account Size<input value={account} readOnly className="mt-2 w-full rounded-xl border border-[#e8ece9] bg-[#f7f9f8] px-4 py-3 text-sm text-[#68726e]"/></label>
        <label className="text-[11px] font-bold">Challenge Type<input value={challenge.replace('-', ' ')} readOnly className="mt-2 w-full rounded-xl border border-[#e8ece9] bg-[#f7f9f8] px-4 py-3 text-sm capitalize text-[#68726e]"/></label>
        <label className="text-[11px] font-bold">Prop Firm Name<input name="propFirm" required className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-sm" placeholder="Prop firm name"/></label>
      </div>
      <label className="mt-6 block text-[11px] font-bold">Special Instructions <span className="font-normal text-[#9aa39f]">(Optional)</span><textarea name="notes" rows={5} className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-sm" placeholder="Anything the Arcus team should know..."/></label>
      <label className="mt-6 flex gap-3 rounded-2xl border border-[#e3e9e5] bg-[#fbfcfb] p-4 text-[11px] leading-5 text-[#4f5c55]"><input type="checkbox" required className="mt-1"/>I confirm that the trading credentials provided are correct and authorize Arcus Strategy to manage this account according to the applicable service terms.</label>
      <button type="button" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#087f3f] px-5 py-3.5 text-[12px] font-black text-white">Submit Account Details <ArrowRight size={15}/></button>
      <p className="mt-3 text-center text-[10px] text-[#9aa39f]">Submission API and admin workflow will be connected when the production backend is enabled.</p>
    </form></section>
  </main>;
}

import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ShieldCheck, Target, WalletCards } from 'lucide-react';
import CustomerMenu from '../../../components/CustomerMenu';

const services = [
  {
    title: 'Challenge',
    description: 'Start a new Prop Firm challenge under the Arcus Strategy Account Trading service.',
    href: '/services/prop-firm-at/challenge',
    icon: Target,
    tone: 'green',
  },
  {
    title: 'Funded Account',
    description: 'Already have a funded account? Request professional management structured around your prop firm rules.',
    href: '/services/prop-firm-at/funded-account',
    icon: BriefcaseBusiness,
    tone: 'blue',
  },
];

const workflow = [
  'Select a service and package',
  'Proceed through checkout',
  'After successful payment, submit the trading account details',
  'Arcus reviews the request and schedules an appointment',
  'Trading begins according to the agreed service and risk parameters',
];

export default function PropFirmATPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
      <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span>
            <span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span>
          </Link>
          <CustomerMenu />
        </div>
      </header>

      <section className="border-b border-[#e4e9e6] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">PROP FIRM A.T · ACCOUNT TRADING</span>
            <h1 className="mt-4 text-4xl font-black tracking-[-.045em] sm:text-5xl lg:text-6xl">Pass your Prop Firm challenge with professional account management.</h1>
            <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#68726e] sm:text-base">Arcus Strategy’s Prop Firm A.T service is designed for traders who want professional management of a challenge or funded account while operating within the selected prop firm’s trading objectives and risk rules.</p>
            <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#68726e]">Whether you are starting a new evaluation or already hold a funded account, the workflow separates service selection, payment, account submission, review and trading commencement.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mb-7"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">CHOOSE YOUR SERVICE</span><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Select the account trading path.</h2></div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map(({ title, description, href, icon: Icon, tone }) => (
            <Link key={title} href={href} className="group rounded-3xl border border-[#dfe7e2] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#add8bd] hover:shadow-xl sm:p-9">
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${tone === 'green' ? 'bg-[#edf8f1] text-[#087f3f]' : 'bg-[#eef5ff] text-[#315f9b]'}`}><Icon size={23}/></div>
              <h3 className="mt-7 text-2xl font-black">{title}</h3>
              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#68726e]">{description}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#087f3f]">{title === 'Challenge' ? 'Request Challenge' : 'Request Funded Account Service'} <ArrowRight size={15}/></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e4e9e6] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">SERVICE WORKFLOW</span><h2 className="mt-2 text-2xl font-black sm:text-3xl">From package selection to trading.</h2><p className="mt-4 max-w-xl text-[14px] leading-7 text-[#68726e]">The customer journey is structured so payment and account onboarding are separate stages. Account details are requested only after the relevant order has been successfully paid.</p></div>
            <div className="space-y-3">
              {workflow.map((item, index) => <div key={item} className="flex gap-4 rounded-2xl border border-[#e3e9e5] bg-[#fbfcfb] p-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#edf8f1] text-[11px] font-black text-[#087f3f]">{index + 1}</span><span className="pt-1 text-[13px] font-semibold leading-5">{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6"><ShieldCheck className="text-[#087f3f]" size={21}/><h3 className="mt-5 text-base font-black">Rule-aware management</h3><p className="mt-2 text-[12px] leading-6 text-[#68726e]">Service execution is intended to follow the selected prop firm’s applicable objectives, limits and trading rules.</p></div>
          <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6"><WalletCards className="text-[#087f3f]" size={21}/><h3 className="mt-5 text-base font-black">Clear service fees</h3><p className="mt-2 text-[12px] leading-6 text-[#68726e]">Pricing is presented before the customer enters the payment stage for the selected package.</p></div>
          <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6"><CheckCircle2 className="text-[#087f3f]" size={21}/><h3 className="mt-5 text-base font-black">Structured onboarding</h3><p className="mt-2 text-[12px] leading-6 text-[#68726e]">After payment, customers complete a dedicated account-submission workflow before trading begins.</p></div>
        </div>
      </section>

      <section className="border-t border-[#e4e9e6] bg-[#101512] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div><span className="text-[9px] font-black tracking-[.2em] text-[#77d69d]">IMPORTANT</span><p className="mt-2 max-w-3xl text-[12px] leading-6 text-white/65">Prop Firm A.T involves substantial trading risk. Passing a challenge or retaining a funded account is not guaranteed. Availability, pricing, eligibility and management terms may depend on the selected prop firm and applicable service terms.</p></div>
          <Link href="/services/prop-firm-at/challenge" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#087f3f] px-5 py-3 text-[12px] font-black text-white transition hover:bg-[#096b37]">Explore Challenge <ArrowRight size={15}/></Link>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';

const legal = [
  ['Terms & Conditions', 'General terms governing use of Arcus Strategy services and application.'],
  ['Privacy Policy', 'How personal information is collected, used, retained and protected.'],
  ['Cookie Policy', 'Information about cookies and similar technologies used by the website.'],
  ['Risk Disclosure', 'Material risks associated with leveraged and algorithmic trading.'],
  ['Disclaimer', 'Important limitations on information, performance and trading outcomes.'],
  ['Regulatory Status', 'Information about the nature and regulatory status of Arcus Strategy.'],
  ['Refund Policy', 'Applicable refund and cancellation terms for paid services.'],
  ['Subscription Terms', 'Terms applicable to recurring or subscription-based services.'],
  ['Copy Trading Terms', 'Terms governing trade replication and copy-trading relationships.'],
  ['TradingView Products Terms', 'Terms applicable to TradingView-based products and integrations.'],
  ['Prop Firm A.T Terms', 'Terms applicable to prop-firm automation and support services.'],
  ['AML & KYC Policy', 'Anti-money laundering and customer verification framework.'],
  ['Acceptable Use Policy', 'Permitted and prohibited use of Arcus Strategy systems.'],
  ['Intellectual Property', 'Ownership and permitted use of Arcus Strategy content and technology.'],
  ['Complaint Handling', 'Process for raising and resolving customer complaints.'],
  ['Contact & Legal Notices', 'Official legal and compliance contact information.'],
];

export default function LegalPage() {
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]"><header className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto flex min-h-[74px] max-w-[1200px] items-center justify-between px-5 sm:px-8"><Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><Link href="/dashboard" className="text-[12px] font-bold text-[#087f3f]">← Home</Link></div></header><section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">LEGAL & GOVERNANCE</span><h1 className="mt-3 text-4xl font-black tracking-[-.04em]">Policies, terms and legal notices.</h1><p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#68726e]">Review the legal framework applicable to Arcus Strategy. Individual documents should be read together with the service-specific terms and risk disclosures applicable to the product you use.</p><div className="mt-9 grid gap-3 md:grid-cols-2">{legal.map(([title, description], i) => <Link key={title} href="#" className="group rounded-xl border border-[#dfe7e2] bg-white p-5 hover:border-[#b9ddc7] hover:shadow-md"><div className="flex items-start justify-between gap-5"><div><span className="text-[9px] font-black tracking-[.18em] text-[#9aa39f]">LEGAL {String(i + 1).padStart(2, '0')}</span><h2 className="mt-2 text-sm font-extrabold">{title}</h2><p className="mt-1 text-[11px] leading-5 text-[#68726e]">{description}</p></div><span className="text-[#087f3f]">→</span></div></Link>)}</div></section></main>;
}

import Link from 'next/link';

const legal = [
  ['Terms & Conditions','Master agreement governing Arcus Strategy services.','terms-conditions'],
  ['Privacy Policy','Personal-data collection, use, retention, rights and security.','privacy-policy'],
  ['Cookie Policy','Necessary, functional, analytics, marketing and third-party cookies.','cookie-policy'],
  ['Risk Disclosure','Financial, market, leverage, execution and technology risks.','risk-disclosure'],
  ['Disclaimer','Limits of information, education, technology and performance claims.','disclaimer'],
  ['Regulatory Status','What Arcus Strategy is, is not, and the limits of its regulatory position.','regulatory-status'],
  ['Refund & Cancellation Policy','Refund windows, cancellations, chargebacks and digital services.','refund-policy'],
  ['Subscription Terms','Recurring plans, renewals, expiry, onboarding and suspension.','subscription-terms'],
  ['Copy Trading Terms','Trade replication, execution differences, fees and risk.','copy-trading-terms'],
  ['ServerLess Algotrading Terms','Hosted automation, onboarding, renewal and account access.','serverless-algotrading-terms'],
  ['TradingView Products Terms','Indicators, strategies, webhooks, subscriptions and licences.','tradingview-products-terms'],
  ['Prop Firm A.T Terms','Challenge accounts, funded accounts, appointments and credentials.','prop-firm-at-terms'],
  ['AML & KYC Policy','Identity verification, fraud prevention, sanctions and source of funds.','aml-kyc-policy'],
  ['Acceptable Use Policy','Prohibited conduct, scraping, abuse, impersonation and reselling.','acceptable-use-policy'],
  ['Intellectual Property Policy','Protection of Arcus algorithms, code, content, branding and AI systems.','intellectual-property'],
  ['Complaint Handling Policy','Complaint submission, investigation, escalation and resolution.','complaint-handling'],
  ['Contact & Legal Notices','Official legal-notice and account-communication guidance.','contact-legal-notices'],
];

const footerGroups=[
  {title:'Company',items:[['About Us','/about'],['Contact','/about'],['Careers','/about']]},
  {title:'Products',items:[['Social Trading','/services'],['Crypto Copy Trading','/services'],['MAM Trading','/services'],['Prop Firm A.T','/services'],['Trading Signals','/services'],['TradingView Indicator','/services'],['TradingView Strategy','/services']]},
  {title:'Resources',items:[['Performance','/performance-statistics'],['Risk Analysis','/risk-analysis'],['FAQ','/faq'],['Blog','/blog']]},
  {title:'Legal',items:legal.slice(0,16).map(x=>[x[0],`/legal/${x[2]}`])}
];

export default function LegalPage(){return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]"><header className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto flex min-h-[74px] max-w-[1280px] items-center justify-between px-5 sm:px-8"><Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link><Link href="/" className="text-[12px] font-bold text-[#087f3f]">← Website</Link></div></header><section className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">LEGAL & GOVERNANCE</span><h1 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Arcus Strategy Legal Centre</h1><p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#68726e]">The legal centre contains the agreements, policies, disclosures and notices that govern use of the Arcus Strategy website and services. Product-specific terms apply alongside the master Terms & Conditions.</p><div className="mt-9 grid gap-3 md:grid-cols-2">{legal.map(([title,description,slug],i)=><Link key={slug} href={`/legal/${slug}`} className="group rounded-xl border border-[#dfe7e2] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#b9ddc7] hover:shadow-md"><div className="flex items-start justify-between gap-5"><div><span className="text-[9px] font-black tracking-[.18em] text-[#9aa39f]">LEGAL {String(i+1).padStart(2,'0')}</span><h2 className="mt-2 text-sm font-extrabold">{title}</h2><p className="mt-1 text-[11px] leading-5 text-[#68726e]">{description}</p></div><span className="text-lg font-black text-[#087f3f]">→</span></div></Link>)}</div></section><footer className="border-t border-[#dfe7e2] bg-[#101714] text-white"><div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{footerGroups.map(g=><div key={g.title}><h3 className="text-[11px] font-black uppercase tracking-[.18em] text-[#65d995]">{g.title}</h3><div className="mt-4 space-y-2">{g.items.map(([label,href])=><Link key={label} href={href} className="block text-[11px] text-[#c5cfca] transition hover:text-white">{label}</Link>)}</div></div>)}</div><div className="mt-10 border-t border-white/10 pt-6 text-[10px] leading-5 text-[#89968f]">© {new Date().getFullYear()} Arcus Strategy. All rights reserved. Nothing on this website guarantees trading profits or future performance.</div></div></footer></main>;}
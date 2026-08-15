import Link from 'next/link';

const services = [
  ['Social Trading', 'Replicate Arcus trading strategies across MT4, MT5, cTrader and Synthetic Indices.', '/services/social-trading'],
  ['Crypto Copy Trading', 'Follow supported crypto strategies through selected exchange environments.', '/services/crypto-copy-trading'],
  ['MAM Trading', 'Participate in a professionally structured multi-account management environment.', '/services/mam-trading'],
  ['Prop Firm A.T', 'Automated trading technology and support for prop firm challenge and funded-account workflows.', '/services/prop-firm-at'],
  ['ServerLess Algotrading', 'Deploy automated trading workflows without maintaining a local trading workstation.', '/services/serverless-algotrading'],
  ['TradingView Indicator', 'Access TradingView-based technical signals and market analysis tools.', '/services/tradingview-indicator'],
  ['TradingView Strategy', 'Use strategy automation workflows built around TradingView alerts and execution integrations.', '/services/tradingview-strategy'],
  ['TradingView Bridge', 'Route TradingView webhook events into supported automated execution workflows.', '/services/tradingview-bridge'],
  ['Retail Tradar', 'Explore Arcus technology designed for retail traders and systematic execution workflows.', '/services/retail-tradar'],
];

export default function ServicesPage() {
  return <main className="min-h-screen bg-[var(--arcus-surface)]"><header className="border-b border-[var(--arcus-border)] bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"><Link href="/dashboard" className="text-lg font-bold">ARCUS <span className="text-[var(--arcus-green)]">STRATEGY</span></Link><Link href="/dashboard" className="text-sm font-semibold text-[var(--arcus-muted)]">Dashboard</Link></div></header><section className="mx-auto max-w-7xl px-6 py-14 lg:px-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--arcus-green)]">Authenticated services</p><h1 className="mt-3 text-4xl font-bold tracking-tight">Choose a service</h1><p className="mt-4 max-w-2xl leading-7 text-[var(--arcus-muted)]">Explore the Arcus Strategy services available to authenticated customers. Review the full service information before starting any application or trading workflow.</p><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.map(([title, description, href], i) => <Link key={title} href={href} className="group rounded-2xl border border-[var(--arcus-border)] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"><span className="text-xs font-bold text-[var(--arcus-green)]">SERVICE 0{i + 1}</span><h2 className="mt-4 text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-[var(--arcus-muted)]">{description}</p><span className="mt-6 inline-block text-sm font-bold text-[var(--arcus-green)]">View service →</span></Link>)}</div></section></main>;
}

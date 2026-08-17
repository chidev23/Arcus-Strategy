import Link from 'next/link';
import { ArrowRight, Bell, BarChart3, Check, ChartNoAxesCombined, Layers3, Smartphone, Zap } from 'lucide-react';
import CustomerMenu from '../../../components/CustomerMenu';

const features = [
  ['Automatic Buy & Sell Signal Alerts', 'Receive clear alerts when the indicator identifies qualifying market conditions.', Bell],
  ['Multi-Timeframe Market Analysis', 'Review market conditions across multiple TradingView timeframes.', Layers3],
  ['Forex, Crypto, Gold & Indices Support', 'Designed for analysis across multiple financial markets, including synthetic indices.', BarChart3],
  ['TradingView Web & Mobile Compatible', 'Use the indicator across supported TradingView web and mobile experiences.', Smartphone],
  ['Clean and Easy-to-Read Chart Signals', 'Visual signals are designed to keep your charts focused and readable.', ChartNoAxesCombined],
  ['Real-Time Signal Notifications', 'Stay informed with timely notifications when qualifying signals occur.', Zap],
  ['Designed for Manual and Assisted Trading', 'Use signals as part of your own discretionary or assisted trading workflow.', Check],
  ['Continuous Improvements & Updates', 'The indicator is designed to receive ongoing improvements and updates.', Layers3],
] as const;

export default function TradingViewIndicatorPage() {
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

      <section className="overflow-hidden border-b border-[#e4e9e6] bg-white">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-20">
          <div>
            <span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">TRADINGVIEW INDICATOR</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-.045em] sm:text-5xl lg:text-6xl">Professional Buy &amp; Sell Signals. Directly on Your TradingView Charts.</h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#68726e]">Enhance your market analysis with the Arcus Strategy TradingView Indicator, a proprietary indicator developed to identify high-probability buy and sell opportunities across multiple financial markets. Built using advanced algorithmic logic and technical analysis, the indicator delivers clear trading signals directly on your TradingView charts, helping traders identify potential market opportunities with greater confidence.</p>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#68726e]">Whether you trade Forex, Cryptocurrencies, Gold, Indices, or Synthetic Indices, the Arcus Strategy TradingView Indicator is designed to provide timely market insights while supporting disciplined trading and risk management.</p>
            <Link href="#unlock" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#087f3f] px-6 py-3.5 text-[12px] font-black text-white shadow-sm transition hover:bg-[#066c35]">Unlock the TradingView Indicator <ArrowRight size={16} /></Link>
          </div>
          <div className="relative rounded-3xl border border-[#dfe7e2] bg-[#f7f9f8] p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#dfe7e2] pb-4"><span className="text-[10px] font-black tracking-[.16em] text-[#68726e]">ARCUS / MARKET ANALYSIS</span><span className="rounded-full bg-[#edf8f1] px-3 py-1 text-[9px] font-black text-[#087f3f]">LIVE SIGNAL ENGINE</span></div>
            <div className="relative mt-5 h-[300px] overflow-hidden rounded-2xl bg-white p-4">
              <div className="absolute inset-0 opacity-40" style={{backgroundImage:'linear-gradient(#dfe7e2 1px, transparent 1px), linear-gradient(90deg, #dfe7e2 1px, transparent 1px)',backgroundSize:'42px 42px'}} />
              <svg viewBox="0 0 620 260" className="relative h-full w-full" preserveAspectRatio="none" aria-label="Illustrative market chart">
                <polyline points="0,190 45,175 85,195 125,145 170,160 210,105 255,125 300,80 345,100 390,62 435,88 480,48 525,70 570,35 620,55" fill="none" stroke="#087f3f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="300" cy="80" r="7" fill="#087f3f" /><circle cx="480" cy="48" r="7" fill="#c93642" />
                <text x="280" y="62" fontSize="13" fontWeight="800" fill="#087f3f">BUY</text><text x="462" y="30" fontSize="13" fontWeight="800" fill="#c93642">SELL</text>
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3"><div className="rounded-xl bg-white p-3"><span className="block text-[8px] font-black tracking-widest text-[#9aa39f]">SIGNALS</span><strong className="mt-1 block text-lg">BUY / SELL</strong></div><div className="rounded-xl bg-white p-3"><span className="block text-[8px] font-black tracking-widest text-[#9aa39f]">TIMEFRAME</span><strong className="mt-1 block text-lg">MULTI</strong></div><div className="rounded-xl bg-white p-3"><span className="block text-[8px] font-black tracking-widest text-[#9aa39f]">MARKETS</span><strong className="mt-1 block text-lg">MULTI</strong></div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-5"><div><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">SUPPORTED MARKETS</span><h2 className="mt-2 text-2xl font-black tracking-tight">Built for multi-market analysis.</h2></div><div className="flex flex-wrap gap-2">{['FOREX','CRYPTO','GOLD','INDICES','SYNTHETIC INDICES'].map(x=><span key={x} className="rounded-full border border-[#dfe7e2] bg-white px-4 py-2 text-[9px] font-black tracking-wider text-[#3e4944]">{x}</span>)}</div></div>
      </section>

      <section className="border-y border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">FEATURES</span><h2 className="mt-2 text-3xl font-black tracking-[-.03em]">Everything you need for a cleaner signal workflow.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(([title,description,Icon])=><div key={title} className="rounded-2xl border border-[#dfe7e2] bg-[#f7f9f8] p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><Icon size={18}/></span><h3 className="mt-5 text-[14px] font-black leading-5">{title}</h3><p className="mt-2 text-[12px] leading-5 text-[#68726e]">{description}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="grid gap-8 lg:grid-cols-2 lg:items-center"><div><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">WHY CHOOSE ARCUS STRATEGY?</span><h2 className="mt-3 text-3xl font-black tracking-[-.035em]">Advanced analysis. Clear signals. Disciplined execution.</h2></div><p className="text-[15px] leading-7 text-[#68726e]">Our TradingView Indicator combines advanced algorithmic analysis with structured technical methodologies to help traders identify potential market opportunities. It is built for traders who value consistency, disciplined execution, and clear visual trading signals without unnecessary chart clutter.</p></div></section>

      <section className="border-y border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">HOW IT FITS INTO YOUR TRADING</span><div className="mt-7 grid gap-4 md:grid-cols-3">{[['01','Analyse','The indicator processes market conditions using its algorithmic logic.'],['02','Identify','Potential buy and sell opportunities are displayed directly on the TradingView chart.'],['03','Execute','The trader decides whether and how to act based on their own risk management and trading plan.']].map(([n,t,d])=><div key={n} className="rounded-2xl border border-[#dfe7e2] p-6"><span className="text-[10px] font-black tracking-widest text-[#087f3f]">{n}</span><h3 className="mt-5 text-xl font-black">{t}</h3><p className="mt-2 text-[13px] leading-6 text-[#68726e]">{d}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10"><div className="rounded-2xl border border-[#f1c5ca] bg-[#fff6f7] p-6"><h2 className="text-sm font-black text-[#a62d38]">Important Risk Notice</h2><p className="mt-2 max-w-4xl text-[12px] leading-6 text-[#7d4b50]">No trading indicator can guarantee profitable results. Successful trading depends on market conditions, disciplined risk management, and proper execution.</p></div></section>

      <section id="unlock" className="mx-auto max-w-[1440px] px-5 pb-16 pt-4 sm:px-8 lg:px-10"><div className="rounded-3xl bg-[#101512] px-6 py-12 text-center text-white sm:px-10"><span className="text-[10px] font-black tracking-[.2em] text-[#7bd6a2]">TRADINGVIEW INDICATOR</span><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-[-.035em] sm:text-4xl">Ready to enhance your TradingView analysis?</h2><Link href="/services/tradingview-indicator/subscribe" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087f3f] px-6 py-3.5 text-[12px] font-black text-white transition hover:bg-[#0a9550]">Unlock the TradingView Indicator <ArrowRight size={16}/></Link></div></section>
    </main>
  );
}

import Link from 'next/link';
import { ArrowRight, BarChart3, Bell, ChartNoAxesCombined, Check, MonitorSmartphone, Layers3, ShieldCheck } from 'lucide-react';

const features = [
  'Automatic Buy & Sell Signal Alerts',
  'Multi-Timeframe Market Analysis',
  'Forex, Crypto, Gold & Indices Support',
  'TradingView Web & Mobile Compatible',
  'Clean and Easy-to-Read Chart Signals',
  'Real-Time Signal Notifications',
  'Designed for Manual and Assisted Trading',
  'Continuous Indicator Improvements and Updates',
];

export default function TradingViewIndicatorProductPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
      <header className="border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[74px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="Arcus Strategy home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span>
            <span>
              <strong className="block text-[15px] tracking-[.16em]">ARCUS</strong>
              <small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small>
            </span>
          </Link>
          <Link href="/products" className="text-[12px] font-bold text-[#087f3f] transition hover:text-[#c93642]">← Products</Link>
        </div>
      </header>

      <section className="overflow-hidden border-b border-[#e4e9e6] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-[10px] font-black tracking-[.2em] text-[#087f3f]">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#edf8f1]"><ChartNoAxesCombined size={17} /></span>
              TRADINGVIEW INDICATOR
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-.045em] sm:text-5xl lg:text-6xl lg:leading-[1.02]">Professional Buy &amp; Sell Signals. Directly on Your TradingView Charts.</h1>
            <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#68726e] sm:text-[16px]">
              Enhance your market analysis with the Arcus Strategy TradingView Indicator, a proprietary indicator developed to identify high-probability buy and sell opportunities across multiple financial markets. Built using advanced algorithmic logic and technical analysis, the indicator delivers clear trading signals directly on your TradingView charts, helping traders identify potential market opportunities with greater confidence.
            </p>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#68726e] sm:text-[16px]">
              Whether you trade Forex, Cryptocurrencies, Gold, Indices, or Synthetic Indices, the Arcus Strategy TradingView Indicator is designed to provide timely market insights while supporting disciplined trading and risk management.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/tradingview-indicator" className="inline-flex items-center gap-2 rounded-xl bg-[#087f3f] px-5 py-3.5 text-[12px] font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#066b35]">Unlock the TradingView Indicator <ArrowRight size={15} /></Link>
              <Link href="/" className="inline-flex items-center rounded-xl border border-[#dfe7e2] bg-white px-5 py-3.5 text-[12px] font-black text-[#101512] transition hover:border-[#add8bd]">Back to Arcus Strategy</Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[#edf8f1] blur-3xl" />
            <div className="relative w-full max-w-[460px] rounded-[28px] border border-[#dfe7e2] bg-[#fbfcfb] p-5 shadow-[0_24px_70px_rgba(16,21,18,.08)]">
              <div className="flex items-center justify-between border-b border-[#e7ece9] pb-4">
                <div>
                  <span className="text-[9px] font-black tracking-[.18em] text-[#9aa39f]">ARCUS INDICATOR</span>
                  <h2 className="mt-1 text-sm font-black">Market analysis interface</h2>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><BarChart3 size={16} /></span>
              </div>
              <div className="mt-5 grid h-56 place-items-center rounded-2xl border border-[#e4e9e6] bg-white">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center gap-2">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#edf8f1] text-[#087f3f]"><Check size={22} /></span>
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#fff1f2] text-[#c93642]"><Bell size={20} /></span>
                  </div>
                  <p className="mt-4 text-[11px] font-black tracking-[.14em] text-[#68726e]">BUY / SELL SIGNALS</p>
                  <p className="mt-1 text-[10px] text-[#9aa39f]">TradingView chart integration</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-[#f3f7f4] p-3"><Layers3 size={14} className="text-[#087f3f]" /><p className="mt-2 text-[9px] font-bold text-[#68726e]">Multi-timeframe</p></div>
                <div className="rounded-xl bg-[#f3f7f4] p-3"><MonitorSmartphone size={14} className="text-[#087f3f]" /><p className="mt-2 text-[9px] font-bold text-[#68726e]">Web &amp; Mobile</p></div>
                <div className="rounded-xl bg-[#f3f7f4] p-3"><ShieldCheck size={14} className="text-[#087f3f]" /><p className="mt-2 text-[9px] font-bold text-[#68726e]">Risk aware</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="max-w-2xl">
          <span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">FEATURES</span>
          <h2 className="mt-3 text-3xl font-black tracking-[-.035em] sm:text-4xl">Built for clear, structured chart analysis.</h2>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={feature} className="rounded-2xl border border-[#dfe7e2] bg-white p-5 shadow-sm">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#edf8f1] text-[#087f3f]"><Check size={15} /></span>
              <p className="mt-5 text-[13px] font-bold leading-6">{feature}</p>
              <span className="mt-5 block text-[9px] font-black tracking-[.18em] text-[#b0b8b4]">0{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e4e9e6] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">WHY CHOOSE ARCUS STRATEGY?</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-.035em] sm:text-4xl">Algorithmic analysis without unnecessary chart clutter.</h2>
            <p className="mt-5 text-[15px] leading-7 text-[#68726e]">
              Our TradingView Indicator combines advanced algorithmic analysis with structured technical methodologies to help traders identify potential market opportunities. It is built for traders who value consistency, disciplined execution, and clear visual trading signals without unnecessary chart clutter.
            </p>
          </div>
          <div className="mt-9 rounded-2xl border border-[#ead9dc] bg-[#fff8f8] p-6 sm:p-7">
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fff1f2] text-[#c93642]"><ShieldCheck size={18} /></span>
              <div>
                <h3 className="text-sm font-black">Important risk notice</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#68726e]">Please note that no trading indicator can guarantee profitable results. Successful trading depends on market conditions, disciplined risk management, and proper execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101512] text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16">
          <div>
            <span className="text-[10px] font-black tracking-[.2em] text-[#5fc48c]">TRADINGVIEW INDICATOR</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-.035em]">Bring structured signals to your TradingView charts.</h2>
          </div>
          <Link href="/services/tradingview-indicator" className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#087f3f] px-6 py-4 text-[12px] font-black text-white transition hover:bg-[#0a9650]">Unlock the TradingView Indicator <ArrowRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import { ArrowRight, BookOpen, Clock3, Tag } from 'lucide-react';

const articles = [
  {
    slug: 'understanding-copy-trading',
    category: 'Trading Education',
    title: 'Understanding Copy Trading Before You Start',
    excerpt: 'Learn how trade replication works, what remains under your control, and which account information you should review before subscribing.',
    readTime: '6 min read',
  },
  {
    slug: 'risk-management-in-algorithmic-trading',
    category: 'Risk Management',
    title: 'Risk Management in Algorithmic Trading',
    excerpt: 'A practical introduction to drawdown, exposure, position sizing and the risk controls traders should understand before using an automated strategy.',
    readTime: '8 min read',
  },
  {
    slug: 'how-tradingview-automation-works',
    category: 'Technology',
    title: 'How TradingView Automation Works',
    excerpt: 'Understand how TradingView alerts, webhook technology and supported automation platforms can work together to execute predefined trading conditions.',
    readTime: '7 min read',
  },
  {
    slug: 'pamm-and-mam-explained',
    category: 'Trading Education',
    title: 'PAMM and MAM Explained',
    excerpt: 'Discover the difference between PAMM and MAM account structures and how investors can evaluate the relevant performance and risk information.',
    readTime: '7 min read',
  },
  {
    slug: 'evaluating-trading-performance',
    category: 'Performance',
    title: 'How to Evaluate Trading Performance',
    excerpt: 'Performance is more than a return percentage. Learn why drawdown, recovery factor, consistency and trading behaviour matter when evaluating a strategy.',
    readTime: '9 min read',
  },
  {
    slug: 'why-systematic-trading-matters',
    category: 'Arcus Insights',
    title: 'Why Systematic Trading Matters',
    excerpt: 'Explore how rules-based execution can help traders build a more structured process around market participation and decision-making.',
    readTime: '5 min read',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
      <header className="border-b border-[#e4e9e6] bg-white">
        <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span>
            <span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span>
          </Link>
          <Link href="/signup" className="rounded-xl bg-[#087f3f] px-5 py-3 text-[11px] font-black text-white">Get Started</Link>
        </div>
      </header>

      <section className="border-b border-[#e4e9e6] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[.22em] text-[#087f3f]"><BookOpen size={14}/> ARCUS STRATEGY BLOG</span>
            <h1 className="mt-5 text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-[72px] lg:leading-[1.02]">Ideas, education and insights for systematic traders.</h1>
            <p className="mt-7 max-w-3xl text-[15px] leading-8 text-[#68726e]">Read practical articles about algorithmic trading, copy trading, risk management, performance analysis, trading technology and the Arcus Strategy ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">LATEST ARTICLES</span><h2 className="mt-2 text-3xl font-black tracking-tight">Explore the Arcus library</h2></div>
          <span className="hidden text-[11px] font-bold text-[#8a948f] sm:block">Education • Research • Insights</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="group flex min-h-[310px] flex-col rounded-2xl border border-[#dfe7e2] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between gap-3"><span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf8f1] px-3 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-[#087f3f]"><Tag size={11}/>{article.category}</span><span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#8a948f]"><Clock3 size={11}/>{article.readTime}</span></div>
              <h2 className="mt-7 text-2xl font-black tracking-tight group-hover:text-[#087f3f]">{article.title}</h2>
              <p className="mt-4 text-[12px] leading-6 text-[#68726e]">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="mt-auto inline-flex items-center gap-2 pt-7 text-[11px] font-black text-[#087f3f]">Read article <ArrowRight size={14}/></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e4e9e6] bg-[#101714] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div><span className="text-[9px] font-black tracking-[.2em] text-[#65d995]">CONTINUE EXPLORING</span><h2 className="mt-2 text-2xl font-black">Review performance, risk and education.</h2></div>
          <div className="flex flex-wrap gap-3"><Link href="/performance-statistics" className="rounded-xl border border-white/15 px-5 py-3 text-[11px] font-black">Performance Statistics</Link><Link href="/risk-analysis" className="rounded-xl border border-white/15 px-5 py-3 text-[11px] font-black">Risk Analysis</Link><Link href="/education" className="rounded-xl bg-[#087f3f] px-5 py-3 text-[11px] font-black">Education</Link></div>
        </div>
      </section>
    </main>
  );
}

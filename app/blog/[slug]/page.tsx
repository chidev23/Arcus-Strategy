import Link from 'next/link';
import { ArrowLeft, Clock3 } from 'lucide-react';

const articles: Record<string, {category:string;title:string;readTime:string;sections:{heading:string;body:string}[]}> = {
  'understanding-copy-trading': { category:'Trading Education', title:'Understanding Copy Trading Before You Start', readTime:'6 min read', sections:[
    {heading:'What is copy trading?',body:'Copy trading is a trade-replication model in which qualifying trades from a strategy are replicated through a supported broker environment. The investor keeps control of their own account and capital while the selected environment handles the trade execution workflow.'},
    {heading:'What should you review first?',body:'Before subscribing, review the strategy environment, performance statistics, risk analysis, account conditions and applicable disclosures. Performance and risk information should be considered together rather than relying on a single return figure.'},
    {heading:'Keep control of your account',body:'A structured copy-trading workflow should make clear where your capital remains, how trades are replicated and which account controls remain available to you. Always verify the official account and service information before proceeding.'},
  ]},
  'risk-management-in-algorithmic-trading': { category:'Risk Management', title:'Risk Management in Algorithmic Trading', readTime:'8 min read', sections:[
    {heading:'Why risk controls matter',body:'Algorithmic strategies operate according to predefined rules, but no strategy removes market risk. Risk management helps define how much exposure a strategy can take and how losses are controlled when market conditions change.'},
    {heading:'Metrics worth monitoring',body:'Maximum drawdown, current drawdown, recovery factor, exposure, average risk per trade and trading frequency provide a broader picture of strategy behaviour. Reviewing these metrics together gives a more useful risk profile.'},
    {heading:'Risk is not the same as return',body:'A high historical return does not automatically mean a strategy is suitable for every trader. Consider volatility, drawdown and your own risk tolerance before allocating capital.'},
  ]},
  'how-tradingview-automation-works': { category:'Technology', title:'How TradingView Automation Works', readTime:'7 min read', sections:[
    {heading:'From signal to execution',body:'TradingView can generate alerts when predefined strategy conditions are met. Webhook technology can then deliver those alerts to a supported automation platform, which interprets the configured instructions and routes the resulting trade action.'},
    {heading:'Why configuration matters',body:'Automation depends on correct alert conditions, webhook configuration, account settings and the capabilities of the selected platform. Users should test their configuration before using live capital.'},
    {heading:'A structured automation workflow',body:'A disciplined workflow separates the strategy signal, alert delivery, automation platform and broker or exchange execution environment. This makes it easier to identify configuration issues and maintain consistent execution.'},
  ]},
  'pamm-and-mam-explained': { category:'Trading Education', title:'PAMM and MAM Explained', readTime:'7 min read', sections:[
    {heading:'PAMM',body:'A PAMM structure is designed to allocate or replicate trading activity across participating investor accounts according to the configured money-management structure. The exact allocation rules depend on the broker and account environment.'},
    {heading:'MAM',body:'MAM, or Multi-Account Manager, is another structure for managing and distributing trading activity across multiple accounts. Its configuration can provide different allocation and account-management capabilities depending on the broker.'},
    {heading:'What investors should compare',body:'Compare the relevant performance statistics, risk analysis, account conditions and broker environment rather than choosing solely from a headline return. The exact structure and terms should always be reviewed before participation.'},
  ]},
  'evaluating-trading-performance': { category:'Performance', title:'How to Evaluate Trading Performance', readTime:'9 min read', sections:[
    {heading:'Look beyond the return',body:'A performance percentage alone does not explain how a strategy produced its result. Drawdown, recovery factor, win rate, trading frequency and exposure provide additional context.'},
    {heading:'Understand drawdown',body:'Drawdown measures the decline from an account or equity peak. Historical maximum drawdown can help illustrate the level of loss experienced during the observed period, while current drawdown shows the present decline from a recent peak.'},
    {heading:'Use verified data',body:'Performance dashboards should be based on the relevant account data and clearly identify the account environment being measured. Historical statistics are informative but cannot guarantee future results.'},
  ]},
  'why-systematic-trading-matters': { category:'Arcus Insights', title:'Why Systematic Trading Matters', readTime:'5 min read', sections:[
    {heading:'Rules create structure',body:'Systematic trading converts a strategy into predefined rules for identifying conditions, managing positions and executing trades. This can reduce reliance on discretionary decisions during fast-moving markets.'},
    {heading:'Automation supports consistency',body:'Technology can help apply predefined rules consistently across supported environments. It does not remove market risk, execution risk or the need for appropriate monitoring.'},
    {heading:'The objective',body:'The objective of systematic trading is not to guarantee a particular outcome. It is to create a repeatable process that can be evaluated using transparent performance and risk information.'},
  ]},
};

export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}));}

export default async function BlogArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const article=articles[slug];
  if(!article)return <main className="min-h-screen bg-[#f7f9f8] p-10"><Link href="/blog" className="font-bold text-[#087f3f]">← Back to Blog</Link><h1 className="mt-10 text-3xl font-black">Article not found</h1></main>;
  return <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
    <header className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto flex min-h-[76px] max-w-[1100px] items-center justify-between px-5 sm:px-8"><Link href="/blog" className="inline-flex items-center gap-2 text-[11px] font-black text-[#087f3f]"><ArrowLeft size={14}/> Arcus Strategy Blog</Link><Link href="/" className="text-[11px] font-black text-[#68726e]">Arcus Strategy</Link></div></header>
    <article className="mx-auto max-w-[900px] px-5 py-14 sm:px-8 lg:py-20">
      <span className="text-[10px] font-black uppercase tracking-[.2em] text-[#087f3f]">{article.category}</span>
      <h1 className="mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl lg:text-6xl">{article.title}</h1>
      <div className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold text-[#8a948f]"><Clock3 size={13}/>{article.readTime}</div>
      <div className="mt-12 space-y-10 rounded-3xl border border-[#dfe7e2] bg-white p-7 shadow-sm sm:p-10">
        {article.sections.map(section=><section key={section.heading}><h2 className="text-2xl font-black">{section.heading}</h2><p className="mt-4 text-[14px] leading-8 text-[#59635f]">{section.body}</p></section>)}
        <div className="border-t border-[#edf0ee] pt-7"><p className="text-[11px] leading-6 text-[#68726e]">This article is educational content and does not constitute investment advice. Trading financial markets involves significant risk. Historical information does not guarantee future results.</p></div>
      </div>
      <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-[11px] font-black text-[#087f3f]"><ArrowLeft size={14}/> More articles</Link>
    </article>
  </main>;
}

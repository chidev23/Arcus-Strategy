import Link from 'next/link';
import { ArrowRight, ChevronDown, CircleHelp, ShieldCheck } from 'lucide-react';

const faqSections = [
  {
    title: 'Arcus Strategy',
    items: [
      ['What is Arcus Strategy?', 'Arcus Strategy is a systematic trading technology and services platform focused on algorithmic execution, trade replication, managed trading environments and structured access to trading strategies.'],
      ['How does Arcus Strategy work?', 'Arcus Strategy generates qualifying trading decisions through its supported strategy infrastructure. Depending on the service, those trades can be executed, replicated or managed through supported broker and trading environments.'],
      ['Do I keep control of my trading capital?', 'For services where you connect your own brokerage account, your capital remains with your chosen broker and you retain control of your account. Always review the specific service terms before subscribing.'],
    ],
  },
  {
    title: 'Trading Services',
    items: [
      ['What services are available?', 'Arcus Strategy provides a range of trading services and infrastructure, including algorithmic strategies, MT4 and MT5 copy trading, synthetic and Deriv copy trading, cTrader environments, MAM, PAMM, TradingView tools, Pine Bridge and related trading technology.'],
      ['What is Copy Trading?', 'Copy Trading allows qualifying trades from an Arcus strategy or account to be replicated through a supported trading environment. Each broker and platform may have different account requirements and risk characteristics.'],
      ['What are MAM and PAMM?', 'MAM and PAMM are account-management structures that can allow multiple investor accounts to participate in a managed trading strategy. Availability, allocation rules and account requirements depend on the specific service and broker.'],
      ['What is Pine Bridge?', 'Pine Bridge is a service designed to allow users to automatically take trades from their TradingView setup on supported MT4, MT5 and cTrader accounts. Access is provided through the Pine Bridge service.'],
    ],
  },
  {
    title: 'Performance & Risk',
    items: [
      ['Where can I review performance statistics?', 'Performance Statistics is publicly accessible from the Welcome page. You can navigate from the general dashboard into Copy Trading, MAM or PAMM and then into the specific platform and broker account.'],
      ['Where can I review risk analysis?', 'Risk Analysis is publicly accessible from the Welcome page. Each supported service has its own risk-analysis navigation, including broker-level risk pages where available.'],
      ['Does historical performance guarantee future results?', 'No. Historical performance, risk metrics, drawdown figures and other statistics are informational and do not guarantee future results. Market conditions can change rapidly.'],
      ['Why should I review risk before subscribing?', 'Risk analysis helps you understand historical drawdown, exposure, trading behaviour, recovery characteristics and other risk factors before making a decision. It should be considered together with your personal risk tolerance and the applicable service terms.'],
    ],
  },
  {
    title: 'Accounts & Access',
    items: [
      ['Do I need an account to view public information?', 'No. Users who have not signed up or signed in can access public sections such as Performance Statistics, Risk Analysis, Education, Blog, About and FAQ from the Welcome page.'],
      ['What is an investor password?', 'An investor password is a read-only credential used to access and monitor certain supported trading accounts without having permission to execute trades. When provided, use only the credentials displayed through the official Arcus Strategy website.'],
      ['Where should I get my investor password?', 'Only trust an investor password displayed through the official Arcus Strategy website. Do not obtain investor credentials from third parties, social-media accounts, unofficial groups or other external sources.'],
      ['What should I do if I cannot access a service?', 'Check the service-specific requirements and account environment first. If the issue remains, use the official Arcus Strategy contact or support channel rather than relying on an unofficial intermediary.'],
    ],
  },
  {
    title: 'Education & Community',
    items: [
      ['What is the Education section?', 'Education is designed as a course-style learning area where users can explore trading and technology courses containing articles, videos and documents.'],
      ['What is the Community Hub?', 'The Community Hub provides dedicated discussion spaces for areas such as Copy Trading, PAMM, MAM, Serverless AlgoTrading and Prop Firm Assisted Trading, allowing users to interact around each subject.'],
      ['Can I read the Arcus blog without signing in?', 'Yes. The Blog is part of the public Welcome-page navigation and is intended for users who want to read Arcus Strategy articles and educational content.'],
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
      <header className="sticky top-0 z-50 border-b border-[#e3e9e5] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="Arcus Strategy home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span>
            <span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span>
          </Link>
          <nav className="hidden items-center gap-7 text-[12px] font-bold text-[#46504c] lg:flex">
            <Link href="/performance-statistics?from=welcome" className="hover:text-[#087f3f]">Performance Statistics</Link>
            <Link href="/risk-analysis?from=welcome" className="hover:text-[#087f3f]">Risk Analysis</Link>
            <Link href="/education" className="hover:text-[#087f3f]">Education</Link>
            <Link href="/blog" className="hover:text-[#087f3f]">Blog</Link>
            <Link href="/about" className="hover:text-[#087f3f]">About</Link>
            <Link href="/faq" className="font-black text-[#087f3f]">FAQ</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/signin" className="hidden px-3 py-2 text-[12px] font-bold text-[#3f4945] sm:inline-flex">Sign in</Link>
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-xl bg-[#087f3f] px-4 py-2.5 text-[11px] font-black text-white shadow-[0_8px_20px_rgba(8,127,63,.16)]">Get Started <ArrowRight size={14}/></Link>
          </div>
        </div>
      </header>

      <section className="border-b border-[#e3e9e5] bg-white">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex items-center gap-2 text-[10px] font-black tracking-[.2em] text-[#087f3f]"><CircleHelp size={15}/> ARCUS STRATEGY FAQ</div>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.05em] sm:text-5xl lg:text-6xl">Questions, answered clearly.</h1>
          <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[#68726e]">Find answers about Arcus Strategy, our trading services, performance and risk information, account access, education and community features.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-xl border border-[#dce5df] bg-white px-5 py-3 text-[11px] font-black text-[#087f3f]">About Arcus Strategy <ArrowRight size={14}/></Link>
            <Link href="/risk-analysis?from=welcome" className="inline-flex items-center gap-2 rounded-xl bg-[#101714] px-5 py-3 text-[11px] font-black text-white">Review Risk Analysis <ArrowRight size={14}/></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-12 sm:px-8 lg:py-16">
        <div className="mb-10 rounded-2xl border border-[#dce5df] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]"><ShieldCheck size={19}/></span>
            <div><h2 className="text-sm font-black">A note on trading risk</h2><p className="mt-2 text-[12px] leading-6 text-[#68726e]">Trading financial markets involves significant risk. Historical results and risk metrics do not guarantee future performance. Always review the specific service information and assess whether it is appropriate for your risk tolerance.</p></div>
          </div>
        </div>

        <div className="space-y-10">
          {faqSections.map((section) => (
            <section key={section.title}>
              <div className="mb-4 flex items-end justify-between gap-4"><h2 className="text-xl font-black tracking-[-.025em] sm:text-2xl">{section.title}</h2><span className="hidden text-[9px] font-black uppercase tracking-[.18em] text-[#9aa39f] sm:block">Frequently asked questions</span></div>
              <div className="overflow-hidden rounded-2xl border border-[#dce5df] bg-white shadow-sm">
                {section.items.map(([question, answer], index) => (
                  <details key={question} className="group border-b border-[#edf1ee] last:border-b-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-[13px] font-extrabold sm:px-6">
                      <span>{question}</span>
                      <ChevronDown size={17} className="shrink-0 text-[#68726e] transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5 pr-12 text-[12px] leading-7 text-[#68726e] sm:px-6 sm:pb-6">{answer}</div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e3e9e5] bg-[#101714] text-white">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div><span className="text-[9px] font-black tracking-[.2em] text-[#69dc99]">NEED MORE INFORMATION?</span><h2 className="mt-2 text-2xl font-black tracking-[-.03em]">Explore Arcus Strategy.</h2><p className="mt-2 max-w-xl text-[12px] leading-6 text-[#a4afaa]">Explore our services, educational resources and public performance and risk information.</p></div>
          <div className="flex flex-wrap gap-2"><Link href="/about" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-[11px] font-black">About <ArrowRight size={14}/></Link><Link href="/blog" className="inline-flex items-center gap-2 rounded-xl bg-[#087f3f] px-4 py-3 text-[11px] font-black">Read the Blog <ArrowRight size={14}/></Link></div>
        </div>
      </section>

      <footer className="border-t border-[#e3e9e5] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#087f3f] text-xs font-black text-white">A</span><span className="text-[11px] font-black tracking-[.16em]">ARCUS STRATEGY</span></div>
          <div className="flex flex-wrap gap-5 text-[10px] font-bold text-[#68726e]"><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/support">Contact</Link><Link href="/risk-analysis?from=welcome">Risk Analysis</Link></div>
        </div>
      </footer>
    </main>
  );
}

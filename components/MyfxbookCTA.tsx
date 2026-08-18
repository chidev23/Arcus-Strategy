'use client';

import { ExternalLink, BarChart3 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const brokerPagePatterns = [
  /^\/services\/social-trading\/(mt4|mt5|synthetic|ctrader)\/[^/]+$/,
  /^\/services\/(mam-trading|pamm-trading)\/(mt4|mt5)\/[^/]+$/,
  /^\/performance-statistics\/(copy-trading\/(mt4|mt5|synthetic|ctrader)|mam\/(mt4|mt5)|pamm\/(mt4|mt5))\/[^/]+$/,
  /^\/risk-analysis\/(copy-trading\/(mt4|mt5|synthetic|ctrader)|mam\/(mt4|mt5)|pamm\/(mt4|mt5))\/[^/]+$/,
];

export default function MyfxbookCTA() {
  const pathname = usePathname();
  const show = brokerPagePatterns.some((pattern) => pattern.test(pathname));
  if (!show) return null;

  return (
    <section className="border-t border-[#e4e9e6] bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 rounded-2xl border border-[#dfe7e2] bg-[#f8faf9] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#edf8f1] text-[#087f3f]">
              <BarChart3 size={20} />
            </span>
            <div>
              <span className="text-[9px] font-black tracking-[.18em] text-[#087f3f]">INDEPENDENT ACCOUNT VIEW</span>
              <h2 className="mt-1 text-lg font-black text-[#101512]">View this account on Myfxbook</h2>
              <p className="mt-2 max-w-2xl text-[12px] leading-6 text-[#68726e]">
                Open Myfxbook to review the account's independently displayed trading information and account statistics.
              </p>
            </div>
          </div>
          <a
            href="https://www.myfxbook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#087f3f] px-5 py-3 text-[11px] font-black text-white transition hover:bg-[#066b35]"
          >
            Myfxbook <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

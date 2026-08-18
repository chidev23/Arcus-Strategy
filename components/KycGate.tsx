'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function KycGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    setVerified(localStorage.getItem('arcus_kyc_status') === 'verified');
  }, []);

  if (verified === null) return null;
  if (verified) return <>{children}</>;

  return (
    <div className="mt-7 rounded-2xl border border-[#f0d8da] bg-[#fff7f7] p-5">
      <div className="flex items-start gap-3">
        <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#c93642]" />
        <div>
          <h3 className="text-[13px] font-black text-[#7f2630]">KYC verification required</h3>
          <p className="mt-2 text-[12px] leading-6 text-[#68726e]">
            You must complete KYC verification before subscribing to PropFirm Assisted Trading or ServerLess Algotrading.
          </p>
          <Link href="/verify" className="mt-4 inline-flex items-center rounded-xl bg-[#087f3f] px-4 py-2.5 text-[11px] font-black text-white">
            Verify KYC →
          </Link>
        </div>
      </div>
    </div>
  );
}

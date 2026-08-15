'use client';

import Link from 'next/link';
import { Headphones, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function CustomerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen(!open)}
        className="grid h-11 w-11 place-items-center rounded-xl border border-[#dfe6e1] bg-white text-[#18211c] shadow-sm transition hover:border-[#087f3f] hover:text-[#087f3f]"
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>

      {open && (
        <>
          <button aria-label="Close menu" className="fixed inset-0 z-40 cursor-default" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-14 z-50 w-[300px] overflow-hidden rounded-2xl border border-[#dfe6e1] bg-white shadow-[0_25px_70px_rgba(16,34,24,.16)]">
            <div className="border-b border-[#e9eeeb] bg-[#f7faf8] px-5 py-4">
              <span className="text-[9px] font-black uppercase tracking-[.2em] text-[#087f3f]">Arcus Customer Centre</span>
              <p className="mt-1 text-[12px] text-[#68726e]">Navigate your authenticated workspace.</p>
            </div>
            <nav className="p-2">
              <Link onClick={() => setOpen(false)} href="/dashboard" className="block rounded-xl px-4 py-3.5 hover:bg-[#f4f8f5]">
                <strong className="block text-[13px]">Home</strong><span className="mt-1 block text-[11px] text-[#7a847f]">Your Arcus customer workspace</span>
              </Link>
              <Link onClick={() => setOpen(false)} href="/services" className="block rounded-xl px-4 py-3.5 hover:bg-[#f4f8f5]">
                <strong className="block text-[13px]">Services</strong><span className="mt-1 block text-[11px] text-[#7a847f]">Explore available Arcus services</span>
              </Link>
              <Link onClick={() => setOpen(false)} href="/private-real-trading" className="block rounded-xl px-4 py-3.5 hover:bg-[#f4f8f5]">
                <strong className="block text-[13px]">Private Real Trading</strong><span className="mt-1 block text-[11px] text-[#7a847f]">Access private real-account trading services</span>
              </Link>
              <Link onClick={() => setOpen(false)} href="/private-prop-firm-trading" className="block rounded-xl px-4 py-3.5 hover:bg-[#f4f8f5]">
                <strong className="block text-[13px]">Private Prop Firm Trading</strong><span className="mt-1 block text-[11px] text-[#7a847f]">Private prop-firm trading access</span>
              </Link>
              <Link onClick={() => setOpen(false)} href="/support" className="flex items-center gap-3 rounded-xl px-4 py-3.5 hover:bg-[#f4f8f5]">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#fff3f3] text-[#c93642]"><Headphones size={15} /></span>
                <span><strong className="block text-[13px]">Customer Support</strong><span className="mt-1 block text-[11px] text-[#7a847f]">Get help from Arcus support</span></span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

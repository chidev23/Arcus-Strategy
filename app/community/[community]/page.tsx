'use client';

import Link from 'next/link';
import { ArrowLeft, Hash, MessageCircle, Send, Users } from 'lucide-react';
import CustomerMenu from '../../../components/CustomerMenu';
import { use, useState } from 'react';

const rooms: Record<string, { title: string; short: string; description: string }> = {
  'copy-trading': { title: 'Copy Trading Community', short: 'COPY TRADING', description: 'Discuss Arcus copy trading, onboarding, broker experiences and general community topics.' },
  pamm: { title: 'PAMM Community', short: 'PAMM', description: 'Discuss Arcus PAMM services, account onboarding and community experiences.' },
  mam: { title: 'MAM Community', short: 'MAM', description: 'Discuss Arcus MAM services, account management and service updates.' },
  'serverless-algo-trading': { title: 'Serverless AlgoTrading Community', short: 'SERVERLESS ALGOTRADING', description: 'Discuss algorithm hosting, account attachment and Serverless AlgoTrading.' },
  'propfirm-assisted-trading': { title: 'PropFirm Assisted Trading Community', short: 'PROP AT', description: 'Discuss Arcus PropFirm Assisted Trading and share general experiences.' },
};

type CommunityPageProps = {
  params: Promise<{ community: string }>;
};

export default function CommunityRoom({ params }: CommunityPageProps) {
  const { community } = use(params);
  const room = rooms[community] ?? rooms['copy-trading'];
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { name: 'Arcus Strategy', text: `Welcome to the ${room.title}. This is the dedicated discussion space for this service.`, time: 'Now' },
  ]);

  const send = () => {
    const text = message.trim();
    if (!text) return;
    setMessages((current) => [...current, { name: 'You', text, time: 'Now' }]);
    setMessage('');
  };

  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
      <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span>
            <span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span>
          </Link>
          <CustomerMenu />
        </div>
      </header>

      <section className="border-b border-[#e4e9e6] bg-white">
        <div className="mx-auto max-w-[1000px] px-5 py-9 sm:px-8">
          <Link href="/community" className="inline-flex items-center gap-2 text-[11px] font-black text-[#087f3f]"><ArrowLeft size={14} /> COMMUNITY HUB</Link>
          <div className="mt-6 flex items-start justify-between gap-5">
            <div>
              <span className="text-[9px] font-black tracking-[.2em] text-[#9aa39f]">{room.short}</span>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{room.title}</h1>
              <p className="mt-3 max-w-2xl text-[13px] leading-6 text-[#68726e]">{room.description}</p>
            </div>
            <div className="hidden shrink-0 items-center gap-2 rounded-xl bg-[#edf8f1] px-4 py-3 text-[11px] font-bold text-[#087f3f] sm:flex"><Users size={15} /> Community room</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-7 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-[#dfe7e2] bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#e9eeeb] bg-[#fbfcfb] px-5 py-4">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#edf8f1] text-[#087f3f]"><Hash size={16} /></span>
            <div><p className="text-[13px] font-black">{room.short.toLowerCase().replaceAll(' ', '-')}</p><p className="text-[11px] text-[#7a847f]">Community discussion</p></div>
          </div>
          <div className="min-h-[390px] space-y-5 p-5">
            {messages.map((item, index) => (
              <div key={`${item.time}-${index}`} className="flex gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#087f3f] text-[11px] font-black text-white">{item.name === 'You' ? 'Y' : 'A'}</div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-[#f4f7f5] px-4 py-3">
                  <div className="flex gap-3"><span className="text-[11px] font-black">{item.name}</span><span className="text-[10px] text-[#9aa39f]">{item.time}</span></div>
                  <p className="mt-1 text-[12px] leading-5 text-[#4f5955]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#e9eeeb] p-4">
            <div className="flex gap-2">
              <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') send(); }} placeholder="Start a discussion..." className="min-w-0 flex-1 rounded-xl border border-[#dfe7e2] px-4 py-3 text-[12px] outline-none focus:border-[#087f3f]" />
              <button type="button" onClick={send} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#087f3f] text-white"><Send size={16} /></button>
            </div>
            <p className="mt-2 flex items-center gap-1 text-[10px] text-[#9aa39f]"><MessageCircle size={12} /> Community messaging UI is ready for backend realtime messaging integration.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useState, type Dispatch, type SetStateAction } from 'react';
import Link from 'next/link';
import CustomerMenu from '../../components/CustomerMenu';

type NotificationTuple = [string, boolean, Dispatch<SetStateAction<boolean>>];

export default function ProfilePage() {
  const [tab, setTab] = useState<'profile' | 'security' | 'notifications' | 'preferences'>('profile');
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const notificationSettings: NotificationTuple[] = [
    ['Account notifications', notifications, setNotifications],
    ['Product & market updates', marketing, setMarketing],
  ];

  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#101512]">
      <header className="sticky top-0 z-40 border-b border-[#e4e9e6] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/dashboard" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[15px] tracking-[.16em]">ARCUS</strong><small className="block text-[8px] font-black tracking-[.35em] text-[#087f3f]">STRATEGY</small></span></Link>
          <CustomerMenu />
        </div>
      </header>
      <section className="border-b border-[#e4e9e6] bg-white"><div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:px-10"><span className="text-[10px] font-black tracking-[.2em] text-[#087f3f]">PROFILE CENTRE</span><h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Account & profile settings</h1><p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#68726e]">Manage your personal information, security preferences and communication settings from one place.</p></div></section>
      <section className="mx-auto grid max-w-[1200px] gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[230px_1fr] lg:px-10">
        <aside className="h-fit rounded-2xl border border-[#dfe7e2] bg-white p-2 shadow-sm">
          {([['profile','Profile'],['security','Security'],['notifications','Notifications'],['preferences','Preferences']] as const).map(([id,label])=><button type="button" key={id} onClick={()=>setTab(id)} className={`mb-1 w-full rounded-xl px-4 py-3 text-left text-[13px] font-bold ${tab===id?'bg-[#edf8f1] text-[#087f3f]':'text-[#4f5955] hover:bg-[#f7f9f8]'}`}>{label}</button>)}
        </aside>
        <div className="space-y-5">
          {tab==='profile' && <><div className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm"><div className="flex items-center gap-4"><div className="grid h-16 w-16 place-items-center rounded-full bg-[#087f3f] text-xl font-black text-white">A</div><div><h2 className="text-xl font-black">Personal information</h2><p className="mt-1 text-[13px] text-[#68726e]">Keep your account details up to date.</p></div></div><div className="mt-7 grid gap-4 sm:grid-cols-2"><label className="text-[12px] font-bold">First name<input className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-[13px] outline-none focus:border-[#087f3f]" placeholder="First name" /></label><label className="text-[12px] font-bold">Last name<input className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-[13px] outline-none focus:border-[#087f3f]" placeholder="Last name" /></label><label className="text-[12px] font-bold sm:col-span-2">Email address<input type="email" className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-[13px] outline-none focus:border-[#087f3f]" placeholder="Email address" /></label></div><button type="button" className="mt-5 rounded-xl bg-[#087f3f] px-5 py-3 text-[12px] font-black text-white">Save changes</button></div><div className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm"><h2 className="text-lg font-black">Verification status</h2><p className="mt-2 text-[13px] leading-6 text-[#68726e]">Complete KYC verification to access features that require verified customer information.</p><Link href="/verify" className="mt-4 inline-flex rounded-xl border border-[#087f3f] px-5 py-3 text-[12px] font-black text-[#087f3f]">Open Verify Centre</Link></div></>}
          {tab==='security' && <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm"><h2 className="text-xl font-black">Security</h2><p className="mt-2 text-[13px] leading-6 text-[#68726e]">Manage your password and account protection. Password changes and authentication controls can be connected to Firebase Authentication.</p><button type="button" className="mt-5 rounded-xl border border-[#dfe7e2] px-5 py-3 text-[12px] font-black">Change password</button></div>}
          {tab==='notifications' && <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm"><h2 className="text-xl font-black">Notifications</h2>{notificationSettings.map(([label, value, setter]) => <div key={label} className="flex items-center justify-between border-b border-[#edf0ee] py-5"><div><p className="text-[13px] font-bold">{label}</p><p className="mt-1 text-[12px] text-[#68726e]">Receive relevant updates by email.</p></div><button type="button" aria-pressed={value} onClick={() => setter(!value)} className={`h-6 w-11 rounded-full p-1 ${value ? 'bg-[#087f3f]' : 'bg-[#cbd3ce]'}`}><span className={`block h-4 w-4 rounded-full bg-white transition ${value ? 'translate-x-5' : ''}`} /></button></div>)}</div>}
          {tab==='preferences' && <div className="rounded-2xl border border-[#dfe7e2] bg-white p-6 shadow-sm"><h2 className="text-xl font-black">Preferences</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-[12px] font-bold">Preferred language<select className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-[13px]"><option>English</option></select></label><label className="text-[12px] font-bold">Time zone<select className="mt-2 w-full rounded-xl border border-[#dfe7e2] px-4 py-3 text-[13px]"><option>UTC</option></select></label></div></div>}
        </div>
      </section>
    </main>
  );
}

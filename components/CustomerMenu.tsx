'use client';

import Link from 'next/link';
import { BadgeCheck, CircleUserRound, Headphones, Home, Landmark, Menu, Network, ShieldCheck, Star, X, KeyRound, Scale } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/dashboard', title: 'Home', description: 'Your Arcus customer workspace', icon: Home },
  { href: '/services', title: 'Services', description: 'Explore Arcus services', icon: Network },
  { href: '/community', title: 'Community Hub', description: 'Arcus community and updates', icon: Landmark },
  { href: '/reviews', title: 'Reviews & Ratings', description: 'Read and share customer reviews', icon: Star },
  { href: '/verify', title: 'Verify Centre', description: 'Verify official Arcus information', icon: BadgeCheck },
  { href: '/profile', title: 'Profile Centre', description: 'Manage your customer profile', icon: CircleUserRound },
  { href: '/private-real-trading', title: 'Private Real Trading', description: 'View Arcus private real accounts', icon: ShieldCheck },
  { href: '/private-prop-firm-trading', title: 'Private Prop Firm Trading', description: 'View Arcus private prop-firm accounts', icon: ShieldCheck },
  { href: '/legal', title: 'Legal Centre', description: 'Terms, policies and legal disclosures', icon: Scale },
  { href: '/support', title: 'Customer Support', description: 'Get help from Arcus support', icon: Headphones },
];

export default function CustomerMenu() {
  const [open, setOpen] = useState(false); const pathname = usePathname(); const parts = pathname.split('/').filter(Boolean); const isBrokerPage = parts[0] === 'services' && parts[1] === 'social-trading' && parts.length >= 4; const brokerSlug = isBrokerPage ? parts[3] : '';
  return <div className="relative flex items-center gap-2">{isBrokerPage && <Link href={`/investor-password/${brokerSlug}?platform=${encodeURIComponent(parts[2]?.toUpperCase() || 'MT5')}&type=Copy%20Trading`} className="hidden items-center gap-2 rounded-xl bg-[#087f3f] px-4 py-2.5 text-[10px] font-black text-white shadow-sm transition hover:bg-[#066c35] sm:inline-flex"><KeyRound size={14}/> View investor password</Link>}<button type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={()=>setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-[#dfe6e1] bg-white text-[#18211c] shadow-sm transition hover:border-[#087f3f] hover:text-[#087f3f]">{open?<X size={19}/>:<Menu size={19}/>}</button>{open&&<><button aria-label="Close menu" className="fixed inset-0 z-40 cursor-default" onClick={()=>setOpen(false)}/><div className="absolute right-0 top-14 z-50 w-[320px] max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-[#dfe6e1] bg-white shadow-[0_25px_70px_rgba(16,34,24,.16)]"><div className="border-b border-[#e9eeeb] bg-[#f7faf8] px-5 py-4"><span className="text-[9px] font-black uppercase tracking-[.2em] text-[#087f3f]">Arcus Customer Centre</span><p className="mt-1 text-[12px] text-[#68726e]">Open the menu to move between customer areas.</p></div><nav className="p-2">{links.map(({href,title,description,icon:Icon})=><Link key={href} onClick={()=>setOpen(false)} href={href} className="flex items-center gap-3 rounded-xl px-4 py-3.5 hover:bg-[#f4f8f5]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#edf8f1] text-[#087f3f]"><Icon size={15}/></span><span><strong className="block text-[13px]">{title}</strong><span className="mt-1 block text-[11px] text-[#7a847f]">{description}</span></span></Link>)}</nav></div></>}</div>;
}

'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, Check, ChevronDown, ChevronRight, LayoutDashboard, Users, BriefcaseBusiness, ChartNoAxesCombined, CreditCard, WalletCards, FilePenLine, Headphones, UserCog, FileBarChart, ScrollText, Settings2 } from 'lucide-react';
import { ADMIN_NAVIGATION, ADMIN_ROLES, AdminRole } from '../lib/admin-rbac';

const icons: Record<string, any> = { 'layout-dashboard': LayoutDashboard, users: Users, 'briefcase-business': BriefcaseBusiness, 'chart-no-axes-combined': ChartNoAxesCombined, 'credit-card': CreditCard, 'wallet-cards': WalletCards, 'file-pen-line': FilePenLine, headphones: Headphones, 'user-cog': UserCog, 'file-bar-chart': FileBarChart, 'scroll-text': ScrollText, 'settings-2': Settings2 };
const validRoles: AdminRole[] = ['admin','customer_support','financial_analyst','copywriter'];

export default function AdminSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requestedRole = searchParams.get('role') as AdminRole | null;
  const role: AdminRole = requestedRole && validRoles.includes(requestedRole) ? requestedRole : 'admin';
  const [roleOpen, setRoleOpen] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({ Customers: true, Services: true, Trading: true, Subscriptions: true, Finance: true, Content: true, Support: true });
  const navigation = ADMIN_NAVIGATION[role];
  const withRole = (href: string) => `${href}${href.includes('?') ? '&' : '?'}role=${role}`;

  return <aside className="hidden min-h-screen w-[280px] shrink-0 border-r border-[#dfe6e2] bg-white lg:flex lg:flex-col">
    <div className="border-b border-[#e7ece9] px-5 py-5"><Link href={withRole('/admin')} className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span><span><strong className="block text-[14px] tracking-[.16em] text-[#101512]">ARCUS STRATEGY</strong><small className="block text-[8px] font-black tracking-[.28em] text-[#087f3f]">ADMINISTRATION</small></span></Link></div>
    <div className="relative border-b border-[#e7ece9] p-4"><button onClick={() => setRoleOpen(v => !v)} className="flex w-full items-center justify-between rounded-xl border border-[#dfe6e2] bg-[#f7f9f8] px-3 py-3 text-left"><span><span className="block text-[8px] font-black uppercase tracking-[.16em] text-[#7a8580]">Current role</span><strong className="mt-1 block text-[12px] font-black text-[#101512]">{ADMIN_ROLES[role].label}</strong></span><ChevronDown size={15}/></button>{roleOpen && <div className="absolute left-4 right-4 top-[78px] z-30 rounded-xl border border-[#dfe6e2] bg-white p-1.5 shadow-xl">{validRoles.map(item => <Link key={item} href={`/admin?role=${item}`} onClick={() => setRoleOpen(false)} className="flex gap-2 rounded-lg px-3 py-2.5 hover:bg-[#f1f6f3]"><span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full border border-[#cdd8d2]">{item === role && <Check size={10} className="text-[#087f3f]"/>}</span><span><strong className="block text-[11px] font-black">{ADMIN_ROLES[item].label}</strong><small className="block text-[9px] leading-4 text-[#78827e]">{ADMIN_ROLES[item].description}</small></span></Link>)}</div>}</div>
    <nav className="flex-1 overflow-y-auto px-3 py-4"><p className="px-3 pb-2 text-[8px] font-black uppercase tracking-[.18em] text-[#8a948f]">Operations</p><div className="space-y-1">{navigation.map(item => { const Icon = icons[item.icon] || LayoutDashboard; const hasChildren = !!item.children?.length; const groupOpen = open[item.label] ?? false; const active = item.href ? (item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href)) : item.children?.some(c => pathname.startsWith(c.href)); return <div key={item.label}>{hasChildren ? <button onClick={() => setOpen(v => ({...v,[item.label]:!groupOpen}))} className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[11px] font-bold ${active?'bg-[#f1f7f3] text-[#087f3f]':'text-[#56615c] hover:bg-[#f4f7f5]'}`}><span className="flex items-center gap-3"><Icon size={16}/>{item.label}</span>{groupOpen?<ChevronDown size={14}/>:<ChevronRight size={14}/>}</button>:<Link href={withRole(item.href!)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[11px] font-bold ${active?'bg-[#eaf7ef] text-[#087f3f]':'text-[#56615c] hover:bg-[#f4f7f5]'}`}><Icon size={16}/>{item.label}</Link>}{hasChildren&&groupOpen&&<div className="ml-5 border-l border-[#e4ebe7] py-1 pl-2">{item.children!.map(child=><Link key={child.href} href={withRole(child.href)} className={`block rounded-lg px-3 py-2 text-[10px] font-semibold ${pathname.startsWith(child.href)?'bg-[#eaf7ef] font-black text-[#087f3f]':'text-[#68736e] hover:bg-[#f6f8f7] hover:text-[#101512]'}`}>{child.label}</Link>)}</div>}</div>})}</div></nav>
    <div className="border-t border-[#e7ece9] p-4"><Link href="/dashboard" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[10px] font-black text-[#65706b] hover:bg-[#f4f7f5]"><ArrowLeft size={14}/>Customer workspace</Link></div>
  </aside>;
}

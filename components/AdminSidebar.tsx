'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  CreditCard,
  FileBarChart,
  FilePenLine,
  GraduationCap,
  Headphones,
  Images,
  Landmark,
  LayoutDashboard,
  Megaphone,
  MessageSquareWarning,
  Newspaper,
  ScrollText,
  Send,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  UserCog,
  Users,
  WalletCards,
} from 'lucide-react';
import { ADMIN_NAVIGATION, ADMIN_ROLES, AdminRole } from '../lib/admin-rbac';

const icons: Record<string, any> = {
  'layout-dashboard': LayoutDashboard,
  users: Users,
  'shield-check': ShieldCheck,
  'briefcase-business': BriefcaseBusiness,
  'credit-card': CreditCard,
  'wallet-cards': WalletCards,
  'file-pen-line': FilePenLine,
  headphones: Headphones,
  'user-cog': UserCog,
  'chart-no-axes-combined': ChartNoAxesCombined,
  'scroll-text': ScrollText,
  'settings-2': Settings2,
  'clipboard-check': ClipboardCheck,
  'message-square-warning': MessageSquareWarning,
  'arrow-up-right': ArrowUpRight,
  'shield-alert': ShieldAlert,
  landmark: Landmark,
  activity: Activity,
  'file-bar-chart': FileBarChart,
  newspaper: Newspaper,
  'graduation-cap': GraduationCap,
  'circle-help': CircleHelp,
  megaphone: Megaphone,
  images: Images,
  send: Send,
};

export default function AdminSidebar({ role = 'admin' as AdminRole }: { role?: AdminRole }) {
  const pathname = usePathname();
  const [roleOpen, setRoleOpen] = useState(false);
  const navigation = ADMIN_NAVIGATION[role];

  return (
    <aside className="hidden min-h-screen w-[270px] shrink-0 border-r border-[#dfe6e2] bg-white lg:flex lg:flex-col">
      <div className="border-b border-[#e7ece9] px-5 py-5">
        <Link href="/admin" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#087f3f] text-sm font-black text-white">A</span>
          <span>
            <strong className="block text-[14px] tracking-[.16em] text-[#101512]">ARCUS</strong>
            <small className="block text-[8px] font-black tracking-[.32em] text-[#087f3f]">OPERATIONS</small>
          </span>
        </Link>
      </div>

      <div className="relative border-b border-[#e7ece9] p-4">
        <button onClick={() => setRoleOpen((v) => !v)} className="flex w-full items-center justify-between rounded-xl border border-[#dfe6e2] bg-[#f7f9f8] px-3 py-3 text-left">
          <span>
            <span className="block text-[8px] font-black uppercase tracking-[.16em] text-[#7a8580]">Current role</span>
            <strong className="mt-1 block text-[12px] font-black text-[#101512]">{ADMIN_ROLES[role].label}</strong>
          </span>
          <ChevronDown size={15} className="text-[#68726e]" />
        </button>
        {roleOpen && (
          <div className="absolute left-4 right-4 top-[78px] z-30 rounded-xl border border-[#dfe6e2] bg-white p-1.5 shadow-xl">
            {(Object.keys(ADMIN_ROLES) as AdminRole[]).map((item) => (
              <Link key={item} href={`/admin?role=${item}`} onClick={() => setRoleOpen(false)} className="flex items-start gap-2 rounded-lg px-3 py-2.5 hover:bg-[#f1f6f3]">
                <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full border border-[#cdd8d2]">{item === role && <Check size={10} className="text-[#087f3f]" />}</span>
                <span><strong className="block text-[11px] font-black">{ADMIN_ROLES[item].label}</strong><small className="mt-0.5 block text-[9px] leading-4 text-[#78827e]">{ADMIN_ROLES[item].description}</small></span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="px-3 pb-2 text-[8px] font-black uppercase tracking-[.18em] text-[#8a948f]">Operations</p>
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = icons[item.icon] || LayoutDashboard;
            const active = item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[11px] font-bold transition ${active ? 'bg-[#eaf7ef] text-[#087f3f]' : 'text-[#56615c] hover:bg-[#f4f7f5] hover:text-[#101512]'}`}><Icon size={16} />{item.label}</Link>;
          })}
        </div>
      </nav>

      <div className="border-t border-[#e7ece9] p-4">
        <Link href="/dashboard" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[10px] font-black text-[#65706b] hover:bg-[#f4f7f5]"><ArrowLeft size={14} /> Customer workspace</Link>
      </div>
    </aside>
  );
}

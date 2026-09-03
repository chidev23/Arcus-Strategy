'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { ArrowRight, Activity, AlertTriangle, CheckCircle2, Clock3, DollarSign, FileCheck2, Headphones, ShieldCheck, Users } from 'lucide-react';
import { ADMIN_NAVIGATION, ADMIN_ROLES, AdminRole } from '../../lib/admin-rbac';

const metrics = [
  { label: 'Customers', value: '—', note: 'Live Firebase count', icon: Users },
  { label: 'KYC pending', value: '—', note: 'Requires review', icon: FileCheck2 },
  { label: 'Active subscriptions', value: '—', note: 'Live billing count', icon: Activity },
  { label: 'Open support', value: '—', note: 'Unresolved tickets', icon: Headphones },
];

const adminQueue = [
  ['KYC reviews', 'Review submitted customer verification records.', '/admin/kyc', 'Review queue'],
  ['Support tickets', 'Monitor unresolved customer requests and escalations.', '/admin/support', 'Open support'],
  ['Subscription operations', 'Review service subscription status and payment state.', '/admin/subscriptions', 'Manage subscriptions'],
  ['Audit activity', 'Review sensitive operational actions and access events.', '/admin/audit-logs', 'Open audit logs'],
];

const roleFromQuery = (value: string | null): AdminRole => {
  if (value === 'customer_support' || value === 'financial_analyst' || value === 'copywriter') return value;
  return 'admin';
};

export default function AdminPage() {
  const params = useSearchParams();
  const role = roleFromQuery(params.get('role'));
  const roleInfo = ADMIN_ROLES[role];
  const navigation = ADMIN_NAVIGATION[role];

  const roleCards = useMemo(() => {
    if (role === 'customer_support') return [
      ['Customer queue', 'Search and review customer records with limited operational access.', '/admin/customers', Users],
      ['Onboarding', 'Track customers who still need service onboarding actions.', '/admin/onboarding', Clock3],
      ['Complaints & escalations', 'Keep complaints visible and route sensitive cases appropriately.', '/admin/complaints', AlertTriangle],
    ] as const;
    if (role === 'financial_analyst') return [
      ['Performance', 'Review service, broker and account performance reporting.', '/admin/performance', Activity],
      ['Risk', 'Review drawdown, exposure and risk reporting.', '/admin/risk', ShieldCheck],
      ['Financial reports', 'Prepare operational financial reporting without routine investor-password access.', '/admin/reports/financial', DollarSign],
    ] as const;
    if (role === 'copywriter') return [
      ['Blog', 'Create, edit and prepare articles for publishing.', '/admin/content/blog', FileCheck2],
      ['Education', 'Manage courses, articles, videos and documents.', '/admin/content/education', FileCheck2],
      ['Publishing', 'Control content review and publication workflow.', '/admin/content/publishing', CheckCircle2],
    ] as const;
    return adminQueue.map(([title, text, href, cta]) => [title, text, href, cta, CheckCircle2] as const);
  }, [role]);

  return (
    <main>
      <header className="border-b border-[#dfe6e2] bg-white">
        <div className="flex min-h-[76px] items-center justify-between gap-5 px-5 sm:px-8 xl:px-10">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[.2em] text-[#087f3f]">Arcus Strategy / Operations</p>
            <h1 className="mt-1 text-xl font-black tracking-[-.025em]">{roleInfo.label} workspace</h1>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="rounded-full border border-[#dfe6e2] bg-[#f7f9f8] px-3 py-2 text-[9px] font-black uppercase tracking-[.12em] text-[#65706b]">RBAC protected</span>
            <span className="rounded-full bg-[#eaf7ef] px-3 py-2 text-[9px] font-black uppercase tracking-[.12em] text-[#087f3f]">Operations</span>
          </div>
        </div>
      </header>

      <section className="border-b border-[#e1e7e3] bg-white px-5 py-8 sm:px-8 xl:px-10">
        <div className="max-w-4xl">
          <p className="text-[9px] font-black uppercase tracking-[.18em] text-[#7b8580]">Phase 2 · Role-based control center</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Operational command for Arcus Strategy.</h2>
          <p className="mt-3 max-w-3xl text-[13px] leading-6 text-[#68726e]">{roleInfo.description} This dashboard is structured around least-privilege access, operational queues, sensitive-data separation and auditable actions.</p>
        </div>
      </section>

      <section className="px-5 py-7 sm:px-8 xl:px-10">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map(({ label, value, note, icon: Icon }) => <div key={label} className="rounded-2xl border border-[#dfe6e2] bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><span className="text-[9px] font-black uppercase tracking-[.14em] text-[#7c8782]">{label}</span><Icon size={17} className="text-[#087f3f]"/></div><strong className="mt-3 block text-2xl font-black">{value}</strong><p className="mt-1 text-[10px] text-[#7c8782]">{note}</p></div>)}
        </div>
      </section>

      <section className="grid gap-5 px-5 pb-10 sm:px-8 xl:grid-cols-[1.35fr_.65fr] xl:px-10">
        <div className="rounded-2xl border border-[#dfe6e2] bg-white p-6 shadow-sm">
          <div className="flex items-end justify-between gap-4 border-b border-[#e8ecea] pb-5"><div><p className="text-[9px] font-black uppercase tracking-[.17em] text-[#087f3f]">Work queues</p><h3 className="mt-1 text-lg font-black">Priority operations</h3></div><span className="text-[9px] font-bold text-[#7c8782]">Live data connects in the backend phase</span></div>
          <div className="divide-y divide-[#edf0ee]">{roleCards.map((item: any) => { const [title, text, href, cta, Icon = CheckCircle2] = item; return <div key={title} className="flex items-center justify-between gap-5 py-5"><div className="flex min-w-0 items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#f1f6f3] text-[#087f3f]"><Icon size={16}/></span><div><h4 className="text-[12px] font-black">{title}</h4><p className="mt-1 max-w-xl text-[10px] leading-5 text-[#707a75]">{text}</p></div></div><Link href={href} className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-[#cdd8d2] px-3 py-2 text-[9px] font-black text-[#087f3f] hover:bg-[#f1f6f3]">{cta || 'Open'} <ArrowRight size={12}/></Link></div>})}</div>
        </div>

        <div className="rounded-2xl border border-[#18231e] bg-[#101714] p-6 text-white shadow-sm">
          <p className="text-[9px] font-black uppercase tracking-[.18em] text-[#65d995]">Security boundary</p>
          <h3 className="mt-2 text-lg font-black">Least privilege by role.</h3>
          <div className="mt-6 space-y-3 text-[10px] leading-5 text-[#b5c0ba]">
            <div className="rounded-xl border border-white/10 bg-white/[.035] p-4"><strong className="block text-white">Administrator</strong>Full operational control, staff permissions, settings and audit access.</div>
            <div className="rounded-xl border border-white/10 bg-white/[.035] p-4"><strong className="block text-white">Customer Support</strong>Customer and ticket operations with limited KYC/subscription visibility.</div>
            <div className="rounded-xl border border-white/10 bg-white/[.035] p-4"><strong className="block text-white">Financial Analyst</strong>Performance, risk and financial reporting; plaintext investor passwords are not a normal permission.</div>
            <div className="rounded-xl border border-white/10 bg-white/[.035] p-4"><strong className="block text-white">Copywriter</strong>Content creation, editing, media and publishing workflow.</div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, Clock3, Headphones, MessageSquare, Search, UserRound, Users } from 'lucide-react';

const tickets = [
  { id: '#1028', customer: 'Customer 10024', category: 'Copy Trading', priority: 'High', status: 'Open', assigned: 'Support 01', time: '8 min ago' },
  { id: '#1027', customer: 'Customer 10021', category: 'Payment', priority: 'Medium', status: 'Waiting for Customer', assigned: 'Support 02', time: '19 min ago' },
  { id: '#1026', customer: 'Customer 10018', category: 'Account Onboarding', priority: 'High', status: 'In Progress', assigned: 'Support 01', time: '32 min ago' },
  { id: '#1025', customer: 'Customer 10015', category: 'KYC', priority: 'Medium', status: 'Open', assigned: 'Unassigned', time: '48 min ago' },
  { id: '#1024', customer: 'Customer 10012', category: 'ServerLess', priority: 'Low', status: 'Escalated', assigned: 'Support 03', time: '1 hr ago' },
];

const onboarding = [
  { customer: 'Customer 10024', service: 'Copy Trading · MT5', payment: 'Completed', purchased: 'Purchased', credentials: 'Submitted', configured: 'Configured', activated: 'Activated' },
  { customer: 'Customer 10018', service: 'ServerLess Algotrading', payment: 'Completed', purchased: 'Purchased', credentials: 'Submitted', configured: 'Pending', activated: 'Pending' },
  { customer: 'Customer 10022', service: 'Prop Firm A.T', payment: 'Completed', purchased: 'Purchased', credentials: 'Missing', configured: 'Blocked', activated: 'Blocked' },
  { customer: 'Customer 10015', service: 'Copy Trading · MT4', payment: 'Completed', purchased: 'Purchased', credentials: 'Submitted', configured: 'Configured', activated: 'Activated' },
];

function statusClass(value: string) {
  if (['Completed', 'Purchased', 'Submitted', 'Configured', 'Activated', 'Resolved'].includes(value)) return 'bg-[#eaf7ef] text-[#087f3f]';
  if (['Missing', 'Blocked', 'Escalated', 'High'].includes(value)) return 'bg-[#fff0f0] text-[#a23a3a]';
  if (['Pending', 'Waiting for Customer', 'In Progress', 'Medium'].includes(value)) return 'bg-[#fff6e4] text-[#966816]';
  return 'bg-[#f1f4f2] text-[#65706b]';
}

export default function CustomerSupportDashboard() {
  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#101512]">
      <header className="sticky top-0 z-20 border-b border-[#dfe6e2] bg-white/95 backdrop-blur">
        <div className="flex min-h-[76px] items-center justify-between gap-4 px-5 sm:px-8 xl:px-10">
          <div><p className="text-[8px] font-black uppercase tracking-[.22em] text-[#087f3f]">Arcus Strategy · Support Operations</p><h1 className="mt-1 text-xl font-black tracking-[-.025em]">Customer Support Dashboard</h1></div>
          <div className="flex items-center gap-2"><Link href="/admin/customers" className="hidden items-center gap-2 rounded-xl border border-[#d4ddd8] bg-white px-3 py-2 text-[9px] font-black text-[#26332d] sm:inline-flex"><Search size={13}/> Search customer</Link><Link href="/admin/support/tickets/new" className="inline-flex items-center gap-2 rounded-xl bg-[#087f3f] px-4 py-2.5 text-[10px] font-black text-white"><MessageSquare size={13}/> Create ticket</Link><div className="grid h-9 w-9 place-items-center rounded-xl bg-[#102019] text-[10px] font-black text-white">CS</div></div>
        </div>
      </header>

      <section className="px-5 pb-4 pt-7 sm:px-8 xl:px-10"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.17em] text-[#7b8580]">Customer operations</p><h2 className="mt-1 text-2xl font-black tracking-[-.035em]">Keep customers moving</h2><p className="mt-1 max-w-2xl text-[11px] text-[#707a75]">Find customers, resolve support requests and identify onboarding blockers after payment or service purchase.</p></div><div className="flex gap-2"><Link href="/admin/customers/onboarding" className="inline-flex items-center gap-2 rounded-xl border border-[#cfd9d3] bg-white px-4 py-2.5 text-[10px] font-black text-[#26332d]">Onboarding queue <ArrowRight size={13}/></Link><Link href="/admin/support/tickets?view=urgent" className="inline-flex items-center gap-2 rounded-xl bg-[#102019] px-4 py-2.5 text-[10px] font-black text-white">Urgent tickets <ArrowRight size={13}/></Link></div></div></section>

      <section className="grid gap-3 px-5 py-4 sm:grid-cols-2 xl:grid-cols-4 sm:px-8 xl:px-10">
        {[
          ['Open Tickets', '126', 'Across all support queues', Headphones, 'text-[#087f3f]', '/admin/support/tickets'],
          ['Urgent Tickets', '8', 'Requires immediate action', AlertTriangle, 'text-[#b33a3a]', '/admin/support/tickets?view=urgent'],
          ['My Assigned Tickets', '34', 'Currently assigned to you', UserRound, 'text-[#087f3f]', '/admin/support/tickets?view=my'],
          ['Waiting for Customer', '21', 'Customer response required', Clock3, 'text-[#966816]', '/admin/support/tickets?view=pending'],
        ].map(([label, value, note, Icon, icon, href]) => <Link key={label as string} href={href as string} className="rounded-2xl border border-[#dfe6e2] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,20,.03)] transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex items-start justify-between"><span className="text-[9px] font-black uppercase tracking-[.12em] text-[#7b8580]">{label as string}</span><Icon size={17} className={icon as string}/></div><strong className="mt-3 block text-2xl font-black tracking-[-.04em]">{value as string}</strong><span className="mt-1 block text-[9px] text-[#7b8580]">{note as string}</span></Link>)}
      </section>

      <section className="grid gap-5 px-5 py-4 sm:px-8 xl:grid-cols-[1.45fr_.8fr] xl:px-10">
        <div className="rounded-2xl border border-[#dfe6e2] bg-white p-6"><div className="flex items-center justify-between"><div><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#087f3f]">Live queue</p><h3 className="mt-1 text-base font-black">Ticket queue</h3></div><Link href="/admin/support/tickets" className="text-[9px] font-black text-[#087f3f]">View all tickets</Link></div><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[720px] text-left"><thead><tr className="border-b border-[#e8ecea] text-[8px] uppercase tracking-[.12em] text-[#88928d]"><th className="pb-3">Ticket</th><th className="pb-3">Customer</th><th className="pb-3">Category</th><th className="pb-3">Priority</th><th className="pb-3">Status</th><th className="pb-3">Assigned</th><th className="pb-3"></th></tr></thead><tbody>{tickets.map(ticket => <tr key={ticket.id} className="border-b border-[#f0f2f1] text-[9px]"><td className="py-3 font-black"><Link href={`/admin/support/tickets/${ticket.id.replace('#','')}`} className="text-[#087f3f] hover:underline">{ticket.id}</Link><span className="mt-0.5 block text-[7px] font-normal text-[#8a938f]">{ticket.time}</span></td><td className="py-3 font-bold">{ticket.customer}</td><td className="py-3 text-[#626d67]">{ticket.category}</td><td className="py-3"><span className={`rounded-full px-2 py-1 text-[7px] font-black ${statusClass(ticket.priority)}`}>{ticket.priority}</span></td><td className="py-3"><span className={`rounded-full px-2 py-1 text-[7px] font-black ${statusClass(ticket.status)}`}>{ticket.status}</span></td><td className="py-3 text-[#626d67]">{ticket.assigned}</td><td className="py-3 text-right"><Link href={`/admin/support/tickets/${ticket.id.replace('#','')}`} className="font-black text-[#087f3f]">Open</Link></td></tr>)}</tbody></table></div></div>

        <div className="rounded-2xl border border-[#dfe6e2] bg-white p-6"><div className="flex items-center justify-between"><div><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#087f3f]">Customer lookup</p><h3 className="mt-1 text-base font-black">Find a customer</h3></div><Users size={17} className="text-[#087f3f]"/></div><div className="mt-4 flex items-center gap-2 rounded-xl border border-[#dfe6e2] bg-[#f8faf9] px-3 py-3"><Search size={14} className="text-[#7b8580]"/><span className="text-[10px] text-[#8a938f]">Name, email or customer ID</span></div><div className="mt-4 space-y-2"><Link href="/admin/customers" className="flex items-center justify-between rounded-xl border border-[#e7ece9] p-3 hover:bg-[#f7f9f8]"><span><strong className="block text-[10px]">Search Customer</strong><span className="text-[8px] text-[#7b8580]">Profile, subscription, services, KYC and tickets</span></span><ArrowRight size={14}/></Link><Link href="/admin/customers/onboarding" className="flex items-center justify-between rounded-xl border border-[#e7ece9] p-3 hover:bg-[#f7f9f8]"><span><strong className="block text-[10px]">Onboarding blockers</strong><span className="text-[8px] text-[#7b8580]">Customers stuck after purchase</span></span><ArrowRight size={14}/></Link></div></div>
      </section>

      <section className="px-5 py-4 pb-10 sm:px-8 xl:px-10"><div className="rounded-2xl border border-[#dfe6e2] bg-white p-6"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#087f3f]">Service delivery</p><h3 className="mt-1 text-base font-black">Customer onboarding pipeline</h3><p className="mt-1 text-[9px] text-[#7b8580]">Payment completed → service purchased → credentials/details submitted → account configured → service activated.</p></div><Link href="/admin/customers/onboarding" className="text-[9px] font-black text-[#087f3f]">Open onboarding</Link></div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[900px] text-left"><thead><tr className="border-b border-[#e8ecea] text-[8px] uppercase tracking-[.12em] text-[#88928d]"><th className="pb-3">Customer</th><th className="pb-3">Service</th><th className="pb-3">Payment</th><th className="pb-3">Purchased</th><th className="pb-3">Credentials / details</th><th className="pb-3">Configured</th><th className="pb-3">Activated</th></tr></thead><tbody>{onboarding.map(row => <tr key={row.customer} className="border-b border-[#f0f2f1] text-[9px]"><td className="py-3 font-black">{row.customer}</td><td className="py-3 text-[#59645f]">{row.service}</td>{[row.payment,row.purchased,row.credentials,row.configured,row.activated].map((value,i)=><td key={`${row.customer}-${i}`} className="py-3"><span className={`rounded-full px-2 py-1 text-[7px] font-black ${statusClass(value)}`}>{value}</span></td>)}</tr>)}</tbody></table></div></div></section>

      <section className="px-5 pb-10 sm:px-8 xl:px-10"><div className="rounded-2xl border border-[#e7ece9] bg-[#f9fbfa] p-5"><div className="flex gap-3"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#087f3f]"/><div><strong className="text-[10px] font-black">Support access boundary</strong><p className="mt-1 max-w-4xl text-[9px] leading-5 text-[#68736e]">Customer Support is intentionally limited to customer-service operations. Financial administration, system configuration, staff permissions and sensitive investor credentials are not part of this workspace.</p></div></div></div></section>
    </main>
  );
}

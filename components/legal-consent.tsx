import Link from 'next/link';

export default function LegalConsent({checked,onChange}:{checked:boolean;onChange:(checked:boolean)=>void}){
  return <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--arcus-border)] bg-[#f8faf9] p-3 text-[11px] leading-5 text-[var(--arcus-muted)]">
    <input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--arcus-green)]" />
    <span>I confirm that I have read and agree to the <Link href="/legal/terms-conditions" target="_blank" className="font-bold text-[var(--arcus-green)] underline">Terms & Conditions</Link>, <Link href="/legal/privacy-policy" target="_blank" className="font-bold text-[var(--arcus-green)] underline">Privacy Policy</Link>, <Link href="/legal/risk-disclosure" target="_blank" className="font-bold text-[var(--arcus-green)] underline">Risk Disclosure</Link>, <Link href="/legal/disclaimer" target="_blank" className="font-bold text-[var(--arcus-green)] underline">Disclaimer</Link>, and the product-specific legal terms applicable to any service I use. I understand that these documents form the binding legal framework for my use of Arcus Strategy.</span>
  </label>;
}
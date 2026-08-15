import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arcus Strategy | Algorithmic Trading & Financial Technology',
  description: 'Arcus Strategy delivers algorithmic trading, trade replication, risk management and financial technology services.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IndiaDigitalSMS — Operations Dashboard',
  description: 'Live messaging performance across your channels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-page text-slate-800">{children}</body>
    </html>
  );
}

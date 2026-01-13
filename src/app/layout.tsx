import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BoxFan - Ambient Sleep Timer',
  description: 'Download BoxFan: A lightweight Android app for ambient fan noise and sleep timer. Perfect for relaxation and better sleep.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'BoxFan - Ambient Sleep Timer',
    description: 'Download the APK for your Android device',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

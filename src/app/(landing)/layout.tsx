import type { Metadata } from 'next';
import '@/app/globals.css';
import { AdSenseScript } from '@/components/AdSenseScript';
import { baseMetadata } from '@/lib/base-metadata';

export const metadata: Metadata = baseMetadata;

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AdSenseScript />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { AppProvider } from '@/providers/app-provider';
import { Toaster } from 'sonner';

const font = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sijanprog.vercel.app/'),

  title: {
    template: '%s | Sijan',
    default: 'Sijan Thapa',
  },
  authors: {
    name: 'Sijan',
  },
  icons: {
    icon: '/favicon.ico',
  },

  description:
    "Based in Pokhara, I'm a aspiring fullstack developer learning and building the modern web application.",
  openGraph: {
    title: 'Sijan Thapa',
    description:
      "Based in Pokhara, I'm a aspiring fullstack developer learning and building the modern web application.",
    url: 'https://sijanprog.vercel.app/',
    siteName: 'Sijan Thapa',
    images: '/og.png',
    type: 'website',
  },
  keywords: ['sijan', 'Sijan Thapa', 'sijanthapa'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}

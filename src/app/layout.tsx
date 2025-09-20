import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        {/* Initialize theme early to avoid FOUC */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const storageKey = 'theme';
              const stored = localStorage.getItem(storageKey);
              const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = stored || (preferDark ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            } catch (_) {}
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-[var(--bg)]`}>
        <main className="container mx-auto p-4">
          {children}
        </main>
        {/* Footer */}
        <footer className="footer">
          <div className="footer-wrap">
            <div className="footer-content">
              <div className="footer-text">© 2025 Nikita Chernysh. All rights reserved.</div>
            </div>
          </div>
        </footer>
        {/* Base page script */}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

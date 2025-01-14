import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from '@/components/providers';
import Sidebar from '@/components/Sidebar';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Portfolio',
  description: 'A modern, animated portfolio website built with Next.js',
  keywords: ['portfolio', 'developer', 'web development', 'next.js', 'react'],
  authors: [{ name: 'Kijana Ian Otieno' }],
  creator: 'Your Name',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            {/* <Header /> */}
            <div className="flex flex-1 pt-16">
              <Sidebar />
              <main className="flex-1 ml-0 md:ml-64 p-4">
                {children}
              </main>
            </div>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from '@/components/providers';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Animated Portfolio',
  description: 'An animated portfolio website built with Next.js',
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    try {
      return (await import('../../messages/en.json')).default;
    } catch (fallbackError) {
      return null;
    }
  }
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
    { locale: 'fr' },
    { locale: 'es' },
    { locale: 'sw' }
  ];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  if (!messages) {
    notFound();
  }

  return (
    <Providers>
      <div className={`${inter.className} flex flex-col min-h-screen`}>
        <Header messages={messages} />
        <div className="flex flex-1 pt-[5px]">
          <Sidebar messages={messages} />
          <main className="flex-1 ml-64">
            {children}
          </main>
        </div>
        <Footer messages={messages} />
      </div>
    </Providers>
  );
}

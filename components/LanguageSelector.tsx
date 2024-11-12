"use client";

import { usePathname, useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'sw', name: 'Kiswahili' }
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('');

  useEffect(() => {
    setMounted(true);
    const locale = pathname.split('/')[1];
    setCurrentLocale(locale);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  return (
    <Select defaultValue={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px]">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
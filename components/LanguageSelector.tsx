"use client"

import { usePathname, useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', icon: '🇬🇧' }, // British Flag Emoji
  { code: 'de', name: 'Deutsch', icon: '🇩🇪' }, // German Flag Emoji
  { code: 'fr', name: 'Français', icon: '🇫🇷' }, // French Flag Emoji
  { code: 'es', name: 'Español', icon: '🇪🇸' }, // Spanish Flag Emoji
  { code: 'sw', name: 'Kiswahili', icon: '🇰🇪' } // Kenyan Flag Emoji
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  // Explicitly type the locale parameter as string
  const handleLanguageChange = (locale: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    router.push(`/${locale}/${currentPath}`);
  };

  const currentLocale = pathname.split('/')[1];

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px]">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className="mr-2 text-xl">{lang.icon}</span> {/* Render the flag emoji */}
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

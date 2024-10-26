"use client"

import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';

interface Messages {
  navigation: {
    home: string;
    about: string;
    services: string;
    projects: string;
    education: string;
    skills: string;
    experience: string;
    contact: string;
  };
}

interface HeaderProps {
  messages: Messages;
}

const Header = ({ messages }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Default navigation items in English as fallback
  const defaultNavItems = [
    { key: 'about', label: 'About' },
    { key: 'services', label: 'Services' },
    { key: 'projects', label: 'Projects' },
    { key: 'education', label: 'Education' },
    { key: 'skills', label: 'Skills' },
    { key: 'experience', label: 'Experience' },
    { key: 'contact', label: 'Contact' }
  ];

  // Use messages if available, otherwise use default labels
  const navItems = messages?.navigation ? [
    { key: 'about', label: messages.navigation.about },
    { key: 'services', label: messages.navigation.services },
    { key: 'projects', label: messages.navigation.projects },
    { key: 'education', label: messages.navigation.education },
    { key: 'skills', label: messages.navigation.skills },
    { key: 'experience', label: messages.navigation.experience },
    { key: 'contact', label: messages.navigation.contact }
  ] : defaultNavItems;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          <Link href="/">{messages?.navigation?.home || 'Home'}</Link>
        </motion.h1>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4 items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link href={`/${item.key}`} className="hover:text-primary">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <LanguageSelector />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
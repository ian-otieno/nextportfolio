"use client"; // Add this line at the top to mark the component as a client component

import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

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
  messages?: Messages;
  toggleSidebar: () => void;
}

export default function Header({ messages, toggleSidebar }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const defaultNavItems = [
    { key: 'about', label: 'About' },
    { key: 'services', label: 'Services' },
    { key: 'projects', label: 'Projects' },
    { key: 'education', label: 'Education' },
    { key: 'skills', label: 'Skills' },
    { key: 'experience', label: 'Experience' },
    { key: 'contact', label: 'Contact' }
  ];

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
      className="fixed w-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 h-16"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          <Link href="/">{messages?.navigation?.home || ''}</Link>
        </motion.h1>

        {/* Theme Toggle Button */}
        <div className="flex items-center space-x-4">
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
}

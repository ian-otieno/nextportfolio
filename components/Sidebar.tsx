"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { 
  Home,
  User,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Code,
  Clock,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: '', icon: Home, label: 'Home' },
    { key: 'about', icon: User, label: 'About' },
    { key: 'services', icon: Briefcase, label: 'Services' },
    { key: 'projects', icon: FolderOpen, label: 'Projects' },
    { key: 'education', icon: GraduationCap, label: 'Education' },
    { key: 'skills', icon: Code, label: 'Skills' },
    { key: 'experience', icon: Clock, label: 'Experience' },
    { key: 'contact', icon: Mail, label: 'Contact' }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger button for mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
          <motion.nav
            initial={{ x: -288 }}
            animate={{ x: 0 }}
            exit={{ x: -288 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`w-64 bg-secondary fixed h-full left-0 top-16 overflow-y-auto z-40 
              ${isOpen ? 'block' : 'hidden md:block'}`}
          >
            <div className="py-4">
              {navItems.map((item, index) => {
                const path = `/${item.key}`;
                const isActive = pathname === path;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}  // Close sidebar on item click
                  >
                    <Link
                      href={path}
                      className={`flex items-center px-6 py-3 text-sm font-medium transition-colors
                        ${isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                        }`}
                    >
                      <Icon className={`mr-3 h-4 w-4 ${isActive ? 'text-primary' : ''}`} />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

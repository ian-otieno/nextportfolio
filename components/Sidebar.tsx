"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFolder,
  FaGraduationCap,
  FaCode,
  FaClock,
  FaEnvelope
} from 'react-icons/fa';

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

interface SidebarProps {
  messages: Messages;
}

export default function Sidebar({ messages }: SidebarProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const navItems = [
    { key: '', icon: FaHome, label: messages.navigation.home },
    { key: 'about', icon: FaUser, label: messages.navigation.about },
    { key: 'services', icon: FaBriefcase, label: messages.navigation.services },
    { key: 'projects', icon: FaFolder, label: messages.navigation.projects },
    { key: 'education', icon: FaGraduationCap, label: messages.navigation.education },
    { key: 'skills', icon: FaCode, label: messages.navigation.skills },
    { key: 'experience', icon: FaClock, label: messages.navigation.experience },
    { key: 'contact', icon: FaEnvelope, label: messages.navigation.contact }
  ];

  return (
    <nav className="w-64 bg-secondary fixed h-full left-0 top-16 overflow-y-auto">
      <motion.div
        initial={{ x: -64 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="py-4"
      >
        {navItems.map((item, index) => {
          const path = `/${locale}${item.key ? `/${item.key}` : ''}`;
          const isActive = pathname === path;
          
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={path}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mr-3 h-4 w-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  <item.icon />
                </motion.div>
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </nav>
  );
}

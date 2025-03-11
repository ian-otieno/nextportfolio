"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  MoonIcon,
  SunIcon,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Clock,
  Mail,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Messages {
  navigation: {
    home: string
    about: string
    services: string
    projects: string
    education: string
    experience: string
    contact: string
  }
}

interface NavigationProps {
  messages?: Messages
}

export default function Navigation({ messages }: NavigationProps) {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false)
        setDropdownOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  if (!mounted) {
    return null
  }

  const navItems = [
    { key: "", icon: Home, label: messages?.navigation?.home || "Home" },
    { key: "about", icon: User, label: messages?.navigation?.about || "About" },
    { key: "services", icon: Briefcase, label: messages?.navigation?.services || "Services" },
    {
      key: "work",
      icon: FolderOpen,
      label: "Work",
      children: [
        { key: "education", icon: GraduationCap, label: messages?.navigation?.education || "Education" },
        { key: "experience", icon: Clock, label: messages?.navigation?.experience || "Experience" },
        { key: "projects", icon: FolderOpen, label: messages?.navigation?.projects || "Projects" },
      ],
    },
    { key: "contact", icon: Mail, label: messages?.navigation?.contact || "Contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              <Link href="/" className="flex items-center gap-2">
                {/* Add your logo here */}
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Iano</span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const path = `/${item.key}`
                const isActive =
                  pathname === path || (item.children && item.children.some((child) => pathname === `/${child.key}`))

                if (item.children) {
                  return (
                    <div key={item.key} className="relative group">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={cn(
                          "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1",
                          isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                        )}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.key}
                                href={`/${child.key}`}
                                className={cn(
                                  "block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors",
                                  pathname === `/${child.key}` && "bg-primary/10 text-primary",
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.key}
                    href={path}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-3"
                        layoutId="navbar-indicator"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
                aria-label="Toggle theme"
              >
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-16 right-0 bottom-0 w-64 z-50 bg-background shadow-lg border-l border-border"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon

                  if (item.children) {
                    return (
                      <div key={item.key} className="space-y-2">
                        <div className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground">
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </div>
                        {item.children.map((child) => {
                          const ChildIcon = child.icon
                          const isActive = pathname === `/${child.key}`
                          return (
                            <Link
                              key={child.key}
                              href={`/${child.key}`}
                              className={cn(
                                "flex items-center gap-3 px-8 py-3 rounded-md text-sm font-medium transition-colors",
                                isActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <ChildIcon className="h-4 w-4" />
                              {child.label}
                            </Link>
                          )
                        })}
                      </div>
                    )
                  }

                  const path = `/${item.key}`
                  const isActive = pathname === path

                  return (
                    <Link
                      key={item.key}
                      href={path}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}


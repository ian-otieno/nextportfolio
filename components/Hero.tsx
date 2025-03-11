"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sun, Moon, Download, ChevronDown
} from "lucide-react";
import {
  FaReact, FaFlask, FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
  FaDatabase, FaPython, FaJs
} from "react-icons/fa";
import {
  SiDjango, SiNextdotjs, SiPostgresql, SiDotnet, SiSharp
} from "react-icons/si";

const carouselMessages = [
  "Welcome to my Portfolio!",
  "I'm Ian Otieno",
  "Software Developer",
  "Tech Enthusiast"
];

const descriptionMessage = "Explore my work, and let's connect!";

const technologies = [
  { name: "ASP.NET Core", icon: <SiDotnet className="text-purple-600 dark:text-purple-400" size={28} /> },
  { name: "Django", icon: <SiDjango className="text-green-700 dark:text-green-500" size={28} /> },
  { name: "Flask", icon: <FaFlask className="text-gray-800 dark:text-gray-200" size={26} /> },
  { name: "React", icon: <FaReact className="text-blue-500 dark:text-blue-400" size={28} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={28} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 dark:text-blue-400" size={28} /> },
  { name: "Microsoft SQL", icon: <FaDatabase className="text-red-600 dark:text-red-400" size={28} /> },
  { name: "Python", icon: <FaPython className="text-blue-600 dark:text-blue-400" size={28} /> },
  { name: "C#", icon: <SiSharp className="text-purple-600 dark:text-purple-400" size={28} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 dark:text-yellow-400" size={28} /> },
];

export default function Home() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const [isResumeVisible, setIsResumeVisible] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTechIndex((prevIndex) => {
        const nextIndex = Math.floor(Math.random() * technologies.length);
        return nextIndex !== prevIndex ? nextIndex : (nextIndex + 1) % technologies.length;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleResumeVisibility = () => {
    setIsResumeVisible(!isResumeVisible);
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-white dark:bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-400/20 dark:bg-yellow-500/10 rounded-full filter blur-3xl opacity-70 md:w-96 md:h-96"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full filter blur-3xl opacity-70 md:w-1/2 md:h-1/2"></div>
      </div>

      <section className="min-h-screen flex flex-col justify-center relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-md transition-all duration-200 backdrop-blur-sm"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
        </button>

        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-yellow-400/30 dark:border-yellow-500/20 animate-spin-slow"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]">
                <Image
                  src="/images/IMG_20190703_182313-removebg-preview (1).png"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 dark:bg-yellow-500 rounded-full opacity-20 blur-md"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 dark:bg-blue-500 rounded-full opacity-20 blur-md"></div>
            </div>
          </motion.div>

          <div className="order-2 text-left">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-50 leading-tight"
            >
              {carouselMessages[currentIndex]}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-lg"
            >
              {descriptionMessage} I specialize in building modern, responsive web applications with cutting-edge technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">Technologies I work with:</h3>

              <div className="relative h-24 overflow-hidden" ref={carouselRef}>
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-50/90 dark:from-gray-900/90 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-50/90 dark:from-gray-900/90 to-transparent z-10"></div>

                <div className="flex items-center h-full space-x-6 animate-carousel">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg ${
                        activeTechIndex === index
                          ? "bg-white dark:bg-gray-800 shadow-lg scale-110 z-20"
                          : "bg-white/60 dark:bg-gray-800/60"
                      } border border-gray-200 dark:border-gray-700 transition-all duration-300 min-w-[140px]`}
                      animate={
                        activeTechIndex === index
                          ? {
                              scale: [1, 1.1, 1.1, 1.1, 1.1],
                              y: [0, -5, 0, -5, 0],
                              rotate: [0, -2, 0, 2, 0],
                            }
                          : { scale: 1, y: 0, rotate: 0 }
                      }
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                      }}
                    >
                      <motion.div
                        animate={activeTechIndex === index ? { rotate: [0, 10, -10, 10, 0] } : { rotate: 0 }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          times: [0, 0.25, 0.5, 0.75, 1],
                        }}
                        className="mb-2"
                      >
                        {tech.icon}
                      </motion.div>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center cursor-pointer group mb-8"
              onClick={toggleResumeVisibility}
            >
              <a
                href={isResumeVisible ? "https://drive.google.com/file/d/1yk3DTLshEEKpgIftjHFBK0TtvhCCPdKn/view?usp=sharing" : "#"}
                target={isResumeVisible ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-6 w-6 text-blue-500 group-hover:animate-pulse" />
                <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                  {isResumeVisible ? "Download Resume" : "Show Resume"}
                </span>
              </a>
              <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-400 animate-bounce group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <SocialLink href="https://github.com/ian-otieno" icon={<FaGithub className="text-gray-700 dark:text-gray-200" size={22} />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/ian-owino" icon={<FaLinkedin className="text-blue-500" size={22} />} label="LinkedIn" />
              <SocialLink href="https://twitter.com/IanOtieno97" icon={<FaTwitter className="text-blue-500" size={22} />} label="Twitter" />
              <SocialLink href="mailto:ianowino3@gmail.com" icon={<FaEnvelope className="text-red-500" size={22} />} label="Email" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <Link href="/about" passHref>
                <motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                    Learn More
                  </span>
                  <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-400 animate-bounce group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-140px * ${technologies.length} - 6rem)); }
        }

        .animate-carousel {
          animation: carousel 30s linear infinite;
        }

        .pointer-animation {
          position: relative;
          overflow: hidden;
        }

        .pointer-animation::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;
          height: 300%;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.5s ease;
        }

        .pointer-animation:hover::after {
          transform: translate(-50%, -50%) scale(1);
        }
      `}</style>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400 shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

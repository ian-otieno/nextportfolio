'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { FaDownload, FaArrowDown, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const carouselMessages = [
  "🌟 Welcome to Ian Otieno's Portfolio!",
  "💻 Passionate about crafting modern web experiences.",
  "🚀 Let's bring your digital visions to life!",
  "✨ Together, we can build something extraordinary!"
]

const descriptionMessage = "Explore my work, and let's connect!"

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/ian-otieno', label: 'GitHub', color: '#171515' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/ian-owino', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaTwitter, href: 'https://twitter.com/IanOtieno97', label: 'Twitter', color: '#1DA1F2' },
  { icon: FaEnvelope, href: 'mailto:ianowino3@gmail.com', label: 'Email', color: '#D44638' }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showSocialIcons, setShowSocialIcons] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselMessages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons)
  }

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-background to-secondary p-4 sm:p-8">
      <Card className="w-full h-full max-w-6xl shadow-lg flex flex-col justify-center">
        <CardContent className="p-8 sm:p-12 md:p-16 flex-grow flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-12 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-2/5"
            >
              <Avatar className="w-64 h-64 mx-auto">
                <AvatarImage src="/images/IMG_20190703_182313-removebg-preview (1).png" alt="Ian Otieno" />
                <AvatarFallback>IO</AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="w-full lg:w-3/5 space-y-8">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl font-bold text-center lg:text-left"
                >
                  {carouselMessages[currentIndex]}
                </motion.h1>
              </AnimatePresence>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground text-center lg:text-left"
              >
                {descriptionMessage}
              </motion.p>

              {showSocialIcons && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex justify-center lg:justify-start space-x-6"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.label}
                      style={{ color: link.color }}
                      className="text-3xl"
                    >
                      <link.icon className="w-8 h-8" />
                    </motion.a>
                  ))}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Button asChild variant="outline" size="lg" className="group">
                  <a href="https://drive.google.com/file/d/1yk3DTLshEEKpgIftjHFBK0TtvhCCPdKn/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FaDownload className="mr-2 h-5 w-5" />
                    <span className="text-lg">Download Resume</span>
                  </a>
                </Button>
                <Button asChild size="lg" onClick={toggleSocialIcons}>
                  <Link href="/about" className="flex items-center">
                    <span className="text-lg">Learn More</span>
                    <FaArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

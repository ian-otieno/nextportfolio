"use client"; // Marking the component as a Client Component

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

// Carousel messages
const carouselMessages = [
  "🌟 Welcome to Ian Otieno's Portfolio!",
  "💻 Passionate about crafting modern web experiences.",
  "🚀 Let's bring your digital visions to life!",
  "✨ Together, we can build something extraordinary!"
];

// Description message
const descriptionMessage = "Explore my work, and let’s connect!";

// SVG Icons
const icons = {
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-gray-800 transition-transform transform hover:scale-110" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.53c.4.073.553-.174.553-.387 0-.191-.007-.696-.013-1.367-2.24.486-2.71-1.08-2.71-1.08-.365-.93-.89-1.175-.89-1.175-.727-.497.055-.487.055-.487.805.057 1.227.826 1.227.826.715 1.224 1.874.87 2.332.665.072-.517.28-.87.51-1.07-1.78-.202-3.645-.89-3.645-3.966 0-.875.313-1.588.825-2.148-.083-.202-.358-1.013.078-2.109 0 0 .67-.214 2.2.82a7.494 7.494 0 0 1 2-.27c.68.003 1.368.093 2 .27 1.53-1.034 2.2-.82 2.2-.82.437 1.096.162 1.907.08 2.109.513.56.825 1.273.825 2.148 0 3.086-1.87 3.764-3.65 3.966.29.25.55.738.55 1.485 0 1.07-.01 1.934-.01 2.2 0 .215.148.464.553.387A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-blue-600 transition-transform transform hover:scale-110" viewBox="0 0 16 16">
      <path d="M1.146 0A1.146 1.146 0 0 0 0 1.146v13.708A1.146 1.146 0 0 0 1.146 16h13.708A1.146 1.146 0 0 0 16 14.854V1.146A1.146 1.146 0 0 0 14.854 0H1.146zM4.5 13.5h-2V5.25h2v8.25zm-1-9.375A1.125 1.125 0 1 1 4.5 3.75 1.125 1.125 0 0 1 3.5 4.125zM12.5 13.5h-2v-4.25c0-1.017-.021-2.327-1.417-2.327-1.416 0-1.632 1.107-1.632 2.25v4.327h-2V5.25h2v1.125h.025c.279-.527.963-1.125 2.057-1.125 2.203 0 2.604 1.45 2.604 3.33v5.125z" />
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-blue-500 transition-transform transform hover:scale-110" viewBox="0 0 16 16">
      <path d="M16 3.038a6.57 6.57 0 0 1-1.885.517A3.298 3.298 0 0 0 15.553 2c-.646.384-1.36.664-2.125.81A3.295 3.295 0 0 0 11.06.5a3.29 3.29 0 0 0-3.29 3.29c0 .258.029.51.085.75A9.325 9.325 0 0 1 1.112.54a3.278 3.278 0 0 0-.44 1.646c0 1.14.58 2.145 1.46 2.738A3.282 3.282 0 0 1 .64 4.792v.033c0 1.588 1.129 2.916 2.63 3.23a3.286 3.286 0 0 1-1.478.056c.416 1.303 1.63 2.253 3.06 2.283A6.572 6.572 0 0 1 0 13.53c1.55 1.003 3.395 1.59 5.36 1.59 6.462 0 10-5.36 10-10 0-.153-.004-.305-.012-.456A7.19 7.19 0 0 0 16 3.038z" />
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-red-500 transition-transform transform hover:scale-110" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 0h12v1.5H2V4zm0 2h12v1.5H2V6zm0 2h12v1.5H2V8zm0 2h12v1.5H2v-1.5z" />
    </svg>
  ),
  download: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-gray-800 transition-transform transform hover:scale-110" viewBox="0 0 16 16">
      <path d="M8 0a.5.5 0 0 1 .5.5v10.793l5.146-5.147a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 .708-.708L7.5 11.293V.5A.5.5 0 0 1 8 0zM1 14.5A1.5 1.5 0 0 1 2.5 16h11A1.5 1.5 0 0 1 15 14.5V14H1v.5z" />
    </svg>
  )
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselMessages.length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Initial scale for the animation
          animate={{ opacity: 1, scale: 1 }} // Final scale for the animation
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/images/IMG_20190703_182313-removebg-preview (1).png"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full mx-auto shadow-lg"
          />
        </motion.div>

        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-4xl font-bold mb-4 transition-transform transform hover:scale-105"
        >
          {carouselMessages[currentIndex]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          className="text-xl mb-8"
        >
          {descriptionMessage}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          className="flex justify-center space-x-6 mb-8"
        >
          <a href="https://github.com/ian-otieno" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {icons.github}
            </motion.div>
          </a>
          <a href="https://linkedin.com/in/ian-owino" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {icons.linkedin}
            </motion.div>
          </a>
          <a href="https://twitter.com/IanOtieno97" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {icons.twitter}
            </motion.div>
          </a>
          <a href="mailto:ianowino3@gmail.com" className="hover:text-primary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {icons.email}
            </motion.div>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
        >
          <Button asChild variant="outline" className="group">
            <a href="https://drive.google.com/file/d/1yk3DTLshEEKpgIftjHFBK0TtvhCCPdKn/view?usp=sharing" download className="flex items-center">
              {icons.download} 
              <span className="text-base ml-2">Download My Resume</span>
            </a>
          </Button>
          <Button asChild className="group">
            <Link href="/about" className="flex items-center">
              <span className="text-base">Discover More</span>
              <FaArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
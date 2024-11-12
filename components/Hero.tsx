"use client"; // Marking the component as a Client Component

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaArrowDown, FaDownload, FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Carousel messages
const carouselMessages = [
  "🌟 Welcome to Ian Otieno Portfolio!",
  "💻 I’m a passionate web developer.",
  "🚀 Crafting amazing digital experiences!",
  "✨ Let's build something incredible together!"
];

// Description message
const descriptionMessage = "I'm a passionate web developer creating amazing digital experiences.";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselMessages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Initial scale for the animation
          animate={{ opacity: 1, scale: 1 }} // Final scale for the animation
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/images/IMG_20190703_182313-removebg-preview (1).png"
            alt="Profile Picture"
            width={300} // Increased size for the image
            height={300} // Increased size for the image
            className="rounded-full mx-auto"
          />
        </motion.div>

        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4" // Set to large size
        >
          {carouselMessages[currentIndex]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mb-8"
        >
          {descriptionMessage} {/* Use separate description message */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4 mb-8"
        >
         
          <a href="https://github.com/ian-otieno" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaGithub size={24} className="text-gray-800" />
            </motion.div>
          </a>
          <a href="https://linkedin.com/in/ian-owino" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaLinkedin size={24} className="text-blue-600" />
            </motion.div>
          </a>
          <a href="https://twitter.com/IanOtieno97" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaTwitter size={24} className="text-blue-500" />
            </motion.div>
          </a>
          <a href="mailto:ianowino3@gmail.com" className="hover:text-primary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaEnvelope size={24} className="text-red-500" />
            </motion.div>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button asChild variant="outline" className="group">
            <a href="https://drive.google.com/file/d/1ipKTtnk2dFxogMqvjS4VH37PxrHJWLDP/view?usp=sharing" download className="flex items-center">
              <FaDownload className="mr-2 h-4 w-4 group-hover:animate-bounce" /> 
              <span className="text-base">Download Resume</span>
            </a>
          </Button>
          <Button asChild className="group">
            <Link href="/about" className="flex items-center">
              <span className="text-base">Learn More</span>
              <FaArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

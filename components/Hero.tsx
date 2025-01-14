"use client"; // Marking the component as a Client Component

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDown, FaSun, FaMoon } from 'react-icons/fa';

// Carousel messages
const carouselMessages = [
    "Welcome to my Portfolio!",
    "I'm Ian Otieno",
    "Full Stack Developer",
    "Tech Enthusiast",
];

// Description message
const descriptionMessage = "Explore my work, and let’s connect!";

// SVG Icons
const icons = {
    github: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="transition-transform transform hover:scale-110" viewBox="0 0 16 16">...</svg>,
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="transition-transform transform hover:scale-110" viewBox="0 0 16 16">...</svg>,
    twitter: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="transition-transform transform hover:scale-110" viewBox="0 0 16 16">...</svg>,
    email: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="transition-transform transform hover:scale-110" viewBox="0 0 16 16">...</svg>,
    download: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="transition-transform transform hover:scale-110" viewBox="0 0 16 16">...</svg>
};

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselMessages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Toggle dark mode class on HTML element
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <section className={`min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-200`}>
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
                >
                    {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
                </button>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <Image
                        src="/images/IMG_20190703_182313-removebg-preview (1).png"
                        alt="Profile Picture"
                        width={300}
                        height={300}
                        className="rounded-full mx-auto shadow-lg border-4 border-white"
                    />
                </motion.div>

                <motion.h1
                    key={currentIndex}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-4xl sm:text-5xl font-extrabold mb-4 transition-transform transform hover:scale-105 text-black"
                >
                    {carouselMessages[currentIndex]}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                    className="text-lg sm:text-xl mb-8 text-black"
                >
                    {descriptionMessage}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
                    className="flex justify-center space-x-4 mb-8"
                >
                    {Object.entries(icons).map(([key, icon]) => (
                        <a key={key} href={key === 'github' ? "https://github.com/ian-otieno" : key === 'linkedin' ? "https://linkedin.com/in/ian-owino" : key === 'twitter' ? "https://twitter.com/IanOtieno97" : key === 'email' ? "mailto:ianowino3@gmail.com" : '#'} 
                           target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                {icon}
                            </motion.div>
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
                >
                    <Button asChild className="border border-white text-white hover:bg-white hover:text-black transition-colors p-2 rounded">
                        <a href="https://drive.google.com/file/d/1yk3DTLshEEKpgIftjHFBK0TtvhCCPdKn/view?usp=sharing" download className="flex items-center">
                            {icons.download} 
                            <span className="text-base ml-2">Download My Resume</span>
                        </a>
                    </Button>
                    <Button asChild className="group bg-yellow-500 hover:bg-yellow-400">
                        <Link href="/about" className="flex items-center text-black">
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

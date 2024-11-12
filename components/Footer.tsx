"use client";

import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary py-8"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Centered Text */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <p className="text-black-900 font-bold text-center">
            © 2024 My Portfolio. All rights reserved.
          </p>
        </div>

        {/* Right-Aligned Social Media Icons */}
        <div className="flex space-x-6 md:ml-auto">
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
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

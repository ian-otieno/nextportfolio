"use client";

import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

interface Messages {
  footer: {
    rights: string;
  };
}

interface FooterProps {
  messages: Messages;
}

const Footer = ({ messages }: FooterProps) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <motion.div
            className="flex space-x-4 ml-auto"
            initial={{ x: 20 }}
            animate={{ x: -20 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
          >
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaTwitter size={24} color="#1DA1F2" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaGithub size={24} color="#333" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaLinkedin size={24} color="#0077B5" />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-primary">
              <FaEnvelope size={24} color="#D44638" />
            </a>
            <a href="tel:+1234567890" className="hover:text-primary">
              <FaPhone size={24} color="#34B7F1" />
            </a>
          </motion.div>
        </div>
        <div className="text-center">
          <p>{messages?.footer?.rights || '© 2023 My Portfolio. All rights reserved.'}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-secondary/80 to-secondary py-8 relative"
    >
      <div className="container mx-auto px-4">
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute top-0 right-4 md:right-10 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>

        {/* Logo and copyright */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="font-bold text-2xl mb-2" whileHover={{ scale: 1.05 }}>
            My Portfolio
          </motion.div>
          <motion.p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>

          {/* Optional: Add a small tagline */}
          <motion.p
            className="mt-2 text-sm text-center max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
           
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer


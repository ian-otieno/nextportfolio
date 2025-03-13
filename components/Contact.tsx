"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const form = e.target as HTMLFormElement;

    try {
      await emailjs.sendForm(
        "service_qjkd8g6", // Replace with your EmailJS service ID
        "template_3rs0o8k", // Replace with your EmailJS template ID
        form,
        "G1t49Wp6DWnw4R3wK" // Replace with your EmailJS public key
      );

      setSuccess("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSuccess("Failed to send message. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
        >
          <div className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
            />
            <Input
              type="text"
              name="reply_to"
              placeholder="Your Email"
              required
              className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
            >
              {loading ? "Sending..." : <><SendIcon className="mr-2 h-4 w-4" /> Send Message</>}
            </Button>
            {success && <p className="text-center text-sm mt-2">{success}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

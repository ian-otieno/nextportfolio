"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { FaCode, FaHiking, FaBook, FaGamepad } from 'react-icons/fa';

const hobbies = [
  { name: 'Coding', icon: <FaCode className="text-blue-500 text-3xl" />, description: 'I do coding to solving problems .' },
  { name: 'Hiking', icon: <FaHiking className="text-green-500 text-3xl" />, description: 'Exploring nature helps me relax and recharge.' },
  { name: 'Reading', icon: <FaBook className="text-purple-500 text-3xl" />, description: 'I enjoy both fiction and non-fiction, always looking to learn more.' },
  { name: 'Gaming', icon: <FaGamepad className="text-red-500 text-3xl" />, description: 'I enjoy strategy games that challenge my thinking and teamwork.' },
];

const About = () => {
  const profileImage = "/images/IMG_20190703_182313-removebg-preview.png";

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <div className="relative h-full max-h-[500px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={profileImage}
                alt="Profile"
                width={700}
                height={500}
                className="rounded-lg h-full object-cover"
                draggable="false"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-xl">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  I am a dedicated and passionate Software Developer with a Bachelor of Science in Public Administration and Leadership from Jomo Kenyatta University of Agriculture and Technology (JKUAT), complemented by a Full Stack Development certification from Moringa School. I possess expertise in both frontend and backend development, with hands-on experience in modern web technologies including JavaScript, React, Python, Flask, Django, and PostgreSQL.
                </p>
                <p className="text-lg mb-4">
                  In addition to my expertise in web application development, I bring valuable skills in Microsoft SQL, Azure DevOps, VB.Net, ASP.NET Core, and C#, allowing me to build robust and scalable solutions. I am always eager to tackle challenging projects, collaborate with cross-functional teams, and continuously expand my technical knowledge to drive innovation and professional growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Hobbies
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 p-4 flex items-center space-x-4">
                <div>{hobby.icon}</div>
                <div>
                  <CardHeader>
                    <CardTitle className="text-xl">{hobby.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{hobby.description}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

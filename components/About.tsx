"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaCode, FaHiking, FaBook, FaGamepad, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const hobbies = [
  { name: 'Coding', icon: <FaCode className="text-blue-500 text-3xl" />, description: 'I do coding to solve problems and create innovative solutions.' },
  { name: 'Hiking', icon: <FaHiking className="text-green-500 text-3xl" />, description: 'Exploring nature helps me relax and recharge.' },
  { name: 'Reading', icon: <FaBook className="text-purple-500 text-3xl" />, description: 'I enjoy both fiction and non-fiction, always looking to learn more.' },
  { name: 'Gaming', icon: <FaGamepad className="text-red-500 text-3xl" />, description: 'I enjoy strategy games that challenge my thinking and teamwork.' },
]

export default function About() {
  const [expandedHobby, setExpandedHobby] = useState<number | null>(null)
  const [showFullBio, setShowFullBio] = useState(false)
  const profileImage = "/images/IMG_20190703_182313-removebg-preview.png"

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row items-center mb-12 space-y-8 lg:space-y-0 lg:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={profileImage}
                alt="Profile"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                draggable="false"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showFullBio ? 'full' : 'summary'}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-lg mb-4">
                      I am a dedicated and passionate Software Developer with a Bachelor of Science in Public Administration and Leadership from Jomo Kenyatta University of Agriculture and Technology (JKUAT), complemented by a Full Stack Development certification from Moringa School.
                    </p>
                    {showFullBio && (
                      <>
                        <p className="text-lg mb-4">
                          I possess expertise in both frontend and backend development, with hands-on experience in modern web technologies including JavaScript, React, Python, Flask, Django, and PostgreSQL.
                        </p>
                        <p className="text-lg mb-4">
                          In addition to my expertise in web application development, I bring valuable skills in Microsoft SQL, Azure DevOps, VB.Net, ASP.NET Core, and C#, allowing me to build robust and scalable solutions. I am always eager to tackle challenging projects, collaborate with cross-functional teams, and continuously expand my technical knowledge to drive innovation and professional growth.
                        </p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
                <Button
                  onClick={() => setShowFullBio(!showFullBio)}
                  variant="ghost"
                  className="mt-2 flex items-center"
                >
                  {showFullBio ? (
                    <>
                      Show Less <FaChevronUp className="ml-2" />
                    </>
                  ) : (
                    <>
                      Read More <FaChevronDown className="ml-2" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-bold text-center mb-8"
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
              <Card 
                className="h-full hover:shadow-lg transition-all duration-300 p-4 cursor-pointer bg-card/50 backdrop-blur-sm"
                onClick={() => setExpandedHobby(expandedHobby === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <div>{hobby.icon}</div>
                  <div className="flex-grow">
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl">{hobby.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-2">
                      <AnimatePresence>
                        {expandedHobby === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm"
                          >
                            {hobby.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </div>
                  <Button variant="ghost" size="icon">
                    {expandedHobby === index ? <FaChevronUp /> : <FaChevronDown />}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
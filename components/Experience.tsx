"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiAzuredevops, SiBootstrap } from 'react-icons/si'
import { GiTechnoHeart } from 'react-icons/gi'

const calculateDuration = (startDate: Date, endDate: Date = new Date()) => {
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth()
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`
  } else {
    return `${months} month${months > 1 ? 's' : ''}`
  }
}

const experiences = [
  {
    title: 'Software Developer',
    company: 'CoreBankingSystem Fintech Group Kenya',
    startDate: new Date(2023, 8), // September 2023
    endDate: null, // Present
    location: 'Nairobi, Kenya',
    responsibilities: [
      'Enhanced financial technology applications performance by resolving concurrent user request issues.',
      'Upgraded and implemented loan and SACCO management system using ASP.NET Core Web APIs.',
      'Led quarterly projects for leasing solutions, reducing issue resolution time by 50%.',
    ],
    techStack: ['C#', 'ASP.NET Core', 'VB.NET', 'Microsoft SQL', 'SCRUM', 'Web APIs'],
  },
  {
    title: 'Software Developer Trainee',
    company: 'Fintech Group Kenya',
    startDate: new Date(2023, 2), // March 2023
    endDate: new Date(2023, 7), // August 2023
    location: 'Nairobi, Kenya',
    responsibilities: [
      'Developed Finmetrics web application monitoring system using ASP.NET Core Web APIs.',
      'Designed and deployed Evoucher web-based grant management system.',
      'Enhanced LeasePac leasing system, improving functionality.',
      'Utilized Microsoft Azure DevOps for project tracking and workflow management.',
    ],
    techStack: ['ASP.NET Core', 'C#', 'Microsoft SQL', 'Azure DevOps', 'SCRUM'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Fintech Group Kenya',
    startDate: new Date(2022, 10), // November 2022
    endDate: new Date(2023, 1), // February 2023
    location: 'Nairobi, Kenya',
    responsibilities: [
      'Upgraded Citibank Credit Workflow web application using SCRUM Agile practices.',
      'Updated UI for Citibank Credit Workflow system to Bootstrap version 5.',
      'Conducted extensive testing and validation for system stability and performance.',
    ],
    techStack: ['ASP.NET Core', 'C#', 'Bootstrap', 'SCRUM'],
  },
  {
    title: 'Data Entry Specialist',
    company: 'Atlantis',
    startDate: new Date(2020, 7), // August 2020
    endDate: new Date(2021, 5), // June 2021
    location: 'Nairobi, Kenya',
    responsibilities: [
      'Entered, updated, and verified data accuracy across multiple systems.',
      'Ensured organized and easily accessible information.',
    ],
    techStack: [],
  },
  {
    title: 'Attaché – Intergovernmental Relations',
    company: 'The Government of Kenya, Ministry of Devolution and ASAL Areas',
    startDate: new Date(2019, 5), // May 2019
    endDate: new Date(2019, 7), // July 2019
    location: 'Nairobi, Kenya',
    responsibilities: [
      'Conducted audits and performance evaluations of County Governments.',
      'Assisted in policy development for Big 4 Agenda, County Regional Economic Zones, and governance frameworks.',
    ],
    techStack: [],
  },
]

const iconMap = {
  'C#': SiCsharp,
  'ASP.NET Core': SiDotnet,
  'Microsoft SQL': SiMicrosoftsqlserver,
  'Azure DevOps': SiAzuredevops,
  'Bootstrap': SiBootstrap,
}

const iconAnimation = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 10 } },
}

export default function CareerTimeline() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentYear(new Date().getFullYear())
    }, 1000 * 60 * 60) // Update every hour

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="flex items-center text-xl">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={iconAnimation}
                    >
                      <FaBriefcase className="mr-2 h-6 w-6 text-secondary" />
                    </motion.div>
                    {exp.title} at {exp.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-center mb-4 text-sm text-muted-foreground">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={iconAnimation}
                      className="flex items-center mr-4 mb-2"
                    >
                      <FaCalendarAlt className="mr-2 text-primary" />
                      <span>
                        {exp.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {' '}
                        {exp.endDate ? exp.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : `Present (${currentYear})`}
                      </span>
                    </motion.div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={iconAnimation}
                      className="flex items-center mr-4 mb-2"
                    >
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>{exp.location}</span>
                    </motion.div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={iconAnimation}
                      className="flex items-center mb-2"
                    >
                      <FaClock className="mr-2 text-primary" />
                      <span>{calculateDuration(exp.startDate, exp.endDate || new Date())}</span>
                    </motion.div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index + respIndex) * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="mr-2 mt-1 text-primary">•</span>
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                  {exp.techStack.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, techIndex) => {
                          const TechIcon = iconMap[tech] || GiTechnoHeart
                          return (
                            <motion.div
                              key={techIndex}
                              initial="hidden"
                              whileInView="visible"
                              whileHover={{ scale: 1.1 }}
                              variants={iconAnimation}
                              className="flex items-center bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                            >
                              <TechIcon className="mr-1 h-4 w-4" />
                              {tech}
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
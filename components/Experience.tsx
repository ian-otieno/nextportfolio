"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa"
import {
  SiSharp, // C#
  SiDotnet, // ASP.NET Core
  SiBootstrap, // Bootstrap
  SiJavascript, // JavaScript
  SiNextdotjs, // Next.js
  SiOracle, // Oracle
} from "react-icons/si"
import { GiTechnoHeart } from "react-icons/gi"

type TechIcons = {
  [key: string]: React.ComponentType<any>
}

const iconMap: TechIcons = {
  "C#": SiSharp,
  "ASP.NET Core": SiDotnet,
  Bootstrap: SiBootstrap,
  JavaScript: SiJavascript,
  "Next.js": SiNextdotjs,
  Oracle: SiOracle,
}

const calculateDuration = (startDate: Date, endDate: Date | null = null) => {
  const end = endDate || new Date()
  const months = (end.getFullYear() - startDate.getFullYear()) * 12 + end.getMonth() - startDate.getMonth()
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}` : ""}`
  } else {
    return `${months} month${months > 1 ? "s" : ""}`
  }
}

const techExperiences = [
  {
    title: "Software Developer",
    company: "Fintech Group Kenya",
    startDate: new Date(2023, 8), // September 2023
    endDate: null, // Present
    location: "Nairobi, Kenya",
    responsibilities: [
      "Upgraded and integrated loan and SACCO fintech systems using ASP.NET Core, improving operational efficiency by 20%.",
      "Optimized LeasPAC leasing system for NCBA Bank Kenya, National Bank of Malawi, and Centenary Bank Uganda, increasing client satisfaction by 25%.",
      "Conducted peer code reviews, collaborated with cross-functional teams, and implemented enhancements to existing systems.",
      "Facilitated Agile sprints, user acceptance testing (UAT), and issue resolution to meet project timelines.",
    ],
    techStack: ["C#", "JavaScript", "ASP.NET Core", "VB.NET", "Next.js", "Microsoft SQL", "SCRUM", "Web APIs"],
  },
  {
    title: "Software Developer Trainee",
    company: "Fintech Group Kenya",
    startDate: new Date(2023, 2), // March 2023
    endDate: new Date(2023, 7), // August 2023
    location: "Nairobi, Kenya",
    responsibilities: [
      "Designed and developed Fintech Finmetrics monitoring and Evoucher grant management systems, enhancing reliability and user satisfaction by 25% and 40%, respectively.",
      "Improved Fintech LeasePac system functionalities, reducing client complaints by 30%.",
      "Collaborated in Agile workflows, conducted testing, and resolved reported issues.",
    ],
    techStack: ["C#", "ASP.NET Core", "Microsoft SQL", "SCRUM"],
  },
  {
    title: "Software Developer Intern",
    company: "Fintech Group Kenya",
    startDate: new Date(2022, 10), // November 2022
    endDate: new Date(2023, 1), // February 2023
    location: "Nairobi, Kenya",
    responsibilities: [
      "Upgraded Fintech Citibank Credit Workflow System with performance improvements (25%) and UI modernization using Bootstrap 5, boosting user engagement by 30%.",
      "Performed thorough testing, reducing system bugs by 40%, and documented best practices for maintainability.",
    ],
    techStack: ["ASP.NET Core", "C#", "Bootstrap", "Oracle", "SCRUM"],
  },
]

const otherExperiences = [
  {
    title: "Data Entry Specialist",
    company: "Atlantis",
    startDate: new Date(2020, 7), // August 2020
    endDate: new Date(2021, 5), // June 2021
    location: "Nairobi, Kenya",
    responsibilities: [
      "Ensured data accuracy across systems, reducing input errors by 20% and enhancing overall data quality.",
      "Developed and maintained data entry protocols, improving team efficiency by 15%.",
      "Collaborated with IT to enhance data management systems and streamline workflows.",
    ],
    techStack: [],
  },
  {
    title: "Attaché",
    company: "Ministry of Devolution and Asal areas State Department of Intergovernmental Relations",
    startDate: new Date(2019, 4), // May 2019
    endDate: new Date(2019, 6), // July 2019
    location: "Nairobi, Kenya",
    responsibilities: [
      "Audited and evaluated County Governments' operations, improving governance efficiency by 20%.",
      "Coordinated compliance reviews across multiple agencies to align with regulatory standards.",
      "Prepared analytical reports and presented actionable governance recommendations to senior stakeholders.",
      "Facilitated training sessions for county officials on compliance and governance best practices.",
    ],
    techStack: [],
  },
]

const iconAnimation = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 10 } },
}

export default function WorkExperience() {
  const [expandedTechIndex, setExpandedTechIndex] = useState<number | null>(null)
  const [expandedOtherIndex, setExpandedOtherIndex] = useState<number | null>(null)

  const toggleExpandTech = (index: number) => {
    setExpandedTechIndex(expandedTechIndex === index ? null : index)
  }

  const toggleExpandOther = (index: number) => {
    setExpandedOtherIndex(expandedOtherIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
        >
          Work Experience
        </motion.h2>

        {/* Tech Experience Section */}
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Tech Experience</h3>
        <AnimatePresence>
          {techExperiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-300">
                <CardHeader
                  className="bg-primary text-primary-foreground cursor-pointer"
                  onClick={() => toggleExpandTech(index)}
                >
                  <CardTitle className="flex items-center justify-between text-xl">
                    <div className="flex items-center">
                      <motion.div initial="hidden" whileInView="visible" variants={iconAnimation}>
                        <FaBriefcase className="mr-2 h-6 w-6" />
                      </motion.div>
                      <div>
                        <div>{exp.title}</div>
                        <div className="text-sm font-normal">{exp.company}</div>
                      </div>
                    </div>
                    {expandedTechIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </CardTitle>
                </CardHeader>
                <AnimatePresence>
                  {expandedTechIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-6">
                        <div className="flex flex-wrap items-center mb-4 text-sm text-muted-foreground">
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={iconAnimation}
                            className="flex items-center mr-4 mb-2"
                          >
                            <FaCalendarAlt className="mr-2" />
                            <span>
                              {exp.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
                              {exp.endDate
                                ? exp.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
                                : "Present"}
                            </span>
                          </motion.div>
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={iconAnimation}
                            className="flex items-center mr-4 mb-2"
                          >
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{exp.location}</span>
                          </motion.div>
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={iconAnimation}
                            className="flex items-center mb-2"
                          >
                            <FaClock className="mr-2" />
                            <span>{calculateDuration(exp.startDate, exp.endDate)}</span>
                          </motion.div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <motion.li
                              key={respIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: respIndex * 0.1 }}
                              className="flex items-start"
                            >
                              <GiTechnoHeart className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                        {exp.techStack.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.map((tech, techIndex) => {
                                const Icon = iconMap[tech]
                                return (
                                  <TooltipProvider key={techIndex}>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <Badge variant="secondary" className="flex items-center gap-1">
                                          {Icon && <Icon className="h-4 w-4" />}
                                          <span>{tech}</span>
                                        </Badge>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>{tech}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Other Experience Section */}
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Other Experience</h3>
        <AnimatePresence>
          {otherExperiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-300">
                <CardHeader
                  className="bg-primary text-primary-foreground cursor-pointer"
                  onClick={() => toggleExpandOther(index)}
                >
                  <CardTitle className="flex items-center justify-between text-xl">
                    <div className="flex items-center">
                      <motion.div initial="hidden" whileInView="visible" variants={iconAnimation}>
                        <FaBriefcase className="mr-2 h-6 w-6" />
                      </motion.div>
                      <div>
                        <div>{exp.title}</div>
                        <div className="text-sm font-normal">{exp.company}</div>
                      </div>
                    </div>
                    {expandedOtherIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </CardTitle>
                </CardHeader>
                <AnimatePresence>
                  {expandedOtherIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-6">
                        <div className="flex flex-wrap items-center mb-4 text-sm text-muted-foreground">
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={iconAnimation}
                            className="flex items-center mr-4 mb-2"
                          >
                            <FaCalendarAlt className="mr-2" />
                            <span>
                              {exp.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
                              {exp.endDate
                                ? exp.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
                                : "Present"}
                            </span>
                          </motion.div>
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={iconAnimation}
                            className="flex items-center mr-4 mb-2"
                          >
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{exp.location}</span>
                          </motion.div>
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={iconAnimation}
                            className="flex items-center mb-2"
                          >
                            <FaClock className="mr-2" />
                            <span>{calculateDuration(exp.startDate, exp.endDate)}</span>
                          </motion.div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <motion.li
                              key={respIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: respIndex * 0.1 }}
                              className="flex items-start"
                            >
                              <GiTechnoHeart className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                        {exp.techStack.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.map((tech, techIndex) => {
                                const Icon = iconMap[tech]
                                return (
                                  <TooltipProvider key={techIndex}>
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <Badge variant="secondary" className="flex items-center gap-1">
                                          {Icon && <Icon className="h-4 w-4" />}
                                          <span>{tech}</span>
                                        </Badge>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>{tech}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
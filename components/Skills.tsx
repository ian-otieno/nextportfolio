"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaServer, FaDesktop, FaDatabase, FaCloud, FaUsers } from 'react-icons/fa'
import {
  SiPython, SiJavascript, SiCsharp, SiDotnet, SiFlask, SiDjango,
  SiReact, SiBootstrap, SiNextdotjs, SiPostgresql, SiMicrosoftsqlserver,
  SiMicrosoftazure, SiHeroku, SiWindows, SiAzuredevops, SiGit,
  SiHtml5, SiCss3, SiTailwindcss, SiAngular
} from 'react-icons/si'
import { GiBrain, GiPuzzle } from 'react-icons/gi'
import { BsBriefcase, BsChatDots } from 'react-icons/bs'
import { AiOutlineApartment } from 'react-icons/ai'

const fintechSkills = [
  {
    name: 'Backend',
    icon: FaServer,
    description: 'Developed robust backend systems using C# and ASP.NET Core Web Services. Managed databases with Microsoft SQL and Oracle T-SQL.',
    skills: [
      { name: 'C#', icon: SiCsharp, color: '#239120' },
      { name: 'ASP.NET Core Web Services', icon: SiDotnet, color: '#512BD4' },
      { name: 'Microsoft SQL', icon: SiMicrosoftsqlserver, color: '#CC2927' },
      { name: 'Oracle T-SQL', icon: SiMicrosoftsqlserver, color: '#CC2927' },
    ],
  },
  {
    name: 'Frontend',
    icon: FaDesktop,
    description: 'Created responsive and dynamic user interfaces using Bootstrap, Next.js, and ASP.NET Core MVC.',
    skills: [
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'ASP.NET Core MVC', icon: SiDotnet, color: '#512BD4' },
    ],
  },
  {
    name: 'Architecture',
    icon: AiOutlineApartment,
    description: 'Designed and implemented service-oriented architecture to ensure scalability and maintainability.',
    skills: [
      { name: 'Service Oriented Architecture', icon: SiDotnet, color: '#512BD4' },
    ],
  },
  {
    name: 'Cloud & Hosting',
    icon: FaCloud,
    description: 'Managed cloud and hosting services using IIS.',
    skills: [
      { name: 'IIS', icon: SiWindows, color: '#0078D6' },
    ],
  },
  {
    name: 'Development Methodologies',
    icon: AiOutlineApartment,
    description: 'Practiced Agile methodologies and continuous integration/continuous development (CI/CD).',
    skills: [
      { name: 'Agile', icon: AiOutlineApartment, color: '#1F75FE' },
      { name: 'Continuous Integration', icon: SiGit, color: '#F05032' },
      { name: 'Continuous Development', icon: SiGit, color: '#F05032' },
    ],
  },
  {
    name: 'Interpersonal Skills',
    icon: FaUsers,
    description: 'Developed strong project management, communication, problem-solving, leadership, and adaptability skills.',
    skills: [
      { name: 'Project Management', icon: BsBriefcase, color: '#FF7F50' },
      { name: 'Communication', icon: BsChatDots, color: '#2196F3' },
      { name: 'Problem Solving', icon: GiPuzzle, color: '#FF5722' },
      { name: 'Leadership', icon: GiBrain, color: '#9C27B0' },
      { name: 'Adaptability', icon: GiPuzzle, color: '#FF9800' },
    ],
  },
]

const moringaSkills = [
  {
    name: 'Frontend',
    icon: FaDesktop,
    description: 'Learned and applied frontend technologies including JavaScript, Bootstrap, Angular, and React.',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    name: 'Backend',
    icon: FaServer,
    description: 'Gained experience in backend development using Python, Flask, and Django.',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
    ],
  },
  {
    name: 'Cloud & Hosting',
    icon: FaCloud,
    description: 'Managed cloud and hosting services using Heroku.',
    skills: [
      { name: 'Heroku', icon: SiHeroku, color: '#430098' },
    ],
  },
  {
    name: 'Development Methodologies',
    icon: AiOutlineApartment,
    description: 'Practiced Agile methodologies and continuous integration/continuous development (CI/CD).',
    skills: [
      { name: 'Agile', icon: AiOutlineApartment, color: '#1F75FE' },
      { name: 'Continuous Integration', icon: SiGit, color: '#F05032' },
      { name: 'Continuous Development', icon: SiGit, color: '#F05032' },
    ],
  },
  {
    name: 'Interpersonal Skills',
    icon: FaUsers,
    description: 'Developed strong project management, communication, problem-solving, leadership, and adaptability skills.',
    skills: [
      { name: 'Project Management', icon: BsBriefcase, color: '#FF7F50' },
      { name: 'Communication', icon: BsChatDots, color: '#2196F3' },
      { name: 'Problem Solving', icon: GiPuzzle, color: '#FF5722' },
      { name: 'Leadership', icon: GiBrain, color: '#9C27B0' },
      { name: 'Adaptability', icon: GiPuzzle, color: '#FF9800' },
    ],
  },
]

const iconAnimation = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

export default function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('fintech')

  const skillCategories = activeTab === 'fintech' ? fintechSkills : moringaSkills

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('fintech')}
            className={`px-4 py-2 mx-2 ${activeTab === 'fintech' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Fintech-Group Kenya Ltd
          </button>
          <button
            onClick={() => setActiveTab('moringa')}
            className={`px-4 py-2 mx-2 ${activeTab === 'moringa' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Moringa School-BootCamp
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold">
                    <category.icon className="mr-3 h-8 w-8 text-primary" aria-hidden="true" />
                    {category.name}
                  </CardTitle>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={`${category.name}-${skill.name}`}
                        className="flex items-center"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <motion.div
                          initial="hidden"
                          animate={hoveredSkill === skill.name ? "visible" : "hidden"}
                          variants={iconAnimation}
                          transition={{ duration: 0.2 }}
                        >
                          <skill.icon
                            className="mr-2 h-6 w-6"
                            style={{ color: skill.color }}
                            aria-hidden="true"
                          />
                        </motion.div>
                        <span className="text-sm">
                          {skill.name}
                          {hoveredSkill === skill.name && (
                            <span className="sr-only">(currently focused)</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

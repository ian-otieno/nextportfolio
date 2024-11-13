"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaServer, FaDesktop, FaDatabase, FaCloud, FaUsers } from 'react-icons/fa'
import { 
  SiPython, SiJavascript, SiCsharp, SiDotnet, SiFlask, SiDjango, 
  SiReact, SiBootstrap, SiNextdotjs, SiPostgresql, SiMicrosoftsqlserver,
  SiMicrosoftazure, SiHeroku, SiWindows, SiAzuredevops, SiGit,
  SiHtml5, SiCss3, SiTailwindcss
} from 'react-icons/si'
import { GiBrain, GiPuzzle } from 'react-icons/gi'
import { BsBriefcase, BsChatDots } from 'react-icons/bs'
import { AiOutlineApartment } from 'react-icons/ai'

const skillCategories = [
  {
    name: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C#', icon: SiCsharp, color: '#239120' },
      { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'ASP.NET Core', icon: SiDotnet, color: '#512BD4' },
      { name: 'Django REST', icon: SiDjango, color: '#092E20' },
      { name: 'VB.NET', icon: SiDotnet, color: '#512BD4' },
    ],
  },
  // Other categories here
]

const iconAnimation = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

export default function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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

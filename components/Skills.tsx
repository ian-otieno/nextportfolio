"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Users, Brain, BarChart, Upload, FileCode, Database, GitBranch } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Code,
    items: [
      { name: 'JavaScript', icon: FileCode },
      { name: 'React', icon: FileCode },
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: FileCode },
      { name: 'Tailwind CSS', icon: FileCode },
    ],
  },
  {
    category: 'Backend',
    icon: BarChart,
    items: [
      { name: 'Python', icon: FileCode },
      { name: 'Flask', icon: FileCode },
      { name: 'Django', icon: FileCode },
      { name: 'ASP.NET Core', icon: FileCode },
      { name: 'C#', icon: FileCode },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    items: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'Microsoft SQL Server', icon: Database },
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: Users,
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'Azure DevOps', icon: FileCode },
      { name: 'VB.Net', icon: FileCode },
      { name: 'RESTful APIs', icon: FileCode },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <skillSet.icon className="mr-2 h-6 w-6" />
                    {skillSet.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {skillSet.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index + itemIndex) * 0.05 }}
                        className="flex items-center"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BriefcaseIcon } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: 'Jan 2021 - Present',
    responsibilities: [
      'Lead development of complex web applications using React and Node.js',
      'Implement CI/CD pipelines and maintain cloud infrastructure on AWS',
      'Mentor junior developers and conduct code reviews',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    period: 'Jun 2019 - Dec 2020',
    responsibilities: [
      'Developed responsive and accessible user interfaces using React and Vue.js',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Optimized application performance and improved load times',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'StartUp Nexus',
    period: 'Jan 2019 - May 2019',
    responsibilities: [
      'Assisted in building and maintaining WordPress websites',
      'Learned and applied best practices in HTML, CSS, and JavaScript',
      'Participated in agile development processes and daily stand-ups',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BriefcaseIcon className="mr-2 h-5 w-5" />
                    {exp.title} at {exp.company}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index + respIndex) * 0.1 }}
                      >
                        {resp}
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

export default Experience;
"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCapIcon, AwardIcon, ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const educationData = [
  {
    type: 'Education',
    icon: GraduationCapIcon,
    items: [
      { 
        title: 'Professional Certificate in Software Engineering', 
        institution: 'Moringa School', 
        year: 'Nov 2021 - May 2022', 
        logo: '/images/ZzZgytR8_400x400.png', 
        details: 'Specialized in Python, Flask, Django, PostgreSQL, JavaScript, and React.' ,
        certificateLink: 'https://drive.google.com/file/d/1-uByx356CVkz--7Z5pUTkqPaT3l22bvt/view?usp=sharing' 
      },
      { 
        title: 'Bachelor of Science in Public Administration and Leadership', 
        institution: 'Jomo Kenyatta University of Agriculture and Technology', 
        year: 'Aug 2016 - Nov 2020', 
        logo: '/images/ubpti3cctxwrkknblma2.png', 
        details: 'GPA: Second Class Honours (Upper Division)', 
        certificateLink: 'https://drive.google.com/file/d/19iKKIhrPm6_13ZxXcj1tfpG9W0HUTBnT/view?usp=sharing' 
      },
      { 
        title: 'KCSE', 
        institution: 'Ambira High School', 
        year: 'Feb 2012 - Nov 2015', 
        logo: '/images/1510643987-62-ambira-high-school.jpg', 
        details: 'Mean Grade: B+',
        certificateLink: 'https://drive.google.com/file/d/127RGOTahVDYlqtZl7BN0pINn8TNMXP4p/view?usp=sharing'  
      },
    ],
  },
  {
    type: 'Certifications',
    icon: AwardIcon,
    items: [
      { 
        title: 'Introduction to programming', 
        institution: 'Moringa School', 
        year: '2022', 
        logo: '/images/ZzZgytR8_400x400.png', 
        certificateLink: 'https://drive.google.com/file/d/1zrf9s10GYMK3L5aUxTD95AEsnHzqPjzH/view?usp=sharing' 
      },

      { 
        title: ' Javascript', 
        institution: 'Linkedin-Learning', 
        year: '2023', 
        logo: '/images/Linkedin-Learning-Web.png', 
        certificateLink: 'https://lnkd.in/dfVE3MNf' 
      },

      { 
        title: ' Azure DevOps', 
        institution: 'Linkedin-Learning', 
        year: '2023', 
        logo: '/images/Linkedin-Learning-Web.png', 
        certificateLink: 'https://lnkd.in/dmbu2Xgg' 
      },
      { 
        title: 'Microsoft SQL Server 2022', 
        institution: 'Linkedin-Learning', 
        year: '2023', 
        logo: '/images/Linkedin-Learning-Web.png', 
        certificateLink: 'https://lnkd.in/dw68Am4C ' 
      },
      { 
        title: 'Oracle database', 
        institution: 'Linkedin-Learning', 
        year: '2022', 
        logo: '/images/Linkedin-Learning-Web.png', 
        certificateLink: 'https://lnkd.in/dp8EWjSt' 
      },
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((section, sectionIndex) => (
            <motion.div
              key={section.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <section.icon className="mr-2 h-6 w-6" />
                    {section.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (sectionIndex + itemIndex) * 0.1 }}
                      className="mb-6 last:mb-0 flex items-center"
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-muted-foreground">{item.year}</p>
                        <Button asChild variant="link" className="p-0 h-auto">
                          <a href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                            View Certificate <ExternalLinkIcon className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
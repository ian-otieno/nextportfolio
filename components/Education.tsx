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
        title: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        year: '2015 - 2019',
        logo: 'https://source.unsplash.com/random/100x100?university',
        certificateLink: 'https://example.com/certificate1',
      },
      {
        title: 'Master of Science in Web Engineering',
        institution: 'Digital University',
        year: '2020 - 2022',
        logo: 'https://source.unsplash.com/random/100x100?college',
        certificateLink: 'https://example.com/certificate2',
      },
    ],
  },
  {
    type: 'Certifications',
    icon: AwardIcon,
    items: [
      {
        title: 'AWS Certified Developer - Associate',
        institution: 'Amazon Web Services',
        year: '2021',
        logo: 'https://source.unsplash.com/random/100x100?aws',
        certificateLink: 'https://example.com/aws-certificate',
      },
      {
        title: 'Google Professional Cloud Developer',
        institution: 'Google Cloud',
        year: '2022',
        logo: 'https://source.unsplash.com/random/100x100?google',
        certificateLink: 'https://example.com/google-certificate',
      },
      {
        title: 'React Native Specialist',
        institution: 'React Native Academy',
        year: '2023',
        logo: 'https://source.unsplash.com/random/100x100?react',
        certificateLink: 'https://example.com/react-certificate',
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
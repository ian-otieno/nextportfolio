'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GraduationCapIcon, AwardIcon, ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Define types for the education data structure
interface EducationItemData {
  title: string
  institution: string
  year: string
  logo: string
  details?: string
  certificateLink: string
}

interface SectionData {
  type: string
  icon: React.ElementType
  items: EducationItemData[]
}

const educationData: SectionData[] = [
  {
    type: 'Education',
    icon: GraduationCapIcon,
    items: [
      {
        title: 'Professional Certificate in Software Engineering',
        institution: 'Moringa School',
        year: 'Nov 2021 - May 2022',
        logo: '/images/ZzZgytR8_400x400.png',
        details: 'Specialized in Python, Flask, Django, PostgreSQL, JavaScript, and React.',
        certificateLink: 'https://drive.google.com/file/d/1-uByx356CVkz--7Z5pUTkqPaT3l22bvt/view?usp=sharing',
      },
      {
        title: 'Bachelor of Science in Public Administration and Leadership',
        institution: 'Jomo Kenyatta University of Agriculture and Technology',
        year: 'Aug 2016 - Nov 2020',
        logo: '/images/ubpti3cctxwrkknblma2.png',
        details: 'GPA: Second Class Honours (Upper Division)',
        certificateLink: 'https://drive.google.com/file/d/19iKKIhrPm6_13ZxXcj1tfpG9W0HUTBnT/view?usp=sharing',
      },
      {
        title: 'KCSE',
        institution: 'Ambira High School',
        year: 'Feb 2012 - Nov 2015',
        logo: '/images/1510643987-62-ambira-high-school.jpg',
        details: 'Mean Grade: B+',
        certificateLink: 'https://drive.google.com/file/d/127RGOTahVDYlqtZl7BN0pINn8TNMXP4p/view?usp=sharing',
      },
    ],
  },
  {
    type: 'Certifications',
    icon: AwardIcon,
    items: [
      {
        title: 'Introduction to Programming',
        institution: 'Moringa School',
        year: '2022',
        logo: '/images/ZzZgytR8_400x400.png',
        certificateLink: 'https://drive.google.com/file/d/1zrf9s10GYMK3L5aUxTD95AEsnHzqPjzH/view?usp=sharing',
      },
      {
        title: 'JavaScript',
        institution: 'LinkedIn Learning',
        year: '2023',
        logo: '/images/Linkedin-Learning-Web.png',
        certificateLink: 'https://lnkd.in/dfVE3MNf',
      },
      {
        title: 'Azure DevOps',
        institution: 'LinkedIn Learning',
        year: '2023',
        logo: '/images/Linkedin-Learning-Web.png',
        certificateLink: 'https://lnkd.in/dmbu2Xgg',
      },
      {
        title: 'Microsoft SQL Server 2022',
        institution: 'LinkedIn Learning',
        year: '2023',
        logo: '/images/Linkedin-Learning-Web.png',
        certificateLink: 'https://lnkd.in/dw68Am4C',
      },
      {
        title: 'Oracle Database',
        institution: 'LinkedIn Learning',
        year: '2022',
        logo: '/images/Linkedin-Learning-Web.png',
        certificateLink: 'https://lnkd.in/dp8EWjSt',
      },
    ],
  },
]

// Sort education items by year in ascending order
educationData[0].items.sort((a, b) => {
  const yearA = new Date(a.year.split(' - ')[0]).getTime();
  const yearB = new Date(b.year.split(' - ')[0]).getTime();
  return yearA - yearB;
});

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
        >
          Education & Certifications
        </motion.h2>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="education" className="text-lg text-gray-800 dark:text-gray-200">
              <GraduationCapIcon className="mr-2 h-5 w-5" />
              Education
            </TabsTrigger>
            <TabsTrigger value="certifications" className="text-lg text-gray-800 dark:text-gray-200">
              <AwardIcon className="mr-2 h-5 w-5" />
              Certifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="education">
            <EducationGrid items={educationData[0].items} />
          </TabsContent>
          <TabsContent value="certifications">
            <CertificationsGrid items={educationData[1].items} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function EducationGrid({ items }: { items: EducationItemData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <EducationCard key={index} item={item} index={index} />
      ))}
    </div>
  )
}

function EducationCard({ item, index }: { item: EducationItemData; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-shadow duration-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-lg">
            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
              <Image src={item.logo} alt={`${item.institution} logo`} width={60} height={60} className="rounded-full mb-2" />
              <h3 className="font-semibold text-center text-sm text-gray-800 dark:text-gray-200">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.year}</p>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="p-6 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">{item.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Image src={item.logo} alt={`${item.institution} logo`} width={80} height={80} className="rounded-full mb-4 mx-auto" />
            <p className="text-center mb-1 font-medium">{item.institution}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
            {item.details && <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.details}</p>}
            <div className="flex justify-center mt-4">
              <Button asChild variant="default">
                <a href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                  View Certificate <ExternalLinkIcon className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

function CertificationsGrid({ items }: { items: EducationItemData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <CertificationCard key={index} item={item} index={index} />
      ))}
    </div>
  )
}

function CertificationCard({ item, index }: { item: EducationItemData; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-shadow duration-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-lg">
            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
              <Image src={item.logo} alt={`${item.institution} logo`} width={60} height={60} className="rounded-full mb-2" />
              <h3 className="font-semibold text-center text-sm text-gray-800 dark:text-gray-200">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.year}</p>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="p-6 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">{item.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Image src={item.logo} alt={`${item.institution} logo`} width={80} height={80} className="rounded-full mb-4 mx-auto" />
            <p className="text-center mb-1 font-medium">{item.institution}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
            <div className="flex justify-center mt-4">
              <Button asChild variant="default">
                <a href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                  View Certificate <ExternalLinkIcon className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

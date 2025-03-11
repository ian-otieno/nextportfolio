'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BriefcaseIcon, ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Define types for experience data structure
interface ExperienceItemData {
  title: string
  company: string
  duration: string
  logo: string
  details?: string
  link?: string
}

const experienceData: ExperienceItemData[] = [
  {
    title: 'Software Engineer',
    company: 'Tech Company',
    duration: 'Jan 2022 - Present',
    logo: '/images/company-logo.png',
    details: 'Developing web applications using React and Node.js.',
    link: 'https://techcompany.com',
  },
  {
    title: 'Frontend Developer',
    company: 'Another Tech Company',
    duration: 'Jun 2020 - Dec 2021',
    logo: '/images/another-logo.png',
    details: 'Built responsive user interfaces with React.',
    link: 'https://anothertechcompany.com',
  },
  // Add more experience items as needed
]

export default function Experience() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
        >
          Work Experience
        </motion.h2>

        <div className="flex justify-end mb-4">
          <Button onClick={() => setViewMode('grid')} variant={viewMode === 'grid' ? 'default' : 'outline'}>
            Grid View
          </Button>
          <Button onClick={() => setViewMode('list')} variant={viewMode === 'list' ? 'default' : 'outline'} className="ml-2">
            List View
          </Button>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience" className="text-lg text-gray-800 dark:text-gray-200">
              <BriefcaseIcon className="mr-2 h-5 w-5" />
              Experience
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            {viewMode === 'grid' ? (
              <ExperienceGrid items={experienceData} />
            ) : (
              <ExperienceList items={experienceData} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ExperienceGrid({ items }: { items: ExperienceItemData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </div>
  )
}

function ExperienceList({ items }: { items: ExperienceItemData[] }) {
  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </div>
  )
}

function ExperienceItem({ item }: { item: ExperienceItemData }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mx-auto bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-lg p-4 h-48"
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer flex flex-col items-center justify-center h-full">
            <Image src={item.logo} alt={`${item.company} logo`} width={60} height={60} className="rounded-full mb-2" />
            <h3 className="font-semibold text-center text-sm text-gray-800 dark:text-gray-200">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.company}</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.duration}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="p-6 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">{item.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Image src={item.logo} alt={`${item.company} logo`} width={80} height={80} className="rounded-full mb-4 mx-auto" />
            <p className="text-center mb-1 font-medium">{item.company}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
            {item.details && <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.details}</p>}
            {item.link && (
              <div className="flex justify-center mt-4">
                <Button asChild variant="default">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View Company <ExternalLinkIcon className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
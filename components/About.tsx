"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Users, Brain, BarChart, Upload, FileCode, Database, GitBranch } from 'lucide-react';
import Image from 'next/image';

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

const About = () => {
  const [profileImage, setProfileImage] = useState<string>("https://source.unsplash.com/random/400x400?portrait");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <div className="relative">
              <Image
                src={profileImage}
                alt="Your Name"
                width={400}
                height={400}
                className="rounded-full shadow-lg"
              />
              <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer">
                <Upload className="h-6 w-6" />
              </label>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3 md:pl-12"
          >
            <p className="text-lg mb-6">
              I am a dedicated and passionate Software Developer with a Bachelor of Science in Public Administration and Leadership from Jomo Kenyatta University of Agriculture and Technology (JKUAT), complemented by a Full Stack Development certification from Moringa School. I possess expertise in both frontend and backend development, with hands-on experience in modern web technologies including JavaScript, React, Python, Flask, Django, and PostgreSQL.
            </p>
            <p className="text-lg mb-6">
              In addition to my expertise in web application development, I bring valuable skills in Microsoft SQL, Azure DevOps, VB.Net, ASP.NET Core, and C#, allowing me to build robust and scalable solutions. My experience spans across developing, deploying, and maintaining applications, with a keen focus on enhancing system performance and optimizing processes for maximum efficiency.
            </p>
            <p className="text-lg">
              I am always eager to tackle challenging projects, collaborate with cross-functional teams, and continuously expand my technical knowledge to drive innovation and professional growth.
            </p>
          </motion.div>
        </div>
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

export default About;
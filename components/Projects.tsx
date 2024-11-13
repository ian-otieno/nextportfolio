"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Using react-icons for colored icons

const projects = [
  {
    title: 'Safiri - Backend/Frontend',
    description: 'Full-stack application built with Django for the backend and Rectjs for the frontend.',
    github: 'https://github.com/ian-otieno/Backend-Safiri',
    live: 'https://safiri-app.netlify.app/',
  },
  {
    title: 'My Portfolio',
    description: 'My portfolo app built with next.js for frontend.',
    github: 'https://github.com/ian-otieno/Backend-Safiri',
    live: 'https://nextportfolio-b39j-bar7vi7lu-ian-otienos-projects.vercel.app/',
  },

  {
    title: 'News App',
    description: 'A news aggregation app built with Django, Flask, Bootstrap, HTML & CSS.',
    github: 'https://github.com/ian-otieno/News-App',
    live: 'https://news-app-q0wp.onrender.com/',
  },

  {
    title: 'Django Neighbourhood',
    description: 'A neighborhood information app developed with Django, Flask, Bootstrap, HTML, and CSS.',
    github: 'https://github.com/ian-otieno/Django-Neighbourhood',
    live: 'https://example.com',
  },
   {
    title: 'Quotes-App',
    description: 'An Angular CLI application that displays quotes, allows users to input new quotes, upvote, downvote, and delete them.',
    github: '',
    live: 'https://ian-otieno.github.io/Quotes-App/',
  },
  
  {
    title: 'Pitches App',
    description: 'A pitch management app developed with Flask and Bootstrap.',
    github: 'https://github.com/ian-otieno/pitches-app',
    live: 'https://example.com',
  }

 
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center mt-4">
                  {project.github && (
                    <Button asChild variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                        <FaGithub className="mr-2 h-5 w-5" /> GitHub
                      </a>
                    </Button>
                  )}
                  <Button asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
                      <FaExternalLinkAlt className="mr-2 h-5 w-5" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

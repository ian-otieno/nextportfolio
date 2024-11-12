"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaCode, FaDatabase, FaCloud, FaCog, FaChartLine, FaUsers, FaCogs, FaHandshake, FaToolbox } from 'react-icons/fa';

// Services Data
const services = [
  { name: 'Full-Stack Web Development', icon: FaCode, color: '#4A90E2', description: 'Build end-to-end web applications, managing both frontend and backend development with technologies like Django, Flask, ASP.NET, React, and Next.js.' },
  { name: 'Backend Development and API Design', icon: FaCog, color: '#F5A623', description: 'Create secure, efficient APIs and server-side logic with Django, Flask, and ASP.NET Core, suitable for various applications like web, mobile, and IoT.' },
  { name: 'Frontend Development', icon: FaCode, color: '#BD10E0', description: 'Develop engaging and responsive UIs using React and Next.js, creating user-friendly interfaces and implementing modern design practices.' },
  { name: 'Database Management and Optimization', icon: FaDatabase, color: '#50E3C2', description: 'Work with Microsoft SQL and PostgreSQL, including schema design, optimization, indexing, and performance tuning for high-performance applications.' },
  { name: 'DevOps and Cloud Deployment', icon: FaCloud, color: '#7ED321', description: 'Configure CI/CD pipelines, manage cloud deployments, and use DevOps practices to ensure continuous integration and deployment for seamless updates.' },
  { name: 'Core Banking System Customizations', icon: FaCogs, color: '#D0021B', description: 'Customize and integrate with core banking systems, leveraging experience in the fintech space to implement new features or enhancements.' },
  { name: 'Software Training and Documentation', icon: FaUsers, color: '#9013FE', description: 'Provide training for end-users and development teams, create detailed documentation, and offer ongoing support to ensure smooth project handover.' },
  { name: 'System Integration and API Integrations', icon: FaHandshake, color: '#B8E986', description: 'Integrate multiple systems and services through APIs, including third-party API integration for services such as payment gateways, social media, and data providers.' },
  { name: 'Implementation Support and Maintenance', icon: FaToolbox, color: '#8B572A', description: 'Offer post-deployment support, troubleshooting, and ongoing maintenance to keep applications updated, secure, and high-performing.' },
];

// Services Component
const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full shadow-lg transition-shadow duration-300 group-hover:shadow-xl transform group-hover:scale-105 group-hover:rotate-1">
                <CardHeader className="transition-colors duration-300 group-hover:bg-opacity-10">
                  <CardTitle className="flex items-center transition-colors duration-300 group-hover:text-primary">
                    <service.icon style={{ color: service.color }} className="mr-2 h-6 w-6" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="transition-colors duration-300 group-hover:text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

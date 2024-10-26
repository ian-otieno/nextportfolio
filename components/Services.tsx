"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeIcon, PaletteIcon, RocketIcon, SearchIcon } from 'lucide-react';

const services = [
  { name: 'Web Development', icon: CodeIcon, description: 'Custom website and web application development using modern technologies.' },
  { name: 'UI/UX Design', icon: PaletteIcon, description: 'Creating intuitive and visually appealing user interfaces and experiences.' },
  { name: 'SEO Optimization', icon: SearchIcon, description: 'Improving website visibility and ranking in search engine results.' },
  { name: 'Consultation', icon: RocketIcon, description: 'Expert advice on web technologies, project management, and digital strategies.' },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="mr-2 h-6 w-6" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
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
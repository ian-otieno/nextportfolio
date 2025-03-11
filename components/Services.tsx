"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Cloud, Users, Settings, Link, Wrench, Laptop, Server, Layers } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Categorized Services Data
const serviceCategories = [
  {
    id: "development",
    name: "Development",
    description: "Creating robust and scalable applications",
    services: [
      {
        name: "Full-Stack Web Development",
        icon: Layers,
        color: "#4A90E2",
        description:
          "I build end-to-end web applications, managing both frontend and backend development with technologies like Django, Flask, ASP.NET, React, and Next.js.",
        tags: ["React", "Next.js",  "Flask","Django", "ASP.NET"],
        details: [
          "Building responsive and accessible web applications from concept to deployment",
          "Implementing modern frontend frameworks like React and Next.js for optimal user experiences",
          "Developing robust backend systems with Django, Flask, or ASP.NET",
          "Creating RESTful APIs endpoints for seamless data exchange",
          "Ensuring cross-browser compatibility and mobile responsiveness",
          "Implementing authentication, authorization, and security best practices",
        ],
      },
      {
        name: "Backend Development",
        icon: Server,
        color: "#F5A623",
        description:
          "I create secure, efficient APIs and server-side logic with Django, Flask, and ASP.NET Core, suitable for various applications like web, mobile, and IoT.",
        tags: ["API Design", "Django", "Flask", "ASP.NET Core web services"],
        details: [
          "Designing and implementing scalable API architectures",
          "Building secure authentication and authorization systems",
          "Optimizing database queries and data access patterns",
          "Creating microservices and serverless functions",
             ],
      },
      {
        name: "Frontend Development",
        icon: Laptop,
        color: "#BD10E0",
        description:
          "I develop engaging and responsive UIs using React and Next.js, creating user-friendly interfaces and implementing modern design practices.",
        tags: ["React", "Next.js", "UI/UX", "Responsive Design"],
        details: [
          "Creating responsive layouts that work across all devices",
          "Building interactive UI components with React and Next.js",
          "Optimizing for performance with code splitting and lazy loading",
          "Creating animations and transitions for enhanced user experience",
        ],
      },
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    description: "Building and optimizing the technical foundation",
    services: [
      {
        name: "Database Management",
        icon: Database,
        color: "#50E3C2",
        description:
          "I work with Microsoft SQL and PostgreSQL, including schema design, optimization, indexing, and performance tuning for high-performance applications.",
        tags: ["SQL Server", "PostgreSQL", "Optimization", "Schema Design"],
        details: [
          "Designing efficient database schemas and relationships",
          "Optimizing queries for performance with proper indexing",
          "Implementing data migration strategies",
          "Setting up replication and high-availability solutions",
          "Creating backup and recovery procedures",
        ],
      },
      {
        name: "DevOps and Cloud",
        icon: Cloud,
        color: "#7ED321",
        description:
          "I configure CI/CD pipelines, manage cloud deployments, and use DevOps practices to ensure continuous integration and deployment for seamless updates.",
        tags: ["CI/CD", "IIS", "Azure", "Docker"],
        details: [
          "Configuring containerization with Docker and Kubernetes",
          "Managing cloud infrastructure on IIS, Azure, ",
          "Monitoring and logging solutions for application health",
          "Automating scaling and resource management",
        ],
      },
      {
        name: "System Integration",
        icon: Link,
        color: "#B8E986",
        description:
          "I integrate multiple systems and services through APIs, including third-party API integration for services  and data providers.",
        tags: ["API Integration", "Microservices"],
        details: [
          "Integrating financial services",
          "Developing custom connectors for third-party services",
        ],
      },
    ],
  },
  {
    id: "business",
    name: "Specialized Services",
    description: "Industry-specific solutions and support",
    services: [
      {
        name: "Core Banking Systems",
        icon: Settings,
        color: "#D0021B",
        description:
          "I customize and integrate with core banking systems, leveraging my experience in the fintech space to implement new features or enhancements.",
        tags: ["Fintech", "Banking", "Customization", "Integration"],
        details: [
          "Customizing core banking platforms for specific requirements",
          "Implementing financial processing products",
          "Building regulatory compliance features",
          "Creating reporting and analytics for financial data",
        ],
      },
      {
        name: "Training & Documentation",
        icon: Users,
        color: "#9013FE",
        description:
          "I provide training for end-users and development teams, create detailed documentation, and offer ongoing support to ensure smooth project handover.",
        tags: ["Training", "Documentation", "Knowledge Transfer"],
        details: [
          "Creating comprehensive technical documentation",
          "Developing user manuals and guides",
          "Conducting training sessions for technical and non-technical users",
          "Providing code reviews and best practice guidance",
        ],
      },
      {
        name: "Support & Maintenance",
        icon: Wrench,
        color: "#8B572A",
        description:
          "I offer post-deployment support, troubleshooting, and ongoing maintenance to keep applications updated, secure, and high-performing.",
        tags: ["Maintenance", "Support", "Troubleshooting", "Updates"],
        details: [
          "Providing ongoing technical support and troubleshooting",
          "Implementing security patches and updates",
          "Performance monitoring and optimization",
          "Bug fixing and issue resolution",
          "Feature enhancements and improvements",
        ],
      },
    ],
  },
]

const WhatIDo = () => {
  const [activeCategory, setActiveCategory] = useState("development")

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section
      id="what-i-do"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What I Do</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I provide comprehensive software solutions tailored to your specific needs
          </p>
        </motion.div>

        <Tabs defaultValue="development" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl">
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center"
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence mode="wait">
                  {category.services.map((service) => (
                    <motion.div key={service.name} variants={itemVariants} layout className="h-full">
                      <Card
                        className="h-full overflow-hidden border-l-4 hover:shadow-xl transition-all duration-300"
                        style={{ borderLeftColor: service.color }}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center gap-3 text-xl">
                            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                              <service.icon style={{ color: service.color }} className="h-6 w-6" />
                            </motion.div>
                            {service.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="w-full" size="sm">
                                Learn More
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <service.icon style={{ color: service.color }} className="h-5 w-5" />
                                  {service.name}
                                </DialogTitle>
                                <DialogDescription>{service.description}</DialogDescription>
                              </DialogHeader>
                              <div className="mt-4">
                                <h4 className="font-medium text-sm mb-2">What this includes:</h4>
                                <ul className="space-y-2">
                                  {service.details?.map((detail, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-2"
                                    >
                                      <div className="h-5 w-5 mt-0.5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-xs text-primary font-medium">{idx + 1}</span>
                                      </div>
                                      <span className="text-sm">{detail}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                                <div className="mt-6 flex flex-wrap gap-2">
                                  {service.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default WhatIDo


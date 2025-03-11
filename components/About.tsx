"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

import { FaCode, FaServer, FaCogs, FaGitAlt, FaReact, FaPython, FaJs, FaMicrochip,FaDatabase } from "react-icons/fa"
import { GiBrain, GiMountainCave, GiBookCover, GiGamepad } from "react-icons/gi"
import { MdPeople, MdMessage, MdHandshake, MdAccessTime, MdLightbulb, MdPresentToAll } from "react-icons/md"
import { AiFillHeart } from "react-icons/ai"
import { DiDotnet } from "react-icons/di"
import { SiPostgresql, SiSharp, SiDjango, SiFlask } from "react-icons/si"
import { VscAzureDevops } from "react-icons/vsc"
import { ChevronUp, Search, Filter } from "lucide-react"

// Define hobby data with icons
const hobbies = [
  {
    name: "Coding",
    icon: <FaCode className="h-6 w-6 text-blue-500" />,
    description: "I do coding to solve problems and create innovative solutions.",
  },
  {
    name: "Hiking",
    icon: <GiMountainCave className="h-6 w-6 text-green-500" />,
    description: "Exploring nature helps me relax and recharge.",
  },
  {
    name: "Reading",
    icon: <GiBookCover className="h-6 w-6 text-red-500" />,
    description: "I enjoy both fiction and non-fiction, always looking to learn more.",
  },
  
]

// Enhanced technical skills with vibrant icons, proficiency levels, and detailed descriptions
const technicalSkills = [
  {
    name: "C#",
    icon: <SiSharp className="h-8 w-8 text-purple-600" />,
    description:
      "Advanced proficiency in C# for application development, including LINQ, async programming, and design patterns.",
    proficiency: 90,
    category: "language",
    color: "purple",
  },
  {
    name: "ASP.NET Core",
    icon: <DiDotnet className="h-8 w-8 text-blue-600" />,
    description: "Advanced skills in building web applications with MVC, Web API, and Razor Pages.",
    proficiency: 85,
    category: "framework",
    color: "blue",
  },
  {
    name: "Microsoft SQL",
    icon: <FaDatabase className="h-8 w-8 text-red-600" />,
    description: "Advanced database management, complex queries, stored procedures, and performance optimization.",
    proficiency: 85,
    category: "database",
    color: "red",
  },
  {
    name: "React",
    icon: <FaReact className="h-8 w-8 text-cyan-500" />,
    description: "Intermediate skills in building interactive UIs with hooks, context API, and state management.",
    proficiency: 75,
    category: "frontend",
    color: "cyan",
  },
  {
    name: "Azure DevOps",
    icon: <VscAzureDevops className="h-8 w-8 text-blue-500" />,
    description: "Intermediate level in CI/CD pipelines, build automation, and release management.",
    proficiency: 70,
    category: "devops",
    color: "blue",
  },
  {
    name: "Python",
    icon: <FaPython className="h-8 w-8 text-yellow-600" />,
    description: "Intermediate proficiency in Python programming for data analysis and web development.",
    proficiency: 75,
    category: "language",
    color: "yellow",
  },
  {
    name: "Django",
    icon: <SiDjango className="h-8 w-8 text-green-700" />,
    description: "Intermediate skills in building robust web applications with Django's ORM and admin interface.",
    proficiency: 70,
    category: "framework",
    color: "green",
  },
  {
    name: "Flask",
    icon: <SiFlask className="h-8 w-8 text-gray-700" />,
    description: "Intermediate skills in creating lightweight web services and APIs.",
    proficiency: 65,
    category: "framework",
    color: "gray",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="h-8 w-8 text-yellow-500" />,
    description: "Advanced skills in modern JavaScript including ES6+ features, async/await, and DOM manipulation.",
    proficiency: 85,
    category: "language",
    color: "yellow",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-8 w-8 text-blue-700" />,
    description: "Intermediate database management with experience in complex queries and performance tuning.",
    proficiency: 70,
    category: "database",
    color: "blue",
  },
  {
    name: "VB.Net",
    icon: <DiDotnet className="h-8 w-8 text-indigo-600" />,
    description: "Intermediate proficiency in VB.Net for legacy application maintenance and development.",
    proficiency: 65,
    category: "language",
    color: "indigo",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="h-8 w-8 text-orange-600" />,
    description:
      "Advanced version control skills including branching strategies, merge conflict resolution, and collaboration workflows.",
    proficiency: 90,
    category: "tool",
    color: "orange",
  },
  {
    name: "RESTful APIs",
    icon: <FaServer className="h-8 w-8 text-green-600" />,
    description: "Advanced API development skills with focus on best practices, security, and documentation.",
    proficiency: 85,
    category: "backend",
    color: "green",
  },
  {
    name: "Microservices",
    icon: <FaMicrochip className="h-8 w-8 text-purple-500" />,
    description:
      "Intermediate architecture design with experience in service communication patterns and containerization.",
    proficiency: 70,
    category: "architecture",
    color: "purple",
  },
]

// Define soft skills with icons and descriptions
const softSkills = [
  {
    name: "Leadership",
    icon: <MdPeople className="h-6 w-6 text-blue-500" />,
    description: "Ability to guide teams, make decisions, and inspire others to achieve common goals.",
  },
  {
    name: "Problem Solving",
    icon: <GiBrain className="h-6 w-6 text-purple-500" />,
    description: "Analytical approach to identifying issues and developing effective solutions.",
  },
  {
    name: "Communication",
    icon: <MdMessage className="h-6 w-6 text-green-500" />,
    description: "Clear and effective verbal and written communication with technical and non-technical stakeholders.",
  },
  {
    name: "Collaboration",
    icon: <MdHandshake className="h-6 w-6 text-yellow-500" />,
    description: "Working effectively in cross-functional teams to achieve project objectives.",
  },
  {
    name: "Adaptability",
    icon: <AiFillHeart className="h-6 w-6 text-purple-500" />,
    description: "Quickly adjusting to new technologies, methodologies, and project requirements.",
  },
  {
    name: "Goal-Oriented",
    icon: <MdPresentToAll className="h-6 w-6 text-blue-500" />,
    description: "Focused on achieving objectives and delivering high-quality results.",
  },
  
]

// Skill categories for filtering
const skillCategories = [
  { value: "all", label: "All Skills" },
  { value: "language", label: "Languages" },
  { value: "framework", label: "Frameworks" },
  { value: "database", label: "Databases" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "devops", label: "DevOps" },
  { value: "tool", label: "Tools" },
  { value: "architecture", label: "Architecture" },
]

export default function About() {
  const [expandedHobby, setExpandedHobby] = useState<number | null>(null)
  const [expandedSoftSkill, setExpandedSoftSkill] = useState<number | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)
  const [skillFilter, setSkillFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isGridView, setIsGridView] = useState(true)

  const skillsRef = useRef(null)
  const isSkillsInView = useInView(skillsRef, { once: false, amount: 0.2 })

  // Filter skills based on category and search query
  const filteredSkills = technicalSkills.filter((skill) => {
    const matchesCategory = skillFilter === "all" || skill.category === skillFilter
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="story">My Story</TabsTrigger>
                <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
              </TabsList>
              <TabsContent value="story" className="mt-0">
  <Card className="border-primary/20">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <AiFillHeart className="h-5 w-5 text-red-500" />
        My Story
      </CardTitle>
      <CardDescription>
        Journeying through technology and innovation
      </CardDescription>
    </CardHeader>
    <CardContent className="text-muted-foreground space-y-4">
      <p>
        My professional journey began with a Bachelor of Science in Public Administration and Leadership, where I developed skills in governance, analytical thinking, and effective teamwork. During my tenure as an attaché at the Ministry of Devolution and ASAL Areas, I witnessed firsthand how technology could revolutionize processes.
      </p>
      <p>
        This realization ignited my passion for innovation and problem-solving, prompting a transition into software development. To gain the necessary technical skills, I enrolled in a Professional Certificate program in Software Engineering at Moringa School. There, I became proficient in full-stack development, mastering languages and frameworks such as Python, Django, Flask, React, and SQL.
      </p>
      <p>
        Over the past three years at Fintech Group Kenya, I've leveraged these skills to enhance core banking systems, develop SACCO loan management tools, and create fintech leasing platforms across various countries. My contributions have significantly reduced system inefficiencies and improved client satisfaction for organizations like NCBA Bank Kenya and Centenary Bank Uganda.
      </p>
      <p>
        Currently, I specialize in building scalable, high-performance applications using a tech stack that includes C#, ASP.NET Core, Microsoft SQL, React, and Azure DevOps. I thrive in collaborative, Agile environments, leveraging my leadership background to drive projects, tackle complex challenges, and foster innovative solutions.
      </p>
      <p>
        My story embodies a continuous quest for growth, merging analytical insight with technical prowess to deliver impactful systems in fintech and beyond. I invite you to connect with me to explore how we can innovate together!
      </p>
    </CardContent>
  </Card>
</TabsContent>

              <TabsContent value="technical" className="mt-0">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div animate={pulseAnimation}>
                        <FaCogs className="h-5 w-5 text-blue-500" />
                      </motion.div>
                      Technical Skills
                    </CardTitle>
                    <CardDescription>Programming languages, frameworks, and tools I work with</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Search and filter controls */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
                      <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <input
                          type="text"
                          placeholder="Search skills..."
                          className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background text-sm ring-offset-background"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>

                      <div className="flex items-center gap-2 w-full md:w-auto">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        <select
                          className="py-2 px-3 rounded-md border border-input bg-background text-sm ring-offset-background"
                          value={skillFilter}
                          onChange={(e) => setSkillFilter(e.target.value)}
                        >
                          {skillCategories.map((category) => (
                            <option key={category.value} value={category.value}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex gap-2 ml-auto">
                        <Button
                          variant={isGridView ? "default" : "outline"}
                          size="sm"
                          onClick={() => setIsGridView(true)}
                          className="px-3"
                        >
                          <div className="grid grid-cols-2 gap-0.5">
                            <div className="w-2 h-2 bg-current rounded-sm"></div>
                            <div className="w-2 h-2 bg-current rounded-sm"></div>
                            <div className="w-2 h-2 bg-current rounded-sm"></div>
                            <div className="w-2 h-2 bg-current rounded-sm"></div>
                          </div>
                          <span className="ml-2 sr-only md:not-sr-only">Grid</span>
                        </Button>
                        <Button
                          variant={!isGridView ? "default" : "outline"}
                          size="sm"
                          onClick={() => setIsGridView(false)}
                          className="px-3"
                        >
                          <div className="flex flex-col gap-0.5">
                            <div className="w-4 h-1 bg-current rounded-sm"></div>
                            <div className="w-4 h-1 bg-current rounded-sm"></div>
                            <div className="w-4 h-1 bg-current rounded-sm"></div>
                          </div>
                          <span className="ml-2 sr-only md:not-sr-only">List</span>
                        </Button>
                      </div>
                    </div>

                    {/* Skills display */}
                    <div ref={skillsRef}>
                      {filteredSkills.length === 0 ? (
                        <div className="text-center py-10 text-muted-foreground">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="mb-4 inline-block"
                          >
                            <Search className="h-12 w-12 mx-auto text-muted-foreground/50" />
                          </motion.div>
                          <p>No skills match your search criteria.</p>
                          <Button
                            variant="link"
                            onClick={() => {
                              setSearchQuery("")
                              setSkillFilter("all")
                            }}
                          >
                            Clear filters
                          </Button>
                        </div>
                      ) : isGridView ? (
                        <motion.div
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate={isSkillsInView ? "visible" : "hidden"}
                        >
                          {filteredSkills.map((skill, index) => (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                              whileHover={{ y: -5, transition: { duration: 0.2 } }}
                              className="h-full"
                            >
                              <Card
                                className={`h-full border-${skill.color}-200/30 hover:border-${skill.color}-300/50 transition-all duration-300`}
                              >
                                <CardHeader className="pb-2">
                                  <div className="flex items-center gap-3">
                                    <motion.div
                                      className={`p-3 rounded-full bg-${skill.color}-100 dark:bg-${skill.color}-900/20`}
                                      animate={{
                                        rotate: [0, 5, 0, -5, 0],
                                        scale: [1, 1.05, 1],
                                      }}
                                      transition={{
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "mirror",
                                        duration: 5,
                                        ease: "easeInOut",
                                      }}
                                    >
                                      {skill.icon}
                                    </motion.div>
                                    <div>
                                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                                      <Badge
                                        variant="outline"
                                        className={`text-${skill.color}-600 dark:text-${skill.color}-400 bg-${skill.color}-50 dark:bg-${skill.color}-900/20 border-${skill.color}-200 dark:border-${skill.color}-800`}
                                      >
                                        {skill.category}
                                      </Badge>
                                    </div>
                                  </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                <div>
  <div className="flex justify-between mb-1 text-sm">
    <span>Proficiency</span>
    <span className="font-medium">{skill.proficiency}%</span>
  </div>
  <Progress
    value={skill.proficiency}
    className={`h-2 bg-${skill.color}-100 dark:bg-${skill.color}-900/20`}
  />
</div>

                                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          className="space-y-3"
                          variants={containerVariants}
                          initial="hidden"
                          animate={isSkillsInView ? "visible" : "hidden"}
                        >
                          {filteredSkills.map((skill, index) => (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                              whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                              <Card
                                className={`border-${skill.color}-200/30 hover:border-${skill.color}-300/50 transition-all duration-300`}
                              >
                                <div className="p-4 flex flex-col md:flex-row md:items-center gap-4">
                                  <motion.div
                                    className={`p-3 rounded-full bg-${skill.color}-100 dark:bg-${skill.color}-900/20 flex-shrink-0`}
                                    animate={{
                                      rotate: [0, 5, 0, -5, 0],
                                      scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                      repeat: Number.POSITIVE_INFINITY,
                                      repeatType: "mirror",
                                      duration: 5,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    {skill.icon}
                                  </motion.div>

                                  <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                      <div>
                                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                                        <Badge
                                          variant="outline"
                                          className={`text-${skill.color}-600 dark:text-${skill.color}-400 bg-${skill.color}-50 dark:bg-${skill.color}-900/20 border-${skill.color}-200 dark:border-${skill.color}-800`}
                                        >
                                          {skill.category}
                                        </Badge>
                                      </div>
                                      <div>
  <div className="flex justify-between mb-1 text-sm">
    <span>Proficiency</span>
    <span className="font-medium">{skill.proficiency}%</span>
  </div>
  <Progress
    value={skill.proficiency}
    className={`h-2 bg-${skill.color}-100 dark:bg-${skill.color}-900/20`}
  />
</div>

                                    </div>
                                    <p className="text-muted-foreground">{skill.description}</p>
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Skill summary */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="mt-8"
                    >
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-center mb-4">
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0, -5, 0],
                              }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 3,
                                ease: "easeInOut",
                              }}
                            >
                              <FaCode className="h-8 w-8 text-primary mr-2" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold">Technical Expertise</h3>
                          </div>
                          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                            My technical journey spans full-stack development with a focus on .NET ecosystem and modern
                            web technologies. I'm passionate about clean code, performance optimization, and creating
                            scalable solutions that solve real-world problems.
                          </p>

                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-6">
                            {skillCategories
                              .filter((c) => c.value !== "all")
                              .map((category) => {
                                const count = technicalSkills.filter((s) => s.category === category.value).length
                                return count > 0 ? (
                                  <Button
                                    key={category.value}
                                    variant="outline"
                                    size="sm"
                                    className={`justify-between ${skillFilter === category.value ? "bg-primary/10 border-primary/30" : ""}`}
                                    onClick={() => setSkillFilter(category.value)}
                                  >
                                    {category.label}
                                    <Badge variant="secondary" className="ml-2">
                                      {count}
                                    </Badge>
                                  </Button>
                                ) : null
                              })}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="soft" className="mt-0">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GiBrain className="h-5 w-5 text-purple-500" />
                      Soft Skills
                    </CardTitle>
                    <CardDescription>Professional competencies beyond technical expertise</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {softSkills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Card className="h-full hover:shadow-md transition-all duration-300 overflow-hidden border-primary/10">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-3">
                                <motion.div
                                  className="p-3 rounded-full bg-primary/10"
                                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                                  transition={{
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "mirror",
                                    duration: 5,
                                    ease: "easeInOut",
                                  }}
                                >
                                  {skill.icon}
                                </motion.div>
                                <CardTitle className="text-lg">{skill.name}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <AnimatePresence initial={false}>
                                {(expandedSoftSkill === index || expandedSoftSkill === null) && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-muted-foreground"
                                  >
                                    {skill.description}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2 w-full flex items-center justify-center"
                                onClick={() => setExpandedSoftSkill(expandedSoftSkill === index ? null : index)}
                              >
                                {expandedSoftSkill === index ? (
                                  <>
                                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.5 }}>
                                      <ChevronUp className="mr-2 h-4 w-4" />
                                    </motion.div>
                                    Show Less
                                  </>
                                ) : (
                                  <>
                                    <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 0.5 }}>
                                      <MdLightbulb className="mr-2 h-4 w-4" />
                                    </motion.div>
                                    Learn More
                                  </>
                                )}
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hobbies" className="mt-0">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AiFillHeart className="h-5 w-5 text-red-500" />
                      Hobbies & Interests
                    </CardTitle>
                    <CardDescription>What I enjoy outside of work</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {hobbies.map((hobby, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.03 }}
                        >
                          <Card className="h-full hover:shadow-md transition-all duration-300 overflow-hidden border-primary/10">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-3">
                                <motion.div
                                  className="p-3 rounded-full bg-primary/10"
                                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                                  transition={{
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "mirror",
                                    duration: 5,
                                    ease: "easeInOut",
                                  }}
                                >
                                  {hobby.icon}
                                </motion.div>
                                <CardTitle className="text-lg">{hobby.name}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <AnimatePresence initial={false}>
                                {(expandedHobby === index || expandedHobby === null) && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-muted-foreground"
                                  >
                                    {hobby.description}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2 w-full flex items-center justify-center"
                                onClick={() => setExpandedHobby(expandedHobby === index ? null : index)}
                              >
                                {expandedHobby === index ? (
                                  <>
                                    <ChevronUp className="mr-2 h-4 w-4" /> Show Less
                                  </>
                                ) : (
                                  <>
                                    <MdLightbulb className="mr-2 h-4 w-4" /> Tell Me More
                                  </>
                                )}
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="mt-10"
                    >
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-center mb-4">
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0, -5, 0],
                              }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 3,
                                ease: "easeInOut",
                              }}
                            >
                              <AiFillHeart className="h-8 w-8 text-red-500 mr-2" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold">Passion Statement</h3>
                          </div>
                          <p className="text-muted-foreground">
                            I'm passionate about leveraging technology to solve real-world problems. My unique
                            background in public administration combined with technical expertise allows me to bridge
                            the gap between business needs and technical solutions. I believe in continuous learning and
                            pushing boundaries to create impactful, user-centered applications that make a difference.
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


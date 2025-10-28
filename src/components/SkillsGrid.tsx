"use client";

import { motion, type Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Code, Cpu, Paintbrush } from "lucide-react";

// Example SkillBar component
function SkillBar({ skill, index }: { skill: { name: string; level: number }; index: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1 text-sm">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
}

// Example data
const skillsData = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Design",
    icon: Paintbrush,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "Canva", level: 85 },
    ],
  },
  {
    title: "Design",
    icon: Paintbrush,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "Canva", level: 85 },
    ],
  },
  {
    title: "Design",
    icon: Paintbrush,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "Canva", level: 85 },
    ],
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {skillsData.map((category, categoryIndex) => (
        <motion.div
          key={`${category.title}-${categoryIndex}`}
          variants={cardVariants}
          whileHover={{
            y: -4,
            transition: { duration: 0.2 },
          }}
        >
          <Card className="h-full hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <motion.div
                  className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-base">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skill.name} skill={skill} index={skillIndex} />
              ))}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

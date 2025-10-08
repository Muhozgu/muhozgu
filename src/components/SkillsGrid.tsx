// import { motion } from 'motion/react';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Code, Brain, BarChart3, Database, Cloud, Globe } from 'lucide-react';

// interface SkillItem {
//   name: string;
//   percentage: number;
// }

// interface SkillCategory {
//   title: string;
//   icon: React.ElementType;
//   skills: SkillItem[];
// }

// const skillsData: SkillCategory[] = [
//   {
//     title: 'Programming Languages',
//     icon: Code,
//     skills: [
//       { name: 'Python', percentage: 95 },
//       { name: 'R', percentage: 85 },
//       { name: 'SQL', percentage: 90 },
//       { name: 'JavaScript', percentage: 75 },
//       { name: 'Java', percentage: 70 }
//     ]
//   },
//   {
//     title: 'Machine Learning',
//     icon: Brain,
//     skills: [
//       { name: 'Scikit-learn', percentage: 93 },
//       { name: 'TensorFlow', percentage: 87 },
//       { name: 'PyTorch', percentage: 78 },
//       { name: 'Keras', percentage: 90 },
//       { name: 'XGBoost', percentage: 75 }
//     ]
//   },
//   {
//     title: 'Data Analysis',
//     icon: BarChart3,
//     skills: [
//       { name: 'Pandas', percentage: 95 },
//       { name: 'NumPy', percentage: 90 },
//       { name: 'Matplotlib', percentage: 85 },
//       { name: 'Seaborn', percentage: 82 },
//       { name: 'Plotly', percentage: 78 }
//     ]
//   },
//   {
//     title: 'Databases',
//     icon: Database,
//     skills: [
//       { name: 'MySQL', percentage: 87 },
//       { name: 'PostgreSQL', percentage: 75 },
//       { name: 'MongoDB', percentage: 70 },
//       { name: 'SQLite', percentage: 85 },
//       { name: 'Redis', percentage: 65 }
//     ]
//   },
//   {
//     title: 'Cloud & Tools',
//     icon: Cloud,
//     skills: [
//       { name: 'AWS', percentage: 77 },
//       { name: 'Docker', percentage: 73 },
//       { name: 'Git', percentage: 90 },
//       { name: 'Jupyter', percentage: 90 },
//       { name: 'Linux', percentage: 68 }
//     ]
//   },
//   {
//     title: 'Web Technologies',
//     icon: Globe,
//     skills: [
//       { name: 'React', percentage: 77 },
//       { name: 'Node.js', percentage: 70 },
//       { name: 'HTML/CSS', percentage: 80 },
//       { name: 'FastAPI', percentage: 72 },
//       { name: 'Flask', percentage: 75 }
//     ]
//   }
// ];

// interface SkillBarProps {
//   skill: SkillItem;
//   index: number;
// }

// function SkillBar({ skill, index }: SkillBarProps) {
//   return (
//     <motion.div 
//       className="mb-4 last:mb-0"
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.5 }}
//     >
//       <div className="flex justify-between items-center mb-2">
//         <span className="text-sm font-medium text-foreground">{skill.name}</span>
//         <span className="text-sm text-muted-foreground font-medium">{skill.percentage}%</span>
//       </div>
//       <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
//         <motion.div
//           className="h-2 bg-primary rounded-full"
//           initial={{ width: 0 }}
//           whileInView={{ width: `${skill.percentage}%` }}
//           viewport={{ once: true }}
//           transition={{ 
//             delay: index * 0.1 + 0.2, 
//             duration: 0.8,
//             ease: "easeOut"
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// export function SkillsGrid() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 40,
//       scale: 0.95
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <motion.div 
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//     >
//       {skillsData.map((category, categoryIndex) => (
//         <motion.div 
//           key={category.title} 
//           variants={cardVariants}
//           whileHover={{ 
//             y: -4,
//             transition: { duration: 0.2 }
//           }}
//         >
//           <Card 
//             className="h-full hover:shadow-lg transition-all duration-300 group"
//           >
//             <CardHeader className="pb-4">
//               <CardTitle className="flex items-center gap-3 text-lg">
//                 <motion.div 
//                   className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <category.icon className="w-4 h-4 text-primary" />
//                 </motion.div>
//                 <span className="text-base">{category.title}</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {category.skills.map((skill, skillIndex) => (
//                 <SkillBar 
//                   key={skill.name} 
//                   skill={skill} 
//                   index={skillIndex}
//                 />
//               ))}
//             </CardContent>
//           </Card>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }
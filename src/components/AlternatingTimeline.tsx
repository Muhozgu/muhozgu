// import { motion } from 'motion/react';
// import { Calendar, MapPin } from 'lucide-react';

// interface TimelineItem {
//   title: string;
//   company: string;
//   period: string;
//   description: string;
//   location?: string;
// }

// interface AlternatingTimelineProps {
//   items: TimelineItem[];
// }

// export function AlternatingTimeline({ items }: AlternatingTimelineProps) {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariantsLeft = {
//     hidden: { 
//       opacity: 0, 
//       x: -80,
//       scale: 0.8
//     },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const itemVariantsRight = {
//     hidden: { 
//       opacity: 0, 
//       x: 80,
//       scale: 0.8
//     },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const lineVariants = {
//     hidden: { height: 0 },
//     visible: {
//       height: "100%",
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut",
//         delay: 0.2
//       }
//     }
//   };

//   const dotVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut",
//         delay: 0.1
//       }
//     }
//   };

//   return (
//     <motion.div 
//       className="relative max-w-6xl mx-auto"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//     >
//       {/* Central timeline line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-border h-full">
//         <motion.div 
//           className="w-full bg-primary origin-top"
//           variants={lineVariants}
//         />
//       </div>

//       <div className="space-y-12">
//         {items.map((item, index) => {
//           const isLeft = index % 2 === 0;
          
//           return (
//             <motion.div
//               key={index}
//               className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
//               variants={isLeft ? itemVariantsLeft : itemVariantsRight}
//             >
//               {/* Content card */}
//               <motion.div 
//                 className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}
//                 whileHover={{ 
//                   y: -4,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
//                   <div className="flex flex-col gap-2 mb-3">
//                     <div className={`${isLeft ? 'text-left' : 'text-right'}`}>
//                       <h3 className="text-lg font-semibold text-foreground mb-1">
//                         {item.title}
//                       </h3>
//                       <p className="text-primary font-medium">
//                         {item.company}
//                       </p>
//                     </div>
//                     <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} gap-4 text-sm text-muted-foreground`}>
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-3 h-3" />
//                         <span>{item.period}</span>
//                       </div>
//                       {item.location && (
//                         <div className="flex items-center gap-1">
//                           <MapPin className="w-3 h-3" />
//                           <span>{item.location}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <p className={`text-muted-foreground leading-relaxed ${isLeft ? 'text-left' : 'text-right'}`}>
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Timeline dot */}
//               <motion.div 
//                 className="absolute left-1/2 transform -translate-x-1/2 z-10"
//                 variants={dotVariants}
//               >
//                 <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
//                   <motion.div
//                     className="w-2 h-2 bg-primary-foreground rounded-full"
//                     whileHover={{ scale: 1.5 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                   />
//                 </div>
//                 {/* Outer ring animation */}
//                 <motion.div
//                   className="absolute inset-0 w-6 h-6 border-2 border-primary/30 rounded-full"
//                   initial={{ scale: 1, opacity: 0 }}
//                   whileInView={{ 
//                     scale: [1, 1.8, 1],
//                     opacity: [0, 0.6, 0]
//                   }}
//                   transition={{ 
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: index * 0.3
//                   }}
//                 />
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }
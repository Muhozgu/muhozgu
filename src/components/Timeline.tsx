import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  location?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 w-0.5 bg-border h-full">
        <motion.div 
          className="w-full bg-primary origin-top"
          variants={lineVariants}
        />
      </div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-6"
            variants={itemVariants}
          >
            {/* Timeline dot */}
            <motion.div 
              className="relative z-10 flex-shrink-0"
              variants={dotVariants}
            >
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg">
                <motion.div
                  className="w-full h-full bg-primary rounded-full"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              {/* Outer ring animation */}
              <motion.div
                className="absolute inset-0 w-4 h-4 border-2 border-primary/30 rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>

            {/* Content card */}
            <motion.div 
              className="flex-1 bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {item.company}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
// import { Navigation } from './components/Navigation';
// import { AlternatingTimeline } from './components/AlternatingTimeline';
// import { SkillsGrid } from './components/SkillsGrid';
// import { ContactSection } from './components/ContactSection';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import profileImage from './assets/4929c99f37a6e26e9b5358f209011ac260185e5b.png'; // Changed from figma:asset to local path
// import projectsImage from './assets/projects.png';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Database,
  Globe,
  // Smartphone,
  Calendar,
  GraduationCap,
  Briefcase,
  User,
  Download,
  Palette,
  Users,
  Target,
  Lightbulb,
  Headphones,
  ChevronRight,
  ArrowUp
} from 'lucide-react';

function PortfolioContent() {
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // const floatingAnimation = {
  //   animate: {
  //     y: [-10, 10, -10],
  //     transition: {
  //       duration: 4,
  //       repeat: Infinity,
  //       ease: "easeInOut"
  //     }
  //   }
  // };

  // Experience data for timeline
  // const experienceData = [
  //   {
  //     title: t.experience.job1Title,
  //     company: t.experience.job1Company,
  //     period: t.experience.job1Period,
  //     description: t.experience.job1Description,
  //     location: "Remote"
  //   },
  //   {
  //     title: t.experience.job2Title,
  //     company: t.experience.job2Company,
  //     period: t.experience.job2Period,
  //     description: t.experience.job2Description,
  //     location: "New York, NY"
  //   }
  // ];

  const skillCards = [
    {
      icon: Code,
      title: t.about.cleanCode,
      description: t.about.cleanCodeDesc
    },
    {
      icon: Palette,
      title: t.about.designFocus,
      description: t.about.designFocusDesc
    },
    {
      icon: Lightbulb,
      title: t.about.problemSolving,
      description: t.about.problemSolvingDesc
    },
    {
      icon: Users,
      title: t.about.collaboration,
      description: t.about.collaborationDesc
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(3,2,19,0.05) 0%, transparent 50%, rgba(236,236,240,0.05) 100%)",
              "linear-gradient(225deg, rgba(3,2,19,0.05) 0%, transparent 50%, rgba(236,236,240,0.05) 100%)",
              "linear-gradient(45deg, rgba(3,2,19,0.05) 0%, transparent 50%, rgba(236,236,240,0.05) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div   
              className="text-center lg:text-left"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                className="text-lg text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t.home.greeting}
              </motion.p>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {t.home.name}
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl sm:text-3xl text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {t.home.title}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {t.home.subtitle}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="group"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    {t.home.cta}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group"
                  >
                    View Projects
                    <Target className="ml-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex gap-4 mt-8 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="rounded-full p-3">
                    <Github className="w-5 h-5" />
                  </Button>
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="rounded-full p-3">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href="mailto:guy.muhoza@email.com">
                  <Button variant="ghost" size="sm" className="rounded-full p-3">
                    <Mail className="w-5 h-5" />
                  </Button>
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="relative"
                initial="floatingAnimation.initial"
                animate="floatingAnimation.animate"
              >
                <motion.div 
                  className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profileImage}
                    alt="Guy Muhoza"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Database className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-6 h-6 text-secondary-foreground" />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -right-8 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <Headphones className="w-5 h-5 text-accent-foreground" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4 flex items-center justify-center gap-3">
              <User className="w-8 h-8 text-primary" />
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.about.description}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl mb-6">{t.about.subtitle}</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.intro}</p>
                <p>{t.about.specialization}</p>
                <p>{t.about.mission}</p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>guy.muhoza@email.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {skillCards.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6 flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              {t.experience.title}
            </h2>
          </motion.div>
          
          {/* <AlternatingTimeline items={experienceData} /> */}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              {t.education.title}
            </h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{t.education.degree1}</CardTitle>
                  <CardDescription>{t.education.university1}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{t.education.period1}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{t.education.degree2}</CardTitle>
                  <CardDescription>{t.education.university2}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{t.education.period2}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6 flex items-center justify-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              {t.skills.title}
            </h2>
          </motion.div>
          
          {/* <SkillsGrid /> */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6 flex items-center justify-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              {t.projects.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of AI/ML projects demonstrating expertise in machine learning, data science, and software engineering
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                ⭐ Featured Project
              </Badge>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <motion.img
                      src="https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc1OTY5NDgzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Advanced ML Pipeline"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">December 2024</span>
                        <Badge variant="outline" className="ml-2">Production</Badge>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl mb-4">Advanced ML Pipeline Platform</h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Built an end-to-end machine learning platform that automates model training, evaluation, and deployment. 
                        Features include real-time monitoring, A/B testing capabilities, and automatic model retraining with 99.9% uptime.
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {["Python", "MLflow", "Kubernetes", "PostgreSQL", "React", "FastAPI"].map((tech, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="group">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                            <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" className="group">
                            <Globe className="w-4 h-4 mr-2" />
                            Live Demo
                            <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Project Categories */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
              {["All Projects", "Machine Learning", "Data Science", "Web Development"].map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant={index === 0 ? "default" : "ghost"} 
                    size="sm"
                    className="transition-all duration-200"
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Neural Network Image Classifier",
                description: "Developed a deep learning model using TensorFlow to classify images with 95% accuracy. Implemented data augmentation and transfer learning techniques to improve model performance.",
                date: "November 2024",
                category: "Machine Learning",
                technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
                image: "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc1OTY5NDgzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                featured: true,
                status: "Deployed"
              },
              {
                title: "Customer Analytics Dashboard",
                description: "Built an interactive dashboard for analyzing customer behavior using Python and Streamlit. Implemented data visualization techniques to provide actionable business insights.",
                date: "October 2024",
                category: "Data Science",
                technologies: ["Python", "Streamlit", "Pandas", "Plotly", "SQL"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTYwMDIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                status: "Active"
              },
              {
                title: "AI-Powered Chatbot",
                description: "Created an intelligent chatbot using natural language processing techniques. Integrated with OpenAI API and deployed on AWS for scalable customer service automation.",
                date: "September 2024",
                category: "Machine Learning",
                technologies: ["Python", "OpenAI API", "Flask", "AWS", "Docker"],
                image: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NzA0NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                status: "Production"
              },
              {
                title: "Computer Vision Detection System",
                description: "Developed a real-time object detection system using YOLO and OpenCV. Achieved 92% accuracy in detecting and tracking objects in video streams with optimized performance.",
                date: "August 2024",
                category: "Machine Learning",
                technologies: ["Python", "YOLO", "OpenCV", "PyTorch", "CUDA"],
                image: "https://images.unsplash.com/photo-1705357311681-17449eb278d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGRldGVjdGlvbnxlbnwxfHx8fDE3NTk3MDQ2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                status: "Beta"
              },
              {
                title: "Blockchain Analytics Platform",
                description: "Built a comprehensive platform for analyzing blockchain transactions and cryptocurrency market trends. Features include real-time monitoring and predictive analytics.",
                date: "July 2024",
                category: "Web Development",
                technologies: ["React", "Node.js", "MongoDB", "Web3.js", "Chart.js"],
                image: "https://images.unsplash.com/photo-1590286162167-70fb467846ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3l8ZW58MXx8fHwxNzU5NjAzODczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                status: "Live"
              },
              {
                title: "NLP Sentiment Analysis API",
                description: "Created a scalable API for sentiment analysis using transformer models. Processes 10k+ requests per minute with multilingual support and real-time classification.",
                date: "June 2024",
                category: "Machine Learning",
                technologies: ["Python", "Transformers", "FastAPI", "Redis", "Docker"],
                image: "https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nfGVufDF8fHx8MTc1OTcwMTMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                status: "Production"
              }
            ].map((project, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <Card className="hover:shadow-xl transition-all duration-500 group h-full border-2 border-transparent hover:border-primary/20">
                  {/* Project Image */}
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge 
                        variant={project.status === 'Production' || project.status === 'Live' ? 'default' : 'secondary'}
                        className="bg-background/90 backdrop-blur-sm"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.date}</span>
                    </div>
                    
                    {/* Title */}
                    <CardTitle className="mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full group/btn">
                          <Code className="w-4 h-4 mr-2" />
                          Code
                          <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full group/btn">
                          <Globe className="w-4 h-4 mr-2" />
                          Demo
                          <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Projects */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <ContactSection /> */}

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Name */}
            <motion.h3 
              className="text-2xl sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Guy Muhoza
            </motion.h3>
            
            {/* Social Icons */}
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }} 
                whileTap={{ scale: 0.9 }}
                href="mailto:guy.muhoza@email.com"
              >
                <Button variant="ghost" size="sm" className="rounded-full p-3 hover:bg-primary/10">
                  <Mail className="w-5 h-5" />
                </Button>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }} 
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="rounded-full p-3 hover:bg-primary/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }} 
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="rounded-full p-3 hover:bg-primary/10">
                  <Github className="w-5 h-5" />
                </Button>
              </motion.a>
            </motion.div>
            
            {/* Quote */}
            <motion.p 
              className="text-muted-foreground italic max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              "The future belongs to those who learn more skills and combine them in creative ways."
            </motion.p>
            
            {/* Copyright */}
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              © 2025 Guy Muhoza. Made with ❤️ and lots of coffee.
            </motion.p>
            
            {/* Back to Top */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group text-muted-foreground hover:text-foreground transition-colors"
                >
                  Back to Top
                  <motion.div
                    className="ml-2"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUp className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
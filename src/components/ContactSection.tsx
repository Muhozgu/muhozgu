import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { useLanguage } from './LanguageContext';

function ContactSection() {
  // const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhoza.g@outlook.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+48 (880) 998-985'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Warsaw, Poland'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        >

          <h2 className="text-3xl sm:text-4xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(3, 2, 19, 0.2)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h4 className="text-lg mb-4">Let's Connect</h4>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about AI/ML and always eager to discuss new ideas, 
                collaborate on projects, or explore opportunities in data science and machine 
                learning. Don't hesitate to reach out!
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm mb-2">Name</label>
                      <Input 
                        placeholder="Your name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm mb-2">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.01 }} 
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm mb-2">Subject</label>
                    <Input 
                      placeholder="What's this about?"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.01 }} 
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="w-full group bg-foreground hover:bg-foreground/90 text-background"
                    >
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
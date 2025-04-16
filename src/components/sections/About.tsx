import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    "Innovative Problem Solving",
    "Continuous Learning",
    "Detail-Oriented Development",
    "Collaborative Approach",
    "Technical Excellence",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <motion.div 
          className="numbered-heading mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-white leading-relaxed"
              variants={itemVariants}
            >
              Hello! I'm Jaimin, a Senior Odoo Developer with 4.3+ years of expertise in end-to-end ERP solutions, AI integrations, and complex module development. I've delivered 15+ cross-functional projects for global clients, automating workflows and reducing operational costs by 30-70%.
            </motion.p>

            <motion.p 
              className="text-white leading-relaxed"
              variants={itemVariants}
            >
              My technical journey spans from developing custom Odoo modules to implementing AI-powered solutions. I'm proficient in Python, JavaScript (ES6+), TypeScript, and SQL, with expertise in frameworks like OWL (Odoo Web Library) and React.js.
            </motion.p>

            <motion.p 
              className="text-white leading-relaxed"
              variants={itemVariants}
            >
              In addition to my development work, I've contributed to academic research in machine learning models for stock prediction and big data analytics for the oil and gas industry, published with Elsevier and Taylor & Francis Group.
            </motion.p>

            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <h3 className="text-xl text-white mb-4">My Values:</h3>
              <motion.ul 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {values.map((value, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle size={18} className="text-mint mt-1 mr-2 shrink-0" />
                    </motion.div>
                    <span className="text-white group-hover:text-mint transition-colors duration-300">{value}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative z-10 overflow-hidden rounded-lg border-2 border-mint shadow-xl max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-navy-lightest aspect-square flex items-center justify-center">
                <motion.img 
                  src="/profile.jpeg" 
                  alt="Jaimin Shah" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.div 
                className="absolute -z-10 top-4 left-4 w-full h-full bg-mint/20 rounded-lg"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

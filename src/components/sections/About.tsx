
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    "Innovative Problem Solving",
    "Continuous Learning",
    "Detail-Oriented Development",
    "Collaborative Approach",
    "Technical Excellence",
  ];

  return (
    <section id="about" className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            About Me
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-light leading-relaxed">
              Hello! I'm Jaimin, a Senior Odoo Developer with 3.3+ years of expertise in end-to-end ERP solutions, AI integrations, and complex module development. I've delivered 15+ cross-functional projects for global clients, automating workflows and reducing operational costs by 30-70%.
            </p>
            
            <p className="text-slate-light leading-relaxed">
              My technical journey spans from developing custom Odoo modules to implementing AI-powered solutions. I'm proficient in Python, JavaScript (ES6+), TypeScript, and SQL, with expertise in frameworks like OWL (Odoo Web Library) and React.js.
            </p>
            
            <p className="text-slate-light leading-relaxed">
              In addition to my development work, I've contributed to academic research in machine learning models for stock prediction and big data analytics for the oil and gas industry, published with Elsevier and Taylor & Francis Group.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl text-slate-lightest mb-4">My Values:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-mint mt-1 mr-2 shrink-0" />
                    <span className="text-slate-light">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-lg border-2 border-mint shadow-xl max-w-md mx-auto">
              <div className="bg-navy-lightest aspect-square flex items-center justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-slate-lightest text-lg font-medium">
                  Profile Image
                </div>
              </div>
              
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-mint/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

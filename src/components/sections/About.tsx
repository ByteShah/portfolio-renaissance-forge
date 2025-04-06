
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    "User-Centered Design Approach",
    "Clean, Maintainable Code",
    "Continuous Learning",
    "Attention to Detail",
    "Collaborative Mindset",
  ];

  return (
    <section id="about" className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-mint mr-2">01.</span> About Me
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-light leading-relaxed">
              Hello! I'm John, a passionate frontend developer with a keen eye for creating beautiful, functional, and user-friendly websites. My journey in web development began in 2018, and I've been hooked ever since.
            </p>
            
            <p className="text-slate-light leading-relaxed">
              I enjoy the process of transforming ideas into reality using creative solutions. I'm always curious about learning new skills, tools, and concepts. In addition to development, I also love design and consider both aesthetics and functionality to be equally important.
            </p>
            
            <p className="text-slate-light leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
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

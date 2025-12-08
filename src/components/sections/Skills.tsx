import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number; // 1-5
  category: "odoo" | "languages" | "frameworks" | "tools" | "data_ml" | "integrations";
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: boolean}>({});

  // Animate skills on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialAnimated: {[key: string]: boolean} = {};
      allSkills.forEach(skill => {
        initialAnimated[skill.name] = true;
      });
      setAnimatedSkills(initialAnimated);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "odoo", name: "Odoo Modules" },
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks" },
    { id: "tools", name: "Tools" },
    { id: "integrations", name: "Integrations" },
    { id: "data_ml", name: "Data & ML" },
  ];

  const allSkills: Skill[] = [
    // Odoo Modules
    { name: "Accounting", level: 5, category: "odoo" },
    { name: "Sales", level: 5, category: "odoo" },
    { name: "eCommerce", level: 5, category: "odoo" },
    { name: "Website", level: 5, category: "odoo" },
    { name: "Inventory", level: 4, category: "odoo" },
    { name: "CRM", level: 4, category: "odoo" },
    { name: "Knowledge", level: 4, category: "odoo" },
    { name: "HRMS", level: 4, category: "odoo" },
    
    // Languages
    { name: "Python", level: 5, category: "languages" },
    { name: "JavaScript (ES6+)", level: 4, category: "languages" },
    { name: "TypeScript", level: 4, category: "languages" },
    { name: "SQL", level: 4, category: "languages" },
    { name: "XML", level: 4, category: "languages" },
    { name: "HTML/CSS", level: 4, category: "languages" },
    
    // Frameworks
    { name: "OWL", level: 5, category: "frameworks" },
    { name: "React.js", level: 4, category: "frameworks" },
    { name: "Flask", level: 3, category: "frameworks" },
    
    // Tools
    { name: "PostgreSQL", level: 4, category: "tools" },
    { name: "Docker", level: 4, category: "tools" },
    { name: "Git", level: 5, category: "tools" },
    { name: "Power BI", level: 4, category: "tools" },
    { name: "Postman", level: 4, category: "tools" },
    
    // Integrations
    { name: "Twilio (VoIP/SMS)", level: 4, category: "integrations" },
    { name: "OHIP API", level: 5, category: "integrations" },
    { name: "OpenAI/Gemini LLMs", level: 4, category: "integrations" },
    { name: "Plaid API", level: 4, category: "integrations" },
    { name: "Stripe API", level: 5, category: "integrations" },

    // Data & ML
    { name: "TensorFlow", level: 4, category: "data_ml" },
    { name: "Pandas", level: 5, category: "data_ml" },
    { name: "Scikit-learn", level: 4, category: "data_ml" },
    { name: "Keras", level: 3, category: "data_ml" },
    { name: "Time-Series Forecasting", level: 4, category: "data_ml" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  const displayedSkills = isExpanded ? filteredSkills : filteredSkills.slice(0, 12);

  return (
    <section id="skills" className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-lightest">
            Skills
          </h2>
        </div>
        
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={cn(
                  "rounded-full transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-violet to-electric text-white border-0 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    : "border-navy-lightest text-slate hover:text-violet hover:border-violet"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={cn(
                  "skill-item bg-navy-light p-3 rounded-md shadow-md flex flex-col sm:flex-row justify-between items-center group transition-all duration-300",
                  hoveredSkill === skill.name ? "bg-navy-lightest shadow-lg shadow-mint/10" : "",
                  "hover:bg-navy-lightest hover:shadow-lg hover:shadow-mint/10"
                )}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  opacity: animatedSkills[skill.name] ? 1 : 0,
                  transform: animatedSkills[skill.name] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }}
              >
                <div className="flex-1 mb-2 sm:mb-0 flex items-center">
                  <span className="text-slate-lightest dark:text-slate-lightest text-navy font-medium group-hover:text-violet transition-colors duration-300">
                    {skill.name}
                  </span>
                  {skill.level === 5 && hoveredSkill === skill.name && (
                    <Sparkles size={14} className="ml-1 text-electric animate-pulse" />
                  )}
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full mx-1 sm:mx-0.5 transition-all duration-300",
                        i < skill.level
                          ? "bg-gradient-to-r from-violet to-electric shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                          : "bg-navy-lightest"
                      )}
                      style={{
                        transform: hoveredSkill === skill.name && i < skill.level
                          ? `scale(${1 + (i * 0.1)})`
                          : 'scale(1)',
                        transitionDelay: `${i * 50}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {filteredSkills.length > 12 && (
            <div className="flex justify-center mt-6">
              <Button
                variant="ghost"
                className="text-violet hover:bg-violet/10 flex items-center"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show Less" : "Show More"}
                {isExpanded ? <ChevronUp className="ml-2" size={16} /> : <ChevronDown className="ml-2" size={16} />}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

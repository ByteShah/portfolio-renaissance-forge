
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number; // 1-5
  category: "odoo" | "languages" | "frameworks" | "tools" | "data_ml";
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "odoo", name: "Odoo Modules" },
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks" },
    { id: "tools", name: "Tools" },
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
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
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
                  "rounded-full",
                  activeCategory === category.id 
                    ? "bg-mint text-navy hover:bg-mint/90" 
                    : "border-navy-lightest text-slate hover:text-mint hover:border-mint"
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
                className="skill-item bg-navy-light p-3 rounded-md shadow-md flex justify-between items-center"
              >
                <div className="flex-1">
                  <span className="text-slate-lightest">{skill.name}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-1.5 h-1.5 rounded-full mx-0.5", 
                        i < skill.level ? "bg-mint" : "bg-navy-lightest"
                      )}
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
                className="text-mint hover:bg-mint/10 flex items-center"
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


import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "design" | "tools";
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "design", name: "Design" },
    { id: "tools", name: "Tools & Others" },
  ];

  const allSkills: Skill[] = [
    // Frontend
    { name: "HTML5", level: 5, category: "frontend" },
    { name: "CSS3", level: 5, category: "frontend" },
    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "React", level: 5, category: "frontend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
    { name: "Redux", level: 4, category: "frontend" },
    { name: "Framer Motion", level: 3, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Express", level: 4, category: "backend" },
    { name: "MongoDB", level: 3, category: "backend" },
    { name: "Firebase", level: 4, category: "backend" },
    { name: "RESTful APIs", level: 4, category: "backend" },
    { name: "GraphQL", level: 3, category: "backend" },
    
    // Design
    { name: "Figma", level: 4, category: "design" },
    { name: "Adobe XD", level: 3, category: "design" },
    { name: "UI/UX", level: 4, category: "design" },
    { name: "Responsive Design", level: 5, category: "design" },
    
    // Tools & Others
    { name: "Git", level: 5, category: "tools" },
    { name: "GitHub", level: 5, category: "tools" },
    { name: "Jest", level: 3, category: "tools" },
    { name: "Webpack", level: 3, category: "tools" },
    { name: "Vite", level: 4, category: "tools" },
    { name: "Agile/Scrum", level: 4, category: "tools" },
    { name: "VS Code", level: 5, category: "tools" },
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
            <span className="text-mint mr-2">02.</span> Skills
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
                className="skill-item"
                style={{ 
                  animationDelay: `${index * 50}ms`, 
                  opacity: 0, 
                  animation: 'fade-in-up 0.5s forwards',
                  animationDelay: `${index * 50}ms`
                }}
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

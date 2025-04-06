import { useState } from "react";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
  category: string[];
}

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "react", name: "React" },
    { id: "nextjs", name: "Next.js" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Fullstack" },
  ];

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and a dark mode toggle.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "",
      github: "https://github.com/johndoe/portfolio",
      demo: "https://johndoe.dev",
      featured: true,
      category: ["react", "frontend"],
    },
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce store owners to track sales, inventory, and customer data with beautiful charts and analytics.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "SWR"],
      image: "",
      github: "https://github.com/johndoe/ecommerce-dashboard",
      demo: "https://dashboard-demo.johndoe.dev",
      featured: true,
      category: ["nextjs", "fullstack"],
    },
    {
      title: "Task Management App",
      description: "A Trello-inspired task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      image: "",
      github: "https://github.com/johndoe/task-management",
      demo: "https://tasks.johndoe.dev",
      featured: true,
      category: ["react", "fullstack"],
    },
    {
      title: "Weather Application",
      description: "A sleek weather app that provides current weather data and forecasts for any location with beautiful visualizations.",
      tags: ["React", "OpenWeather API", "CSS Modules"],
      image: "",
      github: "https://github.com/johndoe/weather-app",
      demo: "https://weather.johndoe.dev",
      featured: false,
      category: ["react", "frontend"],
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog platform with markdown support, comment system, and user authentication.",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth.js"],
      image: "",
      github: "https://github.com/johndoe/blog-platform",
      demo: "https://blog.johndoe.dev",
      featured: false,
      category: ["nextjs", "fullstack"],
    },
    {
      title: "Recipe Finder",
      description: "An application to discover recipes based on available ingredients, dietary restrictions, and cuisine preferences.",
      tags: ["React", "Spoonacular API", "Styled Components"],
      image: "",
      github: "https://github.com/johndoe/recipe-finder",
      demo: "https://recipes.johndoe.dev",
      featured: false,
      category: ["react", "frontend"],
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-mint mr-2">03.</span> Projects
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={cn(
                "rounded-full",
                filter === category.id 
                  ? "bg-mint text-navy hover:bg-mint/90" 
                  : "border-navy-lightest text-slate hover:text-mint hover:border-mint"
              )}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "lg:col-span-7",
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                )}>
                  <div className="relative group aspect-video overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-mint/10 group-hover:bg-transparent transition-all duration-300"></div>
                    <div className="w-full h-full bg-navy flex items-center justify-center text-slate border border-navy-lightest group-hover:border-mint/50 transition-all duration-300">
                      {/* Project image placeholder */}
                      <FolderOpen size={48} className="text-mint opacity-20" />
                    </div>
                  </div>
                </div>
                
                <div className={cn(
                  "lg:col-span-5",
                  index % 2 === 1 ? "lg:order-1 lg:text-right" : "lg:order-2"
                )}>
                  <div className="space-y-4">
                    <p className="text-mint text-sm">Featured Project</p>
                    <h3 className="text-2xl font-bold text-slate-lightest">{project.title}</h3>
                    
                    <div className="p-6 bg-navy rounded-lg shadow-xl">
                      <p className="text-slate-light">{project.description}</p>
                    </div>
                    
                    <div className={cn(
                      "flex flex-wrap gap-3",
                      index % 2 === 1 ? "justify-end" : ""
                    )}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-slate text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className={cn(
                      "flex gap-4",
                      index % 2 === 1 ? "justify-end" : ""
                    )}>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate hover:text-mint transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate hover:text-mint transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Other Projects */}
        <h3 className="text-xl font-bold text-slate-lightest mb-8 text-center">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.title} className="project-card h-full p-6">
              <div className="flex justify-between items-start mb-6">
                <FolderOpen size={40} className="text-mint" />
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate hover:text-mint transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate hover:text-mint transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-lightest mb-3">{project.title}</h3>
              <p className="text-slate-light mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-slate text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

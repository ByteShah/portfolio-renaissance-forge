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
    { id: "odoo", name: "Odoo" },
    { id: "ai", name: "AI/ML" },
    { id: "research", name: "Research" },
    { id: "web", name: "Web Development" },
  ];

  const projects: Project[] = [
    {
      title: "AI-Powered eCommerce Platform",
      description: "Built end-to-end Odoo eCommerce solution with product configurators, multi-vendor support, and payment integrations. Designed responsive website themes improving mobile conversion rates by 25%.",
      tags: ["Odoo", "Python", "OWL", "eCommerce", "RazorPay/Stripe"],
      github: "",
      demo: "",
      featured: true,
      category: ["odoo", "web"],
    },
    {
      title: "AI-Powered Engagement Automation",
      description: "Developed AI chatbot to analyze customer interactions and auto-suggest responses. Integrated appointment scheduling logic to book slots with providers based on availability, reducing manual coordination by 50%.",
      tags: ["Python", "AI", "Calendar Module", "Automation"],
      github: "",
      demo: "",
      featured: true,
      category: ["odoo", "ai"],
    },
    {
      title: "OHIP Insurance Platform",
      description: "Integrated OHIP API for real-time patient verification using medical card numbers. Developed WSDL-based MCEDT integration for insurance payment reconciliation, enabling automated claim tracking and reducing payment delays by 30%.",
      tags: ["Odoo", "API Integration", "WSDL", "XML/EDI", "Accounting"],
      github: "",
      demo: "",
      featured: true,
      category: ["odoo"],
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Built Sales Forecasting Dashboard (Python + OWL) with time-series analysis, boosting inventory planning accuracy by 45%. Integrated with Odoo Sales and Inventory modules for real-time data visualization.",
      tags: ["Python", "OWL", "Time-Series Analysis", "Data Visualization"],
      github: "",
      demo: "",
      featured: false,
      category: ["odoo", "ai"],
    },
    {
      title: "Stock Market Prediction Models",
      description: "Analyzed hybrid ML models (LSTM, CNN, ARIMA) with sentiment analysis, achieving 92% prediction accuracy on Nifty50 data. Published in Elsevier journal (DOI: 10.1016/j.iswa.2022.200111).",
      tags: ["TensorFlow", "LSTM", "CNN", "ARIMA", "Research"],
      github: "",
      demo: "https://doi.org/10.1016/j.iswa.2022.200111",
      featured: false,
      category: ["research", "ai"],
    },
    {
      title: "EMG-Controlled Bionic Arm",
      description: "Achieved 95% gesture recognition accuracy using noise-filtered EMG signals and CNN. Thesis project focused on evaluating and identifying gestures for an EMG-controlled bionic arm using machine learning algorithms.",
      tags: ["TensorFlow", "Signal Processing", "CNN", "Embedded Systems"],
      github: "",
      demo: "",
      featured: false,
      category: ["research", "ai"],
    },
    {
      title: "OWL Analytics Dashboard",
      description: "Designed dynamic sales/contact comparison tools using OWL JavaScript framework and ChartJS, improving client reporting efficiency by 50%. Created custom model visualization and comparison features.",
      tags: ["OWL", "Chart.js", "Odoo", "Analytics"],
      github: "",
      demo: "",
      featured: false,
      category: ["odoo", "web"],
    },
    {
      title: "AI Library Management System",
      description: "Integrated Google Books API + web scraping (BeautifulSoup) to auto-populate 10K+ book records. Built React dashboard with JWT auth, reducing manual data entry by 80%. Hackathon Finalist project.",
      tags: ["React", "Docker", "JWT", "BeautifulSoup", "API Integration"],
      github: "",
      demo: "",
      featured: false,
      category: ["web", "ai"],
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
            Projects
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

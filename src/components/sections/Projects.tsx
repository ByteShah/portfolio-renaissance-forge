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
      title: "Textile Wholesale ERP & B2B Commerce System",
      description: "Built and deployed a production-grade textile ERP system with 17 custom Odoo modules across B2B e-commerce, inventory, order-taking, pricing, agent commissions, analytics, and payments. Implemented customer approval gating, customer-type-based pricing, product visibility rules, watermarked catalog images, textile combo/set builders, CSV inventory imports, barcode-enabled tablet sales flows, inventory transfers, batch commission payouts, license enforcement, small-bill tracking, and editable storefront/homepage management.",
      tags: ["Odoo", "Python", "B2B eCommerce", "ERP", "OWL", "PostgreSQL"],
      image: "/textile.jpg",
      github: "",
      demo: "",
      featured: true,
      category: ["odoo", "web"],
    },
    {
      title: "Line of Credit (LoC) System",
      description: "Designed full Line of Credit platform with Plaid bank verification and Stripe payment workflows. Implemented credit disbursement, automated repayments, payout scheduling, multi-location LOC profiles, and complete statement generation engine with interest & fee calculations.",
      tags: ["Odoo", "Plaid", "Stripe", "Accounting", "API Integration"],
      image: "/ecomm.jpg",
      github: "",
      demo: "",
      featured: true,
      category: ["odoo", "web"],
    },
    {
      title: "Custom OCR System for Odoo",
      description: "Built complete OCR automation engine for vendor bills and customer invoices. Implemented intelligent matching logic for products, taxes, vendors with confidence scoring. Added review workflow for low-confidence data validation.",
      tags: ["Odoo", "OCR", "Python", "Automation", "AI"],
      image: "/chat.jpg",
      github: "",
      demo: "",
      featured: true,
      category: ["odoo", "ai"],
    },
    {
      title: "OHIP Insurance Platform",
      description: "Integrated OHIP API for real-time insurance verification and claim processing. Built MCEDT (WSDL) integration for payment reconciliation. Automated XML/EDI batch claim generation with rule-based validations and pre-diagnosis approval workflow.",
      tags: ["Odoo", "OHIP API", "WSDL", "XML/EDI", "Accounting"],
      image: "/insurance.jpg",
      github: "",
      demo: "",
      featured: true,
      category: ["odoo"],
    },
    {
      title: "Conversational AI Agent for Odoo ERP",
      description: "AI assistant for Odoo databases using natural language queries. Built a natural language interpreter converting queries into ORM-safe operations, implemented role-based access validation aligned with Odoo security rules, enabled AI-driven report generation and workflow automation triggers, and added safeguards against prompt injection and unsafe database execution.",
      tags: ["Odoo", "LLM", "Python", "ORM Security", "NLP", "AI"],
      github: "",
      demo: "",
      featured: false,
      category: ["odoo", "ai"],
    },
    {
      title: "AI Meeting Intelligence & Knowledge Assistant",
      description: "AI meeting assistant to convert discussions into structured and searchable knowledge. Developed recording pipeline with optimized single-channel audio compression, AI summarization for summaries/TODOs/insights, automated mind-map generation from conversation topics, conversational Q&A over transcripts using retrieval-based architecture, and a searchable meeting knowledge base.",
      tags: ["LLM", "Audio Processing", "RAG", "Mind Mapping", "AI", "Vector Search"],
      github: "",
      demo: "",
      featured: false,
      category: ["ai", "web"],
    },
    {
      title: "AI-Powered Real-Time Screen Assistant",
      description: "Real-time AI assistant for screen understanding and contextual voice interaction. Integrated Gemini Vision APIs for live screen analysis, built voice pipeline with speech-to-text and text-to-speech orchestration, implemented session-based memory for task continuity, and designed low-latency streaming for real-time Siri/Copilot-style workflow guidance.",
      tags: ["Gemini Vision", "Voice AI", "STT/TTS", "Streaming", "Python"],
      github: "",
      demo: "",
      featured: false,
      category: ["ai"],
    },
    {
      title: "SaaSKit Automation Framework for OpenClaw",
      description: "Automated SaaS deployment toolkit for OpenClaw infrastructure provisioning. Automated droplet provisioning via DigitalOcean APIs, built container lifecycle automation for image deployment and updates, integrated Telegram bot for remote deployment monitoring and environment control, and designed multi-instance onboarding workflows with environment isolation to reduce manual deployment effort.",
      tags: ["DigitalOcean", "Docker", "Telegram Bot", "Infrastructure-as-Code", "DevOps"],
      github: "",
      demo: "",
      featured: false,
      category: ["web"],
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
    {
      title: "Odoo MCP Integration",
      description: "Integrated Odoo with Claude MCP (Model Context Protocol) for real-time database interaction. Designed syncing pipelines for products, customers, orders, and inventory with retry queues, conflict handling, and async processing.",
      tags: ["Odoo", "Claude MCP", "API", "Python", "Automation"],
      github: "",
      demo: "",
      featured: false,
      category: ["odoo", "ai"],
    },
    {
      title: "Odoo v14 to v19 Migration",
      description: "Migrated multiple custom modules involving accounting, helpdesk, ecommerce, and project workflows. Updated models, rewritten business logic, modernized OWL components and replaced deprecated APIs.",
      tags: ["Odoo", "Migration", "Python", "OWL", "PostgreSQL"],
      github: "",
      demo: "",
      featured: false,
      category: ["odoo"],
    },
    {
      title: "Helpdesk Team Management System",
      description: "Built multi-team helpdesk structure with role-based visibility and controlled access. Implemented automatic ticket assignment based on workload, expertise, and team capacity with consistent routing.",
      tags: ["Odoo", "Helpdesk", "Automation", "Python"],
      github: "",
      demo: "",
      featured: false,
      category: ["odoo"],
    },
    {
      title: "eCommerce Order Approval Engine",
      description: "Developed multi-stage portal order approval workflow with manager validations and real-time notifications. Implemented credit control checks with dynamic feedback and editable portal orders.",
      tags: ["Odoo", "eCommerce", "Workflow", "Python", "OWL"],
      github: "",
      demo: "",
      featured: false,
      category: ["odoo", "web"],
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
                "rounded-full transition-all duration-300",
                filter === category.id
                  ? "bg-gradient-to-r from-violet to-electric text-white border-0 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  : "border-navy-lightest text-slate hover:text-violet hover:border-violet"
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
                  <div className="relative group aspect-video overflow-hidden rounded-xl">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-violet/75 via-blue-900/60 to-electric/65 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="gradient-text font-bold text-xl mb-2">{project.title}</h4>
                            <p className="text-slate-light text-sm line-clamp-2">{project.description}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-navy flex items-center justify-center text-slate border border-navy-lightest group-hover:border-violet/50 transition-all duration-300">
                        <FolderOpen size={48} className="text-violet opacity-20" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={cn(
                  "lg:col-span-5",
                  index % 2 === 1 ? "lg:order-1 lg:text-right" : "lg:order-2"
                )}>
                  <div className="space-y-4">
                    <p className="text-violet text-sm font-medium">Featured Project</p>
                    <h3 className="text-2xl font-bold text-slate-lightest">{project.title}</h3>

                    <div className="p-6 rounded-xl glass-card">
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
                          className="text-slate hover:text-violet transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate hover:text-violet transition-colors"
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
            <div key={project.title} className="project-card h-full p-6 group transition-all duration-300 rounded-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-violet/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FolderOpen size={40} className="text-violet relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-violet transition-colors transform hover:-translate-y-1"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-violet transition-colors transform hover:-translate-y-1"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-lightest mb-3 group-hover:text-violet transition-colors duration-300">{project.title}</h3>
              <p className="text-slate-light mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-slate text-xs bg-navy-lightest/50 px-3 py-1 rounded-full border border-violet/10">
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

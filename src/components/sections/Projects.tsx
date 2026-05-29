import { useState, useRef } from "react";
import { ExternalLink, Github, FolderOpen, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { motion } from "framer-motion";

interface Project { title: string; description: string; tags: string[]; image?: string; github?: string; demo?: string; featured: boolean; category: string[]; }

const projects: Project[] = [
  { title: "Textile Wholesale ERP & B2B Commerce", description: "17-module Odoo ERP with B2B e-commerce, inventory, pricing, agent commissions, barcode tablet sales, watermarked catalogs, and batch payout systems.", tags: ["Odoo", "Python", "B2B", "ERP", "OWL"], image: "/textile.jpg", featured: true, category: ["odoo", "web"] },
  { title: "Email Intelligence SaaS Platform", description: "LLM-powered Gmail pipeline classifying emails into life events. Multi-tier AI scanning, Vercel AI Gateway, AES-256-GCM OAuth storage, full SaaS monetization.", tags: ["Next.js", "LLM", "Supabase", "AI Gateway", "SaaS"], image: "/email.jpg", featured: true, category: ["ai", "web"] },
  { title: "Line of Credit Platform", description: "Full lending lifecycle with Plaid bank verification, Stripe disbursements/repayments, multi-location credit rules, automated statements, and interest calculations.", tags: ["Odoo", "Plaid", "Stripe", "Accounting"], image: "/ecomm.jpg", featured: true, category: ["odoo", "web"] },
  { title: "Custom OCR Engine for Odoo", description: "Automated invoice/bill processing with intelligent field matching, confidence scoring, configurable mapping rules, and human-in-the-loop review workflow.", tags: ["Odoo", "OCR", "Python", "AI"], image: "/chat.jpg", featured: true, category: ["odoo", "ai"] },
  { title: "OHIP Insurance Platform", description: "OHIP API real-time verification, MCEDT/WSDL integration for payment reconciliation, automated XML/EDI batch claim generation with rule-based validations.", tags: ["Odoo", "OHIP API", "XML/EDI"], image: "/insurance.jpg", featured: true, category: ["odoo"] },
  { title: "Conversational AI Agent for Odoo", description: "Natural language interface for Odoo databases with ORM-safe query execution, role-based access validation, and prompt injection safeguards.", tags: ["Odoo", "LLM", "NLP", "Python"], featured: false, category: ["odoo", "ai"] },
  { title: "AI Meeting Intelligence Assistant", description: "Meeting recording pipeline with AI summarization, mind-map generation, conversational Q&A over transcripts, and searchable knowledge base.", tags: ["LLM", "Audio", "RAG", "AI"], featured: false, category: ["ai", "web"] },
  { title: "AI Real-Time Screen Assistant", description: "Live screen analysis via Gemini Vision with voice interaction, session memory, and low-latency streaming for Copilot-style guidance.", tags: ["Gemini Vision", "Voice AI", "Streaming"], featured: false, category: ["ai"] },
  { title: "SaaSKit Automation Framework", description: "DigitalOcean droplet provisioning, Docker container lifecycle, Telegram bot monitoring, multi-instance onboarding with environment isolation.", tags: ["DigitalOcean", "Docker", "Telegram", "DevOps"], featured: false, category: ["web"] },
  { title: "Sales Forecasting Dashboard", description: "Python + OWL time-series dashboard boosting inventory planning accuracy by 45%, integrated with Odoo Sales and Inventory modules.", tags: ["Python", "OWL", "Analytics"], featured: false, category: ["odoo", "ai"] },
  { title: "Stock Market Prediction Models", description: "Hybrid ML models (LSTM, CNN, ARIMA) with sentiment analysis achieving 92% accuracy on Nifty50. Published in Elsevier journal.", tags: ["TensorFlow", "LSTM", "Research"], demo: "https://doi.org/10.1016/j.iswa.2022.200111", featured: false, category: ["research", "ai"] },
  { title: "EMG-Controlled Bionic Arm", description: "95% gesture recognition accuracy using noise-filtered EMG signals and CNN. Thesis project on bionic arm control via machine learning.", tags: ["CNN", "Signal Processing", "Embedded"], featured: false, category: ["research", "ai"] },
  { title: "Odoo MCP Integration", description: "Claude MCP integration for real-time Odoo database interaction with retry queues, conflict handling, and async processing pipelines.", tags: ["Odoo", "Claude MCP", "Python"], featured: false, category: ["odoo", "ai"] },
  { title: "Odoo v14 to v19 Migration", description: "Multi-module migration covering accounting, helpdesk, ecommerce workflows with modernized OWL components and deprecated API replacements.", tags: ["Odoo", "Migration", "OWL"], featured: false, category: ["odoo"] },
];

const categories = [
  { id: "all", name: "All" }, { id: "odoo", name: "Odoo" }, { id: "ai", name: "AI/ML" },
  { id: "research", name: "Research" }, { id: "web", name: "Web" },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = filter === "all" ? projects : projects.filter(p => p.category.includes(filter));
  const featured = filtered.filter(p => p.featured);
  const others = filtered.filter(p => !p.featured);

  useGSAP(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(".other-project-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".other-projects-grid", start: "top 82%" } }
      );
    }, 60);
    return () => clearTimeout(timer);
  }, { dependencies: [filter], scope: sectionRef });

  const cardBorder = { border: "1px solid var(--border-color)", borderRadius: "1rem" };

  return (
    <section id="projects" ref={sectionRef} className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>Projects</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setFilter(cat.id)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={filter === cat.id
                ? { background: "var(--accent)", color: "#F2EDE4" }
                : { background: "var(--surface)", color: "var(--text-secondary)", border: "1px solid var(--border-color)" }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Horizontal scroll — featured */}
        {featured.length > 0 && (
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 gradient-text">Featured Work</p>
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4"
              style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab" }}
              onMouseDown={(e) => {
                const el = e.currentTarget;
                el.style.cursor = "grabbing";
                const startX = e.pageX - el.offsetLeft;
                const scrollLeft = el.scrollLeft;
                const onMove = (ev: MouseEvent) => { el.scrollLeft = scrollLeft - (ev.pageX - el.offsetLeft - startX); };
                const onUp = () => { el.style.cursor = "grab"; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
                window.addEventListener("mousemove", onMove);
                window.addEventListener("mouseup", onUp);
              }}
            >
              {featured.map((project) => (
                <motion.div
                  key={project.title}
                  className="shrink-0 overflow-hidden group"
                  style={{ width: "340px", scrollSnapAlign: "start", ...cardBorder, background: "var(--surface)" }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--surface-2)" }}>
                        <FolderOpen size={40} style={{ color: "var(--accent)", opacity: 0.4 }} />
                      </div>
                    )}
                    {/* Tint on image */}
                    {project.image && (
                      <div className="absolute inset-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-60"
                        style={{ background: "linear-gradient(135deg, rgba(74,94,58,0.4), rgba(46,59,37,0.3))" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-base mb-2 leading-tight" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{ background: "var(--bg)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }} className="hover:text-[var(--accent)] transition-colors"><Github size={16} /></a>}
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }} className="hover:text-[var(--accent)] transition-colors"><ExternalLink size={16} /></a>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-xs mt-3 flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
              <span>←</span> drag to scroll <span>→</span>
            </p>
          </div>
        )}

        {/* Other projects grid */}
        {others.length > 0 && (
          <>
            <h3 className="text-lg font-bold mb-8" style={{ color: "var(--text-primary)" }}>Other Noteworthy Projects</h3>
            <div className="other-projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map(project => (
                <div key={project.title} className="other-project-card project-card p-5 flex flex-col group h-full">
                  <div className="flex justify-between items-start mb-4">
                    <FolderOpen size={32} style={{ color: "var(--accent)", opacity: 0.7 }} className="group-hover:opacity-100 transition-opacity" />
                    <div className="flex gap-3">
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }} className="hover:text-[var(--accent)] transition-colors"><Github size={16} /></a>}
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)" }} className="hover:text-[var(--accent)] transition-colors"><ExternalLink size={16} /></a>}
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-2 flex-shrink-0 transition-colors duration-200 group-hover:text-[var(--accent)]"
                    style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{ background: "var(--surface)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;

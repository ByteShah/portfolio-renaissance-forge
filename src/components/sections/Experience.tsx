import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface JobExperience {
  company: string;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string[];
  metrics?: string[];
  tech: string[];
}

const experiences: JobExperience[] = [
  {
    company: "Yularatech PTY LTD",
    title: "AI Product Engineer",
    date: "Apr 2026 – Present",
    location: "Bangalore",
    type: "Full-time",
    metrics: ["5 AI providers unified", "3 scan cadences", "3-tier SaaS"],
    tech: ["Next.js", "Supabase", "Vercel AI Gateway", "LLM", "OAuth", "AES-256"],
    description: [
      "Built LLM-powered Gmail intelligence pipeline classifying emails into structured life events using Zod-validated outputs.",
      "Designed multi-tier AI scanning with concurrency controls and cron cadences across 5-min, 2-hour, and daily workflows.",
      "Integrated Vercel AI Gateway as unified routing across multiple AI providers with centralized model registry.",
      "Implemented server-side AES-256-GCM token encryption, replacing browser-passphrase E2EE model.",
      "Built complete SaaS monetization: free/plus/pro tiers, scan quotas, AdSense, rewarded-ad credit top-ups.",
      "Architected with Next.js App Router, React Server Components, Supabase RLS, and PKCE-based Google OAuth.",
    ],
  },
  {
    company: "SmartIT-LTD",
    title: "Senior Software Developer",
    date: "Aug 2025 – Mar 2026",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    metrics: ["v14 → v19 migration", "ETL framework", "Claude MCP"],
    tech: ["Odoo", "Python", "OWL", "Claude MCP", "ETL", "PostgreSQL"],
    description: [
      "Developed multi-stage portal order approval workflow with manager validations and real-time notifications.",
      "Implemented credit control checks at backend and portal levels with dynamic feedback engine.",
      "Built multi-team helpdesk with role-based visibility and automatic ticket assignment by workload.",
      "Led migration of custom modules from Odoo v14 to v19, modernizing OWL components and QWeb views.",
      "Designed reusable ETL-style data migration framework (CSV/XML/SQL/API) with validation checkpoints.",
      "Integrated Odoo with Claude MCP for real-time database interaction with retry queues and async processing.",
    ],
  },
  {
    company: "Got2 India",
    title: "Senior Odoo Developer",
    date: "Jan 2024 – Aug 2025",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    metrics: ["OHIP + MCEDT", "Plaid + Stripe LoC", "OCR confidence scoring"],
    tech: ["Odoo", "Python", "Plaid", "Stripe", "OHIP API", "OCR", "GoCardless"],
    description: [
      "Built end-to-end custom eCommerce with product configurators, multi-vendor capability, and payment gateways.",
      "Developed AI module to analyze customer conversations and generate response suggestions with appointment scheduling.",
      "Created OHIP Insurance Platform with real-time verification, MCEDT integration, and automated XML/EDI claims.",
      "Designed Line of Credit system with Plaid bank verification and Stripe payment workflows.",
      "Built custom OCR automation engine for invoices with intelligent matching logic and confidence scoring.",
    ],
  },
  {
    company: "Odoo India PVT LTD",
    title: "Odoo Developer",
    date: "Jan 2022 – Jan 2024",
    location: "Remote",
    type: "Full-time",
    metrics: ["+45% inventory accuracy", "15+ migrations", "8 devs mentored"],
    tech: ["Odoo", "Python", "OWL", "Chart.js", "Tally API", "PostgreSQL"],
    description: [
      "Built Sales Forecasting Dashboard (Python + OWL) with time-series analysis, boosting inventory planning by 45%.",
      "Developed Stock Traceability Dashboard reducing discrepancies by 60% via real-time tracking.",
      "Led 15+ Tally-to-Odoo transitions with custom API development for HRMS/logistics integrations.",
      "Created collaborative drawing app (OWL + Odoo Knowledge) with attachment-based data storage.",
      "Mentored 8 junior developers and conducted 50+ technical interviews.",
    ],
  },
  {
    company: "Level.ai",
    title: "AI Research Associate",
    date: "Mar 2021 – Jan 2022",
    location: "Remote",
    type: "Contract",
    metrics: ["95% EMG accuracy", "Published Elsevier", "80% less data entry"],
    tech: ["TensorFlow", "LSTM", "CNN", "Python", "React", "JWT"],
    description: [
      "Developed ML models for stock prediction using LSTM and CNN architectures with sentiment analysis.",
      "Created AI-powered library management system auto-populating 10K+ records via Google Books API.",
      "Built React dashboard with JWT authentication reducing manual data entry by 80%.",
      "Implemented noise-filtered EMG signal processing for gesture recognition with 95% accuracy.",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  useGSAP(() => {
    // Draw the vertical line on scroll
    if (lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }

    // Slide-in entrance per card
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const isLeft = i % 2 === 0;
      gsap.from(el, {
        opacity: 0,
        x: isLeft ? -50 : 50,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    // Open card when it enters viewport — never auto-close.
    // Manual click still toggles individual cards.
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => setExpanded(i),
        onEnterBack: () => setExpanded(i),
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="numbered-heading mb-16">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
            Experience
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, #4A5E3A 0%, #7A9063 100%)",
              transformOrigin: "top center",
            }}
          />
          <div
            className="md:hidden absolute left-4 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #4A5E3A, #7A9063)" }}
          />

          <div className="space-y-14">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isOpen = expanded === index;

              return (
                <div
                  key={exp.company}
                  ref={el => { itemRefs.current[index] = el; }}
                  className={cn(
                    "relative flex items-start gap-6 md:gap-0",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Card */}
                  <motion.div
                    className={cn("w-full md:w-[46%]", isLeft ? "md:mr-auto" : "md:ml-auto")}
                    animate={{ scale: isOpen ? 1.01 : 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      background: isOpen ? "var(--bg)" : "var(--surface)",
                      border: `1px solid ${isOpen ? "rgba(74,94,58,0.35)" : "var(--border-color)"}`,
                      borderRadius: "1rem",
                      borderLeft: `3px solid ${isOpen ? "var(--accent)" : "rgba(74,94,58,0.3)"}`,
                      transition: "background 0.3s, border-color 0.3s",
                    }}
                  >
                    {/* Header — clickable to toggle manually too */}
                    <button
                      className="w-full text-left p-5 flex items-start justify-between gap-3"
                      onClick={() => setExpanded(isOpen ? null : index)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="gradient-text text-xs font-bold">{exp.company}</span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "var(--surface)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border-color)",
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="font-bold text-base leading-tight" style={{ color: "var(--text-primary)" }}>
                          {exp.title}
                        </h3>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                          {exp.date} · {exp.location}
                        </p>
                      </div>
                      <motion.span
                        className="shrink-0 text-lg leading-none font-light"
                        style={{ color: "var(--accent)" }}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        +
                      </motion.span>
                    </button>

                    {/* Metrics */}
                    {exp.metrics && (
                      <div className="flex flex-wrap gap-2 px-5 pb-3">
                        {exp.metrics.map(m => (
                          <span
                            key={m}
                            className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: "rgba(74,94,58,0.1)", color: "var(--accent)" }}
                          >
                            ↑ {m}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 px-5 pb-4">
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{
                            background: "var(--surface)",
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border-color)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expandable bullets — auto-driven by scroll OR manual click */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="bullets"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <ul
                            className="px-5 pb-5 space-y-2 border-t"
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <div className="pt-3" />
                            {exp.description.map((point, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                <span className="shrink-0 mt-0.5 font-bold" style={{ color: "var(--accent)" }}>
                                  ›
                                </span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Center dot — glows when active */}
                  <motion.div
                    className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-3 h-3 rounded-full border-2"
                    animate={{
                      scale: isOpen ? 1.5 : 1,
                      boxShadow: isOpen ? "0 0 12px rgba(74,94,58,0.5)" : "0 0 0px rgba(74,94,58,0)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ borderColor: "var(--accent)", background: isOpen ? "var(--accent)" : "var(--bg)" }}
                  />
                  {/* Mobile dot */}
                  <div
                    className="md:hidden shrink-0 w-3 h-3 rounded-full border-2 mt-6"
                    style={{
                      borderColor: "var(--accent)",
                      background: isOpen ? "var(--accent)" : "var(--bg)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

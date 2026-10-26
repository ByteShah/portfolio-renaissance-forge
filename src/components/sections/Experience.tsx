import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

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
    company: "Independent",
    title: "Techno-Functional Consultant, Developer & AI Product Owner",
    date: "Present",
    location: "Ahmedabad · clients in India, UK & North America",
    type: "Consulting & Products",
    metrics: ["48-module textile ERP", "40+ module client ERP", "Fabtoryx + LOOM products"],
    tech: ["Odoo 19", "Python", "OWL", "React Native", "React", "Claude"],
    description: [
      "Own the CC Textile suite and the Fabtoryx app end to end. Together they run a multi-branch textile wholesaler's sales, stock, agents, books, B2B shop and WhatsApp.",
      "Built and maintain LOOM Storefront, an open-source headless shop with an Odoo 19 connector for catalogue, checkout, payments and orders.",
      "Delivered a 40+ module Odoo 19 ERP for a North American manufacturer: CRM attribution, quoting with US sales tax, production, helpdesk costing and RFID attendance.",
      "Ran functional consulting for a UK multi-company rollout: implementation plan, chart of accounts, UK VAT, 3-step warehouse, inter-company flows and user guide.",
      "Wrote the gap analyses, operating models, rollout sprints, test guides and user guides that come with each delivery.",
      "Use AI agents across delivery (specs, code review, data setup), and let clients configure products like the Fabtoryx home screen through Claude.",
    ],
  },
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
      "Led 15+ Tally-to-Odoo transitions end to end: requirement workshops, data migration, and custom APIs for HRMS and logistics.",
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
  // Phones show two bullets per role until expanded; md+ shows everything.
  const [openIdx, setOpenIdx] = useState<Set<number>>(new Set());
  const toggle = (i: number) => setOpenIdx((prev) => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });

  return (
  <section id="experience" className="section-padding" style={{ background: "var(--bg)" }}>
    <div className="container mx-auto">
      <div className="numbered-heading mb-16">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          Experience
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: "linear-gradient(180deg, #4A5E3A 0%, #7A9063 100%)" }} />
        <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, #4A5E3A, #7A9063)" }} />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={exp.company}
                className={cn("relative flex items-start gap-5 md:gap-0", isLeft ? "md:flex-row" : "md:flex-row-reverse")}>
                {/* Mobile dot */}
                <div className="md:hidden shrink-0 w-3 h-3 rounded-full border-2 mt-6 relative z-10"
                  style={{ borderColor: "var(--accent)", background: index === 0 ? "var(--accent)" : "var(--bg)" }} />

                <Reveal className={cn("w-full md:w-[46%]", isLeft ? "md:mr-auto" : "md:ml-auto")}>
                  <div style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                    borderLeft: "3px solid var(--accent)",
                    borderRadius: "1rem",
                  }}>
                    <div className="p-5 pb-3">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className="gradient-text text-xs font-bold">{exp.company}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: "var(--bg)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-bold text-base leading-tight" style={{ color: "var(--text-primary)" }}>{exp.title}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{exp.date} · {exp.location}</p>
                    </div>

                    {exp.metrics && (
                      <div className="flex flex-wrap gap-2 px-5 pb-3">
                        {exp.metrics.map((m) => (
                          <span key={m} className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: "rgba(74,94,58,0.1)", color: "var(--accent)" }}>
                            {m}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="px-5 py-4 space-y-2 border-t" style={{ borderColor: "var(--border-color)" }}>
                      {exp.description.map((point, i) => (
                        <li key={point} className={cn("items-start gap-2 text-sm", i < 2 || openIdx.has(index) ? "flex" : "hidden md:flex")}
                          style={{ color: "var(--text-secondary)" }}>
                          <span className="shrink-0 font-bold" style={{ color: "var(--accent)" }}>›</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {exp.description.length > 2 && (
                      <button onClick={() => toggle(index)} aria-expanded={openIdx.has(index)}
                        className="md:hidden mx-5 -mt-2 mb-4 inline-flex items-center gap-1 text-sm font-semibold"
                        style={{ color: "var(--accent)" }}>
                        {openIdx.has(index) ? "Show less" : `Show ${exp.description.length - 2} more`}
                        <ChevronDown size={14} className={openIdx.has(index) ? "rotate-180 transition-transform" : "transition-transform"} />
                      </button>
                    )}

                    <div className="flex flex-wrap gap-1.5 px-5 pb-5">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{ background: "var(--bg)", color: "var(--text-secondary)", border: "1px solid var(--border-color)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10 w-3 h-3 rounded-full border-2"
                  style={{ borderColor: "var(--accent)", background: index === 0 ? "var(--accent)" : "var(--bg)" }} />
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

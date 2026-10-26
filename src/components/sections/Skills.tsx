import { Reveal } from "@/components/ui/Reveal";

interface Group { title: string; note: string; skills: string[]; }

const groups: Group[] = [
  {
    title: "Functional",
    note: "Business process & Odoo configuration",
    skills: [
      "Requirement Gathering", "Fit-Gap Analysis", "Process Mapping", "Accounting & CoA", "UK VAT · Indian GST · US Sales Tax",
      "Multi-company & Inter-company", "Inventory & 3-step Warehouse", "Purchase & Landed Costs", "Sales & B2B Pricing",
      "CRM & Marketing Attribution", "Helpdesk", "Manufacturing", "HR & Attendance", "Data Migration", "UAT & Training", "User Guides",
    ],
  },
  {
    title: "Technical",
    note: "Odoo, web & mobile",
    skills: [
      "Odoo 14–19", "Python", "OWL", "QWeb", "PostgreSQL", "JSON-RPC / REST APIs", "TypeScript", "React", "React Native / Expo",
      "Next.js", "Supabase", "Docker", "ESP32 / RFID", "Git", "Odoo Migrations",
    ],
  },
  {
    title: "Integrations",
    note: "Systems I've wired into Odoo",
    skills: [
      "WhatsApp (Interakt)", "Razorpay", "Stripe", "Plaid", "Avalara", "HubSpot", "Mailchimp", "Calendly", "QuickBooks",
      "Net2Phone", "Google Analytics 4", "Google Ads", "GTM", "WooCommerce", "OHIP / MCEDT", "Tally",
    ],
  },
  {
    title: "AI & Product",
    note: "Owning what ships",
    skills: [
      "Product Ownership", "Roadmaps & Specs", "Acceptance Criteria", "LLM Pipelines", "Claude / MCP", "AI Agents in Delivery",
      "Vercel AI Gateway", "OpenAI / Gemini", "RAG", "OCR", "TensorFlow", "Time-Series ML", "SaaS Monetisation",
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding" style={{ background: "var(--surface)" }}>
    <div className="container mx-auto">
      <div className="numbered-heading mb-12">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 80} className="p-6 rounded-2xl" style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}>
            <div className="flex items-baseline justify-between gap-3 mb-4">
              <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>{g.title}</h3>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{g.note}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span key={s} className="text-[13px] px-3 py-1.5 rounded-full transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  style={{ background: "var(--surface)", border: "1px solid var(--border-color)", color: "var(--text-secondary)" }}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

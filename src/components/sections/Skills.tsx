import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface Skill { name: string; level: 1 | 2 | 3 | 4 | 5; emoji?: string; }

// Row 1 — scrolls left
const row1: Skill[] = [
  { name: "Python", level: 5, emoji: "🐍" },
  { name: "Odoo eCommerce", level: 5 },
  { name: "Next.js", level: 4 },
  { name: "Accounting", level: 5 },
  { name: "TypeScript", level: 4 },
  { name: "Claude MCP", level: 5, emoji: "🤖" },
  { name: "OWL Framework", level: 5 },
  { name: "Stripe API", level: 5 },
  { name: "React.js", level: 4 },
  { name: "PostgreSQL", level: 4 },
  { name: "OHIP API", level: 5 },
  { name: "Supabase", level: 4 },
  { name: "JavaScript ES6+", level: 4 },
  { name: "Odoo Sales", level: 5 },
  { name: "Git", level: 5 },
  { name: "Vercel AI Gateway", level: 4, emoji: "⚡" },
];

// Row 2 — scrolls right
const row2: Skill[] = [
  { name: "LLM Pipelines", level: 5, emoji: "🧠" },
  { name: "Docker", level: 4 },
  { name: "Plaid API", level: 4 },
  { name: "Odoo Inventory", level: 4 },
  { name: "TensorFlow", level: 4 },
  { name: "React Native", level: 3 },
  { name: "DigitalOcean", level: 4 },
  { name: "Odoo HRMS", level: 4 },
  { name: "Pandas", level: 5 },
  { name: "Flask", level: 3 },
  { name: "Twilio VoIP", level: 4 },
  { name: "OpenAI / Gemini", level: 4, emoji: "✨" },
  { name: "SQL", level: 4 },
  { name: "Scikit-learn", level: 4 },
  { name: "CRM", level: 4 },
  { name: "Time-Series ML", level: 4, emoji: "📈" },
];

// Row 3 — scrolls left (slower)
const row3: Skill[] = [
  { name: "B2B Commerce", level: 5 },
  { name: "AES-256 Encryption", level: 4 },
  { name: "ETL Frameworks", level: 4 },
  { name: "OCR Automation", level: 5 },
  { name: "Server Actions", level: 4 },
  { name: "Odoo CRM", level: 4 },
  { name: "GSAP Animations", level: 4 },
  { name: "OAuth / PKCE", level: 4 },
  { name: "XML / EDI", level: 4 },
  { name: "SaaS Monetisation", level: 5, emoji: "💰" },
  { name: "Postman", level: 4 },
  { name: "Odoo Website", level: 5 },
  { name: "HTML / CSS", level: 4 },
  { name: "Keras", level: 3 },
  { name: "RLS Policies", level: 4 },
  { name: "Agent Pipelines", level: 5, emoji: "🤖" },
];

const pillStyle = (level: number): React.CSSProperties => ({
  background: level === 5 ? "rgba(74,94,58,0.12)" : "var(--surface)",
  border: `1px solid ${level === 5 ? "rgba(74,94,58,0.3)" : "var(--border-color)"}`,
  color: level === 5 ? "var(--accent)" : "var(--text-secondary)",
  fontWeight: level >= 4 ? 600 : 400,
  padding: "8px 18px",
  borderRadius: "9999px",
  fontSize: "13px",
  whiteSpace: "nowrap" as const,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  gap: "6px",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "default",
});

const maskStyle: React.CSSProperties = {
  maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
  WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
  overflow: "hidden",
};

interface TickerRowProps {
  skills: Skill[];
  direction: "left" | "right";
  duration?: number;
}

const TickerRow = ({ skills, direction, duration = 30 }: TickerRowProps) => {
  const doubled = [...skills, ...skills];

  return (
    <div style={maskStyle}>
      <div
        className="flex gap-3"
        style={{
          width: "max-content",
          animation: `ticker-${direction} ${duration}s linear infinite`,
          willChange: "transform",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            style={pillStyle(skill.level)}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(74,94,58,0.15)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {skill.emoji && <span style={{ fontSize: "14px" }}>{skill.emoji}</span>}
            {skill.name}
            {skill.level === 5 && (
              <span style={{ color: "var(--accent)", fontSize: "10px", opacity: 0.7 }}>★</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".skills-header", {
      opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });
    gsap.from(".ticker-row", {
      opacity: 0, y: 20, stagger: 0.15, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} className="section-padding overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="container mx-auto mb-12 skills-header">
        <div className="numbered-heading mb-2">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>Skills</h2>
        </div>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Hover any row to pause · <span style={{ color: "var(--accent)" }}>★</span> = expert level
        </p>
      </div>

      {/* Full-bleed ticker rows (break out of container) */}
      <div className="flex flex-col gap-4 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 ticker-row">
        <TickerRow skills={row1} direction="left" duration={35} />
      </div>
      <div className="flex flex-col gap-4 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 mt-4 ticker-row">
        <TickerRow skills={row2} direction="right" duration={28} />
      </div>
      <div className="flex flex-col gap-4 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 mt-4 ticker-row">
        <TickerRow skills={row3} direction="left" duration={42} />
      </div>
    </section>
  );
};

export default Skills;

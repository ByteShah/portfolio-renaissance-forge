import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { motion } from "framer-motion";

interface Achievement {
  icon: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const achievements: Achievement[] = [
  {
    icon: "📄",
    category: "Research",
    title: "Published — Elsevier Journal",
    subtitle: "EMG Gesture Recognition · 2022",
    description:
      "Co-authored a peer-reviewed paper on noise-filtered EMG signal processing for hand gesture recognition achieving 95% classification accuracy using CNN architectures.",
    tags: ["TensorFlow", "CNN", "Signal Processing", "Python"],
  },
  {
    icon: "🤖",
    category: "AI Engineering",
    title: "LLM Email Intelligence Pipeline",
    subtitle: "Zod-validated structured outputs · 2026",
    description:
      "Independently architected a production Gmail intelligence system that classifies emails into structured life events using multi-provider LLM routing via Vercel AI Gateway.",
    tags: ["LLM", "Zod", "Next.js", "Vercel AI Gateway"],
  },
  {
    icon: "🏥",
    category: "Healthcare Tech",
    title: "OHIP Insurance Automation Platform",
    subtitle: "MCEDT Integration · Ontario, Canada",
    description:
      "Built a real-time healthcare insurance platform with OHIP verification, automated XML/EDI claims processing, and MCEDT integration — handling end-to-end medical billing workflows.",
    tags: ["OHIP API", "MCEDT", "XML/EDI", "Python"],
  },
  {
    icon: "🔒",
    category: "Security",
    title: "Server-side AES-256-GCM Token Encryption",
    subtitle: "Replacing browser-side E2EE model",
    description:
      "Redesigned a SaaS auth model by migrating from browser-passphrase E2EE to server-side AES-256-GCM encryption — eliminating a class of client-side key exposure vulnerabilities.",
    tags: ["AES-256", "PKCE", "OAuth", "Supabase RLS"],
  },
  {
    icon: "📈",
    category: "Data & ML",
    title: "Sales Forecasting Dashboard",
    subtitle: "+45% inventory planning accuracy · Odoo India",
    description:
      "Built a Python + OWL time-series forecasting dashboard reducing inventory discrepancies by 60% and improving planning accuracy by 45% across multi-warehouse operations.",
    tags: ["Python", "OWL", "Chart.js", "Time-Series ML"],
  },
  {
    icon: "👨‍💻",
    category: "Mentorship",
    title: "Mentored 8 Junior Developers",
    subtitle: "50+ technical interviews conducted",
    description:
      "Led onboarding, code reviews, and growth paths for 8 junior developers; conducted 50+ technical interviews — building a scalable hiring and knowledge-transfer culture.",
    tags: ["Leadership", "Code Review", "Technical Interviewing"],
  },
];

const categoryColor: Record<string, string> = {
  Research: "rgba(99,102,241,0.12)",
  "AI Engineering": "rgba(74,94,58,0.12)",
  "Healthcare Tech": "rgba(20,184,166,0.12)",
  Security: "rgba(239,68,68,0.12)",
  "Data & ML": "rgba(234,179,8,0.12)",
  Mentorship: "rgba(249,115,22,0.12)",
};

const categoryText: Record<string, string> = {
  Research: "#818cf8",
  "AI Engineering": "var(--accent)",
  "Healthcare Tech": "#2dd4bf",
  Security: "#f87171",
  "Data & ML": "#facc15",
  Mentorship: "#fb923c",
};

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });
    }

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.55,
        ease: "power3.out",
        delay: (i % 3) * 0.08,
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="achievements" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div ref={headingRef} className="numbered-heading mb-16">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              ref={el => { cardRefs.current[i] = el; }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex flex-col p-5 rounded-2xl"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                borderTop: `3px solid ${categoryText[item.category]}`,
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl leading-none">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: categoryColor[item.category],
                      color: categoryText[item.category],
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="font-bold text-sm mt-1.5 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "var(--bg)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

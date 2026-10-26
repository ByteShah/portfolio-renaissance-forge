import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Techno-Functional Consultant", "Odoo Developer", "AI Product Owner"];

// The three hats — shown as a compact strip under the intro.
const hats = [
  { label: "Consultant", text: "Requirements, gap analysis, process design, rollout" },
  { label: "Developer", text: "Odoo 14–19, Python, OWL, React Native, APIs" },
  { label: "Product Owner", text: "Roadmaps, specs and AI products people use daily" },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 2800);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/ByteShah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/jaiminshah198", label: "LinkedIn" },
    { icon: Mail, href: "mailto:s1.jaimin@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden"
      style={{ background: "var(--bg)" }}>
      {/* Soft static backdrop — replaces the WebGL scene */}
      <div aria-hidden className="absolute inset-0 -z-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(74,94,58,0.10), transparent 70%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(122,144,99,0.08), transparent 70%)",
      }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="flex-1 space-y-6 hero-in">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(74,94,58,0.1)", border: "1px solid rgba(74,94,58,0.25)", color: "var(--accent)" }}
            >
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent)" }} />
              Independent consultant · Open to consulting &amp; product roles
            </div>

            <p className="text-sm tracking-widest uppercase font-medium" style={{ color: "var(--accent)" }}>
              Hi, my name is
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight gradient-text">
              Jaimin Shah.
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl font-medium h-10 flex items-center"
              style={{ color: "var(--text-secondary)" }}>
              <AnimatePresence mode="wait">
                <motion.span key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I sit between the business and the code. I map how a company actually works, configure Odoo
              around it, write the modules it is missing, and own the apps and AI products built on top —
              from the first workshop to go-live and the support after.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="glow-button font-semibold px-7 py-3 rounded-xl flex items-center gap-2 group"
                onClick={() => scrollToId("products")}
              >
                See what I've built
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="px-7 py-3 rounded-xl font-semibold border transition-colors duration-200 hover:bg-[var(--surface)]"
                style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}
                onClick={() => scrollToId("contact")}
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-5 pt-1">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} aria-label={link.label}
                  target="_blank" rel="noopener noreferrer"
                  className="transition-all duration-200 hover:-translate-y-0.5 text-[var(--text-muted)] hover:text-[var(--accent)]">
                  <link.icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-1 flex justify-center hero-in" style={{ animationDelay: "150ms" }}>
            <div className="relative w-56 h-56 md:w-80 md:h-80">
              <div style={{
                position: "absolute", inset: "-20px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(74,94,58,0.12) 0%, transparent 70%)",
              }} />
              <div className="w-full h-full rounded-full p-[2px] relative"
                style={{ background: "linear-gradient(135deg, #4A5E3A, #7A9063, #2E3B25)" }}>
                <div className="w-full h-full rounded-full overflow-hidden" style={{ background: "var(--surface)" }}>
                  <img src="/profile.webp" alt="Jaimin Shah" width={320} height={320}
                    fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute rounded-full border border-dashed animate-spin-slow"
                style={{ inset: "-12px", borderColor: "rgba(74,94,58,0.25)", animationDuration: "40s" }} />
            </div>
          </div>
        </div>

        {/* Three hats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-14 hero-in" style={{ animationDelay: "250ms" }}>
          {hats.map((h) => (
            <div key={h.label} className="glass-card px-5 py-4">
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--accent)" }}>{h.label}</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

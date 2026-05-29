import { useState, useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { HeroScene } from "./HeroScene";

const roles = ["AI Product Engineer", "Senior Odoo Developer", "Full-Stack Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 2800);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const words = headlineRef.current?.querySelectorAll(".hero-word");
    if (!words?.length) return;
    gsap.fromTo(words,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.9, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    btn.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.25}px, ${(e.clientY - rect.top - rect.height / 2) * 0.25}px)`;
  };
  const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ByteShah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/jaiminshah198", label: "LinkedIn" },
    { icon: Mail, href: "mailto:s1.jaimin@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden"
      style={{ background: "var(--bg)" }}>
      <HeroScene />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          {/* Text */}
          <div className="flex-1 space-y-6">
            {/* Availability badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(74,94,58,0.1)",
                border: "1px solid rgba(74,94,58,0.25)",
                color: "var(--accent)",
              }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "var(--accent)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "var(--accent)" }} />
              </span>
              Available for new projects
            </motion.div>

            <motion.p
              className="text-sm tracking-widest uppercase font-medium"
              style={{ color: "var(--accent)" }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              Hi, my name is
            </motion.p>

            <h1 ref={headlineRef} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              {"Jaimin Shah.".split(" ").map((word, i) => (
                <span key={i} className="hero-word inline-block mr-4 gradient-text">
                  {word}
                </span>
              ))}
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

            <motion.p className="max-w-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              5+ years building production-grade ERP systems, AI pipelines, and B2B platforms.
              Delivered 30+ cross-functional projects automating workflows and building intelligent systems that scale.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <button
                className="glow-button font-semibold px-7 py-3 rounded-xl flex items-center gap-2 group"
                style={{ transition: "transform 0.2s ease" }}
                onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
                }}
              >
                Contact Me
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="px-7 py-3 rounded-xl font-semibold border transition-all duration-200"
                style={{ borderColor: "var(--border-color)", color: "var(--text-primary)", background: "transparent", transition: "transform 0.2s ease, all 0.2s" }}
                onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
                }}
              >
                View Work
              </button>
            </motion.div>

            <motion.div className="flex items-center gap-5 pt-1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              {socialLinks.map((link) => (
                <motion.a key={link.label} href={link.href} aria-label={link.label}
                  target="_blank" rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: "var(--text-muted)", transition: "transform 0.2s ease, color 0.2s" }}
                  onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                  whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={19} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}>
            <div className="relative w-56 h-56 md:w-80 md:h-80">
              {/* Subtle olive glow behind */}
              <div style={{
                position: "absolute", inset: "-20px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(74,94,58,0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }} />
              {/* Gradient border */}
              <div className="w-full h-full rounded-full p-[2px] relative"
                style={{ background: "linear-gradient(135deg, #4A5E3A, #7A9063, #2E3B25)" }}>
                <motion.div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                  style={{ background: "var(--surface)" }}
                  whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                  <img src="/profile.png" alt="Jaimin Shah" className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = "flex";
                    }} />
                  <div className="gradient-text font-bold text-5xl md:text-7xl hidden items-center justify-center w-full h-full">JS</div>
                </motion.div>
              </div>
              {/* Rotating ring */}
              <motion.div className="absolute rounded-full border border-dashed"
                style={{ inset: "-12px", borderColor: "rgba(74,94,58,0.25)" }}
                animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute rounded-full border border-dotted"
                style={{ inset: "-24px", borderColor: "rgba(74,94,58,0.12)" }}
                animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Scroll</span>
        <ChevronDown size={14} style={{ color: "var(--text-muted)" }} />
      </motion.div>
    </section>
  );
};

export default Hero;

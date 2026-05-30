import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { MarqueeText } from "@/components/ui/MarqueeText";
import { motion } from "framer-motion";

// Live IST clock
const useClock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
      }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const services = [
  { title: "Odoo ERP",     desc: "Custom modules, migrations v14–v19, integrations", count: "120+ modules" },
  { title: "AI Pipelines", desc: "LLM apps, email intelligence, agent systems",        count: "5+ systems"  },
  { title: "B2B Commerce", desc: "Gated eCommerce, pricing rules, approval flows",     count: "10+ clients" },
  { title: "Full-Stack",   desc: "Next.js, React, Python, SaaS platforms",             count: "30+ projects"},
];

// Floating keyword positions — fixed so they don't shift on re-render
const floatingWords = [
  { word: "Python",    top: "12%",  left: "8%",   duration: 6,  delay: 0   },
  { word: "Next.js",  top: "70%",  left: "12%",  duration: 7,  delay: 1.2 },
  { word: "OWL",      top: "30%",  left: "75%",  duration: 5,  delay: 0.5 },
  { word: "LLM",      top: "80%",  left: "68%",  duration: 8,  delay: 2   },
  { word: "Odoo",     top: "50%",  left: "40%",  duration: 6.5,delay: 1.5 },
  { word: "React",    top: "18%",  left: "55%",  duration: 7.5,delay: 0.8 },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);
  const modulesRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLSpanElement>(null);
  const time = useClock();
  const [activeService, setActiveService] = useState(0);

  // Auto-cycle through services
  useEffect(() => {
    const id = setInterval(() => setActiveService(p => (p + 1) % services.length), 2200);
    return () => clearInterval(id);
  }, []);

  const values = ["Innovative Problem Solving", "Continuous Learning", "Detail-Oriented Development", "Collaborative Approach", "Technical Excellence"];

  useGSAP(() => {
    gsap.fromTo(".bento-cell",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.09, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" } }
    );
    const counters = [{ ref: yearsRef, end: 8 }, { ref: modulesRef, end: 120 }, { ref: projectsRef, end: 30 }];
    counters.forEach(({ ref, end }) => {
      if (!ref.current) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end, duration: 2, ease: "power2.out", snap: { val: 1 },
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
        onUpdate() { if (ref.current) ref.current.textContent = String(Math.round(obj.val)); },
      });
    });
  }, { scope: sectionRef });

  const card = { background: "var(--surface)", border: "1px solid var(--border-color)", borderRadius: "1rem" };
  const cardBg = { background: "var(--bg)", border: "1px solid var(--border-color)", borderRadius: "1rem" };

  return (
    <>
      <section id="about" ref={sectionRef} className="section-padding">
        <div className="container mx-auto">
          <div className="numbered-heading mb-12">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">

            {/* Bio — 3 cols */}
            <div className="bento-cell p-8 lg:col-span-3" style={card}>
              <h3 className="text-xs font-semibold mb-5 tracking-widest uppercase gradient-text">Who I Am</h3>
              <p className="leading-relaxed mb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                I'm Jaimin — an AI Product Engineer & Senior Odoo Developer building
                production-grade ERP systems, AI pipelines, and B2B platforms for global clients.
              </p>
              <p className="leading-relaxed mb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                My stack spans Python, TypeScript, Next.js, React, and Odoo (v14–v19). I ship full systems —
                from LLM-powered email intelligence to 120+ custom Odoo modules.
              </p>
              <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
                Also published ML research in stock prediction with Elsevier and Taylor & Francis.
              </p>
            </div>

            {/* What I Build — 2 cols */}
            <div className="bento-cell p-6 lg:col-span-2 relative overflow-hidden" style={card}>
              {/* Floating background keywords */}
              {floatingWords.map(({ word, top, left, duration, delay }) => (
                <motion.span
                  key={word}
                  className="absolute text-[10px] font-mono font-semibold tracking-wider pointer-events-none select-none"
                  style={{ top, left, color: "var(--accent)", opacity: 0.08 }}
                  animate={{ y: [0, -10, 0], opacity: [0.08, 0.15, 0.08] }}
                  transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
                >
                  {word}
                </motion.span>
              ))}

              <h3 className="text-xs font-semibold mb-4 tracking-widest uppercase gradient-text relative z-10">What I Build</h3>

              <div className="space-y-2 relative z-10">
                {services.map((s, i) => {
                  const isActive = activeService === i;
                  return (
                    <motion.div
                      key={s.title}
                      className="relative flex items-start gap-3 p-3 rounded-xl overflow-hidden cursor-default"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
                      animate={{
                        background: isActive ? "rgba(74,94,58,0.07)" : "var(--bg)",
                        x: isActive ? 4 : 0,
                      }}
                      whileHover={{ x: 5 }}
                    >
                      {/* Auto-animated left border */}
                      <motion.div
                        className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full origin-top"
                        style={{ background: "var(--accent)" }}
                        animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />

                      {/* Dot with continuous ripple when active */}
                      <div className="relative shrink-0 mt-1.5 w-2 h-2">
                        <motion.span
                          className="block w-2 h-2 rounded-full"
                          style={{ background: "var(--accent)" }}
                          animate={{ scale: isActive ? [1, 1.3, 1] : 1 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 rounded-full"
                            style={{ border: "1.5px solid var(--accent)" }}
                            initial={{ scale: 1, opacity: 0.7 }}
                            animate={{ scale: 3.5, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatDelay: 0.4 }}
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <motion.p
                            className="text-xs font-bold"
                            animate={{ color: isActive ? "var(--accent)" : "var(--text-primary)" }}
                            transition={{ duration: 0.3 }}
                          >
                            {s.title}
                          </motion.p>
                          <motion.span
                            className="text-xs font-semibold shrink-0"
                            style={{ color: "var(--accent)" }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 8 }}
                            transition={{ duration: 0.25 }}
                          >
                            {s.count}
                          </motion.span>
                        </div>
                        <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Auto-progress bar at bottom */}
              <div className="relative z-10 mt-4 h-px overflow-hidden rounded-full" style={{ background: "var(--border-color)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "var(--accent)" }}
                  animate={{ width: `${((activeService + 1) / services.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Status card — 1 col */}
            <div className="bento-cell p-6 lg:col-span-1 flex flex-col gap-4" style={card}>
              <h3 className="text-xs font-semibold tracking-widest uppercase gradient-text">Status</h3>

              {/* Availability */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: "#4A5E3A" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#4A5E3A" }} />
                </span>
                <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>Available</span>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Location</p>
                <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>Ahmedabad, Gujarat, India</p>
              </div>

              {/* Live clock */}
              <div>
                <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Local Time (IST)</p>
                <p className="text-xs font-mono font-bold tabular-nums" style={{ color: "var(--accent)" }}>
                  {time}
                </p>
              </div>

              {/* Open to */}
              <div>
                <p className="text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>Open to</p>
                <div className="flex flex-col gap-1">
                  {["Full-time", "Contract", "Consulting"].map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full w-fit"
                      style={{ background: "rgba(74,94,58,0.1)", color: "var(--accent)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            {[
              { ref: yearsRef,    val: "0", suffix: "+", label: "AI Systems Built" },
              { ref: modulesRef,  val: "0", suffix: "+", label: "Odoo Modules Built" },
              { ref: projectsRef, val: "0", suffix: "+", label: "Projects Delivered" },
            ].map(({ ref, val, suffix, label }) => (
              <div key={label} className="bento-cell p-6 lg:col-span-2 flex flex-col items-center justify-center text-center" style={cardBg}>
                <div className="text-5xl font-bold mb-1 gradient-text">
                  <span ref={ref}>{val}</span>{suffix}
                </div>
                <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>{label}</p>
              </div>
            ))}

            {/* Philosophy */}
            <div className="bento-cell p-6 lg:col-span-6" style={card}>
              <h3 className="text-xs font-medium mb-4 tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Philosophy</h3>
              <div className="flex flex-wrap gap-2">
                {values.map(v => (
                  <span key={v} className="px-4 py-1.5 rounded-full text-sm border transition-all duration-200 cursor-default"
                    style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)", background: "var(--bg)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <MarqueeText items={["AI Product Engineer", "Senior Odoo Developer", "Full-Stack Developer", "ERP Specialist", "LLM Pipelines", "SaaS Builder", "React & Next.js", "Python Expert"]} />
    </>
  );
};

export default About;

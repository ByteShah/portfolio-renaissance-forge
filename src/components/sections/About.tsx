import { Reveal } from "@/components/ui/Reveal";
import { MarqueeText } from "@/components/ui/MarqueeText";

const roles = [
  {
    title: "Techno-Functional Consultant",
    desc: "I run the workshops, write the gap analysis and process maps, set up accounting, VAT/GST, warehouses and inter-company flows, then train the team and write the user guides.",
  },
  {
    title: "Odoo & Full-Stack Developer",
    desc: "When standard Odoo stops, I write the module. Odoo 14–19, Python, OWL, JSON-RPC APIs, React and React Native. I also do migrations and integrations.",
  },
  {
    title: "AI Product Owner",
    desc: "I own products end to end: roadmap, specs, acceptance tests, release notes. I use AI agents in delivery and ship LLM features where they earn their place.",
  },
];

const stats = [
  { value: "120+", label: "Odoo modules shipped" },
  { value: "4", label: "Products in production" },
  { value: "3", label: "Regions: India · UK · N. America" },
  { value: "2", label: "Peer-reviewed papers" },
];

const values = ["Process before code", "Standard Odoo first", "One owner, no handoffs", "Docs people actually read", "Ship, then measure"];

const card = { background: "var(--surface)", border: "1px solid var(--border-color)", borderRadius: "1rem" };

const About = () => (
  <>
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          {/* Bio */}
          <Reveal className="p-8 lg:col-span-3" style={card}>
            <h3 className="text-xs font-semibold mb-5 tracking-widest uppercase gradient-text">Who I Am</h3>
            <p className="leading-relaxed mb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              I'm Jaimin, a techno-functional Odoo consultant, developer and AI product owner based in Ahmedabad.
              I work independently now, after years at Odoo India and with implementation partners, where I saw too many
              rollouts that went live technically but never fit how the business really worked.
            </p>
            <p className="leading-relaxed mb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              Today I design and run products that people use every day: a textile wholesaler's whole business on
              48 custom Odoo modules, the Fabtoryx mobile app their sales staff and customers use, the LOOM
              headless storefront, and a 40-module ERP for a manufacturer selling across the US and Canada.
            </p>
            <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
              Before ERP I did ML research. I have peer-reviewed papers on stock prediction (Elsevier) and EMG gesture
              recognition, so I can tell an AI feature that only demos well from one that holds up on real data.
            </p>
          </Reveal>

          {/* Roles */}
          <Reveal className="p-6 lg:col-span-3" style={card} delay={80}>
            <h3 className="text-xs font-semibold mb-4 tracking-widest uppercase gradient-text">What I Do</h3>
            <div className="space-y-3">
              {roles.map((r) => (
                <div key={r.title} className="p-4 rounded-xl" style={{ background: "var(--bg)", borderLeft: "2px solid var(--accent)" }}>
                  <p className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{r.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Stats */}
          <div className="lg:col-span-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ value, label }, i) => (
              <Reveal key={label} delay={i * 60}
                className="p-6 flex flex-col items-center justify-center text-center"
                style={{ background: "var(--bg)", border: "1px solid var(--border-color)", borderRadius: "1rem" }}>
                <div className="text-4xl md:text-5xl font-bold mb-1 gradient-text">{value}</div>
                <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>{label}</p>
              </Reveal>
            ))}
          </div>

          {/* Principles */}
          <Reveal className="p-6 lg:col-span-6" style={card}>
            <h3 className="text-xs font-medium mb-4 tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>How I work</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((v) => (
                <span key={v} className="px-4 py-1.5 rounded-full text-sm border transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)", background: "var(--bg)" }}>
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <MarqueeText items={["Techno-Functional Consultant", "Odoo 14–19 Developer", "AI Product Owner", "ERP Implementation", "B2B Commerce", "React Native Apps", "Process Design", "Independent Consultant"]} />
  </>
);

export default About;

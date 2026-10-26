import { Reveal } from "@/components/ui/Reveal";

// How an engagement runs, with the actual artefacts handed over at each step.
const steps = [
  {
    n: "01",
    title: "Discover",
    text: "Workshops with the people who do the work. I read their spreadsheets, SOPs and old system before suggesting anything.",
    deliverables: ["Kick-off notes", "Current-process map", "Open questions log"],
  },
  {
    n: "02",
    title: "Fit & Gap",
    text: "I map each requirement to standard Odoo first. Only real gaps become custom work, and each gap gets a decision.",
    deliverables: ["Gap analysis", "Operating model", "Decision log"],
  },
  {
    n: "03",
    title: "Configure & Build",
    text: "Chart of accounts, taxes, warehouses and companies get configured. Then I write the modules, apps and integrations the gaps need.",
    deliverables: ["Setup checklist", "Import files", "Custom modules with tests"],
  },
  {
    n: "04",
    title: "Prove",
    text: "A demo database with realistic data and test scripts with expected results, so the team signs off on behaviour rather than slides.",
    deliverables: ["Demo database", "Test guides", "UAT sign-off"],
  },
  {
    n: "05",
    title: "Launch & Own",
    text: "Rollout in sprints, user training and plain-language guides. After go-live I stay on as product owner and keep improving it.",
    deliverables: ["Rollout sprints", "User guides", "Release notes"],
  },
];

const Approach = () => (
  <section id="approach" className="section-padding" style={{ background: "var(--surface)" }}>
    <div className="container mx-auto">
      <div className="numbered-heading mb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>How I Deliver</h2>
      </div>
      <p className="text-sm mb-12 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
        Techno-functional means one person carries the requirement from the first workshop to the code, and stays
        responsible for it after go-live. Nothing gets lost in handoffs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 70} className="p-5 rounded-2xl flex flex-col"
            style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}>
            <span className="text-3xl font-bold gradient-text mb-2">{s.n}</span>
            <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
            <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>{s.text}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.deliverables.map((d) => (
                <span key={d} className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(74,94,58,0.1)", color: "var(--accent)" }}>{d}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;

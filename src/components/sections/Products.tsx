import { useState } from "react";
import { ExternalLink, ChevronDown, HeartPulse, Landmark, ScanText, Bot, Plug, GitMerge, ArrowLeftRight, TrendingUp, LineChart, Hand, Smartphone, Boxes, Store, Mail, Factory, Building2, LayoutGrid } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { FabtoryxCover, TextileCover, LoomCover, EmailCover, ManufacturingCover, MultiCompanyCover, AppDeckCover } from "./Covers";
import { Reveal } from "@/components/ui/Reveal";

type Category = "product" | "erp" | "consulting" | "ai" | "research";
type Role = "Consultant" | "Developer" | "Product Owner";

interface Product {
  name: string;
  kind: string;
  status: string;
  usedBy: string;
  summary: string;
  highlights: string[];
  roles: Role[];
  tags: string[];
  category: Category[];
  icon: LucideIcon;
  cover: ComponentType<{ className?: string }>;
  link?: string;
}

// Products and systems that are live and used by real people.
const products: Product[] = [
  {
    name: "Fabtoryx",
    kind: "Mobile app · React Native (Expo) on Odoo",
    status: "Live · used daily",
    usedBy: "Sales staff, warehouse team and B2B customers of a textile wholesaler",
    summary: "A mobile app that talks straight to Odoo over JSON-RPC, with no middleware. It has two modes: staff mode for sales, stock and transfers, and a Myntra-style shop for B2B customers.",
    highlights: [
      "Sales wizard with camera barcode scanning, multi-variant quick add, set/combo selection and pricing computed by Odoo",
      "Manual inward with photos and a colour × size matrix, internal transfers, live stock and order approvals",
      "Customer shop with WhatsApp OTP login, GPS geo-fence, screenshot blocking and per-customer watermarked images",
      "Home screen built from 19 widgets configured in Odoo. Claude can lay it out from the catalogue through the config API",
    ],
    roles: ["Product Owner", "Developer"],
    tags: ["React Native", "Expo", "Odoo 19", "JSON-RPC", "WhatsApp OTP"],
    category: ["product", "ai"],
    icon: Smartphone,
    cover: FabtoryxCover,
  },
  {
    name: "CC Textile ERP Suite",
    kind: "48 custom Odoo 19 modules",
    status: "Live · runs the business",
    usedBy: "A multi-branch textile wholesaler: office, warehouse, agents and customers",
    summary: "All of a textile wholesaler's operations run on Odoo through this suite: wholesale sales, branches, agents, two sets of books and a gated B2B web shop.",
    highlights: [
      "Tablet sales, invoicing, inward and transfer flows for the shop floor, with GST invoice and QR label printing",
      "Central stock: branches sell and invoice in their own company and ship from the parent warehouse",
      "Small-bill (kachha) books with party ledger, cash book and P&L, plus agent commissions, ship-to-buyer orders and agent statements",
      "Customer-type pricing, set builder, design families, approval-gated shop, minimum order and watermarked catalogue",
      "WhatsApp engine on Interakt for OTP login, order updates, invoice dispatch and statements",
    ],
    roles: ["Consultant", "Developer", "Product Owner"],
    tags: ["Odoo 19", "Python", "OWL", "Interakt", "GST"],
    category: ["product", "erp"],
    icon: Boxes,
    cover: TextileCover,
  },
  {
    name: "LOOM Storefront",
    kind: "Headless storefront + Odoo 19 connector",
    status: "Open source · MIT",
    usedBy: "Merchants who want a fast shop on their own domain, with Odoo as the back office",
    summary: "A full clothing storefront (filters, variants, cart, checkout, accounts and orders) behind one documented API. It ships with the Odoo module that implements that API.",
    highlights: [
      "Runs on a bundled demo catalogue or on a real backend by changing one environment variable",
      "Admin back office, docs built into the site and a live API explorer",
      "Odoo connector: one store per website, Odoo pricing, taxes, discount codes, shipping, and Razorpay or hosted payments",
      "Copy-paste prompts that let an AI build the backend for Shopify, Medusa or WooCommerce against the same contract",
    ],
    roles: ["Product Owner", "Developer"],
    tags: ["React", "Vite SSR", "Odoo 19", "REST API", "Razorpay"],
    category: ["product", "ai"],
    icon: Store,
    cover: LoomCover,
  },
  {
    name: "Email Intelligence SaaS",
    kind: "AI SaaS · Next.js + LLM pipeline",
    status: "Live SaaS",
    usedBy: "Consumer subscribers on free, plus and pro plans",
    summary: "A Gmail pipeline that sorts email into structured life events. I built it as the AI product engineer at Yularatech.",
    highlights: [
      "Zod-validated LLM outputs with multi-tier scanning every 5 minutes, every 2 hours and daily",
      "Vercel AI Gateway routing across five AI providers from one model registry",
      "Server-side AES-256-GCM token encryption, Supabase RLS and PKCE Google OAuth",
      "Full monetisation: tiers, scan quotas, AdSense and rewarded-ad credits",
    ],
    roles: ["Product Owner", "Developer"],
    tags: ["Next.js", "LLM", "Supabase", "AI Gateway"],
    category: ["product", "ai"],
    icon: Mail,
    cover: EmailCover,
  },
];

// Client systems delivered end to end — consulting plus development.
const delivery: Product[] = [
  {
    name: "Manufacturing & Sales ERP",
    kind: "40+ Odoo 19 modules · consulting + development",
    status: "Live in production",
    usedBy: "Sales, marketing, production, support and shop-floor staff of a manufacturer selling in the US and Canada",
    summary: "Odoo now runs this client's sales, marketing, production, support and attendance. I scoped the gaps, wrote the operating model and built what standard Odoo lacked.",
    highlights: [
      "Lead attribution: UTM, GTM, live chat and webhooks; HubSpot, Mailchimp, Calendly and QuickBooks imports; offline conversions sent back to ad platforms",
      "Net2Phone call transcripts on leads, email open tracking, weekly pipeline snapshots and GA4 / Google Ads reports",
      "Configured-product quotes in CAD/USD with option-level discounts and Avalara US ZIP sales tax",
      "Production orders with work cards, versioned documents and time entries. Helpdesk cost and time reconcile to accounting",
      "RFID attendance with ESP32 readers, a tablet kiosk and a mobile QR check-in PWA with GPS",
      "Gap analysis, operating model, rollout sprints, test guides and user guides for each phase",
    ],
    roles: ["Consultant", "Developer"],
    tags: ["Odoo 19", "Python", "ESP32 / RFID", "Avalara", "GA4"],
    category: ["erp", "consulting"],
    icon: Factory,
    cover: ManufacturingCover,
  },
  {
    name: "UK Multi-Company Implementation",
    kind: "Functional consulting · Odoo Enterprise",
    status: "Implementation",
    usedBy: "A UK group with a B2B wholesale company and a B2C retail company",
    summary: "A standard-first Odoo rollout for the UK: the plan, the decisions, the configuration and a working demo database the team can learn from before anything is customised.",
    highlights: [
      "Two companies with inter-company automation: a PO in retail automatically creates the SO in wholesale",
      "Group chart of accounts (264 accounts), UK VAT with postponed import VAT and reverse charge, and four currencies",
      "285 product categories and a custom 12-digit SKU module (territory, department, number, colour, size) with Code128 barcodes",
      "3-step receipts and deliveries, landed costs, a decision log, a timeline and an end-user guide",
    ],
    roles: ["Consultant", "Developer"],
    tags: ["Odoo Enterprise", "UK VAT", "Inter-company", "Warehouse"],
    category: ["erp", "consulting"],
    icon: Building2,
    cover: MultiCompanyCover,
  },
  {
    name: "App Deck Backend Theme",
    kind: "Odoo 19 backend theme",
    status: "Product",
    usedBy: "Odoo users who live in the backend all day",
    summary: "Groups the Odoo app menu into a deck with keyboard-first navigation, so heavy users reach any app without the mouse.",
    highlights: [
      "Grouped app launcher at /odoo, built on Odoo's own menu service so permissions stay intact",
      "Favourites, recently used apps, search, grid or list view and a shortcut cheat sheet",
      "One toggle between the deck and the last page you were on",
      "Can be switched off with a system parameter, without uninstalling",
    ],
    roles: ["Product Owner", "Developer"],
    tags: ["Odoo 19", "OWL", "UX"],
    category: ["product"],
    icon: LayoutGrid,
    cover: AppDeckCover,
  },
];

interface EarlierWork { icon: LucideIcon; title: string; description: string; tags: string[]; category: Category[]; link?: string; }

const earlier: EarlierWork[] = [
  { icon: HeartPulse, title: "OHIP Insurance Platform", description: "Real-time OHIP verification, MCEDT integration for payment reconciliation and automated XML/EDI batch claims for a Canadian healthcare provider.", tags: ["Odoo", "OHIP API", "XML/EDI"], category: ["erp"] },
  { icon: Landmark, title: "Line of Credit Platform", description: "Full lending lifecycle with Plaid bank verification, Stripe disbursements and repayments, multi-location credit rules and automated statements.", tags: ["Odoo", "Plaid", "Stripe"], category: ["erp"] },
  { icon: ScanText, title: "OCR Invoice Engine", description: "Automated bill processing with field matching, confidence scoring, mapping rules and a human review step.", tags: ["Odoo", "OCR", "AI"], category: ["erp", "ai"] },
  { icon: Bot, title: "Conversational AI Agent for Odoo", description: "Natural-language questions over live Odoo data with ORM-safe queries, role-based access checks and prompt-injection guards.", tags: ["Odoo", "LLM", "Python"], category: ["ai", "erp"] },
  { icon: Plug, title: "Odoo × Claude MCP", description: "Claude MCP integration for real-time Odoo access with retry queues, conflict handling and async processing.", tags: ["Odoo", "Claude MCP"], category: ["ai", "erp"] },
  { icon: GitMerge, title: "Odoo v14 → v19 Migration", description: "Multi-module migration of accounting, helpdesk and eCommerce, rewriting OWL components and replacing deprecated APIs.", tags: ["Odoo", "Migration", "OWL"], category: ["erp"] },
  { icon: ArrowLeftRight, title: "Tally → Odoo Transitions", description: "Led 15+ Tally-to-Odoo moves at Odoo India, including data migration and HRMS and logistics API integrations.", tags: ["Odoo", "Tally", "Migration"], category: ["erp", "consulting"] },
  { icon: TrendingUp, title: "Sales Forecasting Dashboard", description: "Python + OWL time-series dashboard that improved inventory planning accuracy by 45%.", tags: ["Python", "OWL", "Forecasting"], category: ["erp", "ai"] },
  { icon: LineChart, title: "Stock Market Prediction", description: "Hybrid LSTM / CNN / ARIMA models with sentiment analysis reaching 92% accuracy on Nifty50. Published in Elsevier.", tags: ["TensorFlow", "LSTM", "Research"], category: ["research", "ai"], link: "https://doi.org/10.1016/j.iswa.2022.200111" },
  { icon: Hand, title: "EMG-Controlled Bionic Arm", description: "95% gesture recognition accuracy from noise-filtered EMG signals with a CNN. Master's thesis.", tags: ["CNN", "Signal Processing"], category: ["research", "ai"] },
];

const filters: { id: "all" | Category; name: string }[] = [
  { id: "all", name: "All" },
  { id: "product", name: "Products" },
  { id: "erp", name: "ERP Delivery" },
  { id: "consulting", name: "Consulting" },
  { id: "ai", name: "AI" },
  { id: "research", name: "Research" },
];

const roleStyle: Record<Role, React.CSSProperties> = {
  "Consultant": { background: "rgba(122,144,99,0.15)", color: "var(--accent-dark)" },
  "Developer": { background: "var(--bg)", color: "var(--text-secondary)", border: "1px solid var(--border-color)" },
  "Product Owner": { background: "var(--accent)", color: "#F2EDE4" },
};

const Tag = ({ children }: { children: string }) => (
  <span className="text-xs px-2.5 py-0.5 rounded-full"
    style={{ background: "var(--bg)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}>
    {children}
  </span>
);

const ProductCard = ({ p, size }: { p: Product; size: "lg" | "md" }) => {
  // On phones the highlight list is collapsed; md+ always shows it.
  const [open, setOpen] = useState(false);
  const Cover = p.cover;
  return (
  <article className="project-card overflow-hidden flex flex-col h-full group">
    {/* Cover — same frame, gradient and chip on every card */}
    <div className={`relative overflow-hidden ${size === "lg" ? "h-48 md:h-56" : "h-40"}`}
      style={{ background: "linear-gradient(135deg, var(--accent-dark), var(--accent) 60%, var(--accent-light))" }}>
      <div className="absolute inset-x-0 bottom-0 top-9">
        <Cover className="w-full h-full transition-transform duration-500 origin-bottom group-hover:scale-[1.03]" />
      </div>
      <span className="absolute top-4 left-4 text-[11px] font-semibold px-2.5 py-1 rounded-full"
        style={{ background: "rgba(242,237,228,0.95)", color: "var(--accent-dark)" }}>
        ● {p.status}
      </span>
    </div>

    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center gap-2.5 mb-1">
        <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(74,94,58,0.1)" }}>
          <p.icon size={17} style={{ color: "var(--accent)" }} />
        </span>
        <h3 className={`${size === "lg" ? "text-xl" : "text-lg"} font-bold leading-tight`} style={{ color: "var(--text-primary)" }}>{p.name}</h3>
      </div>
      <p className="text-xs font-semibold mb-3 ml-[42px]" style={{ color: "var(--accent)" }}>{p.kind}</p>
      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>{p.summary}</p>
      <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
        <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>Used by: </span>{p.usedBy}
      </p>

      <button onClick={() => setOpen((o) => !o)} aria-expanded={open}
        className="md:hidden self-start mb-4 inline-flex items-center gap-1 text-sm font-semibold"
        style={{ color: "var(--accent)" }}>
        {open ? "Hide details" : `Show details (${p.highlights.length})`}
        <ChevronDown size={14} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>

      <ul className={`space-y-1.5 mb-5 ${open ? "" : "hidden md:block"}`}>
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span className="shrink-0 font-bold" style={{ color: "var(--accent)" }}>›</span>{h}
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] uppercase tracking-widest mr-1" style={{ color: "var(--text-muted)" }}>My role</span>
          {p.roles.map((r) => (
            <span key={r} className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={roleStyle[r]}>{r}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold underline-link">
            Visit <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  </article>
  );
};

const Products = () => {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [showAllEarlier, setShowAllEarlier] = useState(false);
  const match = (c: Category[]) => filter === "all" || c.includes(filter);

  const shownProducts = products.filter((p) => match(p.category));
  const shownDelivery = delivery.filter((p) => match(p.category));
  const shownEarlier = earlier.filter((p) => match(p.category));

  return (
    <section id="products" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="container mx-auto">
        <div className="numbered-heading mb-4">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>Products &amp; Work</h2>
        </div>
        <p className="text-sm mb-10 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
          These are not side projects. Every product below is live and used by real staff and customers, and each card says
          what I owned: the consulting, the code, the product, or all three.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button key={f.id} onClick={() => setFilter(f.id)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              style={filter === f.id
                ? { background: "var(--accent)", color: "#F2EDE4" }
                : { background: "var(--surface)", color: "var(--text-secondary)", border: "1px solid var(--border-color)" }}>
              {f.name}
            </button>
          ))}
        </div>

        {shownProducts.length > 0 && (
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 gradient-text">Products I own</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {shownProducts.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 80}><ProductCard p={p} size="lg" /></Reveal>
              ))}
            </div>
          </div>
        )}

        {shownDelivery.length > 0 && (
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 gradient-text">Client systems: consulting + build</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {shownDelivery.map((p, i) => (
                <Reveal key={p.name} delay={i * 60}><ProductCard p={p} size="md" /></Reveal>
              ))}
            </div>
          </div>
        )}

        {shownEarlier.length > 0 && (
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 gradient-text">Earlier delivery &amp; research</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {shownEarlier.map((w, i) => (
                <Reveal key={w.title} className={i >= 4 && !showAllEarlier ? "hidden md:block" : ""}>
                  <div className="project-card p-5 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(74,94,58,0.1)" }}>
                          <w.icon size={17} style={{ color: "var(--accent)" }} />
                        </span>
                        <h3 className="font-bold text-base leading-tight" style={{ color: "var(--text-primary)" }}>{w.title}</h3>
                      </div>
                      {w.link && (
                        <a href={w.link} target="_blank" rel="noopener noreferrer" aria-label={`${w.title} link`}
                          className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-secondary)" }}>{w.description}</p>
                    <div className="flex flex-wrap gap-1.5">{w.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            {shownEarlier.length > 4 && !showAllEarlier && (
              <button onClick={() => setShowAllEarlier(true)}
                className="md:hidden mt-4 w-full py-3 rounded-xl text-sm font-semibold border"
                style={{ borderColor: "var(--border-color)", color: "var(--accent)" }}>
                Show all {shownEarlier.length}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

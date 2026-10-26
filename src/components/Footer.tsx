import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { useCopyEmail } from "@/hooks/useCopyEmail";

const Footer = () => {
  const year = new Date().getFullYear();
  const { copied: emailCopied, copy: copyEmail } = useCopyEmail("s1.jaimin@gmail.com");
  const socialLinks = [
    { icon: Github, href: "https://github.com/ByteShah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/jaiminshah198", label: "LinkedIn" },
    { icon: Mail, href: "mailto:s1.jaimin@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-10 border-t" style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="gradient-text text-2xl font-bold mb-1">Jaimin Shah</div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Techno-Functional Odoo Consultant · Developer · AI Product Owner</p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 mb-8 md:mb-0">
            <div>
              <h3 className="font-semibold mb-3 text-sm" style={{ color: "var(--text-primary)" }}>Explore</h3>
              <ul className="space-y-2">
                {["About", "Products", "Approach"].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm" style={{ color: "var(--text-primary)" }}>Connect</h3>
              <ul className="space-y-2">
                {["Experience", "Skills", "Contact", "Book a Call"].map(l => (
                  <li key={l}>
                    <a
                      href={l === "Book a Call" ? "https://cal.com/jaimin-shah" : `#${l.toLowerCase()}`}
                      target={l === "Book a Call" ? "_blank" : undefined}
                      rel={l === "Book a Call" ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors hover:text-[var(--accent)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: "var(--border-color)" }}>
          <p className="text-sm mb-4 md:mb-0" style={{ color: "var(--text-muted)" }}>© {year} Jaimin Shah. All Rights Reserved</p>
          <div className="flex items-center space-x-5">
            {socialLinks.map((link) => (
              link.label === "Email" ? (
                <button key={link.label} aria-label="Copy email"
                  onClick={copyEmail}
                  className="relative transition-all duration-200 hover:-translate-y-0.5"
                  style={{ color: emailCopied ? "var(--accent)" : "var(--text-secondary)" }}
                >
                  {emailCopied ? <Check size={18} /> : <Mail size={18} />}
                  {emailCopied && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{ background: "var(--accent)", color: "#F2EDE4" }}>
                      Copied!
                    </span>
                  )}
                </button>
              ) : (
                <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer"
                  className="transition-all duration-200 hover:-translate-y-0.5"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <link.icon size={18} />
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

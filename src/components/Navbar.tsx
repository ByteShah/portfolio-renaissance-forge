import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Products",   href: "#products" },
  { name: "Approach",   href: "#approach" },
  { name: "Experience", href: "#experience" },
  { name: "Skills",     href: "#skills" },
  { name: "Contact",    href: "#contact" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.href.slice(1))).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button"))
        setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={cn("fixed top-0 w-full z-50 transition-all duration-300")}
      style={{
        background: scrolled ? "rgba(242,237,228,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(28,28,26,0.07)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-xl font-bold tracking-tight gradient-text">
          Jaimin Shah
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollTo(item.href.slice(1))}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                  "opacity-0 animate-fade-in"
                )}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: "forwards",
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  background: isActive ? "rgba(74,94,58,0.08)" : "transparent",
                }}
                whileHover={{ color: "var(--accent)" }}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(74,94,58,0.08)", border: "1px solid rgba(74,94,58,0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Mobile button */}
        <div className="flex items-center md:hidden">
          <button
            id="menu-button"
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden fixed top-0 right-0 bottom-0 w-3/4 p-8 transform transition-transform duration-300 ease-in-out z-50 border-l",
            isMenuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full invisible"
          )}
          style={{ background: "var(--bg)", borderColor: "var(--border-color)", height: "100vh" }}
        >
          <div className="flex justify-end mb-8">
            <button
              className="p-2 rounded-lg"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.name}>
                    <button
                      className="w-full text-left text-lg font-medium py-3 px-4 rounded-xl transition-all duration-200"
                      style={{
                        color: isActive ? "var(--accent)" : "var(--text-secondary)",
                        background: isActive ? "rgba(74,94,58,0.08)" : "transparent",
                      }}
                      onClick={() => { scrollTo(item.href.slice(1)); setIsMenuOpen(false); }}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

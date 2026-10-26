import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

// Fades children in once when they scroll into view. One shared observer,
// CSS-only transition — replaces the GSAP ScrollTrigger animations.
let observer: IntersectionObserver | null = null;
const getObserver = () => {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );
  return observer;
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  as?: "div" | "section" | "li";
}

export const Reveal = ({ children, className = "", delay = 0, style, as: Tag = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    const obs = getObserver();
    if (!el) return;
    if (!obs) { el.classList.add("is-visible"); return; }
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
};

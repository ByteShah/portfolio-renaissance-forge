interface MarqueeTextProps {
  items: string[];
  speed?: number;
  className?: string;
}

export const MarqueeText = ({ items, speed = 28, className = "" }: MarqueeTextProps) => {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden border-y border-black/8 py-4 bg-[var(--surface)] ${className}`}>
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-sm font-medium tracking-widest uppercase"
            style={{ color: "var(--text-secondary)" }}
          >
            {item}
            <span style={{ color: "var(--accent)", fontSize: "6px" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

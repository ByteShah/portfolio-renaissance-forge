import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 120, damping: 22 });
  const ringY = useSpring(dotY, { stiffness: 120, damping: 22 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    const onMove = (e: MouseEvent) => { dotX.set(e.clientX); dotY.set(e.clientY); };
    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, input, textarea, [role='button'], select"))
        setIsHovering(true);
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, input, textarea, [role='button'], select"))
        setIsHovering(false);
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [dotX, dotY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%", background: "#1C1C1A" }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX, y: ringY,
          translateX: "-50%", translateY: "-50%",
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          border: `1.5px solid ${isHovering ? "#4A5E3A" : "rgba(28,28,26,0.35)"}`,
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
        }}
      />
    </>
  );
};

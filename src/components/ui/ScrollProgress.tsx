import { useScroll, useSpring, motion } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9998] pointer-events-none"
      style={{ scaleX, background: "linear-gradient(90deg, #4A5E3A, #7A9063)" }}
    />
  );
};

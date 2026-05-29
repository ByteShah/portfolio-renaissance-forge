export const GrainOverlay = () => (
  <div
    aria-hidden
    style={{
      position: "fixed",
      inset: "-200%",
      width: "400%",
      height: "400%",
      pointerEvents: "none",
      zIndex: 9999,
      opacity: 0.038,
      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`,
      animation: "grain 0.4s steps(1) infinite",
    }}
  />
);

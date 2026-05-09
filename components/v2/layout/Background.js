const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060d]"
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[140px]" />
      <div className="absolute top-[28%] -left-32 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[140px]" />
      <div className="absolute top-[55%] -right-40 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/15 blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-[120px]" />

      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
    </div>
  );
};

export default Background;

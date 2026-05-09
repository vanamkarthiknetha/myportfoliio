const Badge = ({ children, tone = "default", className = "" }) => {
  const tones = {
    default:
      "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/20 hover:text-white",
    accent:
      "border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:border-cyan-400/50",
    violet:
      "border-violet-400/25 bg-violet-400/10 text-violet-200 hover:border-violet-400/45",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide backdrop-blur transition-colors ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;

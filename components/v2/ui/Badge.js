const Badge = ({ children, tone = "default", className = "" }) => {
  const tones = {
    default:
      "border-white/10 bg-white/[0.04] text-ln-muted hover:border-white/20 hover:text-ln-text",
    accent:
      "border-ln-blue/30 bg-ln-blue/10 text-ln-blue hover:border-ln-blue/50",
    violet:
      "border-ln-blue/30 bg-ln-blue/10 text-ln-blue hover:border-ln-blue/50",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[11px] tracking-tight transition-colors ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;

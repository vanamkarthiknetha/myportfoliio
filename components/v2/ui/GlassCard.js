const GlassCard = ({ children, className = "", as: Tag = "div", ...rest }) => {
  return (
    <Tag
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04] ${className}`}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60"
        aria-hidden
      />
      {children}
    </Tag>
  );
};

export default GlassCard;

const GlassCard = ({ children, className = "", as: Tag = "div", ...rest }) => {
  return (
    <Tag
      className={`group relative overflow-hidden rounded-lg border border-white/10 bg-ln-surface transition-colors duration-200 hover:border-white/20 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default GlassCard;

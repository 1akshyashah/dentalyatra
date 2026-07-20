export default function GlassCard({
  children,
  className = "",
  blur = "xl",
  padding = "md",
  hover = true,
}) {
  const paddings = {
    sm: "p-4",
    md: "p-5",
    lg: "p-7",
  };

  const blurs = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
  };

  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/60
        bg-white/80
        ${blurs[blur]}
        ${paddings[padding]}
        shadow-[0_20px_60px_rgba(15,23,42,.10)]

        ${
          hover
            ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,.14)]"
            : ""
        }

        ${className}
      `}
    >
      {children}
    </div>
  );
}
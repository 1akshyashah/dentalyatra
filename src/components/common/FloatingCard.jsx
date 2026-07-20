import GlassCard from "./GlassCard";
import IconBox from "./IconBox";

export default function FloatingCard({
  icon,
  title,
  description,
  className = "",
  iconClassName = "",
  children,
}) {
  return (
    <GlassCard
      className={`
        absolute
        w-[210px]
        rounded-3xl
        border
        border-white/60
        bg-white/85
        p-4
        backdrop-blur-xl
        shadow-[0_20px_50px_rgba(15,23,42,.10)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_28px_70px_rgba(15,23,42,.16)]
        ${className}
      `}
    >
      <div className="flex items-start gap-3">

        {icon && (
          <IconBox
            size="sm"
            className={`
              shrink-0
              shadow-sm
              ${iconClassName}
            `}
          >
            {icon}
          </IconBox>
        )}

        <div className="min-w-0">

          {title && (
            <h4
              className="
                text-[15px]
                font-semibold
                leading-5
                text-slate-900
              "
            >
              {title}
            </h4>
          )}

          {description && (
            <p
              className="
                mt-1.5
                text-[13px]
                leading-5
                text-slate-500
              "
            >
              {description}
            </p>
          )}

          {children}

        </div>

      </div>
    </GlassCard>
  );
}
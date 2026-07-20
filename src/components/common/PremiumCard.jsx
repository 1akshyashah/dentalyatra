import Card from "./Card";
import {
  radius,
  transitions,
  components,
} from "../../design";

export default function PremiumCard({
  children,
  className = "",
  size = "default",
}) {
  return (
    <Card
      className={`
        group
        relative
        overflow-hidden

        ${radius.card}

        ${components.card[size]}

        ${transitions.card}

        border
        border-slate-200/60

        bg-gradient-to-b
        from-white
        to-primary-50/20

        shadow-[0_10px_35px_rgba(15,23,42,.05)]
        hover:border-primary-200
        hover:shadow-[0_22px_55px_rgba(15,23,42,.10)]

        ${className}
      `}
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-12
          -top-12
          h-40
          w-40
          rounded-full
          bg-primary-100/30
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          pointer-events-none
        "
      />

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-primary-50/0
          to-primary-100/0
          transition-all
          duration-500
          group-hover:from-primary-50/20
          group-hover:to-primary-100/10
          pointer-events-none
        "
      />

      {/* Top Highlight */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/80
          to-transparent
          opacity-60
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>

    </Card>
  );
}
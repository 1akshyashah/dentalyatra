import { ArrowRight } from "lucide-react";
import { PremiumCard, IconBox } from "../common";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <PremiumCard className="group h-full p-8 mt-10">
      {/* Icon */}

      <IconBox
        size="md"
        className="
          transition-all
          duration-500
          ease-out
          group-hover:bg-primary-600
          group-hover:border-primary-600
          group-hover:shadow-lg
          group-hover:scale-110
          group-hover:rotate-3
        "
      >
        <Icon
          className="
            h-8
            w-8
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </IconBox>

      {/* Accent Line */}

      <div
        className="
          mt-6
          h-0.5
          w-12
          rounded-full
          bg-primary-500
          transition-all
          duration-300
          group-hover:w-20
        "
      />

      {/* Title */}

      <h3
        className="
          mt-6
          text-2xl
          text-2xl
lg:text-3xl
          font-bold
          leading-tight
          text-slate-900
          transition-colors
          duration-300
          group-hover:text-primary-700
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4
          text-base
          leading-7
          text-slate-600
          transition-colors
          duration-300
          group-hover:text-slate-700
        "
      >
        {description}
      </p>
      {/* Accent Line */}

      {/* CTA */}

      <div className="mt-8 flex items-center justify-between">
        <span
          className="
            font-semibold
            text-primary-600
            transition-all
            duration-300
            group-hover:tracking-wide
          "
        >
          Learn More
        </span>

        <ArrowRight
          className="
            h-5
            w-5
            text-primary-600
            transition-all
            duration-500
            group-hover:translate-x-2
          "
        />
      </div>
    </PremiumCard>
  );
}
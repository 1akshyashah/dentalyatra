import { ArrowRight } from "lucide-react";
import { PremiumCard, IconBox } from "../common";

export default function TreatmentCard({
  icon,
  title,
  description,
}) {
  return (
    <PremiumCard
      className="
        h-full
        p-6
        lg:p-8
        flex
        flex-col
      "
    >
      {/* Top Content */}

      <div className="flex-1">

        {/* Icon */}

        <IconBox
          size="lg"
          className="
            group-hover:bg-primary-600
            group-hover:border-primary-600
            group-hover:shadow-lg
            group-hover:scale-105
          "
        >
          {icon}
        </IconBox>

        {/* Accent Line */}

        <div
          className="
            mt-5
            h-[3px]
            w-12
            lg:w-14
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
            mt-5
            text-2xl
            lg:text-[30px]
            font-bold
            leading-tight
            tracking-[-0.02em]
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
            min-h-[72px]
            lg:min-h-[84px]
            text-base
            lg:text-[17px]
            leading-7
            lg:leading-8
            text-slate-600
          "
        >
          {description}
        </p>

      </div>

      {/* Bottom CTA */}

      <div
        className="
          mt-6
          lg:mt-8
          border-t
          border-slate-100
          pt-5
          lg:pt-6
        "
      >
        <div className="flex items-center justify-between">

          <span
            className="
              text-sm
              lg:text-base
              font-semibold
              text-primary-600
            "
          >
            Learn More
          </span>

          <ArrowRight
            className="
              h-5
              w-5
              text-primary-600
              transition-transform
              duration-300
              group-hover:translate-x-1.5
            "
          />

        </div>
      </div>
    </PremiumCard>
  );
} 
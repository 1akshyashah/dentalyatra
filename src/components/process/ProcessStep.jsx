import { ArrowRight } from "lucide-react";

import {
  PremiumCard,
  IconBox,
} from "../common";

export default function ProcessStep({
  number,
  icon,
  title,
  description,
}) {
  const Icon = icon;

  return (
    <PremiumCard
      className="
        relative
        h-full
        p-6
        lg:p-8
        flex
        flex-col
      "
    >
      {/* Step Number */}

      <span
        className="
          absolute
          top-6
          right-6
          lg:top-8
          lg:right-8
          text-5xl
          lg:text-6xl
          font-extrabold
          leading-none
          text-primary-100
          select-none
          transition-colors
          duration-300
          group-hover:text-primary-200
        "
      >
        {number}
      </span>

      {/* Content */}

      <div className="relative z-10 flex-1">

        {/* Icon */}

        <IconBox
          size="md"
          className="
            group-hover:bg-primary-600
            group-hover:border-primary-600
            group-hover:shadow-lg
            group-hover:scale-105
          "
        >
          <Icon
            className="
              h-7
              w-7
              transition-colors
              duration-300
              group-hover:text-white
            "
          />
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
            lg:min-h-[96px]
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

      {/* Footer */}

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
            Next Step
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
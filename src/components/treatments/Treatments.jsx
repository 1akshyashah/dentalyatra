import {
  Shield,
  Sparkles,
  Crown,
  Smile,
  ScanLine,
  Activity,
  ArrowRight,
} from "lucide-react";

import {
  Section,
  SectionTitle,
  Button,
} from "../common";

import TreatmentCard from "./TreatmentCard";

const treatments = [
  {
    icon: (
      <Shield
        className="
          h-7
          w-7
          transition-colors
          duration-300
          group-hover:text-white
        "
      />
    ),
    title: "Dental Implants",
    description:
      "Permanent replacement for one or more missing teeth using advanced implant technology.",
  },

  {
    icon: (
      <Sparkles
        className="
          h-7
          w-7
          transition-colors
          duration-300
          group-hover:text-white
        "
      />
    ),
    title: "Smile Makeover",
    description:
      "Transform your smile with personalized cosmetic treatments designed around your facial aesthetics.",
  },

  {
    icon: (
      <Smile
        className="
          h-7
          w-7
          transition-colors
          duration-300
          group-hover:text-white
        "
      />
    ),
    title: "Porcelain Veneers",
    description:
      "Enhance your smile with ultra-thin porcelain veneers that look completely natural.",
  },

  {
    icon: (
      <Activity
        className="
          h-7
          w-7
          transition-colors
          duration-300
          group-hover:text-white
        "
      />
    ),
    title: "Root Canal Therapy",
    description:
      "Preserve infected teeth with painless endodontic treatment using advanced microscopic techniques.",
  },

  {
    icon: (
      <Crown
        className="
          h-7
          w-7
          transition-colors
          duration-300
          group-hover:text-white
        "
      />
    ),
    title: "Crowns & Bridges",
    description:
      "Restore damaged or missing teeth with durable ceramic restorations crafted for a natural smile.",
  },

  {
    icon: (
      <ScanLine
        className="
          h-7
          w-7
          transition-colors
          duration-300
          group-hover:text-white
        "
      />
    ),
    title: "Clear Aligners",
    description:
      "Straighten your teeth comfortably using nearly invisible aligners planned with digital precision.",
  },
];

export default function Treatments() {
  return (
  <Section
  variant="compact"
  className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-white
    via-primary-50/20
    to-white
"
>
      {/* Decorative Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            -left-28
            top-20
           h-56
          w-56
          lg:h-80
          lg:w-80
            rounded-full
            bg-primary-100/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-24
            bottom-0
            h-80
            w-80
            rounded-full
            bg-teal-100/20
            blur-3xl
          "
        />

      </div>

      {/* Section Content */}

      <div className="relative z-10">

        <SectionTitle
          badge="POPULAR TREATMENTS"
          title={
           <>
  Comprehensive Dental Solutions
  <span className="hidden lg:block">
    <br />
  </span>
  <span className="text-primary-600">
    For Every Smile
  </span>
</>
          }
          description="Explore our most sought-after dental treatments performed by experienced specialists using advanced technology, internationally accepted protocols, and personalized care."
        />

        {/* Cards */}

       <div
  className="
    mt-10
    lg:mt-20
    grid
    grid-cols-1
    gap-6
    sm:grid-cols-2
    lg:gap-8
    xl:grid-cols-3
  "
>
          {treatments.map((item) => (
            <TreatmentCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-12 lg:mt-14 flex justify-center">

          <Button
            to="/treatments"
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight className="h-5 w-5" />}
          >
            View All Treatments
          </Button>

        </div>

      </div>

    </Section>
  );
}
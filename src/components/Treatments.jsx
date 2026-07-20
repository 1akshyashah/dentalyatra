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
    icon: Shield,
    title: "Dental Implants",
    description:
      "Restore missing teeth with durable, natural-looking implants designed for long-term comfort, function, and confidence.",
  },
  {
    icon: Sparkles,
    title: "Smile Makeover",
    description:
      "Achieve your ideal smile through a customized combination of cosmetic dental procedures tailored to your goals.",
  },
  {
    icon: Smile,
    title: "Porcelain Veneers",
    description:
      "Enhance the shape, colour, and symmetry of your teeth with beautifully crafted porcelain veneers.",
  },
  {
    icon: Activity,
    title: "Root Canal Therapy",
    description:
      "Save infected teeth using advanced endodontic treatment that eliminates pain while preserving your natural smile.",
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    description:
      "Restore damaged or missing teeth with strong, natural-looking ceramic crowns and bridges for lasting performance.",
  },
  {
    icon: ScanLine,
    title: "Clear Aligners",
    description:
      "Straighten your teeth comfortably using nearly invisible aligners planned with advanced digital smile technology.",
  },
];

export default function Treatments() {
  return (
    <Section
      variant="section"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-primary-50/20
        via-white
        to-white
      "
    >
      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-32
            top-24
            h-[420px]
            w-[420px]
            rounded-full
            bg-primary-100/15
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-teal-100/15
            blur-[140px]
          "
        />
      </div>

      {/* Content */}

      <div className="relative z-10">

        <SectionTitle
          badge="POPULAR TREATMENTS"
          title={
            <>
              Comprehensive Dental Solutions{" "}
              <span className="text-primary-600">
                For Every Smile
              </span>
            </>
          }
          description="
            Explore our most sought-after dental treatments performed by experienced specialists using advanced technology, internationally accepted protocols, and personalized treatment planning.
          "
        />

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.title}
              icon={treatment.icon}
              title={treatment.title}
              description={treatment.description}
            />
          ))}
        </div>

        {/* CTA */}

        <div className="mt-16 flex justify-center">
          <Button
            to="/treatments"
            variant="secondary"
            size="lg"
            rightIcon={
              <ArrowRight className="h-5 w-5" />
            }
          >
            View All Treatments
          </Button>
        </div>

      </div>
    </Section>
  );
}
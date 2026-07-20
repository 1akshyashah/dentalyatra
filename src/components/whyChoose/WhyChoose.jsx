import {
  ShieldCheck,
  ClipboardCheck,
  Plane,
  HeartHandshake,
} from "lucide-react";

import {
  Section,
  SectionTitle,
} from "../common";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Clinics",
    description:
      "Every partner clinic is carefully selected for quality, hygiene, technology and exceptional patient care.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized Treatment Plan",
    description:
      "Receive a customized treatment recommendation and transparent estimate before travelling to India.",
  },
  {
    icon: Plane,
    title: "Travel Assistance",
    description:
      "From visas and accommodation to airport transfers, we help organize your entire journey.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Care Coordinator",
    description:
      "A single point of contact supports you before, during and after your treatment for complete peace of mind.",
  },
];

export default function WhyChoose() {
  return (
    <Section
      variant="section"
      className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-white pb-0"
    >
      {/* Decorative Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-32
            top-16
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
            -left-32
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

      <div className="relative z-10 ">
        <SectionTitle
          badge="WHY DENTALYAATRA"
          title={
            <>
Your Trusted{" "}
<span className="text-primary-600">
Dental Travel Partner
</span>
</>
          }
          description="DentalYaatra simplifies every step of your journey—from selecting the right clinic and planning treatment to coordinating travel and providing support throughout your dental experience."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
import {
  ShieldCheck,
  Plane,
  HeartHandshake,
} from "lucide-react";

import heroImage from "../../assets/images/hero/hero-main.png";

import { FloatingCard } from "../common";

export default function HeroImage() {
  return (
    <div className="relative h-[680px] w-full">

      {/* Glow Background */}
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-primary-100/70 via-white to-teal-100/60 blur-3xl" />

      {/* Main Image */}
      <div className="relative h-full overflow-hidden rounded-[48px] border border-white/60 bg-white shadow-[0_35px_80px_rgba(15,23,42,.10)]">

        <img
          src={heroImage}
          alt="Dental consultation"
          className="h-full w-full object-cover object-center"
        />

      </div>

      {/* Verified Clinics */}
      <FloatingCard
        className="left-[-30px] top-12"
        icon={<ShieldCheck className="h-5 w-5 text-primary-600" />}
        title="Verified Clinics"
        description="Trusted partner network"
      />

      {/* Airport Pickup */}
      <FloatingCard
        className="right-[-30px] top-40"
        icon={<Plane className="h-5 w-5 text-teal-600" />}
        title="Airport Pickup"
        description="Travel assistance"
      />

      {/* Care Coordinator */}
      <FloatingCard
        className="bottom-8 left-1/2 -translate-x-1/2"
        icon={<HeartHandshake className="h-5 w-5 text-rose-500" />}
        title="Dedicated Care"
        description="Personal coordinator"
      />

    </div>
  );
}
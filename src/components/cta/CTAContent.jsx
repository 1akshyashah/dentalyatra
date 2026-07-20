import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import { Button } from "../common";
import BenefitItem from "./BenefitItem";
import TrustBadge from "./TrustBadge";

export default function CTAContent() {
  return (
    <>
      {/* Eyebrow */}

      <span
        className="
          inline-flex
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          sm:px-5
          text-xs
          sm:text-sm
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white
          backdrop-blur
        "
      >
        DentalYaatra
      </span>

      {/* Heading */}

      <h2
        className="
          mt-6
          lg:mt-8
          max-w-[620px]
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-extrabold
          leading-tight
          tracking-[-0.02em]
          text-white
        "
      >
        Your Dental Journey

        <span className="block text-cyan-200">
          Starts Here
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-[560px]
          text-base
          lg:text-lg
          leading-7
          lg:leading-8
          text-white/85
        "
      >
        Receive a personalized treatment plan from India's
        leading dental specialists. From consultation to
        travel planning, DentalYaatra guides you every step
        of the way.
      </p>

      {/* Benefits */}

      <div
        className="
          mt-8
          lg:mt-10
          grid
          gap-4
          sm:grid-cols-2
          lg:gap-5
        "
      >
        <BenefitItem>
          Verified Dental Clinics
        </BenefitItem>

        <BenefitItem>
          Free Treatment Plan
        </BenefitItem>

        <BenefitItem>
          Travel Assistance
        </BenefitItem>

        <BenefitItem>
          Dedicated Care Coordinator
        </BenefitItem>
      </div>

      {/* Trust */}

      <div className="mt-8 lg:mt-10">
        <TrustBadge />
      </div>

      {/* Buttons */}

      <div
        className="
          mt-8
          lg:mt-10
          flex
          flex-col
          sm:flex-row
          gap-4
        "
      >
        <Button
          to="/contact"
          size="lg"
          rightIcon={<ArrowRight className="h-5 w-5" />}
        >
          Get Free Treatment Plan
        </Button>

        <Button
          to="/contact"
          variant="secondary"
          size="lg"
          leftIcon={
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <CalendarDays className="h-4 w-4" />
            </span>
          }
        >
          Book Consultation
        </Button>
      </div>
    </>
  );
}
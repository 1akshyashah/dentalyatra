import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";

import {
  SectionTitle,
  PremiumCard,
  Button,
} from "../common";

const benefits = [
  "Verified Dental Clinics",
  "Free Treatment Planning",
  "Dedicated Care Coordinator",
  "Travel & Accommodation Assistance",
];

export default function FAQContent() {
  return (
    <div>

      <SectionTitle
        badge="FREQUENTLY ASKED QUESTIONS"
        align="left"
        maxWidth="max-w-none"
        title={
          <>
            Everything You Need

            <span className="hidden lg:block">
              <br />
            </span>

            <span className="text-primary-600">
              Before You Travel
            </span>
          </>
        }
        description="Planning dental treatment abroad naturally raises questions. DentalYaatra makes every step simple, transparent and stress-free—from your first consultation until you return home smiling."
      />

      {/* Benefits */}

      <div className="mt-8 lg:mt-10 space-y-5">

        {benefits.map((item) => (

          <div
            key={item}
            className="flex items-start gap-4"
          >

            <CheckCircle2
              className="
                mt-1
                h-6
                w-6
                shrink-0
                text-primary-600
              "
            />

            <span
              className="
                text-base
                lg:text-lg
                font-medium
                leading-7
                text-slate-700
              "
            >
              {item}
            </span>

          </div>

        ))}

      </div>

      {/* Trust Card */}

      <PremiumCard
        className="
          mt-10
          lg:mt-12
          p-6
          lg:p-8
          bg-gradient-to-br
          from-primary-50
          to-white
        "
      >

        {/* Stars */}

        <div className="flex gap-1 text-amber-400">

          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-current"
            />
          ))}

        </div>

        {/* Title */}

        <h3
          className="
            mt-5
            text-xl
            lg:text-2xl
            font-bold
            text-slate-900
          "
        >
          Still Have Questions?
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            text-base
            leading-7
            text-slate-600
          "
        >
          Talk directly with one of our patient coordinators.
          We'll guide you before, during and after your dental
          journey—from treatment planning to your safe return
          home.
        </p>

        {/* CTA */}

        <Button
          to="/contact"
          size="lg"
          className="mt-8"
          leftIcon={<MessageCircle className="h-5 w-5" />}
          rightIcon={<ArrowRight className="h-5 w-5" />}
        >
          Chat on WhatsApp
        </Button>

      </PremiumCard>

    </div>
  );
}
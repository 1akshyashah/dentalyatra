import { ArrowRight } from "lucide-react";

import {
  Section,
  SectionTitle,
  Button,
} from "../common";

import ProcessStep from "./ProcessStep";
import { processSteps } from "./processData";

export default function Process() {
  return (
    <Section
      variant="compact"
      className="
        relative
        overflow-hidden
        bg-white
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary-50 blur-3xl opacity-70" />

        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-teal-50 blur-3xl opacity-60" />

      </div>

      <div className="relative z-10">

        <SectionTitle
          badge="PATIENT JOURNEY"
          title={
            <>
              Your Treatment Journey
              <br />
              <span className="text-primary-600">
                Made Simple
              </span>
            </>
          }
          description="From your first consultation to your final follow-up, DentalYaatra coordinates every stage of your dental journey with complete transparency and dedicated support."
          maxWidth="max-w-4xl"
        />

        {/* Process Grid */}

        <div className="relative mt-16">

          {/* Connector Line */}

          <div className="absolute left-0 right-0 top-16 hidden xl:block">

            <div className="mx-20 h-px bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100" />

          </div>

          <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-5">

            {processSteps.map((step) => (
              <ProcessStep
                key={step.number}
                {...step}
              />
            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 flex justify-center">

          <Button
            to="/patient-guide"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="h-5 w-5" />}
          >
            Explore Patient Guide
          </Button>

        </div>

      </div>

    </Section>
  );
}
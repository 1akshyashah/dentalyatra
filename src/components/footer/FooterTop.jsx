import { ArrowRight, CalendarDays } from "lucide-react";
import { Button, Container } from "../common";

export default function FooterTop() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-slate-950 to-slate-950" />

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-primary-600/10
          blur-[100px]

          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[120px]
        "
      />

      <Container
        className="
          relative
          py-16
          md:py-20
          lg:py-24
        "
      >

        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-primary-500/30
              bg-primary-500/10
              px-4
              py-2
              sm:px-5
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-primary-300
            "
          >
            Start Your Dental Journey
          </span>

          {/* Heading */}

          <h2
            className="
              mt-6
              lg:mt-8
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              leading-tight
              tracking-[-0.02em]
              text-white
            "
          >
            Ready To Begin Your

            <span className="block text-teal-300">
              Smile Journey?
            </span>

          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              lg:mt-8
              max-w-2xl
              text-base
              lg:text-lg
              leading-7
              lg:leading-8
              text-slate-300
            "
          >
            Receive a personalized treatment plan from India's
            leading dental specialists. Transparent pricing,
            verified clinics and complete travel assistance—
            all in one place.
          </p>

          {/* CTA Buttons */}

          <div
            className="
              mt-10
              lg:mt-12

              flex
              flex-col
              sm:flex-row

              justify-center
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

          {/* Trust Line */}

          <div
            className="
              mt-10
              lg:mt-12

              flex
              flex-wrap

              items-center
              justify-center

              gap-x-6
              gap-y-3

              text-sm
              text-slate-400
            "
          >
            <span>✓ Verified Clinics</span>
            <span>✓ Transparent Pricing</span>
            <span>✓ Dedicated Coordinator</span>
            <span>✓ Personalized Treatment Plans</span>
          </div>

        </div>

      </Container>

    </section>
  );
}
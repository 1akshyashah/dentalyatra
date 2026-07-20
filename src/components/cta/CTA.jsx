import { Container, Section } from "../common";
import CTAContent from "./CTAContent";
import CTAImage from "./CTAImage";

export default function CTA() {
  return (
    <Section
      variant="cta"
      container={false}
      divider={false}
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-t-[32px]
          md:rounded-t-[40px]
          lg:rounded-t-[56px]
          bg-gradient-to-br
          from-primary-800
          via-primary-700
          to-slate-900
          shadow-[0_35px_90px_rgba(15,23,42,.18)]
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            -right-24
            -top-24
            h-64
            w-64
            lg:-right-40
            lg:-top-40
            lg:h-[520px]
            lg:w-[520px]
            rounded-full
            bg-cyan-300/10
            blur-[100px]
            lg:blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-20
            bottom-0
            h-52
            w-52
            lg:-left-32
            lg:h-[350px]
            lg:w-[350px]
            rounded-full
            bg-white/5
            blur-[90px]
            lg:blur-[120px]
          "
        />
<Container
  size="default"
  className="
    relative
    z-10
    pt-16
    pb-16
    md:pt-20
    md:pb-20
    lg:pt-24
    lg:pb-24
  "
>
          <div
            className="
              flex
              flex-col
              items-center
              gap-12
              lg:flex-row
              lg:gap-16
            "
          >
            <div className="w-full lg:w-[52%]">
              <CTAContent />
            </div>

            <div className="hidden lg:block lg:w-[48%]">
              <CTAImage />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
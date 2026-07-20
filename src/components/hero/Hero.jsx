import { Container } from "../common";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
  className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-white
    via-primary-50/30
    to-white
    animate-fadeIn
  "
>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-100/30 blur-3xl" />

  <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-teal-100/25 blur-3xl" />

  <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-50 blur-3xl" />

</div>
<div className="relative z-10">
 
<Container
  className="
    flex
    flex-col
    lg:flex-row
    items-center
    gap-10
    lg:gap-16
    xl:gap-20
    pt-4
    pb-10
    lg:pt-8
    lg:pb-16
  "
>

       <div className="w-full lg:w-[52%]">
          <HeroContent />
        </div>

        <div
  className="
    mt-10
    flex
    w-full
    justify-center
    lg:mt-0
    lg:w-[48%]
    lg:justify-end
  "
>
          <HeroImage />
        </div>

      </Container>
      </div>
    </section>
  );
}
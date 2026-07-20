import { Badge } from "../common";
import HeroButtons from "./HeroButtons";
import HeroSupport from "./HeroSupport";

export default function HeroContent() {
  return (
   <>
  <div className="mb-7">
    <Badge>
      YOUR DENTAL JOURNEY, SIMPLIFIED
    </Badge>
  </div>

  <h1
    className="
      max-w-[680px]
     text-[44px]
sm:text-[52px]
lg:text-[58px]
xl:text-[64px]
2xl:text-[70px]
      font-extrabold
     leading-[0.98]
      tracking-[-0.03em]
      text-slate-900
    "
  >
    World-Class Dental Care

    <span className="block text-primary-600">
      Beyond Borders.
    </span>
  </h1>

  <p
    className="
      mt-8
      max-w-[560px]
      text-base
sm:text-lg
lg:text-[21px]
leading-8
      text-slate-600
    "
  >
    Travel to India with confidence for world-class dental care at internationally accredited clinics. From treatment planning and travel arrangements to accommodation and dedicated care, DentalYaatra manages every step of your journey—so you can focus on your smile.
  </p>

  <div className="mt-10">
    <HeroButtons />
  </div>

  <div className="mt-10">
    <HeroSupport />
  </div>
</>
  );
}
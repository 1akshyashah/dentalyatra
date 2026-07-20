import { CheckCircle2 } from "lucide-react";

const supportItems = [
  "Personalized Treatment Planning",
  "Carefully Selected Dental Clinics",
  "Travel & Accommodation Guidance",
  "Dedicated Care Coordinator",
];

export default function HeroSupport() {
  return (
    <div
      className="
        mt-10
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        sm:gap-5
        lg:mt-12
        lg:gap-6
      "
    >
      {supportItems.map((item) => (
        <div
          key={item}
          className="
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-slate-100
            bg-white/70
            px-4
            py-3
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-primary-100
            hover:shadow-md
          "
        >
          <CheckCircle2
            className="
              mt-0.5
              h-5
              w-5
              shrink-0
              text-teal-500
            "
          />

          <p
            className="
              text-sm
              font-medium
              leading-6
              text-slate-700
              lg:text-[15px]
            "
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
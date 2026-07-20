import { Plus } from "lucide-react";

export default function FAQItem({
  question,
  answer,
  open,
  onClick,
}) {
  return (
    <div className="py-6 lg:py-7 first:pt-0 last:pb-0">

      <button
        onClick={onClick}
        aria-expanded={open}
        className="
          group
          flex
          w-full
          items-center
          justify-between
          gap-4
          lg:gap-6
          text-left
        "
      >
        <h3
          className={`
            text-lg
            sm:text-xl
            lg:text-[22px]
            font-bold
            leading-snug
            transition-colors
            duration-300
            ${
              open
                ? "text-primary-700"
                : "text-slate-900 group-hover:text-primary-600"
            }
          `}
        >
          {question}
        </h3>

        <div
          className="
            flex
            h-10
            w-10
            lg:h-11
            lg:w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-primary-100
            bg-primary-50
            transition-all
            duration-300
            group-hover:bg-primary-100
          "
        >
          <Plus
            className={`
              h-5
              w-5
              text-primary-600
              transition-transform
              duration-300
              ${
                open ? "rotate-45" : ""
              }
            `}
          />
        </div>
      </button>

      <div
        className={`
          grid
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? "mt-5 grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">

          <p
            className="
              max-w-full
              lg:max-w-[92%]
              text-base
              lg:text-[17px]
              leading-7
              lg:leading-8
              text-slate-600
            "
          >
            {answer}
          </p>

        </div>
      </div>

    </div>
  );
}
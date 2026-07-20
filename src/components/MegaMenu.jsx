import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function MegaMenu({ isOpen, openMenu, closeMenu }) {

  const treatmentGroups = [

    {
      title: "Dental Implants",
      slug: "dental-implants",
      items: [
        "Single Dental Implant",
        "Multiple Dental Implants",
        "All-on-4",
        "All-on-6",
        "Immediate Loading",
        "Bone Grafting",
      ],
    },

    {
      title: "Cosmetic Dentistry",
      slug: "cosmetic-dentistry",
      items: [
        "Veneers",
        "Teeth Whitening",
        "Smile Makeover",
        "Gum Contouring",
        "Dental Bonding",
      ],
    },

    {
      title: "Orthodontics",
      slug: "orthodontics",
      items: [
        "Invisalign",
        "Metal Braces",
        "Ceramic Braces",
        "Retainers",
      ],
    },

    {
      title: "Restorative Dentistry",
      slug: "restorative-dentistry",
      items: [
        "Crowns",
        "Bridges",
        "Dentures",
        "Root Canal",
      ],
    },

    {
      title: "General Dentistry",
      slug: "general-dentistry",
      items: [
        "Dental Cleaning",
        "Dental Fillings",
        "Wisdom Tooth Removal",
        "Pediatric Dentistry",
      ],
    },

    {
      title: "Oral Surgery",
      slug: "oral-surgery",
      items: [
        "Tooth Extraction",
        "Impacted Wisdom Tooth",
        "Jaw Surgery",
      ],
    },

  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (

<div
  onMouseEnter={openMenu}
  onMouseLeave={closeMenu}
  className={`
    absolute
    left-0
    top-full
    mt-1
    w-[720px]
    -translate-x-0
    overflow-hidden
    rounded-3xl
    border
    border-slate-200
    bg-white/95
    backdrop-blur-xl
    shadow-[0_35px_80px_rgba(15,23,42,.18)]
    origin-top
    transition-all
    duration-200
    ${
      isOpen
        ? "opacity-100 visible translate-y-0 scale-100"
        : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
    }
  `}
>

      <div className="grid grid-cols-[280px_1fr]">

        {/* LEFT */}

        <div className="border-r border-slate-100 bg-slate-50/60 p-4">

          {treatmentGroups.map((group, index) => (

            <button

              key={group.slug}

              onMouseEnter={() => setActiveCategory(index)}

              className={`

              mb-2

              flex

              w-full

              items-center

              justify-between

              rounded-2xl

              px-4

              py-3

              text-left

              text-[15px]

              font-medium

              transition-all

              duration-300

              ${

                activeCategory === index

                  ? "bg-primary-600 text-white shadow-lg"

                  : "text-slate-700 hover:bg-white hover:text-primary-600"

              }

              `}
            >

              {group.title}

              <ChevronRight className="h-4 w-4" />

            </button>

          ))}

        </div>

        {/* RIGHT */}

        <div className="p-6">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">

            {treatmentGroups[activeCategory].title}

          </p>

          <div className="space-y-2">            {treatmentGroups[activeCategory].items.map((item) => (

              <Link
                key={item}
                to={`/treatments/${item
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/\s+/g, "-")}`}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-4
                  py-3
                  text-[15px]
                  text-slate-700
                  transition-all
                  duration-300
                  hover:bg-primary-50
                  hover:text-primary-700
                "
              >

                <span>{item}</span>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                />

              </Link>

            ))}

          </div>

          {/* Bottom CTA */}

          <div className="mt-8 border-t border-slate-100 pt-6">

            <Link
              to="/treatments"
              className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                bg-gradient-to-r
                from-primary-600
                to-teal-500
                px-5
                py-4
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
              "
            >

              <div>

                <p className="text-sm font-semibold">
                  View All Treatments
                </p>

                <p className="mt-1 text-xs text-white/80">
                  Explore our complete dental services
                </p>

              </div>

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}
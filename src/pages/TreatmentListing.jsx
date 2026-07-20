import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
   ArrowRight,
  MessageCircle,
  Stethoscope,
  Users,
  Star,
} from "lucide-react";

import Button from "../components/common/Button";
import { treatments } from "../data/treatments";

export default function TreatmentListing() {
const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
  "All",
  ...new Set(treatments.map((t) => t.category)),
];

const filteredTreatments =
  activeCategory === "All"
    ? treatments
    : treatments.filter(
        (treatment) =>
          treatment.category === activeCategory
      );
  return (
    <>
   

     {/* ======================================================
    HERO
======================================================= */}

<section
  className="
    relative
    overflow-hidden
    border-b
    border-slate-200
    bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_42%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_45%),linear-gradient(to_bottom,#f8fbff_0%,#ffffff_70%,#ffffff_100%)]
  "
><div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div
    className="
      absolute
      -top-24
      -left-20
      h-72
      w-72
      rounded-full
      bg-primary-200/25
      blur-3xl"
  />

  <div
    className="
       absolute
      top-8
      -right-24
      h-80
      w-80
      rounded-full
      bg-teal-200/20
      blur-3xl
    "
  />

</div>
 <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-10 lg:py-8"
    >

      {/* Badge */}

     <span
  className="
    inline-flex
    rounded-full
    border
    border-white/70
    bg-white/80
    backdrop-blur-md
    px-4
    py-1.5
    text-xs
    font-semibold
    uppercase
    tracking-wider
    text-primary-700
    shadow-sm
  "
>
  Premium Dental Tourism
</span>
      {/* Heading */}

<h1
  className="
    mt-4
    text-[2.6rem]
    font-extrabold
    tracking-[-0.03em]
    leading-[1.05]
    text-slate-900
    lg:text-[3.4rem]
  "
>
        Dental Treatments
      </h1>

      {/* Description */}

      <p
        className="
          mt-4
          max-w-2xl
          text-lg
          leading-7
          text-slate-600
        "
      >
        Explore advanced dental treatments performed by
        experienced specialists using modern technology,
        transparent pricing and personalised care.
      </p>

      {/* Quick Stats */}

      <div
        className="
          mt-6
          flex
          flex-wrap
          items-center
          gap-6
          text-sm
          font-medium
          text-slate-600
        "
      >

       <span className="flex items-center gap-2">
  <Stethoscope className="h-4 w-4 text-primary-600" />
  <strong className="text-slate-900">50+</strong>
  Treatments
</span>

<span className="flex items-center gap-2">
  <Users className="h-4 w-4 text-primary-600" />
  <strong className="text-slate-900">5000+</strong>
  Happy Patients
</span>

<span className="flex items-center gap-2">
  <Star className="h-4 w-4 fill-primary-600 text-primary-600" />
  <strong className="text-slate-900">4.9</strong>
  Patient Rating
</span>
      </div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      {/* Filters */}
<div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Browse by Treatment Category</div>
      <div className="mt-8 flex flex-wrap gap-3">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              rounded-full
              px-5
              py-2
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-lg ring-2 ring-primary-100"
                  : "border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 hover:border-primary-600 hover:text-primary-600 hover:shadow-md"
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>

    </motion.div>

  </div>
</section>


      {/* ======================================================
          GRID
      ======================================================= */}

  <section className="pt-10 pb-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className="
              grid
              gap-10
              md:grid-cols-2
              xl:grid-cols-3
            "
          >            {filteredTreatments
  .sort((a, b) => a.order - b.order)
  .map((treatment, index) => {
    const duration = treatment.facts?.find(
      (fact) => fact.label === "Duration"
    );

    const success = treatment.facts?.find(
      (fact) =>
        fact.label === "Success Rate" ||
        fact.label === "Results"
    );

    return (
      <Link
        key={treatment.slug}
        to={`/treatments/${treatment.slug}`}
        className="group block h-full"
      >
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{ y: -8 }}
          className="
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200
            bg-white
            shadow-sm
            transition-all
            duration-300
           hover:border-primary-300
hover:shadow-xl
            
          "
        >
          {/* IMAGE */}

          <div className="overflow-hidden">

            <img
              src={treatment.image}
              alt={treatment.title}
              className="
                aspect-[16/10]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
                group-hover:brightness-105
              "
            />

          </div>

          {/* CONTENT */}

          <div className="flex flex-1 flex-col p-7">

            {/* CATEGORY */}

            <span
              className="
                inline-flex
                w-fit
                rounded-full
                bg-primary-100
                px-3
                py-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-primary-700
                transition-colors
                group-hover:bg-primary-600
                group-hover:text-white
              "
            >
              {treatment.category}
            </span>

            {/* TITLE */}

            <h2
              className="
                mt-5
                text-xl lg:text-[22px]
                font-bold
                text-slate-900
                transition-colors
                group-hover:text-primary-700
              "
            >
              {treatment.title}
            </h2>

            {/* SUBTITLE */}

            <p className="mt-2 font-semibold text-primary-600">
              {treatment.subtitle}
            </p>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                line-clamp-3
                leading-7
                text-slate-600
              "
            >
              {treatment.excerpt}
            </p>

            {/* DIVIDER */}

            <div className="my-6 h-px bg-slate-100" />

            {/* QUICK FACTS */}

          <div className="flex items-center justify-between gap-4 text-sm">

              {duration && (
                <div className="flex items-center gap-2">

                  <span className="text-lg">🕒</span>

                  <span className="font-medium text-slate-700">
                    {duration.value}
                  </span>

                </div>
              )}

              {success && (
                <div className="flex items-center gap-2">

                  <span className="text-lg">⭐</span>

                  <span className="font-medium text-slate-700">
                    {success.value}
                  </span>

                </div>
              )}

            </div>

            {/* BUTTON */}

            <div className="mt-8">

              <Button
                variant="outline"
                rightIcon={
                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                }
              >
                View Treatment
              </Button>

            </div>

          </div>

        </motion.article>
      </Link>
    );
  })}

          </div>

        </div>

      </section>

{/* ======================================================
          CTA
      ======================================================= */}

<section className="pb-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div
      className="
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-r
        from-primary-600
        via-primary-700
        to-primary-800
        px-8
        py-10
        text-center
        text-white
        shadow-xl
      "
    >
      <h2 className="text-2xl font-bold lg:text-3xl">
        Ready to Begin Your Dental Journey?
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-primary-100">
        Get a personalised treatment plan, transparent pricing,
        and complete travel assistance from our experienced
        dental care coordinators.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <Button
          size="lg"
          rightIcon={<ArrowRight className="h-4 w-4" />}
        >
          Get Free Treatment Plan
        </Button>

        <Button
          size="lg"
          variant="outline"
          rightIcon={<MessageCircle className="h-4 w-4" />}
          className="border-white text-white hover:bg-white hover:text-primary-700"
        >
          Talk to an Expert
        </Button>

      </div>

    </div>

  </div>
</section>

   


    </>
  );
}
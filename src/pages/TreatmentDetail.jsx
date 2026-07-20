import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CalendarDays,
  Clock3,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import Button from "../components/common/Button";
import MarkdownContent from "../components/common/MarkdownContent";

import { getTreatmentBySlug } from "../data/treatments";

import SEO from "../components/seo/SEO";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import MedicalProcedureSchema from "../components/seo/MedicalProcedureSchema";

export default function TreatmentDetail() {
  const { slug } = useParams();

  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return (
      <section className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Treatment Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The treatment you're looking for doesn't exist.
          </p>

          <Link
            to="/treatments"
            className="mt-8 inline-flex font-semibold text-primary-600 hover:text-primary-700"
          >
            ← Back to Treatments
          </Link>
        </div>
      </section>
    );
  }

  const seo = {
    title: `${treatment.title} | DentalYaatra`,
    description: treatment.excerpt,
    canonical: `/treatments/${treatment.slug}`,
    keywords: `${treatment.title}, dental treatment India, dental tourism India`,
  };

  const breadcrumbItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Treatments",
      url: "/treatments",
    },
    {
      name: treatment.title,
      url: `/treatments/${treatment.slug}`,
    },
  ];

  const markdownContent =
    treatment.content.replace(/^# .*\n/, "");

  return (
    <>
      <SEO {...seo} />

      <BreadcrumbSchema items={breadcrumbItems} />

      <MedicalProcedureSchema treatment={treatment} />
      {/* ======================================================
          HERO
      ======================================================= */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-slate-200
          bg-gradient-to-br
          from-white
          via-primary-50/40
          to-cyan-50/40
        "
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[1.15fr_.85fr]
            "
          >

            {/* LEFT */}

            <div>

              {/* Breadcrumb */}

              <nav className="mb-6 flex items-center gap-2 text-sm">

                <Link
                  to="/"
                  className="text-slate-500 hover:text-primary-600"
                >
                  Home
                </Link>

                <ChevronRight className="h-4 w-4 text-slate-400" />

                <Link
                  to="/treatments"
                  className="text-slate-500 hover:text-primary-600"
                >
                  Treatments
                </Link>

                <ChevronRight className="h-4 w-4 text-slate-400" />

                <span className="font-medium text-slate-900">
                  {treatment.title}
                </span>

              </nav>

              {/* Category */}

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-primary-100
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-primary-700
                "
              >
                {treatment.category}
              </span>

              {/* Title */}

              <h1
                className="
                  mt-5
                  text-4xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-slate-900
                  lg:text-5xl
                "
              >
                {treatment.title}
              </h1>

              {/* Subtitle */}

              <p
                className="
                  mt-4
                  text-xl
                  font-semibold
                  text-primary-600
                "
              >
                {treatment.subtitle}
              </p>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                {treatment.excerpt}
              </p>

              {/* CTA */}

              <div className="mt-8 flex flex-wrap gap-4">

                <Button
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Get Free Treatment Plan
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={<MessageCircle className="h-4 w-4" />}
                >
                  Talk to an Expert
                </Button>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/60
                  bg-white
                  shadow-[0_25px_60px_rgba(15,23,42,.12)]
                "
              >

                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="
                    aspect-[4/3]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* ======================================================
          QUICK FACTS
      ======================================================= */}

      <section className="-mt-8 relative z-10 pb-8">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className="
              grid
              gap-5
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-xl
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >

            {treatment.facts?.map((fact) => {

              const Icon = fact.icon;

              return (

                <div
                  key={fact.label}
                  className="
                    rounded-2xl
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-primary-50
                    hover:shadow-md
                  "
                >

                  <div
                    className="
                      mb-4
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary-100
                    "
                  >
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {fact.label}
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    {fact.value}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>
            {/* ======================================================
          CONTENT
      ======================================================= */}

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <MarkdownContent>
              {markdownContent}
            </MarkdownContent>
          </motion.div>

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
              py-14
              text-center
              text-white
              shadow-xl
            "
          >

            <h2 className="text-3xl font-bold lg:text-4xl">
              Ready to Transform Your Smile?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-primary-100">
              Connect with our treatment coordinators for a personalised
              treatment plan, transparent guidance and complete travel
              assistance for your dental journey.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Button
                size="lg"
                variant="secondary"
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

      {/* ======================================================
          GLOBAL CTA
      ======================================================= */}

 

    </>
  );
}
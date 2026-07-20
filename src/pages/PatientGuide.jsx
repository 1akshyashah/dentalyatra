import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Plane,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import Button from "../components/common/Button";

export default function PatientGuide() {

  return (
    <>

      {/* ===========================================
          HERO
      =========================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-slate-200
          bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_42%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_45%),linear-gradient(to_bottom,#f8fbff_0%,#ffffff_70%,#ffffff_100%)]
        "
      >

        {/* Background Glow */}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="
              absolute
              -left-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-primary-200/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              right-0
              top-10
              h-80
              w-80
              rounded-full
              bg-teal-200/20
              blur-3xl
            "
          />

        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="text-center"
          >

            {/* Badge */}

            <span
              className="
                inline-flex
                rounded-full
                border
                border-white/70
                bg-white/80
                px-4
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary-700
                backdrop-blur-md
                shadow-sm
              "
            >
              International Patient Guide
            </span>

            {/* Heading */}

            <h1
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-4xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-900
                lg:text-6xl
              "
            >
              Your Journey to a Healthy,
              <span className="text-primary-600">
                {" "}Confident Smile
              </span>
              {" "}Starts Here
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              From your first consultation to your safe return
              home, DentalYaatra guides you through every step
              with personalised treatment planning, travel
              assistance, trusted dental experts and dedicated
              patient support.
            </p>

            {/* Trust Points */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-6
                text-sm
                font-medium
                text-slate-700
              "
            >

              <span className="flex items-center gap-2">

                <ShieldCheck className="h-5 w-5 text-primary-600" />

                Free Online Consultation

              </span>

              <span className="flex items-center gap-2">

                <HeartHandshake className="h-5 w-5 text-primary-600" />

                Dedicated Patient Coordinator

              </span>

              <span className="flex items-center gap-2">

                <Plane className="h-5 w-5 text-primary-600" />

                Complete Travel Assistance

              </span>

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Button
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Get Your Free Treatment Plan
              </Button>

              <Button
                size="lg"
                variant="outline"
                rightIcon={<MessageCircle className="h-4 w-4" />}
              >
                Talk to an Expert
              </Button>

            </div>

          </motion.div>

        </div>

      </section>
            {/* ===========================================
          WHY CHOOSE DENTALYAATRA
      =========================================== */}

      <section className="py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}

          <div className="mx-auto max-w-3xl text-center">

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
                tracking-[0.18em]
                text-primary-700
              "
            >
              Why DentalYaatra
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                lg:text-5xl
              "
            >
              Everything You Need,
              <span className="text-primary-600">
                {" "}All in One Place
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              We simplify every aspect of your dental journey,
              making international treatment comfortable,
              transparent and completely stress-free.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                icon: ShieldCheck,
                title: "Trusted Dental Experts",
                text:
                  "Partner clinics equipped with modern technology and experienced specialists delivering high-quality dental care.",
              },
              {
                icon: HeartHandshake,
                title: "Dedicated Coordinator",
                text:
                  "A single point of contact to guide you before, during and after your treatment journey.",
              },
              {
                icon: Plane,
                title: "Travel Assistance",
                text:
                  "Support with travel planning, airport transfers and accommodation recommendations for a hassle-free visit.",
              },
              {
                icon: MessageCircle,
                title: "Transparent Communication",
                text:
                  "Clear treatment plans, pricing and ongoing support so you always know what to expect.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .5 }}
                  whileHover={{ y: -8 }}
                  className="
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-primary-200
                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary-100
                    "
                  >
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-slate-600
                    "
                  >
                    {item.text}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>
            {/* ===========================================
          YOUR JOURNEY
      =========================================== */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

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
                tracking-[0.18em]
                text-primary-700
              "
            >
              Your Journey
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                lg:text-5xl
              "
            >
              Your Journey to a
              <span className="text-primary-600">
                {" "}Healthy Smile
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              From your first enquiry until you safely return
              home, our team stays with you throughout your
              treatment journey.
            </p>

          </div>

          {/* Timeline */}

          <div className="mx-auto mt-20 max-w-5xl">

            {[
              {
                step: "01",
                title: "Free Online Consultation",
                text:
                  "Share your dental concerns, reports or X-rays. Our team reviews your case and connects you with the most suitable dental specialist.",
              },

              {
                step: "02",
                title: "Personalised Treatment Plan",
                text:
                  "Receive a detailed treatment plan, estimated costs, treatment duration and travel recommendations before making any decisions.",
              },

              {
                step: "03",
                title: "Travel Planning",
                text:
                  "We assist you with travel guidance, accommodation options and scheduling your appointments for a smooth experience.",
              },

              {
                step: "04",
                title: "Arrival in India",
                text:
                  "Upon arrival, you'll be welcomed and guided to your accommodation and dental clinic according to your treatment schedule.",
              },

              {
                step: "05",
                title: "Treatment & Recovery",
                text:
                  "Receive high-quality dental care using modern technology while our team remains available throughout your treatment and recovery.",
              },

              {
                step: "06",
                title: "Return Home with Confidence",
                text:
                  "Before you travel back, you'll receive post-treatment guidance, reports and continued support whenever you need it.",
              },

            ].map((item, index) => (

              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                className="relative flex gap-8 pb-12"
              >

                {/* Left */}

                <div className="flex flex-col items-center">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-primary-600
                      text-lg
                      font-bold
                      text-white
                      shadow-lg
                    "
                  >
                    {item.step}
                  </div>

                  {index !== 5 && (
                    <div
                      className="
                        mt-3
                        h-full
                        w-px
                        bg-gradient-to-b
                        from-primary-300
                        to-slate-200
                      "
                    />
                  )}

                </div>

                {/* Right */}

                <div
                  className="
                    flex-1
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary-200
                    hover:shadow-lg
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-8
                      text-slate-600
                    "
                  >
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* ===========================================
          EVERYTHING WE HELP YOU WITH
      =========================================== */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

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
                tracking-[0.18em]
                text-primary-700
              "
            >
              Complete Support
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                lg:text-5xl" >
              Everything We Help
              <span className="text-primary-600">
                {" "}You With
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Our team coordinates every important detail so you
              can focus entirely on your treatment and recovery.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                icon: "🛂",
                title: "Visa Guidance",
                text:
                  "Advice on medical visas, invitation letters and travel documentation wherever applicable.",
              },

              {
                icon: "✈️",
                title: "Travel Planning",
                text:
                  "Help with travel schedules, appointment planning and recommendations before you fly.",
              },

              {
                icon: "🏨",
                title: "Accommodation",
                text:
                  "Hotel and serviced apartment recommendations close to your treating clinic.",
              },

              {
                icon: "🚖",
                title: "Airport Transfers",
                text:
                  "Convenient airport pickup and local transportation guidance for a comfortable arrival.",
              },

              {
                icon: "💳",
                title: "Payments",
                text:
                  "Transparent estimates, payment guidance and complete clarity before treatment begins.",
              },

              {
                icon: "💬",
                title: "Ongoing Support",
                text:
                  "Our coordinators remain available before, during and after your treatment whenever you need assistance.",
              },

            ].map((item) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45 }}
                whileHover={{ y: -6 }}
                className="
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-primary-200
                  hover:shadow-xl
                "
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-600
                  "
                >
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* ===========================================
          FREQUENTLY ASKED QUESTIONS
      =========================================== */}
      {/* ===========================================
          FREQUENTLY ASKED QUESTIONS
      =========================================== */}

      <section className="pb-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

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
                tracking-[0.18em]
                text-primary-700
              "
            >
              FAQs
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                lg:text-5xl"
              >
              Frequently Asked Questions
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Answers to some of the most common questions from
              international patients planning treatment in India.
            </p>

          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">

            {[
              {
                question:
                  "Can I receive a treatment plan before travelling?",
                answer:
                  "Yes. After reviewing your reports, X-rays or photographs, our specialists prepare a personalised treatment plan with an estimated timeline and cost.",
              },

              {
                question:
                  "How many days should I stay in India?",
                answer:
                  "The duration depends on the treatment. Simple procedures may require only a few days, while implants or full-mouth rehabilitation may need a longer stay or multiple visits.",
              },

              {
                question:
                  "Will someone assist me after I arrive?",
                answer:
                  "Yes. Our team helps coordinate your arrival, appointments and provides ongoing support throughout your treatment journey.",
              },

              {
                question:
                  "Can a family member travel with me?",
                answer:
                  "Absolutely. Many patients travel with a companion, and we can recommend accommodation suitable for both of you.",
              },

              {
                question:
                  "Do you help with accommodation?",
                answer:
                  "Yes. We recommend comfortable hotels and serviced apartments close to your treating clinic based on your preferences and budget.",
              },

              {
                question:
                  "What payment methods do you accept?",
                answer:
                  "We provide transparent payment guidance before treatment. Available payment methods will be shared during your treatment planning process.",
              },

            ].map((faq) => (

              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45 }}
                className="
                  rounded-[24px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-primary-200
                  hover:shadow-lg
                "
              >

                <h3
                  className="
                    text-lg
                    font-bold
                    leading-7
                    text-slate-900
                  "
                >
                  {faq.question}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-600
                  "
                >
                  {faq.answer}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            {/* ===========================================
          CTA
      =========================================== */}

      <section className="pb-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

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

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-white/15
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  backdrop-blur-sm
                "
              >
                Let's Begin
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  lg:text-4xl
                "
              >
                Ready to Begin Your Dental Journey?
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-lg
                  leading-8
                  text-primary-100
                "
              >
                Whether you're exploring treatment options or
                ready to plan your visit, our team is here to
                guide you every step of the way—from your first
                consultation to your confident new smile.
              </p>

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  justify-center
                  gap-4
                "
              >

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
                  className="
                    border-white
                    text-white
                    hover:bg-white
                    hover:text-primary-700
                  "
                >
                  Talk to an Expert
                </Button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </>

  );

}
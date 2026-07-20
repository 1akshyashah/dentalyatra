import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Top Fade */}

  

      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid gap-12 lg:grid-cols-5">

            {/* Left */}

            <div className="lg:col-span-2">

              <Link
                to="/"
                className="text-4xl font-extrabold tracking-tight"
              >
                <span className="text-white">Dental</span>
                <span className="text-primary-400">Yaatra</span>
              </Link>

              <p className="mt-6 max-w-md leading-7 text-slate-400">
                Connecting international patients with India's leading
                dental specialists through verified clinics, transparent
                treatment plans and dedicated travel assistance.
              </p>

              <div className="mt-8 space-y-4">

                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-4 transition hover:border-primary-500 hover:bg-slate-800"
                >
                  <Phone className="h-5 w-5 text-primary-400" />
                  <span>+91 12345 67890</span>
                </a>

                <a
                  href="mailto:hello@dentalyaatra.com"
                  className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-4 transition hover:border-primary-500 hover:bg-slate-800"
                >
                  <Mail className="h-5 w-5 text-primary-400" />
                  <span>hello@dentalyaatra.com</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-4 transition hover:border-primary-500 hover:bg-slate-800"
                >
                  <MessageCircle className="h-5 w-5 text-primary-400" />
                  <span>WhatsApp Consultation</span>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-4">

                  <MapPin className="h-5 w-5 text-primary-400" />

                  <span>New Delhi, India</span>

                </div>

              </div>

            </div>

            {/* Treatments */}

            <div>

              <h3 className="text-xs uppercase tracking-[0.25em] text-primary-300 font-semibold">

                Treatments

              </h3>

              <ul className="mt-6 space-y-4">

                {[
                  "Dental Implants",
                  "Smile Makeover",
                  "Root Canal",
                  "Crowns & Bridges",
                  "Veneers",
                  "Clear Aligners",
                ].map((item) => (

                  <li key={item}>

                    <Link
                      to="/treatments"
                      className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      {item}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Patient Guide */}

            <div>

              <h3 className="text-xs uppercase tracking-[0.25em] text-primary-300 font-semibold">

                Patient Guide

              </h3>

              <ul className="mt-6 space-y-4">

                {[
                  "Visa Assistance",
                  "Accommodation",
                  "Airport Pickup",
                  "Recovery Guide",
                  "FAQs",
                ].map((item) => (

                  <li key={item}>

                    <Link
                      to="/patient-guide"
                      className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      {item}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Company */}

            <div>

              <h3 className="text-xs uppercase tracking-[0.25em] text-primary-300 font-semibold">

                Company

              </h3>

              <ul className="mt-6 space-y-4">

                {[
                  ["About Us", "/about"],
                  ["Blogs", "/blogs"],
                  ["Contact", "/contact"],
                  ["Privacy Policy", "/privacy-policy"],
                  ["Terms & Conditions", "/terms"],
                ].map(([title, url]) => (

                  <li key={title}>

                    <Link
                      to={url}
                      className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                      {title}

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          </div>

          {/* Divider */}

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

          {/* Bottom */}

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-slate-500">

                © {new Date().getFullYear()} DentalYaatra. All Rights Reserved.

              </p>

              <p className="mt-2 text-sm text-slate-500">

                Crafted with ❤️ in India for patients worldwide.

              </p>

            </div>

            <div className="flex gap-4">

              {[
                Instagram,
                Facebook,
                Linkedin,
                Youtube,
              ].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-800
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary-500
                    hover:bg-primary-600
                    hover:text-white
                  "
                >

                  <Icon className="h-5 w-5" />

                </a>

              ))}

            </div>

          </div>

        </div>

      </footer>
    </>
  );
}
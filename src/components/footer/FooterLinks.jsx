import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Container } from "../common";

const treatments = [
  { name: "Dental Implants", link: "/treatments" },
  { name: "Smile Makeover", link: "/treatments" },
  { name: "Clear Aligners", link: "/treatments" },
  { name: "Root Canal", link: "/treatments" },
  { name: "Crowns & Bridges", link: "/treatments" },
];

const patientGuide = [
  { name: "Patient Guide", link: "/patient-guide" },
  { name: "How It Works", link: "/patient-guide" },
  { name: "Travel Assistance", link: "/patient-guide" },
  { name: "FAQ", link: "/faq" },
  { name: "Blog", link: "/blog" },
];

const company = [
  { name: "About Us", link: "/about" },
  { name: "Treatments", link: "/treatments" },
  { name: "Contact", link: "/contact" },
];

export default function FooterLinks() {
  return (
    <Container className="py-16 lg:py-20">

      <div
        className="
          grid
          gap-12
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {/* Brand */}

        <div>

          <h3 className="text-3xl font-bold text-white">
            DentalYaatra
          </h3>

          <p
            className="
              mt-6
              leading-8
              text-slate-400
            "
          >
            Helping international patients receive world-class
            dental care in India with trusted clinics,
            transparent pricing and complete travel support.
          </p>

          {/* Social */}

          <div className="mt-8 flex gap-4">

            {[Facebook, Instagram, Linkedin].map((Icon, index) => (

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
                  bg-white/5
                  text-slate-300
                  transition-all
                  duration-300
                  hover:bg-primary-600
                  hover:text-white
                "
              >
                <Icon className="h-5 w-5" />
              </a>

            ))}

          </div>

        </div>

        {/* Treatments */}

        <div>

          <h4 className="text-lg font-semibold text-white">
            Treatments
          </h4>

          <ul className="mt-6 space-y-4">

            {treatments.map((item) => (

              <li key={item.name}>

                <Link
                  to={item.link}
                  className="
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:text-primary-300
                  "
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

        </div>

        {/* Patient Guide */}

        <div>

          <h4 className="text-lg font-semibold text-white">
            Patient Guide
          </h4>

          <ul className="mt-6 space-y-4">

            {patientGuide.map((item) => (

              <li key={item.name}>

                <Link
                  to={item.link}
                  className="
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:text-primary-300
                  "
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h4 className="text-lg font-semibold text-white">
            Contact
          </h4>

          <div className="mt-6 space-y-5">

            <div className="flex gap-4">

              <Phone className="mt-1 h-5 w-5 text-primary-400" />

              <span className="text-slate-400">
                +91 XXXXX XXXXX
              </span>

            </div>

            <div className="flex gap-4">

              <Mail className="mt-1 h-5 w-5 text-primary-400" />

              <span className="text-slate-400">
                hello@dentalyaatra.com
              </span>

            </div>

            <div className="flex gap-4">

              <MapPin className="mt-1 h-5 w-5 text-primary-400" />

              <span className="text-slate-400">
                New Delhi, India
              </span>

            </div>

          </div>

        </div>

      </div>

    </Container>
  );
}
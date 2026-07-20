import { Link } from "react-router-dom";
import { Container } from "../common";

const footerPages = [
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    title: "Cookies",
    link: "/cookies",
  },
  {
    title: "Sitemap",
    link: "/sitemap",
  },
];

export default function FooterBottom() {
  return (
    <Container>

      {/* Divider */}

      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div
        className="
          flex
          flex-col
          items-center
          gap-6

          py-8
          md:py-10

          text-sm
          text-slate-400

          lg:flex-row
          lg:justify-between
        "
      >

        {/* Copyright */}

        <div className="text-center lg:text-left">

          <p className="leading-7">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              DentalYaatra
            </span>
            . All rights reserved.
          </p>

          <p className="mt-1 text-slate-500">
            Smile Beyond Borders.
          </p>

        </div>

        {/* Footer Links */}

        <nav
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
          "
        >
          {footerPages.map((page) => (
            <Link
              key={page.title}
              to={page.link}
              className="
                transition-colors
                duration-300
                hover:text-primary-400
              "
            >
              {page.title}
            </Link>
          ))}
        </nav>

      </div>

    </Container>
  );
}
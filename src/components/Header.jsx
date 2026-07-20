import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  Phone,
  Globe,
  DollarSign,
} from "lucide-react";

import MobileMenu from "./MobileMenu";
import MegaMenu from "./MegaMenu";
import logo from "../assets/brand/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    if (menuTimeout.current) {
      clearTimeout(menuTimeout.current);
    }
    setIsMegaMenuOpen(true);
  };

  const closeMenu = () => {
    menuTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 180);
  };

  const navLink = `
relative
font-medium
text-slate-700
transition-all
duration-300
hover:text-primary-600
after:absolute
after:left-0
after:-bottom-5
after:h-[3px]
after:w-0
after:rounded-full
after:bg-primary-600
after:transition-all
after:duration-300
hover:after:w-full
`;

  return (
    <>
      <header
        className={`
fixed
top-0
left-0
right-0
z-50
bg-white/95 
backdrop-blur-md
border-b
border-slate-100
transition-all
duration-300
${scrolled ? "shadow-[0_8px_30px_rgba(15,23,42,.06)]" : ""}
`}
      >
        {/* TOP BAR */}

        <div className="hidden xl:block bg-slate-50 border-b border-slate-100">

          <div className="mx-auto flex h-10 max-w-[1380px] items-center justify-between px-6">

            <div className="flex items-center gap-8 text-sm text-slate-500">

              <div className="flex items-center gap-2">

                <Phone className="h-4 w-4 text-primary-600" />

                <span>+91 98765 43210</span>

              </div>

              <span>

                hello@dentalyaatra.com

              </span>

            </div>

            <div className="flex items-center gap-5">

              <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition">

                <Globe className="h-4 w-4" />

                EN

              </button>

              <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition">

                <DollarSign className="h-4 w-4" />

                USD

              </button>

            </div>

          </div>

        </div>

        {/* MAIN HEADER */}

        <div className="mx-auto flex h-20max-w-[1380px] items-center justify-between px-6">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-4 shrink-0"
          >

            <img
              src={logo}
              alt="DentalYaatra"
              className="
h-[60px]
w-auto
transition-all
duration-300
lg:h-[60px]
md:h-[60px]
h-[52px]
"
            />

          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-9">

            <Link
              to="/"
              className="relative font-semibold text-primary-700 after:absolute after:left-0 after:-bottom-5 after:h-[3px] after:w-full after:rounded-full after:bg-primary-600"
            >
              Home
            </Link>
                        {/* Treatments */}

            <div
              className="relative flex h-full items-center"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <button
                className="
                  flex
                  h-12
                  items-center
                  text-[15px]
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-primary-600
                "
              >
                Treatments

                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <MegaMenu
                isOpen={isMegaMenuOpen}
                openMenu={openMenu}
                closeMenu={closeMenu}
              />
            </div>

            <Link
              to="/destinations"
              className={navLink}
            >
              Destinations
            </Link>

            <Link
              to="/about"
              className={navLink}
            >
              Why Us
            </Link>

            <Link
              to="/patient-guide"
              className={navLink}
            >
              Patient Guide
            </Link>

            <Link
              to="/blogs"
              className={navLink}
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className={navLink}
            >
              Contact
            </Link>

          </nav>

          {/* CTA */}

          <div className="hidden lg:flex items-center gap-4">

            <button
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                px-5
                py-2.5
                text-sm
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:border-primary-600
                hover:text-primary-600
                hover:shadow-lg
              "
            >
              Get Quote
            </button>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-primary-700
                to-teal-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
              "
            >
              <Phone className="h-4 w-4" />

              Book Consultation
            </Link>

          </div>

          {/* Mobile Menu */}

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="
              rounded-xl
              p-2
              transition-all
              duration-300
              hover:bg-slate-100
              active:scale-95
              lg:hidden
            "
          >
            <Menu className="h-7 w-7 text-slate-700" />
          </button>

        </div>
              </header>

      {/* Mobile Navigation */}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

    </>
  );
}
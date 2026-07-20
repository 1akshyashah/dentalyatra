import { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Home,
  MapPin,
  HeartHandshake,
  BookOpen,
  FileText,
  Phone,
  Globe,
  DollarSign,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

export default function MobileMenu({
  isOpen,
  onClose,
}) {
  const [screen, setScreen] = useState("main");
  const [category, setCategory] = useState(null);

  const treatmentGroups = [
    {
      title: "Dental Implants",
      items: [
        "Single Implant",
        "Multiple Implants",
        "All-on-4",
        "All-on-6",
        "Immediate Loading",
        "Bone Grafting",
      ],
    },
    {
      title: "Cosmetic Dentistry",
      items: [
        "Veneers",
        "Teeth Whitening",
        "Smile Makeover",
        "Gum Contouring",
      ],
    },
    {
      title: "Orthodontics",
      items: [
        "Invisalign",
        "Metal Braces",
        "Ceramic Braces",
        "Retainers",
      ],
    },
    {
      title: "Restorative Dentistry",
      items: [
        "Crowns",
        "Bridges",
        "Dentures",
        "Root Canal",
      ],
    },
    {
      title: "General Dentistry",
      items: [
        "Dental Cleaning",
        "Dental Fillings",
        "Wisdom Tooth",
        "Pediatric Dentistry",
      ],
    },
    {
      title: "Oral Surgery",
      items: [
        "Tooth Extraction",
        "Jaw Surgery",
      ],
    },
  ];

  const destinations = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Goa",
  ];

  const patientGuide = [
    "Medical Visa",
    "Travel Planning",
    "Accommodation",
    "Airport Pickup",
    "Insurance",
    "FAQs",
  ];

  const closeMenu = () => {
    setScreen("main");
    setCategory(null);
    onClose();
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[90%] max-w-[380px] flex-col overflow-hidden rounded-l-3xl bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

          <img
            src="/images/logo.svg"
            className="h-14 w-auto"
            alt="DentalYaatra"
          />

          <button
            onClick={closeMenu}
            className="rounded-2xl border border-slate-200 p-2 transition hover:bg-slate-50"
          >
            <X className="h-6 w-6" />
          </button>

        </div>

        {/* MAIN SCREEN */}

        {screen === "main" && (

          <>

            <div className="flex-1 overflow-y-auto px-5 py-6">

              <div className="space-y-2">

                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center gap-4 rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  <Home className="h-5 w-5 text-primary-600" />
                  Home
                </Link>

                <button
                  onClick={() => setScreen("treatments")}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  <div className="flex items-center gap-4">

                    <Stethoscope className="h-5 w-5 text-primary-600" />

                    Treatments

                  </div>

                  <ChevronRight className="h-5 w-5" />

                </button>

                <button
                  onClick={() => setScreen("destinations")}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  <div className="flex items-center gap-4">

                    <MapPin className="h-5 w-5 text-primary-600" />

                    Destinations

                  </div>

                  <ChevronRight className="h-5 w-5" />

                </button>

                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="flex items-center gap-4 rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  <HeartHandshake className="h-5 w-5 text-primary-600" />

                  Why DentalYaatra

                </Link>

                <button
                  onClick={() => setScreen("guide")}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  <div className="flex items-center gap-4">

                    <BookOpen className="h-5 w-5 text-primary-600" />

                    Patient Guide

                  </div>

                  <ChevronRight className="h-5 w-5" />

                </button>

                <Link
                  to="/blogs"
                  onClick={closeMenu}
                  className="flex items-center gap-4 rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  <FileText className="h-5 w-5 text-primary-600" />

                  Blogs

                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center gap-4 rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  <Phone className="h-5 w-5 text-primary-600" />

                  Contact

                </Link>

              </div>

              <div className="my-8 border-t border-slate-100" />

              <div className="flex gap-3">

                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-sm">

                  <Globe className="h-4 w-4" />

                  English

                </button>

                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-sm">

                  <DollarSign className="h-4 w-4" />

                  USD

                </button>

              </div>              <div className="mt-8 space-y-3">

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-700 to-teal-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5" />
                  Free Consultation
                </Link>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-6 py-4 font-medium text-green-700 transition hover:bg-green-100"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>

              </div>

            </div>

          </>
        )}

        {/* ========================= */}
        {/* TREATMENTS */}
        {/* ========================= */}

        {screen === "treatments" && (

          <div className="flex flex-1 flex-col">

            <div className="flex items-center gap-3 border-b border-slate-100 p-5">

              <button
                onClick={() => setScreen("main")}
                className="rounded-xl p-2 hover:bg-slate-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <h3 className="text-lg font-semibold">
                Treatments
              </h3>

            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-2">

              {treatmentGroups.map((group, index) => (

                <button
                  key={group.title}
                  onClick={() => {
                    setCategory(index);
                    setScreen("category");
                  }}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left hover:bg-primary-50"
                >

                  <span>{group.title}</span>

                  <ChevronRight className="h-5 w-5" />

                </button>

              ))}

              <Link
                to="/treatments"
                onClick={closeMenu}
                className="mt-6 flex items-center justify-between rounded-2xl bg-primary-50 px-4 py-4 font-semibold text-primary-700"
              >
                View All Treatments

                <ChevronRight className="h-5 w-5" />

              </Link>

            </div>

          </div>

        )}

        {/* ========================= */}
        {/* CATEGORY */}
        {/* ========================= */}

        {screen === "category" && category !== null && (

          <div className="flex flex-1 flex-col">

            <div className="flex items-center gap-3 border-b border-slate-100 p-5">

              <button
                onClick={() => setScreen("treatments")}
                className="rounded-xl p-2 hover:bg-slate-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <h3 className="text-lg font-semibold">
                {treatmentGroups[category].title}
              </h3>

            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-2">

              {treatmentGroups[category].items.map((item) => (

                <Link
                  key={item}
                  to={`/treatments/${item
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/\s+/g, "-")}`}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

        )}

        {/* ========================= */}
        {/* DESTINATIONS */}
        {/* ========================= */}

        {screen === "destinations" && (

          <div className="flex flex-1 flex-col">

            <div className="flex items-center gap-3 border-b border-slate-100 p-5">

              <button
                onClick={() => setScreen("main")}
                className="rounded-xl p-2 hover:bg-slate-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <h3 className="text-lg font-semibold">
                Destinations
              </h3>

            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-2">

              {destinations.map((city) => (

                <Link
                  key={city}
                  to={`/destinations/${city.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  {city}
                </Link>

              ))}

            </div>

          </div>

        )}

        {/* ========================= */}
        {/* PATIENT GUIDE */}
        {/* ========================= */}

        {screen === "guide" && (

          <div className="flex flex-1 flex-col">

            <div className="flex items-center gap-3 border-b border-slate-100 p-5">

              <button
                onClick={() => setScreen("main")}
                className="rounded-xl p-2 hover:bg-slate-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <h3 className="text-lg font-semibold">
                Patient Guide
              </h3>

            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-2">

              {patientGuide.map((item) => (

                <Link
                  key={item}
                  to="/patient-guide"
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-4 hover:bg-primary-50"
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

        )}

      </aside>

    </>

  );
}
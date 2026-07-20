import {
  ShieldCheck,
  Clock3,
  HeartPulse,
  Activity,
  Award,
} from "lucide-react";

import dentalImplants from "../treatment_content/dental-implants.md?raw";
import veneers from "../treatment_content/veneers.md?raw";
import rootCanal from "../treatment_content/root-canal.md?raw";

/* -------------------------------------------------------
   Helpers
------------------------------------------------------- */

const getExcerpt = (content) => {
  const lines = content.split("\n").filter((line) => line.trim());

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].startsWith("#")) {
      return lines[i].trim();
    }
  }

  return "";
};

const getTitle = (content) => {
  const firstLine = content.split("\n")[0].trim();

  return firstLine.replace(/^#+\s*/, "");
};

/* -------------------------------------------------------
   Treatments
------------------------------------------------------- */

export const treatments = [
  {
    id: 1,

    order: 1,

    slug: "dental-implants",

    featured: true,

    category: "Restorative Dentistry",

    title: getTitle(dentalImplants),

    subtitle: "Restore Your Smile Naturally",

    excerpt: getExcerpt(dentalImplants),

    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&auto=format&fit=crop",

    content: dentalImplants,

    facts: [
      {
        icon: ShieldCheck,
        label: "Procedure",
        value: "Dental Implants",
      },

      {
        icon: Clock3,
        label: "Duration",
        value: "3–7 Days",
      },

      {
        icon: HeartPulse,
        label: "Anaesthesia",
        value: "Local",
      },

      {
        icon: Activity,
        label: "Recovery",
        value: "1–2 Days",
      },

      {
        icon: Award,
        label: "Success Rate",
        value: "95%+",
      },
    ],

    seo: {
      title: "Dental Implants in India | DentalYaatra",

      description:
        "Replace missing teeth permanently with advanced dental implant treatment from experienced specialists in India.",
    },
  },

  {
    id: 2,

    order: 2,

    slug: "veneers",

    featured: true,

    category: "Cosmetic Dentistry",

    title: getTitle(veneers),

    subtitle: "Transform Your Smile",

    excerpt: getExcerpt(veneers),

    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&auto=format&fit=crop",

    content: veneers,

    facts: [
      {
        icon: ShieldCheck,
        label: "Procedure",
        value: "Porcelain Veneers",
      },

      {
        icon: Clock3,
        label: "Duration",
        value: "5–7 Days",
      },

      {
        icon: HeartPulse,
        label: "Anaesthesia",
        value: "Minimal",
      },

      {
        icon: Activity,
        label: "Recovery",
        value: "Same Day",
      },

      {
        icon: Award,
        label: "Results",
        value: "Natural Smile",
      },
    ],

    seo: {
      title: "Porcelain Veneers in India | DentalYaatra",

      description:
        "Enhance your smile with premium porcelain veneers designed for a natural appearance.",
    },
  },

  {
    id: 3,

    order: 3,

    slug: "root-canal",

    featured: true,

    category: "Endodontics",

    title: getTitle(rootCanal),

    subtitle: "Save Your Natural Tooth",

    excerpt: getExcerpt(rootCanal),

    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop",

    content: rootCanal,

    facts: [
      {
        icon: ShieldCheck,
        label: "Procedure",
        value: "Root Canal",
      },

      {
        icon: Clock3,
        label: "Duration",
        value: "1–2 Visits",
      },

      {
        icon: HeartPulse,
        label: "Anaesthesia",
        value: "Local",
      },

      {
        icon: Activity,
        label: "Recovery",
        value: "24–48 Hours",
      },

      {
        icon: Award,
        label: "Success Rate",
        value: "98%+",
      },
    ],

    seo: {
      title: "Root Canal Treatment in India | DentalYaatra",

      description:
        "Comfortable and advanced root canal treatment to save infected or damaged teeth.",
    },
  },
];

/* -------------------------------------------------------
   Helpers
------------------------------------------------------- */

export const getTreatmentBySlug = (slug) =>
  treatments.find((treatment) => treatment.slug === slug);

export const getFeaturedTreatments = () =>
  treatments
    .filter((treatment) => treatment.featured)
    .sort((a, b) => a.order - b.order);

export const getRelatedTreatments = (
  currentSlug,
  category,
  limit = 3
) =>
  treatments
    .filter(
      (treatment) =>
        treatment.slug !== currentSlug &&
        treatment.category === category
    )
    .slice(0, limit);
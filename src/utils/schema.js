// src/utils/schema.js

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "DentalYaatra",

  url: "https://dentalyaatra.com",

  logo: "https://dentalyaatra.com/logo.png",

  description:
    "DentalYaatra helps international patients access world-class dental treatment in India with complete travel assistance and transparent pricing.",

  email: "info@dentalyaatra.com",

  telephone: "+91-9810784196",

  sameAs: [
    "https://facebook.com/dentalyaatra",
    "https://instagram.com/dentalyaatra",
    "https://linkedin.com/company/dentalyaatra"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: "DentalYaatra",

  url: "https://dentalyaatra.com",

  potentialAction: {
    "@type": "SearchAction",

    target:
      "https://dentalyaatra.com/search?q={search_term_string}",

    "query-input":
      "required name=search_term_string"
  }
};

export const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",

  name: "DentalYaatra",

  url: "https://dentalyaatra.com",

  image: "https://dentalyaatra.com/og-image.jpg",

  description:
    "DentalYaatra connects international patients with trusted dental clinics in India, offering treatment planning, travel assistance and patient support.",

  medicalSpecialty: "Dentistry",

  areaServed: [
    "India",
    "Kuwait",
    "Qatar",
    "Oman",
    "Bahrain",
    "Saudi Arabia",
    "United Kingdom",
    "United States",
    "Canada",
    "Australia"
  ],

  availableLanguage: [
    "English",
    "Hindi"
  ],

  telephone: "+91-9810784196",

  email: "info@dentalyaatra.com"
};
import { Helmet } from "react-helmet-async";

export default function MedicalProcedureSchema({ treatment }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",

    name: treatment.title,

    description: treatment.excerpt,

    procedureType: "Dental Procedure",

    bodyLocation: "Teeth",

    image: treatment.image
      ? `https://dentalyaatra.com${treatment.image}`
      : "https://dentalyaatra.com/og-image.jpg",

    url: `https://dentalyaatra.com/treatments/${treatment.slug}`,

    provider: {
      "@type": "MedicalBusiness",
      name: "DentalYaatra",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
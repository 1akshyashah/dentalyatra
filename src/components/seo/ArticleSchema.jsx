// src/components/seo/ArticleSchema.jsx

import { Helmet } from "react-helmet-async";

export default function ArticleSchema({ blog }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: blog.title,
    description: blog.excerpt,

    image: blog.image
      ? `https://dentalyaatra.com${blog.image}`
      : "https://dentalyaatra.com/og-image.jpg",

    author: {
      "@type": "Organization",
      name: "DentalYaatra",
    },

    publisher: {
      "@type": "Organization",
      name: "DentalYaatra",
      logo: {
        "@type": "ImageObject",
        url: "https://dentalyaatra.com/logo.png",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dentalyaatra.com/blogs/${blog.slug}`,
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
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://dentalyaatra.com";

const DEFAULT_TITLE =
  "DentalYaatra | Dental Tourism in India";

const DEFAULT_DESCRIPTION =
  "World-class dental treatment in India with experienced dentists, transparent pricing and complete travel assistance for international patients.";

const DEFAULT_IMAGE =
  `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  canonical = "",
  keywords = "",
}) {
  const url = canonical
    ? `${SITE_URL}${canonical}`
    : SITE_URL;

  return (
    <Helmet>
      {/* Primary */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
}
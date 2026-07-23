import Hero from "../components/hero/Hero";
import TrustBar from "../components/trust/TrustBar";
import WhyChoose from "../components/whyChoose/WhyChoose";
import Treatments from "../components/treatments/Treatments";
import Process from "../components/process/Process";
import FAQ from "../components/faq/FAQ";
import Blogs from "../components/blogs/Blogs";
import CTA from "../components/cta/CTA";

import SEO from "../components/seo/SEO";
import Schema from "../components/seo/Schema";

import { seoPages } from "../utils/seoConfig";
import {
  organizationSchema,
  websiteSchema,
  medicalBusinessSchema,
} from "../utils/schema";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <SEO {...seoPages.home} />

      {/* Structured Data */}
      <Schema data={organizationSchema} />
      <Schema data={websiteSchema} />
      <Schema data={medicalBusinessSchema} />

      {/* Page Sections */}
      <Hero />
      <TrustBar />
      <WhyChoose />
      <Treatments />
      <Process />
      <Blogs />
      <FAQ />
      <CTA />
    </>
  );
}
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CalendarDays,
  Clock3,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import Button from "../components/common/Button";
import MarkdownContent from "../components/common/MarkdownContent";

import { getBlogBySlug } from "../data/blogs";

import SEO from "../components/seo/SEO";
import ArticleSchema from "../components/seo/ArticleSchema";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

export default function BlogDetail() {
  const { slug } = useParams();

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <section className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Article Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The article you're looking for doesn't exist.
          </p>

          <Link
            to="/blogs"
            className="mt-8 inline-flex font-semibold text-primary-600 hover:text-primary-700"
          >
            ← Back to Articles
          </Link>
        </div>
      </section>
    );
  }

  const seo = {
    title: `${blog.title} | DentalYaatra Blog`,
    description: blog.excerpt,
    canonical: `/blogs/${blog.slug}`,
    keywords: `${blog.title}, dental blog, oral health, DentalYaatra`,
  };

  const breadcrumbItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Blogs",
      url: "/blogs",
    },
    {
      name: blog.title,
      url: `/blogs/${blog.slug}`,
    },
  ];

  const markdownContent =
    blog.content.replace(/^# .*\n/, "");

  return (
    <>
      <SEO {...seo} />

      <BreadcrumbSchema items={breadcrumbItems} />

      <ArticleSchema blog={blog} />

      {/* HERO starts here */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-slate-200
          bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_42%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_45%),linear-gradient(to_bottom,#f8fbff_0%,#ffffff_70%,#ffffff_100%)]
        "
      >

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="
              absolute
              -left-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-primary-200/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              right-0
              top-10
              h-72
              w-72
              rounded-full
              bg-teal-200/20
              blur-3xl
            "
          />

        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >

            {/* Breadcrumb */}

            <nav className="mb-6 flex items-center gap-2 text-sm">

              <Link
                to="/"
                className="text-slate-500 hover:text-primary-600"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4 text-slate-400" />

              <Link
                to="/blogs"
                className="text-slate-500 hover:text-primary-600"
              >
                Blog
              </Link>

              <ChevronRight className="h-4 w-4 text-slate-400" />

              <span className="font-medium text-slate-900">
                {blog.title}
              </span>

            </nav>

            {/* Category */}

            <span
              className="
                inline-flex
                rounded-full
                bg-primary-100
                px-4
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-primary-700
              "
            >
              {blog.category}
            </span>

            {/* Title */}

            <h1
              className="
                mt-5
                max-w-4xl
                text-4xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-900
                lg:text-5xl
              "
            >
              {blog.title}
            </h1>

            {/* Meta */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-6
                text-sm
                text-slate-600
              "
            >

              <span className="flex items-center gap-2">

                <CalendarDays className="h-4 w-4 text-primary-600" />

                {blog.published}

              </span>

              <span className="flex items-center gap-2">

                <Clock3 className="h-4 w-4 text-primary-600" />

                {blog.readTime}

              </span>

            </div>

            {/* Excerpt */}

            <p
              className="
                mt-8
                max-w-3xl
                text-xl
                leading-8
                text-slate-600
              "
            >
              {blog.excerpt}
            </p>

          </motion.div>

        </div>

      </section>

      {/* ===========================================
          HERO IMAGE
      =========================================== */}

      <section className="-mt-6 relative z-10 pb-12">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, scale: .98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .6, delay: .15 }}
          >

            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/60
                bg-white
                shadow-[0_25px_60px_rgba(15,23,42,.12)]
              "
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="
                  aspect-[16/8]
                  w-full
                  object-cover
                "
              />

            </div>

          </motion.div>

        </div>

      </section>
            {/* ===========================================
          ARTICLE CONTENT
      =========================================== */}

      <section className="pb-20">

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: .25,
            }}
          >

            <MarkdownContent>

              {markdownContent}

            </MarkdownContent>

          </motion.article>

        </div>

      </section>

      {/* ===========================================
          ARTICLE NAVIGATION
      =========================================== */}

      <section className="pb-16">

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div
            className="
              flex
              flex-col
              items-start
              justify-between
              gap-6
              rounded-[24px]
              border
              border-slate-200
              bg-slate-50
              p-8
              sm:flex-row
              sm:items-center
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-primary-600
                "
              >
                Continue Reading
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-slate-900
                "
              >
                Explore More Dental Articles
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl
                  leading-7
                  text-slate-600
                "
              >
                Discover more expert guides, oral health tips,
                treatment information and patient resources.
              </p>

            </div>

            <Button
              as={Link}
              to="/blogs"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              View All Articles
            </Button>

          </div>

        </div>

      </section>
            {/* ===========================================
          CTA
      =========================================== */}

      <section className="pb-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div
              className="
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-r
                from-primary-600
                via-primary-700
                to-primary-800
                px-8
                py-12
                text-center
                text-white
                shadow-xl
              "
            >

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-white/15
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  backdrop-blur-sm
                "
              >
                Need Expert Guidance?
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  lg:text-4xl
                "
              >
                Let Our Dental Experts Help You
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-lg
                  leading-8
                  text-primary-100
                "
              >
                Have questions about a treatment or planning
                your dental journey? Our experienced treatment
                coordinators are here to provide personalised
                guidance and help you make informed decisions.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Button
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore Treatments
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  rightIcon={<MessageCircle className="h-4 w-4" />}
                  className="
                    border-white
                    text-white
                    hover:bg-white
                    hover:text-primary-700
                  "
                >
                  Talk to an Expert
                </Button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </>

  );

}
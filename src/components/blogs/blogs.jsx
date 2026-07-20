import { ArrowRight } from "lucide-react";

import {
  Section,
  SectionTitle,
  Button,
} from "../common";

import { blogs } from "../../data/blogs";
import BlogCard from "./BlogCard";

export default function Blogs() {
  const featuredBlogs = blogs.slice(0, 3);

  return (
   <Section
  variant="section"
  className="
    pt-10
    lg:pt-12
    pb-10
    lg:pb-24

    relative
    overflow-hidden

    bg-gradient-to-b
    from-white
    via-primary-50/20
    to-white
  "
>
      {/* Decorative Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            -top-16
            right-0
            h-56
            w-56
            rounded-full
            bg-primary-100/20
            blur-3xl

            lg:-top-24
            lg:h-80
            lg:w-80
          "
        />

        <div
          className="
            absolute
            -bottom-10
            -left-12
            h-56
            w-56
            rounded-full
            bg-teal-100/20
            blur-3xl

            lg:-left-20
            lg:h-72
            lg:w-72
          "
        />

      </div>

      <div className="relative z-10">

        <SectionTitle
          badge="DENTAL INSIGHTS"
          title={
  <>
    Learn.
    <br className="hidden lg:block" />

    <span className="text-primary-600">
      Prepare. Smile.
    </span>
  </>
}
          description="Expert articles, oral health guides, treatment insights and travel tips to help you make informed decisions before beginning your dental journey."
          maxWidth="max-w-4xl"
        />

        {/* Blog Grid */}

        <div
          className="
            mt-12
            lg:mt-14

            grid
            grid-cols-1

            gap-6

            sm:grid-cols-2

            lg:gap-8

            xl:grid-cols-3
          "
        >
          {featuredBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>

        {/* CTA */}

        <div className="mt-12 lg:mt-14 flex justify-center">

          <Button
            to="/blogs"
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="h-5 w-5" />}
          >
            View All Articles
          </Button>

        </div>

      </div>

    </Section>
  );
}
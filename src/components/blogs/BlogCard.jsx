import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PremiumCard } from "../common";

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="group block h-full"
    >
      <PremiumCard
        className="
          h-full
          overflow-hidden
          p-0
        "
      >
        {/* Image */}

        <div className="relative overflow-hidden">

          <img
            src={blog.image}
            alt={blog.title}
            className="
              h-52
              sm:h-56
              lg:h-60
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Category */}

          <span
            className="
              absolute
              left-4
              top-4
              lg:left-6
              lg:top-6

              rounded-full
              bg-white/95
              backdrop-blur

              px-3
              py-1.5
              lg:px-4
              lg:py-2

              text-[11px]
              lg:text-xs

              font-bold
              uppercase
              tracking-[0.12em]
              text-primary-600

              shadow-lg
            "
          >
            {blog.category}
          </span>

        </div>

        {/* Content */}

        <div className="p-6 lg:p-8">

          <h3
            className="
              text-xl
              sm:text-2xl
              lg:text-[28px]

              font-bold
              leading-tight

              text-slate-900

              transition-colors
              duration-300

              group-hover:text-primary-700
            "
          >
            {blog.title}
          </h3>

          <p
            className="
              mt-4
              lg:mt-5

              text-base
              leading-7

              text-slate-600
              line-clamp-3
            "
          >
            {blog.excerpt}
          </p>

          {/* Footer */}

          <div
            className="
              mt-6
              lg:mt-8

              flex
              items-center
              justify-between
            "
          >

            <div
              className="
                flex
                items-center
                gap-2

                text-sm
                text-slate-500
              "
            >
              <Calendar className="h-4 w-4" />

              {blog.date}

            </div>

            <div
              className="
                flex
                items-center
                gap-2

                font-semibold
                text-primary-600
              "
            >
              Read Article

              <ArrowRight
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />

            </div>

          </div>

        </div>

      </PremiumCard>
    </Link>
  );
}
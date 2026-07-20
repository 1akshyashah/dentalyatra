import { Section } from "../components/common";
import SectionTitle from "../components/common/SectionTitle";
import BlogCard from "../components/blogs/BlogCard";
import { blogs } from "../data/blogs";

export default function Blogs() {
  return (
    <main className="bg-white">

      <Section className="pt-40 pb-24">

        <SectionTitle
          eyebrow="Expert Insights"
          title="Expert Advice For"
          highlight="A Healthier Smile"
description="Discover expert guidance on dental treatments, oral health, recovery tips and travelling to India with confidence."        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}

        </div>

      </Section>

    </main>
  );
}
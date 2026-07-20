import essentialDentalCareTips from "../blog_content/essential-dental-care-tips.md?raw";
import glowingTeeth from "../blog_content/glowing-teeth.md?raw";
import healthyGlowingSkinGuide from "../blog_content/healthy-glowing-skin-guide.md?raw";

/* ======================================================
   HELPERS
====================================================== */

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

/* ======================================================
   BLOG DATA
====================================================== */

export const blogs = [
  {
    order: 1,

    slug: "essential-dental-care-tips",

    category: "Oral Health",

    title: getTitle(essentialDentalCareTips),

    excerpt: getExcerpt(essentialDentalCareTips),

    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200",

    readTime: "5 min read",

    published: "July 2026",

    featured: true,

    content: essentialDentalCareTips,
  },

  {
    order: 2,

    slug: "glowing-teeth",

    category: "Cosmetic Dentistry",

    title: getTitle(glowingTeeth),

    excerpt: getExcerpt(glowingTeeth),

    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200",

    readTime: "4 min read",

    published: "July 2026",

    featured: true,

    content: glowingTeeth,
  },

  {
    order: 3,

    slug: "healthy-glowing-skin-guide",

    category: "Lifestyle",

    title: getTitle(healthyGlowingSkinGuide),

    excerpt: getExcerpt(healthyGlowingSkinGuide),

    image:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1200",

    readTime: "6 min read",

    published: "July 2026",

    featured: false,

    content: healthyGlowingSkinGuide,
  },
];

/* ======================================================
   HELPERS
====================================================== */

export const getBlogBySlug = (slug) =>
  blogs.find((blog) => blog.slug === slug);

export const featuredBlogs = blogs.filter(
  (blog) => blog.featured
);

export const latestBlogs = [...blogs]
  .sort((a, b) => b.order - a.order)
  .slice(0, 3);

export const blogCategories = [
  "All",
  ...new Set(blogs.map((blog) => blog.category)),
];
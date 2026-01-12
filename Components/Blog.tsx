"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "YouTube SEO: How to Rank YouTube Videos in 2025",
    image: "/blog (1).avif",
    date: "January 29, 2025",
    tag: "Keyword Research",
    href: "#",
  },
  {
    title: "Why SEO Is Actually All About Content Marketing",
    image: "/blog (2).avif",
    date: "October 8, 2025",
    tag: "Keyword Research",
    href: "#",
  },
  {
    title: "10 Crucial SEO Ranking Factors You Need to Know",
    image: "/blog (3).avif",
    date: "July 12, 2025",
    tag: "Keyword Research",
    href: "#",
    highlight: true,
  },
];

export default function BlogSection() {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-11/12 md:w-5/6 max-w-7xl mx-auto text-center">
        {/* TAG */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
          Blog
        </span>

        {/* HEADING */}
        <h2 className="text-white text-4xl md:text-5xl font-light">
          Future SEO Trends
        </h2>
        <h3 className="mt-2 text-[#ff9f4a] italic font-serif text-4xl md:text-5xl">
          You Should Follow
        </h3>

        {/* BLOG CARDS */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <Link
              href={blog.href}
              className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden text-left transition hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* READ CIRCLE (HOVER ONLY) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <div className="w-32 h-32 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center">
                    <span className="text-white italic font-serif text-lg">
                      Read
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="px-3 py-1 rounded-full bg-black/50 border border-white/10">
                    {blog.tag}
                  </span>
                  <span>{blog.date}</span>
                </div>

                {/* TITLE */}
                <h4 className="text-lg font-medium leading-snug text-white transition-colors duration-300 group-hover:text-[#ff9f4a]">
                  {blog.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="px-8 py-3 rounded-full bg-black border border-white/20 text-white hover:border-white/40 transition shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Explore More Blogs
          </button>
        </div>
      </div>
    </section>
  );
}

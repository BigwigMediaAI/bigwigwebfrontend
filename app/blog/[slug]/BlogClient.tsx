"use client";

import { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import BlogSidebar from "../../../Components/BlogSidebar";
import PopupForm from "@/Components/Popup";
import Link from "next/link";

export default function BlogClient({
  blog,
  relatedBlogs,
}: {
  blog: any;
  relatedBlogs: any[];
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ✅ Listen for popup buttons inside blog HTML
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-open-popup='true']")) {
        setIsPopupOpen(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* GRID BACKGROUND */}
      <div className="relative pt-[90px] md:pt-[120px] pb-20">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative w-11/12 md:w-5/6 max-w-7xl mx-auto">
          {/* BLOG HEADER (GLASS) */}
          <section className=" rounded-3xl mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              {blog.title}
            </h1>

            <p className="text-gray-400 mt-4 text-sm md:text-base">
              By <span className="text-white font-semibold">{blog.author}</span>{" "}
              • {new Date(blog.datePublished).toLocaleDateString()}
            </p>
          </section>

          {/* COVER IMAGE */}
          {blog.coverImage && (
            <div className="relative w-full h-[260px] sm:h-[380px] md:h-[520px] lg:h-[650px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={blog.coverImage}
                alt={blog.coverImageAlt || blog.title}
                fill
                className="object-cover"
                priority
              />

              {/* DARK OVERLAY FOR PREMIUM LOOK */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          )}

          {/* BLOG CONTENT + SIDEBAR */}
          <section className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* LEFT – BLOG CONTENT */}
            <article className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </article>

            {/* RIGHT – SIDEBAR */}
            <aside className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl lg:sticky lg:top-32">
                <BlogSidebar relatedBlogs={relatedBlogs} />
              </div>
            </aside>
          </section>
        </div>
      </div>

      {/* =========================
              CTA FINAL
          ========================== */}
      <section className="w-11/12 md:w-5/6 mx-auto mb-5">
        <div className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[var(--secondary-color)]/15 blur-3xl rounded-full" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light">
                Let’s build your next{" "}
                <span className="text-[var(--secondary-color)] italic font-serif">
                  Growth Story
                </span>
              </h2>
              <p className="mt-4 text-gray-300 max-w-xl">
                Whether you need SEO, SMM, Ads, Web Development, Branding or
                complete digital growth — we’ve got you covered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button onClick={() => setIsPopupOpen(true)} className="cta-wrap">
                <span className="cta-border"></span>
                <span className="cta-inner w-full">Get Started Today</span>
              </button>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                    bg-black/40 border border-white/15 text-white
                    hover:border-white/30 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* MOBILE CTA BAR */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-40">
        <a
          href="tel:+918368573451"
          className="w-1/2 bg-[var(--primary-color)] backdrop-blur-md border-t border-white/10 text-white py-3 flex justify-center gap-2"
        >
          <FaPhoneAlt /> Call Us
        </a>

        <a
          href="https://wa.me/+918368573451"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-[var(--secondary-color)] text-black py-3 flex justify-center gap-2 font-semibold"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </div>
  );
}

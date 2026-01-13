"use client";

import Image from "next/image";
import seoIcon from "../Assets/rocket.svg"; // ← use your actual logo/icon

export default function Hero() {
  return (
    <section className="relative h-[70vh] lg:min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* STAR DOTS */}
      <div className="absolute inset-0 pointer-events-none">
        {DOTS.map((dot, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: dot.size,
              height: dot.size,
              top: dot.top,
              left: dot.left,
              opacity: dot.size === "2px" ? 0.8 : 0.45,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      {/* MICRO SPARKLES */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={`micro-${i}`}
            className="absolute rounded-full bg-white animate-twinkle-soft"
            style={{
              width: "1px",
              height: "1px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.25,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-4 text-center mt-32">
        {/* SEO EXPERT TAG */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm backdrop-blur">
          <Image
            src={seoIcon}
            alt="SEO Experts"
            width={18}
            height={18}
            className="opacity-90"
          />
          <span>SEO Experts</span>
        </div>

        {/* HEADINGS */}
        <h1 className="text-[var(--primary-color)] italic font-light leading-tight text-[36px] sm:text-[48px] md:text-[64px]">
          YOUR BUSINESS
        </h1>

        <h2 className="mt-2 text-[var(--secondary-color)] italic font-serif font-semibold text-[38px] sm:text-[50px] md:text-[64px]">
          ONE Solution
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Boost your brand’s online presence with expert SEO solutions,
          attracting the right audience effortlessly.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button className="cta-wrap">
            <span className="cta-border"></span>
            <span className="cta-inner">Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOT DATA (STATIC, NO JITTER) ---------------- */

const DOTS = Array.from({ length: 45 }, (_, i) => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() > 0.7 ? "2px" : "1px",
  delay: `${Math.random() * 4}s`,
  duration: `${3 + Math.random() * 4}s`,
}));

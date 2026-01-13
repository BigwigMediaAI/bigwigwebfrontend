"use client";

import { useEffect, useState } from "react";
import { Search, BarChart3, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Keyword Research & Strategy",
    desc: "Keyword research and strategy form the backbone of any successful SEO or digital marketing campaign.",
    icon: Search,
  },
  {
    title: "On-Page Optimization",
    desc: "We optimize content, metadata, internal linking, and structure for maximum search visibility.",
    icon: BarChart3,
  },
  {
    title: "Growth & Performance SEO",
    desc: "Data-driven SEO execution that improves rankings, traffic, and conversions consistently.",
    icon: TrendingUp,
  },
  {
    title: "Advanced Technical SEO",
    desc: "We improve site architecture, crawlability, speed, and indexing performance.",
    icon: Search,
  },
  {
    title: "Keyword Research & Strategy",
    desc: "Keyword research and strategy form the backbone of any successful SEO or digital marketing campaign.",
    icon: Search,
  },
  {
    title: "On-Page Optimization",
    desc: "We optimize content, metadata, internal linking, and structure for maximum search visibility.",
    icon: BarChart3,
  },
  {
    title: "Growth & Performance SEO",
    desc: "Data-driven SEO execution that improves rankings, traffic, and conversions consistently.",
    icon: TrendingUp,
  },
  {
    title: "Advanced Technical SEO",
    desc: "We improve site architecture, crawlability, speed, and indexing performance.",
    icon: Search,
  },
];

export default function Services() {
  return (
    <section className="relative bg-black py-24">
      <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-32 h-fit">
          <span className="inline-block mb-5 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
            Services
          </span>

          <h2 className="text-[var(--primary-color)] text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            SEO Strategies
          </h2>

          <h3 className="mt-3 text-[var(--secondary-color)] italic font-serif text-4xl md:text-5xl">
            For Business Growth
          </h3>
        </div>

        {/* RIGHT SIDE STACK */}
        <div
          id="services-stack"
          className="relative"
          style={{ height: `${services.length * 120}vh` }}
        >
          {services.map((service, index) => (
            <ScrollCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
   SCROLL CARD (REAL SCROLL OVERLAP ANIMATION)
-------------------------------------------- */

function ScrollCard({ service, index }: { service: any; index: number }) {
  const [progress, setProgress] = useState(0);
  const Icon = service.icon;

  useEffect(() => {
    const onScroll = () => {
      const stack = document.getElementById("services-stack");
      if (!stack) return;

      const rect = stack.getBoundingClientRect();
      const viewport = window.innerHeight;

      const scrollY = Math.max(0, -rect.top);
      const gap = 2.3;
      const start = index * viewport * gap;

      const p = (scrollY - start) / viewport;
      setProgress(Math.min(Math.max(p, 0), 1));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [index]);

  return (
    <div className="sticky top-32 flex justify-center">
      <div
        style={{
          transform: `
            translateY(${(1 - progress) * 120}px)
            scale(${0.95 + progress * 0.05})
          `,
          opacity: progress,
          zIndex: index + 10,
        }}
        className="
          max-w-lg w-full
          bg-white/4 backdrop-blur-md
          border border-white/10
          rounded-3xl p-10 shadow-2xl
          transition-none
        "
      >
        <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
          <Icon className="w-10 h-10 text-blue-400" />
        </div>

        <h4 className="text-white text-2xl mb-4">{service.title}</h4>

        <p className="text-gray-400 leading-relaxed">{service.desc}</p>
      </div>
    </div>
  );
}

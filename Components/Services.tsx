"use client";

import {
  BarChart3,
  FileSearch,
  Layers,
  PenTool,
  Globe,
  LineChart,
} from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    desc: "We improve search visibility through technical SEO, on-page optimization, and content strategy.",
    icon: FileSearch,
  },
  {
    title: "Digital Marketing Strategy",
    desc: "Data-driven digital marketing strategies designed to increase traffic, leads, and conversions.",
    icon: BarChart3,
  },
  {
    title: "Performance Marketing",
    desc: "ROI-focused paid campaigns across Google Ads, Meta Ads, and other performance channels.",
    icon: LineChart,
  },
  {
    title: "Content Marketing",
    desc: "High-quality, SEO-friendly content that builds authority and engages your audience.",
    icon: PenTool,
  },
  {
    title: "Social Media Marketing",
    desc: "Strategic social media management and campaigns to grow brand awareness and engagement.",
    icon: Globe,
  },
  {
    title: "Analytics & Tracking",
    desc: "Advanced tracking, reporting, and optimization to continuously improve marketing performance.",
    icon: Layers,
  },
];

export default function Services() {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative z-10 w-11/12 md:w-5/6 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
            Features
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-light">
            Tailored Strategies
          </h2>

          <h3 className="mt-2 text-[#ff9f4a] italic font-serif text-4xl md:text-5xl">
            For Lasting Impact
          </h3>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur
                           transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#ff9f4a]" />
                  </div>
                </div>

                {/* TITLE */}
                <h4 className="text-white text-lg font-semibold mb-3">
                  {service.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

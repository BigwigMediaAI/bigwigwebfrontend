"use client";

import Image from "next/image";
import about from "../Assets/about.webp";
import { Users, TrendingUp, BarChart3, Star } from "lucide-react";
import { useState } from "react";
import PopupForm from "./Popup";

const stats = [
  {
    value: "32K+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "4.7★",
    label: "Client Rating",
    icon: Star,
  },
  {
    value: "87%",
    label: "Average Growth",
    icon: TrendingUp,
  },
  {
    value: "120+",
    label: "Projects Completed",
    icon: BarChart3,
  },
];

export default function About() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <section className="relative bg-black overflow-hidden py-20">
        {/* subtle background glow */}

        <div className="relative z-10 w-11/12 md:w-5/6 mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-5 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              About
            </span>

            <h2 className="text-[var(--primary-color)] text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Powered by Results
            </h2>

            <h3 className="mt-3 text-[var(--secondary-color)] italic font-serif text-4xl md:text-5xl">
              Built on Integrity
            </h3>

            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
              At OptiRank, we drive organic growth with data-driven SEO
              strategies that boost rankings, attract the right audience, and
              convert visitors into customers. Whether you're a startup or a
              leading brand,
            </p>

            <div className="mt-10">
              <button onClick={() => setIsPopupOpen(true)} className="cta-wrap">
                <span className="cta-border"></span>
                <span className="cta-inner">Get Started Today</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE ONLY */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src={about} // 🔁 replace with your exact image
              alt="Powered by Results"
              width={520}
              height={520}
              className="w-full max-w-lg object-contain drop-shadow-[0_0_40px_rgba(255,180,80,0.25)]"
              priority
            />
          </div>
        </div>

        <div className="w-11/12 md:w-5/6 mx-auto pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition"
                >
                  <Icon className="mx-auto mb-4 w-8 h-8 text-[var(--primary-color)]" />
                  <h3 className="text-[var(--secondary-color)] text-3xl font-semibold">
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}

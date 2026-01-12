"use client";

import Image from "next/image";
import { Play, BarChart2, TrendingUp } from "lucide-react";
import ButtonFill from "./ButtonFill";

export default function WhyChooseUs() {
  return (
    <section className=" relative bg-black overflow-hidden py-28">
      {/* BACKGROUND STARS */}
      <div className=" absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-[1px] h-[1px] bg-white opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-11/12 md:w-5/6 max-w-7xl mx-auto px-2 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
            Why Choose Us
          </span>

          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight">
            Your Success
          </h2>
          <h3 className="mt-2 text-[#ff9f4a] italic font-serif text-4xl md:text-5xl">
            Our Commitment
          </h3>

          <p className="mt-6 text-gray-400 max-w-lg">
            Our team of skilled content creators develops engaging informative
            content that resonates with your target audience. By optimizing
            social media profiles and creating shareable content.
          </p>

          <ButtonFill text="Get in Touch" className="hidden md:block mt-11" />
        </div>

        {/* RIGHT ORBITAL SYSTEM */}
        <div className="relative flex justify-center items-center">
          {/* ORBIT RING */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-blue-500/30 animate-spin-slow" />

          {/* YOUTUBE ICON */}
          <div className="absolute orbit orbit-youtube">
            <div className="orbit-icon bg-white/10 backdrop-blur border border-white/20">
              <Play className="text-white" />
            </div>
          </div>

          {/* DRIVE ICON */}
          <div className="absolute orbit orbit-drive">
            <div className="orbit-icon bg-white/10 backdrop-blur border border-white/20">
              <Image src="/1.svg" alt="Drive" width={22} height={22} />
            </div>
          </div>

          {/* CARD: MARKET VALUE */}
          <div className="absolute left-0 bg-[#121a23] rounded-2xl p-6 w-48 shadow-xl">
            <BarChart2 className="text-blue-400 mb-3" />
            <h4 className="text-white text-3xl font-semibold">87%</h4>
            <p className="text-gray-400 text-sm">Market Value</p>
          </div>

          {/* CARD: DATA BACKED */}
          <div className="absolute top-0 right-0 bg-[#121a23] rounded-2xl p-6 w-64 shadow-xl">
            <h4 className="text-white text-lg mb-4">Data-Backed Marketing</h4>
            <div className="flex gap-3 items-end h-28">
              {[40, 55, 70, 85, 100].map((h, i) => (
                <div
                  key={i}
                  className="w-8 rounded bg-blue-500"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* CARD: INCREASE */}
          <div className="absolute bottom-0 right-10 bg-[#121a23] rounded-2xl p-6 w-64 shadow-xl">
            <TrendingUp className="text-blue-400 mb-3" />
            <h4 className="text-white text-3xl font-semibold">87%</h4>
            <p className="text-gray-400 text-sm">Increase</p>
          </div>
        </div>
      </div>
    </section>
  );
}

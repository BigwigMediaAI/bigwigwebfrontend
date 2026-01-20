"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../Assets/bigwig-logo.png"; // replace if needed

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* STARS */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-[1px] h-[1px] bg-white opacity-40 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-11/12 md:w-5/6 max-w-7xl mx-auto py-20">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
          {/* LEFT */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-light leading-tight">
              Stay Connected &
            </h2>
            <h3 className="mt-2 text-[var(--secondary-color)] italic font-serif text-4xl md:text-5xl">
              Subscribe Our Newsletter!
            </h3>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center lg:justify-end">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-[260px] px-6 py-3 rounded-full bg-black/60 border border-white/10 text-white placeholder-gray-400 outline-none backdrop-blur"
            />
            <button className="cta-border-btn w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 text-gray-300">
          {/* BRAND */}
          <div>
            <Image src={logo} alt="Logo" className="w-28 mb-4" />
            <p className="text-sm mb-2">859 dream avenue, New York</p>
            <p className="text-sm">+1 (800) 123-4567</p>
          </div>

          {/* SECTIONS */}
          <div>
            <h4 className="text-white mb-4 text-lg">Sections</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Process</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* UTILITY */}
          <div>
            <h4 className="text-white mb-4 text-lg">Utility</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#">404</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white mb-4 text-lg">Social</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#">WhatsApp</Link>
              </li>
              <li>
                <Link href="#">Instagram</Link>
              </li>
              <li>
                <Link href="#">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
          <span>© 2025 All rights Reserved by GrabUi</span>
          <span>Powered by Framer</span>
        </div>
      </div>
    </footer>
  );
}

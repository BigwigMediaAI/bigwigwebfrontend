"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../Assets/bigwig-logo.png"; // replace if needed
import { Instagram, MessageCircle, Twitter } from "lucide-react";

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
            <p className="text-sm mb-2">Rajouri Garden, Delhi 110007, India</p>
            <p className="text-sm">+91 8368573451</p>
          </div>
          {/* SECTIONS */}
          <div>
            <h4 className="text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/clients">Clients</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
          {/* UTILITY */}
          <div>
            <h4 className="text-white mb-4 text-lg">Utility</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          {/* SOCIAL */}
          <div>
            <h4 className="text-white mb-4 text-lg font-semibold">Social</h4>

            <ul className="space-y-3 text-sm">
              {/* WhatsApp */}
              <li>
                <Link
                  href="https://wa.me/918368573451"
                  target="_blank"
                  className="
          flex items-center gap-3
          text-gray-300 hover:text-white
          transition group
        "
                >
                  <span
                    className="
            w-9 h-9 rounded-xl
            bg-white/5 border border-white/10
            flex items-center justify-center
            group-hover:bg-green-500/10
            group-hover:border-green-500/30
            transition
          "
                  >
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </span>
                  WhatsApp
                </Link>
              </li>

              {/* Instagram */}
              <li>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="
          flex items-center gap-3
          text-gray-300 hover:text-white
          transition group
        "
                >
                  <span
                    className="
            w-9 h-9 rounded-xl
            bg-white/5 border border-white/10
            flex items-center justify-center
            group-hover:bg-pink-500/10
            group-hover:border-pink-500/30
            transition
          "
                  >
                    <Instagram className="w-5 h-5 text-pink-400" />
                  </span>
                  Instagram
                </Link>
              </li>

              {/* Twitter / X */}
              <li>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className="
          flex items-center gap-3
          text-gray-300 hover:text-white
          transition group
        "
                >
                  <span
                    className="
            w-9 h-9 rounded-xl
            bg-white/5 border border-white/10
            flex items-center justify-center
            group-hover:bg-sky-500/10
            group-hover:border-sky-500/30
            transition
          "
                  >
                    <Twitter className="w-5 h-5 text-sky-400" />
                  </span>
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
          <span>© 2025 All rights Reserved by Bigwig Media</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {
  ArrowUpRight,
  Sparkles,
  Target,
  ShieldCheck,
  Users,
  Megaphone,
  Globe,
  TrendingUp,
  PenTool,
  BarChart3,
} from "lucide-react";
import { useState } from "react";
import PopupForm from "@/Components/Popup";

export default function AboutPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      <div className="relative pt-28 md:pt-36">
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        {/* SOFT GLOW */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-white/10 blur-3xl rounded-full" />
          <div className="absolute top-40 -right-40 w-[420px] h-[420px] bg-white/10 blur-3xl rounded-full" />
        </div>

        <div className="relative w-11/12 md:w-5/6 mx-auto">
          {/* =========================
              HERO
          ========================== */}
          <section className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              <Sparkles className="w-4 h-4 text-[var(--secondary-color)]" />
              About Bigwig Media
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
              A Full-Service{" "}
              <span className="text-[var(--secondary-color)] italic font-serif">
                Digital Marketing
              </span>{" "}
              Agency
            </h1>

            <p className="mt-5 text-gray-400 max-w-3xl mx-auto">
              We help brands grow with a complete digital ecosystem —
              Performance Marketing, Social Media, SEO, Branding, Content,
              Influencer Campaigns, and Conversion-focused Websites.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => setIsPopupOpen(true)} className="cta-wrap">
                <span className="cta-border"></span>
                <span className="cta-inner">Get Started Today</span>
              </button>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full
                bg-transparent border border-white/20
                hover:border-white/40 transition text-gray-200"
              >
                Explore Services
              </Link>
            </div>
          </section>

          {/* =========================
              WHO WE ARE + STATS (GLASS SPLIT)
          ========================== */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch py-16">
            {/* Left */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-10 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-semibold">Who We Are</h2>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Bigwig Media Digital is a growth-driven team built for brands
                that want more than “followers & likes”. We focus on building an
                online presence that generates{" "}
                <span className="text-white font-semibold">
                  leads, revenue, trust, and long-term growth
                </span>
                .
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                From strategy to execution — our services are designed to
                deliver measurable results across every digital channel.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Performance Marketing",
                  "Social Media Marketing",
                  "SEO + Content",
                  "Web Development",
                  "Branding",
                  "Online Reputation Management",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--secondary-color)]/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
              </div>

              <div className="relative p-7 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Our Mission
                  </h3>
                  <p className="mt-3 text-gray-300">
                    To build modern brands with premium design + powerful
                    marketing that converts attention into customers.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <GlassStat title="8+ Years" sub="Industry Experience" />
                  <GlassStat title="100+" sub="Clients Served" />
                  <GlassStat title="360°" sub="Marketing Support" />
                  <GlassStat title="ROI" sub="Performance Focused" />
                </div>
              </div>
            </div>
          </section>

          {/* =========================
              SERVICES SNAPSHOT (UNIQUE ICON GRID)
          ========================== */}
          <section className="py-16">
            <div className="text-center mb-10">
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                What We Do
              </span>

              <h2 className="text-3xl md:text-4xl font-light">
                Full Digital{" "}
                <span className="text-[var(--secondary-color)] italic font-serif">
                  Growth System
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceMiniCard
                icon={
                  <TrendingUp className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Performance Marketing"
                desc="High-converting campaigns that generate quality leads and sales."
              />
              <ServiceMiniCard
                icon={
                  <Megaphone className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Social Media Marketing"
                desc="Premium content + strategy that builds trust and visibility."
              />
              <ServiceMiniCard
                icon={
                  <BarChart3 className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Search Engine Optimization"
                desc="Rank higher, drive traffic, and get long-term organic growth."
              />
              <ServiceMiniCard
                icon={
                  <PenTool className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Creative & Branding"
                desc="Reels, ads creatives, posters, identity, and premium visuals."
              />
              <ServiceMiniCard
                icon={
                  <Globe className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Website Development"
                desc="Websites that look premium and convert visitors into customers."
              />
              <ServiceMiniCard
                icon={
                  <ShieldCheck className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Online Reputation Management"
                desc="Build trust, manage reviews, and maintain brand credibility."
              />
            </div>
          </section>

          {/* =========================
              CORE VALUES
          ========================== */}
          <section className="py-16">
            <div className="text-center mb-10">
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Core Values
              </span>

              <h2 className="text-3xl md:text-4xl font-light">
                Premium Work.{" "}
                <span className="text-[var(--secondary-color)] italic font-serif">
                  Honest
                </span>{" "}
                Results.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ValueCard
                icon={
                  <Target className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Strategy First"
                desc="We design a roadmap that aligns with your business goals."
              />
              <ValueCard
                icon={
                  <ShieldCheck className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Transparency"
                desc="Clear communication, clear reports, and clear outcomes."
              />
              <ValueCard
                icon={
                  <Users className="w-6 h-6 text-[var(--secondary-color)]" />
                }
                title="Long-Term Partnerships"
                desc="We work like your in-house growth team, not a temporary vendor."
              />
            </div>
          </section>

          {/* =========================
              CTA FINAL
          ========================== */}
          <section className="mb-5">
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
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="cta-wrap"
                  >
                    <span className="cta-border"></span>
                    <span className="cta-inner">Get Started Today</span>
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
        </div>
      </div>

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function GlassStat({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/10 px-5 py-4">
      <p className="text-white text-xl font-semibold">{title}</p>
      <p className="text-gray-400 text-sm mt-1">{sub}</p>
    </div>
  );
}

function ServiceMiniCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 shadow-xl hover:border-white/20 transition-all duration-500">
      <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 shadow-xl hover:border-white/20 transition-all duration-500">
      <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-gray-400 leading-relaxed">{desc}</p>

      <div className="mt-6 h-[1px] bg-white/10 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-700" />
      </div>
    </div>
  );
}

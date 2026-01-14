"use client";

import { useState, SetStateAction } from "react";
import Nav from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

import hero from "../../../Assets/services/hero.jpg";
import affiliateImg from "../../../Assets/services/12.jpg";

import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";

// ✅ SECTION 1 (Like "Top Services" cards)
const affiliateServices = [
  {
    title: "Campaign Strategy & Planning",
    content:
      "We create a performance-first affiliate strategy aligned with your business goals, audience, and industry — ensuring your program starts with clarity and direction.",
  },
  {
    title: "Affiliate Recruitment & Onboarding",
    content:
      "We onboard trusted publishers, creators, and partners that fit your brand and bring high-intent traffic that converts into real revenue.",
  },
  {
    title: "Creative & Promo Asset Support",
    content:
      "From banners to offers, landing pages, and content guidelines — we provide affiliates everything they need to promote your brand professionally.",
  },
  {
    title: "Tracking, Attribution & Fraud Control",
    content:
      "We implement robust tracking and monitoring to measure clicks, conversions, payouts, and prevent low-quality traffic or fake conversions.",
  },
  {
    title: "Commission Structuring & Payout Setup",
    content:
      "We design fair and motivating commission models that keep affiliates active and drive consistent sales performance over time.",
  },
  {
    title: "Optimization & Growth Scaling",
    content:
      "We continuously optimize partnerships, creatives, and campaigns to improve ROI — so your affiliate program scales profitably and sustainably.",
  },
];

// ✅ SECTION 2 (Like "Why Do You Need Custom Web Designs")
const whyAffiliate = [
  {
    title: "Performance-Based Marketing",
    content:
      "You pay only when you get results — making affiliate marketing one of the safest and most ROI-driven digital growth channels.",
  },
  {
    title: "High-Intent Audience Reach",
    content:
      "Affiliates already have trust with their followers. That trust translates into faster decisions and better-quality conversions for your brand.",
  },
  {
    title: "Scalable Sales Engine",
    content:
      "Affiliate marketing lets you expand your growth without increasing internal team size — partners work as an extended sales network for your brand.",
  },
  {
    title: "Low Risk, High Reward",
    content:
      "Unlike ads where you pay per click, affiliate campaigns are built around measurable outcomes — keeping budgets controlled and performance focused.",
  },
  {
    title: "Brand Visibility Across Channels",
    content:
      "Your brand gets visibility across niche blogs, influencer platforms, coupon sites, publisher networks, and content communities — all at scale.",
  },
  {
    title: "Faster Growth with Verified Partners",
    content:
      "We ensure your program is built with quality affiliates who match your niche and bring genuine traffic — not random, irrelevant visitors.",
  },
];

// ✅ SECTION 3 (Like "Benefits of Hiring A Web Design Company")
const benefits = [
  {
    title: "Higher Sales & Revenue Growth",
    content:
      "Drive more conversions and predictable sales through trusted affiliate promotions across multiple categories.",
  },
  {
    title: "Better Cost Efficiency",
    content:
      "Affiliate marketing reduces wastage because you invest in outcomes instead of paying upfront for uncertain results.",
  },
  {
    title: "Stronger Brand Trust",
    content:
      "Affiliates bring credibility — when trusted creators recommend you, customers feel confident and convert faster.",
  },
  {
    title: "Consistent Traffic Boost",
    content:
      "Get ongoing traffic streams from content affiliates, publishers, blogs, and creators that work long-term.",
  },
  {
    title: "Real-Time Campaign Insights",
    content:
      "We track what’s working and optimize continuously — ensuring stable performance improvement month after month.",
  },
  {
    title: "End-to-End Affiliate Management",
    content:
      "From recruitment to tracking, payouts, creatives, and optimization — we handle everything while you focus on growth.",
  },
];

const faqs = [
  {
    q: "What are the advantages of affiliate marketing?",
    a: "Affiliate marketing brings higher traffic, increased brand visibility, better conversions, cost-effective growth, and performance-based sales. Our affiliate marketing services in Delhi ensure you pay only for real results.",
  },
  {
    q: "Is affiliate marketing expensive?",
    a: "No. Affiliate marketing is one of the most budget-friendly digital marketing methods because you pay only when affiliates deliver real sales or leads. This makes affiliate marketing in Delhi highly profitable for businesses of all sizes.",
  },
  {
    q: "How do you ensure high-quality affiliates?",
    a: "We vet affiliates based on niche relevance, traffic quality, content authenticity, and performance history. As a trusted affiliate marketing agency in Delhi, we match you only with affiliates who can drive genuine, high-converting traffic.",
  },
  {
    q: "How do you track affiliate performance?",
    a: "We use industry-grade tracking tools to monitor clicks, conversions, attribution, payouts, and fraud detection. Our affiliate marketing company in Delhi provides real-time dashboards and transparent insights.",
  },
  {
    q: "How do I find affiliates for my business?",
    a: "We recruit affiliates from our verified network, niche publishers, influencers, bloggers, and ad partners. Our affiliate marketing services in Delhi include complete affiliate onboarding and management.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We offer affiliate marketing in Delhi for e-commerce, finance, health, education, real estate, SaaS, lifestyle, B2B, travel, and more. Each industry receives a tailored affiliate strategy.",
  },
];

export default function AffiliateMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />

      {/* ✅ GLOBAL BACKGROUND (Same as reference) */}
      <div className="relative">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        {/* Soft Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[460px] h-[460px] bg-white/10 blur-3xl rounded-full" />
          <div className="absolute top-40 -right-40 w-[460px] h-[460px] bg-white/10 blur-3xl rounded-full" />
        </div>

        {/* ================= HERO ================= */}
        <section className="relative pt-[110px] md:pt-[140px] pb-16">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Affiliate Marketing
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Scale revenue with{" "}
                <span className="text-[var(--secondary-color)] font-semibold italic">
                  performance-driven
                </span>{" "}
                affiliate partnerships.
              </h1>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify">
                Bigwig Media Digital helps brands grow faster with structured
                affiliate marketing systems. We build trusted partnerships,
                onboard the right affiliates, and optimize performance so you
                get measurable conversions — and pay only for real outcomes.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Contact Us"
              />
            </div>

            {/* Right Image (Glass Frame) */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <Image
                  src={hero}
                  alt="Affiliate Marketing Hero"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT BLOCK ================= */}
        <section className="relative pb-20">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)]">
                Affiliate Marketing Services in Delhi That Focus on ROI
              </h2>

              <p className="text-gray-300 text-justify leading-relaxed">
                Affiliate marketing is one of the most cost-effective ways to
                grow sales — but only when it’s managed strategically. We help
                you launch, manage, and scale affiliate programs with verified
                partners that bring targeted traffic and real conversions.
              </p>

              <p className="text-gray-300 text-justify leading-relaxed">
                If you want predictable growth, transparent tracking, and a
                program that scales profitably, Bigwig Media Digital is your
                trusted affiliate marketing partner.
              </p>

              <ButtonFill
                text="Get Started Today"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <Image
                src={affiliateImg}
                alt="Affiliate Marketing Services"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= SERVICES CARDS ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Our Affiliate Marketing Services in Delhi
              </h2>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
                Everything You Need to Launch and Scale a Profitable Program
              </h3>

              <p className="text-gray-300 leading-relaxed">
                We manage the complete affiliate ecosystem — strategy,
                recruitment, tracking, payouts, optimization, and reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {affiliateServices.map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="p-6 flex flex-col h-full">
                    <h4 className="text-lg font-semibold text-[var(--color5)] mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed text-justify">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Start Your Affiliate Program"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= WHY AFFILIATE ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Why Affiliate Marketing Works
              </h2>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
                A Low-Risk Growth Model Built for Long-Term Revenue
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Affiliate marketing helps brands scale faster by leveraging
                trusted promoters — without wasting budget on uncertain results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyAffiliate.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                >
                  <h4 className="text-lg font-semibold text-[var(--color5)] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Get Growth Strategy"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Benefits of Hiring an Affiliate Marketing Agency in Delhi
              </h2>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
                Why Brands Prefer Professional Affiliate Management
              </h3>

              <p className="text-gray-300 leading-relaxed">
                When experts manage your affiliate program, you get cleaner
                tracking, stronger partners, higher conversions, and stable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                >
                  <h4 className="text-lg font-semibold text-[var(--color5)] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Talk to an Expert"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="pb-28 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  onClick={() => toggleItem(index)}
                  className="
                    cursor-pointer
                    rounded-3xl p-6
                    bg-white/5 border border-white/10 backdrop-blur-xl
                    shadow-xl transition-all duration-300
                    hover:border-white/20
                  "
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-base md:text-lg font-semibold text-[var(--color5)]">
                      {item.q}
                    </h3>
                    <span className="text-[var(--color5)] text-2xl font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-96 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Start Your Project Today"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

"use client";

import Footer from "../../../Components/Footer";
import Nav from "../../../Components/Navbar";

import hero from "../../../Assets/services/hero.jpg";
import ppc from "../../../Assets/services/7.jpg";

import Slider from "react-slick";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";

const whyPartnerData = [
  {
    title: "Strategic Insights",
    content:
      "As a leading performance marketing company in Delhi, we take the time to understand your business model, market landscape, and customer behavior. This allows us to craft strategies that truly connect with your audience and consistently drive conversions.",
  },
  {
    title: "Data-Driven Campaigns",
    content:
      "Every campaign we run is powered by data. Following the principles of a performance-focused digital marketing agency, we make decisions based on analytics not assumptions. This ensures your budget is optimized for maximum ROI, making us one of the most effective performance-based marketing teams in the region.",
  },
  {
    title: "Comprehensive Service Spectrum",
    content:
      "Our performance marketing services in Delhi cover the full range of digital growth channels. From SEO and PPC to social media, content marketing, and conversion optimization, you get a complete, integrated marketing solution under one roof.",
  },
  {
    title: "Transparent Reporting",
    content:
      "Clarity is at the core of our approach. As a trusted performance marketing agency in Delhi, we provide clear, easy-to-understand reports that highlight your campaign’s progress, insights, and opportunities for future improvement.",
  },
  {
    title: "Adaptive and Agile",
    content:
      "The digital world moves fast, and staying static means falling behind. Our team stays ahead of trends, algorithm updates, and consumer shifts to ensure your marketing strategies remain relevant, competitive, and future-ready.",
  },
  {
    title: "Continuous Optimization",
    content:
      "Top performance marketing agencies in Delhi succeed by constantly refining strategies. We actively monitor industry trends, audience behavior, and platform changes to ensure your campaigns not only perform but continue outperforming in a crowded marketplace.",
  },
];

const industriesData = [
  {
    title: "Fashion Industry",
    content:
      "Our expertise in the fashion sector enables us to create visually compelling, trend-focused campaigns that showcase collections, attract enthusiasts, and drive sales through targeted performance marketing.",
  },
  {
    title: "Electronics & Technology",
    content:
      "Whether it’s smartphones, accessories, or advanced gadgets, we use precision targeting to reach tech-savvy audiences, increasing brand awareness and boosting product sales.",
  },
  {
    title: "Healthcare Sector",
    content:
      "As a knowledgeable performance marketing company in Delhi, we build compliant, informative, and high-performing campaigns that educate, engage, and convert, helping healthcare providers reach the right patients ethically and effectively.",
  },
  {
    title: "Hospitality & Travel",
    content:
      "Hotels, restaurants, and travel agencies trust us to craft captivating visuals and persuasive messaging that attract travelers, boost bookings, and enhance brand visibility.",
  },
  {
    title: "Education & E-Learning",
    content:
      "We help institutions and e-learning platforms connect with potential students by promoting courses and programs through targeted, high-intent advertising campaigns.",
  },
  {
    title: "Retail & E-Commerce",
    content:
      "From apparel to home goods, we create performance-driven strategies that increase traffic, boost online sales, and enhance customer retention across diverse e-commerce niches.",
  },
  {
    title: "Finance & Banking",
    content:
      "With an emphasis on security and compliance, we develop campaigns for banks, fintech brands, and financial institutions, promoting loans, investments, and financial products to highly targeted audiences.",
  },
  {
    title: "Automotive Industry",
    content:
      "From dealerships to manufacturers, we create campaigns that highlight vehicle features, build interest, and generate qualified leads from potential buyers.",
  },
];

const faqs = [
  {
    q: "What is Performance Marketing, and How Can a Performance Marketing Agency in Delhi Benefit My Business?",
    a: `Performance marketing is a results-driven approach where you pay only for measurable actions such as clicks, leads, sales, or conversions.
Partnering with a performance marketing agency in Delhi helps you scale faster using data, targeting, and optimization techniques to reach the right audience and maximize ROI. Whether you're a startup or an established business, performance marketing ensures every rupee spent moves you closer to growth.`,
  },
  {
    q: "How Do Performance Marketing Agencies in Delhi Measure Success?",
    a: `A performance marketing company in Delhi measures success using metrics such as:

• Click-through rates (CTR)
• Cost per lead (CPL)
• Return on ad spend (ROAS)
• Conversion rate
• Customer acquisition cost (CAC)

These KPIs ensure transparency and help refine campaigns for better performance.`,
  },
  {
    q: "What Makes a Performance Marketing Company in Delhi Different From Traditional Marketing Agencies?",
    a: `Traditional agencies focus on reach and visibility, while a performance-based digital marketing agency prioritizes measurable outcomes.
Unlike traditional marketing, performance marketing offers:

• Real-time tracking
• Targeted campaigns
• ROI-focused strategies
• Pay-for-performance models

This means you only invest in strategies that bring tangible results.`,
  },
  {
    q: "Can Performance-Based Digital Marketing Agencies Help with Brand Awareness?",
    a: `Absolutely. While performance marketing is known for conversions, it also boosts brand visibility.
A performance-based marketing agency uses precise audience targeting, engaging creatives, and strategic placements to increase brand recall and build trust.`,
  },
  {
    q: "What Services Do Performance-Based Marketing Agencies Offer?",
    a: `A full-service performance marketing agency in Delhi typically provides:

• Google Ads & PPC
• Social Media Ads (Meta, Instagram, YouTube, LinkedIn)
• SEO (Search Engine Optimization)
• Content marketing
• Landing page optimization
• Email & automation funnels
• Conversion rate optimization (CRO)

These services work together to attract, nurture, and convert customers.`,
  },
  {
    q: "How Do I Choose the Right Performance Marketing Services in Delhi for My Business?",
    a: `Look for a performance marketing agency near you that offers:

• Proven industry experience
• Transparent reporting
• Data-driven decision-making
• Customized strategies
• A strong portfolio of results

Choose an agency that understands your goals and aligns strategies accordingly.`,
  },
  {
    q: "What Can We Do for You to Be the Best?",
    a: `As a dedicated performance marketing company in Delhi, we focus on:

• Understanding your business deeply – goals, audience, challenges
• Building high-impact marketing systems for consistent growth
• Continuous optimization to stay ahead of competitors

Our mission: help you outperform your market with smart, scalable performance marketing.`,
  },
  {
    q: "Is Performance Marketing Expensive?",
    a: `Costs depend on goals, competition, and industry. The good news?

Performance marketing is one of the most cost-effective digital strategies because you only pay for measurable outcomes.

With the right agency, even small budgets can generate strong returns through precise targeting and optimization.`,
  },
  {
    q: "Is Performance Marketing Necessary?",
    a: `Yes, especially in today’s competitive digital ecosystem. Performance marketing:

• Reduces wasted ad spend
• Improves targeting accuracy
• Delivers faster results
• Provides clear, trackable ROI
• Helps businesses scale predictably

For any brand aiming for growth, performance marketing is a strategic necessity.`,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: false,
};

export default function PerformanceMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <title>ROI-Driven Performance Marketing</title>
      <meta
        name="description"
        content="Maximize your ROI with data-driven performance marketing services tailored for your business goals."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/performance-marketing"
      />

      <Nav />

      {/* ✅ GLOBAL BACKGROUND */}
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
                ROI-Driven Growth
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Performance Marketing Company in{" "}
                <span className="text-[var(--secondary-color)] font-semibold italic">
                  Delhi
                </span>
              </h1>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify">
                At Bigwig Media Digital, we’re more than just another
                performance marketing agency — we’re a team driven by strategy,
                creativity, and measurable outcomes. We help businesses across
                Delhi NCR scale visibility, conversions, and ROI using
                performance-first campaigns.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Get Free Consultation"
              />
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <Image
                  src={hero}
                  alt="Performance Marketing Hero"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO BLOCK ================= */}
        <section className="relative pb-20">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)]">
                Build Your Brand with a Leading Performance Marketing Agency
              </h2>

              <p className="text-gray-300 text-justify leading-relaxed">
                In the fast-moving digital pulse of Delhi, businesses need more
                than just presence — they need performance. We cut through the
                noise with measurable, revenue-focused campaigns built to win.
              </p>

              <p className="text-gray-300 text-justify leading-relaxed">
                From PPC to paid social and conversion optimization, we craft
                full-funnel marketing systems designed for scalable growth.
              </p>

              <ButtonFill
                text="Get Started Today"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <Image
                src={ppc}
                alt="Top PPC & Performance Marketing"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= WHY PARTNER ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Why Partner with a Premier Performance Marketing Company?
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                We combine data + creativity + optimization to build campaigns
                that consistently deliver leads, sales, and measurable ROI.
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block lg:hidden">
              <Slider {...settings}>
                {whyPartnerData.map((item, index) => (
                  <div key={index} className="px-2">
                    <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl p-6">
                      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                      <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed text-justify relative z-10">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPartnerData.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-justify relative z-10">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Boost ROI With Us"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= BIGWIG NOTE ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 relative z-10">
                Why Bigwig Media Digital – and No One Else?
              </h2>

              <div className="space-y-5 text-gray-300 leading-relaxed text-justify relative z-10">
                <p>
                  When you’re investing serious money into growth, you deserve
                  results you can track. Our team is obsessed with performance,
                  strategy, and optimization — because growth isn’t luck, it’s a
                  system.
                </p>

                <p>
                  We build campaigns across every channel that matters: ads,
                  funnels, landing pages, retargeting, and CRO — ensuring every
                  rupee spent has a purpose.
                </p>

                <p>
                  If you want a partner that’s committed, creative, and
                  relentlessly performance-focused — you won’t find better.
                </p>
              </div>

              <div className="flex justify-center mt-10 relative z-10">
                <ButtonFill
                  text="Work With Experts"
                  onClick={() => setIsPopupOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Industries That Benefit from Performance Marketing
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                We deliver scalable strategies for brands across industries —
                from retail and healthcare to fintech, travel, and education.
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block lg:hidden">
              <Slider {...settings}>
                {industriesData.map((item, index) => (
                  <div key={index} className="px-2">
                    <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl p-6">
                      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                      <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed text-justify relative z-10">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industriesData.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-justify relative z-10">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Start Scaling Today"
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
                        ? "max-h-[650px] mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
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

        {/* ================= OTHER SERVICES TABLE ================= */}
        <section className="py-20 relative overflow-hidden z-10">
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto space-y-14 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider">
              Our Other Services
            </h2>

            <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.15)] relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent animate-scan" />

              <table className="min-w-full text-sm text-gray-200 relative z-10">
                <tbody>
                  {[
                    [
                      "Search Engine Optimization",
                      "Social Media Marketing",
                      "Performance Marketing",
                    ],
                    [
                      "Content Marketing",
                      "Website Designing & Development",
                      "Email Marketing",
                    ],
                    [
                      "Social Media Optimization",
                      "Graphic Designing & Video Editing",
                      "Influencer Marketing",
                    ],
                    ["Online Reputation Management", "", "Affiliate Marketing"],
                  ].map((row, rowIndex) => (
                    <tr key={rowIndex} className="divide-x divide-white/10">
                      {row.map((cell, colIndex) => (
                        <td
                          key={colIndex}
                          className="h-20 border-b border-white/10 relative group overflow-hidden"
                        >
                          {cell && (
                            <a
                              href={`/services/${cell
                                .toLowerCase()
                                .replace(/ /g, "-")
                                .replace(/\&/g, "and")}`}
                              target="_blank"
                              className="
                                flex items-center justify-center 
                                w-full h-full px-4 text-center 
                                font-semibold text-gray-200
                                transition-all duration-300
                                hover:text-[var(--color5)]
                              "
                            >
                              <span
                                className="
                                  absolute inset-0 rounded-xl 
                                  border border-transparent
                                  group-hover:border-[var(--color5)]
                                  group-hover:shadow-[0_0_20px_var(--color5)]
                                  transition-all duration-300
                                "
                              />
                              <span className="relative z-10">{cell}</span>
                            </a>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <style>{`
              @keyframes scan {
                0% { transform: translateX(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(100%); opacity: 0; }
              }
              .animate-scan {
                animation: scan 4s linear infinite;
              }
            `}</style>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

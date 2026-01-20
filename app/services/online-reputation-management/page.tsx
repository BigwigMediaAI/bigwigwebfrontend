"use client";

import { SetStateAction, useState } from "react";
import Nav from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

import hero from "../../../Assets/services/hero.jpg";
import orm from "../../../Assets/services/16.jpg";

import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";
import Slider from "react-slick";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const data = [
  {
    title: "Online Reputation Audit",
    content:
      "We review your digital footprint to pinpoint strengths, weaknesses, and areas that require immediate attention.",
  },
  {
    title: "Reputation Management",
    content:
      "Our tailored ORM strategies help reduce the impact of negative content while elevating positive brand perception.",
  },
  {
    title: "Brand Monitoring",
    content:
      "We track brand mentions across all platforms and respond promptly to any negativity to safeguard your reputation.",
  },
  {
    title: "Social Media Management",
    content:
      "Our team manages your social profiles, ensuring consistent branding, strong engagement, and a trustworthy online presence.",
  },
  {
    title: "Review Management",
    content:
      "Positive reviews influence customer decisions. We help enhance and maintain review quality across major platforms.",
  },
];

const ormData = [
  {
    title: "Developing a Positive Brand Image",
    content:
      "A strong digital reputation is vital in today’s competitive environment. Our team builds a credible and engaging brand presence through tailored content strategies, review enhancement, and multi-platform reputation management.\n\nThis results in higher visibility, stronger customer trust, and a more positive online impression.",
  },
  {
    title: "Brand Monitoring",
    content:
      "Understanding what people say about your brand is essential. Our comprehensive brand monitoring services track mentions across social media, blogs, review sites, and search engines.\n\nWe identify potential issues early, address them promptly, and maintain a consistent brand narrative.",
  },
  {
    title: "Responding to Negative Reviews",
    content:
      "Negative feedback can harm your business if not handled correctly. Our team responds professionally, addresses customer concerns, and aims to turn dissatisfaction into positive experiences.\n\nEffective review management helps restore trust and strengthen your brand reputation.",
  },
  {
    title: "Positive Content Promotion",
    content:
      "Positive content supports long-term reputation growth. We promote reviews, testimonials, case studies, and valuable brand stories across relevant digital platforms.\n\nThis helps your brand gain visibility, credibility, and customer confidence.",
  },
  {
    title: "Strengthening Your Social Media Presence",
    content:
      "A reliable social media presence contributes directly to your reputation. We create tailored content, engage with followers, and ensure your platforms reflect authenticity and professionalism.\n\nThis leads to improved brand recognition and customer loyalty.",
  },
];

const faq = [
  {
    q: "How long does it take to see results with ORM Services?",
    a: `The timeline depends on the complexity of your reputation issues. Brands typically begin seeing results within 4 to 12 weeks.
More severe cases may require additional time. A professional ORM Agency in Delhi designs a structured plan to ensure steady improvement and lasting results.`,
  },
  {
    q: "How much do ORM Services cost?",
    a: `Pricing varies depending on the level of monitoring, content removal needs, review management, and competition in your industry.
To get accurate cost estimates, businesses often consult the Best ORM Company in Delhi for a customized package that matches their goals.`,
  },
  {
    q: "Why is having a good Online Reputation necessary for businesses?",
    a: `A strong reputation improves customer trust, conversions, and brand visibility.
Since consumers check reviews before making decisions, maintaining a positive image through Online Reputation Management Delhi helps businesses attract more customers, increase sales, and stand out from competitors.`,
  },
  {
    q: "How to fix a damaged reputation?",
    a: `Fixing a damaged reputation requires:
● Identifying harmful content
● Publishing positive articles, blogs, and testimonials
● Responding professionally to negative reviews
● Promoting high-quality content to push down negative results
● Continuous monitoring

A skilled ORM Agency in Delhi uses tools and strategies to restore trust and strengthen your brand image.`,
  },
  {
    q: "Is Online Reputation Management and SEO the same thing?",
    a: `No. SEO focuses on ranking higher in search engines, while ORM focuses on shaping public perception of your brand.
ORM may use SEO techniques, but the main goal is reputation improvement. Many businesses combine SEO with ORM Services in Delhi for a stronger online presence.`,
  },
  {
    q: "Can negative reviews be deleted?",
    a: `Negative reviews can only be removed if they violate platform policies (spam, fake, abusive, or misleading content).
However, ORM specialists can reduce the impact of bad reviews by responding professionally and increasing positive feedback to balance your overall rating.`,
  },
  {
    q: "Why is Online Reputation Management critical for my business?",
    a: `Consumers trust online reviews as much as personal recommendations. A poor reputation harms credibility and sales.
Online Reputation Management Delhi ensures your brand appears trustworthy, resolves negative impressions, and highlights positive customer experiences.`,
  },
  {
    q: "How long does it take to improve my Online Reputation?",
    a: `Minor reputation issues may improve within 30 days, while larger challenges may take 3–6 months or longer.
Working with the Best ORM Company in Delhi ensures that improvements are consistent and long-lasting.`,
  },
  {
    q: "How can you help in increasing my rating?",
    a: `Reputation experts can:
● Encourage satisfied customers to leave reviews
● Respond professionally to negative reviews
● Identify and report fake or harmful reviews
● Improve overall brand visibility

Boosting customer ratings is a key part of effective ORM Services in Delhi.`,
  },
  {
    q: "Types of Online Reputation Management?",
    a: `ORM includes:
● Review management
● Social media reputation management
● Search result cleanup
● Crisis management
● Brand monitoring
● Personal reputation management

A qualified ORM Agency in Delhi selects the right combination of services based on your industry and goals.`,
  },
  {
    q: "What is Online Reputation Management (ORM)?",
    a: `ORM involves monitoring, influencing, and improving how your brand appears online.
It includes review handling, content creation, social media management, and search result optimization.
Businesses hire the Best ORM Company in Delhi to maintain a strong and positive digital identity.`,
  },
  {
    q: "How soon can I expect results from ORM services?",
    a: `Some improvements may appear within a few weeks, but full results take time depending on the severity of negative content.
ORM is an ongoing effort that creates steady and lasting brand credibility.`,
  },
  {
    q: "Can negative content or reviews be removed completely?",
    a: `Only content that violates a platform’s rules can be directly removed.
Otherwise, ORM strategies focus on suppressing negative content by improving positive search results and increasing favorable customer feedback.`,
  },
  {
    q: "Is ORM only suitable for large businesses or brands?",
    a: `No. ORM is important for local businesses, startups, professionals, and large companies alike.
Even small businesses benefit from Online Reputation Management Delhi, since customers often decide based on online reviews.`,
  },
  {
    q: "How does ORM help with SEO?",
    a: `ORM supports SEO by creating high-quality content, improving brand trust, and boosting the visibility of positive pages.
This pushes negative content down and enhances your overall digital presence.`,
  },
  {
    q: "Why is ORM important for local businesses in Delhi?",
    a: `Local consumers rely heavily on reviews and search results before visiting or purchasing.
Strong ORM Services in Delhi help improve local search rankings, attract more customers, and build a reliable brand image in a competitive market.`,
  },
];

export default function OnlineReputationManagement() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sliderSettings = {
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

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <title>Online Reputation Management</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/online-reputation-management"
      />
      <meta
        name="description"
        content="Monitor, manage, and enhance your brand's online image with strategic ORM services."
      />

      <Nav />

      {/* ✅ GLOBAL BACKGROUND (Premium Theme) */}
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
                Online Reputation Management (ORM)
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                ORM Services in Delhi to{" "}
                <span className="text-[var(--secondary-color)] font-semibold italic">
                  protect your brand
                </span>{" "}
                online.
              </h1>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify">
                Your reputation is your first impression. Bigwig Media Digital
                helps you monitor, improve, and strengthen your brand image with
                smart ORM strategies — review management, monitoring, content
                promotion, and crisis control.
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
                  alt="Online Reputation Management Hero"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="relative pb-20">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)]">
                Online Reputation Management Company in Delhi NCR
              </h2>

              <p className="text-gray-300 text-justify leading-relaxed">
                In today’s digital world, a single negative comment can
                influence purchasing decisions. This makes ORM essential for
                businesses aiming to stay competitive and maintain customer
                trust.
              </p>

              <p className="text-gray-300 text-justify leading-relaxed">
                At Bigwig Media Digital, our ORM experts monitor, manage, and
                enhance your brand’s online reputation using advanced tools and
                real-time tracking methods.
              </p>

              <ButtonFill
                text="Get ORM Consultation"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <Image
                src={orm}
                alt="Online Reputation Management Services"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= ORM SERVICES ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Our ORM Services in Delhi
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                We offer complete end-to-end ORM support including auditing,
                monitoring, reputation repair, and long-term brand trust
                building.
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block lg:hidden">
              <Slider {...sliderSettings}>
                {data.map((item, index) => (
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
              {data.map((item, index) => (
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
                text="Start ORM Now"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 relative z-10">
                Why Choose Bigwig Media Digital as Your ORM Agency in Delhi?
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify relative z-10">
                Partnering with an experienced ORM team ensures measurable and
                long-lasting results. We help you protect your digital identity,
                improve customer trust, and strengthen your brand credibility.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 relative z-10">
                {[
                  "Advanced tools for monitoring and analysis",
                  "Customized ORM strategies",
                  "Timely responses to negative reviews",
                  "Transparent progress reports",
                  "Stronger brand credibility and online visibility",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)]" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10 relative z-10">
                <ButtonFill
                  text="Get In Touch"
                  onClick={() => setIsPopupOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= ORM IMPACT ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                How Our ORM Services Strengthen Your Brand
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                We take a structured approach to build trust, improve brand
                visibility, and ensure your online perception stays positive
                long-term.
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block lg:hidden">
              <Slider {...sliderSettings}>
                {ormData.map((item, index) => (
                  <div key={index} className="px-2">
                    <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl p-6">
                      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                      <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed text-justify whitespace-pre-line relative z-10">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ormData.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-justify whitespace-pre-line relative z-10">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Build a Strong Reputation"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Industries We Support
              </h2>

              <p className="text-gray-300 leading-relaxed">
                We support brands across industries with reputation protection,
                review handling, and trust-building strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Brand Reputation Management",
                "Corporate Reputation Management",
                "Celebrity Reputation Management",
                "Hotel ORM Services",
                "Hospital ORM Services",
                "Restaurant ORM Services",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                >
                  <p className="text-gray-300 font-medium">{item}</p>
                </div>
              ))}
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
              {faq.map((item, index) => (
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
        {/* MOBILE CTA BAR */}
        <div className="fixed bottom-0 left-0 w-full flex md:hidden z-40">
          <a
            href="tel:+918368573451"
            className="w-1/2 bg-[var(--primary-color)] backdrop-blur-md border-t border-white/10 text-white py-3 flex justify-center gap-2"
          >
            <FaPhoneAlt /> Call Us
          </a>

          <a
            href="https://wa.me/+918368573451"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 bg-[var(--secondary-color)] text-black py-3 flex justify-center gap-2 font-semibold"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}

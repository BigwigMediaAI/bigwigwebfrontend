"use client";

import Footer from "../../../Components/Footer";
import Nav from "../../../Components/Navbar";

import Hero from "../../../Assets/services/hero.jpg";
import Image from "next/image";

import ButtonFill from "../../../Components/ButtonFill";
import { SetStateAction, useState } from "react";

import Slider from "react-slick";

const data = [
  {
    title: "Complete Branding Solutions",
    points: ["Logo Design", "Brand Guidelines", "Brand Identity Systems"],
  },
  {
    title: "Marketing & Promotional Design",
    points: [
      "Brochures & Flyers",
      "Posters & Banners",
      "Catalogues & Print Ads",
    ],
  },
  {
    title: "Digital & Social Media Graphics",
    points: [
      "Instagram Creatives",
      "Facebook Ads",
      "YouTube Thumbnails",
      "Carousel Designs",
    ],
  },
  {
    title: "Packaging & Product Design",
    points: ["Labels", "Boxes", "Custom Packaging Visuals"],
  },
  {
    title: "UI/UX Graphics",
    points: ["Website Layout Graphics", "App Screens", "Interface Visuals"],
  },
];

const videoData = [
  {
    title: "Corporate & Business Videos",
    points: [
      "Corporate Profiles",
      "Training Videos",
      "Employee Orientation Videos",
    ],
  },
  {
    title: "Promotional & Marketing Videos",
    points: ["Brand Promo Videos", "Product Ads", "YouTube Ads"],
  },
  {
    title: "Social Media Video Editing",
    points: ["Reels", "Shorts", "TikTok Edits", "Influencer Videos"],
  },
  {
    title: "Event Video Editing",
    points: [
      "Weddings",
      "Corporate Events",
      "Award Ceremonies",
      "Launch Events",
    ],
  },
  {
    title: "Motion Graphics & Animation Editing",
    points: [
      "Explainer Videos",
      "Infographic Animations",
      "Title Animations",
      "Logo Reveal Animations",
    ],
  },
];

const faqs = [
  {
    q: "What services do you offer in graphic designing and video editing?",
    a: `We provide complete creative solutions including logo design, branding, social media creatives, brochures, packaging, promotional videos, reels, corporate films, product videos, and motion graphics.`,
  },
  {
    q: "How do you start a graphic designing or video editing project?",
    a: `Our process begins with understanding your goals, audience, and style preferences. Then we move into concept creation, design/editing development, revisions, and final delivery.`,
  },
  {
    q: "What makes your creative agency in Delhi different from others?",
    a: `We offer a rare combination of high-quality graphic designing and professional video editing, ensuring your brand visuals stay consistent across all platforms. Our strategies are data-driven, creative, and tailored to each brand.`,
  },
  {
    q: "Can I provide input during the design or editing process?",
    a: `Yes! We encourage collaboration. You can share references, feedback, and changes throughout the project to ensure the final result matches your vision.`,
  },
  {
    q: "How long does it take to complete a graphic design or video edit?",
    a: `Basic graphic designs are usually delivered within 2–4 days, while video edits take 2–7 days depending on complexity. Urgent projects are also handled on priority.`,
  },
  {
    q: "What is your pricing structure?",
    a: `Pricing depends on project type, complexity, duration, and deliverables. We offer one-time projects as well as monthly creative packages for brands needing regular content.`,
  },
  {
    q: "Do you offer revisions if I’m not satisfied with the initial work?",
    a: `Yes, we include revision rounds for both graphic designs and video edits to ensure you receive the perfect final output.`,
  },
  {
    q: "What file formats will I receive for designs and videos?",
    a: `Graphic designs are delivered in JPG, PNG, PDF, AI, EPS, or SVG formats, while videos are delivered in high-quality MP4, MOV, or the format of your choice.`,
  },
  {
    q: "Do you offer custom packages for graphic designing and video editing together?",
    a: `Yes, we create combined packages specially designed for brands that require both visuals and video content on a monthly or project basis.`,
  },
  {
    q: "Will the final designs and videos reflect my brand identity?",
    a: `Absolutely. Every design and video is created from scratch with your brand’s voice, colors, message, and target audience in mind.`,
  },
  {
    q: "How do I get started with your services?",
    a: `Simply contact us with your requirements, share your content, and our team will guide you through the process from planning to delivery.`,
  },
  {
    q: "I’m not located in Delhi, can I still work with your agency?",
    a: `Yes! We work with clients across India and internationally. Everything can be coordinated online, including briefings, feedback, and final delivery.`,
  },
];

export default function GraphicDesigning() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <div className="bg-black text-white min-h-screen">
      <title>Professional Graphic Designing</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/graphic-designing"
      />
      <meta
        name="description"
        content="Stand out with unique, creative, and impactful graphic design solutions for digital and print."
      />

      <Nav />

      {/* ✅ GLOBAL BACKGROUND (Grid + Glow like other pages) */}
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
                Design + Video Creative Studio
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Top Graphic Designing & Video Editing{" "}
                <span className="text-[var(--secondary-color)] font-semibold italic">
                  Company in Delhi
                </span>
              </h1>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify">
                As a leading graphic designing company in Delhi and a trusted
                video editing company in Delhi, we help brands communicate their
                story through visually compelling designs and professionally
                edited videos. From social media creatives to corporate films —
                we deliver speed, quality, and consistency that makes your brand
                stand out.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Get a Free Creative Consultation"
              />
            </div>

            {/* Right Premium Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <Image
                  src={Hero}
                  alt="Graphic Designing & Video Editing"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="relative pb-20 z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 relative z-10">
                Leading Graphic Designing Company in Delhi
              </h2>

              <p className="text-gray-300 text-justify leading-relaxed relative z-10">
                As a leading graphic designing company in Delhi, we specialize
                in creating visually powerful designs that help brands
                communicate with clarity, creativity, and impact. From startups
                to established businesses, we deliver end-to-end design
                solutions that enhance visibility, build trust, and drive
                engagement across all platforms.
              </p>
            </div>
          </div>
        </section>

        {/* ================= GRAPHIC DESIGN EXPERTISE ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Our Expertise in Graphic Designing in Delhi
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                From brand identity to packaging, marketing collateral, and UI
                graphics — we craft designs that are aesthetic, premium, and
                conversion-focused.
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block lg:hidden">
              <Slider {...settings}>
                {data.map((item, index) => (
                  <div key={index} className="px-2">
                    <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl p-6">
                      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                      <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                        {item.title}
                      </h3>

                      <ul className="space-y-2 text-gray-300 relative z-10">
                        {item.points.map((p, i) => (
                          <li key={i} className="list-disc ml-5">
                            {p}
                          </li>
                        ))}
                      </ul>
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

                    <ul className="space-y-2 text-gray-300 relative z-10">
                      {item.points.map((p, i) => (
                        <li key={i} className="list-disc ml-5">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Start Your Design Project"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= WHY TRUSTED ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 relative z-10">
                Why We Are the Most Trusted Graphic Designing Agency in Delhi
              </h2>

              <div className="space-y-5 text-gray-300 leading-relaxed text-justify relative z-10">
                <p>
                  We go beyond basic visuals — every design is crafted with
                  purpose, backed by research, and aligned with your brand’s
                  identity and goals. Our process stays smooth, clear, and
                  premium from start to final delivery.
                </p>

                <p>
                  Whether it’s building a new brand from scratch or refreshing
                  an existing identity — we deliver high-quality design systems
                  that look premium and perform better.
                </p>
              </div>

              <div className="flex justify-center mt-10 relative z-10">
                <ButtonFill
                  text="Book a Free Creative Consultation"
                  onClick={() => setIsPopupOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-10">
              Our Graphic Designing Process
            </h2>

            {/* DESKTOP VIEW */}
            <div className="hidden lg:flex items-center justify-between relative mt-10 w-full">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[var(--color5)]/30 -translate-y-1/2" />

              {[
                "Research & Creative Strategy",
                "Concept Development",
                "Design Execution",
                "Revisions & Refinements",
                "Final Delivery With Brand Consistency",
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center flex-1"
                >
                  <div
                    className="
                      w-28 xl:w-32 h-28 xl:h-32
                      flex items-center justify-center text-center
                      px-4 text-xs xl:text-sm
                      text-gray-300 font-medium
                      rounded-full border-2 border-[var(--color5)]
                      bg-white/5 backdrop-blur-sm
                      shadow-[0_0_25px_var(--color5)]
                      mx-auto
                    "
                  >
                    {step}
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE VIEW */}
            <div className="lg:hidden flex flex-col gap-8 relative mt-10">
              {[
                "Research & Creative Strategy",
                "Concept Development",
                "Design Execution",
                "Revisions & Refinements",
                "Final Delivery With Brand Consistency",
              ].map((step, index, arr) => (
                <div key={index} className="flex items-start gap-4 relative">
                  <div
                    className="
                      w-6 h-6 rounded-full border-2
                      border-[var(--color5)] bg-white/10
                      shadow-[0_0_10px_var(--color5)]
                      flex-shrink-0
                    "
                  />
                  {index !== arr.length - 1 && (
                    <div
                      className="
                        absolute left-3 top-6
                        w-px h-12 bg-[var(--color5)]/40
                      "
                    />
                  )}
                  <p className="text-gray-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VIDEO EDITING INTRO ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 relative z-10">
                Professional Video Editing Company in Delhi
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify relative z-10">
                We transform raw footage into high-quality, engaging video
                content that elevates your brand story. From corporate and
                promotional videos to reels, ads, and motion graphics — we
                create videos built for attention and performance.
              </p>

              <div className="flex justify-center mt-10 relative z-10">
                <ButtonFill
                  text="Get a Free Video Editing Consultation"
                  onClick={() => setIsPopupOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= VIDEO CATEGORIES ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Comprehensive Video Editing in Delhi for Every Industry
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                We tailor editing style, pacing, sound, and visuals depending on
                your industry — ensuring your videos speak directly to your
                audience.
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block lg:hidden">
              <Slider {...settings}>
                {videoData.map((item, index) => (
                  <div key={index} className="px-2">
                    <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl p-6">
                      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                      <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                        {item.title}
                      </h3>

                      <ul className="space-y-2 text-gray-300 relative z-10">
                        {item.points.map((p, i) => (
                          <li key={i} className="list-disc ml-5">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoData.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--color5)] mb-3 relative z-10">
                      {item.title}
                    </h3>

                    <ul className="space-y-2 text-gray-300 relative z-10">
                      {item.points.map((p, i) => (
                        <li key={i} className="list-disc ml-5">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Start Your Video Project"
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
                    relative overflow-hidden
                  "
                >
                  {/* scan lines */}
                  <div className="absolute inset-0 opacity-30 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 w-full h-[2px]
                        bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                        animate-cardScan"
                        style={{
                          top: `${40 + i * 45}px`,
                          animationDelay: `${i * 0.25}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center gap-4 relative z-10">
                    <h3 className="text-base md:text-lg font-semibold text-[var(--color5)]">
                      {item.q}
                    </h3>
                    <span className="text-[var(--color5)] text-2xl font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 relative z-10 ${
                      openIndex === index
                        ? "max-h-[450px] mt-4 opacity-100"
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

            <style>{`
              @keyframes cardScan {
                0% { transform: translateX(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(100%); opacity: 0; }
              }
              .animate-cardScan {
                animation: cardScan 5s linear infinite;
              }
            `}</style>
          </div>
        </section>

        {/* ================= OTHER SERVICES TABLE ================= */}
        <section className="py-20 relative overflow-hidden z-10">
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none" />

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
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

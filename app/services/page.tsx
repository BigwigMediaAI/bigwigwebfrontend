"use client";

import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import seo from "../../Assets/services/SEO.png";
import affiliate from "../../Assets/services/Affiliate Marketing.png";
import content from "../../Assets/services/Content Marketing.png";
import email from "../../Assets/services/Email Marketing.png";
import graphic from "../../Assets/services/Graphic Desining.png";
import influencer from "../../Assets/services/Influencer Marketing.png";
import orm from "../../Assets/services/ORM.png";
import performance from "../../Assets/services/Performance Marketing.png";
import smm from "../../Assets/services/SMM.png";
import smo from "../../Assets/services/SMO.png";
import website from "../../Assets/services/Website Development.png";

import Image from "next/image";
import ButtonFill from "../../Components/ButtonFill";
import Link from "next/link";

const services = [
  {
    title: "Website Designing & Development",
    heading: "Your digital store front, built to impress!",
    content:
      "We craft stunning, responsive websites that turn visitors into customers.",
    path: "/services/website-design-development",
    image: website,
  },
  {
    title: "Search Engine Optimization",
    heading: "Be visible when it matters most!",
    content:
      "We rank your website on Google so your customers find you before your competitors.",
    path: "/services/search-engine-optimization",
    image: seo,
  },
  {
    title: "Social Media Optimization",
    heading: "Be everywhere your audience is!",
    content:
      "We optimize your profiles for visibility, engagement, and brand authority across platforms.",
    path: "/services/social-media-optimization",
    image: smo,
  },
  {
    title: "Social Media Marketing",
    heading: "Turn your followers into loyal customers",
    content:
      "We run targeted campaigns, boost engagement, and build a strong brand presence across all social platforms.",
    path: "/services/social-media-marketing",
    image: smm,
  },
  {
    title: "Performance Marketing",
    heading: "Pay for results, not just clicks!",
    content:
      "Target the right audience with laser-focused Google & Meta ads that convert.",
    path: "/services/performance-marketing",
    image: performance,
  },
  {
    title: "Online Reputation Management",
    heading: "Your online image matters, protect it!",
    content:
      "We monitor, manage, and improve your digital reputation across platforms.",
    path: "/services/online-reputation-management",
    image: orm,
  },
  {
    title: "Graphic Designing & Video Editing",
    heading: "Designs that speak louder than words!",
    content:
      "We create eye-catching visuals that reflect your brand and grab attention instantly.",
    path: "/services/graphic-designing",
    image: graphic,
  },
  {
    title: "Email Marketing",
    heading: "Stay in their inbox and on their mind!",
    content:
      "We create powerful campaigns that nurture leads and boost conversions.",
    path: "/services/email-marketing",
    image: email,
  },
  {
    title: "Affiliate Marketing",
    heading: "Let others sell for you, smartly!",
    content:
      "Grow your brand with trusted affiliates promoting your product for results-based returns.",
    path: "/services/affiliate-marketing",
    image: affiliate,
  },
  {
    title: "Influencer Marketing",
    heading: "Real people. Real influence. Real results.",
    content:
      "We connect your brand with the right influencers to boost reach and trust authentically.",
    path: "/services/influencer-marketing",
    image: influencer,
  },
  {
    title: "Content Marketing",
    heading: "Words that work for your brand!",
    content:
      "From blogs to visuals, we create content that educates, engages, and builds trust.",
    path: "/services/content-marketing",
    image: content,
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      <title>Full Digital Marketing Services</title>
      <meta
        name="description"
        content="Explore our full suite of digital marketing services customized for businesses of all sizes."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services"
      />

      {/* PAGE WRAPPER */}
      <div className="relative pt-28 md:pt-36 pb-24">
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

        {/* CONTENT */}
        <div className="relative w-11/12 md:w-5/6 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              Full-Service Digital Marketing
            </span>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Our{" "}
              <span className="text-[var(--secondary-color)] italic font-serif">
                Services
              </span>
            </h2>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Strategy, design, performance, and growth — everything your brand
              needs to win online.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.path}
                className="group block h-full"
              >
                <div
                  className="
          h-full flex flex-col
          relative rounded-3xl overflow-hidden
          bg-white/5 backdrop-blur-md border border-white/10
          shadow-xl transition-all duration-500
          hover:border-white/20 hover:shadow-2xl hover:-translate-y-1
        "
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-[230px] overflow-hidden flex items-center justify-center bg-black/30">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="
              object-contain p-6
              opacity-90
              group-hover:opacity-100
              transition duration-500
            "
                      draggable={false}
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                    {/* PREMIUM GLOW */}
                    <div className="absolute -top-24 -right-24 w-52 h-52 bg-[var(--secondary-color)]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>

                  {/* CONTENT (Same height always) */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--secondary-color)] transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {service.content}
                    </p>

                    {/* Push button to bottom always */}
                    <div className="mt-auto pt-5">
                      <ButtonFill
                        className="
                opacity-0 translate-y-3
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500
              "
                        text="Explore"
                      />
                    </div>
                  </div>

                  {/* BORDER HIGHLIGHT */}
                  <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none group-hover:border-white/20 transition duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;

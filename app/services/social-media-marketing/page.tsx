"use client";

import { useState, SetStateAction, useEffect, useRef } from "react";
import Nav from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

import hero from "../../../Assets/Services/hero.jpg";
import smm from "../../../Assets/services/5.jpg";

import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";
import Slider from "react-slick";
import VanillaTilt from "vanilla-tilt";

const smoAds = [
  {
    title: "Meta Ads (Facebook & Instagram Advertising)",
    content:
      "Our advanced Social Media Marketing Services in Delhi include high-performing Meta Ads that capture attention and drive action. Whether your goal is brand awareness, engagement, or conversions, we design visually compelling and strategically optimized ad campaigns across Facebook and Instagram.",
  },
  {
    title: "LinkedIn Ads for High-Intent B2B Marketing",
    content:
      "Reach CEOs, decision-makers, and industry leaders with precision. As part of our comprehensive Social Media Services in Delhi, we manage LinkedIn Ads that generate qualified B2B leads through sponsored content, lead-gen forms, and retargeting campaigns.",
  },
  {
    title: "Snapchat Ads for Mobile-First Audiences",
    content:
      "Our Social Media Advertising expertise also includes Snapchat Ads designed for brands targeting younger, mobile-first users. Through immersive story ads, dynamic ads, and interactive formats, we help businesses boost engagement and build awareness.",
  },
  {
    title: "Twitter (X) Ads for Real-Time Visibility",
    content:
      "Stay relevant with trending campaigns powered by Twitter (X) Ads. Using hashtag targeting, interest targeting, and keyword-based advertising, our Social Media Ads help brands spark conversations, increase visibility, and reach active audiences in real time.",
  },
  {
    title: "YouTube Ads for Strong Video Branding",
    content:
      "As a key component of our Social Media Marketing Services in Delhi, we create YouTube ad campaigns that enhance brand recall and visibility. From skippable and non-skippable ads to bumper and in-feed formats, we ensure your message reaches the right viewers through high-impact video content.",
  },
];

const chooseBigwig = [
  {
    title: "Platform-Specific Expertise",
    content:
      "Every platform works differently, and so do our strategies. Whether it’s Meta, LinkedIn, Snapchat, YouTube, or Twitter (X), we craft platform-specific Social Media Advertising campaigns based on real-time algorithms, ad formats, audience behavior, and industry trends. This ensures your Social Media Ads reach the right audience with the right message.",
  },
  {
    title: "Creative + Strategy Approach",
    content:
      "Great results demand more than just good visuals. Our experts combine eye-catching creatives, persuasive copywriting, and data-driven targeting to craft campaigns that resonate with your audience. As a leading provider of SMM Services in Delhi, we ensure your brand’s message stays impactful and memorable.",
  },
  {
    title: "Conversion-Focused Funnels",
    content:
      "From awareness to engagement to final purchase, we build full-funnel strategies that guide your audience through a seamless buyer journey. Our Social Media Services in Delhi focus on generating not just traffic, but actual leads and conversions.",
  },
  {
    title: "Transparent Reporting & Weekly Optimization",
    content:
      "We believe in complete transparency. You get detailed insights on CPC, CTR, ROAS, CPL, and more. Our team conducts weekly optimization to improve performance continuously, ensuring your Social Media Marketing Services in Delhi investment delivers maximum value.",
  },
  {
    title: "Budget-Friendly Scaling",
    content:
      "Whether you're starting with ₹5,000 or scaling up to ₹5,00,000, our smart budget allocation ensures your campaigns achieve maximum output with minimum wastage. Our goal is sustainable and profitable scaling across all Social Media Advertising platforms.",
  },
];

const faqs = [
  {
    q: "What is included in social media marketing services?",
    a: "At BigWig Media Digital, our Social Media Marketing Services in Delhi include everything your brand needs to build a strong online presence—content creation, page management, audience engagement, hashtag research, competitor analysis, and strategic posting. We also provide creative design, reels, story creatives, monthly content calendars, and performance tracking. For brands looking to grow faster, we integrate Social Media Advertising and paid campaign management for maximum reach and conversions.",
  },
  {
    q: "What are the benefits of social media marketing services?",
    a: "Our SMM Services in Delhi help businesses increase brand awareness, engage with their audience, generate high-quality leads, and improve customer loyalty. With consistent posting, high-performing creatives, data-driven strategies, and ROI-focused Social Media Ads, you can grow your presence across platforms like Facebook, Instagram, LinkedIn, YouTube, Twitter (X), and Snapchat. Social media marketing also boosts website traffic, reputation, and conversions.",
  },
  {
    q: "Why should you hire a social media marketing agency in India?",
    a: "Hiring a professional agency like BigWig Media Digital ensures your brand gets expert-led strategy, creative direction, and performance-driven execution. Our team specializes in Social Media Services in Delhi, allowing you to focus on your business while we handle content creation, campaign management, audience targeting, and ongoing optimization. With deep industry insights, creative capabilities, and proven advertising frameworks, we help your brand achieve consistent, measurable results.",
  },
  {
    q: "How often will you post content on my social media profiles?",
    a: "Posting frequency depends on your package and marketing goals. Typically, we create a structured monthly content calendar that includes 12–20 posts per month, along with stories, reels, and engagement activities. Our Social Media Marketing Services in Delhi ensure your brand stays active, relevant, and consistently visible to your audience.",
  },
  {
    q: "How does BigWig Media Digital measure the success of social media campaigns?",
    a: "We use advanced tracking tools and detailed analytics to measure KPIs like engagement rate, reach, impressions, CPC, CTR, conversions, ROAS, and follower growth. Our performance reports offer complete transparency, and our team optimizes campaigns weekly to ensure continuous improvement. Whether it's organic growth or Social Media Advertising, we focus on delivering measurable and meaningful results.",
  },
  {
    q: "Can you help with social media advertising?",
    a: "Absolutely! BigWig Media Digital specializes in high-impact Social Media Advertising across Meta (Facebook & Instagram), LinkedIn, YouTube, Snapchat, and Twitter (X). We create conversion-focused Social Media Ads, handle audience targeting, A/B testing, funnel building, and ongoing optimization to help you generate leads, sales, and brand awareness at scale.",
  },
  {
    q: "What platforms do you manage?",
    a: `We manage all major social media platforms, including:
        
• Facebook
• Instagram
• LinkedIn
• YouTube
• Twitter (X)
• Snapchat
• Pinterest

Our Social Media Services in Delhi ensure your brand performs consistently across every platform where your audience is active.`,
  },
];

export default function SocialMediaMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ OPTIONAL Tilt
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    tiltRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 12,
          speed: 300,
          glare: true,
          "max-glare": 0.18,
          scale: 1.02,
        });
      }
    });
  }, []);

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

  const GlassCard = ({
    title,
    content,
    index,
  }: {
    title: string;
    content: string;
    index?: number;
  }) => (
    <div
      ref={(el) => {
        if (typeof index === "number") tiltRefs.current[index] = el;
      }}
      className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
    >
      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="p-6 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-[var(--color5)] mb-3">
          {title}
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed text-justify">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen">
      <title>Social Media Marketing Experts</title>
      <meta
        name="description"
        content="Drive engagement & growth with targeted social media marketing strategies tailored for your brand."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-marketing"
      />

      <Nav />

      {/* ✅ GLOBAL BACKGROUND (Same as reference design) */}
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
                Social Media Marketing (SMM)
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Best SMM Services in Delhi to{" "}
                <span className="text-[var(--secondary-color)] font-semibold italic">
                  grow your brand
                </span>{" "}
                online.
              </h1>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify">
                Our Social Media Marketing Services in Delhi are designed to
                boost engagement, improve brand authority, and generate quality
                leads through powerful content, strategy, and performance-driven
                social media advertising.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Get Free SMM Consultation"
              />
            </div>

            {/* Right Image (Glass Frame) */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <Image
                  src={hero}
                  alt="Social Media Marketing Hero"
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
                Why Your Business Needs SMM Services in Delhi
              </h2>

              <p className="text-gray-300 text-justify leading-relaxed">
                In a competitive market like Delhi, businesses must stay active
                and visible on social platforms. Professional SMM services help
                you connect with your audience, drive engagement, and build a
                strong brand presence.
              </p>

              <p className="text-gray-300 text-justify leading-relaxed">
                Social media is no longer optional — customers expect active
                communication and consistent content. With our Social Media
                Services in Delhi, we ensure your brand stays ahead of
                competitors.
              </p>

              <ButtonFill
                text="Start Growing with SMM"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <Image
                src={smm}
                alt="Social Media Marketing Agency"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= ADS SERVICES ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Our Social Media Advertising Services in India
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                We offer targeted and result-driven Social Media Advertising
                solutions designed to increase brand visibility, generate leads,
                and maximize ROI. Our performance-focused Social Media Ads help
                you reach the right audience across the most influential
                platforms.
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block lg:hidden">
              <Slider {...sliderSettings}>
                {smoAds.map((item, index) => (
                  <div key={index} className="px-2">
                    <GlassCard
                      title={item.title}
                      content={item.content}
                      index={index}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {smoAds.map((item, index) => (
                <GlassCard
                  key={index}
                  title={item.title}
                  content={item.content}
                  index={index}
                />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Launch Social Media Ads"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= GLASS BIG BLOCK ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 relative z-10">
                Reach Targeted Results With Social Media Marketing Services
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6 text-justify relative z-10">
                At Bigwig Media Digital, our expert team crafts data-driven
                strategies, creative content, and high-impact campaigns that
                help you connect with your ideal audience. With premium SMM
                services, we focus on boosting visibility, improving engagement,
                and driving measurable business growth.
              </p>

              <p className="text-gray-300 leading-relaxed text-justify relative z-10">
                From strategy to content creation, campaign execution, paid ads,
                and detailed performance analysis — everything is customized to
                your business goals and growth roadmap.
              </p>

              <div className="flex justify-center mt-8 relative z-10">
                <ButtonFill
                  text="Start Growing With SMM"
                  onClick={() => setIsPopupOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE BIGWIG ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Why Choose BigWig Media Digital for Social Media Marketing in
                India
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                We don’t just run basic campaigns — we build full-funnel,
                conversion-focused social systems designed to amplify your brand
                and deliver consistent ROI with transparency.
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block lg:hidden">
              <Slider {...sliderSettings}>
                {chooseBigwig.map((item, index) => (
                  <div key={index} className="px-2">
                    <GlassCard
                      title={item.title}
                      content={item.content}
                      index={index + 50}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {chooseBigwig.map((item, index) => (
                <GlassCard
                  key={index}
                  title={item.title}
                  content={item.content}
                  index={index + 50}
                />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonFill
                text="Start Your Growth Journey"
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
                        ? "max-h-[500px] mt-4 opacity-100"
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

        <Footer />
      </div>
    </div>
  );
}

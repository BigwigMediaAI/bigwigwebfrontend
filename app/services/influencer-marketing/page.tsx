"use client";

import Nav from "../../../Components/Navbar";
import hero from "../../../Assets/services/hero.jpg";
import influencer from "../../../Assets/services/15.jpg";
import Footer from "../../../Components/Footer";

import Slider from "react-slick";
import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";
import { SetStateAction, useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const chooseInfluencerItems = [
  {
    title: "Deep Understanding of Delhi’s Digital Culture",
    content:
      "Every city has its unique audience psychology. Delhi is driven by lifestyle, aspiration, energy, and relatability. Our influencer marketing agency in Delhi uses localized insights to craft campaigns that feel natural - not forced.",
  },
  {
    title: "Access to Verified, High-Impact Influencers",
    content:
      "From nano and micro creators to celebrities, our influencer network spans fashion, beauty, food, travel, fitness, finance, tech, parenting, and more. We ensure every collaboration matches your brand’s personality and goals.",
  },
  {
    title: "Data-Led Influencer Shortlisting",
    content: `We evaluate influencers through:
● Audience relevance
● Engagement quality
● Authenticity score
● Content style & tone
● Historical performance
This ensures you work only with influencers who deliver real outcomes.`,
  },
  {
    title: "Transparent, Authentic Partnerships",
    content:
      "No inflated numbers. No fake followers. No unclear deliverables. As a trusted influencer marketing company in Delhi, we guarantee authentic content, full transparency, and proper disclosure guidelines.",
  },
  {
    title: "Full Campaign Management",
    content:
      "We handle everything: strategy → influencer selection → negotiation → briefing → content approvals → posting schedules → reporting.\nYou focus on business. We handle the influence.",
  },
  {
    title: "Creative Strategies That Drive Engagement",
    content:
      "Our team creates scroll-stopping content ideas tailored for Reels, YouTube Shorts, long-form videos, lifestyle posts, and trending formats.",
  },
];

const influencerServicesItems = [
  {
    title: "Influencer Discovery & Shortlisting",
    content:
      "We match your brand with influencers who resonate with your audience and category.",
  },
  {
    title: "Campaign Strategy & Creative Direction",
    content: `Every campaign includes a clear:
● Objective
● Narrative
● Content plan
● Winning hooks
● Posting schedule`,
  },
  {
    title: "Content Production & Collaboration",
    content:
      "We coordinate scripts, concepts, visual themes, and creative alignment to ensure your brand looks premium and authentic.",
  },
  {
    title: "Brand & Influencer Alignment",
    content:
      "We also help brands find creators who genuinely value and reflect the brand’s message - not just those with followers.",
  },
  {
    title: "Campaign Execution & Optimization",
    content:
      "As a performance-driven influencer marketing company in Delhi, we track real-time engagement and optimize activities for the best ROI.",
  },
  {
    title: "Analytics, Reporting & ROI Tracking",
    content: `Our reports include:
● Impressions
● Engagement
● Video completion
● Conversions
● Traffic
● Click-throughs
● Sentiment analysis
● ROI insights`,
  },
];

export const influencerWorkflow = [
  {
    title: "Understanding Your Brand & Audience",
    content:
      "We start with a deep dive into your goals, product positioning, competitive landscape, and target persona.",
  },
  {
    title: "Identifying Ideal Influencers",
    content:
      "Our analytics tools ensure we find creators who genuinely influence your audience.",
  },
  {
    title: "Planning the Content Story",
    content:
      "We map out the storytelling arc — authentic, engaging, and perfectly suited for each platform.",
  },
  {
    title: "Collaboration & Content Creation",
    content:
      "Influencers create content that your audience trusts and engages with.",
  },
  {
    title: "Campaign Management & Optimization",
    content:
      "We monitor performance and tweak campaign elements to ensure maximum impact.",
  },
  {
    title: "Reporting & Insights",
    content:
      "You receive detailed reports that clearly show ROI and audience reaction.",
  },
];

const whyTrustedInfluencerCompany = [
  {
    title: "Proven Success Across Multiple Campaigns",
    content:
      "Our influencer partnerships have delivered millions of impressions, high engagement, and real sales.",
  },
  {
    title: "Expert Team of Strategists & Content Specialists",
    content:
      "We combine cultural insights, creativity, and analytics to craft campaigns that stand out.",
  },
  {
    title: "Strong Relationships with Influencers",
    content:
      "We work with influencers long-term, ensuring reliability, consistency, and better performance.",
  },
  {
    title: "Flexible, Scalable Campaign Options",
    content:
      "From small-budget startups to large enterprises, our packages scale with your goals.",
  },
];

const faqs = [
  {
    q: "What is the best influencer marketing agency in Delhi?",
    a: "The best influencer marketing agency in Delhi is one that combines deep creator networks, data-driven campaign planning, and strong storytelling. As a leading influencer marketing company in Delhi, we connect brands with verified creators who understand the pulse of Delhi audiences and deliver measurable engagement, reach, and ROI.",
  },
  {
    q: "How does Buzz Fame support influencers?",
    a: "A professional influencer marketing agency in Delhi supports influencers by offering creative guidance, timely communication, transparent collaboration, and fair compensation. We ensure influencers receive clear briefs, brand insights, and access to resources that help them create authentic, high-performing content.",
  },
  {
    q: "How do you measure the success of influencer campaigns?",
    a: "We track success using metrics like reach, impressions, engagement rate, content saves/shares, cost per engagement, and conversions. As a data-first influencer marketing company in Delhi, we provide full performance dashboards so brands can see exactly how influencer marketing in Delhi drives visibility and revenue.",
  },
  {
    q: "Can influencers outside Delhi collaborate with your agency?",
    a: "Yes. While we specialize in influencer marketing services in Delhi, we work with creators across India and international markets. Depending on your campaign goals, we onboard influencers from relevant regions, languages, and niches to ensure accurate audience targeting.",
  },
  {
    q: "Which industries do you work with for influencer marketing?",
    a: "As a full-scale influencer marketing company in Delhi, we work with brands across fashion, beauty, food, tech, fitness, real estate, education, travel, finance, lifestyle, and more. Our diverse influencer network helps us match creators to industries where they perform best.",
  },
  {
    q: "How do you ensure brand alignment when selecting influencers?",
    a: "We evaluate influencers based on niche relevance, audience demographics, engagement authenticity, past collaborations, content tone, and brand fit. This ensures influencer marketing in Delhi maintains authenticity and resonates with your target audience.",
  },
  {
    q: "What steps do you take to maintain engagement and authenticity in influencer partnerships?",
    a: "We encourage creators to maintain their natural storytelling style, use honest messaging, and integrate your brand organically. Our influencer marketing services in Delhi also include real-time content monitoring to ensure quality, compliance, and genuine audience interaction.",
  },
  {
    q: "Can you provide examples of creative campaign strategies implemented for clients?",
    a: "Yes. As a top influencer marketing agency in Delhi, we create strategies like reel challenges, product seeding, storytelling videos, creator collaborations, live sessions, unboxing themes, testimonial storytelling, and trend-based campaign formats. Each strategy is built around your brand goals.",
  },
  {
    q: "How do you negotiate on behalf of clients and manage influencer compensation?",
    a: "Our team handles influencer shortlisting, negotiations, contract drafting, payment processing, and deliverable tracking. This ensures brands get the best value while influencers receive fair compensation - making the entire influencer marketing process smooth and transparent.",
  },
  {
    q: "What systems are used to monitor and control influencer performance during campaigns?",
    a: "We use tools for real-time performance tracking, audience analytics, engagement verification, fraud detection, and reporting. This ensures your influencer marketing in Delhi remains optimized, authentic, and fully measurable throughout the campaign.",
  },
];

function InfluencerMarketing() {
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
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <title>Influencer Marketing Solutions</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/influencer-marketing"
      />
      <meta
        name="description"
        content="Connect with influencers who align with your brand to drive real engagement and sales."
      />

      <Nav />

      {/* ✅ Background Grid + Glow */}
      <div className="relative">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[460px] h-[460px] bg-white/10 blur-3xl rounded-full" />
          <div className="absolute top-40 -right-40 w-[460px] h-[460px] bg-white/10 blur-3xl rounded-full" />
        </div>

        {/* ✅ HERO */}
        <section
          className="relative pt-[120px] md:pt-[150px] pb-16"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 max-w-7xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Real Influence • Real Results
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                <span className="text-[var(--color5)] font-semibold italic">
                  Influencer Marketing Services in Delhi
                </span>
              </h1>

              <p className="text-gray-300 leading-relaxed text-justify">
                Influencer marketing has become one of the fastest, most
                authentic ways to reach audiences who trust real voices more
                than ads. With our performance-focused influencer marketing
                services in Delhi, your brand connects with creators who inspire
                conversations, drive engagement, and deliver measurable business
                results.
              </p>

              <p className="text-gray-300 leading-relaxed text-justify">
                As a leading influencer marketing agency in Delhi, we bring
                together brands and influencers through data, storytelling, and
                strategy - ensuring your message reaches the right people, in
                the right way, at the right time.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Get Started Now"
              />
            </div>

            {/* ✅ Right Glass CTA Card */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color5)] mb-3">
                Launch Your Next Viral Campaign
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Share your goals and we’ll build a creator plan that matches
                your audience + budget + desired results.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Book Free Strategy Call"
              />
            </div>
          </div>
        </section>

        {/* ✅ Intro + Image */}
        <section className="py-16 w-11/12 md:w-5/6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
                Leading Influencer Marketing Company in Delhi for Real Influence
                & Real Results
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                Delhi isn’t just a city - it’s a culture, a vibe, a marketplace
                of opinions. Our influencer marketing in Delhi captures this
                essence by partnering with creators who truly understand the
                Delhi audience.
              </p>

              <ul className="space-y-2 text-gray-300">
                {[
                  "Authentic content",
                  "Seamless partnership management",
                  "Transparent performance tracking",
                  "Campaigns built to trend and convert",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[var(--color5)]">✔</span>
                    {text}
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 leading-relaxed">
                That’s why brands trust us as their preferred influencer
                marketing company in Delhi.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <Image
                src={influencer}
                alt="Influencer Marketing Services"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ✅ TWO GLASS COLUMNS */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-7 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-8">
              Why Choose Our Influencer Marketing Agency in Delhi?
            </h2>

            <div className="space-y-8">
              {chooseInfluencerItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-[var(--color5)] mt-1" />
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--color5)]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-2 text-gray-300 leading-relaxed whitespace-pre-wrap text-justify">
                    {item.content.includes("●") ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.content.split("\n").map((line, i) =>
                          line.trim().startsWith("●") ? (
                            <li key={i}>{line.replace("●", "").trim()}</li>
                          ) : (
                            <p key={i} className="mt-2">
                              {line}
                            </p>
                          ),
                        )}
                      </ul>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-7 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-8">
              Influencer Marketing Services We Offer in Delhi
            </h2>

            <div className="space-y-8">
              {influencerServicesItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color5)] mt-1" />
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--color5)]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-2 text-gray-300 leading-relaxed whitespace-pre-wrap text-justify">
                    {item.content.includes("●") ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.content.split("\n").map((line, i) =>
                          line.trim().startsWith("●") ? (
                            <li key={i}>{line.replace("●", "").trim()}</li>
                          ) : (
                            <p key={i} className="mt-2">
                              {line}
                            </p>
                          ),
                        )}
                      </ul>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ WORKFLOW */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              How Our Influencer Marketing in Delhi Works
            </h2>
          </div>

          <div className="block lg:hidden">
            <Slider {...settings}>
              {influencerWorkflow.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
                    <h3 className="text-xl font-semibold text-[var(--color5)]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {influencerWorkflow.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-[var(--color5)]">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <ButtonFill
              text="Get Started Today"
              onClick={() => setIsPopupOpen(true)}
            />
          </div>
        </section>

        {/* ✅ TRUSTED COMPANY */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Why Brands Trust Us as an Influencer Marketing Company in Delhi
            </h2>
          </div>

          <div className="block lg:hidden">
            <Slider {...settings}>
              {whyTrustedInfluencerCompany.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
                    <h3 className="text-xl font-semibold text-[var(--color5)]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTrustedInfluencerCompany.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-[var(--color5)]">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ FAQ */}
        <section className="py-14 w-11/12 md:w-5/6 max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleItem(index)}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition cursor-pointer"
              >
                <div className="flex justify-between items-center gap-6">
                  <h3 className="text-base md:text-lg font-semibold text-[var(--color5)]">
                    {item.q}
                  </h3>
                  <span className="text-[var(--color5)] text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`transition-all duration-300 text-gray-300 overflow-hidden ${
                    openIndex === index
                      ? "max-h-[450px] mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="leading-relaxed text-justify">{item.a}</p>
                </div>
              </div>
            ))}
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

export default InfluencerMarketing;

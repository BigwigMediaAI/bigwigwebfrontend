"use client";

import Footer from "../../../Components/Footer";
import Nav from "../../../Components/Navbar";
import Hero from "../../../Assets/services/hero.jpg";
import contentImg from "../../../Assets/services/8.jpg";

import Slider from "react-slick";
import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";
import { SetStateAction, useState } from "react";

const whyChooseUs = [
  {
    title: "SEO-Driven Content That Ranks",
    description:
      "Every content piece is optimized for search intent, keywords, readability, and semantic relevance. We ensure your brand captures the right audience at the right time through strategic SEO-led content creation.",
  },
  {
    title: "End-to-End Content Marketing Execution",
    description:
      "From research to writing, design to distribution — we manage everything. Our content marketing in Delhi services cover blogs, videos, case studies, newsletters, website copy, social content, and more.",
  },
  {
    title: "Experienced Content Strategists & Industry Experts",
    description:
      "Your content ecosystem is managed by writers, editors, SEO specialists, designers, and strategists who understand your market and create content that resonates.",
  },
  {
    title: "Consistent Delivery & Quality Assurance",
    description:
      "We follow strict editorial guidelines, plagiarism checks, and quality reviews to ensure every piece of content is accurate, engaging, and conversion-focused.",
  },
  {
    title: "Customized Strategies for Every Business",
    description:
      "We tailor your content roadmap based on your industry, audience intent, and business goals — whether you’re looking to increase traffic, build thought leadership, or drive leads.",
  },
];

const contentMarketingServices = [
  {
    title: "SEO-Friendly Blogs & Articles",
    description:
      "Informative, keyword-rich blogs that improve rankings, attract organic traffic, and establish domain authority.",
  },
  {
    title: "Website Copywriting & Landing Page Content",
    description:
      "High-converting copy optimized for user experience, messaging clarity, and search intent — crafted by professional writers.",
  },
  {
    title: "Social Media Content Creation",
    description:
      "Platform-specific content, including creatives, scripts, captions, memes, carousels, reels, and storytelling posts.",
  },
  {
    title: "Video Scripts & Storyboards",
    description:
      "Engaging scripts for brand films, explainer videos, testimonials, YouTube videos, short reels, and educational content.",
  },
  {
    title: "Email Newsletter Content",
    description:
      "Conversion-focused newsletters and drip sequences to nurture leads and strengthen brand relationships.",
  },
  {
    title: "Case Studies & Success Stories",
    description:
      "Data-driven narratives that highlight your achievements and build trust with high-intent prospects.",
  },
  {
    title: "E-books & Whitepapers",
    description:
      "In-depth, research-backed resources that build authority and attract qualified leads.",
  },
  {
    title: "Infographics & Visual Content",
    description:
      "High-quality graphics, visual storytelling assets, and educational illustrations that simplify complex information.",
  },
  {
    title: "Content Strategy & Editorial Planning",
    description:
      "Full content roadmap including topics, formats, SEO opportunities, funnel mapping, and publishing schedules.",
  },
  {
    title: "Content Distribution & Amplification",
    description:
      "We promote your content across social media, email, communities, PR, and paid channels to maximize reach and engagement.",
  },
];

const contentMarketingProcess = [
  {
    step: "Research & Competitor Analysis",
    description:
      "We start by studying your audience, competitors, keyword ecosystem, market trends, and search behavior. This becomes the backbone of your strategy.",
  },
  {
    step: "Content Strategy Development",
    description:
      "We define your content goals, messaging pillars, formats, tonality, SEO themes, and publishing calendar.",
  },
  {
    step: "Content Creation",
    description:
      "Our writers and designers create high-quality content tailored to each stage of your funnel — Awareness, Consideration, and Conversion.",
  },
  {
    step: "Optimization & Editing",
    description:
      "Each piece undergoes SEO optimization, readability enhancements, grammar checks, and quality review.",
  },
  {
    step: "Publishing & Distribution",
    description:
      "We publish your content across your website, social media, email, PR, and other channels for maximum exposure.",
  },
  {
    step: "Performance Tracking & Reporting",
    description:
      "We track rankings, traffic, engagement, lead flow, and conversions — then refine the strategy to improve ROI.",
  },
];

const faqs = [
  {
    q: "What is content marketing, and how does it help businesses?",
    a: "Content marketing is the strategic creation and distribution of valuable content to attract, educate, and convert customers. Working with a content marketing agency in Delhi helps you build authority, grow organic traffic, and generate qualified leads.",
  },
  {
    q: "How long does content marketing take to show results?",
    a: "You’ll see engagement improvements in 30–45 days. SEO, traffic growth, and consistent lead generation typically take 3–6 months.",
  },
  {
    q: "Do you provide SEO along with content marketing services?",
    a: "Yes. As a full-service content marketing company in Delhi, we include keyword research, on-page SEO, and content optimization in all strategies.",
  },
  {
    q: "Can you create content for any industry?",
    a: "Absolutely. We work across healthcare, real estate, finance, SaaS, e-commerce, education, and more.",
  },
  {
    q: "Do you offer content for social media and video platforms?",
    a: "Yes — reels, scripts, shorts, animations, carousels, captions, and more.",
  },
];

function ContentMarketing() {
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
      <title>Creative Content Marketing Agency</title>
      <meta
        name="description"
        content="Grow organically with impactful content marketing strategies that attract, engage, and convert."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/content-marketing"
      />

      <Nav />

      {/* ✅ Premium Background Grid + Glow */}
      <div className="relative">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full" />
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full" />
        </div>

        {/* ✅ HERO */}
        <section
          className="relative pt-[120px] md:pt-[150px] pb-16"
          style={{
            backgroundImage: `url(${Hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 max-w-7xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                SEO Content • Strategy • Growth
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                <span className="text-[var(--color5)] font-semibold italic">
                  Content Marketing Services in Delhi
                </span>
              </h1>

              <p className="text-gray-300 leading-relaxed text-justify">
                Content is no longer optional - it’s the backbone of brand
                authority, customer engagement, and sustainable digital growth.
                As a leading content marketing agency in Delhi, we help brands
                create powerful stories, high-performing content assets, and
                data-driven strategies that educate, engage, and convert.
              </p>

              <p className="text-gray-300 leading-relaxed text-justify">
                Whether you’re looking to build awareness, outrank competitors,
                improve SEO visibility, or nurture leads, our content marketing
                services in Delhi are designed to elevate your brand and deliver
                measurable results.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Get Started Today"
              />
            </div>

            {/* Right CTA Glass Card */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color5)] mb-3">
                Want Consistent Leads from Content?
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                We’ll create a complete SEO + content plan that fits your
                business goals, niche, and audience.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Book Free Strategy Call"
              />
            </div>
          </div>
        </section>

        {/* ✅ ABOUT SECTION */}
        <section className="py-14 w-11/12 md:w-5/6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
                Leading Content Marketing Company in Delhi for High-Impact
                Growth
              </h2>

              <p className="text-gray-300 text-justify">
                Delhi’s digital landscape is competitive - thousands of brands
                are fighting for attention every day. To stand out, you need
                more than just blogs and social media posts; you need strategy,
                storytelling, and consistent content execution.
              </p>

              <p className="text-gray-300 text-justify">
                As a full-stack content marketing company in Delhi, we combine
                research, creativity, SEO, and distribution to create content
                that drives organic traffic, enhances credibility, and supports
                every stage of your customer journey.
              </p>

              <p className="text-gray-300 text-justify">
                Our approach ensures your brand becomes discoverable, memorable,
                and trusted.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <Image
                src={contentImg}
                alt="Content Marketing Services in Delhi"
                className="w-full h-[320px] md:h-[460px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ✅ WHY CHOOSE US */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Why Choose Us for Content Marketing in Delhi?
            </h2>
          </div>

          {/* Mobile Slider */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {whyChooseUs.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
                    <h3 className="text-xl font-semibold text-[var(--color5)]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-[var(--color5)]">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {item.description}
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

        {/* ✅ SERVICES */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Our Complete Content Marketing Services in Delhi
            </h2>
            <p className="text-gray-300 mt-3">
              We offer end-to-end services to help brands build a strong content
              foundation and scale organically.
            </p>
          </div>

          <div className="block lg:hidden">
            <Slider {...settings}>
              {contentMarketingServices.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
                    <h3 className="text-xl font-semibold text-[var(--color5)]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentMarketingServices.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-[var(--color5)]">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ PROCESS */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
              Our Process for Strategic Content Marketing in Delhi
            </h2>
          </div>

          <div className="block lg:hidden">
            <Slider {...settings}>
              {contentMarketingProcess.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
                    <h3 className="text-xl font-semibold text-[var(--color5)]">
                      {item.step}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentMarketingProcess.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-[var(--color5)]">
                  {item.step}
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {item.description}
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

        <Footer />
      </div>
    </div>
  );
}

export default ContentMarketing;

"use client";

import { useState } from "react";
import Nav from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import hero from "../../../Assets/services/hero.jpg";
import seoImg from "../../../Assets/services/3.jpg";
import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";

const seoServices = [
  {
    title: "Enterprise SEO",
    content:
      "At Bigwig Media Digital, we offer innovative Enterprise SEO solutions that help large businesses dominate search results and stay ahead of the competition in their industry.",
  },
  {
    title: "International SEO",
    content:
      "Expanding globally? We help optimize your website for multiple countries and languages so your brand can connect with audiences across borders.",
  },
  {
    title: "LLM SEO",
    content:
      "Our LLM SEO specialists optimise your content so it’s easy for large language models to understand, reference, and deliver in search answers.",
  },
  {
    title: "AI SEO",
    content:
      "We use AI-driven insights to refine keyword targeting, enhance content strategies, and elevate user experience, keeping your website competitive as search trends evolve.",
  },
  {
    title: "Local SEO",
    content:
      "We optimise your Google Business Profile and create location-focused content that helps your business attract nearby customers and stay visible in key areas.",
  },
  {
    title: "E-commerce SEO",
    content:
      "We identify the right keywords and optimise your product pages so customers can easily discover your products when they search online.",
  },
  {
    title: "Technical SEO",
    content:
      "We improve the technical foundation of your website for better crawlability, indexing, and performance — ensuring your site runs seamlessly.",
  },
  {
    title: "JavaScript SEO",
    content:
      "For JavaScript-heavy websites, we ensure proper rendering and indexing so search engines can understand your content and rank it higher.",
  },
  {
    title: "ORM (Online Reputation Management)",
    content:
      "We help brands and professionals build, manage, and safeguard their online reputation so their digital presence reflects trust and authority.",
  },
  {
    title: "Off-Page SEO",
    content:
      "We audit and strengthen your backlink profile to support your SEO strategy and improve your website’s authority.",
  },
];

const seoBenefits = [
  {
    title: "Improve Organic Rankings",
    content:
      "Show up at the top of Google search results and make it easier for customers in Delhi and beyond to discover your business.",
  },
  {
    title: "Stay Visible in AI Search",
    content:
      "SEO ensures your business appears in AI search results and answer engines, helping you stay ahead of competitors.",
  },
  {
    title: "Attract Targeted Local Traffic",
    content:
      "Local SEO helps you reach people actively searching in Delhi NCR — bringing highly qualified leads.",
  },
  {
    title: "Cost-Effective Marketing",
    content:
      "Reach your audience without overspending on ads. SEO builds long-lasting results and better value over time.",
  },
  {
    title: "Higher Conversions & ROI",
    content:
      "By targeting the right keywords and user intent, SEO turns visitors into leads and improves conversions.",
  },
  {
    title: "Long-Term Business Growth",
    content:
      "With consistent traffic, improved visibility and better leads, SEO helps your business grow month after month.",
  },
];

const seoDifference = [
  {
    title: "Tailored for You, Not Templates",
    content:
      "Every business is unique — your SEO strategy should be too. We create custom plans matching your goals and audience.",
  },
  {
    title: "SEO That Builds Brands",
    content:
      "We don’t chase rankings for the sake of it — we build long-term authority that strengthens your brand.",
  },
  {
    title: "Local + Global SEO Expertise",
    content:
      "Whether you want to dominate locally or scale globally, we know how to grow visibility strategically.",
  },
  {
    title: "Transparent Growth Tracking",
    content:
      "Clear, simple reports — no jargon. You always know what’s working and where the growth is coming from.",
  },
  {
    title: "Ahead of Algorithm Updates",
    content:
      "We keep your SEO future-proof with the latest search trends and best practices.",
  },
  {
    title: "Real Impact, Not Just Visibility",
    content:
      "We focus on trust, authority and conversions — turning visibility into measurable growth.",
  },
];

const faqs = [
  {
    q: "What can Bigwig Media Digital do for my business with SEO in Delhi?",
    a: "Our SEO services help you improve visibility for the right search terms, attract qualified traffic, and generate leads that matter. We focus on measurable growth.",
  },
  {
    q: "How long before we start seeing results?",
    a: "SEO is a long-term strategy. Typically, it takes 3–6 months to see measurable results depending on your industry competition and current website status.",
  },
  {
    q: "Do you offer local SEO for businesses targeting Delhi specifically?",
    a: "Yes! We optimise Google Business Profile, improve local citations, and create location-specific content to improve “near me” rankings in Delhi NCR.",
  },
  {
    q: "What kind of reporting can we expect?",
    a: "You get monthly reports including keyword movements, traffic insights, and performance breakdowns. We explain everything in a simple way.",
  },
  {
    q: "Why should we choose Bigwig Media Digital over another SEO agency in Delhi?",
    a: "Because we work like a growth partner — focusing on business impact, transparency, and long-term strategy instead of temporary ranking tricks.",
  },
];

export default function Seo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />

      <title>SEO Services for Higher Ranking</title>
      <meta
        name="description"
        content="Boost your online visibility and rank higher on search engines with our expert SEO services."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/search-engine-optimization"
      />

      {/* ✅ GLOBAL BACKGROUND (same as your premium theme) */}
      <div className="relative">
        {/* GRID */}
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
          <div className="absolute -top-40 -left-40 w-[460px] h-[460px] bg-white/10 blur-3xl rounded-full" />
          <div className="absolute top-40 -right-40 w-[460px] h-[460px] bg-white/10 blur-3xl rounded-full" />
        </div>

        {/* ================= HERO ================= */}
        <section className="relative pt-[110px] md:pt-[140px] pb-16">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* LEFT */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Search Engine Optimization
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                SEO Services in{" "}
                <span className="text-[var(--secondary-color)] italic font-semibold">
                  Delhi NCR
                </span>
              </h1>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify max-w-xl">
                Your business deserves real, meaningful growth. We help brands
                across Delhi show up at the top of Google search — again and
                again. More visibility means more clicks, more leads and more
                sales.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Contact Us"
              />
            </div>

            {/* RIGHT IMAGE GLASS */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                <Image
                  src={hero}
                  alt="SEO Services Hero"
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
                SEO Services Company in Delhi Focused on Visibility, Traffic &
                Conversions
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                SEO plays a crucial role in strengthening your online presence
                and boosting your visibility. Choosing the right SEO services in
                Delhi can be the difference between a business that struggles
                and a business that grows year after year.
              </p>

              <p className="text-gray-300 leading-relaxed text-justify">
                We bring technical expertise and creative strategy to help your
                website rise to the top of search results. From keyword research
                and content optimisation to high-quality backlinks — we build
                long-term SEO success.
              </p>

              <p className="text-gray-300 leading-relaxed text-justify">
                Bigwig Media Digital believes in transparency and measurable
                results. You’ll always know what’s working and what comes next.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <Image
                src={seoImg}
                alt="SEO Company"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= SEO SERVICES ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
                Expert SEO Services in Delhi to Maximise Your Online Success
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Our SEO services evolve with trends and best practices — giving
                you a real competitive advantage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoServices.map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-[var(--color5)]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="p-6">
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
                text="Boost Your Rankings Today"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
                Why Your Business Should Invest in SEO Services in Delhi
              </h2>
              <p className="text-gray-300 leading-relaxed">
                SEO isn’t just rankings — it’s visibility, trust, and long-term
                growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoBenefits.map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                >
                  <div className="p-6">
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
                text="Start Growing with SEO"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= DIFFERENCE ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
                What Makes Us Different
              </h2>

              <p className="text-gray-300 leading-relaxed">
                We focus on trust, authority, and conversions — not just
                temporary rankings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoDifference.map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                >
                  <div className="p-6">
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
                text="Explore SEO Solutions"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </section>

        {/* ================= BIG GLASS TEXT BOX ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="rounded-3xl p-7 md:p-10 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-5">
                Choosing the Right SEO Consultant for Your Business in Delhi
              </h2>

              <div className="space-y-5 text-gray-300 leading-relaxed text-justify">
                <p>
                  In today’s digital-first world, partnering with the best SEO
                  services in Delhi has become essential. A skilled SEO
                  consultant can enhance visibility, attract quality traffic,
                  and improve conversions.
                </p>

                <p>
                  SEO is more than basic optimisation — it includes keyword
                  research, on-page strategy, link building, and local SEO.
                  Working with the right partner ensures long-term results.
                </p>

                <p>
                  With the right SEO consultant, your business gains sustainable
                  traffic, stronger authority, and measurable growth.
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <ButtonFill
                  text="Connect With an SEO Consultant"
                  onClick={() => setIsPopupOpen(true)}
                />
              </div>
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
              {faqs.map((item, i) => (
                <div
                  key={i}
                  onClick={() => toggleFAQ(i)}
                  className="
                    cursor-pointer
                    rounded-3xl p-6
                    bg-white/5 border border-white/10 backdrop-blur-xl
                    shadow-xl transition-all duration-300
                    hover:border-white/20
                  "
                >
                  <div className="flex justify-between items-center gap-5">
                    <h3 className="text-base md:text-lg font-semibold text-[var(--color5)]">
                      {item.q}
                    </h3>

                    <span className="text-[var(--color5)] text-2xl font-bold">
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? "max-h-96 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed">{item.a}</p>
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

        {/* ================= OTHER SERVICES (PREMIUM GRID) ================= */}
        <section className="pb-28 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center mb-12">
              Our Other Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Social Media Marketing",
                "Performance Marketing",
                "Content Marketing",
                "Website Designing & Development",
                "Email Marketing",
                "Social Media Optimization",
                "Graphic Designing & Video Editing",
                "Influencer Marketing",
                "Online Reputation Management",
                "Affiliate Marketing",
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={`/services/${item
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/\&/g, "and")}`}
                  className="
                    group
                    rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl
                    shadow-xl p-6 text-center
                    transition-all duration-500
                    hover:-translate-y-2 hover:border-white/20
                  "
                >
                  <span className="text-gray-200 font-semibold group-hover:text-[var(--color5)] transition">
                    {item}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

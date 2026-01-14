"use client";

import Footer from "../../../Components/Footer";
import Nav from "../../../Components/Navbar";

import hero from "../../../Assets/Services/hero.jpg";
import image from "../../../Assets/Services/hero.jpg";

import Slider from "react-slick";
import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";
import { SetStateAction, useState } from "react";

const emailPoints = [
  {
    title: "Deep Local Market Knowledge",
    content:
      "We understand Delhi’s market dynamics-from festivals and sales cycles to audience preferences across neighborhoods. That local insight helps your email marketing in Delhi feel timely and relevant.",
  },
  {
    title: "End-to-End Email Marketing Services",
    content:
      "We offer full service: list building, segmentation, creative design, copywriting, automation, transactional emails, and analytics-making us a one-stop email marketing company in Delhi.",
  },
  {
    title: "Technology & Deliverability Expertise",
    content:
      "We work with HubSpot, Klaviyo, Mailchimp, and major SMTP providers. We manage SPF/DKIM/DMARC and IP reputation to ensure your emails land in inboxes, not spam.",
  },
  {
    title: "ROI-Focused & Scalable Solutions",
    content:
      "Whether you need high-volume promotional sends or automated drip journeys, our email marketing services scale to your goals and budget.",
  },
];

const steps = [
  {
    title: "Research & Strategy",
    content:
      "We start by understanding your business goals, customers, and existing data - then define a measurable email strategy for email marketing in Delhi that aligns with KPIs (revenue, leads, retention).",
  },
  {
    title: "List Building & Segmentation",
    content:
      "Clean lists and smart segmentation (behavioral, demographic, lifecycle stage) are the backbone of effective email marketing services in Delhi. We create segments that allow highly personalised messages.",
  },
  {
    title: "Creative & Copy",
    content:
      "Compelling subject lines, concise benefit-led copy, and mobile-first design raise open and click rates. Our copywriters craft messages tailored to Delhi audiences while promoting your brand voice.",
  },
  {
    title: "Automation & Workflow Setup",
    content:
      "From welcome series and onboarding flows to cart recovery and win-back campaigns, automation turns one email into dozens of revenue opportunities for any email marketing company in Delhi to deliver.",
  },
  {
    title: "Testing & Optimization",
    content:
      "A/B subject tests, send-time experiments, and content variants help us iteratively improve performance across your email marketing in Delhi program.",
  },
  {
    title: "Monitoring & Reporting",
    content:
      "We track deliverability, opens, clicks, conversions, and revenue - then translate results into clear recommendations to grow ROI month over month.",
  },
];

const emailTypes = [
  {
    title: "Email Campaign Management",
    content:
      "Promotional campaigns, newsletters, and product launches crafted for maximum engagement.",
  },
  {
    title: "Email Automation & Drip Campaigns",
    content:
      "Welcome sequences, onboarding flows, cart recovery, and lifecycle automations that nurture leads automatically.",
  },
  {
    title: "Transactional Emails",
    content:
      "Order confirmations, password resets, and system notifications optimised for clarity and conversion.",
  },
  {
    title: "B2B Email Marketing",
    content:
      "Account-based campaigns and nurture sequences designed for longer and complex B2B sales cycles.",
  },
  {
    title: "E-commerce Email Marketing",
    content:
      "Abandoned cart recovery, personalised product recommendations, and post-purchase flows to increase repeat purchases.",
  },
  {
    title: "Local Business Email Campaigns",
    content:
      "Location-based promotions and event invites crafted specifically for Delhi neighbourhood audiences.",
  },
];

const emailListQuality = [
  {
    title: "Opt-In Strategies & Lead Magnets",
    content:
      "We design sign-up flows and high-value incentives that attract engaged subscribers — not just raw volume.",
  },
  {
    title: "Subscription Management",
    content:
      "Preference centers let subscribers choose topics and frequency, reducing unsubscribes and boosting retention.",
  },
  {
    title: "List Hygiene & Bounce Management",
    content:
      "We remove bounces and inactive users regularly to protect sender reputation and ensure maximum deliverability.",
  },
];

const emailWorkflow = [
  "Collect consented leads",
  "Segment audiences intelligently",
  "Send personalized targeted messages",
  "Measure performance across KPIs",
  "Optimize continuously based on data",
];

const investEmailMarketing = [
  "End-to-end strategy and execution",
  "Technical setup (SPF, DKIM, DMARC)",
  "Automation & personalization",
  "Creative design + conversion copywriting",
  "Transparent reporting & ROI tracking",
  "Reduced waste and higher conversions",
];

const industriesServed = [
  "E-commerce",
  "SaaS & Technology",
  "Healthcare",
  "Real Estate",
  "Logistics & Supply Chain",
  "Legal & Consulting",
  "Luxury Brands",
  "Local Delhi Businesses",
];

const faqs = [
  {
    q: "Why is email marketing important for businesses?",
    a: "Email marketing offers high ROI, personalized communication, and direct customer reach. When handled by an experienced email marketing company in Delhi, it boosts sales, nurtures leads, and strengthens long-term customer relationships.",
  },
  {
    q: "How can an email marketing agency in Delhi/NCR benefit my business?",
    a: "A trusted email marketing agency in Delhi helps you develop a tailored strategy, create engaging content, improve deliverability, and automate workflows – resulting in higher engagement, conversions, and revenue.",
  },
  {
    q: "What services do you offer as an email marketing company in Delhi?",
    a: "Our email marketing services in Delhi include newsletters, drip automation, transactional emails, template design, segmentation, copywriting, A/B testing, analytics, and deliverability monitoring.",
  },
  {
    q: "Can you provide email marketing services in Delhi NCR and nearby cities?",
    a: "Yes, we serve clients across Delhi, Noida, Gurugram, Faridabad, Ghaziabad, and other NCR regions. As a leading email marketing company in Delhi, we also support clients across India and overseas.",
  },
  {
    q: "How do I get started with email marketing?",
    a: "We begin by helping you build or refine your list, choose a platform, create a strategy, and set up your campaigns. Working with an email marketing agency in Delhi ensures smooth implementation and faster results.",
  },
  {
    q: "How often should I send emails to my subscribers?",
    a: "Most brands send 1–4 emails per week, depending on goals and audience behavior. Our experts in email marketing in Delhi help you determine the ideal frequency for engagement without overwhelming your subscribers.",
  },
  {
    q: "How do you prevent emails from going to spam?",
    a: "We avoid spam triggers, verify domains, maintain list quality, and use proper authentication – ensuring high deliverability from your email marketing company in Delhi.",
  },
  {
    q: "What email marketing tools or platforms do you recommend?",
    a: "We use Mailchimp, Klaviyo, HubSpot, ActiveCampaign, and enterprise SMTP systems. As a modern email marketing agency in Delhi, we select the best platform for your needs.",
  },
  {
    q: "How do you measure email campaign success?",
    a: "We evaluate engagement, conversions, sales, and ROI. Our email marketing services in Delhi include detailed analytics dashboards and monthly performance reports.",
  },
  {
    q: "How do you create engaging email content?",
    a: "We use persuasive copy, personalized messaging, strong visuals, and compelling CTAs. As a leading email marketing company in Delhi, we create content that drives clicks and conversions.",
  },
  {
    q: "How do you build an effective email list?",
    a: "We use opt-in forms, lead magnets, landing pages, and sign-up incentives. This ensures your email marketing in Delhi targets qualified, engaged subscribers.",
  },
  {
    q: "What’s included in your email marketing services packages?",
    a: "Packages include campaign creation, automation setup, template design, segmentation, testing, analytics, optimization, and full support from our email marketing agency in Delhi.",
  },
  {
    q: "Can email marketing work for B2B companies?",
    a: "Yes. Email is one of the most powerful channels for B2B lead nurturing. Our email marketing company in Delhi builds tailored sequences that improve conversions and shorten sales cycles.",
  },
  {
    q: "Can you integrate email marketing with CRM or shopping cart systems?",
    a: "Yes. We integrate email tools with CRMs like HubSpot, Zoho, Salesforce, and ecommerce platforms like Shopify, WooCommerce, and Magento – strengthening your email marketing in Delhi, automation, and tracking.",
  },
];

export default function EmailMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const settings = {
    dots: false,
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
      <title>Result-Driven Email Marketing</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/email-marketing"
      />
      <meta
        name="description"
        content="Reach your audience with customized email campaigns that drive conversions and brand loyalty."
      />

      <Nav />

      {/* ✅ Global Grid + Glow Background */}
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
        <section className="relative pt-[110px] md:pt-[140px] pb-16">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                ROI-Driven Email Strategy
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Email Marketing Services in{" "}
                <span className="text-[var(--secondary-color)] font-semibold italic">
                  Delhi
                </span>
              </h1>

              <p className="text-gray-300 leading-relaxed text-justify">
                Looking for a results-driven email marketing company in Delhi
                that understands local audiences and delivers measurable ROI? We
                design, build, and run high-performing email programs that
                increase opens, clicks, and conversions — for startups,
                ecommerce, B2B brands, and local businesses.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Contact Us"
              />
            </div>

            {/* Right Premium Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <Image
                  src={hero}
                  alt="Email Marketing Services"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ✅ INTRO (Content + Image) */}
        <section className="pb-20 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
                Leading Email Marketing Company in Delhi for Measurable Growth
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                Delhi’s inboxes are crowded — standing out requires strategy,
                relevance, and flawless execution. We combine data, creative
                copywriting, and automation to deliver personalised experiences
                that convert.
              </p>

              <ButtonFill
                text="Get Started Today"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              <Image
                src={image}
                alt="Email Marketing Agency in Delhi"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ✅ WHY CHOOSE */}
        <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden z-10">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
              Why Choose Bigwig Media Digital as an Email Marketing Agency in
              Delhi?
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Our email marketing services are designed to deliver measurable
              impact. With deep market insights, strong deliverability, and
              high-performing campaigns, we help businesses grow consistently.
            </p>
          </div>

          {/* Cards */}
          <div className="relative mb-10 z-10">
            <div className="block lg:hidden">
              <Slider {...settings}>
                {emailPoints.map((item, index) => (
                  <div key={index} className="px-2">
                    <div className="relative flex flex-col p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden space-y-4">
                      <div className="absolute -top-24 -right-24 w-56 h-56 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                      <h3 className="text-xl font-semibold text-[var(--color5)] relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-justify relative z-10">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emailPoints.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -top-24 -right-24 w-56 h-56 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="p-6 space-y-4 relative z-10">
                    <h3 className="text-xl font-semibold text-[var(--color5)]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ PROCESS */}
        <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden z-10">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
              Our Complete Process for Email Marketing in Delhi
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              From strategy to reporting — here’s how our email marketing
              process delivers measurable, scalable results.
            </p>
          </div>

          <div className="relative mb-10 z-10">
            <div className="block lg:hidden">
              <Slider {...settings}>
                {steps.map((step, idx) => (
                  <div key={idx} className="px-2">
                    <div className="relative flex flex-col p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden space-y-4">
                      <div className="absolute -top-24 -right-24 w-56 h-56 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                      <h3 className="text-xl font-semibold text-[var(--color5)] relative z-10">
                        {step.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-justify relative z-10">
                        {step.content}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -top-24 -right-24 w-56 h-56 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="p-6 space-y-4 relative z-10">
                    <h3 className="text-xl font-semibold text-[var(--color5)]">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-justify">
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ KEY FEATURES + CONTENT CONVERT */}
        <section className="py-12 w-11/12 md:w-5/6 mx-auto relative z-10">
          <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[var(--color5)]/10 blur-3xl rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
                  Key Features of Our Email Marketing Services in Delhi
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "Professional Email Templates & Responsive Design",
                      desc: "Custom responsive templates that strengthen brand identity and drive engagement.",
                    },
                    {
                      title: "Advanced Tracking & Analytics",
                      desc: "We track clicks, conversions, purchases, and revenue to show true ROI.",
                    },
                    {
                      title: "Dedicated Deliverability Management",
                      desc: "Authentication + list hygiene ensures inbox placement, not spam.",
                    },
                    {
                      title: "Easy CRM & E-commerce Integration",
                      desc: "Seamless integrations for personalization and automation at scale.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition"
                    >
                      <h3 className="text-lg font-semibold text-[var(--color5)]">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
                  Crafting Engaging Email Content That Converts
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "Understand Your Audience",
                      desc: "We study behavior + intent so each email speaks directly to needs.",
                    },
                    {
                      title: "Write Compelling Subject Lines",
                      desc: "Curiosity + urgency + value messaging to maximize opens.",
                    },
                    {
                      title: "Personalization & Dynamic Content",
                      desc: "Smart segmentation increases clicks and conversions.",
                    },
                    {
                      title: "Clear Calls to Action",
                      desc: "Every email is built around one strong CTA to increase revenue.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition"
                    >
                      <h3 className="text-lg font-semibold text-[var(--color5)]">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ BENEFITS + DELIVERABILITY */}
        <section className="py-12 w-11/12 md:w-5/6 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-[var(--color5)]/10 blur-3xl rounded-full" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 relative z-10">
                Ensuring Maximum Deliverability
              </h2>

              <div className="space-y-4 relative z-10">
                {[
                  "SPF, DKIM and DMARC setup",
                  "IP reputation and warming",
                  "List hygiene to remove bounces and inactive subscribers",
                  "Compliance with anti-spam laws and opt-in best practices",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color5)]/20 flex items-center justify-center text-[var(--color5)] font-bold">
                      ✔
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-[var(--color5)]/10 blur-3xl rounded-full" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6 relative z-10">
                Benefits of Email Marketing
              </h2>

              <div className="space-y-4 relative z-10">
                {[
                  "High ROI – one of the most cost-effective channels",
                  "Direct customer access – no reliance on algorithms",
                  "Personalization & relevance at scale",
                  "Measurable performance with clear attribution",
                  "Automation that saves time & increases revenue",
                  "Fast testing & optimization for continuous improvement",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color5)]/20 flex items-center justify-center text-[var(--color5)] font-bold">
                      ✦
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Book Free Email Marketing Consultation"
            />
          </div>
        </section>

        {/* ✅ TYPES */}
        <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden z-10">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
              Types of Email Marketing Services We Offer in Delhi
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              From campaigns to automation and transactional flows — we cover it
              all.
            </p>
          </div>

          <div className="block lg:hidden">
            <Slider {...settings}>
              {emailTypes.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="relative flex flex-col p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden space-y-4">
                    <div className="absolute -top-24 -right-24 w-56 h-56 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                    <h3 className="text-xl font-semibold text-[var(--color5)] relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-justify relative z-10">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emailTypes.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-[var(--color5)]/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="p-6 space-y-4 relative z-10">
                  <h3 className="text-xl font-semibold text-[var(--color5)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ LIST QUALITY / WORKFLOW / INDUSTRIES */}
        <section className="w-11/12 md:w-5/6 max-w-7xl mx-auto py-12 space-y-14 relative z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
              Building & Managing High-Quality Email Lists
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {emailListQuality.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold text-[var(--color5)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
              How Do Email Marketing Services Work?
            </h2>

            <div className="relative border-l-2 border-[var(--color5)]/40 pl-6 space-y-6">
              {emailWorkflow.map((step, i) => (
                <div key={i} className="relative">
                  <div className="w-4 h-4 bg-[var(--color5)] rounded-full absolute -left-8 top-1"></div>
                  <p className="text-gray-300 text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
              Why Invest in an Email Marketing Company in Delhi?
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {investEmailMarketing.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 bg-[var(--color5)]/20 rounded-xl flex items-center justify-center text-[var(--color5)] text-xl">
                    ✓
                  </div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Boost Your Email Marketing Today"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
              Industries We Serve
            </h2>

            <div className="flex flex-wrap gap-3">
              {industriesServed.map((ind, i) => (
                <div
                  key={i}
                  className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-[var(--color5)] hover:text-black transition"
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ FAQ */}
        <section className="py-12 relative overflow-hidden z-10">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6 w-11/12 md:w-5/6 mx-auto max-w-5xl relative z-10">
            {faqs.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleItem(index)}
                className="
                  p-6 rounded-3xl bg-white/5 backdrop-blur-xl
                  border border-white/10 transition-all duration-300
                  shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden
                "
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

          <div className="mt-10 flex justify-center">
            <ButtonFill
              text="Start Your Project Today"
              onClick={() => setIsPopupOpen(true)}
            />
          </div>
        </section>

        {/* ✅ OTHER SERVICES TABLE (same style) */}
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
                              ></span>

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
                .animate-scan { animation: scan 4s linear infinite; }
              `}</style>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

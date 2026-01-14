"use client";

import { useState, SetStateAction } from "react";
import Nav from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import hero from "../../../Assets/Services/hero.jpg";
import web from "../../../Assets/services/1.jpg";
import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";

// ✅ CONTENT (same as yours)
const sections = [
  {
    title: "Responsive Web Design",
    content:
      "As a leading web design company in Delhi, we specialize in creating fully responsive websites that look great and work smoothly on every device. Your audience enjoys a seamless browsing experience across mobile, tablet, and desktop.",
  },
  {
    title: "Static Website Design",
    content:
      "We design clean, modern, and user-friendly static websites that highlight your brand’s strengths. Our designs ensure clarity, fast loading, and smooth navigation—ideal for businesses wanting a professional online presence.",
  },
  {
    title: "Dynamic Website Design",
    content:
      "Our expert designers create interactive, dynamic websites with custom features, smart integrations, and brand-focused elements. We make your site more engaging, functional, and responsive to user behavior.",
  },
  {
    title: "Startup Website Design",
    content:
      "We build creative, modern, and scalable websites tailored to the unique needs of startups. Our designs help communicate your brand story clearly while showcasing your services and products effectively.",
  },
  {
    title: "Website Re-Design",
    content:
      "We transform outdated websites into visually appealing, high-performing platforms. Our redesign services help refresh your brand identity while improving user experience, speed, and overall performance.",
  },
  {
    title: "Corporate Website Design",
    content:
      "We design powerful, enterprise-level corporate websites with intuitive layouts and strong branding. Our designs support complex operations, large data structures, and high traffic—ideal for growing companies.",
  },
  {
    title: "Landing Page Design",
    content:
      "Our high-converting landing pages are crafted with compelling messaging, strong branding elements, and clear calls to action. Designed specifically to boost conversions and capture qualified leads.",
  },
  {
    title: "SEO-Friendly Website Design",
    content:
      "We build SEO-friendly websites optimized for search visibility. From clean coding to fast loading and structured content, our websites help you rank higher and gain more organic traffic.",
  },
  {
    title: "PSD to HTML Design",
    content:
      "We convert your Photoshop designs into fast, responsive, and pixel-perfect HTML pages. Our coding ensures structure, speed, and accuracy while retaining the original design aesthetics.",
  },
];

const customSections = [
  {
    title: "100% Mobile Responsive Website",
    content:
      "With mobile devices accounting for nearly 65.49% of global website traffic (HubSpot), having a fully mobile-responsive website is essential. We ensure your website delivers a seamless experience across all screen sizes, helping you reach a wider audience and keep users engaged on the go.",
  },
  {
    title: "A Customized Website",
    content:
      "According to a survey by Magnetize Studio, 94% of first impressions are influenced by website design. A customized website helps your brand stand out, communicate clearly, and create an immediate positive impact on your audience.",
  },
  {
    title: "A User-Friendly Website",
    content:
      "A study by Harris Interactive reveals that 89% of users switch to a competitor after encountering poor usability. A user-friendly design builds trust, keeps visitors engaged, and prevents them from leaving your site.",
  },
  {
    title: "A Well-Designed Website",
    content:
      "A WebFX study shows that 75% of users judge a company's credibility based on its website design. A well-designed website helps establish authority, build trust, and make a powerful first impression.",
  },
  {
    title: "Your Website Reflects Your Brand",
    content:
      "A website is more than a digital presence—it represents your brand identity, values, and offerings. If you're searching for the best “website designer near me,” we create custom-designed websites that bring your vision to life.",
  },
  {
    title: "We Shape Digital Experiences",
    content:
      "We go beyond traditional web design—we shape connected, meaningful experiences that empower brands with extraordinary websites that truly stand out.",
  },
];

const benefitSections = [
  {
    title: "Customized Web Design",
    content:
      "Every business has unique goals, so we create custom website designs tailored to your needs. Our intuitive interfaces and feature-rich layouts help you connect seamlessly with customers while representing your brand identity.",
  },
  {
    title: "Technical Expertise",
    content:
      "Our experienced professionals provide complete technical support, ensuring smooth performance, quick issue resolution, and up-to-date industry best practices.",
  },
  {
    title: "Scalability",
    content:
      "We build websites with a future-ready approach, allowing your online presence to grow and evolve as your business expands.",
  },
  {
    title: "Consistency & Branding",
    content:
      "We maintain consistent brand identity across your website by using your color scheme, typography, logos, taglines, and other brand elements.",
  },
  {
    title: "Cross-Browser Compatibility",
    content:
      "We ensure your website works smoothly across all major browsers, offering users a consistent and reliable browsing experience.",
  },
  {
    title: "UI & UX",
    content:
      "We design visually appealing interfaces paired with user-friendly navigation to ensure an engaging and intuitive browsing experience.",
  },
  {
    title: "Faster Load Times",
    content:
      "Our websites are optimized for high performance, delivering fast load times, reduced bounce rates, and improved visitor satisfaction.",
  },
  {
    title: "Ongoing Support & Maintenance",
    content:
      "We offer round-the-clock support and maintenance to ensure your website remains secure, fully updated, and free of technical issues.",
  },
];

const faqs = [
  {
    q: "Why should you hire a Web Design Company in Delhi?",
    a: "Partnering with a professional web design company helps increase website traffic, enhance user engagement, and support business growth. A high-quality website is more visually appealing, easier to navigate, and significantly improves user experience.",
  },
  {
    q: "How do I hire a web design company?",
    a: `To hire a reliable web design company, follow these steps:
• Set a clear project budget.
• Create a detailed job description.
• Review portfolios and case studies.
• Prepare interview questions to assess skills.
• Finalize the contract and define the scope properly.`,
  },
  {
    q: "How much time does website design take?",
    a: "A typical website takes about 4 to 8 weeks depending on design complexity, content readiness, and revision cycles. More advanced custom websites may require additional time.",
  },
  {
    q: "How much does a custom website design cost?",
    a: "The total cost depends on page count, design complexity, functionalities, and integrations. After the first consultation, we share a clear, transparent pricing estimate.",
  },
  {
    q: "How can I get started with your website design services?",
    a: "Simply reach out via our website, phone, or email. We’ll schedule a discussion to understand your goals and begin crafting the perfect strategy for your website.",
  },
  {
    q: "Will I be able to update the website myself once it’s live?",
    a: "Absolutely. Our websites use user-friendly CMS platforms like WordPress, allowing you to update content easily. We also provide training to help you manage everything confidently.",
  },
];

export default function Website() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: SetStateAction<number | null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />

      {/* ✅ GLOBAL BACKGROUND (same theme everywhere) */}
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
                Website Design & Development
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Build a premium website that{" "}
                <span className="text-[var(--secondary-color)] font-semibold italic">
                  converts visitors
                </span>{" "}
                into customers.
              </h1>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify">
                We’re a leading website design company in Delhi NCR, creating
                custom web experiences that truly fit your business needs. Our
                team works closely with you to enhance your digital presence and
                deliver high-quality websites that attract more visitors and
                boost ROI.
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
                  alt="Website Design Hero"
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
                Best Website Designing Company in Delhi NCR
              </h2>

              <p className="text-gray-300 text-justify leading-relaxed">
                As a top web design company in Delhi, we know exactly what it
                takes to create websites that attract attention and bring in
                more visitors. Our experienced designers craft custom websites
                tailored to your industry and aligned with your business goals.
              </p>

              <p className="text-gray-300 text-justify leading-relaxed">
                So if you&apos;re searching for the best{" "}
                <strong>“website designer near me”</strong>, we’re here to
                deliver optimized digital experiences that help your brand grow,
                connect, and convert.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <Image
                src={web}
                alt="Best Web Development Company"
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
                Web Design Company in Delhi
              </h2>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
                Top Services By The Best Web Designing Company In Delhi
              </h3>

              <p className="text-gray-300 leading-relaxed">
                We help businesses create premium websites that attract high
                traffic and meaningful engagement. Whether you need a new site
                or want to revamp your existing one — we build it right.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((item, i) => (
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
          </div>
        </section>

        {/* ================= CUSTOM WEBSITE NEED ================= */}
        <section className="pb-24 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color5)] mb-3">
                Website Designing Company in Delhi
              </h2>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
                Why Do You Need Custom Web Designs for Your Business?
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Custom-designed websites help you connect with your audience and
                create a strong first impression. A well-crafted website boosts
                engagement and improves ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customSections.map((item, i) => (
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
                text="Get Started Today"
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
                Website Design Company Near Me
              </h2>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
                Benefits of Hiring A Web Design Company
              </h3>

              <p className="text-gray-300 leading-relaxed">
                We create visually appealing, feature-rich websites with smooth
                navigation and performance. Here are the key benefits:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitSections.map((item, i) => (
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
                text="Get Started Today"
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

"use client";

import Nav from "../../../Components/Navbar";
import hero from "../../../Assets/services/hero.jpg";
import smo from "../../../Assets/services/4.jpg";
import Footer from "../../../Components/Footer";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";

import Slider from "react-slick";
import Image from "next/image";
import ButtonFill from "../../../Components/ButtonFill";
import { SetStateAction, useState } from "react";

// ✅ If you already have these components, keep them
// Otherwise remove them or import correct path
// import ContactForm from "../../../Components/ContactForm";
// import GetInTouch from "../../../Components/GetInTouch";
// import PopupForm from "../../../Components/PopupForm";

const socialPlatforms = [
  { name: "Facebook", icon: <FaFacebookF color="#1877F2" /> },
  { name: "Instagram", icon: <FaInstagram color="#E4405F" /> },
  { name: "LinkedIn", icon: <FaLinkedinIn color="#0A66C2" /> },
  { name: "Twitter", icon: <FaXTwitter color="#ffffff" /> },
  { name: "Pinterest", icon: <FaPinterestP color="#E60023" /> },
  { name: "YouTube", icon: <FaYoutube color="#FF0000" /> },
];

const processItems = [
  {
    title: "Profile Creation & Optimization",
    content:
      "We optimize your social media profiles with keyword-rich descriptions, visually appealing graphics, call-to-actions, and branded elements to build a strong digital identity.",
  },
  {
    title: "Engaging Content & Creative Graphics",
    content:
      "Our creative team produces high-quality posts, videos, infographics, carousels, and stories that resonate with your audience and drive continuous engagement.",
  },
  {
    title: "Target Audience Refinement",
    content:
      "We help you attract users who are genuinely interested in your products or services, ensuring maximum relevance and conversion potential.",
  },
  {
    title: "Audience Interaction & Engagement",
    content:
      "We manage comments, messages, and interactions in real time, helping your brand stay active, responsive, and customer-friendly.",
  },
  {
    title: "Analytics & Performance Reporting",
    content:
      "From reach and impressions to follower growth and engagement metrics, our detailed reports help you understand the impact of your SMO campaigns.",
  },
];

const benefits = [
  {
    title: "Enhanced Brand Visibility Across Social Platforms",
    content:
      "High-quality and consistent social media optimization ensures your brand becomes more visible and memorable. With strategic content and profile optimization, your business appears frequently in search results, trending categories, and platform recommendations.",
  },
  {
    title: "Higher Engagement & Stronger Customer Relationships",
    content:
      "Through professional Social Media Optimization Services in Delhi, you can create meaningful interactions with your audience. Engaging posts, quick responses, and community management help build trust and long-term customer loyalty.",
  },
  {
    title: "Increase in Targeted Traffic & Quality Leads",
    content:
      "SMO helps drive highly relevant traffic to your website. Because users actively engage with your content, the chances of generating high-quality, conversion-ready leads increase significantly.",
  },
  {
    title: "Improved Brand Reputation & Online Credibility",
    content:
      "Positive engagement, active posting, and reputation management make your brand appear reliable and authoritative. With well-managed SMO Services in Delhi, your online reputation improves across platforms.",
  },
  {
    title: "Better Search Engine Rankings (Indirect SEO Benefits)",
    content:
      "Optimized social profiles and strong engagement send positive social signals to search engines. This contributes to better rankings and enhances your overall digital presence.",
  },
  {
    title: "Cost-Effective Marketing With High ROI",
    content:
      "Compared to paid advertising, Social Media Services in Delhi offer long-term value at a minimal cost. With the right strategy, you can achieve measurable growth without overspending.",
  },
  {
    title: "Insightful Analytics & Data-Driven Decisions",
    content:
      "Performance reports and analytics help you understand user behavior, content performance, and audience demographics. These insights help refine your strategy for continuous improvement.",
  },
  {
    title: "Competitive Advantage in Your Industry",
    content:
      "With consistent and optimized social media efforts, your brand stays ahead of competitors who are either inactive or not leveraging SMO effectively.",
  },
  {
    title: "Increased Followers & Community Growth",
    content:
      "Professional SMO Services in Delhi ensure steady follower growth through strategic content, trends, and engagement tactics. A larger community naturally amplifies your brand reach.",
  },
  {
    title: "Strengthened Brand Authority & Trust",
    content:
      "Publishing valuable content and maintaining an active presence helps position your brand as a leader in your niche. High authority translates into greater customer confidence.",
  },
];

const faqs = [
  {
    q: "What are the services that will come under the social media optimization?",
    a: "At Bigwig Media Digital, our SMO Services in Delhi include profile setup, optimization, content creation, scheduling, hashtag strategy, audience engagement, monitoring, reputation management, and performance reporting.",
  },
  {
    q: "What are the social media portals that Bigwig Media Digital works for?",
    a: "We provide complete Social Media Services in Delhi across Facebook, Instagram, LinkedIn, Twitter, Pinterest, and YouTube, ensuring your brand is present where your audience is most active.",
  },
  {
    q: "What is your approach to creating and curating content for social media?",
    a: "We follow a research-backed process: understanding your audience, analyzing competitors, tracking trends, and producing high-quality graphics, captions, videos, reels, and stories aligned with your brand identity.",
  },
  {
    q: "How do you engage with our target audience on social media platforms?",
    a: "We ensure continuous interaction through comments, messages, polls, stories, and community-building. Our team responds actively and builds trust-driven engagement for brand loyalty.",
  },
  {
    q: "Does the strategies of the company change according to the size of the company?",
    a: "Yes. Our Social Media Optimization Services in Delhi are customized based on your business size, goals, industry, and audience behavior — ensuring scalable results.",
  },
  {
    q: "How do we trust the optimization we would get?",
    a: "We provide complete transparency with performance reports, growth insights, content tracking, and strategy updates — so you see measurable improvements consistently.",
  },
  {
    q: "Do you conduct competitor analysis as part of your SMO strategy",
    a: "Yes. We analyze competitor posting frequency, hashtags, engagement style, and content trends to identify opportunities and help you lead the competition.",
  },
  {
    q: "How do you measure the SMO campaign’s success and provide performance reports?",
    a: "We track follower growth, reach, impressions, engagement rate, CTR, content performance, and interactions. You get weekly/monthly reports with insights and improvements.",
  },
];

function SocialMediaOptimization() {
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
      <title>Social Media Optimization (SMO)</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-optimization"
      />
      <meta
        name="description"
        content="Improve your social visibility and engagement with strategic SMO services tailored to your brand."
      />

      <Nav />

      {/* ✅ Global Grid + Glow */}
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
          className="relative pt-[110px] md:pt-[140px] pb-16"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 w-11/12 md:w-5/6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Social Media Growth + Brand Visibility
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                <span className="text-[var(--color5)] font-semibold italic">
                  SMO Services in Delhi
                </span>{" "}
                to Boost Your Social Presence
              </h1>

              <p className="text-gray-300 leading-relaxed text-justify">
                In the fast-paced digital world, brands that stay active on
                social media grow faster, gain more trust, and convert more
                customers. Our SMO Services in Delhi are strategically designed
                to enhance your online presence, increase engagement, and
                improve your brand authority across all major platforms.
              </p>

              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Contact Us"
              />
            </div>

            {/* ✅ Premium Right Glass Card (instead of form block if needed) */}
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color5)] mb-3">
                Get a Free SMO Audit
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Share your business details and we’ll review your social media
                presence, engagement, and growth opportunities.
              </p>
              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Book Free Consultation"
              />
            </div>

            {/* ✅ If you still want your form here, replace the glass card with:
            <ContactForm singleService="Social Media Optimization" />
            */}
          </div>
        </section>

        {/* ✅ INTRO SECTION */}
        <section className="w-11/12 md:w-5/6 max-w-7xl mx-auto py-16 space-y-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
                Social Media Optimization Company in Delhi – Connect, Engage &
                Grow
              </h2>

              <p className="text-gray-300 leading-relaxed text-justify">
                Bigwig Media Digital is a leading provider of SMO Services in
                Delhi. We help businesses build a powerful social presence that
                drives engagement, brand awareness, and long-term relationships.
              </p>

              <p className="text-gray-300 leading-relaxed text-justify">
                With years of experience delivering high-impact Social Media
                Services in Delhi, our certified professionals use proven
                strategies, creative content, and data-driven optimization to
                help businesses achieve outstanding results.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              <Image
                src={smo}
                alt="Social Media Optimization Services"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ✅ EXPERIENCE STATS */}
        <section className="py-12 relative z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] tracking-wide">
              Experience. Expertise. Excellence in SMO Services
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-4 mb-10">
              With more than a decade of industry experience, our team has
              successfully helped clients achieve:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "2X to 6X increase in overall engagement",
                "50% to 400% growth in qualified leads",
                "100% to 1800% boost in new followers",
                "150% to 900% improvement in brand visibility",
                "Significant enhancements in social reach & impressions",
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <p className="text-gray-300 font-medium">{stat}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-10">
              Our consistent results and client satisfaction are backed by
              authentic reviews across platforms like Google.
            </p>
          </div>
        </section>

        {/* ✅ SOCIAL PLATFORMS */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Comprehensive Social Media Optimization Services in Delhi
          </h2>

          <p className="text-gray-300 mb-10">
            Our SMO services are tailored to strengthen your brand presence on
            all major platforms, including:
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
            {socialPlatforms.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[var(--color5)] transition-all shadow-xl hover:shadow-2xl"
              >
                <div className="text-3xl">{item.icon}</div>
                <span className="text-gray-300 text-sm font-medium">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ PROCESS SECTION */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto relative z-10">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
              Our Process for Effective SMO Services in Delhi
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Each aspect of our SMO strategy is designed to enhance your
              visibility, engagement, and brand trust.
            </p>
          </div>

          <div className="relative">
            <div className="block lg:hidden">
              <Slider {...settings}>
                {processItems.map((item, index) => (
                  <div key={index} className="px-2">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 space-y-4">
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
              {processItems.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 space-y-4"
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
          </div>

          <div className="flex justify-center mt-10">
            <ButtonFill
              text="Start Your SMO Growth Journey"
              onClick={() => setIsPopupOpen(true)}
            />
          </div>
        </section>

        {/* ✅ BENEFITS */}
        <section className="py-12 w-11/12 md:w-5/6 max-w-7xl mx-auto relative z-10">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
              Key Benefits of SMO Services in Delhi
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Investing in SMO services can transform the way your brand
              connects with the audience and drives measurable results.
            </p>
          </div>

          <div className="block lg:hidden">
            <Slider {...settings}>
              {benefits.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 space-y-4">
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
            {benefits.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 space-y-4"
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
              text="Boost Your Brand With SMO"
              onClick={() => setIsPopupOpen(true)}
            />
          </div>
        </section>

        {/* ✅ TRUSTED BOX */}
        <section className="py-12 relative overflow-hidden z-10">
          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto">
            <div className="relative rounded-3xl p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--color5)]/10 blur-3xl rounded-full" />

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
                A Trusted SMO Company in Delhi Delivering Proven Results
              </h2>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Our positive reviews and strong portfolio make us one of the
                most reliable names for SMO Services in Delhi. We focus on
                long-term value whether you want to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Increase your social media followers",
                  "Improve brand visibility",
                  "Strengthen online reputation",
                  "Generate more leads",
                  "Boost website traffic",
                  "Build an active online community",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[var(--color5)] text-xl leading-6">
                      •
                    </span>
                    <p className="text-gray-300 text-base md:text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-8">
                Every strategy we create is personalized to your industry,
                goals, and target audience.
              </p>
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

          <div className="space-y-6 w-11/12 md:w-5/6 max-w-5xl mx-auto relative z-10">
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

          <div className="mt-10 flex justify-center">
            <ButtonFill
              text="Start Your Project Today"
              onClick={() => setIsPopupOpen(true)}
            />
          </div>
        </section>

        {/* ✅ OTHER SERVICES TABLE (same) */}
        <section className="py-20 relative overflow-hidden z-10">
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

          <div className="w-11/12 md:w-5/6 max-w-7xl mx-auto space-y-14 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider">
              Our Other Services
            </h2>

            <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.15)] relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent animate-scan"></div>

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
                              className="flex items-center justify-center w-full h-full px-4 text-center font-semibold text-gray-200 transition-all duration-300 hover:text-[var(--color5)]"
                            >
                              <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--color5)] group-hover:shadow-[0_0_20px_var(--color5)] transition-all duration-300"></span>
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

        {/* ✅ If you use Popup Form, enable it */}
        {/*
        <GetInTouch />
        <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        */}

        <Footer />
      </div>
    </div>
  );
}

export default SocialMediaOptimization;

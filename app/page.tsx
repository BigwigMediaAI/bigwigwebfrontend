// import AboutUs from "../../components/About";
// import Blogs from "../../components/Blog";
// import CaseCard from "../../components/CaseCard";
import Client from "../Components/tickle";
// import FlipCard from "../../components/FlipCard";
import Hero from "../Components/Hero";
// import HowWeWork from "../../components/HowWeWork";
// import ImageSlider from "../../components/ImageSlider";
import Nav from "../Components/Navbar";
// import Partners from "../../components/Partners";
// import ScrollOverlappingText from "../../components/ScrollSection";
// import Stats from "../../components/Stats";
// import FAQ from "../../components/Faq";
// import LocationsSection from "../../components/Location";
import Footer from "../Components/Footer";
import WhyChooseUs from "@/Components/WhyChoose";
import BlogSection from "@/Components/Blog";
import About from "@/Components/About";
import Features from "@/Components/Features";
import Services from "@/Components/Services";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import ServicesPage from "../../components/Services";
// import RainbowSteps from "../../components/RainbowSteps";

export default function Home() {
  return (
    <div>
      <link rel="canonical" href="https://www.bigwigmediadigital.com/" />
      <title>
        BigWig Digital | Result-Driven Digital Marketing Agency in India
      </title>
      <meta
        name="description"
        content="BigWig Digital is a full-service digital marketing agency helping businesses grow with expert SEO, social media marketing, Google Ads, and creative campaigns. Drive traffic, leads, and sales with our proven strategies"
      />
      <Nav />
      <Hero />
      <About />
      <WhyChooseUs />
      <Features />
      <Services />
      <BlogSection />
      {/* <Partners /> */}
      {/* <Stats /> */}
      {/* <Client /> */}
      {/* <RainbowSteps /> */}
      {/* <ServicesPage /> */}
      {/* <ScrollOverlappingText />
      <FlipCard /> */}
      {/* <ImageSlider /> */}
      {/* <AboutUs /> */}
      {/* <CaseCard /> */}
      {/* <HowWeWork /> */}
      {/* <Blogs />
      <FAQ /> */}

      {/* <LocationsSection /> */}
      <Footer />

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
    </div>
  );
}

// import AboutUs from "../../components/About";
// import Blogs from "../../components/Blog";
// import CaseCard from "../../components/CaseCard";
// import Client from "../../components/Clients";
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
      <WhyChooseUs />
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
    </div>
  );
}

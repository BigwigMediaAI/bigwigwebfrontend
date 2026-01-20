"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos";

import Image from "next/image";
import Link from "next/link";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const clients = [
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1762152048/logo_npwakv.webp",
    link: "https://khalsapropertydealers.com/",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493003/Granth_logo_6_kyrd5s.png",
    link: "https://granthdreamhomes.co.in/",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493217/logo-01-C0F3dP5k_y93g4q.svg",
    link: "https://www.closefriendstraders.info/",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759495461/Pearls_light_logo_m623gc.png",
    link: "https://pearlsindia.co.in",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826680/bdfx_zvjbi6.gif",
    link: "https://www.billiondollarfx.com",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826620/logo_mondus_new_4_-TMoOETTP_drjizb.gif",
    link: "https://mondus.vercel.app",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1765346115/logo_2_qiiitb.webp",
    link: "https://www.stellarbinge.com",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826183/iln_logo_1_-By-pImIc_lgxxky.png",
    link: "https://www.integratedlognet.com/",
  },
  {
    img: "https://riverfront.vercel.app/assets/Logo%20for%20riverfront%20-CAIVvev0.png",
    link: "https://riverfront.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112478/DBN_logo_x7wjzx.webp",
    link: "https://www.destinybynumberrs.com/",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112443/logo_1_tnncgd.webp",
    link: "https://www.ethicalinfrastructures.com/",
  },
  {
    img: "https://www.homesandlandgoa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b166d281.png&w=640&q=75&dpl=dpl_CAHgoDqvf7txY4ReKMyGa6ZD9Ti4",
    link: "https://homesandlandgoa.com",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826338/logo_fz6mbq.png",
    link: "#",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826497/Gear_Tek_Logo-removebg-preview_j5p3wc-removebg-preview_x7urfm.png",
    link: "#",
  },
];

export default function ClientsPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      {/* BACKGROUND GRID */}
      <div className="relative pt-28 md:pt-36 pb-24">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        {/* CONTENT */}
        <div className="relative w-11/12 md:w-5/6 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-14">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              Partnerships
            </span>

            <h1 className="text-4xl md:text-5xl font-light">
              Our Trusted{" "}
              <span className="text-[var(--secondary-color)] italic font-serif">
                Clients
              </span>
            </h1>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We’ve proudly collaborated with brands across industries to build
              scalable digital solutions and growth-driven marketing campaigns.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <Link
                key={index}
                href={client.link || "#"}
                target={client.link && client.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  data-aos="zoom-in"
                  className="
                    relative aspect-square rounded-3xl
                    bg-white/5 backdrop-blur-md border border-white/10
                    shadow-xl hover:shadow-2xl
                    overflow-hidden
                    transition-all duration-500
                    hover:border-white/20
                    hover:scale-[1.03]
                  "
                >
                  {/* Soft glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
                  </div>

                  {/* Logo */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                    <Image
                      src={client.img}
                      alt="Client Logo"
                      width={160}
                      height={160}
                      draggable={false}
                      className="
                        w-[72%] h-[72%] object-contain
                        grayscale opacity-80
                        group-hover:grayscale-0 group-hover:opacity-100
                        transition-all duration-500
                      "
                    />
                  </div>

                  {/* Border shimmer */}
                  <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

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
  );
}

"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Phone, MapPin, Clock } from "lucide-react";

import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ButtonFill from "../../Components/ButtonFill";

export default function ContactPage() {
  const SERVICES_LIST = [
    "SEO",
    "SMM",
    "Performance Marketing",
    "Content Marketing",
    "Website Development",
    "SMO",
    "Email Marketing",
    "Graphic Designing",
    "Influencer Marketing",
    "Affiliate Marketing",
    "ORM",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    services: [] as string[],
    message: "",
  });

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"form" | "otp">("form");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
  }>({});

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateInputs = () => {
    const newErrors: typeof errors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Please enter your name.";

    if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email address.";

    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Please enter a valid phone number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service);
      return {
        ...prev,
        services: isSelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");

    if (!validateInputs()) return;

    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/send-otp`,
        {
          name: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          services: formData.services,
          message: formData.message,
        }
      );

      setStep("otp");
      setStatusMessage("OTP sent! Please check your email.");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(
        error.response?.data?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/verify-otp`,
        {
          email: formData.email,
          otp,
        }
      );

      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 2500);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        countryCode: "+91",
        services: [],
      });

      setOtp("");
      setStep("form");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(error.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      {/* MAIN WRAPPER */}
      <section className="relative pt-32 pb-20">
        {/* GRID BG (same style as your site) */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative w-11/12 md:w-5/6 max-w-7xl mx-auto">
          {/* TOP HEADING */}
          <div className="text-center mb-14">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              Contact
            </span>

            <h1 className="text-4xl md:text-5xl font-light">
              Let’s Talk About Your{" "}
              <span className="text-[var(--secondary-color)] italic font-serif">
                Growth
              </span>
            </h1>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Fill the form and verify OTP. Our team will contact you within 24
              hours.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT INFO */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[var(--secondary-color)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <p className="text-gray-400">+91 8368573451</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[var(--secondary-color)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400 max-w-sm">
                      Rajouri Garden, Delhi 110007, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[var(--secondary-color)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                    <p className="text-gray-400">
                      Mon – Sat: 10:30 am – 7 pm <br />
                      Sat: 2nd & 4th, Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-8">
                {step === "form" ? "Send us a Message" : "Verify OTP"}
              </h2>

              {step === "form" ? (
                <form onSubmit={handleSendOtp} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-gray-300">Name</label>
                      <input
                        type="text"
                        className="mt-2 w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--secondary-color)]"
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm text-gray-300">Email</label>
                      <input
                        type="email"
                        className="mt-2 w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--secondary-color)]"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm text-gray-300">Phone</label>

                    <div className="mt-2 flex gap-3 flex-col sm:flex-row">
                      <select
                        className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--secondary-color)]"
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            countryCode: e.target.value,
                          })
                        }
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>

                      <input
                        type="text"
                        className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--secondary-color)]"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Services */}
                  <div>
                    <label className="text-sm text-gray-300">Services</label>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES_LIST.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-3 bg-black/20 border border-white/10 rounded-xl px-4 py-3 cursor-pointer hover:border-white/20 transition"
                        >
                          <input
                            type="checkbox"
                            className="accent-[var(--secondary-color)]"
                            checked={formData.services.includes(service)}
                            onChange={() => toggleService(service)}
                          />
                          <span className="text-sm text-gray-200">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm text-gray-300">Message</label>
                    <textarea
                      rows={4}
                      className="mt-2 w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--secondary-color)]"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  {/* Submit */}
                  <ButtonFill
                    type="submit"
                    text={loading ? "Sending OTP..." : "SUBMIT"}
                  />

                  {statusMessage && (
                    <p className="text-[var(--secondary-color)] mt-2">
                      {statusMessage}
                    </p>
                  )}
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <div>
                    <label className="text-sm text-gray-300">Enter OTP</label>
                    <input
                      type="text"
                      className="mt-2 w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--secondary-color)]"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>

                  <ButtonFill
                    type="submit"
                    text={loading ? "Verifying..." : "VERIFY OTP"}
                  />

                  {statusMessage && (
                    <p className="text-[var(--secondary-color)] mt-2">
                      {statusMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* MAP */}
          <div className="mt-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.649821776086!2d77.1232053!3d28.640255499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0142b8eb125b%3A0xbd47bb63cb66d3bd!2sBigWig%20Media%20%26%20Events%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768287673529!5m2!1sen!2sin"
                className="w-full h-[350px]"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-center max-w-sm w-full">
            <h3 className="text-xl font-bold text-green-600">Thank You!</h3>
            <p className="mt-1 text-sm">Your response has been submitted.</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

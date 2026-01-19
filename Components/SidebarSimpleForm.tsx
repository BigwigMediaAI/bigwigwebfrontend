"use client";

import { useState } from "react";
import axios, { AxiosError } from "axios";
import ButtonFill from "./ButtonFill";

const SERVICES = [
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

export default function SidebarSimpleForm() {
  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "",
    message: "",
  });

  const [otp, setOtp] = useState("");

  /* ---------------- SEND OTP ---------------- */
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/send-otp`,
        {
          name: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          services: formData.service ? [formData.service] : [],
          message: formData.message,
        }
      );

      setStep("otp");
      setStatusMessage("OTP sent to your email.");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(error.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- VERIFY OTP ---------------- */
  const handleVerifyOtp = async (e: React.FormEvent) => {
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

      setStatusMessage("Thank you! We’ll contact you shortly.");

      setTimeout(() => {
        setStep("form");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "+91",
          service: "",
          message: "",
        });
        setOtp("");
        setStatusMessage("");
      }, 2000);
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(error.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
      <h3 className="text-lg font-semibold mb-2">Get a Free Consultation</h3>

      <p className="text-sm text-gray-400 mb-5">
        Fill the form & verify via OTP
      </p>

      {step === "form" ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--secondary-color)]"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--secondary-color)]"
          />

          <div className="flex gap-2">
            <select
              value={formData.countryCode}
              onChange={(e) =>
                setFormData({ ...formData, countryCode: e.target.value })
              }
              className="bg-black/30 border border-white/10 rounded-xl px-3 py-3 text-sm outline-none"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>

            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--secondary-color)]"
            />
          </div>

          <select
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
          >
            <option value="">Select Service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <textarea
            rows={3}
            placeholder="Your requirement"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--secondary-color)]"
          />

          <ButtonFill
            type="submit"
            className="w-full"
            text={loading ? "Sending OTP..." : "Send OTP"}
          />
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--secondary-color)]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-sm"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      )}

      {statusMessage && (
        <p className="mt-4 text-sm text-center text-gray-300">
          {statusMessage}
        </p>
      )}
    </div>
  );
}

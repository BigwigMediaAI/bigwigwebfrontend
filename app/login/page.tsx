"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Mail, Lock, ShieldCheck } from "lucide-react";

import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (email === "admin@gmail.com" && password === "Bigwig@2025") {
        sessionStorage.setItem("login", "true");
        await Swal.fire("Success", "Welcome, Admin!", "success");
        router.push("/admin");
      } else {
        await Swal.fire("Error", "Incorrect email or password!", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      <Nav />

      {/* Background Glow (No Image) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-[var(--color5)]/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[550px] h-[550px] bg-[var(--color5)]/10 blur-3xl rounded-full" />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-12 relative z-10">
        <div
          className="
      w-full max-w-md 
      relative rounded-3xl overflow-hidden
      backdrop-blur-2xl bg-white/5
      border border-white/10
      shadow-[0_0_45px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_35px_var(--color5)]
      transition-all duration-700
      p-6 md:p-8
    "
        >
          {/* Shine Line */}
          <div
            className="
              absolute -top-full left-0 w-full h-full
              bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
              rotate-45 opacity-70
              animate-[shineMove_5s_ease-in-out_infinite]
            "
          />

          {/* Header */}
          <div className="relative z-10 text-center space-y-3">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color5)]/15 border border-[var(--color5)]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                <ShieldCheck className="w-7 h-7 text-[var(--color5)]" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color5)]">
              Admin Login
            </h2>

            <p className="text-gray-300 text-sm md:text-base">
              Secure access to Bigwig Admin Dashboard
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-6 relative z-10"
          >
            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Email Address</label>

              <div
                className="
                  flex items-center gap-3 px-4 py-3 rounded-2xl
                  bg-white/5 border border-white/10
                  focus-within:border-[var(--color5)]
                  focus-within:shadow-[0_0_20px_rgba(0,255,255,0.12)]
                  transition-all
                "
              >
                <Mail className="w-5 h-5 text-[var(--color5)]" />

                <input
                  type="email"
                  className="w-full bg-transparent outline-none text-gray-200 placeholder:text-gray-500"
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Password</label>

              <div
                className="
                  flex items-center gap-3 px-4 py-3 rounded-2xl
                  bg-white/5 border border-white/10
                  focus-within:border-[var(--color5)]
                  focus-within:shadow-[0_0_20px_rgba(0,255,255,0.12)]
                  transition-all
                  relative
                "
              >
                <Lock className="w-5 h-5 text-[var(--color5)]" />

                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent outline-none text-gray-200 placeholder:text-gray-500 pr-10"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-400 hover:text-[var(--color5)] transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full py-3 rounded-2xl font-semibold transition-all text-white
                shadow-[0_0_20px_rgba(0,255,255,0.15)]
                ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed text-white"
                    : "bg-[var(--color5)] text-white hover:opacity-90"
                }
              `}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Footer Info */}
            <p className="text-center text-gray-400 text-sm">
              Only authorized admins can access this panel.
            </p>
          </form>
        </div>
      </div>

      <Footer />

      {/* Shine Animation */}
      <style>
        {`
          @keyframes shineMove {
            0% { transform: translateY(-160%); }
            100% { transform: translateY(160%); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;

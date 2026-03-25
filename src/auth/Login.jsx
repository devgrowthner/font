'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { postPublic } from "../network/apiService";
import { setData } from "../utils/localStorageHandler";
import { useLoader } from "../context/LoaderContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { showLoader, hideLoader } = useLoader();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !password) {
      setError("Please enter email and password.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const data = await postPublic("accounts/login/", {
        email: trimmedEmail,
        password,
      });
      if (data?.success && data.access) {
        setData("accessToken", data.access);

        const needsChangePassword =
          data.is_temp_password === true || data.is_temp_password === "true";
        const hasCard = data.has_card === true || data.has_card === "true";

        let destination = "/payment";
        let loaderMsg = "Preparing billing…";
        if (needsChangePassword) {
          destination = "/change-password";
          loaderMsg = "Securing your account…";
        } else if (hasCard) {
          destination = "/dashboard";
          loaderMsg = "Loading your dashboard…";
        }

        showLoader(loaderMsg);
        setTimeout(() => {
          router.replace(destination);
          setTimeout(() => hideLoader(), 600);
        }, 1400);
        return;
      } else {
        setError(data?.message || "Invalid email or password.");
      }
    } catch (err) {
      const backendMessage = err?.response?.data?.message;
      setError(
        typeof backendMessage === "string"
          ? backendMessage
          : "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] pt-20 sm:pt-24 pb-16 sm:pb-20 flex items-center justify-center">
      <div className="relative w-full max-w-6xl mx-4 rounded-2xl border border-gray-200/70 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[640px] items-stretch">
          {/* Visual panel */}
          <div className="relative order-1 md:order-2 min-h-[260px] md:h-full">
            <img
              src="/ai1.webp"
              alt="AI dashboard illustration"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 space-y-3">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-brand-green uppercase">
                Client dashboard access
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Log in to your{" "}
                <span className="text-brand-green">Zynex AI workspace</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 max-w-sm">
                This login is for users coming to the site to access their own
                AI performance dashboard, reports, and active solutions.
              </p>
              <ul className="mt-1 space-y-1.5 text-xs text-gray-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Review deployment impact and ROI in real time.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Monitor live models and data quality signals.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Collaborate with Zynex on new AI initiatives.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form panel */}
          <div className="order-2 md:order-1 flex items-center">
            <div className="w-full px-6 pt-6 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-12 lg:pt-8 lg:pb-14">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-brand-green uppercase mb-3">
                Welcome
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Sign in to your{" "}
                <span className="text-brand-green">AI dashboard</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mb-8 max-w-md">
              Use the email and temporary password sent to your inbox to securely log 
              in to your dashboard and access your data, insights and controls.
              </p>

              <form className="space-y-6" noValidate onSubmit={handleSubmit}>
                {error && (
                  <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                    {error}
                  </p>
                )}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg bg-white/90 border border-gray-300/80 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#719334]"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => router.push("/forgot-password")}
                      className="text-xs text-[#719334] hover:text-[#5a7529] font-medium transition-colors duration-200"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg bg-white/90 border border-gray-300/80 px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#719334]"
                    />
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 12s2.5-6 10-6 10 6 10 6-2.5 6-10 6S2 12 2 12Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 3l18 18" />
                          <path d="M10.6 10.6A2 2 0 0 0 12 14a2 2 0 0 0 1.4-.6" />
                          <path d="M9.5 5.3A9.5 9.5 0 0 1 12 5c7.5 0 10 6 10 6a17.3 17.3 0 0 1-3.2 4.6" />
                          <path d="M6.2 6.2A17.3 17.3 0 0 0 2 11s2.5 6 10 6a9.8 9.8 0 0 0 2.7-.4" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center rounded-lg bg-[#719334] text-white text-sm font-semibold py-2.5 px-4 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#5a7529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#719334] focus:ring-offset-white disabled:opacity-70"
                >
                  {loading ? "Signing in…" : "Log in"}
                </button>

                <p className="text-[11px] text-gray-500 leading-relaxed">
                  For security, only approved users with an active Zynex
                  Technologies engagement can access this dashboard.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


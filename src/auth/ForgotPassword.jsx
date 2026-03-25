'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { postPublic } from "../network/apiService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setLoading(true);
    try {
      const data = await postPublic("accounts/forgot-password/", {
        email: trimmedEmail,
      });
      if (data?.success) {
        setSuccess(true);
        setSuccessMessage(data?.message || "If an account exists with this email, you will receive a password reset link.");
        setEmail("");
      } else {
        setError(data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      const backendMessage = err?.response?.data?.message;
      setError(
        typeof backendMessage === "string"
          ? backendMessage
          : "Something went wrong. Please try again."
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
                Account recovery
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Reset your{" "}
                <span className="text-brand-green">Zynex AI password</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 max-w-sm">
                Enter your registered email address and we'll send you instructions
                to reset your password and regain access to your AI dashboard.
              </p>
              <ul className="mt-1 space-y-1.5 text-xs text-gray-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Secure password reset via email verification.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Quick access restoration to your dashboard.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>24/7 support for account-related issues.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form panel */}
          <div className="order-2 md:order-1 flex items-center">
            <div className="w-full px-6 pt-6 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-12 lg:pt-8 lg:pb-14">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-brand-green uppercase mb-3">
                Password reset
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Recover your{" "}
                <span className="text-brand-green">account</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mb-8 max-w-md">
                Enter the email address associated with your Zynex AI account.
                We'll send you a secure link to reset your password.
              </p>

              {success ? (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-sm font-semibold text-green-900 mb-1">
                          Check your email
                        </h3>
                        <p className="text-sm text-green-800">
                          {successMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => router.push("/login")}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-[#719334] text-white text-sm font-semibold py-2.5 px-4 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#5a7529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#719334] focus:ring-offset-white"
                  >
                    Back to login
                  </button>
                </div>
              ) : (
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

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-[#719334] text-white text-sm font-semibold py-2.5 px-4 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#5a7529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#719334] focus:ring-offset-white disabled:opacity-70"
                  >
                    {loading ? "Sending…" : "Send reset link"}
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => router.push("/login")}
                      className="text-sm text-gray-600 hover:text-[#719334] transition-colors duration-200"
                    >
                      ← Back to login
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    For security, only approved users with an active Zynex
                    Technologies engagement can access this dashboard. If you need
                    assistance, please contact support.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

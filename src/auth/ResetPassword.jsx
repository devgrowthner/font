'use client';

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { postPublic } from "../network/apiService";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const resetToken = searchParams.get("token");
    if (!resetToken) {
      setError("Invalid or missing reset token. Please request a new password reset link.");
    } else {
      setToken(resetToken);
    }
  }, [searchParams]);

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Invalid or missing reset token.");
      return;
    }

    if (!newPassword || !confirmPassword) {
      setError("Please enter and confirm your new password.");
      return;
    }

    const passwordError = validatePassword(newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const data = await postPublic("accounts/forgot-password-confirm/", {
        token: token,
        new_password: newPassword,
      });
      
      if (data?.success) {
        setSuccess(true);
        setSuccessMessage(data?.message || "Password has been reset. You can log in with your new password.");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError(data?.message || "Failed to reset password. Please try again.");
      }
    } catch (err) {
      const backendMessage = err?.response?.data?.message;
      setError(
        typeof backendMessage === "string"
          ? backendMessage
          : "Failed to reset password. The link may be expired or invalid."
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
                Secure access
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Create your new{" "}
                <span className="text-brand-green">password</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 max-w-sm">
                Choose a strong password to secure your Zynex AI dashboard account
                and protect your data and insights.
              </p>
              <ul className="mt-1 space-y-1.5 text-xs text-gray-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Minimum 8 characters with mixed case letters.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Include at least one number for security.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Unique password not used elsewhere.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form panel */}
          <div className="order-2 md:order-1 flex items-center">
            <div className="w-full px-6 pt-6 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-12 lg:pt-8 lg:pb-14">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-brand-green uppercase mb-3">
                Reset password
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Set your new{" "}
                <span className="text-brand-green">password</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mb-8 max-w-md">
                Enter your new password below. Make sure it&apos;s strong and unique
                to keep your account secure.
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
                          Password reset successful
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
                    Continue to login
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
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-gray-800"
                    >
                      New password
                    </label>
                    <div className="relative">
                      <input
                        id="newPassword"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        disabled={!token}
                        className="w-full rounded-lg bg-white/90 border border-gray-300/80 px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#719334] disabled:opacity-50 disabled:cursor-not-allowed"
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

                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Confirm new password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Confirm your new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={!token}
                        className="w-full rounded-lg bg-white/90 border border-gray-300/80 px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#719334] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <span
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? (
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
                    disabled={loading || !token}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-[#719334] text-white text-sm font-semibold py-2.5 px-4 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#5a7529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#719334] focus:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Resetting password…" : "Reset password"}
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
                    Make sure your password is strong and unique. Never share your
                    password with anyone, even Zynex Technologies staff.
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

export default ResetPassword;

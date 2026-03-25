'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { postProtected } from "../network/apiService";

const ChangePassword = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!newPassword || !confirmPassword) {
      setError("Please fill all required fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    try {
      await postProtected("accounts/temp-password-reset/", {
        new_password: newPassword,
      });
      router.replace("/payment");
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Failed to update password.";
      setError(Array.isArray(msg) ? msg[0] : msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] pt-24 sm:pt-28 pb-16 sm:pb-20 flex items-center justify-center">
      <div className="relative w-full max-w-6xl mx-4 rounded-2xl border border-gray-200/70 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[640px] items-stretch">
          {/* Visual panel */}
          <div className="relative order-1 md:order-2 min-h-[260px] md:h-full">
            <img
              src="/ai1.webp"
              alt="AI workspace security illustration"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 space-y-3">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-brand-green uppercase">
                Account security
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Keep your{" "}
                <span className="text-brand-green">Zynex AI workspace</span>{" "}
                secure
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 max-w-sm">
                Update your password to protect access to your AI
                performance dashboards, insights and controls.
              </p>
              <ul className="mt-1 space-y-1.5 text-xs text-gray-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Use strong, unique passwords for your account.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Avoid reusing credentials from other systems.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Change your password immediately if you suspect misuse.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form panel */}
          <div className="order-2 md:order-1 flex items-center">
            <div className="w-full px-6 pt-6 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-12 lg:pt-8 lg:pb-14">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-brand-green uppercase mb-3">
                Password settings
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Change your{" "}
                <span className="text-brand-green">account password</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mb-8 max-w-md">
                Choose a new password for your account. Make sure your new
                password is something only you can guess.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                    {error}
                  </p>
                )}
                {/* New password */}
                <div className="space-y-2">
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-800"
                  >
                    New password
                  </label>
                  <div className="relative">
                    <input
                      id="new-password"
                      type={showNew ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Create a new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full rounded-lg bg-white/90 border border-gray-300/80 px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#719334]"
                    />
                    <span
                      onClick={() => setShowNew((prev) => !prev)}
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                      aria-label={showNew ? "Hide password" : "Show password"}
                    >
                      {showNew ? (
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

                {/* Confirm new password */}
                <div className="space-y-2">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Confirm new password
                  </label>
                  <div className="relative">
                    <input
                      id="confirm-password"
                      type={showConfirm ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Re-enter your new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full rounded-lg bg-white/90 border border-gray-300/80 px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#719334]"
                    />
                    <span
                      onClick={() => setShowConfirm((prev) => !prev)}
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                      aria-label={showConfirm ? "Hide password" : "Show password"}
                    >
                      {showConfirm ? (
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
                  {loading ? "Updating…" : "Change password"}
                </button>

                <p className="text-[11px] text-gray-500 leading-relaxed">
                  For your security, make sure this password is not used for any
                  other accounts. Changes will apply the next time you log in.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;


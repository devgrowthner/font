'use client';

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CreditCard, Shield, CheckCircle, Lock, ArrowRight, Loader2, Phone } from "lucide-react";
import { getProtected, postProtected } from "../network/apiService";
import { getData } from "../utils/localStorageHandler";

const MotionDiv = motion.div;

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Payment = () => {
  const [nextPayment, setNextPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const intervalDays = nextPayment?.interval_days ?? 28;

  useEffect(() => {
    const token = getData("accessToken");
    if (!token) {
      router.replace("/login");
      return;
    }
    const fetchNext = async () => {
      try {
        const data = await getProtected("b2b/next-payment/");
        if (data && data.success) setNextPayment(data);
      } catch (err) {
        if (err?.response?.status === 401) router.replace("/login");
        else setError("Could not load payment details.");
      } finally {
        setLoading(false);
      }
    };
    fetchNext();
  }, [router, sessionId]);

  const handleAddCard = async () => {
    if (!nextPayment?.amount || parseFloat(nextPayment.amount) <= 0) {
      setError("Payment amount is not set for your account. Please contact your administrator.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const data = await postProtected("b2b/subscription/create/", {});
      if (data?.checkout_url) {
        window.location.href = data.checkout_url;
        return;
      }
      setError("Could not start checkout.");
    } catch (err) {
      if (err?.response?.status === 401) router.replace("/login");
      else setError(err?.response?.data?.message || "Could not create subscription.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#719334] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center mb-8 lg:mb-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight"
          >
            Confirm your{" "}
            <span className="text-brand-green">Zynex AI billing</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-1 sm:px-0"
          >
            Review your monthly platform fee and saved card details before we
            finalize your subscription.
          </motion.p>
        </MotionDiv>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left: subscription details */}
          <MotionDiv
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-gray-200/80 h-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-bold text-gray-900 mb-4 sm:mb-6"
            >
              Monthly subscription breakdown
            </motion.h2>

            <div className="space-y-4 sm:space-y-5">
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border border-gray-200/80 bg-gray-50/80 px-4 py-3.5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-1.5">
                  Billing cycle (every {intervalDays} days)
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {nextPayment?.amount != null ? `$${nextPayment.amount} ${nextPayment.currency || 'AUD'}` : "—"}
                  </span>
                  <span className="text-sm text-gray-600">every {intervalDays} days</span>
                </div>
                {nextPayment?.next_deduction_date && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    Next auto-deduct: {new Date(nextPayment.next_deduction_date).toLocaleDateString()}
                  </p>
                )}
                {(!nextPayment?.has_card && nextPayment?.message) && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{nextPayment.message}</p>
                )}
              </motion.div>

              {/* Voice calling add-on */}
              {nextPayment?.voice_enabled && (
                <motion.div
                  variants={fadeInUp}
                  className="rounded-xl border border-[#719334]/30 bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] px-4 py-3.5"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#719334]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#719334]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#719334] mb-1">
                        Voice Calling Agent Add-on
                      </p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-xl sm:text-2xl font-extrabold text-gray-900">
                          {nextPayment?.voice_cents_per_minute}¢
                        </span>
                        <span className="text-sm text-gray-600">per minute</span>
                      </div>
                      {nextPayment?.voice_message && (
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {nextPayment.voice_message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {error && (
                <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
              )}
            </div>
          </MotionDiv>

          {/* Right: saved card + confirm */}
          <MotionDiv
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-black via-slate-950 to-black rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.7)] border border-white/10 flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 pb-5 border-b border-white/10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#719334] to-[#719334] flex items-center justify-center shadow-lg">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1">
                    Saved payment method
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-300 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-brand-green" />
                    Securely stored via our payment processor
                  </p>
                </div>
              </div>

              {/* Card / Add card */}
              <div className="mb-5 sm:mb-6">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 px-4 py-4 sm:px-5 sm:py-5 mb-3">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/5" />
                  <div className="absolute right-4 bottom-3 h-7 w-7 rounded-full border border-white/30 flex items-center justify-center text-[9px] tracking-[0.14em] uppercase text-gray-100/80">
                    ZYNEX
                  </div>

                  <div className="relative z-10 space-y-3">
                    <p className="text-[11px] text-gray-300 uppercase tracking-[0.22em]">
                      Business credit card
                    </p>
                    <p className="text-base sm:text-lg font-medium text-gray-50 tracking-[0.2em]">
                      •••• •••• •••• 4242
                    </p>
                    <div className="text-[11px] text-gray-300 mt-1">
                      <p className="uppercase tracking-[0.18em] text-gray-400">
                        Cardholder
                      </p>
                      <p className="text-xs font-medium text-gray-100">
                        Zynex Technologies
                      </p>
                    </div>
                  </div>
                </div>

                {!nextPayment?.has_card && (
                  <p className="text-sm text-gray-300 mb-3">
                    Add your card below. You will be charged the amount shown above every {intervalDays} days.
                  </p>
                )}
                <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>We never see or store full card numbers. Stripe handles all card data.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>PCI‑compliant; {intervalDays}‑day billing cycle.</span>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                {nextPayment?.has_card ? (
                  <p className="text-sm text-gray-400 text-center">Your subscription is active. You will be charged automatically every {intervalDays} days.</p>
                ) : (
                  <>
                    <motion.button
                      type="button"
                      disabled={submitting || !nextPayment?.amount}
                      onClick={handleAddCard}
                      whileHover={{ scale: submitting ? 1 : 1.02 }}
                      whileTap={{ scale: submitting ? 1 : 0.98 }}
                      className="w-full bg-[#719334] hover:bg-[#5a7529] text-white font-semibold py-3.5 sm:py-4 px-6 rounded-lg sm:rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base group relative overflow-hidden cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-900" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Redirecting to Stripe...
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4" />
                            Add card and start subscription
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>
                    <p className="mt-4 pt-4 border-t border-white/10 text-[10px] text-gray-400 leading-relaxed text-center">
                      You will be redirected to Stripe to enter your card. You will be charged every {intervalDays} days.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default Payment;


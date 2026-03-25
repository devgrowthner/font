'use client';

import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  XCircle,
  ArrowRight,
  AlertTriangle,
  RefreshCw,
  CreditCard,
  Headphones,
  Loader2,
} from "lucide-react";

const MotionDiv = motion.div;

const REDIRECT_SECONDS = 15;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const PaymentFailure = () => {
  const searchParams = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const sessionId = searchParams.get("session_id");
  const router = useRouter();
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  const goToPayment = useCallback(() => {
    router.replace("/payment");
  }, [router]);

  useEffect(() => {
    if (countdown <= 0) {
      goToPayment();
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, goToPayment]);

  const troubleshootSteps = [
    {
      icon: RefreshCw,
      text: "Retry the payment with the same or a different card.",
    },
    {
      icon: CreditCard,
      text: "Ensure your card is enabled for online/international transactions.",
    },
    {
      icon: Headphones,
      text: "Reach out to our support team if failures continue.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef2f2] via-[#fefdfb] to-[#fee2e2] pt-24 sm:pt-28 pb-16 sm:pb-20 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Failure icon with animated ring */}
          <motion.div
            variants={fadeInUp}
            className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-red-500/10"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="absolute -inset-2 rounded-full bg-red-500/5"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3,
              }}
              className="relative w-full h-full rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/25"
            >
              <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">
              <AlertTriangle className="w-3 h-3" />
              Payment not completed
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight"
          >
            Your payment{" "}
            <span className="text-red-500">could not be processed</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed mb-8"
          >
            Your subscription payment was cancelled or could not be completed.
            Don&apos;t worry — your card has{" "}
            <span className="font-semibold text-gray-800">not been charged</span>{" "}
            for this attempt.
          </motion.p>
        </MotionDiv>

        {/* Card */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="rounded-2xl bg-white border border-gray-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] overflow-hidden"
        >
          {/* Warning banner */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-red-50 to-transparent border-b border-red-100/60 px-6 sm:px-8 py-4 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              If this was unintentional, you can safely try again. Check your
              card details or contact your bank if the issue persists.
            </p>
          </motion.div>

          {/* Troubleshoot steps */}
          <div className="px-6 sm:px-8 py-6 sm:py-7">
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4"
            >
              What you can do
            </motion.p>
            <div className="space-y-3 sm:space-y-4 mb-7">
              {troubleshootSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                    <step.icon className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-1">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <button
                type="button"
                onClick={goToPayment}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#719334] hover:bg-[#5a7529] text-white text-sm sm:text-base font-semibold py-3.5 px-6 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Try payment again
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Auto-redirect countdown */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>
                  Redirecting to payment page in{" "}
                  <span className="font-semibold text-gray-600">
                    {countdown}s
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default PaymentFailure;


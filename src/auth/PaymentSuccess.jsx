'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  LayoutDashboard,
  Users,
  Settings,
  Mail,
  Loader2,
} from "lucide-react";
import { getProtected } from "../network/apiService";
import { getData } from "../utils/localStorageHandler";

const MotionDiv = motion.div;

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

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const token = getData("accessToken");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const data = await getProtected("accounts/me/");
        if (data?.success) {
          setUserData(data);
        }
      } catch (err) {
        if (err?.response?.status === 401) {
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const intervalDays = userData?.user_details?.interval_days ?? 28;

  const nextSteps = [
    {
      icon: LayoutDashboard,
      text: "Explore your AI performance dashboard.",
    },
    { icon: Users, text: "Configure workspaces and invite your team." },
    {
      icon: Settings,
      text: "Update billing details anytime from the settings area.",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#719334] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] pt-24 sm:pt-28 pb-16 sm:pb-20 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Success icon with animated ring */}
          <motion.div
            variants={fadeInUp}
            className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-[#719334]/10"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="absolute -inset-2 rounded-full bg-[#719334]/5"
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
              className="relative w-full h-full rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] flex items-center justify-center shadow-lg shadow-[#719334]/25"
            >
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-1.5 bg-[#719334]/10 text-[#719334] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">
              <Shield className="w-3 h-3" />
              Payment confirmed
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight"
          >
            Your{" "}
            <span className="text-[#719334]">Zynex AI</span>{" "}
            subscription is active
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed mb-8"
          >
            Your workspace has been unlocked and is ready to use. A confirmation
            email with subscription details has been sent to{" "}
            <span className="font-semibold text-gray-800">
              {userData?.user?.email || "your registered email address"}
            </span>.
          </motion.p>
        </MotionDiv>

        {/* Card */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="rounded-2xl bg-white border border-gray-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] overflow-hidden"
        >
          {/* Invoice notice */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-[#719334]/5 to-transparent border-b border-gray-100 px-6 sm:px-8 py-4 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[#719334]/10 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#719334]" />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Your card will be charged automatically every{" "}
              <span className="font-semibold text-gray-800">{intervalDays} days</span>{" "}
              unless you cancel your subscription from the settings.
            </p>
          </motion.div>

          {/* Next steps */}
          <div className="px-6 sm:px-8 py-6 sm:py-7">
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4"
            >
              What&apos;s next
            </motion.p>
            <div className="space-y-3 sm:space-y-4 mb-7">
              {nextSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#719334]/10 group-hover:border-[#719334]/20 transition-colors">
                    <step.icon className="w-4 h-4 text-gray-400 group-hover:text-[#719334] transition-colors" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-1">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/dashboard"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#719334] hover:bg-[#5a7529] text-white text-sm sm:text-base font-semibold py-3.5 px-6 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Go to dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default PaymentSuccess;

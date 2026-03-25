'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import bg1 from "../assets/ai3.png";
import Footer from "../components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Solutions = () => {
  const router = useRouter();
  const carecopFeatures = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Daily Companion Calls",
      description:
        "AI makes friendly phone calls to care receivers, providing companionship and checking on their wellbeing with natural, human-like conversations.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      title: "Medicine Reminders & Adherence",
      description:
        "AI reminds people to take medicines on time and checks if they were taken, improving health outcomes and reducing complications.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Remote Family Monitoring",
      description:
        "Family members receive daily insights and updates about their loved ones' wellbeing, providing peace of mind without constant physical visits.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: "Emergency Detection & Alerts",
      description:
        "AI detects emergencies during calls and immediately alerts caregivers, enabling faster response times and potentially saving lives.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Health Decline Detection",
      description:
        "AI tracks wellness trends over time and flags concerns early, enabling preventive care and early intervention before issues become serious.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Care Facility Management",
      description:
        "Automated calls to all residents with centralized monitoring, enabling efficient care delivery and early issue detection for facilities.",
    },
  ];

  const benefits = [
    {
      metric: "Multilingual",
      label: "Support",
    },
    {
      metric: "24/7",
      label: "Companionship & Monitoring",
    },
    {
      metric: "Real-Time",
      label: "Emergency Alerts",
    },
    {
      metric: "Scalable",
      label: "1 to 1000+ Users",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Setup Your Profile",
      description:
        "Create profiles for care receivers with preferences, schedules, and contact information. Customize call frequency and timing.",
    },
    {
      number: "02",
      title: "AI Makes Daily Calls",
      description:
        "Grace, our AI companion, calls at scheduled times for friendly conversations, wellness checks, and medication reminders.",
    },
    {
      number: "03",
      title: "Real-Time Monitoring",
      description:
        "AI analyzes conversations for mood changes, health concerns, and emergencies. Tracks trends over time for early intervention.",
    },
    {
      number: "04",
      title: "Family Dashboard",
      description:
        "Caregivers receive daily summaries, insights, and alerts. Stay connected with loved ones without constant physical visits.",
    },
  ];

  const whyChoose = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Multilingual Support",
      description:
        "Conversations in multilingual support with natural-sounding voices and cultural sensitivity",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Privacy & Security",
      description:
        "Bank-level encryption, HIPAA compliance, and strict data protection standards",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Easy Integration",
      description:
        "Works with existing care systems, no complex setup required—ready in minutes",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Hero Section with Image */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#fefdfb] to-[#faf5ff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-sky-400/8 rounded-full blur-3xl animate-float hidden sm:block"></div>
        <div
          className="absolute bottom-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/8 rounded-full blur-3xl animate-float hidden sm:block"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Back Button */}
          <div className="mb-8 sm:mb-12">
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-sky-600 transition-colors duration-300 font-medium text-sm sm:text-base group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
          </div>

          {/* Hero Content with Image */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInLeft}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-600 text-sm font-medium mb-6"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Healthcare AI
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight"
              >
                CareCob:{" "}
                <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                  AI Companion for Everyone
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                AI-powered companion system that makes phone calls to care
                receivers, checks on their wellbeing, and keeps caregivers
                informed. Reduce loneliness, improve medicine adherence, and
                ensure safety with natural, human-like conversations for people
                of all ages.
              </motion.p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInRight}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <motion.img
                src={bg1.src}
                alt="CareCob AI Companion"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-purple-500/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm border border-sky-100/60 rounded-xl p-5 text-center hover:border-sky-300/70 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-heading font-extrabold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {benefit.metric}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-body">
                  {benefit.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#eff6ff]/60 via-[#f0f9ff] to-[#faf5ff]/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.05),transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200/50 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              How{" "}
              <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                It Works
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Simple setup, powerful results—start improving care in minutes
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group bg-white/90 backdrop-blur-sm border border-sky-100/50 rounded-2xl p-6 hover:border-sky-300/60 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)] transition-all duration-300"
              >
                <div className="text-5xl font-heading font-extrabold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-4 opacity-50">
                  {step.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#eff6ff]/40 to-[#faf5ff]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Key Features & Use Cases
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              CareCob solves real problems for care and wellbeing with
              AI-powered companionship and monitoring
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {carecopFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group bg-white/90 backdrop-blur-sm border border-purple-100/50 rounded-2xl p-6 lg:p-8 hover:border-sky-300/60 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)] transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="inline-flex w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 items-center justify-center text-sky-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose CareCob */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#eff6ff]/60 via-[#f0f9ff] to-[#faf5ff]/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.04),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200/40 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                CareCob
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 items-center justify-center text-sky-600 mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-purple-500"></div>

            <div className="text-center">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6"
              >
                Experience{" "}
                <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                  CareCob Today
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Transform care delivery with AI-powered companionship. From
                daily wellness checks to emergency detection, see how CareCob
                helps families and care facilities provide better, more
                efficient care for people of all ages.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  href="https://www.carecob.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-purple-500 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-[0_12px_35px_rgba(14,165,233,0.5)] shadow-lg w-full sm:w-auto min-h-[44px]"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>Visit CareCob Website</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50 mt-8"
              >
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <svg
                    className="w-5 h-5 text-sky-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Free Trial Available</span>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <svg
                    className="w-5 h-5 text-sky-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">
                    100% Secure Payment Processing
                  </span>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-purple-500/5 -z-10"></div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solutions;

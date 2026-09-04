'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const bg3 = "/computer.png";
import ContactModal from "../../components/ContactModal";
import SampleReportModal from "../../components/SampleReportModal";
import RequestReportModal from "../../components/RequestReportModal";
import Footer from "../../components/Footer";

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

const StrategyReport = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSampleReportOpen, setIsSampleReportOpen] = useState(false);
  const [isRequestReportOpen, setIsRequestReportOpen] = useState(false);

  const benefits = [
    {
      metric: "50+",
      label: "Industries Analyzed",
    },
    {
      metric: "2-3 business days",
      label: "Report Delivery Time",
    },
    {
      metric: "100+",
      label: "Competitors Assessed",
    },
    {
      metric: "Quarterly",
      label: "Strategy Updates Available",
    },
  ];

  const reportSections = [
    {
      title: "Executive Summary",
      description:
        "High-level insights and recommendations for leadership decision-making",
    },
    {
      title: "Competitive Landscape",
      description:
        "Detailed analysis of competitor capabilities and strategies",
    },
    {
      title: "Market Trends & Insights",
      description: "Industry-wide adoption patterns and emerging technologies",
    },
    {
      title: "Opportunity Analysis",
      description: "Prioritized list of opportunities with impact assessments",
    },
    {
      title: "Implementation Roadmap",
      description: "Phased plan with timelines, resources, and success metrics",
    },
    {
      title: "Risk & Mitigation",
      description: "Potential challenges and strategies to address them",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Proven Track Record",
      description:
        "50+ strategy reports delivered across healthcare, finance, retail, and manufacturing sectors",
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
      title: "Actionable Insights",
      description:
        "No fluff—every recommendation is backed by data and designed for immediate implementation",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Fast Turnaround",
      description: "Comprehensive analysis delivered in 2-3 business days, not months",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Hero Section with Image */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#fefdfb] to-[#ecfeff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/8 rounded-full blur-3xl animate-float hidden sm:block"></div>
        <div
          className="absolute bottom-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400/8 rounded-full blur-3xl animate-float hidden sm:block"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Back Button */}
          <div className="mb-8 sm:mb-12">
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors duration-300 font-medium text-sm sm:text-base group"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 text-sm font-medium mb-6"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Strategic Intelligence
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight"
              >
                AI driven Competitive Business{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Strategy Report
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed max-w-2xl"
              >
                We deliver a director-level Digital Health & Competitor Report
                that shows how your business stacks up online against two key
                competitors—across SEO, ads, messaging/creatives, and
                reputation. Instead of long, technical audits, you get a clear,
                owner-friendly summary of where you’re strong, where you’re
                falling behind, and the top actions to outperform, outgrow, and
                outshine competitors—ready to forward to your team or agency as
                a working brief.{" "}
              </motion.p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInRight}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <img
                src={bg3}
                alt="AI Strategy Report"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm border border-blue-100/60 rounded-xl p-5 text-center hover:border-blue-300/70 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl font-heading font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
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

      {/* What's Included Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#eff6ff]/50 via-[#dbeafe] to-[#cffafe]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              What's{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Included
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analysis delivered in a clear, actionable format
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {reportSections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 hover:border-blue-300/60 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Digital Health Check Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#ecfeff] to-[#cffafe]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Headline & Sub-headline */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-4 sm:mb-6">
              <span className="text-foreground">
                Your digital health check vs competitors
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                —made for business directors.
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A clear, plain-English report that shows where you stand across
              SEO, ads, and reputation—and what to fix first to win market
              share.
            </p>
          </motion.div>

          {/* Key Value Blocks - 3 Tiles */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20"
          >
            {[
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
                title: "See your true position",
                description: "Where you're ahead/behind vs two competitors",
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
                title: "Spot competitor weaknesses",
                description: "Turn gaps into opportunities",
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
                title: "Get a prioritised action plan",
                description: "30/60/90-day steps your team can execute",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/90 backdrop-blur-sm border border-cyan-100/50 rounded-2xl p-6 lg:p-8 hover:border-blue-300/60 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="mb-4">
                  <div className="inline-flex w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* What You Get & Why Different - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* What You Get */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
              className="bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                What you get
              </h3>
              <ul className="space-y-4">
                {[
                  "Side-by-side benchmarking (SEO + ads + reputation signals)",
                  "Competitor battlecard (how to attack & outperform)",
                  "2-page director brief (fast, clear, actionable)",
                  "5 strengths / 5 weaknesses / 5 actions (no jargon)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base text-muted-foreground leading-relaxed font-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why This is Different */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="bg-white/90 backdrop-blur-sm border border-cyan-200/50 rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                Why this is different
              </h3>
              <ul className="space-y-4">
                {[
                  "Not a 40-page technical audit",
                  'Not just "data dumps" or dashboards',
                  "Built to be read in minutes and delegated immediately",
                  "Transparent: we don't pretend estimates are facts",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base text-muted-foreground leading-relaxed font-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works & CTA Section - Premium Light Purple/Lavender Background */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* How It Works */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground text-center mb-12">
              How it{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                works
              </span>
            </h3>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  number: "01",
                  title: "You submit your website + 2 competitors",
                  description:
                    "Simple form with your website URL and two competitor URLs",
                },
                {
                  number: "02",
                  title:
                    "We analyse across search, ads, messaging and reputation",
                  description:
                    "Comprehensive analysis of your digital presence vs competitors",
                },
                {
                  number: "03",
                  title: "You receive the director-ready report + action plan",
                  description: "Clear, actionable insights delivered in 2-3 business days",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative bg-white/80 backdrop-blur-md border border-purple-200/60 rounded-2xl p-6 lg:p-8 text-center shadow-xl"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-3 mt-4">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-md border border-purple-200/60 rounded-2xl p-6 lg:p-8 shadow-xl max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Ready to see where you stand?
              </h3>
              <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get your digital health check report and discover how to
                outperform your competitors.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsRequestReportOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2.5 sm:px-8 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(59,130,246,0.5)] shadow-lg w-full sm:w-auto min-h-[44px]"
                >
                  <span>Request a Report</span>
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
                </button>
                <button
                  onClick={() => setIsSampleReportOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-2.5 sm:px-8 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(59,130,246,0.2)] w-full sm:w-auto min-h-[44px]"
                >
                  <span>View Report</span>
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
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#dbeafe]/60 via-[#eff6ff] to-[#ecfeff]/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Our Reports
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 items-center justify-center text-blue-600 mb-4">
                  {item.icon}
                </div>
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
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative bg-white/90 backdrop-blur-xl border border-border/30 rounded-3xl overflow-hidden shadow-lg p-8 lg:p-12"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Get Your{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Strategy Report
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Gain competitive intelligence and uncover AI opportunities
                before your competitors do. Request your custom strategy report
                and receive it in 2-3 business days.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsRequestReportOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(59,130,246,0.5)] shadow-lg w-full sm:w-auto min-h-[44px]"
                >
                  <span>Request Strategy Report</span>
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
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">2-3 business days delivery</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
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
                    Quarterly Updates Available
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      {/* Sample Report Modal */}
      <SampleReportModal
        isOpen={isSampleReportOpen}
        onClose={() => setIsSampleReportOpen(false)}
        onRequestReport={() => setIsRequestReportOpen(true)}
      />
      
      {/* Request Report Modal */}
      <RequestReportModal
        isOpen={isRequestReportOpen}
        onClose={() => setIsRequestReportOpen(false)}
      />
      
      <Footer />
    </div>
  );
};

export default StrategyReport;

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Lightbulb } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordStagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordAnimation = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    }
  },
};

const WhatIsZynex = () => {
  const valueCards = [
    {
      icon: Target,
      title: "Outcome-Driven AI & ERP",
      description: "Focused on real KPIs including efficiency, growth, customer experience, and risk reduction. Whether it is an AI deployment or an ERP rollout, we measure success by the impact on your business, not just technical capability.",
      gradient: "from-[#719334] to-[#719334]",
      shadow: "shadow-[0_8px_30px_rgba(59,130,246,0.2)]"
    },
    {
      icon: Zap,
      title: "Feasibility-First Execution",
      description: "Validate early, de-risk intelligently, and build what matters. We ensure ROI before a single line of code—reducing waste and focusing on solutions that deliver.",
      gradient: "from-[#719334] to-[#719334]",
      shadow: "shadow-[0_8px_30px_rgba(139,92,246,0.2)]"
    },
    {
      icon: Shield,
      title: "Enterprise Readiness",
      description: "Security-aware thinking, structured delivery, and long-term scalability. Every solution is built with governance, compliance, and operational excellence in mind.",
      gradient: "from-[#719334] to-[#719334]",
      shadow: "shadow-[0_8px_30px_rgba(122,130,80,0.2)]"
    },
    {
      icon: Lightbulb,
      title: "Innovation Portfolio",
      description: "We don't just advise—we build and operate products, which strengthens delivery discipline. Our own product portfolio keeps us grounded in real-world execution.",
      gradient: "from-[#719334] to-[#719334]",
      shadow: "shadow-[0_8px_30px_rgba(245,158,11,0.2)]"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#fafaf8] to-[#f5f5f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/60 text-xs sm:text-sm font-semibold mb-4 sm:mb-5 shadow-sm text-brand-green"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
            Who We Are
          </motion.div>
          
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={wordStagger}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-3 sm:mb-4 leading-tight"
          >
            <motion.span
              variants={wordAnimation}
              className="text-gray-900"
            >
              Zynex{' '}
            </motion.span>
            <motion.span
              variants={wordAnimation}
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Technologies
            </motion.span>
          </motion.h2>
          
          <motion.h3
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-700 mb-4 sm:mb-5 leading-tight"
          >
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              An AI and ERP innovation partner built for delivery
            </span>
          </motion.h3>
          
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-body max-w-3xl mx-auto"
          >
            We partner with businesses to design, validate, and deploy intelligent solutions across AI and ERP, operating at the intersection of strategy and engineering. We help organisations move from "AI curiosity" and siloed legacy systems to measurable outcomes with clarity, governance, and speed.
          </motion.p>
        </motion.div>

        {/* Value Cards Grid - 4 in a row */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto"
        >
          {valueCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-green-500/50 hover:shadow-[0_12px_40px_rgba(122,130,80,0.15)] overflow-hidden"
              >
                {/* Premium gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${card.gradient} shadow-[0_8px_25px_rgba(0,0,0,0.15)] group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition-all duration-300`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3 relative z-10">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body relative z-10">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement - Premium Subtle Card */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-10 sm:mt-12 lg:mt-14 flex justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative max-w-5xl w-full mx-auto text-center"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 rounded-2xl blur-xl -z-10" style={{ background: 'linear-gradient(to right, rgba(113, 147, 52, 0.05), rgba(113, 147, 52, 0.1), rgba(113, 147, 52, 0.05))' }}></div>
            
            {/* Main content with subtle border */}
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl px-6 sm:px-10 lg:px-14 py-6 sm:py-8 border border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 rounded-full" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></div>
              
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl font-body text-gray-700 leading-relaxed"
              >
                Unlike traditional consultants who deliver slides, or agencies that offer templated products, 
                we deliver <span className="bg-clip-text text-transparent font-semibold" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>production-ready custom AI solutions</span> with 
                measurable business impact from day one.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsZynex;

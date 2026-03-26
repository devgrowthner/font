'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Brain, Plug, TrendingUp, Shield, Zap, Globe, Search, ClipboardList, Code, Rocket, Clock, ArrowLeft } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const LearnMore = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const outcomes = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '40% Faster Time-to-Market',
      description: 'Our rapid deployment methodology gets AI solutions into production weeks ahead of industry standards.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: '3x Average ROI',
      description: 'Clients consistently achieve triple their investment through efficiency gains and revenue growth.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '95% Client Satisfaction',
      description: 'Exceptional quality and support result in long-term partnerships and repeat engagements.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Production Support',
      description: 'Round-the-clock monitoring and support ensures your AI systems run flawlessly.'
    }
  ];

  const values = [
    {
      title: 'Measurable Impact',
      description: 'No vanity metrics. Every project delivers quantifiable business value.'
    },
    {
      title: 'Radical Transparency',
      description: 'Honest feasibility assessments, clear roadmaps, and real-time progress visibility.'
    },
    {
      title: 'Speed & Quality',
      description: 'We refuse to choose—rapid deployment without compromising engineering excellence.'
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models trained on your data to automate complex decisions and uncover hidden patterns.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Plug,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      gradient: 'from-[#719334] to-[#719334]',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends, demand, and outcomes with advanced predictive modeling.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Protect your AI systems with robust security frameworks and threat detection.',
      gradient: 'from-gray-500 to-slate-600',
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent automation solutions.',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Globe,
      title: 'NLP Solutions',
      description: 'Natural language processing for chatbots, sentiment analysis, and document understanding.',
      gradient: 'from-cyan-500 to-blue-500',
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We dive deep into your business challenge, assess technical feasibility, evaluate data readiness, and quantify potential ROI.",
      duration: "1-2 weeks",
      icon: Search,
      gradient: "from-[#719334] to-[#719334]",
    },
    {
      number: "02",
      title: "Strategy & Design",
      description: "We develop a comprehensive AI strategy, design custom architecture, and create a detailed implementation roadmap with clear milestones.",
      duration: "1-2 weeks",
      icon: ClipboardList,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      number: "03",
      title: "Build & Iterate",
      description: "Our engineering team builds your custom AI solution using agile sprints, with continuous testing, validation, and refinement.",
      duration: "4-12 weeks",
      icon: Code,
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      title: "Deploy & Optimize",
      description: "We deploy to production, integrate with your systems, train your team, and continuously optimize based on real-world performance data.",
      duration: "Ongoing",
      icon: Rocket,
      gradient: "from-yellow-500 to-amber-500",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image - Clear White Premium */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(243,244,246,0.9),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,250,251,0.9),transparent_60%)]"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gray-100/40 rounded-full blur-3xl animate-float hidden sm:block"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gray-50/40 rounded-full blur-3xl animate-float hidden sm:block" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Back Button */}
          <div className="mb-8 sm:mb-12">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 font-medium text-sm sm:text-base group hover:text-brand-green"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
          </div>

          {/* Hero Content with Image */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInLeft}
            >
              <motion.div
                variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)', borderColor: 'rgba(113, 147, 52, 0.3)', borderWidth: '1px', color: '#719334' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                About Zynex Technologies
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight"
              >
                Learn More About{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Zynex Technologies
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                We partner with businesses to design, validate, and deploy intelligent solutions—operating at the intersection of strategy and engineering. We help organisations move from "AI curiosity" to measurable outcomes with clarity, governance, and speed.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto min-h-[44px]"
                  style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
                >
                  <span>Connect with us</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInRight}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] order-first lg:order-last"
            >
              <motion.img
                src="/zynex1.webp"
                alt="About Zynex Technologies"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/30"></div> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Outcomes - Light Green */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-emerald-50/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm"
              style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)', borderColor: 'rgba(113, 147, 52, 0.3)', borderWidth: '1px', color: '#719334' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              About Zynex
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-4 sm:mb-6 leading-tight"
            >
              Insights &{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Outcomes
              </span>
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-body"
            >
              Real results from real AI implementations
            </motion.p>
          </motion.div>

          {/* Outcomes Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20 lg:mb-24"
          >
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-green-500/50 hover:shadow-[0_12px_40px_rgba(122,130,80,0.15)] overflow-hidden"
              >
                {/* Icon */}
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-xl items-center justify-center transition-all duration-300"
                    style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.2))', color: '#719334' }}
                  >
                    {outcome.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                  {outcome.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                  {outcome.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), rgba(113, 147, 52, 0.05))' }}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values & Motto Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -5 }}
              className="relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #719334, #719334, #719334)' }}></div>

              {/* Motto */}
              <motion.div
                variants={fadeInUp}
                className="text-center mb-10 sm:mb-12"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                  Our Motto
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold bg-clip-text text-transparent leading-relaxed" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  "Move fast. Build right. Deliver value."
                </p>
              </motion.div>

              {/* Values */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid sm:grid-cols-3 gap-6 lg:gap-8"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                  >
                    <div className="mb-3">
                      <motion.div
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        transition={{ duration: 0.4 }}
                        className="w-2 h-2 rounded-full mx-auto"
                        style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
                      ></motion.div>
                    </div>
                    <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Light Purple */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-violet-50/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4 text-brand-green"
            >
              OUR SERVICES
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight px-2"
            >
              AI Tech Services That{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Drive Results
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body mt-4 sm:mt-6 px-2"
            >
              From concept to deployment, we provide end-to-end AI solutions tailored to your unique business challenges.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_12px_40px_rgba(122,130,80,0.25)] overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                  
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                  >
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                    {service.description}
                  </p>
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How We Work Section - Light Amber */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-orange-50/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)', borderColor: 'rgba(113, 147, 52, 0.3)', borderWidth: '1px', color: '#719334' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Our Process
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-4 sm:mb-6 leading-tight"
            >
              How We{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Work
              </span>
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-body"
            >
              A proven methodology that delivers results, fast
            </motion.p>
          </motion.div>

          {/* Process Timeline */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop View - Horizontal */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="hidden lg:grid grid-cols-4 gap-6"
            >
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -12 }}
                    className="relative h-full flex"
                  >
                    {/* Step Card - Equal Height */}
                    <div className={`relative bg-white rounded-2xl p-8 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-green-500/50 hover:shadow-[0_16px_50px_rgba(122,130,80,0.25)] group flex flex-col w-full`}>
                      {/* Background Gradient on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl -z-10`}></div>
                      
                      {/* Number Badge */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        className={`absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-xl transition-transform duration-300 z-10`}
                      >
                        {step.number}
                      </motion.div>

                      {/* Icon */}
                      <div className="mt-8 mb-6 flex justify-center">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                        >
                          <IconComponent className="w-8 h-8" strokeWidth={2.5} />
                        </motion.div>
                      </div>

                      {/* Content - Flex grow to push duration to bottom */}
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-4 text-center transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-center font-body flex-grow">
                          {step.description}
                        </p>

                        {/* Duration - Pushed to bottom */}
                        <div className="flex items-center justify-center gap-2 text-xs font-semibold mt-auto">
                          <div className={`bg-gradient-to-br ${step.gradient} p-1 rounded-lg`}>
                            <Clock className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                          </div>
                          <span className={`bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent font-bold`}>
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile/Tablet View - Vertical */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:hidden space-y-6"
            >
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative"
                  >
                    {/* Connection Line (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className={`absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b ${step.gradient} opacity-30 -z-10`}></div>
                    )}

                    {/* Step Card */}
                    <div className={`relative bg-white rounded-2xl p-6 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-green-500/50 hover:shadow-[0_12px_40px_rgba(122,130,80,0.25)] group overflow-hidden`}>
                      {/* Background Gradient on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl -z-10`}></div>
                      
                      <div className="flex gap-4">
                        {/* Number Badge */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6 }}
                          className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-xl transition-transform duration-300`}
                        >
                          {step.number}
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-heading font-bold text-foreground transition-colors duration-300">
                              {step.title}
                            </h3>
                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white ml-2 shadow-lg`}>
                              <IconComponent className="w-6 h-6" strokeWidth={2.5} />
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">
                            {step.description}
                          </p>

                          {/* Duration */}
                          <div className="flex items-center gap-2 text-xs font-semibold">
                            <div className={`bg-gradient-to-br ${step.gradient} p-1 rounded-lg`}>
                              <Clock className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className={`bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent font-bold`}>
                              {step.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-base sm:text-lg text-muted-foreground mb-6 font-body">
              Ready to start your AI transformation journey?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg w-full sm:w-auto min-h-[44px]"
                style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
              >
                <span>Connect with us</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA Section - Light Rose */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-pink-50/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -5 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80"
            >
              {/* Top Border Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #719334, #719334, #719334)' }}></div>

              <div className="p-8 sm:p-12 lg:p-16">
                {/* Headline */}
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground text-center mb-4 sm:mb-6 leading-tight"
                >
                  Ready to Build Your{' '}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    AI Advantage?
                  </span>
                </motion.h2>

                {/* Supporting Text */}
                <motion.p
                  variants={fadeInUp}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-body"
                >
                  Whether you need a feasibility analysis, competitive strategy, or full custom AI development, 
                  we're ready to help you achieve measurable results. Let's start the conversation.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center mb-8 sm:mb-10"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto min-h-[44px]"
                    style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 35px rgba(113, 147, 52, 0.5)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Connect with us</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-gray-200/50"
                >
                  <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">No Commitment Required</span>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Free Consultation</span>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Rapid Response</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), transparent, rgba(113, 147, 52, 0.05))' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <Footer />
    </div>
  );
};

export default LearnMore;


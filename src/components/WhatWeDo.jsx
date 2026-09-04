'use client';

import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    y: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    y: 0
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    y: 0
  })
};

const WhatWeDo = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const services = [
    {
      tag: "Custom AI Development",
      title: "AI Feasibility Analysis + Custom Delivery",
      description: "We start by rigorously assessing whether AI can solve your specific challenge—no hand-waving, just data-driven feasibility. Then we build custom solutions tailored to your exact requirements.",
      link: "/custom-ai",
      features: [
        "Technical feasibility assessment with quantified success probability",
        "Data readiness evaluation and gap analysis",
        "ROI modeling and implementation roadmap",
        "Custom AI system design and architecture",
        "Full-stack development and deployment",
        "Post-launch optimization and monitoring"
      ],
      cta: {
        primary: "Book a Discovery Call",
        website: "https://www.carecob.com.au/"
      },
      gradient: "from-[#719334] to-[#719334]",
      borderGradient: "from-[#719334] to-[#719334]",
      image: "/bg2.webp",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      tag: "Strategic Intelligence",
      title: "Advanced Analytics: AI driven Competitive Business Strategy Report",
      description: "Discover untapped opportunities your competitors haven't found. We analyze your overall online landscape, reveal where you’re strong, where you’re falling behind and Most Important “top actions to outperform, outgrow, and outshine competitors.",
      link: "/strategy-report",
      features: [
        "Know where you stand. Know what to fix first",
        "A director-ready competitor report—without the jargon",
        "Your digital health check vs competitors, in plain English",
        "Turn competitor gaps into your next growth moves",
        "Clarity, not dashboards: your online position in one brief",
        // "Quarterly strategy refresh options"
      ],
      cta: {
        primary: "Request Strategy Report",
        website: "https://www.carecob.com.au/"
      },
      gradient: "from-blue-500 to-cyan-500",
      borderGradient: "from-blue-500 to-cyan-500",
      image: "/computer.png",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      tag: "Healthcare AI",
      title: "CareCob: AI Companion for Everyone",
      description: "AI-powered companion system that makes phone calls to care receivers, checks on their wellbeing, and keeps caregivers informed. Reduce loneliness, improve medicine adherence, and ensure safety with natural, human-like conversations for people of all ages.",
      link: "/solutions",
      features: [
        "Daily companion calls with natural, human-like conversations",
        "Medicine reminders and adherence tracking",
        "Remote family monitoring with daily insights",
        "Emergency detection and immediate alerts",
        "Health decline detection and early intervention",
        "Care facility management for efficient delivery"
      ],
      cta: {
        primary: "Schedule CareCob Demo",
        website: "https://www.carecob.com.au/"
      },
      gradient: "from-sky-500 to-purple-500",
      borderGradient: "from-sky-500 to-purple-500",
      image: "/ai3.webp",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    
  ];

  useEffect(() => {
    if (isHovered) {
      return; 
    }
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [services.length, isHovered]);

  const slideTo = (newIndex) => {
    const newDirection = newIndex > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    slideTo((currentIndex + 1) % services.length);
  };

  const prevSlide = () => {
    slideTo((currentIndex - 1 + services.length) % services.length);
  };

  const handleServiceClick = (service) => {
    if (service.tag === "Strategic Intelligence") {
      window.open('https://competitorinsights.com.au/', '_blank', 'noopener,noreferrer');
    } else {
      router.push(service.link);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#fefdfb] to-[#faf9f6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm text-brand-green"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            Our Services
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Our Flagship{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334, #719334)' }}>
            Products
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-body"
          >
            Three proven pathways to AI-powered business transformation
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 transition-colors hover:text-brand-green" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 transition-colors hover:text-brand-green" />
          </button>

          {/* Carousel - Fixed Height Container */}
          <div className="relative overflow-hidden rounded-3xl min-h-[500px] sm:min-h-[600px] lg:min-h-[650px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                {(() => {
                  const service = services[currentIndex];
                  return (
                    <div className={`bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/80 h-full`}>
                      <div className="grid lg:grid-cols-[2fr,3fr] gap-0 h-full">
                        {/* Left Side - Image (40%) */}
                        <div className="relative h-[250px] sm:h-[350px] lg:h-full lg:min-h-[650px] overflow-hidden order-1 lg:order-1">
                          <motion.img
                            key={`image-${currentIndex}`}
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                          />
                          {/* <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30`}></div> */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                          <div className="absolute bottom-6 left-0 right-0 px-6 text-center z-10">
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                            >
                              <span className="inline-block px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-gray-900 uppercase tracking-wider shadow-lg">
                                {service.tag}
                              </span>
                            </motion.div>
                          </div>
                        </div>

                        {/* Right Side - Content (60%) */}
                        <div className="p-4 sm:p-6 lg:p-10 xl:p-12 flex flex-col justify-start pt-6 pb-8 sm:justify-center sm:pt-8 lg:pt-10 h-auto sm:min-h-[500px] lg:min-h-[650px] order-2 lg:order-2 overflow-y-auto hide-scrollbar">
                          <motion.h3
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight"
                          >
                            {service.title}
                          </motion.h3>
                          
                          <motion.p
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 font-body"
                          >
                            {service.description}
                          </motion.p>

                          {/* Features */}
                          <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid sm:grid-cols-2 gap-2.5 sm:gap-3 lg:gap-4 mb-6 sm:mb-8"
                          >
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                                <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-0.5 sm:mt-1 rounded-full bg-gradient-to-br ${service.gradient} p-0.5 sm:p-1`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-body leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </motion.div>

                          {/* CTA Button */}
                          <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex justify-start mt-2 sm:mt-0"
                          >
                            <button 
                              onClick={() => handleServiceClick(service)}
                              className={`group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r ${service.borderGradient} text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto`}
                            >
                              <span>View Details</span>
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => slideTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${services[currentIndex].gradient} w-8`
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

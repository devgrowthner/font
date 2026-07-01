'use client';

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Image Background - Full height including behind header */}
      <div className="absolute inset-0 top-0 left-0 right-0 w-full h-screen">
        <img
          src="/ai1.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pt-8">
        <div className="max-w-2xl">
          {/* Micro Trust Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            {/* <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs sm:text-sm font-medium backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Trusted by Fortune 500 Companies
            </span> */}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white leading-tight mb-4"
          >
            AI & ERP Solutions That Drive{" "}
            <span className="text-brand-green">
              Real Business Value
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl mb-4 sm:mb-6"
          >
            From Strategy to Deployment in{" "}
            <span className="text-brand-green font-medium">Weeks, Not Years</span>
          </motion.p>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-6 sm:mb-8"
          >
            Zynex Technologies delivers custom AI and ERP solutions with measurable ROI. We assess feasibility, develop competitive strategies, and deploy production-ready systems that transform your operations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row gap-3 items-center flex-wrap"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
              style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
            >
              <span>Connect with us</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a
              href="https://calendly.com/zynex-technologies/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 shadow-lg inline-flex items-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900"
            >
              <span>Book on Call</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="none">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>


      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;

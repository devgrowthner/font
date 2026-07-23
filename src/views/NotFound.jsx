'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../components/Footer';

const NotFound = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const quickLinks = [
    { name: 'Home', path: 'https://zynextechnologies.com.au/' },
    { name: 'Solutions', path: 'https://zynextechnologies.com.au/solutions' },
    { name: 'Custom AI', path: 'https://zynextechnologies.com.au/custom-ai' },
    { name: 'Strategy Report', path: 'https://zynextechnologies.com.au/strategy-report' },
    { name: 'Learn More', path: 'https://zynextechnologies.com.au/what-is-zynex' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefdfb] to-[#faf9f6] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="container mx-auto max-w-4xl text-center relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(122,130,80,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-float hidden sm:block" style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)' }}></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float hidden sm:block" style={{ animationDelay: '2s' }}></div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="relative z-10"
          >
            {/* 404 Number */}
            <motion.div
              variants={scaleIn}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-extrabold bg-clip-text text-transparent leading-none" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                404
              </h1>
            </motion.div>

            {/* Error Message */}
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                Page Not Found
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
                Don&apos;t worry, let&apos;s get you back on track.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12"
            >
              <Link
                href="https://zynextechnologies.com.au/"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 group"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
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
                Go Back
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp} className="mt-8 sm:mt-12">
              <p className="text-sm sm:text-base text-gray-500 mb-4 font-medium">
                Or explore our popular pages:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-gray-700 bg-white border border-gray-200 transition-all duration-200"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#719334';
                      e.currentTarget.style.color = '#719334';
                      e.currentTarget.style.backgroundColor = 'rgba(113, 147, 52, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.color = '#374151';
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;


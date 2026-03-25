import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ThumbsUp, Zap, BarChart3, Target } from 'lucide-react';

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

const Stats = () => {
  const stats = [
    {
      value: '95%',
      label: 'Client Satisfaction Rate',
      icon: ThumbsUp,
    },
    {
      value: '6-12wks',
      label: 'Average Deployment Time',
      icon: Zap,
    },
    {
      value: '3x ROI',
      label: 'Average Return on Investment',
      icon: BarChart3,
    },
    {
      value: '24/7',
      label: 'Production Support',
      icon: Target,
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#fefdfb] to-[#faf9f6]">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm text-brand-green"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            Performance Metrics
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-gray-900">Proven </span>
            <span className="text-brand-green">Results</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-body max-w-2xl mx-auto"
          >
            Our track record speaks for itself. We deliver measurable outcomes that drive business growth and operational excellence.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(122,130,80,0.15)] transition-all duration-300 text-center flex flex-col items-center overflow-hidden"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), transparent, rgba(113, 147, 52, 0.05))' }}></div>
                
                {/* Icon */}
                <div className="mb-4 sm:mb-6 relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(113,147,52,0.3)] group-hover:shadow-[0_6px_20px_rgba(113,147,52,0.4)] group-hover:scale-110 transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, #719334, #719334)' }}>
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Value */}
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight relative z-10 text-brand-green">
                  {stat.value}
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

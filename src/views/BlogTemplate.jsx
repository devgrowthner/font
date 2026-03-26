'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import Schema from '../components/Schema';
import { useSeo } from '../hooks/useSeo';
import { blogContents } from '../constants/blogData';
import { getIconComponent } from '../utils/iconRenderer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ─── Reusable Section Components ────────────────────────────────────────────

const NarrativeSection = ({ title, highlight, description, bullets = [], bgClass }) => (
  <section className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${bgClass || 'bg-gradient-to-br from-[#fefdfb] via-[#fff7ed] to-[#fef3c7]/30'} relative overflow-hidden`}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(122,130,80,0.06),transparent_60%)]"></div>
    <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6 text-center">
          {title}{' '}
          {highlight ? (
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {highlight}
            </span>
          ) : null}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{description}</p>
      </motion.div>

      {bullets.length > 0 && (
        <motion.ul
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mt-8 space-y-3"
        >
          {bullets.map((item, index) => (
            <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
              <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#719334' }}></span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  </section>
);

const ServicesSection = ({ blogData }) => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fff7ed] to-[#fef3c7]/30 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(122,130,80,0.06),transparent_60%)]"></div>
    <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
    <div className="container mx-auto max-w-7xl relative z-10">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
          {(blogData.servicesTitle || blogData.title || 'Services')}{' '}
          {blogData.servicesTitleHighlight ? (
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {blogData.servicesTitleHighlight}
            </span>
          ) : null}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
          {blogData.servicesDescription}
        </p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {blogData.services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group bg-white/90 backdrop-blur-sm border border-amber-100/50 rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 h-full flex flex-col"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.6)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(113, 147, 52, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.5)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div className="mb-4">
              <div
                className="inline-flex w-14 h-14 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.2))', color: '#719334' }}
              >
                <div className="w-6 h-6">
                  {typeof service.icon === 'string' ? getIconComponent(service.icon) : service.icon}
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body flex-grow">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const ProcessSection = ({ blogData }) => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f0fdf4] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(122,130,80,0.05),transparent_60%)]"></div>
    <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
    <div className="container mx-auto max-w-7xl relative z-10">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
          {blogData.processTitle}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Process
          </span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">{blogData.processDescription}</p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogData.processSteps.map((step, index) => (
          <motion.div key={index} variants={fadeInUp} className="relative h-full">
            <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
              <div
                className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-heading font-extrabold shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #719334, #5a7529)' }}
              >
                {step.number}
              </div>
              <div
                className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] opacity-20 transition-all duration-300 group-hover:border-l-[50px] group-hover:border-t-[50px]"
                style={{ borderTopColor: '#719334' }}
              ></div>
              <div className="relative z-10 pt-6 flex-grow">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">{step.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const IndustriesSection = ({ blogData }) => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f5f5f5] via-[#f0f0f0] to-[#ebebeb] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,147,52,0.02),transparent_70%)]"></div>
    <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
    <div className="container mx-auto max-w-7xl relative z-10">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
          {blogData.industriesTitle}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {blogData.industriesTitleHighlight || 'Different Industries'}
          </span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">{blogData.industriesDescription}</p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {blogData.industries.map((industry, index) => (
          <motion.div key={index} variants={fadeInUp} className="group relative h-full">
            <div className="absolute -top-6 left-6 z-20">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #719334, #5a7529)', color: 'white' }}
              >
                <div className="w-6 h-6">
                  {typeof industry.icon === 'string' ? getIconComponent(industry.icon) : industry.icon}
                </div>
              </div>
            </div>
            <div className="relative pt-8 pb-6 px-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-green-200 h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 mt-2">{industry.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body flex-grow">{industry.description}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/0 group-hover:from-green-50/50 group-hover:to-transparent rounded-2xl transition-all duration-500 -z-10"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer note — present in Feasibility page only */}
      {blogData.industriesFooterNote && (
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            {blogData.industriesFooterNote}
          </p>
        </motion.div>
      )}
    </div>
  </section>
);

const BenefitsSection = ({ blogData }) => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fef3c7]/20 to-[#fff7ed] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(122,130,80,0.06),transparent_60%)]"></div>
    <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
    <div className="container mx-auto max-w-7xl relative z-10">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
          {blogData.benefitsTitle}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {blogData.benefitsTitleHighlight || 'for Your Business'}
          </span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">{blogData.benefitsDescription}</p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {blogData.benefits.map((benefit, index) => (
          <motion.div key={index} variants={fadeInUp} className="group">
            <div className="relative h-full bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 hover:border-l-8 border-green-400">
              <div className="mb-5 flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(113, 147, 52, 0.1), rgba(113, 147, 52, 0.2))', color: '#719334' }}
                >
                  <div className="w-6 h-6">
                    {typeof benefit.icon === 'string' ? getIconComponent(benefit.icon) : benefit.icon}
                  </div>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-green-200 to-transparent"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">{benefit.description}</p>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-green-100/30 to-green-200/30 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const WhyChooseUsSection = ({ blogData }) => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(122,130,80,0.05),transparent_60%)]"></div>
    <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
    <div className="container mx-auto max-w-7xl relative z-10">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
          {blogData.whyChooseUsTitle}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {blogData.whyChooseUsTitleHighlight || ''}
          </span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">{blogData.whyChooseUsDescription}</p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        {blogData.whyChooseUs.map((item, index) => (
          <motion.div key={index} variants={fadeInUp} className="group flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-green-200/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-green-300/30 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #719334, #5a7529)', color: 'white' }}
              >
                <div className="w-6 h-6">
                  {typeof item.icon === 'string' ? getIconComponent(item.icon) : item.icon}
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CtaSection = ({ blogData, onOpenModal }) => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="relative bg-white/90 backdrop-blur-xl border border-border/30 rounded-3xl overflow-hidden shadow-lg p-8 lg:p-12"
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></div>

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
            {blogData.ctaTitle}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {blogData.ctaHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {blogData.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg w-full sm:w-auto min-h-[44px]"
              style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #5a7529, #5a7529)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(113, 147, 52, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #719334, #719334)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
              }}
            >
              <span>{blogData.ctaButtonText || 'Get Started Today'}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50 mt-8">
            {blogData.ctaBadge1 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 flex-shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{blogData.ctaBadge1}</span>
              </div>
            )}
            {blogData.ctaBadge2 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 flex-shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{blogData.ctaBadge2}</span>
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), transparent, rgba(113, 147, 52, 0.05))' }}></div>
      </motion.div>
    </div>
  </section>
);

const FaqSection = ({ blogData, openFaqIndex, setOpenFaqIndex }) => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f0fdf4]">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
          Frequently Asked{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Questions
          </span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
          {blogData.faqDescription || 'Common questions about our services'}
        </p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-4"
      >
        {blogData.faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white/90 backdrop-blur-sm border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            style={{ borderColor: 'rgba(113, 147, 52, 0.4)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.6)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(113, 147, 52, 0.1), 0 10px 10px -5px rgba(113, 147, 52, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.4)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <button
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-green-50/30 transition-colors duration-200"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">{faq.question}</h3>
              <ChevronDown
                className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                style={{ color: '#719334' }}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openFaqIndex === index ? 'auto' : 0, opacity: openFaqIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="text-base text-gray-600 leading-relaxed px-6 pb-6 border-t border-green-100/30">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Main Template ───────────────────────────────────────────────────────────

const BlogTemplate = () => {
  const router = useRouter();
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const blogData = blogContents[slug];

  useSeo({
    title: blogData?.metaTitle || 'Blog | Zynex Technologies',
    description: blogData?.metaDescription || 'Discover AI insights and solutions from Zynex Technologies.',
    canonical: `https://zynextechnologies.com.au/blogs/${slug}`,
  });

  if (!blogData) {
    return (
      <div className="min-h-screen bg-[#fefdfb] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <button onClick={() => router.push('/blogs')} className="text-brand-green hover:text-brand-green/80 font-semibold">
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // Map section keys to their rendered components
  const sectionMap = {
    summary: blogData.summaryDescription ? (
      <NarrativeSection
        title={blogData.summaryTitle || 'Summary'}
        highlight={blogData.summaryTitleHighlight}
        description={blogData.summaryDescription}
        bullets={blogData.summaryBullets}
      />
    ) : null,
    introduction: blogData.introductionDescription ? (
      <NarrativeSection
        title={blogData.introductionTitle || 'Introduction'}
        highlight={blogData.introductionTitleHighlight}
        description={blogData.introductionDescription}
        bullets={blogData.introductionBullets}
        bgClass="bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f0fdf4]"
      />
    ) : null,
    services: blogData.services ? <ServicesSection blogData={blogData} /> : null,
    process: blogData.processSteps ? <ProcessSection blogData={blogData} /> : null,
    industries: blogData.industries ? <IndustriesSection blogData={blogData} /> : null,
    benefits: blogData.benefits ? <BenefitsSection blogData={blogData} /> : null,
    whyChooseUs: blogData.whyChooseUs ? <WhyChooseUsSection blogData={blogData} /> : null,
    future: blogData.futureDescription ? (
      <NarrativeSection
        title={blogData.futureTitle || 'Future'}
        highlight={blogData.futureTitleHighlight}
        description={blogData.futureDescription}
        bullets={blogData.futureBullets}
        bgClass="bg-gradient-to-br from-[#f5f5f5] via-[#f0f0f0] to-[#ebebeb]"
      />
    ) : null,
    conclusion: blogData.conclusionDescription ? (
      <NarrativeSection
        title={blogData.conclusionTitle || 'Conclusion'}
        highlight={blogData.conclusionTitleHighlight}
        description={blogData.conclusionDescription}
        bullets={blogData.conclusionBullets}
        bgClass="bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5]"
      />
    ) : null,
    cta: <CtaSection blogData={blogData} onOpenModal={() => setIsModalOpen(true)} />,
    faq: blogData.faqs ? <FaqSection blogData={blogData} openFaqIndex={openFaqIndex} setOpenFaqIndex={setOpenFaqIndex} /> : null,
  };

  // Render sections in the order defined per blog in blogData.sectionOrder
  const sectionOrder = blogData.sectionOrder || ['services', 'process', 'industries', 'benefits', 'whyChooseUs', 'cta', 'faq'];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* FAQ Schema — injected only when defined in data (AI Automation page) */}
      {blogData.faqSchema && <Schema schema={blogData.faqSchema} />}

      {/* ── Hero Section ── */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,130,80,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,130,80,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-float hidden sm:block" style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-float hidden sm:block" style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)', animationDelay: '2s' }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Back button */}
          <div className="mb-8 sm:mb-12">
            <button
              onClick={() => router.push('/blogs')}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 font-medium text-sm sm:text-base group hover:text-brand-green"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInLeft}>
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(113, 147, 52, 0.1)', borderColor: 'rgba(113, 147, 52, 0.3)', borderWidth: '1px', color: '#719334' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                {blogData.badge || 'Featured Article'}
              </motion.div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
                {blogData.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">{blogData.description}</p>

              {/* Hero CTA button — label driven by ctaButtonText from data */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg min-h-[44px]"
                style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #5a7529, #5a7529)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(113, 147, 52, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #719334, #719334)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
                }}
              >
                <span>{blogData.ctaButtonText || 'Talk to our AI experts today'}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInRight}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <img src={blogData.image} alt={blogData.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.3), rgba(113, 147, 52, 0.3))' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Dynamic section rendering in per-blog order ── */}
      {sectionOrder.map((key) => (
        <React.Fragment key={key}>{sectionMap[key]}</React.Fragment>
      ))}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default BlogTemplate;
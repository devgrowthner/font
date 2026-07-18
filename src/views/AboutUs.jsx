'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Target, Zap, Shield, Wrench, TrendingUp, MapPin, Clock, Award, ChevronDown } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/useSeo';
import Schema from '../components/Schema';

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

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useSeo({
    title: 'About Zynex Technologies | AI & ERP Development Company Australia',
    description: 'Zynex Technologies is an AI and ERP innovation partner based in Melbourne, helping Australian businesses move from AI curiosity to measurable results.',
  });

  const approaches = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Outcome-driven',
      description: 'We focus on real KPIs: efficiency, growth, customer experience, and risk reduction.',
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Feasibility-first',
      description: 'We validate ROI before a single line of code is written.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise-ready',
      description: 'Security, governance, and scalability are built in from the start.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Builders, not just advisors',
      description: 'We build and operate our own products, which keeps us grounded in real execution.',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      duration: '1-2 weeks',
      description: 'Assess feasibility, data readiness, and ROI.',
    },
    {
      step: '02',
      title: 'Strategy & Design',
      duration: '1-2 weeks',
      description: 'Architecture and delivery roadmap.',
    },
    {
      step: '03',
      title: 'Build & Iterate',
      duration: '4-12 weeks',
      description: 'Agile development with continuous testing.',
    },
    {
      step: '04',
      title: 'Deploy & Optimize',
      duration: 'Ongoing',
      description: 'Production deployment, integration, and support.',
    },
  ];

  const differentiators = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Production-ready from day one',
      description: 'Every system is built to run in production, not stall as a proof of concept.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Honest feasibility assessments',
      description: 'If the ROI isn\'t there, we say so before you spend the budget.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Weeks, not years',
      description: 'Discovery-to-deployment typically runs 6 to 12 weeks.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#719334] to-[#5a7529] text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              An AI and ERP partner built for delivery, not decks
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-gray-100">
              We help Australian businesses move from AI curiosity to measurable outcomes
            </p>
            <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto">
              With the clarity, governance, and speed that production systems demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#719334] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book a Discovery Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: WHO WE ARE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">WHO WE ARE</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Built at the intersection of strategy and engineering
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Zynex Technologies is an AI and ERP development company based in Melbourne, serving businesses across Australia.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most businesses don't need another slide deck about what AI could do. They need a partner who assesses feasibility honestly, builds the system, and stands behind it in production. We design, validate, and deploy custom AI and ERP solutions, and we measure success by the impact on your business, not technical capability.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16"
          >
            {[
              { value: '95%', label: 'Client satisfaction' },
              { value: '6-12wks', label: 'Average deployment' },
              { value: '3x', label: 'Average ROI' },
              { value: '24/7', label: 'Production support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#719334] mb-2">
                  {stat.value}
                </div>
                <p className="text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHAT DRIVES US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">OUR APPROACH</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              What drives us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our approach to building AI and ERP solutions that deliver real business value.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-[#719334] mb-4">{approach.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="bg-[#719334] p-8 rounded-xl shadow-sm text-white max-w-4xl mx-auto">
              <p className="text-2xl font-bold">
                "Move fast. Build right. Deliver value."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: HOW WE WORK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">OUR METHODOLOGY</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              A proven methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From discovery to deployment in 6 to 12 weeks.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 relative"
              >
                <div className="absolute -top-3 -left-3 bg-[#719334] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">{step.title}</h3>
                <p className="text-sm text-[#719334] font-semibold mb-3">{step.duration}</p>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">WHY ZYNEX</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Not a consultancy. Not a templated agency
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're different because we build, not just advise.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-[#719334] mb-4">{diff.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{diff.title}</h3>
                <p className="text-gray-600">{diff.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: WHERE WE WORK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">OUR REACH</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Where we work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Headquartered in Melbourne, serving Sydney, Brisbane, Adelaide, Perth, Canberra, Gold Coast, Darwin, and Hobart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#719334] to-[#5a7529] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to work with a partner who builds?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Whether it's a feasibility analysis, ERP rollout, or full custom AI development, let's talk about what your business actually needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#719334] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book a Discovery Call
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'No commitment required',
                'Free consultation',
                'Rapid response',
              ].map((badge, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium"
                >
                  <Check className="w-4 h-4" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AboutUs;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import { useSeo } from '../../hooks/useSeo';

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

const AIFeasibilityAnalysis = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useSeo({
    title: "AI Feasibility Analysis Company in Australia | AI Consulting",
    description:
      "Assess whether AI is right for your business. Our AI feasibility analysis in Australia evaluates data readiness, technical setup, ROI potential, and project risks.",
    canonical: "https://zynextechnologies.com.au/ai-feasibility-analysis"
  });

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "AI Opportunity Assessment",
      description: "We analyze business processes and identify areas where artificial intelligence can create measurable improvements through automation, predictive analytics, or intelligent decision-making."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Data Readiness Evaluation",
      description: "Successful AI models require reliable and structured data. Our team evaluates the quality, availability, and usability of your existing datasets."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Technical Feasibility Assessment",
      description: "We review your existing infrastructure, software systems, and integration capabilities to determine whether your organization is technically prepared for AI implementation."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Financial Feasibility Analysis",
      description: "Our experts estimate development costs, infrastructure investment, and expected ROI to ensure that the project is financially viable."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Risk and Compliance Assessment",
      description: "We evaluate potential risks related to data privacy, regulatory compliance, and security to ensure responsible AI implementation."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "AI Implementation Strategy",
      description: "Based on the feasibility study, we develop a clear strategy and roadmap for implementing AI solutions effectively."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Requirement Analysis",
      description: "We begin by understanding your business goals, operational challenges, and expectations from AI."
    },
    {
      number: "02",
      title: "Data Assessment",
      description: "Our team reviews your available datasets to determine whether they are suitable for training AI models."
    },
    {
      number: "03",
      title: "Technical Evaluation",
      description: "We analyze infrastructure requirements, system compatibility, and integration possibilities."
    },
    {
      number: "04",
      title: "Financial and ROI Analysis",
      description: "Our experts evaluate development costs and estimate potential business benefits."
    },
    {
      number: "05",
      title: "Risk Analysis",
      description: "We identify technical, operational, and compliance risks associated with the project."
    },
    {
      number: "06",
      title: "Feasibility Report and Recommendations",
      description: "A comprehensive report is delivered outlining findings, recommendations, and a roadmap for AI implementation."
    }
  ];

  const industries = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Healthcare and Medical Technology",
      description: "Evaluate AI opportunities in patient care, diagnostic systems, and healthcare operations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Financial Services and FinTech",
      description: "Assess AI readiness for fraud detection, risk analysis, and automated financial services."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Retail and E-commerce",
      description: "Determine feasibility of AI-powered recommendations, inventory management, and customer analytics."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Manufacturing and Industrial Automation",
      description: "Evaluate AI for predictive maintenance, quality control, and production optimization."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: "Logistics and Supply Chain",
      description: "Assess AI feasibility for route optimization, demand forecasting, and supply chain intelligence."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Technology and SaaS Companies",
      description: "Determine AI implementation potential for product features, customer support, and analytics."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Reduced Project Risk",
      description: "Identify technical and operational challenges before investing in AI development."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Improved Decision Making",
      description: "Understand whether artificial intelligence aligns with your business goals."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Efficient Resource Allocation",
      description: "Focus investments on AI initiatives that deliver measurable results."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Faster Implementation",
      description: "A clear roadmap enables businesses to move forward with AI projects more efficiently."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Better Business Outcomes",
      description: "Successful AI adoption can improve productivity, automation, and data-driven decision making."
    }
  ];

  const whyChooseUs = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Experienced AI Experts",
      description: "Our team includes experienced data scientists, machine learning engineers, and AI consultants."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Strategic Approach",
      description: "We focus on solving real business problems rather than applying technology without clear value."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Data-Driven Insights",
      description: "Every recommendation is based on detailed technical analysis and data evaluation."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "End-to-End Support",
      description: "From feasibility analysis to full AI implementation, we support organizations throughout the entire AI adoption journey."
    }
  ];

  const faqs = [
    {
      question: "Why is AI feasibility analysis important before developing AI solutions?",
      answer: "AI feasibility analysis helps businesses avoid costly mistakes by validating whether artificial intelligence is technically and financially viable. It evaluates data readiness, infrastructure capabilities, and potential business impact. By conducting this analysis first, organizations can make informed decisions, reduce project risks, and focus resources on AI initiatives that are most likely to deliver value."
    },
    {
      question: "What factors are included in an AI feasibility study?",
      answer: "An AI feasibility study typically includes opportunity assessment, data readiness evaluation, technical infrastructure review, financial cost estimation, and risk analysis. Experts also assess compliance requirements and integration challenges. The outcome is a detailed report outlining whether the AI project is viable and what steps are required to move forward successfully."
    },
    {
      question: "Which industries benefit from AI feasibility analysis services?",
      answer: "Many industries benefit from AI feasibility analysis, including healthcare, financial services, retail, manufacturing, logistics, and SaaS companies. Businesses in these sectors often deal with large datasets and complex operational processes, making them suitable for artificial intelligence applications such as predictive analytics, automation, and intelligent decision support."
    },
    {
      question: "How does AI feasibility analysis help reduce project risks?",
      answer: "AI feasibility analysis identifies potential technical, financial, and operational risks before development begins. Experts review data limitations, system compatibility, regulatory concerns, and implementation challenges. By identifying these issues early, businesses can adjust their strategy, avoid costly delays, and ensure that AI initiatives move forward with a clearer plan."
    },
    {
      question: "What role does ROI analysis play in AI feasibility studies?",
      answer: "Return on investment analysis is a key part of any feasibility study. Experts estimate the costs of development, infrastructure, and implementation while comparing them to potential business benefits. This financial evaluation helps organizations determine whether the expected value of an AI project justifies the investment."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Hero Section with Image */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,130,80,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,130,80,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-float hidden sm:block" style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-float hidden sm:block" style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)', animationDelay: '2s' }}></div>

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
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                AI Feasibility Analysis in Australia
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
                AI Feasibility Analysis Company{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  in Australia
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Evaluate whether artificial intelligence is the right solution for your business before investing in development. Our AI feasibility analysis helps organizations assess data readiness, technical requirements, and potential ROI to ensure successful AI implementation.
              </p>

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
                <span>Request Consultation</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInRight}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <img
                src="/aiautomation/Aifeasibility.webp"
                alt="AI Feasibility Analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.3), rgba(113, 147, 52, 0.3))' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fff7ed] to-[#fef3c7]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(122,130,80,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Our AI Feasibility Analysis{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Services
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive feasibility analysis services to help organizations evaluate the potential of artificial intelligence in a structured and strategic way.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
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
                  <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.2))', color: '#719334' }}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body flex-grow">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f0fdf4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(122,130,80,0.05),transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Our AI Feasibility Analysis{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Process
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures that each feasibility study provides actionable insights and practical recommendations.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative h-full"
              >
                {/* Card with corner fold effect */}
                <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Number badge in top-right corner */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-heading font-extrabold shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #719334, #5a7529)' }}>
                    {step.number}
                  </div>
                  
                  {/* Decorative corner fold */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] opacity-20 transition-all duration-300 group-hover:border-l-[50px] group-hover:border-t-[50px]" style={{ borderTopColor: '#719334' }}></div>
                  
                  <div className="relative z-10 pt-6 flex-grow">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fef3c7]/20 to-[#fff7ed] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(122,130,80,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Benefits of{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                AI Feasibility Analysis
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Conducting feasibility analysis before developing AI solutions provides several advantages.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative h-full bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 hover:border-l-8 border-green-400">
                  {/* Icon */}
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(113, 147, 52, 0.1), rgba(113, 147, 52, 0.2))', color: '#719334' }}>
                      {benefit.icon}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-green-200 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative circle */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-green-100/30 to-green-200/30 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f5f5f5] via-[#f0f0f0] to-[#ebebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,147,52,0.02),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Industries{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                We Serve
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI feasibility analysis services support businesses across multiple industries in Australia.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-full"
              >
                {/* Circular icon badge floating above */}
                <div className="absolute -top-6 left-6 z-20">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #719334, #5a7529)', color: 'white' }}>
                    {industry.icon}
                  </div>
                </div>
                
                {/* Main card */}
                <div className="relative pt-8 pb-6 px-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-green-200 h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 mt-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body flex-grow">
                    {industry.description}
                  </p>
                  
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/0 group-hover:from-green-50/50 group-hover:to-transparent rounded-2xl transition-all duration-500 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              We tailor each feasibility study according to the industry's operational needs and technological environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(122,130,80,0.05),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(113, 147, 52, 0.5), transparent)' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Why Choose Our{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                AI Feasibility Analysis Services
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Organizations across Australia trust our expertise to evaluate AI opportunities and build practical implementation strategies.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center"
              >
                {/* Stacked layers effect */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-green-200/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-green-300/30 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #719334, #5a7529)', color: 'white' }}>
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
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}></div>
            
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Start Your AI Feasibility Analysis{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Today
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                If your organization is considering artificial intelligence, the first step is understanding whether the project is viable and aligned with your business objectives. Our team helps businesses across Australia evaluate AI opportunities, reduce risks, and develop a clear implementation strategy.
              </p>
              
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
                <span>Contact Our AI Experts Today</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 flex-shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">Expert Analysis</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 flex-shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">Detailed Report</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), transparent, rgba(113, 147, 52, 0.05))' }}></div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f0fdf4]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
          
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Frequently Asked{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions about AI feasibility analysis services
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
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
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    style={{ color: '#719334' }}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-gray-600 leading-relaxed px-6 pb-6 border-t border-green-100/30">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
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

export default AIFeasibilityAnalysis;

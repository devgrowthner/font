'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Zap, Shield, Clock, Globe, Target, TrendingUp, ChevronDown, Cloud } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/useSeo';
import Schema from '../components/Schema';

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

const WhiteLabelPartner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does white-label delivery work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver the project completely under your brand. Your client interacts with you. We work behind the scenes. They never know Zynex was involved. You own the relationship, revenue, and reputation."
        }
      },
      {
        "@type": "Question",
        "name": "Will our clients know you're involved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if you tell them. We're completely white-label. All work is branded as yours. Communications go through you. Your clients see your team and your processes. We're invisible."
        }
      },
      {
        "@type": "Question",
        "name": "Can we start with just one project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Most partners start with a single project to test the partnership. If it works, we expand to ongoing delivery or a dedicated model. No minimum commitment required."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sign NDAs and confidentiality agreements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We sign NDAs as standard practice. Client data, project details, and IP remain strictly confidential. We're comfortable with any reasonable confidentiality terms."
        }
      },
      {
        "@type": "Question",
        "name": "Can your team work alongside our developers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The co-delivery model is designed for this. Your team works with ours. Knowledge transfer happens naturally. Your developers learn our processes. We understand your technology stack."
        }
      },
    ]
  };

  useSeo({
    title: 'White Label Software Development Partner | Zynex Technologies',
    description: 'Looking for a White Label Software Development Partner? Zynex Technologies helps agencies deliver AI, ERP, automation, and custom software under their own brand without hiring an in-house team.',
  });

  const partnerTypes = [
    {
      title: "Managed Service Providers",
      description: "Expand service options beyond infrastructure management into AI and automation.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Digital Agencies",
      description: "Deliver backend solutions, integrations, and custom software without hiring developers.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Software Development Companies",
      description: "Scale project capacity while maintaining your existing team structure.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "IT Consulting Firms",
      description: "Complement consulting services with production-ready custom development.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "ERP Consultants",
      description: "Implement Odoo, ERPNext, and Zoho with a dedicated technical team.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Business Consultants",
      description: "Back strategic recommendations with implementable technology solutions.",
      icon: <TrendingUp className="w-8 h-8" />
    },
  ];

  const challenges = [
    {
      title: "AI Adoption Is Rising",
      description: "Your clients request AI solutions and automation. Turning these down damages relationships.",
      statistic: "73% of enterprises are deploying AI",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Building Teams Takes Time",
      description: "Hiring technical staff is expensive, risky, and time-consuming. Once hired, you need to keep them busy.",
      statistic: "6+ months average time to hire senior developers",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Project Overflow Creates Bottlenecks",
      description: "When your team is at capacity, you either turn down projects or overcommit and miss deadlines.",
      statistic: "35% of agencies reject opportunities due to capacity",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Margin Pressure When You Hire",
      description: "Adding payroll, benefits, and training costs eats into project margins and profitability.",
      statistic: "22% increase in EBITDA with white-label models",
      icon: <TrendingUp className="w-8 h-8" />
    },
  ];

  const partnershipModels = [
    {
      title: "White-Label Delivery",
      description: "We handle delivery completely. Your brand, your client relationship, our technical team.",
      bestFor: "One-off projects",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Co-Delivery Partnership",
      description: "Your team works alongside ours. Shared ownership, visible involvement, mutual learning.",
      bestFor: "Knowledge transfer",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Overflow Development Team",
      description: "We're your on-demand extension. Scale when demand peaks, scale back when it slows.",
      bestFor: "Variable demand",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Dedicated Technical Team",
      description: "A named team works on your projects full-time, integrated into your processes and culture.",
      bestFor: "Consistent need",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Project-Based Delivery",
      description: "Fixed scope, timeline, and price. We deliver the project completely. No ongoing commitment.",
      bestFor: "One-time projects",
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
      title: "Retainer Partnership",
      description: "Predictable monthly capacity reserved for your projects. Flexible allocation, month to month.",
      bestFor: "Monthly needs",
      icon: <Clock className="w-8 h-8" />
    },
  ];

  const benefits = [
    {
      title: "White-Label Delivery",
      description: "Fully branded solutions. Your clients never know we're involved.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "No Hiring Costs",
      description: "Eliminate recruitment, salaries, benefits, and overhead. Pay only for delivery.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Scale Instantly",
      description: "Add capacity in weeks, not months. Take on larger projects without restructuring.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Flexible Engagement",
      description: "Start with one project. Grow to a dedicated team. Scale based on actual demand.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Faster Delivery",
      description: "Experienced team. Proven processes. Deliver projects 30% faster on average.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Enterprise Expertise",
      description: "AI systems, ERP, integrations, custom software. We handle enterprise-level work daily.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "NDA-Friendly",
      description: "Comfortable with strict confidentiality. Your client data and IP are protected.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Australian Partner",
      description: "Melbourne-based. Timezone-aligned communication. Local presence for your confidence.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Long-Term Partnership",
      description: "We're not a vendor. We're an extension of your team. We grow with you.",
      icon: <TrendingUp className="w-8 h-8" />
    },
  ];

  const services = [
    {
      title: "AI Solutions",
      description: "Custom AI systems. Generative AI applications. AI agents for automation.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "ERP Solutions",
      description: "Odoo implementation. ERPNext deployment. Zoho configuration and custom modules.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Automation & Workflows",
      description: "Business process automation. RPA implementation. Workflow optimization.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Backend Development",
      description: "APIs. Microservices. Database design. Production-grade infrastructure.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "System Integrations",
      description: "Connect disconnected systems. Data sync. API integration. Seamless workflows.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Cloud Solutions",
      description: "AWS deployment. Azure configuration. Serverless architecture. Scalable infrastructure.",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Custom Software Development",
      description: "Bespoke applications. Industry-specific solutions. Built from scratch.",
      icon: <CheckCircle2 className="w-8 h-8" />
    },
  ];

  const processSteps = [
    {
      step: "Step 1",
      title: "Discovery Call (Week 1)",
      description: "Tell us about your business, your clients, and your goals. We assess fit and opportunity.",
    },
    {
      step: "Step 2",
      title: "Technical Assessment (Week 2)",
      description: "We review your projects, technology stack, and integration requirements.",
    },
    {
      step: "Step 3",
      title: "Partnership Design (Week 3)",
      description: "We recommend the right model. We agree on terms, SLAs, and pricing.",
    },
    {
      step: "Step 4",
      title: "Launch & Scale (Week 4+)",
      description: "Onboarding complete. First project begins. You're already expanding.",
    },
  ];

  const faqs = [
    {
      question: "How does white-label delivery work?",
      answer: "We deliver the project completely under your brand. Your client interacts with you. We work behind the scenes. They never know Zynex was involved. You own the relationship, revenue, and reputation."
    },
    {
      question: "Will our clients know you're involved?",
      answer: "Only if you tell them. We're completely white-label. All work is branded as yours. Communications go through you. Your clients see your team and your processes. We're invisible."
    },
    {
      question: "Can we start with just one project?",
      answer: "Absolutely. Most partners start with a single project to test the partnership. If it works, we expand to ongoing delivery or a dedicated model. No minimum commitment required."
    },
    {
      question: "Do you sign NDAs and confidentiality agreements?",
      answer: "Yes. We sign NDAs as standard practice. Client data, project details, and IP remain strictly confidential. We're comfortable with any reasonable confidentiality terms."
    },
    {
      question: "Can your team work alongside our developers?",
      answer: "Yes. The co-delivery model is designed for this. Your team works with ours. Knowledge transfer happens naturally. Your developers learn our processes. We understand your technology stack."
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Schema schema={faqSchema} />
      
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
              Scale Your Service Offering Without Scaling Your Team
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-gray-100">
              You handle the relationship. We handle the complexity.
            </p>
            <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto">
              Deliver AI, ERP, automation, and custom software projects confidently while keeping your client relationships at the center. Zynex is your white-label backend partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#719334] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Become a Partner
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#719334] transition-colors"
              >
                Book a Strategy Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: BUILT FOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">WHO WE PARTNER WITH</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              These organizations are expanding their capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Zynex partners with forward-thinking service companies that want to take on larger, more technical projects without the cost and complexity of building an internal delivery team.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-[#719334] mb-4">{partner.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.title}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE CHALLENGE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">THE PROBLEM</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Your clients want what you can't easily deliver
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Market demand is outpacing your ability to service it. Here's what we're hearing from agency partners.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-[#719334] mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="bg-[#719334]/10 p-4 rounded-lg">
                  <p className="text-[#719334] font-semibold text-sm">{challenge.statistic}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: HOW ZYNEX WORKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
              A simple division of labor that works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You focus on what you do best. We handle the technical complexity. It's that simple.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Role: Agency</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-[#719334] mr-3" />
                  <span className="text-gray-700">Client relationships</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-[#719334] mr-3" />
                  <span className="text-gray-700">Sales and account management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-[#719334] mr-3" />
                  <span className="text-gray-700">Project scoping</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-[#719334] mr-3" />
                  <span className="text-gray-700">Your branding</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
              className="bg-[#719334] p-8 rounded-xl shadow-sm text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Our Role: Zynex Handles Delivery</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3" />
                  <span>Technical discovery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3" />
                  <span>Architecture and design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3" />
                  <span>Development and QA</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3" />
                  <span>Deployment and support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PARTNERSHIP MODELS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">FLEXIBLE ENGAGEMENT</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Choose the partnership model that fits your business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you need overflow support, dedicated capacity, or project-based delivery, we adapt to your workflow.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {partnershipModels.map((model, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-[#719334] mb-4">{model.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Best for:</span> {model.bestFor}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: WHY PARTNER WITH ZYNEX */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">OUR ADVANTAGES</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Why leading agencies choose Zynex
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not a staffing agency. We're a strategic technology partner invested in your growth.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-[#719334] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: SERVICES & SOLUTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">WHAT WE DELIVER</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Comprehensive technical capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rather than listing technologies, here's what we actually build for your clients.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-[#719334] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: PARTNERSHIP PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">HOW TO GET STARTED</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Four steps to becoming a Zynex partner
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From discovery to delivery in four weeks.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 relative"
              >
                <div className="absolute -top-3 -left-3 bg-[#719334] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#719334] font-semibold text-sm uppercase tracking-wider">QUESTIONS?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about becoming a Zynex partner.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#719334] to-[#5a7529] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to expand your capabilities?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's talk about how Zynex can help you scale your service offering without scaling your payroll.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#719334] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Become a Partner
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#719334] transition-colors flex items-center justify-center"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default WhiteLabelPartner;

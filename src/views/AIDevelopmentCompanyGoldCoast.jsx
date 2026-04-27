'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import Schema from '../components/Schema';
import { useSeo } from '../hooks/useSeo';

const bg2 = '/GoldCoast.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const heroStats = [
  { metric: 'Weeks', label: 'Strategy to deployment, not years' },
  { metric: '100%', label: 'Custom-built to your business data' },
  { metric: '6+', label: 'Industries served across Australia' },
  { metric: 'ROI', label: 'Validated before development starts' },
];

const challenges = [
  {
    title: 'Unclear whether AI is a genuine fit for your current data and systems',
    description: '',
  },
  {
    title: 'Wasted investment on generic tools that do not integrate with your workflows',
    description: '',
  },
  {
    title: 'Development timelines stretching into years with no visible ROI milestones',
    description: '',
  },
  {
    title: 'Uncertainty around data privacy, compliance, and responsible AI usage',
    description: '',
  },
];

const services = [
  {
    id: '01',
    title: 'Custom AI Development',
    description:
      'We build AI systems designed around your specific business processes, data, and objectives. Our Custom AI Development service covers everything from model architecture to production deployment, ensuring your solution integrates seamlessly with your existing infrastructure.',
  },
  {
    id: '02',
    title: 'AI Automation',
    description:
      'Reduce manual effort and accelerate operational throughput with intelligent AI Automation. We identify high-value automation opportunities in your workflows, then build and deploy systems that handle repetitive tasks, data processing, and decision support automatically.',
  },
  {
    id: '03',
    title: 'Machine Learning Services',
    description:
      'Our Machine Learning Services cover end-to-end model development: data preparation, feature engineering, model training, validation, and ongoing monitoring. We build ML systems that improve with your data over time, covering predictive analytics, NLP, and computer vision.',
  },
  {
    id: '04',
    title: 'AI Feasibility Analysis',
    description:
      'Before committing to development, validate your AI investment with a structured AI Feasibility Analysis. We assess your data quality, technical readiness, financial viability, and compliance requirements, then deliver a clear report with a recommended implementation roadmap.',
  },
];

const methodology = [
  {
    step: 'Step 01',
    title: 'Discovery and Goal Setting',
    description:
      'We begin by mapping your business goals, operational challenges, and expectations from AI. No jargon, just a clear conversation about outcomes.',
  },
  {
    step: 'Step 02',
    title: 'AI Feasibility Analysis',
    description:
      'Our team conducts a full AI Feasibility Analysis, covering data readiness, technical requirements, ROI estimation, and risk factors.',
  },
  {
    step: 'Step 03',
    title: 'Solution Design',
    description:
      'Based on the feasibility report, we design a tailored AI architecture that fits your data, systems, and budget constraints.',
  },
  {
    step: 'Step 04',
    title: 'Custom AI Development',
    description:
      'Our engineers build your solution using proven machine learning frameworks, with continuous testing and validation throughout the process.',
  },
  {
    step: 'Step 05',
    title: 'Integration and Deployment',
    description:
      'We integrate the AI system into your existing workflows and infrastructure, then deploy to a production environment with full documentation.',
  },
  {
    step: 'Step 06',
    title: 'Monitoring and Optimisation',
    description:
      'Post-launch, we monitor model performance and data drift, continuously improving the system to maintain and grow its business impact.',
  },
];

const benefits = [
  {
    title: 'Validated ROI Before You Commit',
    description:
      'Our AI Feasibility Analysis ensures you understand the expected return on investment before a single line of custom code is written.',
  },
  {
    title: 'Faster Time to Value',
    description:
      'Our structured approach takes businesses from strategy to working AI Automation in weeks, not the industry-standard multi-year timelines.',
  },
  {
    title: 'Reduced Operational Risk',
    description:
      'By validating data, infrastructure, and compliance requirements early, we eliminate the most common causes of AI project failure.',
  },
  {
    title: 'Scalable Machine Learning',
    description:
      'Our Machine Learning Services produce models that improve with more data over time, compounding their value as your business grows.',
  },
  {
    title: 'End-to-End Partnership',
    description:
      'From feasibility through to post-deployment monitoring, Zynex remains a long-term partner in your AI journey, not a one-off contractor.',
  },
  {
    title: 'Built for Your Industry',
    description:
      'We adapt every engagement to your industry\'s specific regulatory environment, data structure, and operational context.',
  },
];

const industryServed = [
  { title: 'Healthcare and MedTech', description: '' },
  { title: 'Financial Services and FinTech', description: '' },
  { title: 'Retail and E-commerce', description: '' },
  { title: 'Manufacturing and Industrial', description: '' },
  { title: 'Logistics and Supply Chain', description: '' },
  { title: 'Technology and SaaS Companies', description: '' },
];

const whyUsPoints = [
  {
    title: 'Experienced AI and ML Engineers',
    description:
      'Our team includes seasoned data scientists, ML engineers, and AI consultants who have delivered production systems across diverse industries and data environments.',
  },
  {
    title: 'Strategic, Outcome-Focused Approach',
    description:
      'We evaluate every AI opportunity against genuine business value. If AI Automation is not the right solution for your problem, we will tell you before you invest in development.',
  },
  {
    title: 'Data-Driven Recommendations',
    description:
      'Every proposal and recommendation is grounded in rigorous technical analysis and our structured AI Feasibility Analysis process, not assumptions or sales projections.',
  },
  {
    title: 'Fast Delivery Without Compromise',
    description:
      'Our proven delivery framework moves projects from strategy to deployed Custom AI Development in weeks, with clear milestones and regular client communication throughout.',
  },
];

const faqs = [
  {
    question: 'Q. What AI development services does Zynex Technologies offer in Gold Coast?',
    answer:
      'Zynex Technologies provides Custom AI Development, AI Automation, Machine Learning Services, and AI Feasibility Analysis for businesses in Gold Coast and across Queensland. Our services span the full project lifecycle, from initial opportunity assessment through to post-deployment monitoring and model optimisation.',
  },
  {
    question: 'Q. How does custom AI development benefit Gold Coast businesses?',
    answer:
      'Custom AI Development gives businesses purpose-built systems designed around their specific data, workflows, and objectives. Unlike generic off-the-shelf tools, custom solutions integrate directly with your existing infrastructure and can be adapted as your business evolves, delivering sustained competitive advantage and measurable ROI over time.',
  },
  {
    question: 'Q. What is AI automation and how can it reduce costs for my business?',
    answer:
      'AI Automation uses intelligent systems to handle repetitive, rule-based, or data-intensive tasks that would otherwise require significant manual effort. By automating processes like data processing, customer support triage, quality control, and reporting, businesses typically reduce operational costs, improve accuracy, and free their teams to focus on higher-value work.',
  },
  {
    question: 'Q. Do you conduct an AI feasibility analysis before starting development?',
    answer:
      'Yes. We always recommend beginning with a structured AI Feasibility Analysis before any development begins. This process evaluates your data quality and availability, technical infrastructure, financial viability, compliance requirements, and expected ROI. The result is a clear feasibility report and implementation roadmap that ensures your investment is grounded in realistic outcomes.',
  },
  {
    question: 'Q. What machine learning services does Zynex provide?',
    answer:
      'Our Machine Learning Services cover the complete model lifecycle: data preparation and feature engineering, model selection and training, validation and testing, production deployment, and ongoing monitoring. We specialise in predictive analytics, natural language processing, computer vision, and recommendation systems, building ML solutions that improve with your data over time.',
  },
  {
    question: 'Q. How long does an AI development project typically take?',
    answer:
      'Most projects move from strategy to production deployment in weeks, not years. The exact timeline depends on scope and complexity. After completing the AI Feasibility Analysis, we deliver a detailed implementation roadmap with clear milestones so you know exactly what to expect at every stage of the engagement.',
  },
  {
    question: 'Q. Which industries does Zynex Technologies serve in Gold Coast and Queensland?',
    answer:
      'We work with businesses across healthcare and medical technology, financial services and FinTech, retail and e-commerce, manufacturing, logistics, and SaaS companies. Any business with operational complexity, substantial data assets, or a need for intelligent automation can benefit from our AI Development and Machine Learning Services.',
  },
];

const brandGreen = '#719334';

const AIDevelopmentCompanyGoldCoast = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }),
    []
  );

  useSeo({
    title: 'AI Development Company in Gold Coast | Zynex Technologies',
    description:
      'Zynex Technologies is Gold Coast\'s trusted AI development company. We deliver custom AI development, AI automation, machine learning services, and AI feasibility analysis for businesses across Queensland.',
  });

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <Schema schema={faqSchema} />

      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5]">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-6 sm:mb-10">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 font-medium text-sm sm:text-base group hover:text-[#719334]"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 text-xs sm:text-sm font-semibold mb-6 text-brand-green">
                Gold Coast, Queensland, Australia
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-foreground mb-5 sm:mb-6 leading-tight tracking-tight">
                AI Development Company in Gold Coast
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Zynex Technologies builds purpose-built AI solutions for Gold Coast businesses. From AI Feasibility Analysis through to full deployment, we deliver Custom AI Development, AI Automation, and Machine Learning Services that generate real, measurable ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]"
                  style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
                >
                  Request a Free Consultation
                </button>
                <Link
                  href="/ai-feasibility-analysis"
                  className="group inline-flex items-center justify-center gap-2 text-[#719334] px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px] border border-[#719334] bg-white"
                >
                  View AI Feasibility Analysis
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={bg2} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-6"
          >
            {heroStats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                className="bg-white/85 backdrop-blur-sm border rounded-xl p-4 sm:p-5 text-center"
                style={{ borderColor: 'rgba(113, 147, 52, 0.45)' }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#719334] mb-1">
                  {s.metric}
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="mt-8 sm:mt-12 bg-white/50 backdrop-blur-sm border border-white/80 rounded-2xl p-4 sm:p-6"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-semibold text-muted-foreground">
              <motion.div variants={fadeInUp}>✓ Experienced Data Scientists and ML Engineers</motion.div>
              <motion.div variants={fadeInUp}>✓ Full AI Feasibility Analysis before you invest</motion.div>
              <motion.div variants={fadeInUp}>✓ Strategy to deployment in weeks</motion.div>
              <motion.div variants={fadeInUp}>✓ Serving Gold Coast and all of Queensland</motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">THE CHALLENGE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Gold Coast Businesses Are Falling Behind on AI Adoption
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Most businesses know AI can improve their operations. The hard part is knowing where to start, what is actually viable, and how to avoid wasting budget on the wrong approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-8">
            <div className="space-y-4">
              {challenges.map((item) => (
                <div key={item.title} className="rounded-2xl border bg-[#fefdfb] p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border bg-white p-6 sm:p-8" style={{ borderColor: 'rgba(113, 147, 52, 0.3)' }}>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-4">The Zynex Approach</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We start every engagement with a thorough{' '}
                <Link
                  href="/ai-feasibility-analysis"
                  className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                >
                  AI Feasibility Analysis
                </Link>
                {' '}to validate opportunity, data readiness, and expected return on investment before any development begins.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Once the foundation is confirmed, our team moves quickly. We design and build custom AI solutions tailored to your data and your business goals, not off-the-shelf software retrofitted to your problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4]/40 via-[#fefdfb] to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">WHAT WE DO</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              AI Development Services for Gold Coast Businesses
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Every service we offer is designed to move your business from uncertainty to confident, production-ready AI in the shortest time possible.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-5 sm:gap-6">
            {services.map((s) => {
              const getServiceLink = (title) => {
                switch (title) {
                  case 'AI Feasibility Analysis':
                    return '/ai-feasibility-analysis';
                  case 'Custom AI Development':
                    return '/custom-ai';
                  case 'AI Automation':
                    return '/ai-automation';
                  case 'Machine Learning Services':
                    return '/machine-learning';
                  default:
                    return '#';
                }
              };

              return (
                <div
                  key={s.id}
                  className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm"
                  style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}
                >
                  <p className="text-sm font-semibold text-[#719334] mb-2">{s.id}</p>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {s.title === 'AI Feasibility Analysis' && (
                      <>
                        Before committing to development, validate your AI investment with a structured{' '}
                        <Link
                          href={getServiceLink(s.title)}
                          className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                        >
                          AI Feasibility Analysis
                        </Link>
                        . We assess your data quality, technical readiness, financial viability, and compliance requirements, then deliver a clear report with a recommended implementation roadmap.
                      </>
                    )}
                    {s.title === 'Custom AI Development' && (
                      <>
                        We build AI systems designed around your specific business processes, data, and objectives. Our{' '}
                        <Link
                          href={getServiceLink(s.title)}
                          className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                        >
                          Custom AI Development service
                        </Link>
                        {' '}covers everything from model architecture to production deployment, ensuring your solution integrates seamlessly with your existing infrastructure.
                      </>
                    )}
                    {s.title === 'AI Automation' && (
                      <>
                        Reduce manual effort and accelerate operational throughput with intelligent{' '}
                        <Link
                          href={getServiceLink(s.title)}
                          className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                        >
                          AI Automation
                        </Link>
                        . We identify high-value automation opportunities in your workflows, then build and deploy systems that handle repetitive tasks, data processing, and decision support automatically.
                      </>
                    )}
                    {s.title === 'Machine Learning Services' && (
                      <>
                        Our{' '}
                        <Link
                          href={getServiceLink(s.title)}
                          className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                        >
                          Machine Learning Services
                        </Link>
                        {' '}cover end-to-end model development: data preparation, feature engineering, model training, validation, and ongoing monitoring. We build ML systems that improve with your data over time, covering predictive analytics, NLP, and computer vision.
                      </>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">HOW IT WORKS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              From Strategy to Deployed AI in Six Clear Steps
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Our structured process removes guesswork and keeps your project on track from the first conversation to go-live.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {methodology.map((m) => (
              <div key={m.step} className="rounded-2xl border p-5 sm:p-6 bg-[#fefdfb]" style={{ borderColor: 'rgba(113, 147, 52, 0.35)' }}>
                <p className="text-sm font-semibold text-[#719334]">{m.step}</p>
                <h3 className="font-heading font-bold text-foreground mt-2 mb-2 text-base sm:text-lg leading-snug">{m.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">WHY IT MATTERS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              What Gold Coast Businesses Gain from Working with Zynex
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Every AI project we deliver is measured against real business outcomes, not technical metrics alone.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border bg-[#fefdfb] p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">INDUSTRIES WE SERVE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              AI Development Across Gold Coast's Key Sectors
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Our AI Development and Machine Learning Services are tailored to the operational realities of each industry we work in.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industryServed.map((ind) => (
              <div key={ind.title} className="rounded-2xl border bg-[#fefdfb] p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                <h3 className="font-heading font-bold text-lg text-foreground">{ind.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4]/40 via-[#fefdfb] to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">WHY ZYNEX TECHNOLOGIES</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Gold Coast's Trusted AI Development Partner
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Businesses across Queensland choose Zynex because we focus on solving real problems, not on applying technology for its own sake.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {whyUsPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{point.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4] via-emerald-50/90 to-[#ecfdf5]">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} variants={fadeInUp} className="bg-white/80 border rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground pr-8">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} style={{ color: brandGreen }} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaqIndex === index ? 'auto' : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-muted-foreground leading-relaxed px-6 pb-6 border-t pt-4">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white border rounded-3xl shadow-lg p-8 lg:p-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">GET STARTED</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
              Ready to Explore AI Development for Your Gold Coast Business?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Start with an AI Feasibility Analysis. Our team will assess your opportunity, data readiness, and expected ROI before any development investment is made.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
                style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
              >
                Request a Free Consultation
              </button>
              <Link
                href="/ai-feasibility-analysis"
                className="inline-flex items-center justify-center text-[#719334] px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg border border-[#719334] bg-white"
              >
                View AI Feasibility Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AIDevelopmentCompanyGoldCoast;

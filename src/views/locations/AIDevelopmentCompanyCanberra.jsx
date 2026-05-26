'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedLocationPages from '../../components/RelatedLocationPages';
import { useSeo } from '../../hooks/useSeo';

const bg2 = '/CanberraAI.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const heroStats = [
  { metric: '3x', label: 'Average ROI from Custom AI Development' },
  { metric: '60%', label: 'Reduction in manual processing via AI Automation' },
  { metric: '2 Weeks', label: 'Average AI Feasibility Analysis turnaround' },
  { metric: '100%', label: 'Australian data compliance across all projects' },
];

const challenges = [
  {
    title: 'No Clarity on Viability',
    description:
      'Organisations invest in AI without first confirming their data is ready, their infrastructure can support it, or whether the expected ROI justifies the cost.',
  },
  {
    title: 'Generic Tools Don\'t Fit',
    description:
      'Off-the-shelf AI products rarely align with how government agencies and enterprises in Canberra actually operate, forcing compromises that limit outcomes.',
  },
  {
    title: 'Compliance Complexity',
    description:
      'Australian Privacy Act requirements, sector-specific regulations, and AI ethics obligations create uncertainty that stalls AI projects before they begin.',
  },
];

const services = [
  {
    id: '01',
    title: 'AI Feasibility Analysis',
    description:
      'Before committing to AI development, understand exactly what is viable. Our AI Feasibility Analysis covers data readiness, infrastructure requirements, financial modelling, risk assessment, and a clear implementation roadmap tailored to your Canberra organisation.',
  },
  {
    id: '02',
    title: 'Custom AI Development',
    description:
      'Generic AI products rarely deliver the precision your business requires. Our Custom AI Development service builds models trained on your own data, integrated with your systems, and optimised for your specific workflows and compliance requirements.',
  },
  {
    id: '03',
    title: 'AI Automation',
    description:
      'Eliminate repetitive, resource-intensive tasks with intelligent AI Automation. We implement end-to-end automation across document processing, data extraction, reporting pipelines, and customer interactions so your team focuses on work that genuinely requires human judgment.',
  },
  {
    id: '04',
    title: 'Machine Learning Services',
    description:
      'From predictive analytics to classification and recommendation systems, our Machine Learning Services help Canberra organisations extract actionable intelligence from their data. We manage the full ML lifecycle: data preparation, model training, validation, deployment, and monitoring.',
  },
];

const methodology = [
  {
    step: 'Step 01',
    title: 'Discovery and Requirements',
    description:
      'We align on your business goals, operational challenges, and expectations from AI before a single line of code is written.',
  },
  {
    step: 'Step 02',
    title: 'AI Feasibility Analysis',
    description:
      'Our AI Feasibility Analysis reviews your data quality, infrastructure, and financial case to confirm viability.',
  },
  {
    step: 'Step 03',
    title: 'Solution Architecture',
    description:
      'We design the technical blueprint for your Custom AI Development or Machine Learning Services engagement.',
  },
  {
    step: 'Step 04',
    title: 'Development and Training',
    description:
      'Our engineers build and train your AI models using your data, with rigorous testing at each milestone.',
  },
  {
    step: 'Step 05',
    title: 'Integration and AI Automation',
    description:
      'We deploy your solution into existing systems and implement AI Automation workflows for immediate operational impact.',
  },
  {
    step: 'Step 06',
    title: 'Monitoring and Optimisation',
    description:
      'Ongoing performance monitoring ensures your AI continues to deliver accuracy and ROI as your business evolves.',
  },
];

const reasons = [
  'Feasibility-First Approach: We validate ROI and technical viability before any development begins. Our AI feasibility analysis process ensures you only invest in solutions that will deliver.',
  'Built Around Your Workflows: Every AI system we build is designed around your specific data, processes, and goals. You will not need to change how you work to accommodate the technology.',
  'End-to-End Development Support: From the initial discovery call through to post-deployment optimisation, our team is involved at every stage of your project.',
  'Scalable Architecture: Our AI solutions are built to scale with your business. As your data grows and requirements evolve, the system expands without major infrastructure changes.',
  'Seamless System Integration: We ensure your new AI solution connects smoothly with your existing software, databases, and tools without disrupting current operations.',
  'Ongoing Support and Monitoring: AI systems require continuous refinement. We monitor performance, retrain models, and keep your solution delivering consistent results long after launch.',
];

const industryServed = [
  {
    title: 'Government and Public Sector',
    description:
      'AI Automation for policy analysis, document processing, and citizen services with full compliance to Australian government data standards.',
  },
  {
    title: 'Healthcare and Medical Technology',
    description:
      'Machine Learning Services for diagnostic support, patient data analysis, and clinical workflow optimisation.',
  },
  {
    title: 'Financial Services and FinTech',
    description:
      'Custom AI Development for fraud detection, automated risk assessment, and intelligent financial reporting.',
  },
  {
    title: 'Manufacturing and Industrial',
    description:
      'Predictive maintenance, quality control automation, and production optimisation using real-time Machine Learning Services.',
  },
  {
    title: 'Retail and E-commerce',
    description:
      'AI-powered personalisation, demand forecasting, and inventory intelligence through Custom AI Development.',
  },
  {
    title: 'Technology and SaaS',
    description:
      'Embed AI Automation and machine learning features directly into your product, accelerating development timelines.',
  },
];

const nationalReach = [
  {
    title: 'AI Development Company in Sydney',
    body: 'Custom AI systems, machine learning models, and automation solutions built for Sydney businesses across every industry.',
    href: '/ai-development-company-sydney',
    cta: 'Learn more: AI Development Company in Sydney',
  },
  {
    title: 'AI Automation Company in Australia',
    body: 'We automate workflows, data processes, and customer interactions for Australian businesses looking to reduce costs and scale operations.',
    href: '/ai-automation',
    cta: 'Learn more: AI Automation Company in Australia',
  },
  {
    title: 'AI Feasibility Analysis Company in Australia',
    body: 'Our structured feasibility analysis validates ROI and technical viability before your business commits to an AI development project.',
    href: '/ai-feasibility-analysis',
    cta: 'Learn more: AI Feasibility Analysis Company in Australia',
  },
];

const faqs = [
  {
    question: 'Q. What is an AI Feasibility Analysis and why do Canberra businesses need it?',
    answer:
      'An AI Feasibility Analysis evaluates whether artificial intelligence is technically and financially viable for your specific business context. For Canberra organisations dealing with government compliance requirements and large operational datasets, it confirms data readiness, system compatibility, and expected ROI before any development investment is made. It eliminates costly guesswork and gives leadership a clear, evidence-based case for moving forward with Custom AI Development.',
  },
  {
    question: 'Q. How does Custom AI Development differ from off-the-shelf AI tools?',
    answer:
      'Custom AI Development builds models trained exclusively on your organisation\'s data and designed around your specific workflows, compliance requirements, and business logic. Generic tools offer broad functionality but limited precision. For Canberra businesses in regulated sectors, Custom AI Development is the only way to guarantee both performance and compliance, with AI that improves as your data grows rather than degrading over time.',
  },
  {
    question: 'Q. What does AI Automation involve for Australian organisations?',
    answer:
      'AI Automation replaces repetitive, rule-based tasks with intelligent systems that learn and adapt. Zynex Technologies implements automation across document processing, data extraction, report generation, approval workflows, and customer interactions. Unlike simple scripting, AI Automation handles variability and exceptions, reducing error rates while freeing your Canberra team to focus on strategic, high-judgment work.',
  },
  {
    question: 'Q. What Machine Learning Services does Zynex Technologies provide in Canberra?',
    answer:
      'Our Machine Learning Services cover the full lifecycle: data preparation, feature engineering, model selection, training, validation, and production deployment. We build predictive analytics, classification systems, anomaly detection, and recommendation engines. All models include ongoing monitoring and retraining schedules to maintain accuracy as your data evolves over time.',
  },
  {
    question: 'Q. How long does an AI Feasibility Analysis take?',
    answer:
      'A standard AI Feasibility Analysis typically takes two to four weeks, depending on the complexity of your data environment and operational processes. The deliverable is a comprehensive report covering technical readiness, data quality assessment, ROI modelling, risk analysis, compliance evaluation, and a recommended implementation roadmap ready for board or executive approval.',
  },
  {
    question: 'Q. How does Zynex Technologies ensure compliance with Australian AI regulations?',
    answer:
      'Every engagement begins with a compliance assessment covering the Australian Privacy Act, sector-specific regulations, and the Australian Government\'s AI Ethics Principles. We design AI systems to be transparent, explainable, and auditable. For Canberra government and enterprise clients, all data is handled in accordance with applicable security classifications and sovereignty requirements.',
  },
  {
    question: 'Q. Can Zynex Technologies support AI projects from feasibility through to deployment?',
    answer:
      'Yes. Zynex Technologies provides end-to-end support from AI Feasibility Analysis through to Custom AI Development, AI Automation implementation, and Machine Learning Services deployment. Having a single partner across the full lifecycle eliminates integration issues, reduces handover risk, and ensures the final solution matches the original strategic intent.',
  },
];

const benefitStats = [
  { metric: '3.2x', label: 'Average ROI reported by clients who completed an AI Feasibility Analysis before development' },
  { metric: '88%', label: 'Data Readiness' },
  { metric: '74%', label: 'Risk Reduction' },
  { metric: '62%', label: 'Faster Delivery' },
  { metric: '55%', label: 'Cost Savings' },
];

const brandGreen = '#719334';

const AIDevelopmentCompanyCanberra = () => {
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
    title: 'AI Development Company in Canberra | Zynex Technologies',
    description:
      'Zynex Technologies is Canberra\'s trusted AI development company. We deliver Custom AI Development, AI Automation, and Machine Learning Services. Start with an AI Feasibility Analysis today.',
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
                Canberra AI Development Company
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-foreground mb-5 sm:mb-6 leading-tight tracking-tight">
                Canberra's Trusted AI Development Partner
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                From AI Feasibility Analysis to full deployment, Zynex Technologies helps Canberra organisations build AI solutions that deliver measurable ROI. Strategy to production in weeks, not years.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]"
                  style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
                >
                  Start Your AI Feasibility Analysis
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-[#719334] px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px] border border-[#719334] bg-white"
                >
                  Explore Our Services
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={bg2} alt="Canberra's Trusted main image" className="w-full h-full object-cover" />
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
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-center text-xs sm:text-sm font-semibold text-muted-foreground">
              <motion.div variants={fadeInUp}>✓ Australian-Owned AI Company</motion.div>
              <motion.div variants={fadeInUp}>✓ Privacy Act Compliant</motion.div>
              <motion.div variants={fadeInUp}>✓ Government and Enterprise Experience</motion.div>
              <motion.div variants={fadeInUp}>✓ End-to-End AI Support</motion.div>
              <motion.div variants={fadeInUp}>✓ Strategy to Deployment in Weeks</motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">THE CHALLENGE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Most Canberra Businesses Struggle to Adopt AI Effectively
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              The promise of AI is clear. The path to realising it without wasting time and budget is not.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-2xl border bg-[#fefdfb] p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4]/40 via-[#fefdfb] to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">OUR SERVICES</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              AI Solutions Built for Canberra Organisations
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We handle the full AI lifecycle, from initial feasibility through to production deployment and ongoing optimisation.
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
                        Before committing to AI development, understand exactly what is viable. Our{' '}
                        <Link
                          href={getServiceLink(s.title)}
                          className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                        >
                          AI Feasibility Analysis
                        </Link>
                        {' '}covers data readiness, infrastructure requirements, financial modelling, risk assessment, and a clear implementation roadmap tailored to your Canberra organisation.
                      </>
                    )}
                    {s.title === 'Custom AI Development' && (
                      <>
                        Generic AI products rarely deliver the precision your business requires. Our{' '}
                        <Link
                          href={getServiceLink(s.title)}
                          className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                        >
                          Custom AI Development service
                        </Link>
                        {' '}builds models trained on your own data, integrated with your systems, and optimised for your specific workflows and compliance requirements.
                      </>
                    )}
                    {s.title === 'AI Automation' && (
                      <>
                        Eliminate repetitive, resource-intensive tasks with intelligent{' '}
                        <Link
                          href={getServiceLink(s.title)}
                          className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                        >
                          AI Automation
                        </Link>
                        . We implement end-to-end automation across document processing, data extraction, reporting pipelines, and customer interactions so your team focuses on work that genuinely requires human judgment.
                      </>
                    )}
                    {s.title === 'Machine Learning Services' && (
                      <>
                        From predictive analytics to classification and recommendation systems, our{' '}
                        <Link
                          href={getServiceLink(s.title)}
                          className="text-[#719334] underline hover:text-[#5a7529] transition-colors font-medium"
                        >
                          Machine Learning Services
                        </Link>
                        {' '}help Canberra organisations extract actionable intelligence from their data. We manage the full ML lifecycle: data preparation, model training, validation, deployment, and monitoring.
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
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">HOW WE WORK</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Our AI Development Process
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              A structured six-step approach that takes Canberra organisations from initial question to production-ready AI, with full transparency at every stage.
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
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">WHY AI FEASIBILITY FIRST</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              The Business Case for Starting with Analysis
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>Reduced Investment Risk:</strong> Identify technical and financial blockers before committing to Custom AI Development, protecting your budget from avoidable failures.
                </li>
                <li className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>Confident Decision Making:</strong> Understand whether AI Automation or Machine Learning Services align with your real business goals, backed by data.
                </li>
                <li className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>Faster Time to Value:</strong> A clear roadmap from our AI Feasibility Analysis means no rework, no wasted sprints, and faster delivery of measurable results.
                </li>
                <li className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>Regulatory Confidence:</strong> Risk and compliance assessment ensures your AI project meets Australian Privacy Act requirements and sector-specific obligations.
                </li>
                <li className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>Measurable Business Outcomes:</strong> Every recommendation ties directly to productivity, automation efficiency, or data-driven revenue improvements specific to your Canberra operation.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">Client Outcomes</h3>
              <div className="space-y-4">
                {benefitStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border bg-white p-4" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                    <div className="text-2xl font-heading font-extrabold text-[#719334] mb-1">{stat.metric}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">INDUSTRIES WE SERVE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              AI Development Across Canberra's Key Sectors
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We tailor every AI Feasibility Analysis and development engagement to the regulatory environment and operational demands of your sector.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industryServed.map((ind) => (
              <div key={ind.title} className="rounded-2xl border bg-[#fefdfb] p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{ind.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">OUR NATIONAL REACH</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              AI Development and Automation Across Australia
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Zynex Technologies serves businesses across Australia. Whether you are based in Canberra, Sydney, or anywhere else in the country, our team delivers the same standard of custom AI development and automation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {nationalReach.map((n) => (
              <div key={n.title} className="rounded-2xl border bg-[#fefdfb] p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{n.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">{n.body}</p>
                <Link href={n.href} className="text-sm font-semibold text-[#719334] hover:underline underline-offset-4">
                  {n.cta}
                </Link>
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


      <RelatedLocationPages currentSlug="canberra" />

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white border rounded-3xl shadow-lg p-8 lg:p-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">GET STARTED</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
              Ready to Explore AI for Your Canberra Organisation?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Start with an AI Feasibility Analysis and get a clear picture of what is possible, viable, and worth building before committing a dollar to development.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-8">
              ✓ No Obligation &nbsp;&nbsp; ✓ Free Feasibility Assessment &nbsp;&nbsp; ✓ Clear Pricing from Day One
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/ai-feasibility-analysis"
                className="inline-flex items-center justify-center text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
                style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
              >
                Request an AI Feasibility Analysis
              </Link>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center text-[#719334] px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg border border-[#719334] bg-white"
              >
                Email Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AIDevelopmentCompanyCanberra;

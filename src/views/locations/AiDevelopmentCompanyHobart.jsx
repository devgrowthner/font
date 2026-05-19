'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronDown,
  Sparkles,
  Shield,
  Link2,
  Bot,
  MessageSquare,
  LineChart,
  Cpu,
  Wrench,
  Brain,
  Layers,
  Database,
  Mic2,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import { useSeo } from '../../hooks/useSeo';

const bg2 = '/HobartAI.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const heroStats = [
  { metric: '95%', label: 'Client Satisfaction Rate' },
  { metric: '3x', label: 'Average ROI Delivered' },
  { metric: '6–12', label: 'Weeks to Deployment' },
  { metric: '24/7', label: 'Production Support' },
];

const painPoints = [
  {
    title: 'AI Hype Without Substance',
    description:
      "Agencies promise AI transformation but deliver generic chatbots or off-the-shelf tools that don't move your KPIs.",
  },
  {
    title: 'Projects That Drag On for Months',
    description:
      'Traditional software firms scope, redesign, and delay—while your competitors who ship faster gain the edge.',
  },
  {
    title: 'Investment With Uncertain Returns',
    description:
      "Building AI without validating ROI first means expensive re-work when the solution doesn't fit the problem.",
  },
  {
    title: 'Governance and Security Blind Spots',
    description:
      'Enterprise AI must meet Australian compliance and data privacy requirements—overlooking these creates significant operational risk.',
  },
];

const keyBenefits = [
  {
    title: 'Feasibility-First AI Strategy',
    body: 'We quantify ROI potential and data readiness before a single line of production code is written.',
    Icon: LineChart,
  },
  {
    title: 'Custom AI Development in Hobart',
    body: 'Purpose-built machine learning models, NLP systems, and multi-agent AI platforms—not templates.',
    Icon: Cpu,
  },
  {
    title: 'Enterprise-Grade Security and Compliance',
    body: 'Every system is architected with governance, data privacy, and operational excellence from day one.',
    Icon: Shield,
  },
  {
    title: 'End-to-End AI Integration Services',
    body: 'We connect AI systems to your existing CRMs, ERPs, and workflows for seamless adoption.',
    Icon: Link2,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & AI Feasibility Assessment',
    duration: '1–2 weeks',
  },
  {
    step: '02',
    title: 'AI Strategy & Architecture Design',
    duration: '1–2 weeks',
  },
  {
    step: '03',
    title: 'Agile Build & Iterative Testing',
    duration: '4–12 weeks',
  },
  {
    step: '04',
    title: 'Deploy, Integrate & Continuously Optimise',
    duration: 'Ongoing',
  },
];

const services = [
  {
    title: 'Custom AI Development',
    description:
      'Bespoke AI systems built for your exact business challenge—machine learning models, automation pipelines, and intelligent applications tailored to your industry.',
    Icon: Sparkles,
  },
  {
    title: 'Multi-Agent AI Systems',
    description:
      'Enterprise-grade autonomous AI agents that collaborate to handle complex workflows—from knowledge management to end-to-end process automation, built on LangChain, CrewAI, and AutoGen.',
    Icon: Bot,
  },
  {
    title: 'Natural Language Processing',
    description:
      'Intelligent NLP solutions for document analysis, customer support automation, email classification, and semantic search—powered by OpenAI, Claude, and Gemini.',
    Icon: MessageSquare,
  },
  {
    title: 'AI Strategy Consulting in Hobart',
    description:
      'A rigorous feasibility analysis and AI roadmap with clear ROI projections—so Hobart business leaders make data-driven decisions before committing budget.',
    Icon: LineChart,
  },
  {
    title: 'AI Integration Services',
    description:
      'Seamlessly connect AI capabilities to your existing CRM, ERP, and communication systems with enterprise-grade security and minimal operational disruption.',
    Icon: Wrench,
  },
  {
    title: 'Machine Learning Model Development',
    description:
      'Predictive analytics, recommendation engines, and classification models built with TensorFlow, PyTorch, and Scikit-Learn—trained on your data, optimised for your outcomes.',
    Icon: Cpu,
  },
];

const techStackGroups = [
  {
    title: 'Foundation models',
    description: 'Commercial and open models matched to your data and latency needs.',
    items: ['OpenAI GPT', 'Claude AI', 'Google Gemini', 'Meta Llama'],
    Icon: Brain,
  },
  {
    title: 'Orchestration & agents',
    description: 'Multi-step workflows, tool use, and agent coordination.',
    items: ['LangChain', 'CrewAI', 'AutoGen'],
    Icon: Layers,
  },
  {
    title: 'ML, vectors & analytics',
    description: 'Training, inference, and retrieval that scale in production.',
    items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pinecone'],
    Icon: Database,
  },
  {
    title: 'Voice & conversational UX',
    description: 'Speech, telephony, and realtime customer experiences.',
    items: ['Vapi', 'ElevenLabs'],
    Icon: Mic2,
  },
];

const socialMetrics = [
  { metric: '95%', label: 'Client Satisfaction Rate' },
  { metric: '3x', label: 'Average ROI Delivered' },
  { metric: '6–12 weeks', label: 'Average Deployment Time' },
  { metric: '24/7', label: 'Production Support' },
];

const testimonials = [
  {
    quote:
      "Zynex didn't just build us an AI tool—they helped us understand exactly where AI would move the needle. The feasibility process alone saved us months of wasted spend.",
    role: 'Chief Operating Officer, Sydney-based Professional Services Firm',
  },
  {
    quote:
      'From our first discovery session to going live, the entire project took 9 weeks. The multi-agent system they built handles what used to take our team two full days—every single day.',
    role: 'Head of Operations, Australian Financial Services Company',
  },
];

const faqs = [
  {
    question: 'What makes Zynex Technologies the best AI development company in Hobart?',
    answer:
      'Zynex combines strategy and engineering under one roof. We validate AI feasibility and model ROI before writing a single line of code, which means Hobart clients only invest in solutions with a clear path to return. Our track record of 95% client satisfaction and average 3x ROI sets us apart from traditional agencies in Hobart.',
  },
  {
    question: 'How long does custom AI development take in Hobart?',
    answer:
      'Most Zynex projects are fully deployed within 6–12 weeks. We run a 1–2 week discovery and feasibility sprint, followed by architecture design, then agile build sprints. We deploy faster than traditional firms because we validate before we build—eliminating expensive re-work.',
  },
  {
    question: 'What AI development services does Zynex offer in Hobart?',
    answer:
      'Our services include custom AI development, multi-agent AI systems, machine learning model development, NLP solutions, AI strategy consulting, AI integration services, and full-stack AI product deployment. Every engagement is tailored to your specific business challenge, not templated.',
  },
  {
    question: 'How much does AI development cost for a Hobart business?',
    answer:
      'Costs vary by scope and complexity. Every Zynex engagement begins with a feasibility assessment that includes ROI modelling—so you understand the expected return before committing to a full build. Contact us for a scoped estimate.',
  },
  {
    question: 'Can Zynex integrate AI into my existing business systems in Hobart?',
    answer:
      'Yes. Zynex specialises in AI integration with existing infrastructure—CRMs, ERPs, communication platforms, and proprietary data systems. Every integration is built with enterprise-grade security, compliance, and long-term scalability in mind.',
  },
  {
    question: 'Does Zynex provide ongoing AI support after deployment?',
    answer:
      'Yes. We provide 24/7 production support and continuous optimisation. After deployment, we monitor real-world performance and iteratively improve your AI system to maximise ROI as your business grows and your data matures.',
  },
  {
    question: 'What AI technologies and platforms does Zynex use for Hobart projects?',
    answer:
      'We integrate leading AI platforms including OpenAI, Claude AI, Google Gemini, Meta Llama, LangChain, TensorFlow, PyTorch, Scikit-Learn, Pinecone, and CrewAI. We choose the right technology stack for each project rather than forcing one approach onto every problem.',
  },
];

const brandGreen = '#719334';

const AiDevelopmentCompanyHobart = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  useSeo({
    title: 'AI Development Company in Hobart | Zynex Technologies',
    description:
      "Zynex Technologies is Hobart's leading AI development company. We build custom AI solutions with measurable ROI—from strategy to deployment in weeks. Get a free consultation today.",
  });

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <Schema schema={faqSchema} />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,130,80,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,130,80,0.08),transparent_50%)]" />

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

          <motion.div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-6 border"
                style={{
                  backgroundColor: 'rgba(113, 147, 52, 0.1)',
                  borderColor: 'rgba(113, 147, 52, 0.35)',
                  color: brandGreen,
                }}
              >
                Hobart, Tasmania
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-foreground mb-5 sm:mb-6 leading-tight tracking-tight">
                Best AI Development Company in{' '}
                <span className="text-[#719334]">Hobart</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Zynex Technologies delivers custom AI solutions with measurable ROI—from feasibility assessment through
                to production deployment in as little as 6 weeks.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]"
                  style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
                >
                  Start Your AI Project
                  <span aria-hidden>→</span>
                </button>
                <Link
                  href="/solutions"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold border-2 w-full sm:w-auto min-h-[48px] transition-all hover:-translate-y-0.5"
                  style={{ borderColor: 'rgba(113, 147, 52, 0.55)', color: brandGreen }}
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={bg2} alt="AI development company Hobart" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(113,147,52,0.25), rgba(0,0,0,0.15))' }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full mt-8 sm:mt-10 lg:mt-14"
          >
            {heroStats.map((s, i) => (
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
        </div>
      </section>

      {/* Problem */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Why Hobart Businesses Struggle with AI Adoption
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Most AI projects fail before they launch. Zynex is built to change that.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {painPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border bg-[#fefdfb] p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}
              >
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-[#fefdfb]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Custom AI Development Built for Real Results
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              As Hobart&apos;s leading AI development company, Zynex Technologies validates your AI opportunity before
              building—so every dollar invested is on a path to measurable return.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {keyBenefits.map(({ title, body, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 rounded-2xl border bg-white p-5 sm:p-6"
                style={{ borderColor: 'rgba(113, 147, 52, 0.25)' }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(113, 147, 52, 0.12)', color: brandGreen }}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2 text-base sm:text-lg">{title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mb-8 sm:mb-10 text-center">
            Our Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative rounded-2xl border p-5 sm:p-6 bg-[#fefdfb]"
                style={{ borderColor: 'rgba(113, 147, 52, 0.35)' }}
              >
                <span className="text-4xl font-heading font-extrabold text-[#719334]/30">{step.step}</span>
                <h3 className="font-heading font-bold text-foreground mt-2 mb-2 text-base sm:text-lg leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#719334] font-medium">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4]/40 via-[#fefdfb] to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              AI Development Services for Hobart Businesses
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              From machine learning consulting to full-stack AI product deployment—we cover the entire AI development
              lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {services.map(({ title, description, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm"
                style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}
              >
                <Icon className="w-8 h-8 text-[#719334] mb-3" strokeWidth={1.75} />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#719334] hover:underline underline-offset-4"
            >
              Explore all services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
          >
            <div className="text-center sm:text-left max-w-3xl mx-auto sm:mx-0 mb-8 sm:mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-2">Technology</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-3">
                AI Technology Stack We Integrate
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We pick the right combination for each engagement—no one-size-fits-all stack. Everything below is
                battle-tested in production with Hobart clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {techStackGroups.map(({ title, description, items, Icon }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ borderColor: 'rgba(113, 147, 52, 0.22)' }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(113, 147, 52, 0.12)', color: '#719334' }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2} aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-foreground leading-snug">{title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((name) => (
                      <span
                        key={name}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs sm:text-sm font-medium text-foreground border bg-[rgba(113,147,52,0.06)]"
                        style={{ borderColor: 'rgba(113, 147, 52, 0.18)' }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Why Hobart Businesses Choose Zynex
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Our track record speaks in numbers. Measurable outcomes that drive genuine business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14">
            {socialMetrics.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border text-center p-4 sm:p-5 bg-[#fefdfb]"
                style={{ borderColor: 'rgba(113, 147, 52, 0.35)' }}
              >
                <div className="text-xl sm:text-2xl font-heading font-extrabold text-[#719334]">{s.metric}</div>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border p-5 sm:p-7 bg-gradient-to-br from-white to-[#f0fdf4]/30"
                style={{ borderColor: 'rgba(113, 147, 52, 0.25)' }}
              >
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-xs sm:text-sm text-muted-foreground font-medium not-italic border-t border-gray-100 pt-4">
                  {t.role}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4] via-emerald-50/90 to-[#ecfdf5] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#719334]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border"
              style={{
                backgroundColor: 'rgba(113, 147, 52, 0.12)',
                borderColor: 'rgba(113, 147, 52, 0.25)',
                color: brandGreen,
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Frequently Asked{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#719334] to-emerald-600">Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions about AI development services in Hobart
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
                key={faq.question}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm border border-emerald-100/70 rounded-2xl overflow-hidden hover:shadow-xl hover:border-emerald-200/80 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f0fdf4]/50 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    style={{ color: brandGreen }}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-muted-foreground leading-relaxed px-6 pb-6 border-t border-emerald-100/50 pt-4">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA / Connect */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="relative bg-white/90 backdrop-blur-xl border border-border/30 rounded-3xl overflow-hidden shadow-lg p-8 lg:p-12"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
            />

            <div className="text-center">
              <span
                className="inline-block text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: 'rgba(113, 147, 52, 0.12)', color: brandGreen }}
              >
                Free Consultation Available
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to Build AI That Actually Works in{' '}
                <span className="bg-gradient-to-r from-[#719334] to-emerald-600 bg-clip-text text-transparent">
                  Hobart?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Join Hobart businesses already transforming their operations with Zynex&apos;s custom AI development—proven
                ROI, fast deployment, and 24/7 support.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg w-full sm:w-auto min-h-[44px] hover:shadow-[0_12px_35px_rgba(113,147,52,0.45)]"
                  style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
                >
                  <span>Book a Free AI Strategy Session</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-[#719334] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Feasibility-first approach</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-[#719334] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Free consultation</span>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'linear-gradient(to bottom right, rgba(113, 147, 52, 0.06), transparent, rgba(16, 185, 129, 0.05))',
              }}
            />
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AiDevelopmentCompanyHobart;

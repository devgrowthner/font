'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronDown,
  Sparkles,
  Bot,
  MessageSquare,
  LineChart,
  Link2,
  Workflow,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import { useSeo } from '../../hooks/useSeo';

const bg2 = '/AIBrisbane.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const heroStats = [
  { metric: '3x', label: 'Average Return on Investment' },
  { metric: '95%', label: 'Client Satisfaction Rate' },
  { metric: '6–12', label: 'Weeks Average Deployment Time' },
  { metric: '24/7', label: 'Production Support' },
];

const painPoints = [
  {
    title: 'No Measurable Outcomes',
    description:
      'Generic platforms promise transformation but deliver dashboards with vanity metrics. You need AI tied directly to business KPIs like efficiency, revenue, and cost reduction.',
  },
  {
    title: 'Slow, Costly Deployments',
    description:
      'Traditional IT projects take 12 to 18 months. By the time they launch, the technology is already behind. Brisbane businesses need speed without sacrificing engineering quality.',
  },
  {
    title: 'Poor System Integration',
    description:
      'AI that cannot connect to your existing CRM, ERP, or data sources creates new silos rather than solving them. Seamless integration is not optional, it is essential.',
  },
  {
    title: 'Governance and Compliance Gaps',
    description:
      'Deploying AI without a clear security and compliance framework exposes your business to data risk. Enterprise-grade AI requires governance built in from day one.',
  },
];

const differentiators = [
  'Feasibility-first approach: ROI is validated before a single line of code is written',
  'Bespoke architecture designed for your data environment and existing systems',
  'Full-stack development from NLP and ML to frontend and API integration',
  'Post-launch optimisation and 24/7 production monitoring included',
  'Security-aware design with governance and compliance at every layer',
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery and Assessment',
    duration: 'Week 1–2',
    body: 'Deep-dive into your business challenge, data readiness, and ROI potential. Evidence first, assumptions never.',
  },
  {
    step: '02',
    title: 'Strategy and Architecture Design',
    duration: 'Week 2–4',
    body: 'Custom AI strategy, system architecture, and an implementation roadmap with clear milestones.',
  },
  {
    step: '03',
    title: 'Build and Iterate',
    duration: 'Week 4–12',
    body: 'Agile engineering sprints with continuous testing, validation, and full stakeholder visibility.',
  },
  {
    step: '04',
    title: 'Deploy and Optimise',
    duration: 'Ongoing',
    body: 'Production deployment, team training, and continuous performance tuning based on real-world data.',
  },
];

const services = [
  {
    title: 'Custom AI Development',
    description:
      'Bespoke machine learning models, NLP pipelines, and AI systems trained on your proprietary data. Every solution is purpose-built for your specific challenge, not adapted from a template.',
    Icon: Sparkles,
    linkText: 'Custom AI Development Company',
    href: '/custom-ai',
  },
  {
    title: 'Chatbot Development',
    description:
      'Enterprise-grade conversational AI powered by GPT-4, Claude, and Gemini. We build chatbots that handle support, sales, onboarding, and complex multi-turn dialogue at scale.',
    Icon: MessageSquare,
    linkText: 'Chatbot Development Company',
    href: '/chatbot',
  },
  {
    title: 'Agentic AI Development',
    description:
      'Autonomous AI agents that plan, reason, and execute multi-step tasks using LangGraph, CrewAI, and AutoGen. Ideal for research automation, email intelligence, and document workflows.',
    Icon: Bot,
    linkText: 'Agentic AI Development Company',
    href: '/agentic-ai',
  },
  {
    title: 'AI Process Automation',
    description:
      'Replace time-consuming manual workflows with intelligent automation. From document processing and data entry to reporting and customer onboarding, we automate what slows your team down.',
    Icon: Workflow,
    linkText: 'AI Automation Company',
    href: '/ai-automation',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Forecast demand, detect churn early, and uncover hidden growth opportunities with advanced predictive modelling built directly on your business data and operational history.',
    Icon: LineChart,
    linkText: 'Machine learning & analytics',
    href: '/machine-learning',
  },
  {
    title: 'AI Integration Services',
    description:
      'Connect AI capabilities to your existing CRM, ERP, and SaaS platforms without disrupting operations. Seamless, secure integration with zero downtime across your tech stack.',
    Icon: Link2,
    linkText: 'Explore custom AI integration',
    href: '/custom-ai',
  },
];

const socialMetrics = [
  { metric: '3x', label: 'Average return on investment across all client engagements' },
  { metric: '95%', label: 'Client satisfaction rate driven by long-term partnerships' },
  { metric: '40%', label: 'Faster time-to-market vs the industry average deployment timeline' },
  { metric: '24/7', label: 'Round-the-clock production monitoring and support' },
];

const testimonials = [
  {
    quote:
      'Zynex delivered a multi-agent AI system that transformed how our team accesses information. We went from weeks of manual research to automated briefings in under 48 hours.',
    role: 'Operations Lead, CoreliaOS Client, Australia',
  },
  {
    quote:
      'What impressed us most was the feasibility-first mindset. Zynex validated our ROI hypothesis before writing a single line of code. That gave us the confidence to invest fully.',
    role: 'Founder, Technology Scale-up, Brisbane',
  },
  {
    quote:
      'From chatbot development to full AI automation of our onboarding flow, the Zynex team delivered on time and on budget. Results exceeded our targets by a significant margin.',
    role: 'Head of Product, Enterprise Client, QLD',
  },
];

const faqs = [
  {
    question: 'What does an AI Development Company in Brisbane do?',
    answer:
      'An AI development company in Brisbane like Zynex Technologies designs, builds, and deploys custom artificial intelligence systems for local businesses. This covers machine learning models, NLP solutions, chatbots, and agentic AI systems that automate complex workflows and drive measurable business outcomes.',
  },
  {
    question: 'What is a Custom AI Development Company?',
    answer:
      'A custom AI development company builds AI solutions tailored to your unique business requirements rather than offering off-the-shelf tools. Zynex Technologies conducts a feasibility assessment, designs a bespoke architecture, and delivers production-ready systems with full post-launch support.',
  },
  {
    question: 'How does a Chatbot Development Company build enterprise chatbots?',
    answer:
      'A chatbot development company like Zynex Technologies uses large language models such as OpenAI GPT-4 and Claude, combined with NLP frameworks, to create intelligent conversational agents. These bots handle customer queries, automate support workflows, and integrate with CRM or ERP platforms.',
  },
  {
    question: 'What is an Agentic AI Development Company?',
    answer:
      'An agentic AI development company specialises in building autonomous AI agents capable of planning, reasoning, and executing multi-step tasks without constant human input. Zynex Technologies uses frameworks such as LangGraph, CrewAI, and AutoGen to build robust multi-agent systems for enterprise use cases.',
  },
  {
    question: 'What is an AI Automation Company?',
    answer:
      'An AI automation company applies intelligent automation to repetitive business processes, from data entry and document processing to customer onboarding and reporting. Zynex Technologies combines process automation with AI reasoning to reduce operational costs and free teams for higher-value work.',
  },
];

const brandGreen = '#719334';
const linkClass = 'text-[#719334] hover:underline underline-offset-2 font-medium';

const AiDevelopmentCompanyBrisbane = () => {
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
    title: 'Leading AI Development Company in Brisbane | Zynex Technologies',
    description:
      "Zynex Technologies is Brisbane's leading AI Development Company. We build custom AI, chatbot, and agentic AI solutions that deliver 3x ROI. Get a free consultation.",
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

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp} className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border"
                style={{
                  backgroundColor: 'rgba(113, 147, 52, 0.1)',
                  borderColor: 'rgba(113, 147, 52, 0.35)',
                  color: brandGreen,
                }}
              >
                Custom AI Solutions | Brisbane, Australia
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-heading font-extrabold text-foreground leading-tight tracking-tight">
                The Leading AI Development Company in{' '}
                <span className="text-[#719334]">Brisbane</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Zynex Technologies is Brisbane&apos;s trusted AI Development Company, delivering custom AI solutions that
                go from strategy to production in weeks, not years. We build intelligent chatbots, agentic AI systems,
                and end-to-end AI automation that drive real, measurable ROI for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]"
                  style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
                >
                  Get a Free Consultation
                  <span aria-hidden>→</span>
                </button>
                <Link
                  href="/custom-ai"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold border-2 w-full sm:w-auto min-h-[48px] transition-all hover:-translate-y-0.5"
                  style={{ borderColor: 'rgba(113, 147, 52, 0.55)', color: brandGreen }}
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={bg2} alt="AI development company brisbane" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(113,147,52,0.25), rgba(0,0,0,0.15))' }}
              />
            </motion.div>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-10"
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
              Brisbane Businesses Deserve Better Than Generic AI
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Most companies invest in AI and see nothing. Off-the-shelf tools do not understand your workflows, your
              data, or your customers. The result is wasted budget and frustrated teams.
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
              A Custom AI Development Company Built for Real Delivery
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Zynex Technologies is not a consulting firm that hands you a slide deck. We are a custom AI development
              company that ships production-ready systems with measurable business impact from day one. Unlike templated
              agencies, every solution is designed around your data, your workflows, and your goals.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl border bg-white p-6 sm:p-8 mb-10 sm:mb-12"
            style={{ borderColor: 'rgba(113, 147, 52, 0.25)' }}
          >
            <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-4">What Sets Us Apart</h3>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              {differentiators.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#719334] shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-foreground mb-8 text-center sm:text-left">
            How We Work: Our 4-Step Process
          </h3>
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
                <p className="text-sm font-semibold text-[#719334] mt-2">{step.duration}</p>
                <h4 className="font-heading font-bold text-foreground mt-1 mb-2 text-base sm:text-lg leading-snug">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
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
              AI Services Purpose-Built for Brisbane Businesses
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From intelligent chatbot development to full agentic AI platforms and enterprise AI automation, we cover the
              complete spectrum of modern AI engineering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {services.map(({ title, description, Icon, linkText, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm flex flex-col"
                style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}
              >
                <Icon className="w-8 h-8 text-[#719334] mb-3" strokeWidth={1.75} />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">{description}</p>
                <Link href={href} className={`mt-4 text-sm inline-block ${linkClass}`}>
                  {linkText} →
                </Link>
              </motion.div>
            ))}
          </div>
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
              Numbers That Speak for Themselves
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our track record across Brisbane and Australia reflects a consistent focus on measurable outcomes, not
              technical theatrics.
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

          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-center text-foreground mb-8">
            Client Testimonials
          </h3>
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border p-5 sm:p-6 bg-gradient-to-br from-white to-[#f0fdf4]/30"
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
              Common questions about AI development in Brisbane
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

      {/* Connect / CTA Section */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to Build{' '}
                <span className="bg-gradient-to-r from-[#719334] to-emerald-600 bg-clip-text text-transparent">
                  Your AI Advantage in Brisbane?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you need a feasibility assessment, a custom chatbot, an agentic AI platform, or full-scale AI
                automation, Zynex Technologies is the Brisbane AI development company built to deliver results from day
                one.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg w-full sm:w-auto min-h-[44px] hover:shadow-[0_12px_35px_rgba(113,147,52,0.45)]"
                  style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
                >
                  <span>Book Your Free Consultation</span>
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
                  <span className="font-medium">No commitment required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-[#719334] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Response within 24 hours</span>
                </div>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                <a href="mailto:support@zynextechnologies.com.au" className={linkClass}>
                  support@zynextechnologies.com.au
                </a>
                <span className="mx-2 text-gray-300" aria-hidden>
                  ·
                </span>
                <a
                  href="https://zynextechnologies.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  zynextechnologies.com.au
                </a>
              </p>
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

export default AiDevelopmentCompanyBrisbane;

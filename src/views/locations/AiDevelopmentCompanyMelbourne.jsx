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
  LineChart,
  Cpu,
  ClipboardCheck,
  Mic,
  Brain,
  Layers,
  Database,
  Mic2,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedLocationPages from '../../components/RelatedLocationPages';
import { useSeo } from '../../hooks/useSeo';

const bg2 = '/AIMelbourne.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const provenStats = [
  { metric: '95%', label: 'Client Satisfaction Rate' },
  { metric: '6–12', label: 'Weeks Average Deployment Time' },
  { metric: '3x', label: 'ROI Average Return on Investment' },
  { metric: '24/7', label: 'Production Support' },
];

const challenges = [
  {
    title: 'No clear ROI before build',
    description:
      'Projects are approved without validation, leading to wasted budgets.',
  },
  {
    title: 'Fragmented systems',
    description: 'Data is scattered across tools with no intelligent integration layer.',
  },
  {
    title: 'Slow time-to-value',
    description:
      'Traditional development takes 12–18 months, making solutions outdated before launch.',
  },
];

const validationPoints = [
  { label: 'What will be built', detail: 'Clear scope tied to your workflows and data.' },
  { label: 'Why it will work', detail: 'Evidence-based feasibility—not assumptions.' },
  { label: 'What ROI to expect', detail: 'Modelling before you commit to full development.' },
];

const services = [
  {
    title: 'Custom AI Software Development',
    description:
      'Tailored AI systems built around your workflows, data, and business goals.',
    Icon: Sparkles,
  },
  {
    title: 'AI Feasibility Assessment',
    description: 'Validate ROI, technical feasibility, and data readiness before development.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Multi-Agent AI Systems',
    description: 'Automate workflows across operations, legal, finance, and customer support.',
    Icon: Bot,
  },
  {
    title: 'Machine Learning Model Deployment',
    description:
      'Deploy scalable ML models for predictions, automation, and decision-making.',
    Icon: Cpu,
  },
  {
    title: 'AI Chatbots & Voice Agents',
    description:
      'Conversational AI using tools like Vapi, ElevenLabs, and Twilio.',
    Icon: Mic,
  },
  {
    title: 'AI Strategy & Roadmap',
    description: 'Clear execution roadmap aligned with business outcomes.',
    Icon: LineChart,
  },
];

const processSteps = [
  {
    step: '1',
    title: 'Discovery & Assessment',
    duration: '1–2 Weeks',
    body: 'Evaluate business needs, feasibility, and data readiness.',
  },
  {
    step: '2',
    title: 'Strategy & Design',
    duration: '1–2 Weeks',
    body: 'Define architecture, roadmap, and ROI targets.',
  },
  {
    step: '3',
    title: 'Build & Iterate',
    duration: '4–12 Weeks',
    body: 'Agile development with continuous testing and improvements.',
  },
  {
    step: '4',
    title: 'Deploy & Optimize',
    duration: 'Ongoing',
    body: 'Production deployment with continuous optimization.',
  },
];

const techStackGroups = [
  {
    title: 'Foundation models',
    description: 'Commercial and open models chosen for your accuracy, cost, and latency profile.',
    items: ['OpenAI', 'Claude AI', 'Google Gemini', 'Meta Llama'],
    Icon: Brain,
  },
  {
    title: 'Orchestration & agents',
    description: 'Graphs, multi-agent coordination, and tool use for reliable production workflows.',
    items: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen'],
    Icon: Layers,
  },
  {
    title: 'Voice & conversational UX',
    description: 'Realtime voice, telephony, and rich conversational experiences your users expect.',
    items: ['Vapi', 'ElevenLabs', 'Twilio'],
    Icon: Mic2,
  },
  {
    title: 'ML, vectors & engineering',
    description: 'Retrieval, training stacks, and the runtime muscle behind inference at scale.',
    items: ['Pinecone', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Python'],
    Icon: Database,
  },
];

const clientQuotes = [
  'Multi-agent platform delivered ROI within the first month.',
  'Feasibility-first approach saved us from a wrong investment.',
  'Every decision tied to business outcomes.',
];

const faqs = [
  {
    question: 'What AI development services does Zynex Technologies offer in Melbourne?',
    answer:
      'Zynex Technologies offers end-to-end AI development services in Melbourne including custom AI system design, multi-agent development, machine learning model deployment, AI feasibility assessments, voice agent development, and post-launch optimisation. Every solution is built to deliver measurable business outcomes.',
  },
  {
    question: 'How long does it take to deploy a custom AI solution in Melbourne?',
    answer:
      'Most projects go from discovery to production in 6 to 12 weeks. Discovery and strategy take 1 to 4 weeks, and build-and-deploy sprints run 4 to 12 weeks depending on complexity. We provide a clear milestone roadmap before any development begins so you always know what to expect.',
  },
  {
    question: 'How much does AI development cost for a Melbourne business?',
    answer:
      'Costs vary by project scope and complexity. Every engagement begins with a feasibility assessment that includes ROI modelling, so you understand the investment and projected return before committing to full development. Contact us for a scoped, transparent quote tailored to your goals.',
  },
  {
    question: 'Does Zynex Technologies build AI solutions for small and mid-sized Melbourne businesses?',
    answer:
      'Yes. Zynex works with businesses of all sizes across Melbourne. Our feasibility-first approach ensures solutions are scoped to your budget, data readiness, and growth stage. Whether you are a scaling startup or an established enterprise, we build what makes sense for your situation.',
  },
  {
    question: 'What industries does Zynex Technologies serve in Melbourne?',
    answer:
      "We serve Melbourne businesses across professional services, legal, finance, recruitment, healthcare, and operations-heavy industries. Every solution is customised to each sector's compliance requirements, data structure, and specific workflow challenges.",
  },
];

const brandGreen = '#719334';

const AiDevelopmentCompanyMelbourne = () => {
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
    title: 'Top AI Development Company in Melbourne | Zynex Technologies',
    description:
      "Zynex Technologies is Melbourne's trusted AI development company. We build custom AI solutions with measurable ROI, from strategy to deployment in weeks. Get a free consultation.",
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
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-6 border"
                style={{
                  backgroundColor: 'rgba(113, 147, 52, 0.1)',
                  borderColor: 'rgba(113, 147, 52, 0.35)',
                  color: brandGreen,
                }}
              >
                AI Development Company in Melbourne
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-heading font-extrabold text-foreground mb-5 sm:mb-6 leading-tight tracking-tight">
                AI Development Company in{' '}
                <span className="text-[#719334]">Melbourne</span> Built to Deliver Real Results
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Zynex Technologies partners with Melbourne businesses to design, validate, and deploy custom AI solutions with measurable ROI. From strategy to production in weeks, not years.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]"
                  style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
                >
                  Book a Free Consultation
                  <span aria-hidden>→</span>
                </button>
                <Link
                  href="/what-is-zynex"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold border-2 w-full sm:w-auto min-h-[48px] transition-all hover:-translate-y-0.5"
                  style={{ borderColor: 'rgba(113, 147, 52, 0.55)', color: brandGreen }}
                >
                  Learn More About Zynex
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={bg2} alt="AI development company Melbourne" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(113,147,52,0.25), rgba(0,0,0,0.15))' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proven results */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-8 sm:mb-10 text-center">
            Proven Results for Melbourne Businesses
          </h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto"
          >
            {provenStats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                className="bg-[#fefdfb] border rounded-xl p-4 sm:p-5 text-center"
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

      {/* Challenges */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-[#fefdfb]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Why Melbourne Businesses Struggle With AI Adoption
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Many businesses understand AI&apos;s potential but struggle to move beyond experimentation.
            </p>
            <p className="text-sm sm:text-base font-semibold text-foreground mt-6">Common Challenges:</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {challenges.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm"
                style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom AI + ROI */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Custom AI Development in Melbourne With Clear ROI
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Zynex Technologies is an AI development company in Melbourne focused on delivering production-ready systems.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              We validate feasibility before development begins, so you know:
            </p>
            <ul className="space-y-4">
              {validationPoints.map((v) => (
                <li key={v.label} className="flex gap-3">
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: brandGreen }}
                  />
                  <div>
                    <span className="font-heading font-bold text-foreground">{v.label}</span>
                    <span className="text-muted-foreground"> — {v.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-8">
              From machine learning models to multi-agent systems, every solution is built for real business use.
            </p>
          </motion.div>
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
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Our AI Development Services in Melbourne
            </h2>
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
              View AI services & solutions
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mb-3 text-center">
            Our AI Development Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border p-5 sm:p-6 bg-[#fefdfb]"
                style={{ borderColor: 'rgba(113, 147, 52, 0.35)' }}
              >
                <span className="text-sm font-bold text-[#719334]">
                  {step.step}. {step.title}
                </span>
                <p className="text-xs text-[#719334]/90 font-medium mt-1 mb-3">{step.duration}</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
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
                AI technology stack we use
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We match the stack to each Melbourne engagement—models, orchestration, voice, and ML infrastructure—so
                nothing is forced into a one-size-fits-all toolchain.
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
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-2">
              Trusted by Businesses Across Australia
            </h2>
            <p className="text-base font-semibold text-[#719334]">Client Results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {clientQuotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border p-5 sm:p-6 bg-gradient-to-br from-white to-[#f0fdf4]/25 text-center"
                style={{ borderColor: 'rgba(113, 147, 52, 0.25)' }}
              >
                <p className="text-sm sm:text-base text-foreground leading-relaxed">&ldquo;{quote}&rdquo;</p>
              </motion.div>
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
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              Common questions about AI development in Melbourne
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
                Ready to{' '}
                <span className="bg-gradient-to-r from-[#719334] to-emerald-600 bg-clip-text text-transparent">
                  validate your next AI initiative?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Book a free consultation with our Melbourne-focused team—we&apos;ll help you scope ROI, feasibility, and a
                realistic path to production.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg w-full sm:w-auto min-h-[44px] hover:shadow-[0_12px_35px_rgba(113,147,52,0.45)]"
                  style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
                >
                  <span>Book a Free Consultation</span>
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
                  <span className="font-medium">ROI & feasibility clarity</span>
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

      <RelatedLocationPages currentSlug="melbourne" />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AiDevelopmentCompanyMelbourne;

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
  Check,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedLocationPages from '../../components/RelatedLocationPages';
import { useSeo } from '../../hooks/useSeo';

const bg2 = '/AIdevSydney.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const heroStats = [
  { metric: '95%', label: 'Client satisfaction rate' },
  { metric: '3x', label: 'Average ROI delivered' },
  { metric: '6 to 12 weeks', label: 'Typical time to production' },
  { metric: '24/7', label: 'Production support' },
];

const builtFor = [
  'Professional services firms in the CBD drowning in document review',
  'Financial services and fintech teams in Barangaroo and Martin Place',
  'Healthcare clinics and allied health groups across Greater Sydney',
  'Logistics and supply chain operators around Port Botany and Western Sydney',
  'Property, construction and real estate groups',
  'Retail and ecommerce brands scaling customer support',
  'SaaS and technology companies embedding AI into their product',
];

const adoptionStats = [
  { metric: '40%', label: 'of Australian SMEs are adopting AI, up five points in a single quarter', source: 'National AI Centre and Fifth Quadrant, Oct to Dec 2024' },
  { metric: '34%', label: 'AI adoption in metro NSW, against 18% in regional NSW', source: 'National AI Centre and Fifth Quadrant, Oct to Dec 2024' },
  { metric: '21%', label: 'of businesses say they do not know how to apply AI at all', source: 'National AI Centre and Fifth Quadrant, Oct to Dec 2024' },
  { metric: '$54B', label: 'contributed to the NSW economy by the tech sector in the past year', source: "ACS Australia's Digital Pulse, October 2025" },
];

const painPoints = [
  {
    title: 'The pilot never had a number attached to it',
    description:
      'Teams build a proof of concept to see what AI can do, not to solve a costed problem. When the demo ends there is nothing to justify a budget, so the project quietly dies.',
  },
  {
    title: 'The AI never touched the systems that matter',
    description:
      'A chatbot that cannot read your CRM, your ERP or your document store is a toy. Real value comes from AI that has permission to act inside the systems your team already lives in.',
  },
  {
    title: 'Nobody owned it after launch',
    description:
      'Models drift. Prompts break. Data changes. Without monitoring and a support agreement, accuracy degrades within months and trust evaporates faster than that.',
  },
  {
    title: 'Compliance was an afterthought',
    description:
      'Australian Privacy Principles, data residency and client confidentiality obligations are not optional for Sydney firms in finance, law or health. Retrofitting governance costs more than designing for it.',
  },
];

const keyBenefits = [
  {
    title: 'Feasibility comes before features',
    body: 'We assess whether AI is the right answer, model the return and tell you plainly when it is not before quoting a build.',
    Icon: LineChart,
  },
  {
    title: 'Custom AI Development in Sydney',
    body: 'Purpose-built machine learning models, generative AI applications, automation pipelines and internal tools designed around your data and workflow.',
    Icon: Cpu,
  },
  {
    title: 'Australian compliance from day one',
    body: 'Australian Privacy Principles, data residency, audit trails and role-based access are designed in, not bolted on.',
    Icon: Shield,
  },
  {
    title: 'End-to-End AI Integration Services',
    body: 'We connect AI systems to Salesforce, HubSpot, Odoo, NetSuite, Xero, Microsoft 365, Slack and custom systems.',
    Icon: Link2,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery and AI Feasibility Assessment',
    duration: '1 to 2 weeks',
    description: 'We map the workflow, audit your data, size the opportunity in dollars and stress test whether AI is the right tool. The output is a feasibility report with a recommendation.',
  },
  {
    step: '02',
    title: 'AI Strategy and Architecture Design',
    duration: '1 to 2 weeks',
    description: 'We define model selection, system architecture, integration points, security and governance, then agree a fixed scope and price before build begins.',
  },
  {
    step: '03',
    title: 'Agile Build and Iterative Testing',
    duration: '4 to 12 weeks',
    description: 'Two-week sprints produce a working demo each cycle. Accuracy is measured against the agreed baseline and evaluation runs are shared with you.',
  },
  {
    step: '04',
    title: 'Deploy, Integrate and Continuously Optimise',
    duration: 'Ongoing',
    description: 'We deploy into your environment, enable your staff, provide monitoring dashboards and 24/7 support, and track drift on a retraining schedule.',
  },
];

const services = [
  {
    title: 'Custom AI Development',
    description:
      'Purpose-built machine learning models, generative AI applications, automation pipelines and internal tools designed around your data and workflow. You own the code and the models.',
    Icon: Sparkles,
  },
  {
    title: 'Multi-Agent AI Systems and AI Agents',
    description:
      'Specialised agents that plan, delegate and verify each other’s work for research, reconciliation, claims triage and complex multi-step workflows.',
    Icon: Bot,
  },
  {
    title: 'Natural Language Processing',
    description:
      'NLP for contract review, invoice extraction, clinical note summarisation, sentiment analysis and support ticket routing, built for Australian document formats and English.',
    Icon: MessageSquare,
  },
  {
    title: 'AI Strategy Consulting in Sydney',
    description:
      'A costed AI roadmap with ROI projections, prioritised use cases, a data readiness assessment and a build-or-buy recommendation for each.',
    Icon: LineChart,
  },
  {
    title: 'AI Integration Services',
    description:
      'Connect models to Salesforce, HubSpot, Odoo, NetSuite, Xero, Microsoft 365, Slack and custom systems with role-based access and audit logging.',
    Icon: Wrench,
  },
  {
    title: 'Machine Learning Model Development',
    description:
      'Forecasting, churn prediction, demand planning, recommendation engines and anomaly detection, trained on your data and evaluated against an agreed baseline.',
    Icon: Cpu,
  },
];

const techStackGroups = [
  {
    title: 'Foundation models',
    description: 'Models selected for accuracy, cost, latency and data residency.',
    items: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'Meta Llama'],
    Icon: Brain,
  },
  {
    title: 'Orchestration & agents',
    description: 'Multi-step workflows, tool use, and agent coordination.',
    items: ['LangChain', 'LangGraph', 'CrewAI', 'AutoGen'],
    Icon: Layers,
  },
  {
    title: 'ML, vectors & analytics',
    description: 'Training, inference, and retrieval that scale in production.',
    items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pinecone', 'pgvector'],
    Icon: Database,
  },
  {
    title: 'Voice & conversational UX',
    description: 'Speech, telephony, and realtime customer experiences.',
    items: ['Vapi', 'ElevenLabs', 'Twilio'],
    Icon: Mic2,
  },
  {
    title: 'Deployment & data',
    description: 'Australian cloud regions or your own infrastructure.',
    items: ['AWS Sydney', 'Azure Australia East', 'Google Cloud Sydney', 'Docker', 'Kubernetes'],
    Icon: Database,
  },
];

const differentiators = [
  { title: 'We tell you when not to build.', body: 'Feasibility comes before scope. If the numbers do not work, you get that in writing in week two, not after the invoice.' },
  { title: 'Strategy and engineering are the same team.', body: 'No handover from a consulting deck to an offshore build team. The person who scoped it is accountable for shipping it.' },
  { title: 'You own everything.', body: 'Source code, model weights where applicable, prompts, evaluation sets and documentation. No platform lock-in and no per-seat licence.' },
  { title: 'Built for Australian compliance from day one.', body: 'Australian Privacy Principles, Sydney-region data residency, audit trails and role-based access are designed in, not bolted on.' },
  { title: 'We integrate with what you already run.', body: 'CRM, ERP, finance, communications and custom internal systems. AI that cannot reach your data does not change your numbers.' },
  { title: 'Support does not end at handover.', body: '24/7 production support, drift monitoring and scheduled retraining. Accuracy is a maintained property, not a launch-day claim.' },
];

const industries = [
  { title: 'AI for healthcare clinics', href: 'https://zynextechnologies.com.au/ai-solution-healthcare-clinics-australia' },
  { title: 'AI for legal firms', href: 'https://zynextechnologies.com.au/ai-development-company-legal-firms-australia' },
  { title: 'AI for real estate', href: 'https://zynextechnologies.com.au/ai-development-company-for-real-estate-australia' },
  { title: 'AI for construction', href: 'https://zynextechnologies.com.au/ai-development-company-construction-businesses-australia' },
  { title: 'AI for hospitality', href: 'https://zynextechnologies.com.au/ai-solution-hospitality-businesses-australia' },
  { title: 'AI for small business', href: 'https://zynextechnologies.com.au/ai-development-for-small-businesses-australia' },
];

const socialMetrics = [
  { metric: '9 weeks', label: 'Kickoff to production on a multi-agent deployment' },
  { metric: '3x', label: 'Average return on AI investment across delivered projects' },
  { metric: '95%', label: 'Client satisfaction rate' },
  { metric: '24/7', label: 'Production support' },
];

const testimonials = [
  {
    quote:
      'Their feasibility process saved us months of wasted spend. We came in wanting a chatbot and left with a document pipeline that was worth ten times more.',
    role: 'Chief Operating Officer, professional services firm, Sydney',
  },
  {
    quote:
      'The multi-agent system went live in nine weeks and now handles the reconciliation work that used to take two people a full day each week.',
    role: 'Head of Operations, financial services, Sydney',
  },
];

const faqs = [
  {
    question: 'What makes Zynex a leading AI development company in Sydney?',
    answer:
      'Zynex runs a paid feasibility assessment before any build, so you know the projected return before you commit budget. Strategy and engineering sit in the same team, which removes the handover gap that kills most AI projects. Clients report a 3x average return and a 95% satisfaction rate.',
  },
  {
    question: 'How long does custom AI development take in Sydney?',
    answer:
      'Most Zynex projects reach production in 6 to 12 weeks. Discovery and feasibility take 1 to 2 weeks, architecture design another 1 to 2 weeks, and the agile build runs 4 to 12 weeks depending on integration complexity. You see a working demo every two weeks.',
  },
  {
    question: 'How much does AI development cost for a Sydney business?',
    answer:
      'Cost depends on scope, data readiness and how many systems the AI needs to touch. Every engagement starts with a feasibility assessment that produces a fixed price for the build and a modelled ROI, so you approve a number rather than an estimate.',
  },
  {
    question: 'Can Zynex integrate AI into our existing CRM and ERP?',
    answer:
      'Yes. AI integration services cover Salesforce, HubSpot, Odoo, NetSuite, Xero, Microsoft 365 and custom internal systems. Integrations include role-based access control, audit logging and Australian data residency where your compliance obligations require it. Every integration point is mapped during architecture design, before the build starts, so nothing surfaces late.',
  },
  {
    question: 'What are multi-agent AI systems and does my business need one?',
    answer:
      'Multi-agent AI systems split a complex process across specialised agents that plan, execute and check each other. They suit workflows with many steps and exceptions, such as claims triage or reconciliation. For a single, well-defined task, a simpler model is usually cheaper and more reliable.',
  },
  {
    question: 'Do you keep our data in Australia?',
    answer:
      'Yes, where required. Zynex deploys into AWS Sydney, Azure Australia East or Google Cloud Sydney regions, or into your own infrastructure. Architecture is designed around the Australian Privacy Principles and your sector’s confidentiality obligations from the first design session, rather than being retrofitted once the system is already running.',
  },
  {
    question: 'What support do we get after the AI system goes live?',
    answer:
      'Every production deployment includes 24/7 support, monitoring dashboards, model drift detection and scheduled retraining. Accuracy is tracked against the baseline agreed during architecture design, and you receive a performance report rather than a status update. Support terms are written into the engagement, not sold to you separately after launch.',
  },
  {
    question: 'Do we own the AI system Zynex builds?',
    answer:
      'Yes. You own the source code, prompts, evaluation sets, fine-tuned model artefacts and documentation. There is no platform licence and no per-seat fee on a system you paid to have built. If you later move the work in house or to another partner, nothing sits locked behind a Zynex account.',
  },
  {
    question: 'Do you offer AI consulting in Sydney, or only development?',
    answer:
      'Both. AI consulting in Sydney is available as a standalone engagement covering feasibility, data readiness and a costed roadmap, with no obligation to build with us. Most clients continue into development afterwards, but the consulting deliverable stands on its own and is yours to take anywhere.',
  },
];

const brandGreen = '#719334';

const AiDevelopmentCompanySydney = () => {
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
    title: 'AI Development Company Sydney | Zynex Technologies',
    description:
      'Zynex is an AI development company in Sydney building custom AI systems, AI agents and integrations. Validated first, live in 6 to 12 weeks. Book a free call.',
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
                AI DEVELOPMENT COMPANY IN SYDNEY
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-foreground mb-5 sm:mb-6 leading-tight tracking-tight">
                AI Development Company in Sydney That Ships{' '}
                <span className="text-[#719334]">Working Systems</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Zynex builds custom AI systems for Sydney businesses that need results, not pilots. We validate the
                business case before a single line of code is written, then deploy in 6 to 12 weeks.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]"
                  style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
                >
                  Book a Free AI Strategy Session
                  <span aria-hidden>→</span>
                </button>
                <Link
                  href="/custom-ai-development"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold border-2 w-full sm:w-auto min-h-[48px] transition-all hover:-translate-y-0.5"
                  style={{ borderColor: 'rgba(113, 147, 52, 0.55)', color: brandGreen }}
                >
                  Explore AI Services
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by professional services, financial services, healthcare and logistics teams across NSW.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={bg2} alt="Zynex Technologies AI development team building a custom AI system for a Sydney business" className="w-full h-full object-cover" />
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-4 lg:mt-0"
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

      {/* Built for */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#fefdfb]">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">Built for Sydney businesses</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">Who We Build AI for in Sydney</h2>
            <p className="text-base sm:text-lg text-muted-foreground">We work with operations leaders who already know where the bottleneck is and need someone who can actually build the fix.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {builtFor.map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="flex gap-3 rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.22)' }}><Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#719334]" /><p className="text-sm sm:text-base text-foreground leading-relaxed">{item}</p></motion.div>)}
          </div>
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
              Why Sydney Businesses Stall on AI Adoption
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Sydney has more technology jobs than any other city in Australia, and NSW businesses are among the fastest adopters of AI in the country. That has not made AI projects easier. Most stall at a promising pilot because there is no clear business case, integration plan or owner after launch.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
            {adoptionStats.map((stat) => <motion.div key={stat.metric} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border bg-[#fefdfb] p-4 sm:p-5" style={{ borderColor: 'rgba(113, 147, 52, 0.3)' }}><p className="text-2xl sm:text-3xl font-heading font-extrabold text-[#719334]">{stat.metric}</p><p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground">{stat.label}</p><p className="mt-3 text-[10px] sm:text-xs leading-relaxed text-muted-foreground">{stat.source}</p></motion.div>)}
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-center mb-7">The Four Things That Actually Go Wrong</h3>
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
              Custom AI Development Built Around a Business Case, Not a Demo
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Zynex is an AI development company Sydney businesses call when a pilot has to become a production system. We start with feasibility, not features. Before we quote a build, we assess whether AI is the right answer, model the return and tell you plainly when it is not. Roughly one in five projects we assess should not be built as originally scoped. Strategy and delivery sit under one roof, so the people who scope the work are the people who ship it.
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
          <blockquote className="mt-8 rounded-2xl border-l-4 border-[#719334] bg-[#eef4e3] p-6 sm:p-7 text-base sm:text-lg leading-relaxed text-foreground">
            &ldquo;Their feasibility process saved us months of wasted spend. They told us what not to build before they told us what to build.&rdquo;
            <footer className="mt-4 text-sm font-medium text-muted-foreground">Chief Operating Officer, Sydney professional services firm</footer>
          </blockquote>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mb-8 sm:mb-10 text-center">
            How a Sydney AI Development Project Runs
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
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{step.description}</p>
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
              AI Development Services for Sydney Businesses
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Six service lines, all delivered by the same in-house team. Most engagements combine two or three.
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
                {title === 'Custom AI Development' && <Link href="/custom-ai-development" className="inline-flex mt-4 text-sm font-semibold text-[#719334] hover:underline">Custom AI development →</Link>}
                {title === 'AI Strategy Consulting in Sydney' && <Link href="/strategy-report" className="inline-flex mt-4 text-sm font-semibold text-[#719334] hover:underline">AI strategy consulting →</Link>}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/custom-ai-development"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#719334] hover:underline underline-offset-4"
            >
              Explore all AI services
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
                The AI Technology Stack We Build On
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We are not tied to one vendor. Model choice is a per-project decision based on accuracy, cost, latency and where the data is allowed to sit.
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
            <p className="mt-7 rounded-2xl border-l-4 border-[#719334] bg-[#eef4e3] p-5 text-sm sm:text-base text-foreground leading-relaxed">
              Where Australian data residency is required, we deploy into Sydney-based cloud regions or your own infrastructure. Secure <Link href="/odoo-erp-development-company-australia" className="font-semibold text-[#719334] underline underline-offset-4">ERP integration</Link> is available for connected operational workflows.
            </p>
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
              Why Sydney Businesses Choose Zynex Over Generic AI Vendors
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Feasibility comes first, strategy and engineering stay together, and you own the resulting system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-14">
            {differentiators.map((item, index) => <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.05 }} className="rounded-2xl border bg-[#fefdfb] p-5 sm:p-6" style={{ borderColor: 'rgba(113, 147, 52, 0.22)' }}><h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3><p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{item.body}</p></motion.div>)}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">Results</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">What Sydney Clients Say</h2>
          </div>
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

      {/* Industries */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#fefdfb]">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">Industries</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">AI Solutions Across Industries</h2>
            <p className="text-base sm:text-lg text-muted-foreground">Sydney businesses in these sectors work with Zynex on industry-specific AI builds.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {industries.map((industry, index) => <motion.div key={industry.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.05 }}><Link href={industry.href} className="group flex h-full items-center justify-between gap-4 rounded-2xl border bg-white p-5 sm:p-6 font-heading font-bold text-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-[#719334] hover:text-[#719334] hover:shadow-md"><span>{industry.title}</span><span aria-hidden className="transition-transform group-hover:translate-x-1">→</span></Link></motion.div>)}
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
              Practical answers about AI development services in Sydney
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
                Ready to Build{' '}
                <span className="bg-gradient-to-r from-[#719334] to-emerald-600 bg-clip-text text-transparent">
                  AI That Actually Works?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Book a free strategy session to validate the opportunity, model the return and define the fastest route to a production AI system.
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

      <RelatedLocationPages currentSlug="sydney" />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AiDevelopmentCompanySydney;

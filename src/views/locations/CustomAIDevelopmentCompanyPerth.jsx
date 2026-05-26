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

const bg2 = '/perth.jpeg';

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
  { metric: '6-12', label: 'Weeks to Deployment' },
  { metric: '24/7', label: 'Production Support' },
];

const painPoints = [
  {
    title: 'AI Hype Without Substance',
    description:
      "Agencies promise AI transformation but deliver off-the-shelf chatbots that don't fit your workflows or KPIs.",
  },
  {
    title: 'Projects That Drag On for Months',
    description:
      'Traditional software firms scope, redesign, and delay while competitors who ship faster gain market advantage.',
  },
  {
    title: 'Investment With Uncertain Returns',
    description:
      "Building AI without validating ROI first means expensive re-work when the solution doesn't fit the real problem.",
  },
  {
    title: 'Security and Compliance Gaps',
    description:
      'Enterprise AI must meet Australian compliance and data privacy requirements. Overlooking these creates significant operational risk.',
  },
];

const services = [
  {
    title: 'Chatbot Development Services',
    description:
      'Custom NLP-powered chatbots for customer support, lead qualification, and internal knowledge management. Built on OpenAI, Claude, and Gemini for accuracy Perth businesses rely on.',
  },
  {
    title: 'Computer Vision Development',
    description:
      'Purpose-built vision systems for quality control, object detection, and automated inspection. Our computer vision development company experience spans manufacturing, logistics, and retail.',
  },
  {
    title: 'Agentic AI Development',
    description:
      'Enterprise-grade autonomous AI agents that plan, reason, and execute complex workflows without constant human oversight. As a specialist agentic AI development company, we build on LangChain, CrewAI, and AutoGen.',
  },
  {
    title: 'AI Search and Recommendation Engines',
    description:
      'As an experienced engine development company, we build semantic search engines, product recommendation pipelines, and intelligent retrieval systems powered by vector databases including Pinecone.',
  },
  {
    title: 'Machine Learning Model Development',
    description:
      'Predictive analytics, classification models, and recommendation engines built with TensorFlow, PyTorch, and Scikit-Learn, trained on your data and tuned for your outcomes.',
  },
  {
    title: 'AI Integration Services',
    description:
      'Seamlessly connect AI capabilities to your existing CRM, ERP, and communication systems. Every integration is built with enterprise-grade security and long-term scalability for Perth operations.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery and AI Feasibility (1-2 Weeks)',
    body: 'We quantify ROI potential and data readiness before any code is written.',
  },
  {
    step: '02',
    title: 'AI Strategy and Architecture (1-2 Weeks)',
    body: 'A clear technical blueprint aligned to your business goals and infrastructure.',
  },
  {
    step: '03',
    title: 'Agile Build and Testing (4-12 Weeks)',
    body: 'Iterative sprints with regular stakeholder checkpoints and quality gates.',
  },
  {
    step: '04',
    title: 'Deploy, Integrate and Optimise (Ongoing)',
    body: 'Production deployment with 24/7 support and continuous performance improvement.',
  },
];

const testimonials = [
  {
    quote:
      "\"Zynex didn't just build us an AI tool. They helped us understand exactly where AI would move the needle. The feasibility process alone saved us months of wasted spend.\"",
    role: '- Chief Operating Officer, Sydney-based Professional Services Firm',
  },
  {
    quote:
      '"From our first discovery session to going live, the entire project took 9 weeks. The multi-agent system they built handles what used to take our team two full days, every single day."',
    role: '- Head of Operations, Australian Financial Services Company',
  },
];

const techStackGroups = [
  {
    title: 'Foundation Models',
    items: ['OpenAI GPT', 'Claude AI', 'Google Gemini', 'Meta Llama'],
  },
  {
    title: 'Agents and Orchestration',
    items: ['LangChain', 'CrewAI', 'AutoGen'],
  },
  {
    title: 'ML, Vectors and Analytics',
    items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pinecone'],
  },
  {
    title: 'Voice and Conversational UX',
    items: ['Vapi', 'ElevenLabs'],
  },
];

const faqs = [
  {
    question:
      'Q1: What makes Zynex Technologies the best custom AI development company in Perth?',
    answer:
      "Zynex validates AI feasibility and models your ROI before writing a single line of code. Our approach ensures Perth businesses only invest in solutions with a clear path to return. Our 95% client satisfaction rate and average 3x ROI distinguish us from generic agencies.",
  },
  {
    question: 'Q2: Does Zynex offer chatbot development services for Perth businesses?',
    answer:
      'Yes. Our chatbot development services cover intelligent NLP-powered bots for customer support, lead qualification, internal knowledge management, and conversational commerce. We build on OpenAI, Claude, and Gemini platforms tailored to your specific workflows.',
  },
  {
    question: 'Q3: Can Zynex develop computer vision solutions for Perth industries?',
    answer:
      'Absolutely. As an experienced computer vision development company, Zynex builds bespoke vision systems for quality assurance, object detection, automated inspection, and safety monitoring across manufacturing, logistics, retail, and construction sectors.',
  },
  {
    question: 'Q4: What is agentic AI and can Zynex build it for my Perth business?',
    answer:
      'Agentic AI refers to autonomous AI agents that plan, reason, and execute multi-step tasks independently. As a specialist agentic AI development company, Zynex builds enterprise-grade agent systems using LangChain, CrewAI, and AutoGen to automate complex workflows.',
  },
  {
    question: 'Q5: Does Zynex build AI search and recommendation engine systems?',
    answer:
      'Yes. As a capable engine development company for AI-powered search and discovery, we build semantic search engines, product recommendation pipelines, and intelligent retrieval systems backed by vector databases including Pinecone.',
  },
];

const brandGreen = '#719334';

const CustomAIDevelopmentCompanyPerth = () => {
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
    title: 'Custom AI Development Company in Perth | Zynex Technologies',
    description:
      "Zynex Technologies is Perth's leading custom AI development company. Chatbot, computer vision, agentic AI and more. Deploy in 6-12 weeks. Get a free strategy session.",
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-foreground mb-5 sm:mb-6 leading-tight tracking-tight">
                Custom AI Development Company in Perth That Delivers Real ROI
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Zynex Technologies is Perth&apos;s specialist custom AI development company. From chatbot development
                services to computer vision and agentic AI systems, we validate ROI before writing a single line of
                code and deploy in as little as 6 weeks.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]"
                  style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
                >
                  Book a Free AI Strategy Session
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
              <img src={bg2} alt="AI development company perth" className="w-full h-full object-cover" />
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
        </div>
      </section>

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
              Why Most AI Projects in Perth Fail Before Launch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Perth businesses are investing in AI but too often receive generic tools that don&apos;t move the needle.
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
              AI Development Services for Perth Businesses
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              From intelligent chatbots to computer vision and autonomous AI agents, we cover the full AI development
              lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm"
                style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}
              >
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Our Proven AI Development Process
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We validate before we build. Every Perth project starts with a clear-eyed feasibility assessment.
            </p>
          </motion.div>

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
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              What Australian Businesses Say About Zynex
            </h2>
          </motion.div>

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
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">{t.quote}</p>
                <footer className="text-xs sm:text-sm text-muted-foreground font-medium not-italic border-t border-gray-100 pt-4">
                  {t.role}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

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
              AI Technology Stack We Deploy for Perth Clients
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {techStackGroups.map((g, idx) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ borderColor: 'rgba(113, 147, 52, 0.22)' }}
              >
                <h3 className="font-heading font-bold text-base sm:text-lg text-foreground leading-snug mb-3">
                  {g.title}
                </h3>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm sm:text-base text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0fdf4] via-emerald-50/90 to-[#ecfdf5] relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions from Perth businesses exploring custom AI development.
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


      <RelatedLocationPages currentSlug="perth" />

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="relative bg-white/90 backdrop-blur-xl border border-border/30 rounded-3xl overflow-hidden shadow-lg p-8 lg:p-12"
          >
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                Ready to Build AI That Actually Works in Perth?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Join Australian businesses already transforming their operations with Zynex&apos;s custom AI development.
                Proven ROI, fast deployment, and 24/7 support.
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-2 text-sm sm:text-base text-muted-foreground mb-8">
                <li>• Feasibility-first approach</li>
                <li>• Free consultation available</li>
                <li>• 6-week deployment possible</li>
                <li>• 24/7 production support</li>
              </ul>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 text-white px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg w-full sm:w-auto min-h-[44px]"
                style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
              >
                Book a Free AI Strategy Session
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default CustomAIDevelopmentCompanyPerth;


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

const bg2 = '/DarwinAI.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const heroStats = [
  { metric: '95%', label: 'Success Rate on Deployed Projects' },
  { metric: '3 to 6 weeks', label: 'Average Time to Deployment' },
  { metric: '3x ROI', label: 'Average Return in Year One' },
  { metric: '24/7', label: 'Post-Launch Support' },
];

const challenges = [
  {
    title: 'Generic Tools That Do Not Fit',
    description:
      'Ready-made AI products rarely match the way your business actually works. You end up adapting your processes to the software, not the other way around.',
  },
  {
    title: 'No Clarity on Feasibility or ROI',
    description:
      'Starting an AI project without a proper AI feasibility analysis leads to wasted budgets and projects that stall before they deliver value.',
  },
  {
    title: 'Integration Complexity',
    description:
      'Connecting new AI systems to existing databases, tools, and workflows is technically challenging and often overlooked by vendors who treat it as an afterthought.',
  },
];

const services = [
  {
    id: '01',
    title: 'Custom AI Development',
    description:
      'We design and build AI applications tailored to your specific business workflows, data, and goals. Every system we deliver is built from the ground up, not adapted from a template.',
  },
  {
    id: '02',
    title: 'AI Automation Company Services',
    description:
      'As a trusted AI automation company in Australia, we automate repetitive tasks, approval workflows, data processing, and customer interactions so your team can focus on higher-value work.',
  },
  {
    id: '03',
    title: 'Machine Learning Development',
    description:
      'We build and train predictive models for classification, regression, forecasting, and anomaly detection. Our ML solutions are trained on your data and optimised for your specific use case.',
  },
  {
    id: '04',
    title: 'AI Feasibility Analysis',
    description:
      'Before any development begins, we conduct a structured AI feasibility analysis for Australian businesses. This covers data readiness, technical viability, expected ROI, and project timeline to ensure every investment is well-grounded.',
  },
  {
    id: '05',
    title: 'AI Chatbot Development',
    description:
      'We develop intelligent conversational AI systems that handle customer support, internal queries, and lead qualification with natural language understanding and accurate multi-turn responses.',
  },
  {
    id: '06',
    title: 'Computer Vision Systems',
    description:
      'We build visual AI systems for quality control, object detection, automated inspection, and image classification across manufacturing, retail, healthcare, and logistics sectors.',
  },
];

const methodology = [
  {
    step: 'Step 01',
    title: 'Discovery and Feasibility',
    description:
      'We assess your business challenge, review your data, and complete a detailed AI feasibility analysis before a single line of code is written.',
  },
  {
    step: 'Step 02',
    title: 'Strategy and Architecture',
    description:
      'We design a custom AI architecture and implementation roadmap with clear milestones, so you always know what is being built and why.',
  },
  {
    step: 'Step 03',
    title: 'Build and Iterate',
    description:
      'Our engineers build your solution using agile sprints with continuous testing, validation, and refinement against real business requirements.',
  },
  {
    step: 'Step 04',
    title: 'Deploy and Optimise',
    description:
      'We deploy to production, integrate with your existing systems, train your team, and provide ongoing optimisation and 24/7 support.',
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
    question: 'Q. What does a trusted AI development company in Darwin do?',
    answer:
      'A. A trusted AI development company in Darwin designs and builds custom AI systems for local businesses. Services typically include AI automation, machine learning model development, AI chatbots, computer vision, and AI feasibility analysis to help businesses operate more efficiently and make data-driven decisions.',
  },
  {
    question: 'Q. How does an AI automation company in Australia approach a new project?',
    answer:
      'A. Most AI automation companies in Australia begin with a discovery and feasibility stage. This involves understanding your business goals, reviewing your data, and assessing whether AI is the right fit before any development starts. Zynex Technologies follows this feasibility-first approach to reduce risk and maximise ROI.',
  },
  {
    question: 'Q. What is an AI feasibility analysis and why does it matter?',
    answer:
      'A. An AI feasibility analysis evaluates whether an AI solution is technically and commercially viable for your business. It examines your data readiness, potential ROI, integration requirements, and expected timeline. Completing a feasibility analysis before development prevents wasted investment and ensures the right solution is built.',
  },
  {
    question: 'Q. Can Darwin businesses use an AI automation company for small-scale projects?',
    answer:
      'A. Yes. AI automation is not limited to large enterprises. Darwin businesses of any size can use automation to reduce repetitive tasks, improve customer support, and free up staff for higher-value work. The right AI automation company will scope a solution that fits your budget and scale.',
  },
  {
    question: 'Q. How is an AI development company in Darwin different from one based in Sydney or Melbourne?',
    answer:
      'A. Zynex Technologies operates nationally, serving businesses across Darwin, Sydney, Melbourne, Brisbane, and beyond. Our team provides the same level of custom AI development, AI automation, and feasibility analysis regardless of location, with flexible remote and on-site engagement models.',
  },
  {
    question: 'Q. How long does it take to deploy a custom AI solution?',
    answer:
      'A. Deployment timelines depend on project complexity, but Zynex Technologies typically delivers production-ready AI solutions within 3 to 6 weeks for focused projects. Larger, more integrated systems may take 6 to 12 weeks. Every project includes a clear milestone roadmap from day one.',
  },
  {
    question: 'Q. Does Zynex Technologies offer ongoing support after deployment?',
    answer:
      'A. Yes. Zynex Technologies provides 24/7 post-launch support, ongoing model monitoring, and performance optimisation. AI systems require continuous refinement as data changes and business needs evolve, so long-term support is built into every engagement.',
  },
];

const brandGreen = '#719334';

const AIDevelopmentCompanyDarwin = () => {
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
    title: 'AI Development Company in Darwin | Zynex Technologies',
    description:
      'AI development company in Darwin that delivers custom AI systems in 3 to 6 weeks. Get a free feasibility assessment with clear pricing from day one. Start now.',
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

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-foreground mb-5 sm:mb-6 leading-tight tracking-tight">
                Trusted AI Development Company in Darwin
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Zynex Technologies builds custom AI systems, automation tools, and machine learning models for Darwin
                businesses. We take you from feasibility to production in weeks, not years.
              </p>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]"
                style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
              >
                Start now
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={bg2} alt="AI development company Darwin" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full mt-8 sm:mt-10 lg:mt-14"
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
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">THE CHALLENGE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Why Darwin Businesses Struggle to Implement AI
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Most businesses in Darwin know AI can help, but are stuck between generic off-the-shelf software that does not fit their workflows and costly, slow enterprise vendors.
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
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">WHAT WE BUILD</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              AI Development Services for Darwin Businesses
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              From standalone automation tools to end-to-end machine learning platforms, our services are designed to solve real operational problems and deliver measurable outcomes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {services.map((s) => (
              <div key={s.id} className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                <p className="text-sm font-semibold text-[#719334] mb-2">{s.id}</p>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">OUR METHODOLOGY</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              How We Deliver AI Solutions in Darwin
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              A structured, transparent process from discovery to deployment that removes uncertainty and keeps every project on track.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3 text-center">WHY ZYNEX</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4 text-center">
              Why Darwin Businesses Choose Zynex Technologies
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-8">
              We are not a generic software agency or a slide-deck consultancy. We design, build, and operate production-ready AI systems with a focus on measurable business impact.
            </p>
            <ul className="space-y-3">
              {reasons.map((r) => (
                <li key={r} className="text-sm sm:text-base text-muted-foreground leading-relaxed">• {r}</li>
              ))}
            </ul>
          </motion.div>
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
              Zynex Technologies serves businesses across Australia. Whether you are based in Darwin, Sydney, or anywhere else in the country, our team delivers the same standard of custom AI development and automation.
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


      <RelatedLocationPages currentSlug="darwin" />

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white border rounded-3xl shadow-lg p-8 lg:p-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">GET STARTED</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
              Ready to Build Your AI Solution in Darwin?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Start with a free discovery call. We will discuss your challenge, assess feasibility, and outline a clear path forward with complete transparency on timeline, scope, and cost.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-8">
              ✓ No Obligation &nbsp;&nbsp; ✓ Free Feasibility Assessment &nbsp;&nbsp; ✓ Clear Pricing from Day One
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
              style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
            >
              Book a free discovery call
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AIDevelopmentCompanyDarwin;


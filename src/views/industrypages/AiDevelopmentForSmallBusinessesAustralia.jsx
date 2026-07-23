'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  LayoutDashboard,
  Moon,
  Phone,
  RefreshCw,
  Workflow,
  Zap,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedIndustryPages from '../../components/RelatedIndustryPages';
import { useSeo } from '../../hooks/useSeo';

const heroImage = 'ai1.webp';
const brandGreen = '#719334';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const heroStats = [
  {
    value: '67%',
    description: 'of Australian SMBs say they lose productive hours to tasks that could be automated',
    source: 'Deloitte Access Economics',
  },
  {
    value: '76%',
    description: 'of Australian customers say after-hours AI support is the greatest benefit of AI adoption',
    source: 'Australian customer-service benchmarks',
  },
  {
    value: '2–6 wks',
    description: 'Typical deployment window from discovery call to live AI system with Zynex Technologies',
    source: 'Zynex Technologies',
  },
];

const builtForTypes = [
  'Trades and Services',
  'Professional Services',
  'Retail and E-commerce',
  'Healthcare Practices',
  'Hospitality Operators',
  'Education Providers',
];

const problemStats = [
  { value: '63%', description: 'of Australian customers prefer self-service before speaking to a person', source: 'Australian customer-service benchmarks' },
  { value: '58%', description: 'of Australian businesses report measurable benefit from 24/7 AI availability', source: 'Australian customer-service benchmarks' },
  { value: '45%', description: 'report fewer errors and better resolution rates after AI deployment', source: 'Australian customer-service benchmarks' },
  { value: '76%', description: 'of Australian customers cite after-hours AI as the greatest benefit of AI adoption', source: 'Australian customer-service benchmarks' },
];

const services = [
  {
    title: 'AI Phone and Enquiry Agents',
    description:
      'Capture every inbound call, message, and form submission with a trained AI agent that responds instantly, qualifies the lead, and routes it to the right person without a staff member touching it first.',
    Icon: Phone,
  },
  {
    title: 'Workflow Automation',
    description:
      'Replace the repetitive tasks your team handles every day with automated workflows. Quoting, scheduling, follow-up, and reporting, all running without manual intervention from your staff.',
    Icon: Workflow,
  },
  {
    title: 'After-Hours Lead Capture',
    description:
      'Enquiries that arrive outside business hours are captured, responded to, and queued with full context so nothing is missed and no manual chasing is required when your team starts the next day.',
    Icon: Moon,
  },
  {
    title: 'Internal Knowledge Assistant',
    description:
      'Give your team instant access to your SOPs, pricing, product knowledge, and FAQs through a conversational AI assistant that answers in seconds and learns from your actual business documents.',
    Icon: BookOpen,
  },
  {
    title: 'KPI Dashboards and Reporting',
    description:
      'Replace manual reporting with an automated dashboard that surfaces the numbers that matter. Enquiry volume, conversion rates, response times, and staff efficiency, all visible without compiling a spreadsheet.',
    Icon: LayoutDashboard,
  },
  {
    title: 'Lead Recovery and Follow-Up',
    description:
      'Missed calls and incomplete enquiries are automatically followed up through the Zynex system. Leads that would have gone cold are re-engaged before they find a competitor who responded faster.',
    Icon: RefreshCw,
  },
];

const openClawFeatures = [
  'Automated enquiry capture and routing',
  'Lead follow-up and recovery sequences',
  'Scheduling and calendar automation',
  'Reporting and KPI tracking',
  'Integration with your existing tools',
];

const nemoClawFeatures = [
  'AI phone and chat agents trained on your business',
  'After-hours enquiry capture and response',
  'Customer FAQ handling without staff involvement',
  'Internal staff knowledge assistant',
  'Full conversation logging and handover',
];

const kpis = [
  'Enquiries captured versus missed per week',
  'After-hours leads captured and responded to',
  'Lead to conversion rate from first contact',
  'Average time to first response',
  'Staff hours recovered from automated workflows',
  'Errors and resolution failures reduced post-deployment',
];

const reasons = [
  'Custom-built to your workflow, not a generic template applied to your business name',
  'Deployed in two to six weeks from discovery call to live system',
  'No internal technical team required: Zynex manages the system on your behalf',
  'Priced for small business budgets, not enterprise contracts',
  'Results tracked against your actual baseline, not industry averages',
];

const deploys = [
  'AI phone agent for inbound enquiries',
  'After-hours capture and response system',
  'Lead recovery and follow-up automation',
  'Internal knowledge and FAQ assistant',
  'Workflow automation for repetitive tasks',
  'KPI dashboard and weekly reporting',
  'Integration with your existing tools',
];

const locationLinks = [
  { title: 'Adelaide AI Development', href: 'https://zynextechnologies.com.au/ai-development-company-adelaide' },
  { title: 'Canberra AI Development', href: 'https://zynextechnologies.com.au/ai-development-company-in-canberra' },
  { title: 'Gold Coast AI Development', href: 'https://zynextechnologies.com.au/ai-development-gold-coast' },
  { title: 'Hobart AI Development', href: 'https://zynextechnologies.com.au/ai-development-company-in-hobart' },
];

const faqs = [
  {
    question: 'What does an AI development company for small businesses in Australia actually build?',
    answer:
      'An AI development company for small businesses builds custom AI tools designed around your specific workflows. At Zynex Technologies, that includes AI phone agents, lead capture systems, workflow automation, internal knowledge assistants, and reporting dashboards, all configured to your business size and budget.',
  },
  {
    question: 'How much does AI development for a small business in Australia cost?',
    answer:
      'AI development costs vary depending on scope and complexity. Zynex Technologies designs solutions that match small business budgets, with pricing based on the specific tools deployed and the volume of work automated. A discovery call is the fastest way to get a realistic estimate for your situation.',
  },
  {
    question: 'How long does it take to deploy an AI system for a small business?',
    answer:
      'Most small business AI deployments through Zynex Technologies are live within two to six weeks from the initial discovery call, depending on integration requirements and the number of workflows being automated.',
  },
  {
    question: 'Can a small business afford custom AI development in Australia?',
    answer:
      'Yes. Zynex Technologies builds AI systems specifically for Australian small and medium businesses. The solutions are scoped to match your budget, and the time and cost savings generated by the system typically offset the investment within the first few months of deployment.',
  },
  {
    question: 'Does Zynex Technologies work with businesses outside Melbourne?',
    answer:
      'Yes. Zynex Technologies works with small businesses across Australia, including those in Adelaide, Canberra, the Gold Coast, and Hobart. All discovery calls and deployments are managed remotely.',
  },
  {
    question: 'Do I need a technical team to manage an AI system after it is deployed?',
    answer:
      'No. Zynex Technologies builds AI systems that are designed to run without requiring internal technical knowledge. Ongoing management, updates, and performance monitoring are handled by the Zynex team, not yours.',
  },
];

const AiDevelopmentForSmallBusinessesAustralia = () => {
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
    title: 'AI Development for Small Businesses Australia | Zynex Technologies',
    description:
      'AI development company for small businesses Australia—automate repetitive work, capture after-hours leads, and recover staff time. Live in weeks. Book a free call.',
  });

  return (
    <div className="min-h-screen bg-white">
      <Schema schema={faqSchema} />

      <section
        className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24"
        style={{ background: 'linear-gradient(135deg, #719334 0%, #5a7529 100%)' }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp} className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-white mb-6 leading-tight">
                AI Development Company in Australia Creating Profitable Systems for{' '}
                <span className="text-yellow-300">Small Businesses</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                Zynex Technologies designs and deploys custom AI systems for Australian small businesses. Automate repetitive work, capture more leads, and give your team back the time they spend on tasks a machine can handle faster and without errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 text-[#719334] px-8 py-4 rounded-lg text-base font-bold bg-white shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  href="https://zynextechnologies.com.au/what-is-zynex"
                  className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg text-base font-bold border-2 border-white/80 hover:bg-white/10 transition-all"
                >
                  See How Zynex Works
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {heroStats.map((s) => (
                  <div key={s.value} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-heading font-extrabold text-yellow-300 mb-1">{s.value}</div>
                    <p className="text-xs text-white/85 leading-snug">{s.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/30">
                <img src={`/${heroImage}`} alt="AI development for small businesses in Australia" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3 text-center">BUILT FOR</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-gray-900 mb-8">
            Built for Australian small businesses across
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {builtForTypes.map((type) => (
              <div key={type} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center text-sm font-semibold text-gray-900">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f4 100%)' }}>
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3 text-center">THE PROBLEM</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 text-center max-w-4xl mx-auto">
            Every hour your team spends on repetitive tasks is an hour they are not growing your business.
          </h2>
          <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Small businesses in Australia are stretched between managing daily operations and trying to grow. The gap between what AI can do and what most small businesses are actually using it for has never been wider, and the cost of that gap compounds every month.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {problemStats.map((s) => (
              <div key={s.value} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="text-3xl font-extrabold text-[#719334] mb-2">{s.value}</div>
                <p className="text-sm text-gray-600 mb-1">{s.description}</p>
                <p className="text-xs text-gray-500">Source: {s.source}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-gray-700 max-w-4xl mx-auto mb-6 text-center">
            The businesses that close the efficiency gap first are the ones that compound their advantage over time. Every week without an automated system is another week of manual follow-up, missed enquiries, and staff time spent on work that should not require a human at all.
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 border-l-4" style={{ borderColor: brandGreen }}>
            <p className="text-base text-gray-700 leading-relaxed">
              The AI development company for small businesses in Australia that gets this right does not replace your team. It removes the work that was never worth their time in the first place, so the people you have can focus entirely on what humans do better than any machine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3 text-center">SERVICES</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 text-center">
            Zynex does not offer a generic AI tool. Every system is built around your business.
          </h2>
          <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Zynex Technologies designs and deploys AI systems that solve specific operational problems inside your business. Six core capability areas connect into one integrated system, and the improvements compound across all of them at once.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ title, description, Icon }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <Icon className="w-8 h-8 text-[#719334] mb-3" />
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3 text-center">PLATFORMS</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-gray-900 mb-4">
            Two platforms. One connected system. Built for small business operations.
          </h2>
          <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Zynex Technologies deploys AI systems built on two proprietary platforms, each designed for a different layer of your business. Both integrate with your existing tools and are configured to your specific setup.
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">OpenClaw (Workflow Automation)</h3>
              <p className="text-sm text-gray-600 mb-4">
                OpenClaw is Zynex&apos;s workflow automation platform. It connects to your existing systems and runs the repetitive processes your team handles manually, from enquiry capture to follow-up sequencing and reporting, without requiring your staff to manage or monitor it.
              </p>
              <ul className="space-y-2">
                {openClawFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#719334] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">NemoClaw (Conversational AI)</h3>
              <p className="text-sm text-gray-600 mb-4">
                NemoClaw is Zynex&apos;s conversational AI platform. It handles inbound calls, messages, and online enquiries through a trained AI agent that qualifies each lead and routes it appropriately, available at any hour without staff involvement.
              </p>
              <ul className="space-y-2">
                {nemoClawFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#719334] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">ACCOUNTABILITY</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
                Zynex holds itself accountable with numbers, not promises.
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Before deployment, Zynex Technologies establishes your actual baseline. After deployment, those same numbers are tracked so the improvement is visible and verifiable against your own starting point, not an industry average.
              </p>
              <div className="space-y-3">
                {kpis.map((kpi, idx) => (
                  <div key={kpi} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-[#719334] mb-1">KPI {String(idx + 1).padStart(2, '0')}</p>
                    <p className="text-sm text-gray-900">{kpi}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">WHY ZYNEX</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
                Why small businesses in Australia choose Zynex Technologies over off-the-shelf AI tools
              </h2>
              <p className="text-base text-gray-600 mb-4">
                Generic AI software is built for the average business. Zynex Technologies builds for your business. Off-the-shelf tools solve part of the problem and leave the rest for your staff to manage around.
              </p>
              <ul className="space-y-2 mb-6">
                {reasons.map((r) => (
                  <li key={r} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-[#719334] font-bold">•</span>
                    {r}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-gray-900 mb-3">What Zynex Deploys in Your Business:</p>
              <ul className="space-y-2">
                {deploys.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#719334] mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">LOCATIONS</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
            Zynex Technologies works with small businesses across every state and territory in Australia.
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-8">
            All discovery calls and deployments are managed remotely. Wherever your business operates, Zynex Technologies builds and manages your AI system without requiring an on-site visit.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationLinks.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#719334] hover:shadow-md transition-all text-sm font-semibold text-[#719334]"
              >
                {loc.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.question} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <h3 className="text-base font-semibold text-gray-900 pr-6">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} style={{ color: brandGreen }} />
                </button>
                {openFaqIndex === idx && (
                  <p className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-[#719334] to-[#5a7529] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">
              Ready to see what an AI system would look like inside your small business?
            </h2>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
              Zynex Technologies starts every engagement with a discovery call. The team maps your current setup, identifies where automated AI systems would have the most immediate impact, and shows you exactly what would be built before any commitment is made. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center bg-white text-[#719334] px-8 py-4 rounded-lg font-bold hover:-translate-y-0.5 transition-all"
              >
                Book a Discovery Call with Zynex
              </button>
              <Link href="https://zynextechnologies.com.au/solutions" className="inline-flex items-center justify-center text-white px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-white/10 transition-all">
                Explore other industries Zynex works with
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedIndustryPages currentSlug="small-business" />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AiDevelopmentForSmallBusinessesAustralia;

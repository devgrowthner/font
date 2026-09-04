'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Inbox,
  Moon,
  Shield,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedIndustryPages from '../../components/RelatedIndustryPages';
import { useSeo } from '../../hooks/useSeo';

const heroImage = 'zynex1.png';
const brandGreen = '#719334';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const builtForTypes = [
  'General Practice Firms',
  'Boutique Law Firms',
  'Conveyancing Practices',
  'Family Law Firms',
  'Commercial Litigation',
  'Multi-Partner Firms',
];

const problemStats = [
  { value: '48%', description: "of a lawyer's working week is spent on non-billable administrative tasks", source: 'Thomson Reuters Legal Tracker' },
  { value: '$2.3B', description: 'lost annually to inefficiency in Australian legal operations', source: 'Legaltech News Australia' },
  { value: '72%', description: 'of clients expect a response to their enquiry within four hours', source: 'Australian Legal Services Survey' },
  { value: '3 in 5', description: 'law firms report missing a deadline due to manual workflow management', source: 'Law Society of Australia' },
];

const services = [
  {
    title: 'Document Review and Extraction',
    description:
      'AI reads, classifies, and extracts key clauses, obligations, dates, and parties from contracts, briefs, and correspondence. What takes a paralegal three hours takes the Zynex system three minutes.',
    Icon: FileText,
  },
  {
    title: 'Client Intake Automation',
    description:
      'New client enquiries are captured, pre-qualified, and routed to the right practice area automatically. Conflict checks, matter codes, and intake forms are completed without a staff member sitting on the phone.',
    Icon: Inbox,
  },
  {
    title: 'Matter Management Assistant',
    description:
      'The Zynex system tracks deadlines, outstanding tasks, and matter milestones across your whole caseload. Lawyers are alerted to upcoming obligations before they become urgent, not after.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Compliance and Deadline Monitoring',
    description:
      'Court filing dates, limitation periods, regulatory deadlines, and compliance obligations are monitored continuously. The system flags risk before it becomes a professional conduct issue.',
    Icon: Shield,
  },
  {
    title: 'After-Hours Client Enquiry Handling',
    description:
      'Client enquiries that come in outside business hours are captured with full context and queued for your team first thing. No enquiry falls through the gap and no client feels ignored.',
    Icon: Moon,
  },
  {
    title: 'Partner and Manager Visibility',
    description:
      'Partners get a clear view of matter progress, billable hour performance, and intake conversion without compiling reports manually. Weekly briefings and a live dashboard keep the whole firm informed.',
    Icon: BarChart3,
  },
];

const deploys = [
  'AI document review and clause extraction engine',
  'Automated client intake and conflict check workflows',
  'Matter management and deadline tracking assistant',
  'Compliance and regulatory deadline monitoring',
  'After-hours client enquiry capture and response',
  'Internal knowledge assistant for SOPs and precedents',
  'Billing and time-entry automation support',
  'Integration with your existing practice management software',
  'KPI dashboard and weekly partner briefing',
  'Ongoing system optimisation and support',
];

const kpis = [
  'Document review time per matter',
  'Client enquiries captured after hours',
  'Time-to-intake from first contact',
  'Compliance deadlines missed per quarter',
  'Billable hours recovered from admin reduction',
  'Staff time saved on non-billable tasks weekly',
];

const locationLinks = [
  { title: 'Adelaide AI Development', href: '/ai-development-company-adelaide' },
  { title: 'Canberra AI Development', href: '/ai-development-company-in-canberra' },
  { title: 'Gold Coast AI Development', href: '/ai-development-gold-coast' },
  { title: 'Hobart AI Development', href: '/ai-development-company-in-hobart' },
];

const faqs = [
  {
    question: 'What does an AI development company for legal firms in Australia actually build?',
    answer:
      'Zynex Technologies builds custom AI systems tailored to legal operations, including document review automation, client intake workflows, matter management assistants, and compliance monitoring tools. Every system is designed around your firm\'s practice areas, existing software, and operational priorities, not built from a generic template.',
  },
  {
    question: 'How long does it take to deploy an AI system for a law firm in Australia?',
    answer:
      'Most legal AI deployments with Zynex Technologies are live within four to eight weeks from the initial discovery call. The timeline depends on the complexity of your workflows and the number of integrations required. Zynex provides a clear deployment roadmap before any work begins so there are no surprises.',
  },
  {
    question: 'How much does AI development for legal firms in Australia cost?',
    answer:
      'Pricing depends on the scope of deployment, the number of workflows automated, and the integrations required. Zynex Technologies starts every engagement with a discovery call and AI feasibility analysis so you receive a scoped proposal with clear numbers, not a vague estimate or a generic quote.',
  },
  {
    question: 'Is AI for law firms compliant with Australian privacy and legal regulations?',
    answer:
      'Yes. Zynex Technologies builds every legal AI system in compliance with the Australian Privacy Act 1988 and applicable Law Society guidelines across all Australian states. Client confidentiality and data sovereignty are non-negotiable requirements built into every deployment from the ground up.',
  },
  {
    question: 'Can AI legal automation work for small or boutique law firms?',
    answer:
      'Yes. Zynex Technologies works with practices of all sizes, from solo practitioners to multi-partner firms. The system is scoped to your current volume and scales as your firm grows. Small firms often see the fastest return because the same AI handles tasks that would otherwise require an additional hire.',
  },
  {
    question: 'What practice areas does Zynex support with AI for legal firms?',
    answer:
      'Zynex Technologies has built legal AI systems for conveyancing, family law, employment law, commercial litigation, personal injury, and corporate advisory practices. The system is always configured around your specific practice area, not adapted from a generic legal template.',
  },
];

const AiDevelopmentCompanyLegalFirmsAustralia = () => {
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
    title: 'AI Development Company for Legal Firms Australia | Zynex Technologies',
    description:
      'AI development company for legal firms Australia—automate document review, client intake, and compliance monitoring. Book a free discovery call today.',
  });

  return (
    <div className="min-h-screen bg-white">
      <Schema schema={faqSchema} />

      <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24" style={{ background: 'linear-gradient(135deg, #719334 0%, #5a7529 100%)' }}>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp} className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
                AI Development Company for Legal Firms in{' '}
                <span className="text-yellow-300">Australia</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl">
                Zynex Technologies builds custom AI systems for Australian law firms. Automate document review, client intake, compliance monitoring, and matter management so your team focuses on high-value legal work, not repetitive administration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 bg-white text-[#719334] px-8 py-4 rounded-lg font-bold shadow-lg">
                  Book a Discovery Call <ArrowRight className="w-5 h-5" />
                </button>
                <Link href="/what-is-zynex" className="inline-flex items-center justify-center text-white px-8 py-4 rounded-lg font-bold border-2 border-white/80 hover:bg-white/10">
                  See How Zynex Works
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5">
              <div className="aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/30">
                <img src={`/${heroImage}`} alt="AI development company for legal firms in Australia" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">BUILT FOR</p>
          <div className="flex flex-wrap justify-center gap-2">
            {builtForTypes.map((t) => (
              <span key={t} className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-800">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f4 100%)' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 text-center">
            Every hour a lawyer spends on document admin is an hour not spent on the client.
          </h2>
          <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Legal practice in Australia runs on precision, speed, and trust. But the operational model underneath most firms still depends heavily on manual document handling, phone-based intake, and staff chasing deadlines across scattered systems.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {problemStats.map((s) => (
              <div key={s.value} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#719334] mb-2">{s.value}</div>
                <p className="text-sm text-gray-600 mb-1">{s.description}</p>
                <p className="text-xs text-gray-500">Source: {s.source}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-gray-700 max-w-4xl mx-auto text-center">
            The staffing answer is not sustainable. Hiring more support staff to handle document processing and client administration is expensive, slow, and does not remove the underlying problem. Zynex Technologies sits in the gap between the volume of operational work a legal firm generates and the team&apos;s capacity to handle it.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-gray-900 mb-4">
            Zynex does not just answer client calls. It runs the operational layer your legal team cannot cover alone.
          </h2>
          <p className="text-base text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Zynex Technologies does not offer a single-function tool. The legal AI system is a coordinated operating model that improves six areas of your firm&apos;s operation at once.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map(({ title, description, Icon }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <Icon className="w-8 h-8 text-[#719334] mb-3" />
                <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-heading font-bold mb-4">What Zynex Technologies deploys inside your legal firm</h3>
              <ul className="space-y-2">
                {deploys.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#719334] mt-0.5 flex-shrink-0" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-heading font-bold mb-4">How Zynex measures the impact</h3>
              <p className="text-sm text-gray-600 mb-4">Every result is measured against your firm&apos;s own starting point.</p>
              <div className="space-y-3">
                {kpis.map((kpi, idx) => (
                  <div key={kpi} className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-[#719334]">KPI {String(idx + 1).padStart(2, '0')}</p>
                    <p className="text-sm text-gray-900">{kpi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-gray-900 mb-6">
            Why legal firms choose Zynex Technologies over generic legal tech tools
          </h2>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>Most law firms already have a practice management platform. What they do not have is a system that handles everything around the core software.</p>
            <p>Zynex Technologies builds the operational layer that sits around your existing tools, not a replacement for them. Document intelligence, workflow automation, client response handling, internal knowledge management, and management reporting work together.</p>
            <p className="font-semibold text-gray-900">The result is a legal firm that responds to clients faster, processes documents in a fraction of the time, never misses a compliance deadline, and gives its partners a clearer picture of every matter.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.question} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                <button type="button" onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left">
                  <h3 className="text-base font-semibold text-gray-900 pr-6">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 ${openFaqIndex === idx ? 'rotate-180' : ''}`} style={{ color: brandGreen }} />
                </button>
                {openFaqIndex === idx && <p className="px-5 pb-5 text-sm text-gray-600 border-t pt-4">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-[#719334] to-[#5a7529] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">Ready to see what Zynex would look like inside your legal firm?</h2>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">No commitment required. Book a discovery call to review your setup and identify where the legal AI system would have the most immediate impact.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button type="button" onClick={() => setIsModalOpen(true)} className="bg-white text-[#719334] px-8 py-4 rounded-lg font-bold">Book a Discovery Call with Zynex</button>
              <Link href="/solutions" className="text-white px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-white/10">Explore other industries Zynex works with</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedIndustryPages currentSlug="legal" />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AiDevelopmentCompanyLegalFirmsAustralia;

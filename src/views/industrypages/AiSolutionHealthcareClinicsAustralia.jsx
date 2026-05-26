'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Inbox,
  Moon,
  FileText,
  Zap,
  BookOpen,
  LayoutDashboard,
  Check,
  BarChart3,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedIndustryPages from '../../components/RelatedIndustryPages';
import { useSeo } from '../../hooks/useSeo';

const heroImage = 'AIclinic.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const brandGreen = '#719334';

const stats = [
  {
    full:
      '68% of GPs say increasing complexity of patient presentations is a main issue Source: RACGP Health of the Nation 2025',
  },
  {
    full:
      '77% of GPs are dissatisfied with the volume of administration associated with their work Source: RACGP Health of the Nation 2025',
  },
  {
    full: '69% of GPs reported burnout Source: RACGP Health of the Nation 2025',
  },
  {
    full:
      '63% of GPs are considering reducing their practising time Source: RACGP Health of the Nation 2025',
  },
];

const whoBusinessTypes = [
  'Dental clinics',
  'GP and medical clinics',
  'Physio and allied health practices',
  'Specialist clinics',
  'Multi-location healthcare groups',
];

const outcomes = [
  {
    title: 'Patient Enquiry Capture',
    description:
      'Every inbound enquiry, whether by phone, message, or form, is captured, logged, and responded to through the Zynex system. No enquiry falls through because a staff member was busy or the clinic was closed.',
    Icon: Inbox,
  },
  {
    title: 'Call Handling and After-Hours Response',
    description:
      'Zynex handles calls around the clock. After-hours enquiries are collected with full context and routed back to your team first thing, ready to act on without a manual handoff.',
    Icon: Moon,
  },
  {
    title: 'Intake and Referral Workflows',
    description:
      'Zynex automates new patient intake, referral form handling, and document extraction so your front desk is not manually chasing paperwork or re-keying information from one system to another.',
    Icon: FileText,
  },
  {
    title: 'Admin Efficiency',
    description:
      'Repetitive tasks are handled by the Zynex operating layer. Your staff get back the hours they were spending on low-value work that does not require a trained health professional to do.',
    Icon: Zap,
  },
  {
    title: 'Staff Knowledge Access',
    description:
      'Internal SOPs, clinical admin processes, and referral pathways are available to your team instantly through the Zynex knowledge assistant. The right answer is always one query away, without interrupting a colleague.',
    Icon: BookOpen,
  },
  {
    title: 'Operational Visibility',
    description:
      'Zynex gives clinic owners and practice managers a clear, real-time view of how the clinic is performing. Weekly briefings and a live KPI dashboard replace the need to ask your team for status updates.',
    Icon: LayoutDashboard,
  },
];

const modules = [
  'AI Receptionist and Virtual Phone Agent',
  'After-hours enquiry capture and callback workflows',
  'Patient enquiry triage and routing',
  'Referral, intake, and form processing with document extraction',
  'Internal SOP and staff knowledge assistant',
  'Cancellation recovery and recall workflows',
  'KPI dashboard and executive weekly briefing',
];

const kpis = [
  'Missed calls per week',
  'Average time-to-first-response',
  'Front-desk admin hours',
  'Referral and form handling time',
  'Cancellation recovery rate',
  'Booking conversion from enquiry',
];

const faqs = [
  {
    question: 'What is an AI solution for healthcare clinics in Australia, and how does it work?',
    answer:
      'An AI solution for healthcare clinics in Australia is a coordinated system that automates the operational layer of a medical or allied health practice. Rather than replacing clinical staff, it handles the tasks that drain their time  inbound enquiries, after-hours calls, intake forms, referral documents, and routine admin. Zynex Technologies deploys this as a connected operating model, not a collection of separate tools, so every module shares data and compounds the efficiency gains across the whole clinic.',
  },
  {
    question: 'How is Zynex different from a standard AI receptionist for a medical practice in Australia?',
    answer:
      'A standalone AI receptionist for a medical practice in Australia handles inbound calls, but that is where it stops. Zynex goes further by combining call handling with intake automation, document processing, referral workflows, a staff knowledge assistant, and a live KPI dashboard. Because every module connects to the others, the system does not just answer calls. It captures context, routes work, and gives your team a complete picture of what is happening operationally, without manual oversight at every step.',
  },
  {
    question: 'How long does it take to deploy healthcare workflow automation in a clinic?',
    answer:
      'Deployment timelines vary depending on the size of your clinic and the number of modules being configured. Zynex Technologies starts every engagement with a discovery call to map your current setup and identify your highest-priority gaps. From there, deployment is phased so your team is not disrupted. Most clinics begin seeing measurable impact on admin hours and enquiry capture within the first few weeks of the system going live.',
  },
  {
    question: 'What is the difference between AI for GP clinics in Australia and general business AI tools?',
    answer:
      'General business AI tools are built for broad use cases. AI for GP clinics in Australia needs to handle the specific operational realities of a medical practice: after-hours patient enquiries, clinical referral documents, Medicare-related admin, triage and routing logic, and a workforce that is already under significant pressure. Zynex Technologies builds its system specifically for healthcare contexts, which means the workflows, the governance controls, and the measurement framework are all designed around how a clinic actually operates, not adapted from a generic business automation template.',
  },
  {
    question: 'How does Zynex help with allied health AI software needs specifically?',
    answer:
      'Allied health practices often have operational patterns that differ from GP clinics, including higher appointment frequency, diverse referral sources, and a mix of funded and private billing. Zynex configures its healthcare AI system to reflect those differences. Intake workflows, referral handling, and cancellation recovery are all scoped to the specific way your allied health practice runs. The system does not assume a one-size-fits-all operational model because allied health simply does not work that way.',
  },
];

const AiSolutionHealthcareClinicsAustralia = () => {
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
    title: 'AI Solution for Healthcare Clinics in Australia | Zynex',
    description:
      'AI solution for healthcare clinics in Australia that cuts admin load, captures every patient enquiry, and automates intake workflows. Book a discovery call.',
  });

  return (
    <div className="min-h-screen bg-white">
      <Schema schema={faqSchema} />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24"
        style={{ background: 'linear-gradient(135deg, #719334 0%, #5a7529 100%)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-yellow-300/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl"
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp} className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                The AI Solution for Healthcare Clinics in Australia{' '}
                <span className="text-yellow-300">That Actually Reduces Operational Load</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
                Zynex Technologies builds AI operating systems for Australian clinics. We handle patient enquiries, automate admin workflows, and give your team the tools to work without the constant pressure of being understaffed and overloaded.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-[#719334] px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-lg w-full sm:w-auto bg-white"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  href="/what-is-zynex"
                  className="group inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 border-2 border-white/80 w-full sm:w-auto"
                >
                  See How Zynex Works
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none lg:w-[92%] lg:ml-auto"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-300/20 to-white/0 blur-2xl"
              />
              <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/30">
                <img
                  src={`/${heroImage}`}
                  alt="AI Healthcare Solution"
                  className="w-full h-full object-cover object-center scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5a7529]/30 via-transparent to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built For Healthcare Section */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">BUILT FOR AUSTRALIAN HEALTHCARE PRACTICES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-normal text-gray-700 mb-4 leading-relaxed max-w-6xl mx-auto">
              Zynex Technologies built its healthcare AI system for the specific operational realities of running a practice in Australia. If your clinic deals with call volume, admin pressure, intake friction, or inconsistent patient follow-up, this was built for you.
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4"
          >
            {whoBusinessTypes.map((type, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-3" style={{ background: '#719334', opacity: 0.2 }}></div>
                <p className="text-sm font-semibold text-gray-900">{type}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f4 100%)' }}>
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">THE PROBLEM</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              Australian clinics are not failing because of bad staff. They are failing because of operational overload.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              The pressure on Australian healthcare practices has moved well beyond missed calls. Staff are stretched across too many tasks, patient expectations have risen, and the admin burden is now heavy enough to push experienced practitioners out the door. RACGP's 2025 Health of the Nation report makes the scale of this very clear.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-[#719334] mb-2">{stat.full.split('%')[0]}%</div>
                <p className="text-sm sm:text-base text-gray-600">{stat.full.split('Source:')[0]}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp} className="mt-12 sm:mt-16 max-w-5xl mx-auto bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              One in three GPs intend to stop practising within five years. That is not a workforce problem you can recruit your way out of, particularly when Jobs and Skills Australia reports that around 48% of professional occupations are already in shortage, with health professions among the hardest hit.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The practical consequence for clinic owners is straightforward. Every hour your trained staff spend managing routine calls, chasing referral documents, re-entering patient data, or handling enquiries that could have been captured automatically is an hour not spent on clinical work. Zynex Technologies built its healthcare AI system specifically to close that gap.
            </p>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp} className="mt-8 sm:mt-12 max-w-5xl mx-auto bg-[#f0fdf4] rounded-xl p-6 sm:p-8 border-l-4" style={{ borderColor: '#719334' }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-2">Customer Benchmark</p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-2">
              <strong>76% of Australian customers say after-hours AI service is the greatest benefit of AI adoption. 63% prefer self-service as a first option before speaking to a person.</strong>
            </p>
            <p className="text-xs text-gray-600">Australian customer-service benchmarks</p>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp} className="mt-8 sm:mt-12 max-w-5xl mx-auto bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Your patients expect fast, consistent responses. Your team is already at capacity. Zynex sits between those two realities and handles the operational layer so your people can focus on what actually requires them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Zynex Does Section */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="how-zynex-works">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">NOT A SINGLE TOOL. A FULL AI OPERATING SYSTEM.</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              Zynex is not a single tool. It is a full AI operating system for your clinic.
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Zynex Technologies does not sell point solutions. Our healthcare AI system is a coordinated operating model that improves six areas of your clinic's operation at the same time. Each module connects to the others, which means the impact compounds rather than staying isolated.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {outcomes.map((outcome, idx) => {
              const Icon = outcome.Icon;
              return (
                <motion.div key={idx} variants={fadeInUp} className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ background: '#719334', color: 'white' }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3">{outcome.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{outcome.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Modules Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="mt-16 sm:mt-20 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#719334' }}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">What Zynex Technologies deploys in your clinic</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">Zynex configures its healthcare AI system around your clinic's specific setup, size, and existing tools. Depending on your priorities, deployment includes a combination of the following:</p>
              <ul className="space-y-3 flex-1">
                {modules.map((module, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[#719334]/40 transition-colors">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#719334' }}>
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base text-gray-900 leading-relaxed">{module}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#719334' }}>
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">How Zynex measures the impact</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">Zynex Technologies does not present vague AI benefit claims. Before deployment, we establish your clinic's actual baseline. After deployment, we track the same numbers so you can see what has changed and by how much.</p>
              <div className="space-y-3 flex-1">
                {kpis.map((kpi, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[#719334]/40 transition-colors">
                    <p className="text-xs font-semibold text-[#719334] mb-1 tracking-wider">KPI {String(idx + 1).padStart(2, '0')}</p>
                    <p className="text-base text-gray-900">{kpi}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mt-6 pt-6 border-t border-gray-100">Every outcome is measured against your clinic's own starting point. That is how Zynex holds itself accountable to results.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Zynex Section */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f4 100%)' }}>
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">DIFFERENTIATION</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              Why Australian clinics choose Zynex Technologies over individual AI tools
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }} className="w-full max-w-5xl lg:max-w-6xl mx-auto space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 border-l-4" style={{ borderLeftColor: '#719334' }}>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3">The Problem with Point Solutions</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Most AI tools solve one problem in isolation. A phone bot handles inbound calls. An OCR tool reads forms. A CRM sends follow-up messages. You end up managing five separate systems that do not communicate with each other, still require a person to oversee them, and create new admin work while trying to reduce the old kind.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 border-l-4" style={{ borderLeftColor: '#719334' }}>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3">The Zynex Approach</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Zynex Technologies takes a different approach. Our healthcare AI system combines voice AI, workflow automation, document processing, internal knowledge, analytics, and governance into a single operating model. The modules are designed to work together, which means you get compounding gains across enquiry capture, intake speed, admin hours, and staff efficiency, rather than improvement in one area and no change in another.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 border-l-4" style={{ borderLeftColor: '#719334' }}>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3">Governance from Day One</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Zynex also brings governance into the deployment from day one. AI in a healthcare context needs clear access controls, audit trails, and operating boundaries. Zynex builds that in rather than treating it as an afterthought. Clinic owners and practice managers maintain full visibility and control over how the system operates.
              </p>
            </div>

            <div className="bg-[#f0fdf4] rounded-xl p-6 sm:p-8 border-l-4" style={{ borderColor: '#719334' }}>
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                <strong>The result is not just a more efficient clinic. It is a clinic that operates with more consistency, more accountability, and more capacity to handle growth without adding proportional headcount.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              Faqs
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaqIndex === idx ? 'rotate-180' : ''}`} style={{ color: brandGreen }} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-100">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <RelatedIndustryPages currentSlug="healthcare" />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-[#719334] to-[#5a7529] rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
              Ready to see what Zynex would look like inside your clinic?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Zynex Technologies starts every engagement with a discovery call. We look at your current setup, identify the biggest operational gaps, and show you exactly where our healthcare AI system would have the most immediate impact. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center text-[#719334] px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg bg-white"
              >
                Book a Discovery Call with Zynex
              </button>
              <Link
                href="/ai-solution-hospitality-businesses-australia"
                className="inline-flex items-center justify-center text-white px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 hover:-translate-y-1 border-2 border-white hover:bg-white/10"
              >
                Explore other industries Zynex works with
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

export default AiSolutionHealthcareClinicsAustralia;

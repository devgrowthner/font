'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  CalendarRange,
  Check,
  ChevronDown,
  ClipboardCheck,
  HardHat,
  Inbox,
  LayoutDashboard,
  Phone,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedIndustryPages from '../../components/RelatedIndustryPages';
import { useSeo } from '../../hooks/useSeo';

const heroImage = 'AIconstruction.webp';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const brandGreen = '#719334';

const heroStats = [
  {
    value: '62%',
    description: 'of construction firms say admin tasks are their biggest productivity drain',
    source: 'AISC Industry Report',
  },
  {
    value: '3.5x',
    description: 'faster quote turnaround with AI-assisted estimating workflows',
    source: 'McKinsey Global Institute',
  },
  {
    value: '48%',
    description: 'of Australian trade and construction occupations are in skills shortage',
    source: 'Jobs and Skills Australia',
  },
  {
    value: '$9B+',
    description: 'lost annually in Australian construction from rework, delays, and admin errors',
    source: 'Deloitte Access Economics',
  },
];

const whoBusinessTypes = [
  'Residential Builders',
  'Commercial Construction',
  'Civil Engineering Firms',
  'Electrical and Plumbing Contractors',
  'Fit-out and Renovation Companies',
  'Subcontractor Networks',
  'Project Management Firms',
  'Mining and Infrastructure',
];

const problems = [
  {
    title: 'Quoting and Estimating Takes Too Long',
    description:
      'Manual take-offs, supplier pricing calls, and document assembly burn hours on every tender. Delays cost you jobs before you even submit.',
    Icon: Calculator,
  },
  {
    title: 'Site Scheduling Is Reactive, Not Planned',
    description:
      'Subcontractor availability, material lead times, and inspection windows are managed in spreadsheets and text messages. Delays cascade.',
    Icon: CalendarRange,
  },
  {
    title: 'Compliance Documentation Is a Full-Time Job',
    description:
      'SafeWork compliance, SWMS, WHS reporting, and council submissions pile up. Experienced staff spend hours on paperwork instead of project delivery.',
    Icon: ShieldCheck,
  },
  {
    title: 'Subcontractor Coordination Creates Constant Friction',
    description:
      'Chasing confirmations, updating schedules, and resolving conflicts between trades is manual, time-consuming, and prone to error.',
    Icon: Users,
  },
  {
    title: 'Client Enquiries Fall Through the Gaps',
    description:
      'Construction businesses lose prospective work because inbound enquiries are not captured or followed up consistently during busy project periods.',
    Icon: Inbox,
  },
  {
    title: 'No Real-Time View of Operational Performance',
    description:
      'Owners and project managers rely on manual reporting and end-of-week updates. By the time a problem is visible, it has already cost the project.',
    Icon: BarChart3,
  },
];

const systemModules = [
  {
    title: 'AI Quoting and Estimating Assistant',
    description:
      'Automate take-off summaries, supplier price lookups, and quote document assembly. Reduce quoting time from days to hours without losing accuracy.',
    Icon: Calculator,
  },
  {
    title: 'Site Scheduling and Subcontractor Coordination',
    description:
      'AI-managed scheduling that tracks subcontractor availability, material lead times, and site access requirements in a single connected workflow.',
    Icon: CalendarRange,
  },
  {
    title: 'Compliance and SWMS Document Automation',
    description:
      'Generate, update, and distribute compliance documents automatically. WHS reporting, site induction records, and SafeWork submissions are handled by the system.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Client Enquiry Capture and Follow-Up',
    description:
      'Every inbound enquiry is captured, logged, and responded to. After-hours contacts are collected with full context ready for your team the next morning.',
    Icon: Phone,
  },
  {
    title: 'Internal Knowledge and SOP Assistant',
    description:
      'Your team gets instant access to site procedures, supplier contacts, project histories, and trade-specific processes through the Zynex knowledge assistant.',
    Icon: BookOpen,
  },
  {
    title: 'Operational KPI Dashboard and Weekly Briefings',
    description:
      'A live view of project status, enquiry pipeline, admin hours, and compliance task completion. Weekly briefings replace manual status check-ins.',
    Icon: LayoutDashboard,
  },
];

const deploymentModules = [
  'AI quoting and estimating assistant',
  'Site scheduling and subcontractor coordination',
  'Compliance and SWMS document automation',
  'Client enquiry capture and follow-up',
  'Internal knowledge and SOP assistant',
  'Operational KPI dashboard and weekly briefings',
];

const kpis = [
  'Quote turnaround time (days to hours)',
  'Admin hours per project per week',
  'Subcontractor scheduling conflicts per month',
  'Compliance document completion rate',
  'Client enquiry capture and conversion rate',
  'Inbound enquiries missed after hours',
  'Staff time on low-value admin tasks',
];

const coreCapabilities = [
  {
    title: 'AI Estimating and Quoting Automation for Construction Companies',
    description:
      'Reduce quote preparation time with AI that reads project specs, pulls supplier pricing, and assembles structured quotes ready for your review and submission.',
    Icon: Calculator,
  },
  {
    title: 'Subcontractor Scheduling and Site Coordination',
    description:
      'Manage trade availability, inspection bookings, and material delivery windows through an AI system that updates in real time and flags conflicts before they become delays.',
    Icon: HardHat,
  },
  {
    title: 'Compliance Workflow Automation',
    description:
      'Automate SWMS creation, WHS reporting, site induction documentation, and council submission preparation so your team is not manually producing these from scratch on every project.',
    Icon: ShieldCheck,
  },
  {
    title: 'Construction Business AI Receptionist',
    description:
      'Capture every enquiry, after hours or during busy site periods, with full context and routing so nothing falls through when your team is on site or in a meeting.',
    Icon: Phone,
  },
  {
    title: 'Internal Knowledge Assistant for Construction Teams',
    description:
      'Give your team instant access to project specs, supplier contacts, site procedures, and trade SOPs through a single AI-powered knowledge tool that reduces interruptions and handoff errors.',
    Icon: BookOpen,
  },
  {
    title: 'Real-Time Project and Operational Dashboard',
    description:
      'A live view of project progress, pipeline health, compliance status, and admin performance. Weekly AI briefings mean you always know how the business is operating without chasing your team for updates.',
    Icon: LayoutDashboard,
  },
];

const whyItMattersStats = [
  {
    value: '62%',
    description: 'of construction businesses say admin burden is their top operational challenge',
    source: 'Industry survey',
  },
  {
    value: '48%',
    description: 'of Australian construction and trade occupations are in active skills shortage',
    source: 'Jobs and Skills Australia',
  },
  {
    value: '76%',
    description: 'of Australian customers say after-hours AI service is the greatest AI benefit',
    source: 'Australian customer-service benchmarks',
  },
  {
    value: '3.5x',
    description: 'faster quoting and estimating with AI-assisted construction workflows',
    source: 'McKinsey Global Institute',
  },
];

const comparisonRows = [
  {
    capability: 'Quoting Automation',
    pointSolutions: 'Standalone tool only',
    zynexSystem: 'Connected to scheduling',
  },
  {
    capability: 'Compliance Docs',
    pointSolutions: 'Manual or separate app',
    zynexSystem: 'Auto-generated per project',
  },
  {
    capability: 'Subcontractor Coordination',
    pointSolutions: 'Spreadsheets and texts',
    zynexSystem: 'AI-managed scheduling',
  },
  {
    capability: 'Client Enquiries',
    pointSolutions: 'Missed after hours',
    zynexSystem: 'Captured 24/7 with context',
  },
  {
    capability: 'Performance Reporting',
    pointSolutions: 'Weekly manual updates',
    zynexSystem: 'Live dashboard + AI briefings',
  },
  {
    capability: 'Governance Controls',
    pointSolutions: 'Not included',
    zynexSystem: 'Built in from day one',
  },
];

const faqs = [
  {
    question:
      'What does an AI development company for construction businesses in Australia actually build?',
    answer:
      'An AI development company for construction businesses in Australia builds custom AI systems that automate quoting, site scheduling, subcontractor coordination, compliance reporting, and client communication. Zynex Technologies designs these systems around your specific workflows, not generic business automation templates that were built for an unrelated industry.',
  },
  {
    question: 'How is Zynex different from off-the-shelf construction management software?',
    answer:
      'Off-the-shelf software gives you fixed features that may not match how your business operates. Zynex Technologies develops custom AI for construction companies in Australia, building systems around your existing processes, trade categories, and subcontractor relationships. You are not adapting your operation to fit a product. The product is built to fit your operation.',
  },
  {
    question: 'Can AI automation for construction companies integrate with tools I already use?',
    answer:
      'Yes. Zynex Technologies builds AI systems that connect with your existing tools, including project management platforms, accounting software, and document storage. Integration is part of the deployment plan from day one so your team does not end up managing a disconnected system alongside everything else.',
  },
  {
    question: 'How long does it take to deploy an AI system for a construction business?',
    answer:
      'Deployment timelines depend on the scope of the system and the number of workflows being automated. Zynex starts every engagement with a discovery call to map your operational gaps and identify priority areas. Most construction businesses begin seeing measurable time savings within the first few weeks of the system going live.',
  },
  {
    question: 'What construction business problems does AI solve best?',
    answer:
      'AI delivers the highest impact in areas with high volume and repetition: quoting and estimating, subcontractor scheduling, compliance documentation, site inspection reporting, and client follow-up. These are tasks that consume hours of skilled staff time every week without requiring the judgment of an experienced project manager or tradesperson.',
  },
  {
    question: 'Is Zynex Technologies only for large construction companies in Australia?',
    answer:
      'No. Zynex Technologies works with construction businesses of all sizes, from independent trade operators to multi-site construction groups. The deployment is scoped to your actual operational needs, which means smaller businesses are not paying for system complexity they do not need.',
  },
  {
    question: 'How does Zynex measure the ROI of AI development for construction businesses?',
    answer:
      'Zynex establishes a baseline before deployment, tracking metrics like quote turnaround time, admin hours per week, compliance task volume, and project scheduling accuracy. After deployment, the same numbers are measured so you can see exactly what has changed and by how much. There are no vague benefit claims.',
  },
];

const AiDevelopmentCompanyConstructionBusinessesAustralia = () => {
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
    title: 'AI Development Company for Construction Businesses in Australia | Zynex',
    description:
      'Zynex Technologies is an AI development company for construction businesses in Australia. Automate scheduling, quoting, compliance, and site workflows. Book a call.',
  });

  return (
    <motion.div className="min-h-screen bg-white">
      <Schema schema={faqSchema} />

      {/* Section 1 — Hero */}
      <section
        className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24"
        style={{ background: 'linear-gradient(135deg, #719334 0%, #5a7529 100%)' }}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-yellow-300/15 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl"
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp} className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                AI Development Company for Construction Businesses in Australia
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
                Zynex Technologies builds custom AI systems for Australian construction businesses. We automate quoting, site scheduling, compliance reporting, and subcontractor workflows so your team can focus on delivering projects, not managing paperwork.
              </p>

              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 text-[#719334] px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-lg w-full sm:w-auto bg-white"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  href="#how-zynex-works"
                  className="group inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 border-2 border-white/80 w-full sm:w-auto"
                >
                  See How It Works
                </Link>
              </motion.div>
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
              <div className="relative aspect-[5/6] sm:aspect-[16/10] lg:aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/30">
                <img
                  src={`/${heroImage}`}
                  alt="AI development for construction businesses in Australia"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5a7529]/40 via-transparent to-transparent"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {heroStats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-6"
              >
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-yellow-300 mb-2">{stat.value}</div>
                <p className="text-sm text-white/90 leading-relaxed mb-2">{stat.description}</p>
                <p className="text-xs text-white/60">{stat.source}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Industry Types */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">Who We Work With</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-normal text-gray-700 mb-4 leading-relaxed max-w-6xl mx-auto">
              Zynex Technologies develops AI solutions for construction companies across Australia, from sole traders to multi-site groups. If your business involves managing people, projects, paperwork, or compliance, we can automate the operational layer.
            </h2>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Business Types We Serve</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {whoBusinessTypes.map((type, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <motion.div className="w-12 h-12 rounded-full mx-auto mb-3" style={{ background: '#719334', opacity: 0.2 }} />
                <p className="text-sm font-semibold text-gray-900">{type}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3 — The Problem */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f4 100%)' }}>
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">The Problem</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              Australian Construction Businesses Are Not Losing to Bad Projects. They Are Losing to Bad Systems.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto">
              The operational pressure on construction businesses in Australia has moved well beyond managing site risk. Admin load, compliance complexity, and coordination overhead now consume skilled staff hours that should be going toward actual project delivery.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {problems.map((problem, idx) => {
              const Icon = problem.Icon;
              return (
                <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
                  <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ background: '#719334', color: 'white' }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{problem.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 4 — The Zynex System */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="how-zynex-works">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">The Zynex System</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              Not a Tool. A Full AI Operating System for Construction.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-5xl mx-auto">
              Zynex Technologies does not sell a single-purpose app. Our AI development for construction companies in Australia produces a connected operating model that automates across six areas simultaneously so gains compound rather than stay isolated.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {systemModules.map((module, idx) => {
              const Icon = module.Icon;
              return (
                <motion.div key={idx} variants={fadeInUp} className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ background: '#719334', color: 'white' }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{module.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

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
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">What Zynex deploys in your business</h3>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Zynex configures its construction AI system around your trade categories, project types, and existing tools. Depending on your priorities, deployment includes a combination of the following:
              </p>
              <ul className="space-y-3 flex-1">
                {deploymentModules.map((module, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[#719334]/40 transition-colors">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#719334' }}>
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base text-gray-900 leading-relaxed capitalize">{module}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#719334' }}>
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">Measurement Framework</h3>
              </div>
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                Zynex Technologies does not make vague AI benefit claims. Before deployment, we establish your actual operational baseline. After deployment, we track the same numbers so you can see what changed and by how much.
              </p>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#719334] mb-4">Metrics We Track</p>
              <div className="space-y-3 flex-1">
                {kpis.map((kpi, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[#719334]/40 transition-colors">
                    <p className="text-xs font-semibold text-[#719334] mb-1 tracking-wider">KPI {String(idx + 1).padStart(2, '0')}</p>
                    <p className="text-base text-gray-900">{kpi}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mt-6 pt-6 border-t border-gray-100">
                Every outcome is measured against your business&apos;s own starting point. That is how Zynex holds itself accountable to results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — Core Capabilities */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f4 100%)' }}>
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">Core Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              AI-Powered Construction Automation That Actually Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-5xl mx-auto">
              These are the six areas where Zynex&apos;s construction AI delivers the most immediate operational impact. Each module connects to the others, which means improvement in one area reinforces the rest.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {coreCapabilities.map((capability, idx) => {
              const Icon = capability.Icon;
              return (
                <motion.div key={idx} variants={fadeInUp} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ background: '#719334', color: 'white' }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{capability.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 6 — Why It Matters Now */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">Why It Matters Now</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              The Operational Pressure on Australian Construction Is Already at a Tipping Point.
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {whyItMattersStats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-[#719334] mb-2">{stat.value}</div>
                <p className="text-sm sm:text-base text-gray-700 mb-2 leading-relaxed">{stat.description}</p>
                <p className="text-xs text-gray-500">{stat.source}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 7 — Why Zynex Technologies */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f4 100%)' }}>
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">Why Zynex Technologies</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              One AI System. Not Five Disconnected Point Solutions.
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }} className="w-full max-w-5xl lg:max-w-6xl mx-auto space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 border-l-4" style={{ borderLeftColor: '#719334' }}>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Most construction software solves one problem in isolation. A quoting tool does not talk to your scheduling tool. Your compliance platform does not connect to your project management system. You end up managing five systems that still require a person to coordinate between them.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 border-l-4" style={{ borderLeftColor: '#719334' }}>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Zynex Technologies builds a connected AI operating system where every module shares data and compounds the efficiency gains across your entire operation. Governance and audit controls are built into the deployment from day one, because AI in a construction context needs clear boundaries and accountability, not an afterthought.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="overflow-x-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#719334] mb-4 text-center">
              Comparison: Point Solutions vs Zynex System
            </p>
            <table className="w-full min-w-[640px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#719334] text-white">
                  <th className="text-left p-4 sm:p-5 font-heading font-semibold text-sm sm:text-base">Capability</th>
                  <th className="text-left p-4 sm:p-5 font-heading font-semibold text-sm sm:text-base">Point Solutions</th>
                  <th className="text-left p-4 sm:p-5 font-heading font-semibold text-sm sm:text-base">Zynex System</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 sm:p-5 text-sm sm:text-base font-semibold text-gray-900 border-t border-gray-200">{row.capability}</td>
                    <td className="p-4 sm:p-5 text-sm sm:text-base text-gray-600 border-t border-gray-200">{row.pointSolutions}</td>
                    <td className="p-4 sm:p-5 text-sm sm:text-base text-gray-900 border-t border-gray-200">{row.zynexSystem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 8 — FAQ */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-gray-800 mb-4 leading-relaxed max-w-6xl mx-auto">
              Frequently Asked Questions About AI for Construction Businesses
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Everything you need to know about how Zynex Technologies approaches AI development for construction businesses in Australia.
            </p>
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
                  <ChevronDown
                    className={`w-5 h-5 transition-transform flex-shrink-0 ${openFaqIndex === idx ? 'rotate-180' : ''}`}
                    style={{ color: brandGreen }}
                  />
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

      <RelatedIndustryPages currentSlug="construction" />

      {/* Section 9 — Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-[#719334] to-[#5a7529] rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
              See What Zynex Would Look Like Inside Your Construction Business.
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Zynex Technologies starts every engagement with a discovery call. We map your current setup, identify the biggest operational gaps, and show you exactly where AI automation would have the most immediate impact. No commitment required.
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
                href="/solutions"
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
    </motion.div>
  );
};

export default AiDevelopmentCompanyConstructionBusinessesAustralia;

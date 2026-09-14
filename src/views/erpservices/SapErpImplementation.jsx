'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Briefcase,
  Calculator,
  Check,
  Factory,
  FileSpreadsheet,
  GitBranch,
  HardHat,
  Layers,
  Link2,
  Package,
  Search,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Store,
  Timer,
  UserRound,
  Users,
  Utensils,
  Warehouse,
  Wrench,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import { useSeo } from '../../hooks/useSeo';

const brandGreen = '#719334';
const brandGreenDark = '#5a7529';

function SectionLabel({ children }) {
  return (
    <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#719334]/20 bg-[#eef4e3] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#719334]" aria-hidden="true" />
      {children}
    </p>
  );
}

function HeadingBar() {
  return <div aria-hidden="true" className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#719334] to-[#a3c46a]" />;
}

const heroStats = [
  { value: '95%', label: 'Client Satisfaction Rate' },
  { value: '4 to 8 wks', label: 'Discovery to Roadmap' },
  { value: '3x ROI', label: 'Average Return on Investment' },
  { value: '24/7', label: 'Production Support' },
];

const problemItems = [
  {
    title: 'Disconnected ERP and operations data',
    description: 'Finance, purchasing, inventory, and production teams are all working from different versions of truth, creating delay and preventable errors.',
    Icon: Layers,
  },
  {
    title: 'Manual reporting and spreadsheet dependency',
    description: 'Critical decisions are still being made from stale spreadsheets instead of live operational reporting.',
    Icon: FileSpreadsheet,
  },
  {
    title: 'Process fragmentation across teams',
    description: 'Sales commits before procurement can confirm capacity, and finance sees margin issues too late to adjust.',
    Icon: GitBranch,
  },
  {
    title: 'Stock and procurement blind spots',
    description: 'Inventory visibility is weak, reorder timing is reactive, and suppliers are managed without a connected process.',
    Icon: Package,
  },
  {
    title: 'Slow approvals and delays',
    description: 'Invoice approval, purchase requests, and workflow handoffs turn into bottlenecks that delay work and frustrate teams.',
    Icon: Timer,
  },
  {
    title: 'No real-time executive visibility',
    description: 'Owners and managers do not have a clean view of margin, service performance, stock movement, and delivery risk.',
    Icon: Search,
  },
];

const solutionServices = [
  {
    title: 'Finance & Accounting',
    description: 'Financial close, GL, AP, AR, tax and compliance processes streamlined for Australian business conditions.',
    Icon: Calculator,
  },
  {
    title: 'Sales & CRM',
    description: 'Connected customer, sales and quote workflows that reduce rework and improve pipeline visibility.',
    Icon: Users,
  },
  {
    title: 'Supply Chain & Inventory',
    description: 'Procurement, warehouse operations, stock visibility and reorder logic across your value chain.',
    Icon: Warehouse,
  },
  {
    title: 'Manufacturing & Operations',
    description: 'Production planning, work orders, materials and process control built around operational reality.',
    Icon: Factory,
  },
  {
    title: 'Projects & Field Service',
    description: 'Job costing, timesheets, contractor workflows and service delivery visibility for project-based teams.',
    Icon: Wrench,
  },
  {
    title: 'Reporting & BI',
    description: 'Live KPI dashboards and executive reporting for faster, clearer decisions across the organisation.',
    Icon: BarChart3,
  },
];

const aiCapabilities = [
  'AI-powered document processing for invoices, purchase orders, and supplier records',
  'Automated approval workflows and exception alerts for finance and operations teams',
  'Smart forecasting and reorder recommendations based on actual demand signals',
  'AI-assisted reporting that turns SAP data into decision-ready summaries',
  'Operational risk identification across margin, supplier performance, and delivery issues',
  'Workflow automation that reduces duplication and frees teams for higher-value work',
  'Intelligent guidance for knowledge retrieval, onboarding, and process adoption',
  'AI-enabled service and support workflows linked to core SAP processes',
];

const pathways = [
  {
    title: 'SAP ERP Readiness Review',
    description: 'We assess your current processes, system fragmentation, reporting gaps, and automation opportunity before recommending any platform changes.',
    tags: ['Systems review', 'Workflow mapping', 'ROI modelling', 'Roadmap'],
    recommended: true,
  },
  {
    title: 'SAP ERP Design & Blueprint',
    description: 'We map your target design, define integration points, and align processes so the solution fits the actual way your business operates.',
    tags: ['Process design', 'Architecture', 'Data mapping', 'Blueprint'],
  },
  {
    title: 'SAP ERP Implementation',
    description: 'A structured deployment covering configuration, team onboarding, data migration, and training tied to your business goals.',
    tags: ['Configuration', 'Migration', 'Testing', 'Go-live'],
  },
  {
    title: 'SAP AI Automation Layer',
    description: 'Add intelligence across approvals, workflows, reporting, and document-driven tasks to reduce manual effort and speed up decisions.',
    tags: ['AI automation', 'Approval flows', 'Smart alerts', 'Dashboards'],
  },
  {
    title: 'Support & Optimisation',
    description: 'Keep your SAP ERP improving as your business evolves with optimisation, tuning, and iterative enhancement after launch.',
    tags: ['Support', 'Workflows', 'Customisation', 'Growth'],
  },
];

const industries = [
  {
    title: 'Manufacturing',
    description: 'Production data, inventory flow, supplier planning, and procurement visibility across the plant.',
    Icon: Factory,
  },
  {
    title: 'Wholesale & Distribution',
    description: 'Multi-location inventory, ordering, warehouse tasks and demand-driven fulfilment processes.',
    Icon: Package,
  },
  {
    title: 'Retail & eCommerce',
    description: 'Inventory, demand planning, order processing and a clearer view of what is selling and what is not.',
    Icon: ShoppingCart,
  },
  {
    title: 'Construction & Field Service',
    description: 'Project costing, job progress, resource tracking, and service delivery tied back to financial outcomes.',
    Icon: Wrench,
  },
  {
    title: 'Healthcare & Clinics',
    description: 'Operational workflows, approvals, compliance tracking and patient-support service visibility.',
    Icon: Stethoscope,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We review your current systems, workflow pain points, process gaps, data quality, and reporting needs to define the right SAP ERP roadmap.',
    duration: '1 to 2 weeks',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'We propose the target operating model, user journeys, integrations, and business process design before implementation begins.',
    duration: '1 to 2 weeks',
  },
  {
    number: '03',
    title: 'Build & Validate',
    description: 'We configure the solution, align it to your operational flows, test integrations, and refine gaps before rollout.',
    duration: '4 to 10 weeks',
  },
  {
    number: '04',
    title: 'Deploy & Optimise',
    description: 'We go live with support, training and process tuning so the system delivers value from day one and keeps improving over time.',
    duration: 'Ongoing',
  },
];

const whyChooseItems = [
  {
    title: 'Business-first SAP strategy',
    description: 'We start with the operating problem, not a generic feature list, so the ERP supports how your business actually runs.',
  },
  {
    title: 'Australian business context',
    description: 'We design around local operations, reporting needs, and teams that need systems they can rely on in the real world.',
  },
  {
    title: 'Feasibility-first scoping',
    description: 'You get a practical path to value before moving into a major implementation or transformation project.',
  },
  {
    title: 'Structured delivery process',
    description: 'From assessment through live support, the implementation process stays clear, governed and measurable.',
  },
  {
    title: 'AI integrated with SAP',
    description: 'The platform does more than track data; it actively helps teams reduce manual tasks and improve decision-making.',
  },
  {
    title: 'Ongoing optimisation',
    description: 'We do not leave you at go-live. We refine workflows, tune automations, and improve performance as your business changes.',
  },
];

const readinessReviewItems = [
  'Current systems and process review',
  'Workflow gap mapping',
  'Software fragmentation and data quality assessment',
  'AI and automation opportunity review',
  'Integration and reporting gap analysis',
  'SAP ERP roadmap recommendation',
];

const faqs = [
  {
    question: 'What does a SAP ERP implementation company do?',
    answer: 'A SAP ERP implementation company helps businesses assess their current processes, define the target operating model, configure the SAP platform, migrate data, onboard users, and support a successful go-live. The goal is to make sure the solution fits the business and delivers measurable improvement.',
  },
  {
    question: 'How long does a SAP ERP project take?',
    answer: 'Timeline depends on scope, data readiness, integrations, and customisation requirements. Discovery and design usually take a few weeks, while implementation and rollout often run from several months to longer if your organisation has more complex workflows or cross-functional requirements.',
  },
  {
    question: 'Is SAP ERP the right fit for a growing Australian business?',
    answer: 'SAP ERP can be a strong fit for businesses that need more structure across finance, inventory, procurement, operations, and reporting. The right fit depends on your process complexity, scale, and the level of standardisation and visibility you need.',
  },
  {
    question: 'What is the difference between ERP and SAP ERP?',
    answer: 'ERP is the general category of integrated business management software. SAP ERP refers to SAP’s enterprise-grade ERP environment, typically chosen by organisations that need broader process control, enterprise-level reporting, and tightly connected operational workflows.',
  },
  {
    question: 'Can you integrate SAP ERP with our existing systems?',
    answer: 'Yes. In many implementations, we connect SAP ERP with the systems you already rely on for sales, eCommerce, warehousing, reporting, or third-party tools so your teams work from a connected operating model.',
  },
  {
    question: 'Do you help with AI on top of SAP ERP?',
    answer: 'Yes. We add AI-driven automation where it creates measurable value, such as invoice processing, approval workflows, anomaly detection, reporting summaries, and process support layered into your SAP ecosystem.',
  },
  {
    question: 'Do you work with businesses outside Melbourne?',
    answer: 'Yes. We support businesses across Australia remotely and can also run on-site workshops when the project requires deeper stakeholder alignment.',
  },
  {
    question: 'What happens after implementation?',
    answer: 'Implementation is only the start. We continue with optimisation, workflow refinement, support, and AI enhancement so the ERP keeps improving as your business grows and changes.',
  },
];

const trustSignals = ['Structured delivery process', 'Australian business focus', '95% client satisfaction', 'AI-enabled ERP roadmap'];

const SapErpImplementation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

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
    title: 'SAP ERP Implementation Company Australia | Zynex Technologies',
    description: 'Zynex Technologies is an SAP ERP implementation partner helping Australian businesses modernise operations with AI-powered ERP strategy, deployment and support.',
  });

  return (
    <div className="min-h-screen bg-[#f8faf5] text-slate-900">
      <Schema schema={faqSchema} />

      <section className="relative overflow-hidden text-slate-900" style={{ background: 'linear-gradient(to bottom, #fcfbf7, #f4f0e6)' }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('/hero-background.jpg')" }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(113,147,52,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(113,147,52,0.12) 1px, transparent 1px)', backgroundSize: '72px 72px', maskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, black 40%, transparent 100%)' }} />
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-[#719334]/5 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-[#719334]/10 blur-3xl" />

        <div className="relative container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <span className="inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-[#719334]/20 bg-[#eef4e3] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5a7529] backdrop-blur-sm sm:px-4 sm:text-[11px]">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#719334]/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#719334]" />
                </span>
                <span>
                  SAP ERP Implementation Company <span className="opacity-50 mx-1.5">•</span> Melbourne, Australia
                </span>
              </span>

              <h1 className="mt-6 max-w-4xl text-3xl font-heading font-bold leading-[1.12] tracking-tight text-slate-900 sm:mt-8 sm:text-5xl sm:leading-[1.08] lg:text-[3.35rem]">
                SAP ERP Implementation Company in Australia
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Zynex Technologies helps growing businesses modernise operations with SAP ERP — aligning finance, supply chain, manufacturing, sales, and reporting behind a single, connected system that supports real-time decision making.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#719334]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Book an SAP ERP Readiness Review
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  href="#our-services"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/50 px-6 py-4 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-100"
                >
                  Explore our services
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-slate-400" />
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start w-full lg:ml-2 xl:ml-8 z-10">
              <div className="relative w-full lg:w-[145%] xl:w-[165%] max-w-none">
                <div aria-hidden="true" className="absolute -inset-3 rounded-[1.75rem] bg-[#719334]/5 blur-lg" />
                <div aria-hidden="true" className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl border-2 border-slate-200 sm:block" />
                <img src="/new-sap-logo.png" alt="SAP ERP" className="relative h-auto w-full max-w-md rounded-2xl object-contain shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200 mx-auto" />
              </div>
            </div>
          </div>

          <div className="mt-16 w-full border-t border-slate-200 pt-10 sm:mt-20">
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-6 lg:gap-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
                  <p className="text-3xl font-heading font-bold text-[#719334] sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-[13px] uppercase tracking-wider font-semibold text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="relative h-8 w-full">
          <div className="absolute inset-x-0 bottom-0 h-8 rounded-t-[2.5rem] bg-white" />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>The Problem</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                Why Businesses Move from Fragmented Systems to SAP ERP
              </h2>
              <HeadingBar />
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Most growing businesses begin with disconnected tools and manual workflows. As complexity grows, the cost of fragmented operations becomes visible in delays, reporting gaps, and missed opportunities across departments.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#719334]/15 bg-[#f8faf5] p-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)] sm:p-8">
              <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#719334] to-[#a3c46a]" />
              <span aria-hidden="true" className="pointer-events-none absolute -top-6 right-2 select-none font-serif text-[7rem] leading-none text-[#719334]/10">&rdquo;</span>
              <p className="relative text-lg font-semibold leading-8 text-slate-900">
                &ldquo;If your teams run from separate systems, the business is already operating slower than it should.&rdquo;
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                The real cost of disconnected processes is not just manual work. It is lost visibility, slower decisions, and reduced margin from process inefficiency.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problemItems.map(({ title, description, Icon }) => (
              <div key={title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)]">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#719334] to-[#a3c46a] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2.5 text-[13px] leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#eef4e3] blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#f1f5ec] blur-3xl" />

        <div className="relative container mx-auto max-w-7xl">
          <SectionLabel>The Solution</SectionLabel>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
              SAP ERP Creates One Connected Operating Model
            </h2>
            <div className="hidden items-center gap-4 lg:flex" aria-hidden="true">
              <img src="/sap-logo.png" alt="SAP ERP" className="h-16 w-16 object-contain rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200" />
              <span className="h-9 w-px bg-slate-300" />
              <span className="rounded-lg bg-gradient-to-br from-[#719334] to-[#5a7529] px-4 py-2 font-heading text-xl font-bold tracking-wide text-white shadow-md">ZYNEX</span>
            </div>
          </div>
          <HeadingBar />
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            SAP ERP brings finance, inventory, operations, project delivery, and reporting together in a single operating system. Zynex adds the strategic layer — implementation design, AI-enabled automation, and support that help your team use the platform for measurable business gains.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionServices.map(({ title, description, Icon }) => (
              <div key={title} className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)] sm:p-6">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#719334] to-[#a3c46a] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
              {[
                { Icon: ShieldCheck, label: 'Business continuity' },
                { Icon: Brain, label: 'AI-enabled workflows' },
                { Icon: Link2, label: 'Connected operations' },
                { Icon: UserRound, label: 'Real support' },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center justify-center gap-3 lg:px-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#719334] text-[#719334]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="max-w-[140px] text-sm font-semibold leading-5 text-slate-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <SectionLabel>AI Enhancement</SectionLabel>
              <h2 className="max-w-xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                AI Capabilities Built Into Every SAP ERP Project
              </h2>
              <HeadingBar />
              <p className="mt-5 text-base leading-8 text-slate-600">
                SAP ERP is powerful on its own, but the real advantage comes when operational data is used to automate repetitive work and provide faster, smarter decisions.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We shape AI layers around your actual workflows so the system supports your teams instead of adding friction after go-live.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#719334]/15 bg-gradient-to-br from-[#f8faf5] to-[#eef4e3] p-6 shadow-[0_8px_32px_rgba(113,147,52,0.10)] sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#719334]/10 blur-2xl" />
              <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529] shadow-sm ring-1 ring-[#719334]/15">
                AI Capabilities We Add
              </span>
              <ul className="mt-6 space-y-3">
                {aiCapabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:ring-[#719334]/20">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#719334] text-white"><Check className="h-3 w-3" strokeWidth={3.5} /></span>
                    <span className="text-sm leading-7 text-slate-700 sm:text-base">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="our-services" className="border-t border-slate-200 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Five Clear Pathways to a better SAP ERP operating model
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Whether you need a readiness review, full SAP ERP implementation, workflow redesign, or AI layer on top of an existing platform, we build the engagement around your business priorities.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pathways.slice(0, 4).map((item, index) => (
              <div key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
                {item.recommended && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#eef4e3] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#719334]">
                    Recommended Start
                  </span>
                )}
                <p className="text-sm font-semibold text-slate-400">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 pr-16 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-[#f1f5ec] px-2.5 py-1 text-xs font-medium text-slate-600">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 md:max-w-md lg:max-w-sm xl:max-w-[calc(25%-15px)]">
            <p className="text-sm font-semibold text-slate-400">05</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{pathways[4].title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pathways[4].description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {pathways[4].tags.map((tag) => (
                <span key={tag} className="rounded-md bg-[#f1f5ec] px-2.5 py-1 text-xs font-medium text-slate-600">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Focused ERP guidance for operationally complex businesses
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            SAP ERP delivers the most value where business complexity, compliance needs, or process volume make a disconnected toolset expensive and risky.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {industries.map(({ title, description, Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-[#f8faf5] p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#719334] shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            A structured SAP ERP delivery process that keeps the business in control
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            We keep implementation clear, measurable and realistic — helping your team understand where the value is, when decisions are made, and what needs to happen before go-live.
          </p>

          <div className="relative mt-20 hidden lg:block">
            <div aria-hidden="true" className="absolute left-0 right-0 top-9 h-0.5 bg-gradient-to-r from-[#719334]/10 via-[#719334]/40 to-[#719334]/10" />
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className="group relative pt-2">
                  {index < processSteps.length - 1 && (
                    <div aria-hidden="true" className="absolute -right-5 top-9 z-20 flex h-[72px] -translate-y-0 items-center justify-center text-[#719334]">
                      <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] ring-1 ring-[#719334]/15 transition-transform duration-300 group-hover:translate-x-1.5"><ArrowRight className="h-5 w-5" strokeWidth={2} /></span>
                    </div>
                  )}
                  <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-xl font-bold tracking-tight text-white shadow-lg shadow-[#719334]/30 ring-4 ring-[#f8faf5] transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                  <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#719334]/25 group-hover:shadow-[0_12px_32px_rgba(113,147,52,0.14)]">
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                    <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#eef4e3] px-3 py-1 text-sm font-semibold text-[#5a7529] ring-1 ring-[#719334]/10"><Timer className="h-3.5 w-3.5" aria-hidden="true" />{step.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 grid gap-6 lg:hidden">
            <div aria-hidden="true" className="absolute bottom-6 left-[1.65rem] top-6 w-0.5 bg-[#719334]/25" />
            {processSteps.map((step) => (
              <div key={step.number} className="relative flex gap-5">
                <div className="relative z-10 flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-base font-bold text-white shadow-md shadow-[#719334]/30 ring-4 ring-[#f8faf5]">{step.number}</div>
                <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                  <p className="mt-4 inline-flex rounded-full bg-[#eef4e3] px-3 py-1 text-sm font-semibold text-[#5a7529]">{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start xl:gap-20">
            <div>
              <SectionLabel>Why Zynex</SectionLabel>
              <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                What sets us apart as your SAP ERP implementation partner
              </h2>
              <HeadingBar />
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                We bring strategy, implementation and operational understanding together so your SAP ERP program is not just technically sound but commercially useful.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                {whyChooseItems.map((item) => (
                  <div key={item.title} className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-slate-100 bg-[#f8faf5] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#719334]/25 hover:bg-white hover:shadow-[0_12px_32px_rgba(113,147,52,0.12)]">
                    <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 rounded-r-full bg-gradient-to-b from-[#719334] to-[#a3c46a] transition-transform duration-300 group-hover:scale-y-100" />
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef4e3] text-[#719334] transition-colors duration-300 group-hover:bg-[#719334] group-hover:text-white">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 flex flex-col gap-6 overflow-hidden rounded-3xl border border-[#719334]/15 bg-gradient-to-br from-[#f1f5ec] to-[#eef4e3] p-6 shadow-[0_8px_32px_rgba(113,147,52,0.10)] sm:flex-row sm:items-start sm:p-8">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-[#719334]/10 blur-2xl" />
                <div className="relative flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-center shadow-md ring-1 ring-[#719334]/20">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#719334]">ISO</p>
                    <p className="mt-1 text-sm font-bold leading-tight text-[#719334]">9001:2015</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Supported</p>
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-heading font-bold text-slate-900">Quality-led ERP delivery</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    We bring disciplined delivery practices into every implementation project, with clear governance, progress visibility, and a practical path to operational value.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white p-5 shadow-[0_8px_40px_rgba(113,147,52,0.12)] ring-1 ring-slate-200 transition-transform duration-500 hover:scale-[1.01]">
                <img src="/computer-sap.png" alt="SAP ERP dashboards and performance monitoring" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Start Here</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Not sure if SAP ERP is the right fit yet?
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Start with a practical assessment of your current systems, workflow bottlenecks, and digital opportunities before committing to a transformation programme.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col gap-4">
              <img src="/image-sap.png" alt="SAP ERP readiness review" className="w-full rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.07)] transition-transform duration-500 hover:-translate-y-1" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#719334]/15 bg-gradient-to-br from-[#f1f5ec] to-[#eef4e3] p-6 shadow-[0_8px_32px_rgba(113,147,52,0.10)] sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#719334]/10 blur-2xl" />
              <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529] shadow-sm ring-1 ring-[#719334]/15">
                The SAP ERP Readiness Review includes:
              </span>
              <div className="mt-6 space-y-3">
                {readinessReviewItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:ring-[#719334]/20">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#719334] text-white"><Check className="h-3 w-3" strokeWidth={3.5} /></span>
                    <span className="text-sm leading-7 text-slate-700 sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => setIsModalOpen(true)} className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#719334]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
                Book an SAP ERP Readiness Review
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-5xl">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            SAP ERP questions businesses ask before they commit
          </h2>
          <HeadingBar />
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-[#f8faf5] p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 text-[#719334]">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#719334]/15 bg-gradient-to-br from-[#f3f7ea] via-[#f9fbf7] to-[#f3f7ea] p-8 shadow-[0_14px_40px_rgba(113,147,52,0.08)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionLabel>Ready to act</SectionLabel>
                <h2 className="max-w-2xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                  Need a clearer, smarter operating model for your business?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  Let’s map the business case, identify the right SAP ERP approach, and define the roadmap before you commit to a long-term change programme.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <button type="button" onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#719334]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
                  Book Your SAP ERP Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="flex flex-wrap gap-2">
                  {trustSignals.map((signal) => (
                    <span key={signal} className="rounded-full border border-[#719334]/15 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#5a7529]">{signal}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default SapErpImplementation;

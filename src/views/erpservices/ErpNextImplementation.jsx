'use client';

import React, { useState } from 'react';
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
  Plus,
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

/* ---------------------------------------------------------------------- */
/*  Shared UI primitives                                                  */
/* ---------------------------------------------------------------------- */

function SectionLabel({ children }) {
  return (
    <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#719334]/20 bg-[#eef4e3] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#719334]" aria-hidden="true" />
      {children}
    </p>
  );
}

function HeadingBar() {
  return (
    <div
      aria-hidden="true"
      className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#719334] to-[#a3c46a]"
    />
  );
}

/* ---------------------------------------------------------------------- */
/*  Decorative mini-graphics for The Solution (pure visuals, no content)  */
/* ---------------------------------------------------------------------- */

const MiniBars = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
    <g transform="translate(0, 12)">
      {[10, 18, 27, 35, 44].map((h, i) => (
        <rect key={i} x={i * 14 + 2} y={46 - h} width={9} height={h} rx={2} fill={i % 2 === 0 ? '#719334' : '#a3c46a'} />
      ))}
    </g>
  </svg>
);

const MiniFunnel = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
    <g transform="translate(0, 12)">
      <path d="M6 4h60l-12 14H18L6 4z" fill="#719334" />
      <path d="M20 22h32l-8 12H28l-8-12z" fill="#a3c46a" />
      <path d="M31 38h10l-3 8h-4l-3-8z" fill="#cfe0ad" />
    </g>
  </svg>
);

const MiniDonut = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
    <g transform="translate(12, 12)">
      <circle cx="24" cy="24" r="18" fill="none" stroke="#eef4e3" strokeWidth="9" />
      <circle
        cx="24" cy="24" r="18" fill="none" stroke="#719334" strokeWidth="9"
        strokeDasharray="80 33" strokeLinecap="round" transform="rotate(-90 24 24)"
      />
    </g>
  </svg>
);

const MiniConveyor = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
    <g transform="translate(0, 12)">
      {[10, 32, 54].map((x, i) => (
        <rect key={i} x={x} y={14} width={12} height={12} rx={2} fill="#719334" opacity={1 - i * 0.25} />
      ))}
      <rect x="4" y="32" width="64" height="8" rx="4" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="14" cy="36" r="2.5" fill="#94a3b8" />
      <circle cx="36" cy="36" r="2.5" fill="#94a3b8" />
      <circle cx="58" cy="36" r="2.5" fill="#94a3b8" />
    </g>
  </svg>
);

const MiniRing = ({ className = 'w-full h-full', label }) => (
  <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
    <g transform="translate(12, 12)">
      <circle cx="24" cy="24" r="19" fill="none" stroke="#eef4e3" strokeWidth="6" />
      <circle
        cx="24" cy="24" r="19" fill="none" stroke="#5a7529" strokeWidth="6"
        strokeDasharray="90 30" strokeLinecap="round" transform="rotate(-90 24 24)"
      />
      {label && (
        <text x="24" y="29" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e293b">
          {label}
        </text>
      )}
    </g>
  </svg>
);

const MiniTrend = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
    <g transform="translate(0, 12)">
      <path d="M4 42 L22 30 L38 34 L54 16 L68 8" fill="none" stroke="#719334" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 42 L22 30 L38 34 L54 16 L68 8 V46 H4 Z" fill="#719334" opacity="0.08" />
      {[[4, 42], [22, 30], [38, 34], [54, 16], [68, 8]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#5a7529" />
      ))}
    </g>
  </svg>
);

const heroStats = [
  { value: '95%', label: 'Client Satisfaction Rate' },
  { value: '6 to 12 wks', label: 'Average Deployment Time' },
  { value: '3x ROI', label: 'Average Return on Investment' },
  { value: '24/7', label: 'Production Support' },
];

const problemItems = [
  {
    title: 'Duplicate data entry across systems',
    description:
      'When your finance, sales and inventory tools do not share a single source of truth, your team enters the same information multiple times — increasing errors and slowing every workflow.',
    Icon: Layers,
    Art: MiniBars,
    img: '/problem-duplicate-entry.png',
  },
  {
    title: 'Manual spreadsheet reporting',
    description:
      'Critical business decisions depend on manually updated spreadsheets that are outdated before they reach the people who need them.',
    Icon: FileSpreadsheet,
    Art: MiniTrend,
    img: '/problem-spreadsheet.png',
  },
  {
    title: 'Finance, sales and operations misaligned',
    description:
      'Teams work in silos. Sales commits to timelines that operations cannot meet. Finance discovers margin issues after the fact, not before.',
    Icon: GitBranch,
    Art: MiniFunnel,
    img: '/problem-misaligned.png',
  },
  {
    title: 'Poor inventory and purchasing visibility',
    description:
      'Stock levels, reorder points and supplier lead times are managed reactively — leading to overstocking, stockouts and missed sales.',
    Icon: Package,
    Art: MiniConveyor,
    img: '/problem-inventory.png',
  },
  {
    title: 'Slow approvals and quote-to-invoice workflows',
    description:
      'Quote generation, purchase approvals and invoice processing involve manual handoffs that delay revenue and frustrate customers.',
    Icon: Timer,
    Art: MiniRing,
    img: '/problem-approvals.png',
  },
  {
    title: 'Limited owner-level visibility',
    description:
      'Business owners and managers lack real-time dashboards that show what is actually happening across the operation — not what happened last month.',
    Icon: Search,
    Art: MiniDonut,
    img: '/problem-visibility.png',
  },
];

const solutionServices = [
  {
    title: 'Accounting & Finance',
    description:
      'Multi-currency general ledger, accounts payable and receivable, GST, BAS and financial statements configured for full Australian compliance.',
    Icon: Calculator,
    Art: MiniBars,
    img: '/solution-finance.png',
  },
  {
    title: 'Sales & CRM',
    description:
      'Quotations, sales orders, pipeline management and customer lifecycle tracking connected directly to inventory and invoicing.',
    Icon: Users,
    Art: MiniFunnel,
    img: '/solution-sales.png',
  },
  {
    title: 'Stock & Procurement',
    description:
      'Multi-warehouse inventory, serial and batch tracking, purchase orders, supplier scorecards and automated reorder workflows.',
    Icon: Warehouse,
    Art: MiniDonut,
    img: '/solution-inventory.png',
  },
  {
    title: 'Manufacturing & Operations',
    description:
      'Production planning, bill of materials, work orders and shop floor workflows for businesses that make or assemble products.',
    Icon: Factory,
    Art: MiniConveyor,
    img: '/solution-manufacturing.png',
  },
  {
    title: 'Projects & Assets',
    description:
      'Project and task tracking, timesheet management, revenue recognition, expense tracking and fixed asset management for project-based businesses.',
    Icon: Wrench,
    Art: MiniRing,
    img: '/solution-projects.png',
  },
  {
    title: 'HR, Payroll & Reporting',
    description:
      'Employee management, leave tracking, payroll processing, real-time dashboards and KPI reporting without manual data compilation.',
    Icon: BarChart3,
    Art: MiniTrend,
    img: '/solution-reporting.png',
  },
];

const aiCapabilities = [
  'AI document processing for invoices, purchase orders, delivery dockets and supplier documents',
  'Automated approval triggers based on rules, thresholds and role assignments',
  'Smart alerts for stock shortages, overdue invoices, project overruns and margin erosion',
  'Reporting assistants that surface operational insights without manual report building',
  'Anomaly detection in financial transactions and inventory movements',
  'Customer follow-up automation for quotes, renewals and payment reminders',
  'Predictive inventory and reorder recommendations based on demand patterns',
  'AI agents for internal knowledge retrieval, workflow guidance and process onboarding',
];

const pathways = [
  {
    title: 'AI ERP Readiness Review',
    description:
      'Our entry diagnostic. We assess your current systems, workflow gaps, reporting limitations and AI automation opportunities, then deliver a practical ERP roadmap before a single line of code is written.',
    tags: ['Systems review', 'Workflow mapping', 'ROI modelling', 'ERP roadmap'],
    recommended: true,
  },
  {
    title: 'ERPNext Deployment',
    description:
      'A structured ERPNext deployment built around how your business actually works. Module selection, configuration, custom workflows, data migration, user training and go-live support included.',
    tags: ['Module configuration', 'Data migration', 'User training', 'Go-live support'],
  },
  {
    title: 'AI ERP Automation Layer',
    description:
      'Add intelligence to your ERP, not just software. AI document processing, approval automation, smart alerts, reporting assistants and workflow optimisation built on your ERPNext foundation.',
    tags: ['AI automation', 'Smart workflows', 'Document AI', 'Dashboards'],
  },
  {
    title: 'ERP Migration & Integration',
    description:
      'Move from disconnected systems to connected operations without unnecessary disruption. Phased migration, data mapping, integration with existing tools and old-to-new workflow redesign.',
    tags: ['Data migration', 'API integration', 'Project transition', 'Workflow redesign'],
  },
  {
    title: 'ERP Optimisation & Support',
    description:
      'Your ERP should improve as your business grows. Workflow refinement, module expansion, automation tuning, dashboard upgrades and an ongoing AI enhancement roadmap after go-live.',
    tags: ['Workflow refinement', 'Automation tuning', 'Ongoing support', 'AI roadmap'],
  },
];

const industryModules = [
  {
    industry: 'Construction, Trades & Field Service',
    modules: ['Field Service Management', 'Project Management & Timesheets', 'Inventory, Purchase & Material Control'],
    Icon: HardHat,
  },
  {
    industry: 'Manufacturing',
    modules: ['Manufacturing / MRP', 'Inventory & Warehouse Management', 'Quality Management'],
    Icon: Factory,
  },
  {
    industry: 'Wholesale, Distribution & Inventory-Based Businesses',
    modules: ['Inventory & Warehouse Management', 'Purchase & Supplier Management', 'Sales Order & Invoicing Management'],
    Icon: Package,
  },
  {
    industry: 'Retail, Franchise & E-commerce',
    modules: ['Point of Sale — POS', 'eCommerce Management', 'Inventory & Stock Control'],
    Icon: Store,
  },
  {
    industry: 'Healthcare, Allied Health & Clinics',
    modules: ['Appointments & CRM', 'Invoicing & Payments', 'Documents & Digital Signatures'],
    Icon: Stethoscope,
  },
  {
    industry: 'Professional Services',
    modules: ['Project Management', 'Timesheets & Billing', 'CRM & Sales Pipeline'],
    Icon: Briefcase,
  },
  {
    industry: 'Accounting, Bookkeeping & Finance Operations',
    modules: ['Accounting & Invoicing', 'Document Management & Approvals', 'Expenses & Reporting'],
    Icon: Calculator,
  },
  {
    industry: 'Hospitality Groups',
    modules: ['Restaurant POS', 'Inventory & Purchase Management', 'Staff Planning & Timesheets'],
    Icon: Utensils,
  },
];

const industries = [
  {
    title: 'Wholesale & Distribution',
    description:
      'Multi-location stock management, purchase orders and supplier workflows configured for high-volume distribution operations.',
    Icon: Package,
    img: '/odoo-solutions/solution-inventory.png',
  },
  {
    title: 'Retail & eCommerce',
    description:
      'Unified inventory, POS and online store data so your team sees one accurate picture of stock and sales across every channel.',
    Icon: ShoppingCart,
    img: '/odoo-solutions/solution-sales.png',
  },
  {
    title: 'Manufacturing',
    description:
      'Production planning, bill of materials and shop floor visibility for businesses that make, assemble or process products.',
    Icon: Factory,
    img: '/odoo-solutions/solution-manufacturing.png',
  },
  {
    title: 'Construction & Field Service',
    description:
      'Job costing, site management and technician scheduling for project-based businesses with complex operational workflows.',
    Icon: Wrench,
    img: '/odoo-solutions/solution-projects.png',
  },
  {
    title: 'Professional Services',
    description:
      'Project-based billing, resource planning and time tracking for consulting, agency and service-based businesses.',
    Icon: Briefcase,
    img: '/odoo-solutions/solution-reporting.png',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description:
      'We assess your current systems, data readiness, workflow gaps and potential ROI. No guesswork just an honest picture of where you are and what ERP can realistically deliver.',
    duration: '1 to 2 weeks',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description:
      'We develop your AI ERP strategy, design custom architecture around your actual workflows and create a detailed implementation roadmap with clear milestones and agreed business outcomes.',
    duration: '1 to 2 weeks',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description:
      'Our engineering team configures and customises your ERPNext solution using agile sprints, with continuous testing, validation and refinement. AI automation layers are added at the right stage of delivery.',
    duration: '4 to 12 weeks',
  },
  {
    number: '04',
    title: 'Deploy & Optimise',
    description:
      'We deploy to production, integrate with your systems, train your team and continuously optimise based on real-world performance data. Your ERP should improve as your business grows.',
    duration: 'Ongoing',
  },
];

const whyChooseItems = [
  {
    title: 'AI-First ERP Positioning',
    description: 'We layer AI intelligence on top of ERPNext open-source capabilities, giving you workflow automation and decision support built in from the start.',
  },
  {
    title: 'Australian Business Focus',
    description: 'Built for Australian SMBs and mid-market businesses. We understand local compliance, GST, BAS and the operational context of growing Australian companies.',
  },
  {
    title: 'Feasibility-First Approach',
    description: 'We validate ROI before a single line of code. The AI ERP Readiness Review ensures every deployment is grounded in real, measurable business value.',
  },
  {
    title: 'Structured Delivery Process',
    description: 'Discovery, workflow mapping, configuration, testing, deployment, training and optimisation. A structured handoff, not a loose implementation.',
  },
  {
    title: 'Industry-Specific Focus',
    description: 'We focus on industries where ERP creates real operational impact not a claim to serve everyone and therefore specialise in no one.',
  },
  {
    title: 'Ongoing Optimisation',
    description: 'Our engagement does not end at go-live. Automation tuning, AI roadmaps and module expansion keep your ERP improving as your business scales.',
  },
];

const readinessReviewItems = [
  'Current systems review',
  'Workflow gap mapping',
  'Software fragmentation assessment',
  'AI automation opportunity review',
  'Module fit assessment',
  'Migration complexity assessment',
  'Reporting and dashboard gap review',
  'Recommended ERP roadmap',
];

const faqs = [
  {
    question: 'What does an ERPNext implementation company actually do?',
    answer:
      'An ERPNext implementation company manages the entire process of deploying ERPNext for your business — from initial requirements gathering and system design through configuration, custom app development, data migration, user training, and go-live support. The goal is to ensure ERPNext is set up correctly for your specific workflows and that your team can use it effectively from day one.',
  },
  {
    question: 'How long does an ERPNext implementation take?',
    answer:
      "Implementation timelines vary depending on scope and complexity. A focused single-module implementation can be completed in 6 to 8 weeks. A full multi-module implementation for a complex business typically takes 4 to 6 months. Enterprise-scale implementations with extensive custom development can run 6 to 12 months. We'll give you a realistic timeline estimate after a discovery session.",
  },
  {
    question: 'What is ERPNext?',
    answer:
      "ERPNext is a 100% open-source enterprise resource planning platform built by Frappe Technologies. It covers accounting, CRM, sales, inventory, manufacturing, HR, payroll, project management, and more — all in a single integrated system. Unlike proprietary ERPs, ERPNext has no per-user licensing fees, making it a cost-effective and scalable fit for Australian SMBs and mid-market businesses.",
  },
  {
    question: 'How much does ERPNext implementation cost in Australia?',
    answer:
      'Implementation costs depend on the number of modules, the level of customisation required, data migration complexity, and the size of your team. A straightforward implementation for a small business might start from $15,000 to $30,000 AUD. More complex implementations for mid-market businesses typically range from $50,000 to $150,000 AUD or more. We provide detailed fixed-price proposals after a discovery engagement.',
  },
  {
    question: 'What does AI-driven ERPNext actually mean in practice?',
    answer:
      'AI-driven ERPNext means your system does more than store and report data. Zynex builds automation layers on top of ERPNext — document processing, smart approvals, predictive alerts, reporting assistants and workflow agents — so your team spends less time on manual tasks and more time on decisions that move the business forward.',
  },
  {
    question: 'Can you migrate data from our existing accounting or ERP system to ERPNext?',
    answer:
      'Yes. Zynex handles phased data migration from common Australian accounting platforms, spreadsheets and legacy ERP systems. We map your existing data structures, validate records before import, and run parallel testing so your team can verify accuracy before go-live.',
  },
  {
    question: 'Is ERPNext free? What are the actual costs?',
    answer:
      'ERPNext software is 100% free and open-source with no licensing fees. The costs you pay are for implementation, customisation, hosting and support. Zynex provides transparent fixed-price proposals covering all implementation work. Ongoing hosting on Frappe Cloud or your own infrastructure is a separate cost we help you plan for.',
  },
  {
    question: 'Do you work with businesses outside Melbourne?',
    answer:
      'Yes. Zynex Technologies is based in Melbourne and serves SMB and mid-market businesses across Australia. Discovery, configuration, training and support are delivered remotely with on-site sessions available when required.',
  },
  {
    question: 'What happens after go-live?',
    answer:
      'Our engagement does not end at deployment. Zynex provides ongoing optimisation, workflow refinement, module expansion, automation tuning and an AI enhancement roadmap so your ERP continues to improve as your business grows and your operational needs evolve.',
  },
];

const trustSignals = [
  'Structured delivery process',
  'ISO 9001:2015-supported capability',
  'Melbourne, Australia',
  '95% client satisfaction',
];

const ErpNextImplementation = () => {
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
    title: 'ERPNext Implementation Company in Australia | Zynex Technologies',
    description:
      "Zynex Technologies is Australia's specialist ERPNext implementation company. AI-enhanced deployments for SMBs and mid-market businesses. Free ERP Readiness Review.",
  });

  return (
    <div className="min-h-screen bg-[#f8faf5] text-slate-900">
      <Schema schema={faqSchema} />

      {/* ================================ Hero ================================ */}
      <section
        className="relative overflow-hidden text-slate-900"
        style={{ background: 'linear-gradient(to bottom, #fcfbf7, #f4f0e6)' }}
      >
        {/* Background image — replace the URL below with your own image path */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: "url('/hero-background.jpg')" }}
        />
        {/* subtle grid + glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(113,147,52,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(113,147,52,0.12) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, black 40%, transparent 100%)',
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-[#719334]/5 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-[#719334]/10 blur-3xl" />

        <div className="relative container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <span className="inline-flex whitespace-nowrap items-center gap-2.5 rounded-full border border-[#719334]/20 bg-[#eef4e3] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5a7529] backdrop-blur-sm sm:px-4 sm:text-[11px]">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#719334]/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#719334]" />
                </span>
                <span>
                  ERPNext Implementation Company <span className="opacity-50 mx-1.5">•</span> Melbourne, Australia
                </span>
              </span>

              <h1 className="mt-8 max-w-4xl text-4xl font-heading font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem]">
                ERPNext Implementation Company in Australia
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Zynex Technologies is a specialist ERPNext implementation company in Australia. We help SMB and mid-market
                businesses run their entire operation on one open-source platform connecting finance, sales, inventory,
                manufacturing, projects and HR with AI-led automation built in from day one.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#719334]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Book an AI ERP Readiness Review
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
                <img
                  src="/zynex1.webp"
                  alt="ERPNext Implementation"
                  className="relative h-auto w-full rounded-2xl object-contain shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 w-full border-t border-slate-200 pt-10 sm:mt-20">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center"
                >
                  <p className="text-3xl font-heading font-bold text-[#719334] sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-[13px] uppercase tracking-wider font-semibold text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* soft bottom curve into the next section */}
        <div aria-hidden="true" className="relative h-8 w-full">
          <div className="absolute inset-x-0 bottom-0 h-8 rounded-t-[2.5rem] bg-white" />
        </div>
      </section>

      {/* ============================ The Problem ============================ */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>The Problem</SectionLabel>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                Why Australian Businesses Choose an ERPNext Implementation Company
              </h2>
              <HeadingBar />
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Most growing Australian businesses start with simple tools — spreadsheets, standalone accounting software
                and disconnected apps. As operations scale, those tools create friction: duplicate data entry, manual
                reporting, slow approvals and limited visibility across finance, sales and operations.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#719334]/15 bg-[#f8faf5] p-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)] sm:p-8">
              <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#719334] to-[#a3c46a]" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 right-2 select-none font-serif text-[7rem] leading-none text-[#719334]/10"
              >
                &rdquo;
              </span>
              <p className="relative text-lg font-semibold leading-8 text-slate-900">
                &ldquo;Your accounting system records the result.{' '}
                <span className="text-[#719334]">ERPNext helps manage the operation</span> that creates the result.&rdquo;
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                When sales, finance and operations are disconnected, every decision takes longer and every error costs
                more. That is when Australian businesses move from standalone tools to a connected open-source ERP platform like
                ERPNext — implemented properly, not just installed.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problemItems.map(({ title, description, Icon, Art, img }) => (
              <div
                key={title}
                className="group relative flex overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)]"
              >
                {/* top accent sweep on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#719334] to-[#a3c46a] transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* Left: icon + title + description */}
                <div className="relative flex w-3/5 flex-col pr-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2.5 text-[13px] leading-6 text-slate-600">{description}</p>
                </div>

                {/* Right: illustration (swap `img` path for your own artwork) */}
                <div className="relative flex w-2/5 items-center justify-center self-stretch">
                  {/* built-in infographic fallback (shows until your image is added) */}
                  <div className="pointer-events-none flex h-28 w-full max-w-[130px] items-center justify-center text-[#719334] opacity-90">
                    <Art className="h-full w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ The Solution ============================ */}
      <section className="relative overflow-hidden border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#eef4e3] blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#f1f5ec] blur-3xl" />

        <div className="relative container mx-auto max-w-7xl">
          <SectionLabel>The Solution</SectionLabel>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
              As Your ERPNext Implementation Company, Zynex Adds the Intelligence
            </h2>
            {/* brand lockup (matches reference image) */}
            <div className="hidden items-center gap-4 lg:flex" aria-hidden="true">
              <span className="font-heading text-3xl font-bold tracking-tight text-[#8f9bb3]">ERPNext</span>
              <span className="h-9 w-px bg-slate-300" />
              <span className="rounded-lg bg-gradient-to-br from-[#719334] to-[#5a7529] px-4 py-2 font-heading text-xl font-bold tracking-wide text-white shadow-md">
                ZYNEX
              </span>
            </div>
          </div>
          <HeadingBar />
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            ERPNext connects accounting, sales, inventory, manufacturing, projects, HR and purchasing in one platform. Zynex
            enhances that foundation with AI-assisted automation, custom workflows and Australian compliance
            configuration — so your ERP works the way your business actually operates.
          </p>

          {/* Infographic layout (matches reference image): left cards + central hub + right cards */}
          <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* Left column */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {solutionServices
                .filter((_, i) => i % 2 === 0)
                .map(({ title, description, Icon, Art }) => (
                  <div
                    key={title}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)] sm:p-6"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#719334] to-[#a3c46a] transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center self-start rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-slate-600">{description}</p>
                    </div>
                    <div className="pointer-events-none hidden flex-shrink-0 text-[#719334] xl:block" aria-hidden="true">
                      <Art
                        className="h-20 w-20"
                        label={title === 'Projects & Assets' ? '75%' : undefined}
                      />
                    </div>
                  </div>
                ))}
            </div>

            {/* Central hub */}
            <div className="relative mx-auto hidden h-[340px] w-[340px] items-center justify-center lg:flex" aria-hidden="true">
              {/* outer decorative rings */}
              <div className="absolute inset-4 rounded-full border border-slate-200/80" />
              <div className="absolute inset-10 rounded-full border-2 border-dashed border-[#719334]/25" />
              <svg viewBox="0 0 340 340" className="absolute inset-0 h-full w-full">
                <circle
                  cx="170" cy="170" r="130" fill="none" stroke="#719334" strokeWidth="5"
                  strokeDasharray="240 580" strokeLinecap="round" transform="rotate(-60 170 170)"
                  opacity="0.55"
                />
              </svg>

              {/* inner circle */}
              <div className="relative z-10 flex h-52 w-52 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-[0_18px_44px_rgba(15,23,42,0.10)]">
                <span className="font-heading text-4xl font-bold tracking-tight text-[#714B67]">ERPNext</span>
                <p className="mt-2 px-8 text-sm font-semibold leading-6 text-slate-700">
                  Unified. Intelligent. Connected.
                </p>
              </div>

              {/* orbiting module nodes */}
              {[
                { Icon: Calculator, className: 'left-6 top-16' },
                { Icon: Users, className: 'right-6 top-16' },
                { Icon: Warehouse, className: '-left-1 top-1/2 -translate-y-1/2' },
                { Icon: Factory, className: '-right-1 top-1/2 -translate-y-1/2' },
                { Icon: Wrench, className: 'bottom-16 left-6' },
                { Icon: BarChart3, className: 'bottom-16 right-6' },
              ].map(({ Icon, className }, i) => (
                <span
                  key={i}
                  className={`absolute z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/30 ring-4 ring-white ${className}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              ))}
            </div>

            {/* Right column */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {solutionServices
                .filter((_, i) => i % 2 === 1)
                .map(({ title, description, Icon, Art }) => (
                  <div
                    key={title}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)] sm:p-6"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#719334] to-[#a3c46a] transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center self-start rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-slate-600">{description}</p>
                    </div>
                    <div className="pointer-events-none hidden flex-shrink-0 text-[#719334] xl:block" aria-hidden="true">
                      <Art className="h-20 w-20" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Bottom feature strip (matches reference image) */}
          <div className="mt-12 rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
              {[
                { Icon: ShieldCheck, label: 'Australian Compliance' },
                { Icon: Brain, label: 'AI-Assisted Automation' },
                { Icon: Link2, label: 'One Connected Platform' },
                { Icon: UserRound, label: 'Local Support, Real People' },
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

      {/* =========================== AI Capabilities =========================== */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <SectionLabel>AI Enhancement</SectionLabel>
              <h2 className="max-w-xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                AI Capabilities Built Into Every ERPNext Implementation Project
              </h2>
              <HeadingBar />
              <p className="mt-5 text-base leading-8 text-slate-600">
                Modern ERP is not just about storing data — it is about using that data to make better decisions faster.
                Zynex integrates AI capabilities throughout your ERPNext implementation to automate manual work and surface
                operational intelligence your team can act on immediately.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Every AI layer we add is configured around your actual workflows — not bolted on as a generic add-on
                that your team ignores after go-live.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#719334]/15 bg-gradient-to-br from-[#f8faf5] to-[#eef4e3] p-6 shadow-[0_8px_32px_rgba(113,147,52,0.10)] sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#719334]/10 blur-2xl" />
              <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529] shadow-sm ring-1 ring-[#719334]/15">
                AI Capabilities We Add
              </span>
              <ul className="mt-6 space-y-3">
                {aiCapabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex gap-3 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:ring-[#719334]/20"
                  >
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#719334] text-white">
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    <span className="text-sm leading-7 text-slate-700 sm:text-base">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== Five Pathways =========================== */}
      <section id="our-services" className="border-t border-slate-200 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Our Services as an ERPNext Implementation Company in Australia</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Five Clear Pathways to Connected ERP
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Every business is at a different stage. We have structured our ERPNext implementation services into five clear
            pathways so you can start where you are, whether that is a readiness review, a full deployment, or
            optimisation of an existing ERPNext system.
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
                    <span key={tag} className="rounded-md bg-[#f1f5ec] px-2.5 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
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
                <span key={tag} className="rounded-md bg-[#f1f5ec] px-2.5 py-1 text-xs font-medium text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Focused ERP for Operationally Complex Businesses
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Zynex focuses on Australian businesses with operational complexity, multiple locations, mixed revenue streams
            or high transaction volumes, where ERPNext delivers the most measurable impact.
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

      {/* Industry-Specific Modules */}
      <section className="border-t border-slate-200 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Industry-Specific ERP Modules for Australian Businesses</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Industry-Specific ERP Modules for Australian Businesses
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            ERPNext modules configured for your industry — not generic templates that require extensive customisation.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industryModules.map(({ industry, modules, Icon }) => (
              <div key={industry} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{industry}</h3>
                <ul className="mt-4 space-y-2">
                  {modules.map((module) => (
                    <li key={module} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#719334]" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ How We Work ============================ */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            How We Work as an ERPNext Implementation Company in Australia
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Our ERPNext implementation process is structured, transparent, and built around your business outcomes — not just technical delivery.
          </p>

          {/* Desktop timeline */}
          <div className="relative mt-20 hidden lg:block">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-9 h-0.5 bg-gradient-to-r from-[#719334]/10 via-[#719334]/40 to-[#719334]/10"
            />
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className="group relative pt-2">
                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute -right-5 top-9 z-20 flex h-[72px] -translate-y-0 items-center justify-center text-[#719334]"
                    >
                      <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] ring-1 ring-[#719334]/15 transition-transform duration-300 group-hover:translate-x-1.5">
                        <ArrowRight className="h-5 w-5" strokeWidth={2} />
                      </span>
                    </div>
                  )}
                  <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-xl font-bold tracking-tight text-white shadow-lg shadow-[#719334]/30 ring-4 ring-[#f8faf5] transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                  <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#719334]/25 group-hover:shadow-[0_12px_32px_rgba(113,147,52,0.14)]">
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                    <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#eef4e3] px-3 py-1 text-sm font-semibold text-[#5a7529] ring-1 ring-[#719334]/10">
                      <Timer className="h-3.5 w-3.5" aria-hidden="true" />
                      {step.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="relative mt-12 grid gap-6 lg:hidden">
            <div aria-hidden="true" className="absolute bottom-6 left-[1.65rem] top-6 w-0.5 bg-[#719334]/25" />
            {processSteps.map((step) => (
              <div key={step.number} className="relative flex gap-5">
                <div className="relative z-10 flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-base font-bold text-white shadow-md shadow-[#719334]/30 ring-4 ring-[#f8faf5]">
                  {step.number}
                </div>
                <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                  <p className="mt-4 inline-flex rounded-full bg-[#eef4e3] px-3 py-1 text-sm font-semibold text-[#5a7529]">
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= Why Zynex ============================= */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start xl:gap-20">
            {/* Left: heading + vertical item list */}
            <div>
              <SectionLabel>Why Zynex</SectionLabel>
              <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                What Sets Us Apart as an ERPNext Implementation Company
              </h2>
              <HeadingBar />
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Unlike traditional consultants who deliver slide decks, Zynex delivers production-ready ERPNext systems with
                measurable business impact from day one.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                {whyChooseItems.map((item) => (
                  <div
                    key={item.title}
                    className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-slate-100 bg-[#f8faf5] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#719334]/25 hover:bg-white hover:shadow-[0_12px_32px_rgba(113,147,52,0.12)]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 rounded-r-full bg-gradient-to-b from-[#719334] to-[#a3c46a] transition-transform duration-300 group-hover:scale-y-100"
                    />
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

              {/* ISO footer strip */}
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
                  <h3 className="text-xl font-heading font-bold text-slate-900">Quality-Led ERP Delivery</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    Zynex Technologies delivers ERP projects through a structured implementation approach covering discovery,
                    workflow mapping, configuration, testing, deployment, training and optimisation. Our ERP delivery is
                    supported by ISO 9001:2015-certified development capability, helping bring quality discipline,
                    documentation and continuous improvement practices into every ERPNext implementation project.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: chart */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white p-5 shadow-[0_8px_40px_rgba(113,147,52,0.12)] ring-1 ring-slate-200 transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src="/computer.webp"
                  alt="ERPNext ROI and performance graph"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== Readiness Review ========================== */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">

          {/* Heading — top-left, same pattern as other sections */}
          <SectionLabel>Start Here</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Not Sure If ERPNext Is the Right Fit for Your Business?
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            ERP is a significant investment. If you are not sure whether it is the right move for your business right
            now, start with our AI ERP Readiness Review — an honest assessment with no obligation to proceed.
          </p>

          {/* Two equal-height columns */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">

            {/* Left: relevant images */}
            <div className="flex flex-col gap-4">
              <img
                src="/download_erp.png"
                alt="AI ERP Readiness Review progress"
                className="w-full rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.07)] transition-transform duration-500 hover:-translate-y-1"
              />
            </div>

            {/* Right: checklist + CTA */}
            <div className="relative overflow-hidden rounded-3xl border border-[#719334]/15 bg-gradient-to-br from-[#f1f5ec] to-[#eef4e3] p-6 shadow-[0_8px_32px_rgba(113,147,52,0.10)] sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#719334]/10 blur-2xl" />
              <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529] shadow-sm ring-1 ring-[#719334]/15">
                The AI ERP Readiness Review includes:
              </span>
              <div className="mt-6 space-y-3">
                {readinessReviewItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:ring-[#719334]/20"
                  >
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#719334] text-white">
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    <span className="text-sm leading-7 text-slate-700 sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#719334]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Book an AI ERP Readiness Review
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================ FAQ ================================ */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Questions About Our ERPNext Implementation Services in Australia
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Every ERPNext implementation question answered — from what AI-driven ERP actually means to how migration
            works for growing Australian businesses.
          </p>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#719334]/30 bg-[#f8faf5] shadow-[0_8px_28px_rgba(113,147,52,0.12)]'
                      : 'border-slate-100 bg-[#f8faf5] hover:border-[#719334]/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-base font-semibold leading-7 text-slate-900">{faq.question}</h3>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'rotate-45 bg-[#719334] text-white' : 'bg-[#eef4e3] text-[#719334]'
                      }`}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================= Final CTA ============================= */}
      <section
        className="relative overflow-hidden px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-14"
        style={{ background: `linear-gradient(135deg, ${brandGreen} 0%, ${brandGreenDark} 100%)` }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

        <div className="relative container mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" aria-hidden="true" />
            Ready to Move Forward
          </p>

          <h2 className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl">
            From Disconnected Tools to{' '}
            <span className="text-yellow-300">Intelligent Operations</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Book an AI ERP Readiness Review with Zynex Technologies. We assess your business, map your workflows and
            deliver a practical roadmap — so you move forward with clarity, not risk.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#719334] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-2xl"
            >
              Book an AI ERP Readiness Review
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="mailto:support@zynextechnologies.com.au"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50"
            >
              Email our team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
            {trustSignals.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-yellow-300" strokeWidth={3} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default ErpNextImplementation;

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  Check,
  Factory,
  FileSpreadsheet,
  GitBranch,
  Layers,
  Package,
  Plus,
  Search,
  ShoppingCart,
  Timer,
  Users,
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
    <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#719334]">
      <span className="h-px w-8 bg-[#719334]" aria-hidden="true" />
      {children}
    </p>
  );
}

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
  },
  {
    title: 'Manual spreadsheet reporting',
    description:
      'Critical business decisions depend on manually updated spreadsheets that are outdated before they reach the people who need them.',
    Icon: FileSpreadsheet,
  },
  {
    title: 'Finance, sales and operations misaligned',
    description:
      'Teams work in silos. Sales commits to timelines that operations cannot meet. Finance discovers margin issues after the fact, not before.',
    Icon: GitBranch,
  },
  {
    title: 'Poor inventory and purchasing visibility',
    description:
      'Stock levels, reorder points and supplier lead times are managed reactively — leading to overstocking, stockouts and missed sales.',
    Icon: Package,
  },
  {
    title: 'Slow approvals and quote-to-invoice workflows',
    description:
      'Quote generation, purchase approvals and invoice processing involve manual handoffs that delay revenue and frustrate customers.',
    Icon: Timer,
  },
  {
    title: 'Limited owner-level visibility',
    description:
      'Business owners and managers lack real-time dashboards that show what is actually happening across the operation — not what happened last month.',
    Icon: Search,
  },
];

const solutionServices = [
  {
    title: 'Finance & Accounting',
    description:
      'GST, BAS, invoicing, bank reconciliation and financial reporting configured for Australian compliance and your actual chart of accounts.',
    Icon: Calculator,
  },
  {
    title: 'Sales & CRM',
    description:
      'Quotations, sales orders, pipeline management and customer lifecycle tracking — connected directly to inventory and invoicing.',
    Icon: Users,
  },
  {
    title: 'Inventory & Purchasing',
    description:
      'Multi-location stock management, purchase orders, supplier management and automated reordering workflows.',
    Icon: Warehouse,
  },
  {
    title: 'Manufacturing & Operations',
    description:
      'Production planning, bill of materials, work orders and shop floor workflows for businesses that make or assemble products.',
    Icon: Factory,
  },
  {
    title: 'Projects & Field Service',
    description:
      'Job costing, timesheets, site management and technician scheduling for project-based and field service businesses.',
    Icon: Wrench,
  },
  {
    title: 'Reporting & BI',
    description:
      'Real-time dashboards, KPI tracking and exportable reports that give owners and managers visibility without manual compilation.',
    Icon: BarChart3,
  },
];

const aiCapabilities = [
  'AI document processing for invoices, POs, delivery dockets and supplier documents',
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
    title: 'Odoo ERP Deployment',
    description:
      'A structured Odoo ERP deployment built around how your business actually works. Module selection, configuration, custom workflows, data migration, training and go-live support included.',
    tags: ['Module configuration', 'Data migration', 'User training', 'Go-live support'],
  },
  {
    title: 'AI ERP Automation Layer',
    description:
      'Add intelligence to your ERP, not just software. AI document processing, approval automation, smart alerts, reporting assistants and workflow optimisation built on your Odoo foundation.',
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

const industries = [
  {
    title: 'Wholesale & Distribution',
    description:
      'Multi-location stock management, purchase orders and supplier workflows configured for high-volume distribution operations.',
    Icon: Package,
  },
  {
    title: 'Retail & eCommerce',
    description:
      'Unified inventory, POS and online store data so your team sees one accurate picture of stock and sales across every channel.',
    Icon: ShoppingCart,
  },
  {
    title: 'Manufacturing',
    description:
      'Production planning, bill of materials and shop floor visibility for businesses that make, assemble or process products.',
    Icon: Factory,
  },
  {
    title: 'Construction & Field Service',
    description:
      'Job costing, site management and technician scheduling for project-based businesses with complex operational workflows.',
    Icon: Wrench,
  },
  {
    title: 'Professional Services',
    description:
      'Project-based billing, resource planning and time tracking for consulting, agency and service-based businesses.',
    Icon: Briefcase,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description:
      'We assess your current systems, data readiness, workflow gaps and potential ROI. No guesswork — just an honest picture of where you are and what ERP can realistically deliver.',
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
      'Our engineering team builds your Odoo ERP solution using agile sprints, with continuous testing, validation and refinement. AI automation layers are added at the right stage of delivery.',
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
    description: 'We lead with AI intelligence, not just Odoo configuration. Workflow automation and decision support are built into every deployment from the start.',
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
    description: 'We focus on industries where ERP creates real operational impact — not a claim to serve everyone and therefore specialise in no one.',
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
    question: 'What does an Odoo implementation company actually do?',
    answer:
      'An Odoo implementation company manages the entire process of deploying Odoo for your business — from initial requirements gathering and system design through configuration, data migration, user training, and go-live support. The goal is to ensure Odoo is set up correctly for your specific workflows and that your team can use it effectively from day one.',
  },
  {
    question: 'How long does an Odoo ERP implementation take?',
    answer:
      "Implementation timelines vary depending on scope and complexity. A focused single-module implementation can be completed in 6 to 8 weeks. A full multi-module implementation for a complex business typically takes 4 to 6 months. Enterprise-scale implementations with extensive custom development can run 6 to 12 months. We'll give you a realistic timeline estimate after a discovery session.",
  },
  {
    question: 'What is Odoo ERP?',
    answer:
      "Odoo is an open-source enterprise resource planning platform that covers CRM, sales, inventory, manufacturing, accounting, HR, project management, and more — all in a single integrated system. It's known for its flexibility, modular architecture, and significantly lower total cost of ownership compared to platforms like SAP or Oracle.",
  },
  {
    question: 'How much does Odoo ERP implementation cost in Australia?',
    answer:
      'Implementation costs depend on the number of modules, the level of customisation required, data migration complexity, and the size of your team. A straightforward implementation for a small business might start from $15,000 to $30,000 AUD. More complex implementations for mid-market businesses typically range from $50,000 to $150,000 AUD or more. We provide detailed fixed-price proposals after a discovery engagement.',
  },
  {
    question: 'What does AI-driven ERP actually mean in practice?',
    answer:
      'AI-driven ERP means your Odoo system does more than store and report data. Zynex builds automation layers on top of Odoo — document processing, smart approvals, predictive alerts, reporting assistants and workflow agents — so your team spends less time on manual tasks and more time on decisions that move the business forward.',
  },
  {
    question: 'Can you migrate data from our existing accounting or ERP system?',
    answer:
      'Yes. Zynex handles phased data migration from common Australian accounting platforms, spreadsheets and legacy ERP systems. We map your existing data structures, validate records before import, and run parallel testing so your team can verify accuracy before go-live.',
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

const OdooErpDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    title: 'Odoo ERP Development & Implementation Company Australia | Zynex Technologies',
    description:
      "Zynex Technologies is Australia's specialist Odoo ERP development and implementation company. AI-enhanced deployments for SMBs. Free ERP Readiness Review.",
  });

  return (
    <div className="min-h-screen bg-[#f8faf5] text-slate-900">
      <Schema schema={faqSchema} />

      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #7a9440 0%, #719334 45%, #5f7f2d 100%)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                Odoo Development &amp; Implementation Company
                <span className="hidden sm:inline">• Melbourne, Australia</span>
              </span>

              <h1 className="mt-8 max-w-4xl text-4xl font-heading font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
                Odoo ERP Development and Implementation Company in Australia
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
                Zynex Technologies is a specialist Odoo ERP development and implementation company in Australia. We help SMB
                and mid-market businesses connect finance, sales, inventory, projects, purchasing and approvals in one
                intelligent system, with AI-led automation built in from day one.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#719334] shadow-lg transition hover:bg-slate-50"
                >
                  Book an AI ERP Readiness Review
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="#our-services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 transition hover:text-white/85"
                >
                  Explore our services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-14 border-t border-white/20 pt-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-heading font-bold sm:text-4xl">{stat.value}</p>
                      <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img src="/odoo_image.png" alt="Odoo ERP Implementation" className="h-auto w-full rounded-2xl object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>The Problem</SectionLabel>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                Why Australian Businesses Choose an Odoo Implementation Company
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Most growing Australian businesses start with simple tools — spreadsheets, standalone accounting software
                and disconnected apps. As operations scale, those tools create friction: duplicate data entry, manual
                reporting, slow approvals and limited visibility across finance, sales and operations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f8faf5] p-6 sm:p-8">
              <p className="text-lg font-semibold leading-8 text-slate-900">
                &ldquo;Your accounting system records the result.{' '}
                <span className="text-[#719334]">ERP helps manage the operation</span> that creates the result.&rdquo;
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                When sales, finance and operations are disconnected, every decision takes longer and every error costs
                more. That is when Australian businesses move from standalone tools to a connected ERP platform like
                Odoo — implemented properly, not just installed.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {problemItems.map(({ title, description, Icon }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef4e3] text-[#719334]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="border-t border-slate-200 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>The Solution</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            As Your Odoo Implementation Company, Zynex Adds the Intelligence
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            Odoo connects finance, sales, inventory, manufacturing, projects and purchasing in one platform. Zynex
            enhances that foundation with AI-assisted automation, custom workflows and Australian compliance
            configuration — so your ERP works the way your business actually operates.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutionServices.map(({ title, description, Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#719334] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI Capabilities */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <SectionLabel>AI Enhancement</SectionLabel>
              <h2 className="max-w-xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                AI Capabilities Built Into Every Odoo ERP Development Project
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Modern ERP is not just about storing data — it is about using that data to make better decisions faster.
                Zynex integrates AI capabilities throughout your Odoo implementation to automate manual work and surface
                operational intelligence your team can act on immediately.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Every AI layer we add is configured around your actual workflows — not bolted on as a generic add-on
                that your team ignores after go-live.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f8faf5] p-6 sm:p-8">
              <span className="inline-flex rounded-full bg-[#eef4e3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#719334]">
                AI Capabilities We Add
              </span>
              <ul className="mt-6 divide-y divide-slate-200">
                {aiCapabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                    <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-sm bg-[#719334]" />
                    <span className="text-sm leading-7 text-slate-700 sm:text-base">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pathways */}
      <section id="our-services" className="border-t border-slate-200 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Our Services as an Odoo Development Company in Australia</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Five Clear Pathways to Connected ERP
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Every business is at a different stage. We have structured our Odoo ERP services into five clear pathways so
            you can start where you are — whether that is a readiness review, a full deployment, or optimisation of an
            existing system.
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
            Zynex focuses on Australian businesses with operational complexity — multiple locations, mixed revenue
            streams, regulatory requirements or high transaction volumes — where Odoo ERP delivers the most measurable
            impact.
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

      {/* How We Work */}
      <section className="border-t border-slate-200 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            How We Work as an Odoo Implementation Company in Australia
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          Our implementation process is structured, transparent, and built around your business outcomes  not just technical delivery.

          </p>

          <div className="relative mt-16 hidden lg:block">
            <div aria-hidden="true" className="absolute left-0 right-0 top-6 h-px bg-[#719334]/35" />
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="relative pt-2">
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#719334] bg-[#f8faf5] text-sm font-bold text-[#719334]">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                  <p className="mt-4 text-sm font-semibold text-[#719334]">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:hidden">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#719334] text-sm font-bold text-[#719334]">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                <p className="mt-4 text-sm font-semibold text-[#719334]">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zynex */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Why Zynex</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            What Sets Us Apart as an Odoo Development Company
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Unlike traditional consultants who deliver slide decks, Zynex delivers production-ready ERP systems with
            measurable business impact from day one.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyChooseItems.slice(0, 5).map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#f8faf5] p-6">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef4e3] text-[#719334]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 max-w-sm rounded-2xl border border-slate-200 bg-[#f8faf5] p-6 sm:max-w-md lg:max-w-sm xl:max-w-[calc(20%-16px)]">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef4e3] text-[#719334]">
              <Check className="h-4 w-4" strokeWidth={3} />
            </div>
            <h3 className="text-base font-semibold text-slate-900">{whyChooseItems[5].title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{whyChooseItems[5].description}</p>
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-[#f1f5ec] p-6 sm:flex-row sm:items-start sm:p-8">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl border border-[#719334]/20 bg-white text-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#719334]">ISO</p>
                <p className="mt-1 text-sm font-bold leading-tight text-[#719334]">9001:2015</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Supported</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900">Quality-Led ERP Delivery</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Zynex Technologies delivers ERP projects through a structured implementation approach covering discovery,
                workflow mapping, configuration, testing, deployment, training and optimisation. Our ERP delivery is
                supported by ISO 9001:2015-certified development capability, helping bring quality discipline,
                documentation and continuous improvement practices into every ERP implementation project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Readiness Review */}
      <section className="border-t border-slate-200 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Start Here</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Not Sure If ERP Is the Right Next Step?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            ERP is a significant investment. If you are not sure whether it is the right move for your business right
            now, start with our AI ERP Readiness Review — an honest assessment with no obligation to proceed.
          </p>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f1f5ec] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">The AI ERP Readiness Review includes:</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {readinessReviewItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-[#719334] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm leading-6 text-slate-700 sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#719334] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#5a7529]"
            >
              Book an AI ERP Readiness Review
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Questions About Our Odoo ERP Development and Implementation Services
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Every Odoo ERP implementation question answered — from what AI-driven ERP actually means to how migration
            works for growing Australian businesses.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-[#f8faf5] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold leading-7 text-slate-900">{faq.question}</h3>
                  <Plus className="h-5 w-5 flex-shrink-0 text-[#719334]" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        style={{ background: `linear-gradient(135deg, ${brandGreen} 0%, ${brandGreenDark} 100%)` }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            <span className="h-px w-8 bg-white/40" aria-hidden="true" />
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
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#719334] shadow-lg transition hover:bg-slate-50"
            >
              Book an AI ERP Readiness Review
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:support@zynextechnologies.com.au"
              className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 underline underline-offset-4 transition hover:text-yellow-200"
            >
              Email our team
              <ArrowRight className="h-4 w-4" />
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

export default OdooErpDevelopment;

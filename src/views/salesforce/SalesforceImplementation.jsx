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

/* ---------------------------------------------------------------------- */
/*  Content (unchanged)                                                   */
/* ---------------------------------------------------------------------- */

const heroStats = [
  { value: '95%', label: 'Client Satisfaction Rate' },
  { value: '8 to 14 wks', label: 'Typical Implementation Time' },
  { value: '3x ROI', label: 'Target Return on Investment' },
  { value: '24/7', label: 'Post Go-Live Support' },
];

const problemItems = [
  {
    title: "Leads that go cold in someone's inbox",
    description:
      'Enquiries arrive through the website, email, phone and social, then scatter. Without a single intake path and an owner on every record, the slow follow-ups stay invisible until the quarter closes short.',
    Icon: Layers,
    Art: MiniBars,
    // Swap this path for your own illustration
    img: '/problem-duplicate-entry.png',
  },
  {
    title: 'A CRM the sales team works around',
    description:
      'When Salesforce is configured as a reporting tool rather than a selling tool, reps update it on Friday afternoon from memory. The pipeline becomes a guess, and forecasting turns into an argument.',
    Icon: FileSpreadsheet,
    Art: MiniTrend,
    img: '/problem-spreadsheet.png',
  },
  {
    title: 'Quoting and approvals that stall deals',
    description:
      "Pricing lives in a spreadsheet, discounts need a text message to the director, and the quote goes out three days late. Every one of those days is a competitor's opportunity.",
    Icon: GitBranch,
    Art: MiniFunnel,
    img: '/problem-misaligned.png',
  },
  {
    title: "Sales and service that can't see each other",
    description:
      "The account manager doesn't know the client has three open tickets. The support team doesn't know a renewal is due next month. Customers notice that disconnect long before the business does.",
    Icon: Package,
    Art: MiniConveyor,
    img: '/problem-inventory.png',
  },
  {
    title: 'Reporting rebuilt by hand every month',
    description:
      "Someone exports Salesforce to Excel, joins it against accounting data, and rebuilds the same board pack every month. It takes two days and it's out of date the moment it's sent.",
    Icon: Timer,
    Art: MiniRing,
    img: '/problem-approvals.png',
  },
  {
    title: 'Salesforce that was set up once and never revisited',
    description:
      'Plenty of Australian businesses are already paying for licences they barely use. The org was configured years ago by someone who has since left, and nobody has touched the automation since.',
    Icon: Search,
    Art: MiniDonut,
    img: '/problem-visibility.png',
  },
];

const solutionServices = [
  {
    title: 'Sales Cloud',
    description:
      'Pipeline stages that match how you actually sell, guided selling paths, forecast hygiene, and territory and quota structures your managers can run without a consultant on speed dial.',
    tags: ['Pipeline and stage design', 'Guided selling and playbooks', 'Forecasting and quota management', 'Territory and account planning'],
    Icon: Calculator,
    Art: MiniBars,
    // Swap this path for your own illustration
    img: '/solution-finance.png',
  },
  {
    title: 'Service Cloud',
    description:
      'Omni-Channel case intake, routing rules, SLA tracking and knowledge articles, so support requests land with the right person the first time instead of bouncing between inboxes.',
    tags: ['Omni-Channel case routing', 'SLA and entitlement tracking', 'Knowledge base setup', 'Self-service and chat deflection'],
    Icon: Users,
    Art: MiniFunnel,
    img: '/solution-sales.png',
  },
  {
    title: 'Revenue Cloud, Quoting & Contracts',
    description:
      'Product catalogues, pricing rules, discount approval flows and contract renewals configured so a compliant quote leaves the building in minutes rather than days.',
    tags: ['Product and price book setup', 'Discount and approval rules', 'Quote and contract templates', 'Renewals and amendments'],
    Icon: Warehouse,
    Art: MiniDonut,
    img: '/solution-inventory.png',
  },
  {
    title: 'Field Service & Scheduling',
    description:
      'Work order management, technician scheduling, mobile job capture and asset history for trades, maintenance and installation teams working across Australian sites.',
    tags: ['Work order management', 'Technician scheduling and dispatch', 'Mobile job capture for crews', 'Asset and service history'],
    Icon: Factory,
    Art: MiniConveyor,
    img: '/solution-manufacturing.png',
  },
  {
    title: 'Marketing & Experience Cloud',
    description:
      'Lead capture, nurture journeys, campaign attribution and self-service customer portals connected to the same records your sales and service teams work from.',
    tags: ['Lead capture and nurture journeys', 'Campaign attribution reporting', 'Customer self-service portals', 'Partner and dealer communities'],
    Icon: Wrench,
    Art: MiniRing,
    img: '/solution-projects.png',
  },
  {
    title: 'Integrations & Data',
    description:
      'Salesforce joined to Xero, MYOB, your ERP, your website and your operational tools, with Data Cloud unifying customer records that currently live in five places.',
    tags: ['Xero and MYOB connection', 'ERP and warehouse integration', 'Website and form capture', 'Data Cloud record unification'],
    Icon: BarChart3,
    Art: MiniTrend,
    img: '/solution-reporting.png',
  },
];

const industryModules = [
  {
    industry: 'Construction, Trades & Field Service',
    modules: ['Field Service scheduling', 'Work Order Management', 'Mobile job capture'],
    Icon: HardHat,
  },
  {
    industry: 'Manufacturing',
    modules: ['Revenue Cloud quoting', 'Partner and Dealer Management', 'After-Sales Service Cloud'],
    Icon: Factory,
  },
  {
    industry: 'Wholesale & Distribution',
    modules: ['Sales Cloud territory management', 'Pricing and discount rules', 'Repeat order automation'],
    Icon: Package,
  },
  {
    industry: 'Retail, Franchise & E-commerce',
    modules: ['Service Cloud Omni-Channel', 'Marketing Cloud journeys', 'Loyalty and customer data unification'],
    Icon: Store,
  },
  {
    industry: 'Healthcare, Allied Health & Clinics',
    modules: ['Referral and intake management', 'Appointment coordination', 'Privacy-controlled communications'],
    Icon: Stethoscope,
  },
  {
    industry: 'Professional Services',
    modules: ['Opportunity and proposal pipeline', 'Engagement and renewal tracking', 'Resource visibility dashboards'],
    Icon: Briefcase,
  },
  {
    industry: 'Financial Services & Insurance',
    modules: ['Financial Services Cloud records', 'Adviser pipeline management', 'Compliance and audit logging'],
    Icon: Calculator,
  },
  {
    industry: 'Not-for-Profit & Membership',
    modules: ['Nonprofit Cloud constituent records', 'Donation and grant tracking', 'Member Experience Cloud portals'],
    Icon: Utensils,
  },
];

const aiCapabilities = [
  'AI-drafted customer replies: Einstein-generated email and case responses your team reviews and sends, cutting response time on routine enquiries.',
  'Agentforce service agents: autonomous agents that handle first-line questions, qualify enquiries and escalate to a human with full context attached.',
  'Call and meeting summarisation: conversation notes, action items and next steps written back to the opportunity automatically.',
  'Lead and opportunity scoring: predictive scoring that tells reps which deals deserve attention this week, based on your own closed-won history.',
  'Automated approval triggers: discounts, credit terms and quote exceptions routed for approval by rule rather than by chasing someone.',
  'Anomaly and risk detection: flags on stalled deals, ageing cases, slipping close dates and accounts going quiet before renewal.',
  'Reporting assistants: plain-language questions answered against your Salesforce data, so managers stop queuing report requests.',
  'Document AI: contracts, purchase orders and inbound forms read, extracted and attached to the right record without manual keying.',
];

const pathways = [
  {
    title: 'Salesforce Readiness Review',
    description:
      'A short, structured assessment before anyone commits to a build. You get a clear picture of what Salesforce should do for your business and what it will realistically cost.',
    tags: ['Systems and licence review', 'Sales and service workflow mapping', 'ROI modelling', 'Salesforce roadmap'],
    recommended: true,
  },
  {
    title: 'Salesforce Implementation',
    description:
      'A full first build: clouds configured, data migrated, users trained and the platform live with adoption support behind it.',
    tags: ['Cloud and object configuration', 'Data migration and cleansing', 'User training and enablement', 'Go-live and hypercare support'],
  },
  {
    title: 'Salesforce Customisation & Development',
    description:
      'Where standard configuration stops, custom development starts. Flows, Apex, Lightning Web Components and custom objects built to your process.',
    tags: ['Custom objects and Flow automation', 'Apex and Lightning Web Components', 'Agentforce and AI automation build', 'Custom dashboards and reporting'],
  },
  {
    title: 'Migration & Integration',
    description:
      'Moving to Salesforce from another CRM, or connecting Salesforce to the systems that already run your business.',
    tags: ['CRM data migration', 'API and middleware integration', 'Accounting and ERP connection', 'Workflow redesign'],
  },
  {
    title: 'Salesforce Optimisation & Managed Support',
    description:
      "For businesses already live on Salesforce that aren't getting the return. Clean-up, tuning, automation and ongoing help.",
    tags: ['Org health check and clean-up', 'Automation tuning', 'Ongoing managed support', 'AI and Agentforce roadmap'],
  },
];

const industries = [
  {
    title: 'Wholesale & Distribution',
    description:
      'Account-based selling, repeat order patterns, pricing tiers and rep territory management across a large customer base.',
    Icon: Package,
  },
  {
    title: 'Construction & Field Service',
    description:
      'Job scheduling, work orders, mobile capture for crews on site and asset service history that follows the client.',
    Icon: ShoppingCart,
  },
  {
    title: 'Manufacturing',
    description:
      'Long quoting cycles, configured products, dealer and distributor management, and after-sales service tracked against serial numbers.',
    Icon: Factory,
  },
  {
    title: 'Professional Services',
    description:
      'Proposal pipelines, engagement tracking, resourcing visibility and renewal management for retained clients.',
    Icon: Wrench,
  },
  {
    title: 'Financial Services & Insurance',
    description:
      'Compliance-aware client records, adviser pipelines, policy and product tracking, and auditable communication history.',
    Icon: Briefcase,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description:
      'We sit with the people who actually do the work, map how leads, quotes, jobs and cases move today, and identify where time and revenue leak out. Existing licences, data quality and integration points get audited in the same pass.',
    duration: '1 to 2 weeks',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description:
      "You get a documented solution design: object model, automation logic, integration plan, security and sharing model, and a phased rollout sequence with a cost range attached. Nothing gets built until you've signed off on the design.",
    duration: '1 to 2 weeks',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description:
      'Configuration and development run in short cycles with working demos at the end of each, so you see the platform take shape and can redirect early. Data migration is rehearsed, not attempted once on go-live weekend.',
    duration: '4 to 12 weeks',
  },
  {
    number: '04',
    title: 'Deploy & Optimise (Ongoing)',
    description:
      "Go-live with hands-on hypercare, training built around each team's actual daily tasks, then a structured optimisation cadence: adoption tracking, automation tuning and the next AI capability on the roadmap.",
    duration: 'Ongoing',
  },
];

const whyChooseItems = [
  {
    title: 'AI-First Salesforce Positioning',
    description: 'Agentforce and Einstein designed into the build from day one, not sold as a phase two upsell. Our Custom AI Development team sits on the same delivery floor.',
  },
  {
    title: 'Australian Business Focus',
    description: 'Built for Australian privacy expectations, local accounting stacks and how Australian mid-market teams actually operate.',
  },
  {
    title: 'Feasibility-First Approach',
    description: "We'll tell you when Salesforce is the wrong fit, or when half the build you're imagining isn't worth funding.",
  },
  {
    title: 'Structured Delivery Process',
    description: "Documented design, staged sign-offs and rehearsed migrations, so go-live isn't a gamble.",
  },
  {
    title: 'Industry-Specific Focus',
    description: 'Deep work in field service, distribution, manufacturing and professional services rather than a bit of everything.',
  },
  {
    title: 'Ongoing Optimisation',
    description: 'Adoption and automation reviewed on a cadence after go-live, because a static org loses value every quarter.',
  },
];

const faqs = [
  {
    question: 'What does a Salesforce implementation company actually do?',
    answer:
      'A Salesforce implementation company translates how your business sells and services customers into a working platform configuration. That covers requirement discovery, object and automation design, data migration, integration with your other systems, user training and support after go-live. The configuration work matters far less than getting the process design right first.',
  },
  {
    question: 'How long does a Salesforce implementation take?',
    answer:
      'A focused Sales Cloud build for a small team can go live in six to eight weeks. A multi-cloud implementation with data migration, quoting and integrations typically runs eight to fourteen weeks. Complexity in your data, not the size of your team, is usually what moves that timeline.',
  },
  {
    question: 'What is the difference between Salesforce configuration and customisation?',
    answer:
      "Configuration uses the tools Salesforce already provides: fields, page layouts, validation rules and Flow automation, all without writing code. Customisation means building something the platform doesn't do natively, using Apex or Lightning Web Components. Good implementations lean heavily on configuration and reach for custom code only where there is a genuine reason.",
  },
  {
    question: 'How much does Salesforce implementation cost in Australia?',
    answer:
      'A simple single-cloud implementation for an Australian SMB commonly sits in the low tens of thousands of dollars, while multi-cloud projects with integration and custom development run considerably higher. The Readiness Review gives you a costed range in AUD against your actual requirements rather than a guess.',
  },
  {
    question: 'What do Salesforce licences cost, and do we buy them from you or direct?',
    answer:
      "Licences and implementation are separate costs. Salesforce licences are billed per user per month and vary by cloud and edition. Clients buy licences directly from Salesforce. Our role is to make sure you are on the right edition and user count before you sign.",
  },
  {
    question: 'What does AI in Salesforce actually mean in practice?',
    answer:
      'In practice it means the platform drafting customer replies for review, summarising calls into the opportunity record, scoring which deals need attention, and Agentforce handling routine first-line enquiries before a person gets involved. It works well when your data is clean and the automation targets a task your team repeats daily.',
  },
];

const trustSignals = [
  'Structured delivery process',
  'ISO 9001:2015-supported capability',
  'Melbourne, Australia',
  '95% client satisfaction',
];

/* ---------------------------------------------------------------------- */
/*  Solution hub card                                                     */
/* ---------------------------------------------------------------------- */

function SolutionCard({ title, description, Icon, Art, align }) {
  return (
    <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#719334]/30 hover:shadow-[0_14px_36px_rgba(113,147,52,0.18)]">
      {/* connector dot toward the hub (desktop only) */}
      <span
        aria-hidden="true"
        className={`absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-[#719334] shadow lg:block ${
          align === 'left' ? '-right-[5px]' : '-left-[5px]'
        }`}
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-md shadow-[#719334]/30">
          <Icon className="h-5 w-5" />
        </div>
        <div className="shrink-0 opacity-90 transition-transform duration-300 group-hover:scale-105">
          <Art />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Page                                                                  */
/* ---------------------------------------------------------------------- */

const SalesforceImplementation = () => {
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
    title: 'Salesforce Implementation & Customization in Australia | Zynex Technologies',
    description:
      'Salesforce implementation and customisation for Australian businesses. AI-enabled Sales, Service and Field Service builds. Book a readiness review.',
  });

  const hubIcons = [Calculator, Users, Warehouse, Factory, Wrench, BarChart3];

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
              <span className="inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-[#719334]/20 bg-[#eef4e3] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5a7529] backdrop-blur-sm sm:px-4 sm:text-[11px]">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#719334]/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#719334]" />
                </span>
                <span>
                  Salesforce Implementation &amp; Customisation <span className="opacity-50 mx-1.5">•</span> Melbourne, Australia
                </span>
              </span>

              <h1 className="mt-6 max-w-4xl text-3xl font-heading font-bold leading-[1.12] tracking-tight text-slate-900 sm:mt-8 sm:text-5xl sm:leading-[1.08] lg:text-[3.35rem]">
                Salesforce Implementation and Customization Services in Australia
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                A Melbourne-based Salesforce implementation and customisation team for Australian SMBs and mid-market businesses that have outgrown spreadsheets, disconnected tools and a CRM nobody trusts.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                Most Salesforce projects don&apos;t fail because the platform can&apos;t do the job. They fail because the build never matched how the business actually sells, quotes, schedules and supports its customers. Zynex configures Salesforce around your real process, connects it to the systems you already run, and layers AI automation on top so your team spends time on customers instead of data entry. We work with businesses in Melbourne, Sydney, Brisbane, Perth and Adelaide.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#719334]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Book a Salesforce Readiness Review
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
                  src="/salesforce-crm-hero.png"
                  alt="Salesforce implementation dashboard for Australian businesses"
                  className="relative h-auto w-full rounded-2xl object-contain shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 w-full border-t border-slate-200 pt-10 sm:mt-20">
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-6 lg:gap-8">
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
                Why Australian Businesses Choose a Salesforce Implementation Company
              </h2>
              <HeadingBar />
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Growth exposes every weak point in a sales and service operation. Leads sit in inboxes. Quotes live on one person&apos;s laptop. Service requests arrive through four channels and get tracked in none of them. By twenty or thirty people, that fragmentation starts costing revenue.
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
                &ldquo;A CRM stores contact records.{' '}
                <span className="text-[#719334]">A properly implemented Salesforce platform runs the revenue operation.</span>&rdquo;
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Most Salesforce projects fail because the build never matched how the business actually sells, quotes, schedules and supports its customers—not because the platform cannot do the job.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problemItems.map(({ title, description, Icon, Art, img }) => (
              <div
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)] sm:flex-row sm:p-6"
              >
                {/* top accent sweep on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#719334] to-[#a3c46a] transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* Left: icon + title + description */}
                <div className="relative flex w-full flex-col sm:w-3/5 sm:pr-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2.5 text-[13px] leading-6 text-slate-600">{description}</p>
                </div>

                {/* Right: illustration (swap `img` path for your own artwork) */}
                <div className="relative mt-4 flex w-full items-center justify-center self-stretch sm:mt-0 sm:w-2/5">
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
              As Your Salesforce Implementation Company, Zynex Adds the Intelligence
            </h2>
            {/* brand lockup (matches reference image) */}
            <div className="hidden items-center gap-4 lg:flex" aria-hidden="true">
              <img
                src="/salesforce-logo.png"
                alt="Salesforce"
                className="h-18 w-50 object-contain"
              />
              <span className="h-9 w-px bg-slate-300" />
              <span className="rounded-lg bg-gradient-to-br from-[#719334] to-[#5a7529] px-4 py-2 font-heading text-xl font-bold tracking-wide text-white shadow-md">
                ZYNEX
              </span>
            </div>
          </div>
          <HeadingBar />
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            Sales, service, quoting, field operations and reporting work from one connected record spine. Zynex adds AI-assisted automation, integrations and Australian compliance controls so the platform fits how your business actually operates.
          </p>

          {/* Infographic layout (matches reference image): left cards + central hub + right cards */}
          <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* Left column */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {solutionServices
                .filter((_, i) => i % 2 === 0)
                .map(({ title, description, tags, Icon, Art }) => (
                  <div
                    key={title}
                    className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)] sm:flex-row sm:items-center sm:p-6"
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
                      <ul className="mt-3 space-y-1.5">
                        {tags.map((tag) => <li key={tag} className="flex gap-2 text-xs leading-5 text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#719334]" />{tag}</li>)}
                      </ul>
                    </div>
                    <div className="pointer-events-none hidden flex-shrink-0 text-[#719334] xl:block" aria-hidden="true">
                      <Art
                        className="h-20 w-20"
                        label={title === 'Projects & Field Service' ? '75%' : undefined}
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
                <span className="font-heading text-3xl font-bold tracking-tight text-[#0176d3]">Salesforce</span>
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
                .map(({ title, description, tags, Icon, Art }) => (
                  <div
                    key={title}
                    className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)] sm:flex-row sm:items-center sm:p-6"
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
                      <ul className="mt-3 space-y-1.5">
                        {tags.map((tag) => <li key={tag} className="flex gap-2 text-xs leading-5 text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#719334]" />{tag}</li>)}
                      </ul>
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
                AI Capabilities Built Into Every Salesforce Implementation Project
              </h2>
              <HeadingBar />
              <p className="mt-5 text-base leading-8 text-slate-600">
                Salesforce ships with more AI than most Australian businesses ever switch on. The value is not in the feature list; it is in choosing the two or three automations that remove real hours from your week and configuring them against clean data.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our AI Feasibility Analysis exists for exactly that question, so every AI layer targets a task your team actually repeats.
              </p>
              <img
                src="/salesforce/salesforce-ai-automation.png"
                alt="AI automation connecting Salesforce email, calls, service cases, approvals, reporting and documents"
                className="mt-8 w-full rounded-2xl border border-slate-200 object-cover shadow-[0_14px_38px_rgba(15,23,42,0.10)]"
              />
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

      {/* ============================ Five Pathways ============================ */}
      <section id="our-services" className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">

          {/* Heading — same pattern as other sections */}
          <SectionLabel>Our Salesforce Services in Australia</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Five Clear Pathways to a Connected Salesforce Platform
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Not every business needs a full implementation. Some need a first build done properly, some inherited an org that needs rescuing, and some are already live and simply need it to work harder. These are the five engagements we run.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pathways.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#719334]/25 hover:shadow-[0_18px_44px_rgba(113,147,52,0.16)]"
                >
                  {/* top accent bar on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#719334] to-[#a3c46a] transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#eef4e3] text-[#719334]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-slate-900 flex flex-wrap items-center gap-2">
                        {item.title}
                        {item.recommended && (
                          <span className="rounded-full bg-[#eef4e3] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#719334]">
                            Recommended Start
                          </span>
                        )}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-slate-600">
                        {item.description}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-[#f1f5ec] px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ============================= Industries ============================= */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 overflow-hidden relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-12 items-center mb-6">
            <div className="flex flex-col items-start pr-4 relative z-10">
              <SectionLabel>Industries We Serve</SectionLabel>
              <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                Focused Salesforce Delivery for Operationally Complex Businesses
              </h2>
              <HeadingBar />
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Salesforce works hardest where a business has multiple sites, field teams, long sales cycles, recurring service obligations or a complex product catalogue. These are the Australian businesses we build for most often.
              </p>
            </div>
            
            <div className="hidden lg:flex w-full h-[380px] justify-center items-center relative z-10 mt-6 lg:mt-0">
               {/* Center Laptop Composite Image (contains all the badges) */}
               <img src="/salesforce-field-service.png" alt="Connected Salesforce field service, work order and customer account dashboard" className="absolute h-full w-full rounded-2xl object-cover object-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)]" />
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 relative z-10 w-full mb-12">
            {industries.map(({ title, description, Icon }, index) => {
              // Creating a centered bottom row using 6-column grid offset
              let colSpanClass = "xl:col-span-2";
              if (index === 3) colSpanClass += " xl:col-start-2";
              
              return (
                <div
                  key={title}
                  className={`group relative bg-white rounded-[24px] p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] border border-slate-100 flex items-stretch hover:shadow-[0_16px_40px_rgba(113,147,52,0.12)] transition-shadow duration-300 ${colSpanClass}`}
                >
                  {/* Left Content block */}
                  <div className="flex-1 flex flex-col items-start pr-3 relative z-10">
                    <div className="mb-4 flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[14px] bg-[#5a7529] text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[17px] font-bold tracking-tight text-slate-900 mb-2.5 leading-snug">{title}</h3>
                    <p className="text-[13.5px] leading-[1.65] text-slate-500">
                      {description}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ How We Work ============================ */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            How We Work as a Salesforce Implementation Company in Australia
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          Our implementation process is structured, transparent, and built around your business outcomes  not just technical delivery.

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

          <div className="mx-auto max-w-5xl">
            {/* Left: heading + vertical item list */}
            <div>
              <SectionLabel>Why Zynex</SectionLabel>
              <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
                What Sets Us Apart as a Salesforce Development Company
              </h2>
              <HeadingBar />
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Plenty of firms can configure Salesforce. Fewer will tell you honestly what it should and should not do for your business before you spend the money.
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
                  <h3 className="text-xl font-heading font-bold text-slate-900">Quality-Led Salesforce Delivery</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    Every engagement runs against documented process controls, with clear ownership, version control and change management from discovery through to support. Solution designs are signed off before build starts, migrations are rehearsed against a full data set before go-live, and every configuration change is logged against the requirement that prompted it. The work is delivered by certified Salesforce consultants, and the same person who designed your org is the person you speak to after launch.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================= Industry Modules ======================= */}
      <section className="border-t border-slate-100 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>Industry Modules</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Industry-Specific Salesforce Solutions for Australian Businesses
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            The right starting configuration depends heavily on what your business does. This is where most Australian Salesforce implementations begin, by industry.
          </p>

          {/* Table */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

            {/* Header */}
            <div className="grid grid-cols-[2fr_3fr] bg-[#719334] px-6 py-3.5 sm:px-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Industry</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Top 3 Salesforce Capabilities</span>
            </div>

            {/* Rows */}
            {industryModules.map((item, index) => (
              <div
                key={index}
                className={`group grid grid-cols-[2fr_3fr] items-stretch border-b border-slate-100 transition-colors duration-200 last:border-0 hover:bg-[#f8faf5] ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                }`}
              >
                {/* Industry */}
                <div className="flex items-center gap-3 border-r border-slate-100 px-6 py-4 sm:px-8">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef4e3] text-[#719334] transition-colors duration-200 group-hover:bg-[#719334] group-hover:text-white">
                    <item.Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 sm:text-[15px]">{item.industry}</span>
                </div>

                {/* Modules — joined with " / " exactly as the client specified */}
                <div className="flex items-center px-6 py-4 sm:px-8">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.modules.map((mod, idx) => (
                      <span key={idx}>
                        {idx > 0 && (
                          <span className="mx-1.5 font-bold text-[#719334]">/</span>
                        )}
                        {mod}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ FAQ ================================ */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">
            Questions About Our Salesforce Implementation Services
          </h2>
          <HeadingBar />
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Straight answers about Salesforce implementation, customisation, licensing, timelines, AI and cost in Australia.
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
            <span className="text-yellow-300">a Revenue Platform Your Team Trusts</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            If your pipeline lives in a spreadsheet, your quotes take days, or you are already paying for Salesforce and barely using it, start with a Readiness Review and find out what is actually worth building.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#719334] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-2xl"
            >
              Book a Salesforce Readiness Review
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="mailto:support@zynextechnologies.com.au"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-4 text-sm font-semibold text-yellow-300 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-yellow-200"
            >
              Email our team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {trustSignals.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
              >
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

export default SalesforceImplementation;


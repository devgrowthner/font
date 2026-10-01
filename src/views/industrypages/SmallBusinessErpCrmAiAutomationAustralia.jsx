'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Plus,
  Briefcase,
  HardHat,
  Construction,
  ShoppingBag,
  Warehouse,
  HeartPulse,
  Cpu,
  Landmark,
  Factory,
  TrendingUp,
  ArrowLeftRight,
  Users,
  LayoutDashboard,
  Search,
  AlertTriangle,
  Gauge,
  Lightbulb,
  Target,
  FileText,
  Clock,
  BarChart3,
  Layers,
  RefreshCw,
  ShieldCheck,
  Link2,
  MessageSquare,
  BookOpen,
  Sparkles,
  Timer,
  Eye,
  CircleCheck,
  Workflow,
  Keyboard,
  Receipt,
  Wallet,
  FileSpreadsheet,
  Mail,
  FolderKanban,
  Package,
  Copy,
  Unlink,
  Truck,
  FileStack,
  UserPlus,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedIndustryPages from '../../components/RelatedIndustryPages';
import { useSeo } from '../../hooks/useSeo';

const heroImage = '/construction-erp-crm-ai/small-business-erp-crm-ai-hero.webp';

const brandGreen = '#719334';
const brandGreenDark = '#5a7529';

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const inView = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true, margin: '-80px' },
};

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

function SectionIntro({ label, title, children, className = '', small = false }) {
  return (
    <motion.div variants={fadeInUp} {...inView} className={className}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className={`max-w-4xl font-heading font-bold leading-tight text-slate-900 ${small ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}>{title}</h2>
      <HeadingBar />
      {children && <div className="mt-5 max-w-3xl space-y-3 text-base leading-8 text-slate-600">{children}</div>}
    </motion.div>
  );
}

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#719334] text-white">
      <Check className="h-3 w-3" strokeWidth={3.5} />
    </span>
    <span className="text-sm leading-7 text-slate-700 sm:text-base">{children}</span>
  </li>
);

const Tag = ({ children }) => (
  <span className="rounded-md bg-[#f1f5ec] px-2.5 py-1 text-xs font-medium text-slate-600 sm:text-[13px]">{children}</span>
);

const SmallLabel = ({ children, className = '' }) => (
  <p className={`text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 ${className}`}>{children}</p>
);

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const businessTypes = [
  { label: 'Professional service businesses', Icon: Briefcase },
  { label: 'Trades and contractors', Icon: HardHat },
  { label: 'Construction service providers', Icon: Construction },
  { label: 'Retail and eCommerce businesses', Icon: ShoppingBag },
  { label: 'Wholesale businesses', Icon: Warehouse },
  { label: 'Healthcare businesses', Icon: HeartPulse },
  { label: 'Technology companies', Icon: Cpu },
  { label: 'Financial service providers', Icon: Landmark },
  { label: 'Manufacturing businesses', Icon: Factory },
  { label: 'Growing Australian SMEs', Icon: TrendingUp },
];

const problems = [
  {
    title: 'Too Much Time Spent on Manual Administration',
    before: ['Business owners and teams often spend hours managing:'],
    visual: 'iconList',
    items: [
      { label: 'Data entry', Icon: Keyboard },
      { label: 'Customer updates', Icon: Users },
      { label: 'Invoices', Icon: Receipt },
      { label: 'Reports', Icon: BarChart3 },
      { label: 'Follow-ups', Icon: RefreshCw },
      { label: 'Documents', Icon: FileText },
      { label: 'Internal communication', Icon: MessageSquare },
    ],
    after: ['These tasks may seem small individually, but together they consume significant business capacity.'],
  },
  {
    title: 'Information Is Stored Across Too Many Systems',
    before: ['Small businesses commonly use:'],
    visual: 'systems',
    items: [
      { label: 'CRM platforms', Icon: Users },
      { label: 'Accounting software', Icon: Wallet },
      { label: 'Spreadsheets', Icon: FileSpreadsheet },
      { label: 'Email systems', Icon: Mail },
      { label: 'Project tools', Icon: FolderKanban },
      { label: 'Inventory applications', Icon: Package },
    ],
    after: [
      'The challenge is that these systems often do not communicate with each other.',
      'Employees become responsible for manually moving information between platforms.',
    ],
  },
  {
    title: 'Duplicate Data Entry Slows Operations',
    before: ['The same customer, order or business information may need to be entered multiple times.', 'Examples:'],
    visual: 'duplicate',
    items: [
      'Customer details entered into CRM and accounting software',
      'Orders copied into spreadsheets',
      'Invoice information manually updated',
      'Reports created from multiple exports',
    ],
    after: ['This increases administrative workload and creates opportunities for errors.'],
  },
  {
    title: 'Sales and Operations Are Disconnected',
    before: [],
    visual: 'silos',
    items: [
      { label: 'Sales teams may know what customers need.', Icon: TrendingUp },
      { label: 'Operations teams may know what needs to be delivered.', Icon: Truck },
      { label: 'Finance teams may know what has been invoiced.', Icon: Receipt },
    ],
    after: ['But without connected systems, every department works from different information.'],
  },
  {
    title: 'Business Reporting Takes Too Long',
    before: ['Owners and managers need answers quickly:'],
    visual: 'questions',
    items: [
      'Which products are performing?',
      'Which customers are most profitable?',
      'Where are costs increasing?',
      'What sales opportunities are active?',
      'What tasks are delaying operations?',
    ],
    after: ['When reporting requires manual spreadsheet preparation, decisions become slower.'],
  },
  {
    title: 'Existing Software Works, But Processes Between Systems Do Not',
    before: ['Many businesses already have useful tools.', 'The issue is often the workflow between them.', 'Examples:'],
    visual: 'brokenLinks',
    items: [
      'CRM does not connect with accounting',
      'Sales information does not reach operations automatically',
      'Documents require manual processing',
      'Inventory information is not visible across teams',
    ],
  },
];

const approachSteps = [
  {
    title: '1. Understand Your Current Operations',
    intro: 'We review how information moves through your business:',
    items: ['Customer enquiry', 'Sales process', 'Order management', 'Delivery', 'Finance', 'Reporting', 'Customer support'],
    Icon: Search,
  },
  {
    title: '2. Identify Operational Friction',
    intro: 'We identify where your business is losing time, capacity or visibility.',
    label: 'Common issues include:',
    items: ['Repetitive admin', 'Manual approvals', 'Duplicate entry', 'Spreadsheet dependency', 'Slow customer response', 'Reporting delays'],
    Icon: AlertTriangle,
  },
  {
    title: '3. Measure the Business Impact',
    intro: 'We evaluate areas such as:',
    items: ['Hours spent on manual tasks', 'Processing time', 'Number of repeated actions', 'Reporting effort', 'Operational delays'],
    Icon: Gauge,
  },
  {
    title: '4. Design the Right Improvement',
    intro: 'The solution may involve:',
    items: ['Process automation', 'Software integration', 'CRM improvement', 'ERP implementation', 'AI-assisted workflows'],
    outro: 'Not every business needs a complete system replacement.',
    Icon: Lightbulb,
  },
  {
    title: '5. Implement and Measure',
    intro: 'After implementation, we measure whether the changes improve daily operations.',
    items: [],
    Icon: Target,
  },
];

const opportunities = [
  {
    title: 'Lead and Customer Management Automation',
    Icon: UserPlus,
    intro: 'Many small businesses manage leads through inboxes, spreadsheets or individual employees.',
    label: 'A connected workflow can help:',
    items: ['Capture enquiries', 'Track opportunities', 'Manage follow-ups', 'Store customer history', 'Improve sales visibility'],
  },
  {
    title: 'Sales to Delivery Automation',
    Icon: Truck,
    intro: 'When a customer becomes a client, information should move smoothly into the next stage.',
    label: 'Automation opportunities include:',
    items: ['Customer information transfer', 'Quote approval workflows', 'Order creation', 'Project setup', 'Internal notifications'],
  },
  {
    title: 'Invoice and Finance Workflow Automation',
    Icon: Receipt,
    intro: 'Finance processes often involve repetitive administration.',
    label: 'Automation can support:',
    items: ['Invoice processing', 'Approval workflows', 'Payment reminders', 'Expense management', 'Financial reporting'],
  },
  {
    title: 'Document Processing Automation',
    Icon: FileStack,
    intro: 'Businesses process many documents:',
    items: ['Invoices', 'Contracts', 'Purchase orders', 'Customer forms', 'Reports'],
    outro: 'AI can help extract information, classify documents and route them into the correct workflow.',
  },
  {
    title: 'Reporting Automation',
    Icon: LayoutDashboard,
    intro: 'Instead of manually combining spreadsheets, connected systems can improve visibility into:',
    items: ['Sales performance', 'Revenue', 'Costs', 'Customer activity', 'Operations'],
  },
];

const erpItems = ['Sales', 'Purchasing', 'Inventory', 'Suppliers', 'Projects', 'Expenses', 'Finance', 'Reporting'];
const crmItems = ['Lead management', 'Sales pipeline', 'Customer records', 'Follow-ups', 'Communication history', 'Customer segmentation', 'Sales reporting'];

const aiSolutions = [
  {
    title: 'AI Document Processing',
    intro: 'Reduce manual work involved in:',
    items: ['Reading documents', 'Extracting information', 'Categorising files', 'Updating systems'],
    Icon: FileText,
  },
  {
    title: 'AI Customer Communication Support',
    intro: 'Support teams with:',
    items: ['Enquiry classification', 'Response assistance', 'Customer information retrieval', 'Message summaries'],
    Icon: MessageSquare,
  },
  {
    title: 'AI Business Assistants',
    intro: 'Help employees access approved internal information such as:',
    items: ['Company processes', 'Documentation', 'Policies', 'Product information'],
    Icon: BookOpen,
  },
  {
    title: 'AI Reporting Support',
    intro: 'Help business owners understand information faster through:',
    items: ['Automated summaries', 'Performance updates', 'Exception identification'],
    Icon: BarChart3,
  },
];

const keepConnect = [
  {
    title: 'Keep',
    text: 'Systems that support important business activities.',
    label: 'Examples:',
    items: ['Accounting platforms', 'Industry-specific software', 'Existing tools employees already use'],
    Icon: ShieldCheck,
  },
  {
    title: 'Connect',
    text: 'Systems where information needs to move automatically.',
    label: 'Examples:',
    items: ['CRM and accounting', 'Sales and operations', 'Inventory and purchasing'],
    Icon: Link2,
  },
  { title: 'Improve', text: 'Processes causing:', items: ['Manual work', 'Delays', 'Duplicate entry', 'Limited visibility'], Icon: RefreshCw },
  { title: 'Replace', text: 'Only systems that create significant limitations.', Icon: Layers },
];

const useCases = [
  ['Leads tracked manually', 'CRM-based sales management'],
  ['Customer information duplicated', 'Connected customer records'],
  ['Orders entered multiple times', 'Automated sales workflows'],
  ['Manual invoice processing', 'Finance automation'],
  ['Spreadsheet reporting', 'Connected dashboards'],
  ['Inventory visibility issues', 'ERP inventory management'],
  ['Repetitive admin', 'AI-assisted workflows'],
  ['Disconnected software', 'System integration'],
];

const impactMetrics = [
  { title: 'Time Saved', text: 'Reduction in hours spent on repetitive administration.', Icon: Clock },
  { title: 'Faster Processes', label: 'Examples:', items: ['Customer response', 'Quote approvals', 'Invoice processing', 'Reporting'], Icon: Timer },
  { title: 'Reduced Manual Errors', text: 'Less duplicate entry and fewer information gaps.', Icon: CircleCheck },
  { title: 'Better Visibility', label: 'Improved access to:', items: ['Sales information', 'Financial data', 'Operational performance'], Icon: Eye },
  { title: 'Improved Team Capacity', text: 'Allow employees to focus on higher-value business activities.', Icon: Users },
];

const zynexHelps = [
  'Understand operational bottlenecks',
  'Improve inefficient workflows',
  'Connect existing systems',
  'Automate repetitive work',
  'Implement ERP and CRM solutions',
  'Apply AI where it creates practical value',
];

const platforms = ['SAP', 'Odoo', 'ERPNext', 'Zoho', 'Salesforce'];

const faqs = [
  {
    question: 'Does a small business need ERP software?',
    answer: [
      'A small business may benefit from ERP when different departments rely on disconnected systems, spreadsheets or manual processes.',
      'ERP can help connect sales, operations, purchasing, finance and reporting.',
    ],
  },
  {
    question: 'Should a small business use AI automation?',
    answer: [
      'AI automation is useful when it solves a clear operational problem.',
      'Common examples include document processing, customer communication support, reporting assistance and repetitive administrative workflows.',
    ],
  },
  {
    question: 'Do we need to replace our existing software?',
    answer: ['Not always.', 'Many businesses can improve operations by integrating existing systems and automating processes between them.'],
  },
  {
    question: 'What is the difference between ERP and CRM?',
    answer: [
      'CRM manages customers, sales opportunities and communication.',
      'ERP manages operational processes such as finance, inventory, purchasing and reporting.',
      'Connecting both creates better information flow across the business.',
    ],
  },
  {
    question: 'How do we know what processes to automate?',
    answer: ['Start with processes that are:'],
    list: ['Repeated frequently', 'Time-consuming', 'Manual', 'Creating delays', 'Affecting customer experience or business costs'],
  },
  {
    question: 'How can automation help small businesses grow?',
    answer: [
      'Automation helps businesses handle increasing workload without increasing manual administration at the same rate.',
      'It improves consistency, visibility and employee capacity.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Problem visuals                                                     */
/* ------------------------------------------------------------------ */

const ProblemVisual = ({ type, items }) => {
  if (type === 'iconList') {
    return (
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map(({ label, Icon }) => (
          <li key={label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#f8faf5] px-4 py-3">
            <Icon className="h-5 w-5 flex-shrink-0 text-[#719334]" />
            <span className="text-sm font-medium text-slate-800 sm:text-base">{label}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (type === 'systems') {
    return (
      <div className="relative">
        <ul className="relative grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
          {items.map(({ label, Icon }) => (
            <li key={label} className="flex flex-col items-center rounded-xl border border-slate-100 bg-[#f8faf5] px-3 py-4 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#719334] shadow-sm ring-1 ring-slate-200">
                <Icon className="h-5 w-5" />
              </span>
              <span className="mt-2.5 text-[13px] font-semibold text-slate-800 sm:text-sm">{label}</span>
            </li>
          ))}
        </ul>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
          {['left-1/3 top-1/4', 'left-2/3 top-1/4', 'left-1/3 top-3/4', 'left-2/3 top-3/4'].map((pos) => (
            <span key={pos} className={`absolute ${pos} flex -translate-x-1/2 -translate-y-1/2 items-center gap-0.5`}>
              <span className="h-0.5 w-2 rounded bg-amber-400" />
              <span className="h-0.5 w-0.5" />
              <span className="h-0.5 w-2 rounded bg-amber-400" />
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'duplicate') {
    return (
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-[#f8faf5] px-4 py-3.5">
            <span className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-[#719334] shadow-sm ring-1 ring-slate-200">
              <Copy className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 rounded-full bg-amber-400 px-1.5 text-[10px] font-bold leading-4 text-white" aria-hidden="true">
                ×2
              </span>
            </span>
            <span className="text-sm font-medium text-slate-800 sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (type === 'silos') {
    return (
      <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {items.map(({ label, Icon }, i) => (
          <React.Fragment key={label}>
            <div className="flex flex-col rounded-xl border border-slate-100 bg-[#f8faf5] p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#719334] shadow-sm ring-1 ring-slate-200">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-800">{label}</p>
            </div>
            {i < items.length - 1 && (
              <div className="hidden items-center justify-center sm:flex" aria-hidden="true">
                <Unlink className="h-5 w-5 text-amber-500" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (type === 'questions') {
    return (
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((q, i) => (
          <li
            key={q}
            className={`flex items-start gap-3 rounded-xl border border-slate-100 bg-[#f8faf5] px-4 py-3.5 ${i === items.length - 1 && items.length % 2 ? 'sm:col-span-2' : ''}`}
          >
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">?</span>
            <span className="text-sm font-semibold text-slate-900 sm:text-base">{q}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (type === 'brokenLinks') {
    return (
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-4 rounded-xl border border-dashed border-amber-300 bg-amber-50/50 px-4 py-3.5">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white text-amber-500 shadow-sm ring-1 ring-amber-200">
              <Unlink className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-slate-800 sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return null;
};

/* Connected items converging into one workflow */
const ConnectDiagram = ({ items, Icon, title }) => {
  const rowH = 46;
  const h = Math.max(items.length * rowH, 200);
  const offset = (h - items.length * rowH) / 2;
  const hubY = h / 2;
  return (
    <div className="w-full">
      <div className="hidden grid-cols-[minmax(0,1fr)_110px_180px] items-center sm:grid">
        <ul className="space-y-2" style={{ paddingTop: offset, paddingBottom: offset }}>
          {items.map((item) => (
            <li key={item} className="flex h-[38px] items-center justify-end rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800">
              {item}
            </li>
          ))}
        </ul>
        <svg viewBox={`0 0 110 ${h}`} className="w-full" style={{ height: h }} aria-hidden="true">
          {items.map((item, i) => {
            const y = offset + i * rowH + 19;
            return <path key={item} d={`M0 ${y} C 55 ${y}, 55 ${hubY}, 110 ${hubY}`} fill="none" stroke={brandGreen} strokeOpacity="0.45" strokeWidth="1.75" />;
          })}
        </svg>
        <div className="rounded-2xl bg-gradient-to-br from-[#719334] to-[#5a7529] p-5 text-center text-white shadow-lg shadow-[#719334]/25">
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
            <Icon className="h-5 w-5 text-yellow-300" />
          </div>
          <p className="text-sm font-bold leading-snug">{title}</p>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-2 sm:hidden">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800">
            <span className="h-1.5 w-1.5 rounded-full bg-[#719334]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const SmallBusinessErpCrmAiAutomationAustralia = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeProblem, setActiveProblem] = useState(0);
  const [activeOpportunity, setActiveOpportunity] = useState(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: [...f.answer, ...(f.list || [])].join(' ') },
    })),
  };

  useSeo({
    title: 'ERP, CRM & AI Automation Solutions for Small Businesses Australia | Zynex Technologies',
    description:
      'Automate business processes with ERP, CRM and AI solutions for Australian small businesses. Zynex connects systems, reduces manual work and improves operations.',
  });

  return (
    <div className="min-h-screen bg-[#f8faf5] text-slate-900">
      <Schema schema={faqSchema} />

      {/* ================================ Hero ================================ */}
      <section className="relative overflow-hidden text-slate-900" style={{ background: 'linear-gradient(to bottom, #fcfbf7, #f4f0e6)' }}>
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

        <div className="relative container mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pt-24 lg:px-8 lg:pb-14 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <h1 className="max-w-3xl text-3xl font-heading font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
                Business Process Automation, ERP &amp; AI Solutions for Australian Small Businesses
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#5a7529] sm:text-xl">
                Find Where Your Business Is Losing Time, Capacity and Money, Then Fix the Right Process
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                <strong className="font-semibold text-slate-900">Growing businesses often do not have a technology problem.</strong>{' '}
                <strong className="font-semibold text-[#5a7529]">They have an operational problem.</strong>
              </p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                Sales information sits in one system. Accounting runs separately. Customer communication happens through emails. Inventory is tracked through spreadsheets. Reports require manual preparation.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#719334]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
                >
                  Book a Workflow Review
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <div aria-hidden="true" className="absolute -inset-3 rounded-[1.75rem] bg-[#719334]/5 blur-lg" />
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl border-2 border-slate-200 sm:block" />
              <img
                src={heroImage}
                alt="ERP, CRM and AI automation for Australian small businesses"
                className="relative aspect-[5/4] h-auto w-full rounded-2xl object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-slate-200"
              />
            </motion.div>
          </div>

          <div className="mt-14 grid gap-6 border-t border-slate-200 pt-10 md:grid-cols-3 md:gap-8">
            {[
              {
                Icon: Layers,
                text: 'As the business grows, these disconnected processes create more administrative work, slower decision-making and limited visibility.',
              },
              {
                Icon: Workflow,
                text: 'Zynex Technologies helps Australian small businesses identify operational bottlenecks, connect disconnected systems and implement practical improvements using automation, integrations, ERP and AI where they create measurable value.',
              },
              {
                Icon: Search,
                text: 'We start by understanding how your business operates today, identify where time and resources are being lost, and design a solution around your actual workflow.',
              },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#719334] shadow-sm ring-1 ring-slate-200">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="relative h-8 w-full">
          <div className="absolute inset-x-0 bottom-0 h-8 rounded-t-[2.5rem] bg-white" />
        </div>
      </section>

      {/* ====================== Small Businesses We Help ====================== */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col">
              <SectionIntro label="Small Businesses We Help" title="Operational Solutions Built Around Growing Australian Businesses">
                <p>Every business has different challenges depending on its industry, customers and growth stage.</p>
              </SectionIntro>
              <motion.div
                variants={fadeInUp}
                {...inView}
                className="relative mt-8 flex flex-1 flex-col justify-center overflow-hidden rounded-2xl border border-[#719334]/15 bg-[#f8faf5] p-6 pl-7"
              >
                <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#719334] to-[#a3c46a]" />
                <p className="text-base leading-8 text-slate-600">The goal is not to add more software.</p>
                <p className="mt-2 text-base font-semibold leading-8 text-slate-900">The goal is to help your existing processes work better.</p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} {...inView} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529]">Zynex works with:</p>
              <ul className="mt-4 grid flex-1 grid-cols-1 content-between sm:grid-cols-2 sm:gap-x-6">
                {businessTypes.map(({ label, Icon }) => (
                  <li key={label} className="group flex items-center gap-3.5 border-b border-slate-100 py-3.5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef4e3] text-[#719334] transition-colors duration-300 group-hover:bg-[#719334] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-slate-800 sm:text-[15px]">{label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ Problems We Solve ============================ */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionIntro label="Problems We Solve for Small Businesses" title="Where Growing Businesses Lose Time and Efficiency">
            <p>Many small businesses reach a stage where their current processes cannot support growth.</p>
            <p>The problem usually appears through everyday operational issues.</p>
          </SectionIntro>

          <motion.div variants={fadeInUp} {...inView} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-8">
            <div className="flex min-w-0 flex-col">
              <div role="tablist" aria-label="Problems We Solve for Small Businesses" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-1 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0 lg:pb-0">
                {problems.map((p, i) => {
                  const active = i === activeProblem;
                  return (
                    <button
                      key={p.title}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveProblem(i)}
                      className={`group relative flex flex-shrink-0 items-center gap-4 overflow-hidden rounded-xl px-4 py-3.5 text-left transition-all duration-300 lg:flex-1 ${
                        active ? 'bg-white shadow-[0_8px_28px_rgba(113,147,52,0.14)] ring-1 ring-[#719334]/20' : 'hover:bg-white/70'
                      }`}
                    >
                      <span aria-hidden="true" className={`absolute inset-y-0 left-0 hidden w-1 lg:block ${active ? 'bg-[#719334]' : 'bg-transparent'}`} />
                      <span className={`text-sm font-bold ${active ? 'text-[#719334]' : 'text-slate-400'}`}>{String(i + 1).padStart(2, '0')}</span>
                      <span
                        className={`whitespace-nowrap text-sm font-semibold sm:text-[15px] lg:whitespace-normal ${
                          active ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                        }`}
                      >
                        {p.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* All panels share one grid cell, so the card keeps the height of the tallest panel */}
            <div className="grid min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
              {problems.map((p, i) => (
                <div
                  key={p.title}
                  role="tabpanel"
                  aria-hidden={i !== activeProblem}
                  className={`[grid-area:1/1] transition-opacity duration-300 ${i === activeProblem ? 'visible opacity-100' : 'invisible opacity-0'}`}
                >
                  <p className="text-sm font-bold text-[#719334]">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 text-2xl font-heading font-bold leading-tight text-slate-900 sm:text-[1.75rem]">{p.title}</h3>
                  {p.before.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {p.before.map((para) => (
                        <p key={para} className="text-base leading-8 text-slate-600">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                  <div className="mt-6">
                    <ProblemVisual type={p.visual} items={p.items} />
                  </div>
                  {p.after && (
                    <div className="mt-6 space-y-1 border-t border-slate-100 pt-5">
                      {p.after.map((para) => (
                        <p key={para} className="text-base font-medium leading-8 text-slate-800">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= How Zynex Improves ======================= */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionIntro label="How Zynex Improves Small Business Operations" title="Understand the Process Before Introducing Technology">
            <p>Zynex does not start with a software recommendation.</p>
            <p>We start by understanding your business workflow.</p>
          </SectionIntro>
          <motion.div variants={fadeInUp} {...inView}>
            <SmallLabel className="mt-10">Our process:</SmallLabel>
          </motion.div>

          {/* Desktop timeline */}
          <div className="relative mt-10 hidden lg:block">
            <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-7 h-0.5 bg-gradient-to-r from-[#719334]/20 via-[#719334]/50 to-[#719334]/20" />
            <div className="grid grid-cols-5 gap-6">
              {approachSteps.map(({ title, intro, label, items, outro, Icon }) => (
                <motion.div key={title} variants={fadeInUp} {...inView} className="group relative">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/30 ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-center text-base font-semibold leading-6 text-slate-900">{title}</h3>
                    <p className="mt-2 text-center text-[13px] leading-6 text-slate-600">{intro}</p>
                    {label && <p className="mt-3 text-center text-xs font-semibold text-slate-500">{label}</p>}
                    {items.length > 0 && (
                      <ul className="mt-4 space-y-1.5 rounded-xl border border-slate-100 bg-[#f8faf5] p-4">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[13px] leading-5 text-slate-700">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#719334]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {outro && <p className="mt-3 rounded-lg bg-[#eef4e3] px-3 py-2 text-center text-[13px] font-semibold leading-5 text-[#5a7529]">{outro}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="relative mt-8 grid gap-8 lg:hidden">
            <div aria-hidden="true" className="absolute bottom-6 left-[1.35rem] top-6 w-0.5 bg-[#719334]/25" />
            {approachSteps.map(({ title, intro, label, items, outro, Icon }) => (
              <div key={title} className="relative flex gap-5">
                <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-md ring-4 ring-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1 pt-1.5">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{intro}</p>
                  {label && <p className="mt-2 text-xs font-semibold text-slate-500">{label}</p>}
                  {items.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  )}
                  {outro && <p className="mt-3 text-sm font-semibold text-[#5a7529]">{outro}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== Workflow Automation Opportunities =================== */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionIntro label="Small Business Workflow Automation Opportunities" title="Improve the Processes That Slow Growth" />

          <motion.div variants={fadeInUp} {...inView} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
            <div className="flex min-w-0 flex-col lg:col-span-4">
              <div role="tablist" aria-label="Small Business Workflow Automation Opportunities" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-1 lg:flex-col lg:gap-3 lg:px-0 lg:pb-0">
                {opportunities.map(({ title, Icon }, i) => {
                  const active = i === activeOpportunity;
                  return (
                    <button
                      key={title}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveOpportunity(i)}
                      className={`flex flex-shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 sm:text-[15px] lg:flex-1 ${
                        active
                          ? 'bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/20'
                          : 'border border-slate-200 bg-white text-slate-700 hover:border-[#719334]/40 hover:text-[#719334]'
                      }`}
                    >
                      <Icon className={`h-5 w-5 flex-shrink-0 ${active ? 'text-yellow-300' : 'text-[#719334]'}`} />
                      <span className="whitespace-nowrap lg:whitespace-normal">{title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* All panels share one grid cell, so the card keeps the height of the tallest panel */}
            <div className="grid min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8 lg:col-span-8 lg:p-10">
              {opportunities.map((opportunity, i) => (
                <div
                  key={opportunity.title}
                  role="tabpanel"
                  aria-hidden={i !== activeOpportunity}
                  className={`[grid-area:1/1] transition-opacity duration-300 ${i === activeOpportunity ? 'visible opacity-100' : 'invisible opacity-0'}`}
                >
                  <h3 className="text-2xl font-heading font-bold text-slate-900 sm:text-[1.75rem]">{opportunity.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{opportunity.intro}</p>
                  {opportunity.label ? (
                    <p className="mb-4 mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{opportunity.label}</p>
                  ) : (
                    <div className="mt-6" />
                  )}
                  <ConnectDiagram items={opportunity.items} Icon={opportunity.Icon} title={opportunity.title} />
                  {opportunity.outro && (
                    <p className="mt-7 flex items-start gap-3 rounded-xl bg-[#f8faf5] p-4 text-sm font-medium leading-7 text-slate-800 sm:text-base">
                      <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#719334]" aria-hidden="true" />
                      {opportunity.outro}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== ERP & CRM Solutions ===================== */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#eef4e3] blur-3xl" />
        <div className="relative container mx-auto max-w-7xl">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* ERP */}
            <motion.div variants={fadeInUp} {...inView} className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8">
              <SectionIntro small label="ERP Solutions for Small Businesses" title="Connect Your Core Business Operations">
                <p>ERP helps businesses connect operational processes that often become fragmented as they grow.</p>
              </SectionIntro>
              <p className="mt-5 text-sm font-semibold text-slate-500">Depending on business requirements, ERP can connect:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {erpItems.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-2xl border-l-4 border-[#719334] bg-[#f8faf5] p-5">
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">The goal is not simply implementing ERP.</p>
                  <p className="mt-1 text-sm font-semibold leading-7 text-slate-900 sm:text-base">The goal is creating a better way for information to move through the business.</p>
                </div>
              </div>
            </motion.div>

            {/* Connector */}
            <div className="flex items-center justify-center gap-2 lg:flex-col" aria-hidden="true">
              <span className="h-px w-12 bg-[#719334]/30 lg:h-24 lg:w-px" />
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/30 ring-4 ring-white">
                <ArrowLeftRight className="h-5 w-5 rotate-90 lg:rotate-0" />
              </span>
              <span className="h-px w-12 bg-[#719334]/30 lg:h-24 lg:w-px" />
            </div>

            {/* CRM */}
            <motion.div variants={fadeInUp} {...inView} className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8">
              <SectionIntro small label="CRM Solutions for Small Businesses" title="Create a Clearer View of Customers and Opportunities">
                <p>CRM helps businesses manage customer relationships more consistently.</p>
              </SectionIntro>
              <p className="mt-5 text-sm font-semibold text-slate-500">A CRM implementation can support:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {crmItems.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-2xl border-l-4 border-[#719334] bg-[#f8faf5] p-5">
                  <p className="text-sm font-semibold leading-7 text-slate-900 sm:text-base">
                    When CRM connects with other business systems, customer information can move into operational workflows without repeated manual entry.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== AI Automation ===================== */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionIntro label="AI Automation for Small Businesses" title="Use AI Where It Removes Repetitive Work">
              <p>AI should solve a business problem, not simply be added because the technology exists.</p>
            </SectionIntro>
            <span className="inline-flex self-start rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529] shadow-sm ring-1 ring-[#719334]/15 lg:self-end">
              Useful AI automation opportunities include:
            </span>
          </div>

          <motion.div
            variants={fadeInUp}
            {...inView}
            className="mt-12 grid overflow-hidden rounded-3xl border border-[#719334]/15 bg-white shadow-[0_8px_32px_rgba(113,147,52,0.10)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {aiSolutions.map(({ title, intro, items, Icon }, i) => (
              <div
                key={title}
                className={`group flex flex-col border-slate-100 p-6 transition-colors duration-300 hover:bg-[#f8faf5] sm:p-7 ${
                  ['border-b sm:border-r lg:border-b-0', 'border-b lg:border-b-0 lg:border-r', 'border-b sm:border-b-0 sm:border-r', ''][i]
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-900 sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{intro}</p>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-5 text-slate-700">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#719334]" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================= Keep, Connect or Replace ======================= */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-10">
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-[#f8faf5] p-6 sm:p-8">
              <SectionIntro label="Keep, Connect or Replace?" title="Improve Your Existing Technology Before Rebuilding Everything">
                <p>Small businesses often do not need to replace every system.</p>
              </SectionIntro>

              <motion.div variants={fadeInUp} {...inView} className="mt-auto pt-8">
                <div className="rounded-2xl border border-[#719334]/30 bg-white p-5 shadow-[0_8px_24px_rgba(113,147,52,0.12)]">
                  <Lightbulb className="h-5 w-5 text-[#719334]" aria-hidden="true" />
                  <p className="mt-2 text-base font-semibold leading-7 text-slate-900">
                    A better approach is understanding what is already working and improving the gaps.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              {...inView}
              className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:auto-rows-fr sm:grid-cols-2"
            >
              {keepConnect.map(({ title, text, label, items, Icon }, i) => {
                const replace = i === 3;
                const borders = ['border-b sm:border-r', 'border-b', 'border-b sm:border-b-0 sm:border-r', ''][i];
                return (
                  <div key={title} className={`flex flex-col border-slate-100 p-6 sm:p-8 ${borders} ${replace ? 'bg-amber-50/60' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md ${
                          replace ? 'bg-amber-500 shadow-amber-500/25' : 'bg-gradient-to-br from-[#719334] to-[#5a7529] shadow-[#719334]/25'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex items-end gap-1" aria-hidden="true">
                        {[1, 2, 3, 4].map((b) => (
                          <span key={b} className="w-1.5 rounded-full" style={{ height: 6 + b * 4, background: b <= i + 1 ? (replace ? '#f59e0b' : brandGreen) : '#e2e8f0' }} />
                        ))}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-heading font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{text}</p>
                    {label && <p className="mt-2 text-xs font-semibold text-slate-500">{label}</p>}
                    {items && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ Use Cases ============================ */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <motion.div variants={fadeInUp} {...inView}>
            <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">Small Business ERP, CRM and AI Use Cases</h2>
            <HeadingBar />
          </motion.div>

          <motion.div variants={fadeInUp} {...inView} className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#f1f5ec]">
                  <th scope="col" className="w-1/2 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:px-8">
                    Business Challenge
                  </th>
                  <th scope="col" className="w-1/2 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5a7529] sm:px-8">
                    Improvement Opportunity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {useCases.map(([challenge, improvement]) => (
                  <tr key={challenge} className="group bg-white transition-colors hover:bg-[#f8faf5]">
                    <td className="px-4 py-4 align-top text-sm text-slate-600 sm:px-8 sm:text-base">{challenge}</td>
                    <td className="px-4 py-4 align-top text-sm font-semibold text-slate-900 sm:px-8 sm:text-base">
                      <span className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#719334] text-white transition-transform group-hover:translate-x-0.5">
                          <ArrowRight className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ======================= Measuring Improvement ======================= */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col">
              <SectionIntro label="Measuring Business Improvement" title="Focus on Operational Results">
                <p>Technology implementation should improve business performance.</p>
              </SectionIntro>

              <motion.div
                variants={fadeInUp}
                {...inView}
                className="mt-8 flex flex-1 flex-col justify-center rounded-2xl border border-slate-100 bg-[#f8faf5] p-5 sm:p-6"
              >
                <svg viewBox="0 0 320 130" className="h-auto w-full" aria-hidden="true">
                  {[20, 55, 90, 125].map((y) => (
                    <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#e2e8f0" strokeWidth="1" />
                  ))}
                  <motion.path
                    d="M10 30 C 80 35, 120 60, 170 78 S 260 106, 310 110"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: 'easeOut' }}
                  />
                  <motion.path
                    d="M10 110 C 80 106, 120 84, 170 66 S 260 32, 310 24"
                    fill="none"
                    stroke={brandGreen}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: 0.2, ease: 'easeOut' }}
                  />
                  <circle cx="310" cy="110" r="5" fill="#fff" stroke="#f59e0b" strokeWidth="3" />
                  <circle cx="310" cy="24" r="5" fill="#fff" stroke={brandGreen} strokeWidth="3" />
                </svg>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600 sm:text-sm">
                  <span className="flex items-center gap-2">
                    <span className="h-1 w-5 rounded-full bg-amber-500" />
                    Reduced Manual Errors
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-1 w-5 rounded-full bg-[#719334]" />
                    Improved Team Capacity
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              {...inView}
              className="relative overflow-hidden rounded-3xl border border-[#719334]/15 bg-gradient-to-br from-white to-[#eef4e3] p-6 shadow-[0_8px_32px_rgba(113,147,52,0.10)] sm:p-8"
            >
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#719334]/10 blur-2xl" />
              <span className="relative inline-flex rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5a7529] shadow-sm ring-1 ring-[#719334]/15">
                Depending on the project, Zynex can measure:
              </span>
              <ul className="relative mt-6 space-y-3">
                {impactMetrics.map(({ title, text, label, items, Icon }) => (
                  <li
                    key={title}
                    className="flex gap-4 rounded-xl bg-white/85 p-4 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:ring-[#719334]/20 sm:p-5"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef4e3] text-[#719334]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                      {text && <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>}
                      {label && <p className="mt-1 text-sm leading-6 text-slate-600">{label}</p>}
                      {items && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <Tag key={item}>{item}</Tag>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================= Why Zynex ============================= */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch xl:gap-16">
            <div>
              <SectionIntro label="Why Zynex Technologies" title="We Solve Business Problems Before Selecting Technology">
                <p>Small businesses do not need another collection of disconnected applications.</p>
                <p className="font-semibold text-slate-900">They need processes that support growth.</p>
              </SectionIntro>

              <motion.div variants={fadeInUp} {...inView} className="mt-8">
                <SmallLabel>Zynex helps businesses:</SmallLabel>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {zynexHelps.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} {...inView} className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-center text-sm leading-7 text-slate-600 sm:text-base">Our technology ecosystem includes:</p>
              <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
                {platforms.map((p) => (
                  <li key={p} className="rounded-xl bg-[#f8faf5] px-5 py-2.5 text-sm font-bold text-slate-800 ring-1 ring-slate-200 sm:text-base">
                    {p}
                  </li>
                ))}
              </ul>
              <div className="my-5 flex justify-center" aria-hidden="true">
                <span className="h-8 w-px bg-[#719334]/50" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#719334] to-[#5a7529] p-6 text-center text-white shadow-lg shadow-[#719334]/25">
                <Target className="mx-auto mb-3 h-6 w-6 text-yellow-300" />
                <p className="font-heading text-lg font-bold sm:text-xl">These platforms are selected based on business requirements, not used as the starting point.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================ FAQ ================================ */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <motion.div variants={fadeInUp} {...inView}>
            <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
            <HeadingBar />
          </motion.div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen ? 'border-[#719334]/30 bg-[#f8faf5] shadow-[0_8px_28px_rgba(113,147,52,0.12)]' : 'border-slate-100 bg-[#f8faf5] hover:border-[#719334]/20'
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
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="space-y-2 px-6 pb-6">
                        {faq.answer.map((para) => (
                          <p key={para} className="text-sm leading-7 text-slate-600">
                            {para}
                          </p>
                        ))}
                        {faq.list && (
                          <ul className="space-y-1.5 pt-1">
                            {faq.list.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#719334]" strokeWidth={3} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
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
        className="relative overflow-hidden px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
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
          <h2 className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl">Improve Your Business Operations With a Workflow Review</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-white sm:text-xl">
            Growth should not mean more spreadsheets, more manual work and more disconnected systems.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90">
            Zynex Technologies helps Australian small businesses identify operational problems, improve workflows and implement the right combination of automation, integrations, ERP and AI.
          </p>
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#719334] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-2xl"
            >
              Book a Workflow Review
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80">
            Understand where your business is losing time and identify practical opportunities to improve operations.
          </p>
        </div>
      </section>

      <RelatedIndustryPages currentSlug="small-business-erp-crm-ai" />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default SmallBusinessErpCrmAiAutomationAustralia;

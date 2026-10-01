'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Plus,
  Building2,
  Home,
  Construction,
  Zap,
  Fan,
  Droplets,
  PaintRoller,
  Factory,
  Boxes,
  Wrench,
  Calculator,
  ArrowLeftRight,
  LineChart,
  ShoppingCart,
  Users,
  LayoutDashboard,
  Search,
  AlertTriangle,
  Gauge,
  Lightbulb,
  Target,
  TrendingUp,
  FileText,
  Handshake,
  Bot,
  Clock,
  Keyboard,
  FileSpreadsheet,
  BarChart3,
  Send,
  Link2,
  Layers,
  RefreshCw,
  ShieldCheck,
  MessageSquare,
  BookOpen,
  Sparkles,
  Timer,
  Eye,
  CircleCheck,
  Workflow,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedIndustryPages from '../../components/RelatedIndustryPages';
import { useSeo } from '../../hooks/useSeo';

const heroImage = '/construction-erp-crm-ai/construction-erp-crm-ai-hero.webp';

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

function SectionIntro({ label, title, children, className = '' }) {
  return (
    <motion.div variants={fadeInUp} {...inView} className={className}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
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

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const businessTypes = [
  { label: 'Commercial builders', Icon: Building2 },
  { label: 'Residential construction companies', Icon: Home },
  { label: 'Civil contractors', Icon: Construction },
  { label: 'Electrical contractors', Icon: Zap },
  { label: 'HVAC contractors', Icon: Fan },
  { label: 'Plumbing contractors', Icon: Droplets },
  { label: 'Fit-out companies', Icon: PaintRoller },
  { label: 'Engineering and infrastructure businesses', Icon: Factory },
  { label: 'Building material suppliers', Icon: Boxes },
  { label: 'Construction service providers', Icon: Wrench },
];

const costDrivers = [
  { label: 'Material price changes', width: 30, color: '#5a7529' },
  { label: 'Labour hours', width: 24, color: '#719334' },
  { label: 'Subcontractor costs', width: 20, color: '#9bb865' },
  { label: 'Purchase orders', width: 14, color: '#c7d8a6' },
  { label: 'Variations', width: 12, color: '#f2c230' },
];

const adminTasks = [
  { label: 'Data entry', Icon: Keyboard },
  { label: 'Document processing', Icon: FileText },
  { label: 'Updating spreadsheets', Icon: FileSpreadsheet },
  { label: 'Preparing reports', Icon: BarChart3 },
  { label: 'Following up approvals', Icon: Send },
  { label: 'Moving information between systems', Icon: ArrowLeftRight },
];

const problems = [
  {
    title: 'Manual Estimating and Quote Management',
    before: [
      'Sales teams, estimators and project managers often work across spreadsheets, emails and separate systems.',
      'This creates delays between enquiry, estimation, approval and project handover.',
    ],
    visual: 'estimating',
  },
  {
    title: 'Poor Visibility Between Sales and Delivery Teams',
    before: [
      'A project may move from opportunity to execution, but important information can be lost during handover.',
      'Teams spend time searching emails, documents and spreadsheets to understand project requirements.',
    ],
    visual: 'handover',
  },
  {
    title: 'Limited Real-Time Project Cost Visibility',
    before: ['Project costs can change quickly due to:'],
    visual: 'cost',
    after: 'Without connected information, project managers may discover margin issues after costs have already increased.',
  },
  {
    title: 'Procurement Delays',
    before: [
      'Construction businesses often manage supplier communication, purchase approvals and materials tracking manually.',
      'This can create delays in:',
    ],
    visual: 'procurement',
  },
  {
    title: 'Subcontractor and Field Workflow Challenges',
    before: [
      'Managing subcontractors, schedules, documentation and project updates across multiple communication channels creates unnecessary coordination work.',
    ],
    visual: 'subcontractor',
  },
  {
    title: 'Repetitive Administration',
    before: ['Teams spend significant time on:'],
    visual: 'admin',
  },
  {
    title: 'Management Reporting Takes Too Long',
    before: ['Leadership teams need answers quickly:'],
    visual: 'reporting',
    after: 'But when information is stored across multiple systems, reporting becomes a manual process.',
  },
];

const approachSteps = [
  {
    title: '1. Understand Your Current Process',
    intro: 'We review how information currently moves through your business:',
    items: ['Lead generation', 'Estimation', 'Tendering', 'Project handover', 'Procurement', 'Construction delivery', 'Invoicing', 'Reporting'],
    Icon: Search,
  },
  {
    title: '2. Identify Operational Friction',
    intro: 'We identify where time, money or capacity is being lost.',
    label: 'Examples:',
    items: ['Duplicate data entry', 'Manual approvals', 'Spreadsheet dependency', 'Delayed communication', 'Reporting gaps', 'Disconnected applications'],
    Icon: AlertTriangle,
  },
  {
    title: '3. Measure the Impact',
    intro: 'We look at measurable areas such as:',
    items: ['Hours spent on administration', 'Approval delays', 'Project reporting time', 'Manual processing volume', 'Communication gaps'],
    Icon: Gauge,
  },
  {
    title: '4. Design the Right Improvement',
    intro: 'The solution may involve:',
    items: ['Workflow automation', 'Software integration', 'ERP implementation', 'CRM optimisation', 'AI-assisted processes'],
    outro: 'Not every problem requires replacing existing software.',
    Icon: Lightbulb,
  },
  {
    title: '5. Implement and Measure',
    intro: 'After implementation, we track whether the changes improve operational performance.',
    items: [],
    Icon: Target,
  },
];

const opportunities = [
  {
    title: 'Lead to Quote Automation',
    Icon: TrendingUp,
    intro: 'Connect enquiries, customer information, estimating workflows and follow-ups.',
    label: 'Possible improvements:',
    items: ['Capture enquiries automatically', 'Track opportunities', 'Reduce missed follow-ups', 'Improve quote visibility'],
  },
  {
    title: 'Quote to Project Handover',
    Icon: Handshake,
    intro: 'Reduce information loss between sales and delivery teams.',
    label: 'A connected workflow can help transfer:',
    items: ['Customer information', 'Project requirements', 'Quote details', 'Scope information', 'Commercial details'],
    outro: 'from sales processes into project workflows.',
  },
  {
    title: 'Procurement Workflow Automation',
    Icon: ShoppingCart,
    intro: 'Improve purchasing visibility by connecting:',
    items: ['Purchase requests', 'Approval workflows', 'Suppliers', 'Purchase orders', 'Project budgets'],
    outro: 'This helps teams understand committed costs earlier.',
  },
  {
    title: 'Job Costing and Project Visibility',
    Icon: LineChart,
    intro: 'Connect project information with:',
    items: ['Labour', 'Materials', 'Subcontractors', 'Expenses', 'Purchase orders', 'Invoices'],
    outro: 'This creates better visibility into project performance.',
  },
  {
    title: 'Document Processing Automation',
    Icon: FileText,
    intro: 'Construction companies handle large volumes of documents:',
    items: ['Contracts', 'Quotes', 'Purchase orders', 'Supplier invoices', 'Compliance documents', 'Project reports'],
    outro: 'AI-powered document workflows can help extract information, classify documents and route them to the correct process.',
  },
  {
    title: 'Reporting Automation',
    Icon: LayoutDashboard,
    intro: 'Instead of manually preparing reports from different sources, connected systems can provide better operational visibility.',
    label: 'Examples:',
    items: ['Project status reports', 'Cost summaries', 'Sales pipeline reports', 'Procurement updates', 'Management dashboards'],
  },
];

const erpItems = ['Projects', 'Purchasing', 'Suppliers', 'Expenses', 'Inventory', 'Invoicing', 'Reporting'];
const crmItems = ['New enquiries', 'Sales opportunities', 'Tender tracking', 'Customer communication', 'Follow-ups', 'Client history'];

const aiSolutions = [
  { title: 'AI Document Processing', intro: 'Extract information from:', items: ['Supplier invoices', 'Contracts', 'Tender documents', 'Purchase orders'], Icon: FileText },
  { title: 'AI Communication Assistance', intro: 'Support:', items: ['Email classification', 'Customer enquiry responses', 'Internal summaries'], Icon: MessageSquare },
  { title: 'AI Reporting Support', intro: 'Help teams understand operational information faster through automated summaries and alerts.', items: [], Icon: BarChart3 },
  {
    title: 'AI Knowledge Assistants',
    intro: 'Help employees access approved internal information such as:',
    items: ['Processes', 'Documentation', 'Policies', 'Project information'],
    Icon: BookOpen,
  },
];

const keepConnect = [
  { title: 'What Should Stay?', text: 'Existing tools that already support important workflows.', Icon: ShieldCheck },
  { title: 'What Should Connect?', text: 'Systems where information needs to move automatically.', Icon: Link2 },
  { title: 'What Should Improve?', text: 'Processes causing delays, manual work or reporting problems.', Icon: RefreshCw },
  { title: 'What Should Be Replaced?', text: 'Only systems that create significant operational limitations.', Icon: Layers },
];

const useCases = [
  ['Leads managed through emails and spreadsheets', 'CRM-based opportunity management'],
  ['Manual project handover', 'Connected sales-to-project workflow'],
  ['Limited cost visibility', 'ERP-based job costing'],
  ['Slow purchase approvals', 'Automated procurement workflows'],
  ['Supplier information scattered', 'Central supplier management'],
  ['Manual invoice processing', 'Document automation'],
  ['Reports prepared manually', 'Connected dashboards'],
  ['Repetitive admin work', 'AI-assisted workflows'],
];

const impactMetrics = [
  { title: 'Reduced Administrative Hours', text: 'How much employee time is saved from repetitive tasks.', Icon: Clock },
  { title: 'Faster Process Completion', label: 'Examples:', items: ['Quote approvals', 'Purchase approvals', 'Reporting cycles'], Icon: Timer },
  { title: 'Fewer Manual Errors', text: 'Reduced duplicate entry and information gaps.', Icon: CircleCheck },
  { title: 'Better Project Visibility', label: 'Improved understanding of:', items: ['Costs', 'Progress', 'Resources', 'Commercial performance'], Icon: Eye },
  { title: 'Improved Team Capacity', text: 'Allowing teams to spend more time on higher-value activities.', Icon: Users },
];

const zynexHelps = [
  'Analyse current workflows',
  'Identify inefficiencies',
  'Connect existing systems',
  'Automate repetitive work',
  'Implement ERP and CRM solutions',
  'Apply AI where it creates measurable value',
];

const platforms = ['SAP', 'Odoo', 'ERPNext', 'Zoho', 'Salesforce'];

const faqs = [
  {
    question: 'Does a construction company need to replace existing software to automate processes?',
    answer: [
      'No.',
      'Many businesses already have useful systems. The first step is understanding where information is disconnected and whether integration or automation can improve the current setup.',
    ],
  },
  {
    question: 'How can AI help construction companies?',
    answer: [
      'AI can assist with administrative and information-heavy workflows such as document processing, enquiry handling, reporting, information extraction and internal knowledge access.',
    ],
  },
  {
    question: 'What is construction ERP software?',
    answer: [
      'Construction ERP software connects business processes such as project management, procurement, suppliers, finance, inventory and reporting into a connected operational system.',
    ],
  },
  {
    question: 'Can ERP and CRM work together for construction companies?',
    answer: [
      'Yes.',
      'CRM manages the commercial side of the business, including leads, customers and opportunities.',
      'ERP manages operational delivery, purchasing, finance and project processes.',
      'Connecting both creates a clearer flow from enquiry to project completion.',
    ],
  },
  {
    question: 'How do I know which construction processes should be automated?',
    answer: ['Start with processes that are:'],
    list: ['Repeated frequently', 'Time-consuming', 'Dependent on manual data entry', 'Creating delays', 'Affecting customer experience or profitability'],
  },
];

/* ------------------------------------------------------------------ */
/* Problem visuals                                                     */
/* ------------------------------------------------------------------ */

const ProblemVisual = ({ type }) => {
  if (type === 'estimating') {
    return (
      <div className="flex items-start justify-between gap-1">
        {['enquiry', 'estimation', 'approval', 'project handover'].map((step, i, arr) => (
          <React.Fragment key={step}>
            <div className="flex w-16 flex-col items-center text-center sm:w-24">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] font-heading text-sm font-bold text-white shadow-md shadow-[#719334]/25">
                {i + 1}
              </span>
              <span className="mt-2.5 text-xs font-semibold text-slate-700 sm:text-sm">{step}</span>
            </div>
            {i < arr.length - 1 && (
              <div className="relative mt-[22px] flex-1">
                <div className="border-t-2 border-dashed border-slate-300" />
                <Clock className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-amber-500" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (type === 'handover') {
    return (
      <svg viewBox="0 0 560 150" className="h-auto w-full" role="img" aria-label="Information lost between opportunity and execution">
        <rect x="10" y="35" width="150" height="80" rx="16" fill={brandGreen} />
        <text x="85" y="81" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="700">opportunity</text>
        <rect x="400" y="35" width="150" height="80" rx="16" fill={brandGreenDark} />
        <text x="475" y="81" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="700">execution</text>
        <line x1="168" y1="75" x2="250" y2="75" stroke={brandGreen} strokeWidth="3" />
        <line x1="310" y1="75" x2="392" y2="75" stroke={brandGreen} strokeWidth="3" strokeDasharray="6 6" />
        <polygon points="392,68 402,75 392,82" fill={brandGreen} />
        <circle cx="280" cy="75" r="26" fill="#fff7ed" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 4" />
        <text x="280" y="82" textAnchor="middle" fill="#d97706" fontSize="20" fontWeight="700">?</text>
        {[[240, 30], [300, 22], [330, 120], [255, 128]].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="16" height="20" rx="3" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" transform={`rotate(${i * 17 - 20} ${x + 8} ${y + 10})`} />
        ))}
      </svg>
    );
  }

  if (type === 'cost') {
    return (
      <div>
        <div className="flex h-11 w-full overflow-hidden rounded-xl">
          {costDrivers.map((d) => (
            <div key={d.label} style={{ width: `${d.width}%`, background: d.color }} className="h-full border-r-2 border-white last:border-r-0" />
          ))}
        </div>
        <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {costDrivers.map((d) => (
            <li key={d.label} className="flex items-center gap-3 text-sm font-medium text-slate-800 sm:text-base">
              <span className="h-3 w-3 flex-shrink-0 rounded" style={{ background: d.color }} />
              {d.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (type === 'procurement') {
    return (
      <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {['Purchase approvals', 'Supplier coordination', 'Material availability', 'Project scheduling'].map((item, i) => (
          <li key={item} className="rounded-xl border border-slate-100 bg-[#f8faf5] p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">{String(i + 1).padStart(2, '0')}</span>
              <Timer className="h-4 w-4 text-amber-500" />
            </div>
            <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-gradient-to-r from-[#719334] to-amber-400" style={{ width: `${40 + i * 18}%` }} />
            </div>
            <p className="text-sm font-semibold leading-snug text-slate-900">{item}</p>
          </li>
        ))}
      </ol>
    );
  }

  if (type === 'subcontractor') {
    const nodes = ['subcontractors', 'schedules', 'documentation', 'project updates'];
    return (
      <svg viewBox="0 0 560 160" className="h-auto w-full" role="img" aria-label="Coordination across multiple communication channels">
        {nodes.map((n, i) => {
          const x = 20 + i * 135;
          return (
            <g key={n}>
              {[0, 1, 2, 3].map((j) => (
                <path
                  key={j}
                  d={`M${x + 60} 56 C ${x + 60} 100, ${20 + j * 135 + 60} 90, ${20 + j * 135 + 60} 128`}
                  fill="none"
                  stroke="#f59e0b"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              ))}
              <rect x={x} y="18" width="120" height="38" rx="10" fill="#eef4e3" stroke={brandGreen} strokeOpacity="0.4" />
              <text x={x + 60} y="42" textAnchor="middle" fontSize="13" fontWeight="600" fill="#334155">{n}</text>
              <circle cx={x + 60} cy="136" r="9" fill="#fff" stroke="#f59e0b" strokeWidth="2" />
            </g>
          );
        })}
      </svg>
    );
  }

  if (type === 'admin') {
    return (
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {adminTasks.map(({ label, Icon }) => (
          <li key={label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#f8faf5] px-4 py-3">
            <Icon className="h-5 w-5 flex-shrink-0 text-[#719334]" />
            <span className="text-sm font-medium text-slate-800 sm:text-base">{label}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (type === 'reporting') {
    return (
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {['Which projects are profitable?', 'Which jobs are delayed?', 'Where are costs increasing?', 'What opportunities are in the pipeline?'].map((q) => (
          <li key={q} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#f8faf5] px-4 py-3.5">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">?</span>
            <span className="text-sm font-semibold text-slate-900 sm:text-base">{q}</span>
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

const ConstructionErpCrmAiAutomationAustralia = () => {
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
    title: 'Construction ERP, CRM & AI Automation Solutions in Australia | Zynex Technologies',
    description:
      'Improve construction operations with ERP, CRM and AI automation solutions. Zynex helps Australian construction companies connect systems, automate workflows and improve project visibility.',
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
                Construction Workflow Automation, ERP &amp; AI Solutions for Australian Construction Businesses
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#5a7529] sm:text-xl">
                Find Where Your Construction Business Is Losing Time, Visibility and Profitability
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                <strong className="font-semibold text-slate-900">Construction businesses rarely struggle because they lack software.</strong>{' '}
                The bigger challenge is that estimating, sales, project delivery, procurement, subcontractor management, finance and reporting often operate across disconnected systems.
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
                alt="Construction ERP, CRM and AI automation for Australian construction businesses"
                className="relative aspect-[5/4] h-auto w-full rounded-2xl object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-slate-200"
              />
            </motion.div>
          </div>

          <div className="mt-14 grid gap-6 border-t border-slate-200 pt-10 md:grid-cols-2 md:gap-10">
            {[
              {
                Icon: Workflow,
                text: 'Zynex Technologies helps Australian construction companies identify operational bottlenecks, connect disconnected processes and implement the right combination of automation, integrations, ERP and AI to improve the way work moves through the business.',
              },
              {
                Icon: Search,
                text: 'We start by understanding how your construction business operates today, identify where time and resources are being lost, and design a practical improvement plan around your existing systems.',
              },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#719334] shadow-sm ring-1 ring-slate-200">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm leading-7 text-slate-600 sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="relative h-8 w-full">
          <div className="absolute inset-x-0 bottom-0 h-8 rounded-t-[2.5rem] bg-white" />
        </div>
      </section>

      {/* ====================== Construction Businesses We Help ====================== */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionIntro label="Construction Businesses We Help" title="Operational Solutions Built Around How Construction Companies Actually Work">
                <p>Every construction business has different workflows depending on project type, team structure and delivery model.</p>
              </SectionIntro>
              <motion.div variants={fadeInUp} {...inView} className="relative mt-8 overflow-hidden rounded-2xl border border-[#719334]/15 bg-[#f8faf5] p-6 pl-7">
                <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#719334] to-[#a3c46a]" />
                <p className="text-base font-medium leading-8 text-slate-800">
                  Whether your challenge is managing enquiries, improving project visibility, reducing administrative work or connecting existing software, we focus on improving the process first.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} {...inView} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529]">Zynex works with:</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6">
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
          <SectionIntro label="Problems We Solve for Construction Businesses" title="Where Construction Operations Usually Lose Time and Money">
            <p>Construction companies often have experienced teams and capable software, but operational gaps between systems create unnecessary work.</p>
          </SectionIntro>

          <p className="mb-5 mt-12 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Common challenges include:</p>
          <motion.div variants={fadeInUp} {...inView} className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-8">
            <div className="flex min-w-0 flex-col">
              <div role="tablist" aria-label="Common challenges" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-1 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0 lg:pb-0">
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
                  <div className="mt-4 space-y-3">
                    {p.before.map((para) => (
                      <p key={para} className="text-base leading-8 text-slate-600">
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="mt-7">
                    <ProblemVisual type={p.visual} />
                  </div>
                  {p.after && <p className="mt-7 border-t border-slate-100 pt-6 text-base font-medium leading-8 text-slate-800">{p.after}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= How Zynex Improves ======================= */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionIntro label="How Zynex Improves Construction Operations" title="Understand the Workflow Before Introducing Technology">
            <p>Zynex does not begin with a software recommendation.</p>
            <p>We begin by understanding where your construction business is experiencing friction.</p>
          </SectionIntro>
          <motion.p variants={fadeInUp} {...inView} className="mt-10 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
            Our approach:
          </motion.p>

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
          <SectionIntro label="Construction Workflow Automation Opportunities" title="Improve the Processes That Slow Down Project Delivery" />

          <motion.div variants={fadeInUp} {...inView} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
            <div className="flex min-w-0 flex-col lg:col-span-4">
              <div role="tablist" aria-label="Construction Workflow Automation Opportunities" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-1 lg:flex-col lg:gap-3 lg:px-0 lg:pb-0">
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
                  {opportunity.outro && <p className="mt-7 border-t border-slate-100 pt-6 text-base font-medium leading-8 text-slate-800">{opportunity.outro}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== ERP, CRM and AI Solutions ===================== */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#eef4e3] blur-3xl" />
        <div className="relative container mx-auto max-w-7xl">
          <SectionIntro label="ERP, CRM and AI Solutions for Construction Businesses" title="Technology That Supports Better Construction Operations">
            <p>Technology should support the workflow, not become another disconnected system.</p>
            <p>Zynex helps construction companies improve operations through:</p>
          </SectionIntro>

          <motion.div variants={fadeInUp} {...inView} className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* ERP */}
            <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.06)] sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25">
                  <Calculator className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Construction ERP Solutions</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">ERP connects operational and financial processes including:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {erpItems.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium leading-7 text-slate-800 sm:text-base">
                ERP can help construction businesses create better visibility across project delivery.
              </p>
            </div>

            {/* Hub */}
            <div className="relative mx-auto hidden h-[240px] w-[240px] items-center justify-center lg:flex" aria-hidden="true">
              <div className="absolute inset-3 rounded-full border border-slate-200/80" />
              <div className="absolute inset-9 rounded-full border-2 border-dashed border-[#719334]/25" />
              <svg viewBox="0 0 240 240" className="absolute inset-0 h-full w-full">
                <circle cx="120" cy="120" r="92" fill="none" stroke={brandGreen} strokeWidth="4" strokeDasharray="160 420" strokeLinecap="round" transform="rotate(-60 120 120)" opacity="0.55" />
              </svg>
              <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-[0_18px_44px_rgba(15,23,42,0.10)]">
                <p className="font-heading text-lg font-bold text-slate-900">ERP</p>
                <ArrowLeftRight className="my-1 h-4 w-4 rotate-90 text-[#719334]" />
                <p className="font-heading text-lg font-bold text-slate-900">CRM</p>
              </div>
              {[
                { Icon: Calculator, className: 'left-0 top-1/2 -translate-y-1/2' },
                { Icon: Users, className: 'right-0 top-1/2 -translate-y-1/2' },
                { Icon: Bot, className: 'bottom-0 left-1/2 -translate-x-1/2' },
                { Icon: Sparkles, className: 'top-0 left-1/2 -translate-x-1/2' },
              ].map(({ Icon, className }, i) => (
                <span key={i} className={`absolute z-20 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg ring-4 ring-white ${className}`}>
                  <Icon className="h-5 w-5" />
                </span>
              ))}
            </div>

            {/* CRM */}
            <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.06)] sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25">
                  <Users className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Construction CRM Solutions</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">CRM helps manage the commercial side of construction.</p>
              <p className="mt-1 text-sm leading-7 text-slate-600 sm:text-base">This includes:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {crmItems.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium leading-7 text-slate-800 sm:text-base">
                Connecting CRM with operational systems reduces information gaps after a deal is won.
              </p>
            </div>
          </motion.div>

          {/* AI strip */}
          <motion.div
            variants={fadeInUp}
            {...inView}
            className="mt-8 rounded-3xl border border-[#719334]/15 bg-gradient-to-br from-[#f8faf5] to-[#eef4e3] p-6 shadow-[0_8px_32px_rgba(113,147,52,0.10)] sm:p-8 lg:p-10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] text-white shadow-lg shadow-[#719334]/25">
                  <Bot className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">AI Automation for Construction</h3>
                  <p className="text-sm leading-6 text-slate-600 sm:text-base">AI is most useful when connected to a defined business process.</p>
                </div>
              </div>
              <span className="inline-flex self-start rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529] shadow-sm ring-1 ring-[#719334]/15 sm:self-center">
                Examples:
              </span>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#719334]/15">
              {aiSolutions.map(({ title, intro, items, Icon }) => (
                <div key={title} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                  <Icon className="h-5 w-5 text-[#719334]" />
                  <h4 className="mt-3 text-base font-semibold text-slate-900">{title}</h4>
                  <p className="mt-2 text-[13px] leading-6 text-slate-600 sm:text-sm">{intro}</p>
                  {items.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] leading-5 text-slate-700 sm:text-sm">
                          <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#719334]" strokeWidth={3} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= Keep, Connect or Replace ======================= */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-10">
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8">
              <SectionIntro label="Keep, Connect or Replace?" title="Improve Existing Systems Before Replacing Everything">
                <p>Many construction businesses already use software that works.</p>
                <p className="font-semibold text-slate-900">The problem is often the processes between systems.</p>
              </SectionIntro>
              <motion.p
                variants={fadeInUp}
                {...inView}
                className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529]"
              >
                Before recommending replacement, Zynex evaluates:
                <ArrowRight className="hidden h-4 w-4 flex-shrink-0 lg:block" aria-hidden="true" />
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} {...inView} className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:auto-rows-fr sm:grid-cols-2">
              {keepConnect.map(({ title, text, Icon }, i) => {
                const replace = i === 3;
                const borders = ['border-b sm:border-r', 'border-b', 'border-b sm:border-b-0 sm:border-r', ''][i];
                return (
                  <div key={title} className={`flex flex-col justify-center border-slate-100 p-6 sm:p-8 ${borders} ${replace ? 'bg-amber-50/60' : ''}`}>
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
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{text}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ Use Cases ============================ */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionIntro label="Construction ERP, CRM and AI Use Cases" title="Examples of Operational Improvements" />

          <motion.div variants={fadeInUp} {...inView} className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
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

      {/* ======================= Measuring the Business Impact ======================= */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col">
              <SectionIntro label="Measuring the Business Impact" title="Focus on Operational Improvement, Not Technology Adoption">
                <p>The success of automation is not measured by how many tools are implemented.</p>
                <p className="font-semibold text-slate-900">It is measured by business outcomes.</p>
              </SectionIntro>

              <motion.div
                variants={fadeInUp}
                {...inView}
                className="mt-8 flex flex-1 flex-col justify-center rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_16px_rgba(15,23,42,0.05)] sm:p-6"
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
                    Reduced Administrative Hours
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
                Depending on the workflow, Zynex can measure:
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
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch xl:gap-16">
            <div>
              <SectionIntro label="Why Zynex Technologies" title="We Start With the Business Problem, Not the Software">
                <p>Construction businesses do not need another technology vendor adding another platform.</p>
                <p>They need someone who understands where operational friction exists and can design a practical improvement.</p>
              </SectionIntro>

              <motion.div variants={fadeInUp} {...inView} className="mt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Zynex helps construction companies:</p>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {zynexHelps.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} {...inView} className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf5] p-6 sm:p-8">
              <p className="text-center text-sm leading-7 text-slate-600 sm:text-base">Our technology ecosystem includes platforms such as:</p>
              <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
                {platforms.map((p) => (
                  <li key={p} className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-800 shadow-sm ring-1 ring-slate-200 sm:text-base">
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-center text-sm font-medium text-slate-700 sm:text-base">These platforms are delivery options, not the starting point.</p>
              <div className="my-4 flex justify-center" aria-hidden="true">
                <span className="h-8 w-px bg-[#719334]/50" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#719334] to-[#5a7529] p-6 text-center text-white shadow-lg shadow-[#719334]/25">
                <Sparkles className="mx-auto mb-3 h-6 w-6 text-yellow-300" />
                <p className="font-heading text-lg font-bold sm:text-xl">The starting point is understanding your business.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================ FAQ ================================ */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div>
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
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen ? 'border-[#719334]/30 shadow-[0_8px_28px_rgba(113,147,52,0.12)]' : 'border-slate-100 hover:border-[#719334]/20'
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
          <h2 className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl">Improve Construction Operations With a Workflow Review</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-white sm:text-xl">
            Your construction business does not need more disconnected tools. <span className="text-yellow-300">It needs better-connected processes.</span>
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90">
            Zynex Technologies helps Australian construction companies identify operational friction, improve workflow visibility and implement the right combination of automation, AI, integration and ERP.
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
        </div>
      </section>

      <RelatedIndustryPages currentSlug="construction-erp-crm-ai" />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default ConstructionErpCrmAiAutomationAustralia;

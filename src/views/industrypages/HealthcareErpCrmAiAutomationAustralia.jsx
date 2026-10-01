'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Plus,
  Stethoscope,
  Smile,
  Activity,
  HeartPulse,
  Microscope,
  Network,
  Hospital,
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
  Inbox,
  Phone,
  Globe,
  Mail,
  MessageCircle,
  CalendarCheck,
  ClipboardList,
  Receipt,
  UserPlus,
  Bell,
  Package,
  Database,
  Wallet,
  FileStack,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedIndustryPages from '../../components/RelatedIndustryPages';
import { useSeo } from '../../hooks/useSeo';

const heroImage = '/construction-erp-crm-ai/healthcare-erp-crm-ai-hero.webp';

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

const organisationTypes = [
  { label: 'GP and medical clinics', Icon: Stethoscope },
  { label: 'Dental practices', Icon: Smile },
  { label: 'Physiotherapy clinics', Icon: Activity },
  { label: 'Allied health practices', Icon: HeartPulse },
  { label: 'Specialist clinics', Icon: Microscope },
  { label: 'Multi-location healthcare groups', Icon: Network },
  { label: 'Healthcare service providers', Icon: Hospital },
];

const problems = [
  {
    title: 'Too Much Time Spent on Administrative Tasks',
    before: ['Clinic teams often manage:'],
    visual: 'iconList',
    items: [
      { label: 'Patient enquiries', Icon: Inbox },
      { label: 'Appointment communication', Icon: CalendarCheck },
      { label: 'Documentation', Icon: FileText },
      { label: 'Referrals', Icon: ClipboardList },
      { label: 'Follow-ups', Icon: RefreshCw },
      { label: 'Billing processes', Icon: Receipt },
      { label: 'Internal coordination', Icon: Users },
    ],
    after: ['When these activities depend heavily on manual effort, staff capacity becomes limited.'],
  },
  {
    title: 'Patient Enquiries Are Difficult to Manage Consistently',
    before: ['New patient enquiries can arrive through:'],
    visual: 'channels',
    items: [
      { label: 'Phone calls', Icon: Phone },
      { label: 'Website forms', Icon: Globe },
      { label: 'Emails', Icon: Mail },
      { label: 'Online channels', Icon: MessageCircle },
    ],
    after: [
      'Without connected processes, enquiries may require manual recording, follow-up and routing.',
      'This can create delays and missed opportunities.',
    ],
  },
  {
    title: 'Referral and Document Workflows Create Manual Processing',
    before: ['Healthcare organisations handle large volumes of documents:'],
    visual: 'documents',
    items: ['Referral forms', 'Patient information', 'Insurance documents', 'Administrative forms', 'Reports'],
    after: ['Teams often spend significant time reading, entering and transferring information between systems.'],
  },
  {
    title: 'Patient Communication Requires Repetitive Work',
    before: ['Healthcare teams regularly manage:'],
    visual: 'messages',
    items: ['Appointment reminders', 'Follow-ups', 'General questions', 'Confirmation messages', 'Administrative updates'],
    after: ['These repetitive communication tasks can create additional pressure on already busy teams.'],
  },
  {
    title: 'Operational Information Is Spread Across Different Systems',
    before: ['Many clinics use separate tools for:'],
    visual: 'systems',
    items: [
      { label: 'Patient management', Icon: Users },
      { label: 'Accounting', Icon: Wallet },
      { label: 'Inventory', Icon: Package },
      { label: 'Reporting', Icon: BarChart3 },
      { label: 'Communication', Icon: MessageSquare },
      { label: 'Internal processes', Icon: Workflow },
    ],
    after: ['The problem is not necessarily the software itself.', 'The challenge is the process between systems.'],
  },
  {
    title: 'Management Reporting Takes Too Long',
    before: ['Clinic owners and managers need visibility into:'],
    visual: 'visibility',
    items: ['Revenue', 'Operational performance', 'Patient activity', 'Inventory', 'Costs', 'Staff workload'],
    after: ['But when information is stored in multiple places, reporting becomes a manual exercise.'],
  },
];

const approachSteps = [
  {
    title: '1. Understand Your Current Workflow',
    intro: 'We review how information moves through your clinic.',
    label: 'Examples:',
    items: ['Patient enquiry', 'Appointment process', 'Referral handling', 'Administration', 'Billing', 'Inventory management', 'Reporting'],
    Icon: Search,
  },
  {
    title: '2. Identify Operational Friction',
    intro: 'We identify where unnecessary time and effort are being spent.',
    label: 'Common examples:',
    items: ['Duplicate data entry', 'Manual document processing', 'Repeated communication', 'Spreadsheet dependency', 'Reporting delays', 'Disconnected applications'],
    Icon: AlertTriangle,
  },
  {
    title: '3. Measure the Impact',
    intro: 'We look at measurable areas such as:',
    items: ['Administrative hours', 'Response times', 'Processing delays', 'Manual workload', 'Reporting effort'],
    Icon: Gauge,
  },
  {
    title: '4. Design the Right Improvement',
    intro: 'Depending on the problem, the solution may involve:',
    items: ['Workflow automation', 'Software integration', 'ERP implementation', 'CRM optimisation', 'AI-assisted processes'],
    Icon: Lightbulb,
  },
  {
    title: '5. Implement and Measure',
    intro: 'After implementation, we evaluate whether the changes improve operational performance.',
    items: [],
    Icon: Target,
  },
];

const opportunities = [
  {
    title: 'Patient Enquiry Automation',
    Icon: UserPlus,
    intro: 'Healthcare organisations receive enquiries from multiple channels.',
    label: 'A connected workflow can help:',
    items: ['Capture enquiries consistently', 'Organise patient information', 'Route enquiries correctly', 'Track follow-ups'],
    outro: 'AI can assist with classification, information extraction and communication support.',
  },
  {
    title: 'Referral and Document Processing',
    Icon: FileStack,
    intro: 'Healthcare teams process many documents every day.',
    label: 'Automation opportunities include:',
    items: ['Extracting information from forms', 'Categorising documents', 'Routing information internally', 'Reducing repeated manual entry'],
    outro: 'AI can support document-heavy workflows while keeping appropriate review processes in place.',
  },
  {
    title: 'Appointment Communication Workflows',
    Icon: Bell,
    intro: 'Automation can support administrative communication such as:',
    items: ['Appointment confirmations', 'Reminder workflows', 'Follow-up messages', 'Common enquiry responses'],
    outro: 'This allows staff to spend more time on patient-facing activities.',
  },
  {
    title: 'Healthcare Procurement and Inventory Management',
    Icon: Package,
    intro: 'Healthcare organisations need visibility into operational resources.',
    label: 'Connected systems can improve:',
    items: ['Supplier management', 'Purchase approvals', 'Inventory tracking', 'Stock visibility', 'Reporting'],
  },
  {
    title: 'Reporting and Operational Visibility',
    Icon: LayoutDashboard,
    intro: 'Management teams need accurate information without manually combining data from multiple systems.',
    label: 'Connected reporting can provide visibility into:',
    items: ['Revenue', 'Expenses', 'Patient activity', 'Inventory', 'Operational performance'],
    outro: 'AI can assist by creating summaries and highlighting information requiring attention.',
  },
];

const erpItems = ['Finance', 'Purchasing', 'Suppliers', 'Inventory', 'Expenses', 'Reporting', 'Internal workflows'];
const crmItems = [
  'New enquiries',
  'Communication history',
  'Referral relationships',
  'Follow-ups',
  'Service enquiries',
  'Marketing workflows',
  'Patient engagement processes',
];

const aiSolutions = [
  { title: 'AI Document Processing', intro: 'Support workflows involving:', items: ['Referral documents', 'Forms', 'Invoices', 'Administrative paperwork'], Icon: FileText },
  { title: 'AI Communication Assistance', intro: 'Support teams with:', items: ['Enquiry classification', 'Message summaries', 'Response assistance', 'Information routing'], Icon: MessageSquare },
  { title: 'AI Knowledge Assistants', intro: 'Help employees access approved internal information such as:', items: ['Policies', 'Procedures', 'Internal documentation'], Icon: BookOpen },
  { title: 'AI Reporting Assistance', intro: 'Help managers understand operational information through:', items: ['Summaries', 'Trend identification', 'Exception alerts'], Icon: BarChart3 },
];

const keepConnect = [
  { title: 'Keep', text: 'Systems that already support important processes.', Icon: ShieldCheck },
  {
    title: 'Connect',
    text: 'Applications where information needs to move between teams.',
    label: 'Examples:',
    items: ['Practice systems', 'Accounting platforms', 'CRM', 'ERP', 'Communication tools'],
    Icon: Link2,
  },
  { title: 'Improve', text: 'Processes causing:', items: ['Manual work', 'Delays', 'Duplicate entry', 'Limited visibility'], Icon: RefreshCw },
  { title: 'Replace', text: 'Only systems that create significant operational limitations.', Icon: Layers },
];

const useCases = [
  ['Patient enquiries managed manually', 'CRM-based enquiry management'],
  ['Referral documents require manual entry', 'AI-assisted document processing'],
  ['Multiple communication channels', 'Connected communication workflows'],
  ['Inventory managed separately', 'ERP inventory management'],
  ['Manual reporting', 'Connected dashboards'],
  ['Repetitive administration', 'Workflow automation'],
  ['Disconnected finance and operations', 'ERP integration'],
];

const impactMetrics = [
  { title: 'Reduced Administrative Work', text: 'How much staff time is saved from repetitive tasks.', Icon: Clock },
  { title: 'Faster Processing', label: 'Examples:', items: ['Referral processing', 'Document handling', 'Internal approvals', 'Reporting'], Icon: Timer },
  { title: 'Improved Visibility', label: 'Better access to:', items: ['Operational information', 'Financial data', 'Resource information'], Icon: Eye },
  { title: 'Fewer Manual Errors', text: 'Reducing duplicate entry and information gaps.', Icon: CircleCheck },
  { title: 'Better Staff Capacity', text: 'Helping teams spend more time on patient-focused activities.', Icon: Users },
];

const zynexHelps = [
  'Understand operational challenges',
  'Identify workflow improvements',
  'Connect existing systems',
  'Automate repetitive processes',
  'Implement ERP and CRM solutions',
  'Apply AI where it creates practical value',
];

const platforms = ['SAP', 'Odoo', 'ERPNext', 'Zoho', 'Salesforce'];

const faqs = [
  {
    question: 'Can AI reduce administrative workload in healthcare clinics?',
    answer: [
      'Yes. AI can support administrative workflows such as document processing, enquiry classification, communication assistance and information retrieval.',
      'The purpose is to reduce repetitive work, not replace clinical judgement.',
    ],
  },
  {
    question: 'Do healthcare clinics need to replace existing software?',
    answer: [
      'Not necessarily.',
      'Many healthcare organisations already have systems that work. Integration and workflow improvements may solve problems without replacing every application.',
    ],
  },
  {
    question: 'What is ERP for healthcare organisations?',
    answer: [
      'Healthcare ERP connects business operations such as finance, procurement, inventory, suppliers and reporting into a connected operational system.',
    ],
  },
  {
    question: 'What is the difference between ERP and healthcare practice software?',
    answer: [
      'Practice software generally manages clinical and appointment-related activities.',
      'ERP focuses on broader business operations that support the organisation.',
      'Both systems can work together depending on requirements.',
    ],
  },
  {
    question: 'How can AI help healthcare administration?',
    answer: ['AI can assist with repetitive information-based workflows such as:'],
    list: ['Document processing', 'Enquiry handling', 'Summaries', 'Classification', 'Internal information retrieval'],
  },
  {
    question: 'Should a healthcare clinic start with ERP, CRM or AI?',
    answer: [
      'It depends on the operational problem.',
      'If the challenge is customer communication and enquiries, CRM may help.',
      'If the challenge is finance, inventory and operations, ERP may be more relevant.',
      'If systems already work but staff spend too much time on repetitive tasks, AI automation may help.',
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

  if (type === 'channels') {
    return (
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[minmax(0,1fr)_90px_150px]">
        <ul className="space-y-2">
          {items.map(({ label, Icon }) => (
            <li key={label} className="flex h-[42px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800">
              <Icon className="h-4 w-4 text-[#719334]" />
              {label}
            </li>
          ))}
        </ul>
        <svg viewBox="0 0 90 192" className="hidden h-[192px] w-full sm:block" aria-hidden="true">
          {[21, 71, 121, 171].map((y) => (
            <path key={y} d={`M0 ${y} C 45 ${y}, 45 96, 90 96`} fill="none" stroke="#f59e0b" strokeOpacity="0.55" strokeWidth="1.75" strokeDasharray="5 4" />
          ))}
        </svg>
        <div className="hidden rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-4 text-center sm:block">
          <Clock className="mx-auto h-6 w-6 text-amber-500" />
          <div className="mx-auto mt-3 space-y-1.5" aria-hidden="true">
            <span className="mx-auto block h-1.5 w-16 rounded-full bg-amber-200" />
            <span className="mx-auto block h-1.5 w-12 rounded-full bg-amber-200" />
            <span className="mx-auto block h-1.5 w-14 rounded-full bg-amber-200" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'documents') {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {items.map((item, i) => (
          <div key={item} className="relative rounded-xl border border-slate-100 bg-[#f8faf5] p-4 pt-5">
            <span aria-hidden="true" className="absolute right-0 top-0 h-4 w-4 rounded-bl-lg bg-[#dfe9cc]" />
            <FileText className="h-6 w-6 text-[#719334]" />
            <div className="mt-3 space-y-1.5" aria-hidden="true">
              <span className="block h-1 w-full rounded-full bg-slate-200" />
              <span className="block h-1 rounded-full bg-slate-200" style={{ width: `${60 + (i % 3) * 12}%` }} />
            </div>
            <p className="mt-3 text-[13px] font-semibold leading-snug text-slate-900">{item}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'messages') {
    return (
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={item} className={`flex ${i % 2 ? 'justify-end' : 'justify-start'}`}>
            <span
              className={`inline-flex items-center gap-2.5 rounded-2xl px-4 py-2.5 text-sm font-medium sm:text-base ${
                i % 2 ? 'rounded-br-md bg-[#719334] text-white' : 'rounded-bl-md border border-slate-100 bg-[#f8faf5] text-slate-800'
              }`}
            >
              <MessageCircle className={`h-4 w-4 flex-shrink-0 ${i % 2 ? 'text-yellow-300' : 'text-[#719334]'}`} />
              {item}
            </span>
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

  if (type === 'visibility') {
    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((item, i) => (
          <div key={item} className="rounded-xl border border-slate-100 bg-[#f8faf5] p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">{item}</span>
              <Eye className="h-4 w-4 text-slate-300" />
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
              <div className="h-full rounded-full bg-slate-300" style={{ width: `${25 + ((i * 17) % 40)}%` }} />
            </div>
          </div>
        ))}
      </div>
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

const HealthcareErpCrmAiAutomationAustralia = () => {
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
    title: 'Healthcare ERP, CRM & AI Automation Solutions Australia | Zynex Technologies',
    description:
      'Implement ERP, CRM and AI automation solutions for healthcare clinics in Australia. Zynex helps connect workflows, improve reporting and reduce administrative workload.',
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
                Healthcare Workflow Automation, ERP &amp; AI Solutions for Australian Clinics
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#5a7529] sm:text-xl">
                Reduce Administrative Work, Connect Healthcare Operations and Improve Visibility Across Your Clinic
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                <strong className="font-semibold text-slate-900">Healthcare organisations do not usually struggle because they lack technology.</strong>{' '}
                The bigger challenge is that patient enquiries, administration, billing, inventory, reporting, communication and internal processes often operate across separate systems.
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
                alt="Healthcare ERP, CRM and AI automation for Australian clinics"
                className="relative aspect-[5/4] h-auto w-full rounded-2xl object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-slate-200"
              />
            </motion.div>
          </div>

          <div className="mt-14 grid gap-6 border-t border-slate-200 pt-10 md:grid-cols-3 md:gap-8">
            {[
              {
                Icon: Layers,
                text: 'As clinics grow, disconnected workflows create more manual work for staff and make it harder for management teams to understand what is happening across the business.',
              },
              {
                Icon: Workflow,
                text: 'Zynex Technologies helps Australian healthcare organisations identify operational bottlenecks, improve disconnected processes and implement the right combination of workflow automation, integrations, ERP and AI solutions.',
              },
              {
                Icon: Search,
                text: 'We start by understanding how your clinic operates today, identify where time and resources are being lost, and design practical improvements around your existing systems.',
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

      {/* ====================== Healthcare Organisations We Help ====================== */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col">
              <SectionIntro label="Healthcare Organisations We Help" title="Operational Solutions Built Around the Reality of Running a Healthcare Practice">
                <p>Healthcare businesses have different operational requirements depending on their services, size and patient volume.</p>
              </SectionIntro>
              <motion.div
                variants={fadeInUp}
                {...inView}
                className="relative mt-8 flex flex-1 flex-col justify-center overflow-hidden rounded-2xl border border-[#719334]/15 bg-[#f8faf5] p-6 pl-7"
              >
                <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#719334] to-[#a3c46a]" />
                <p className="text-base leading-8 text-slate-600">The focus is not replacing every system your clinic already uses.</p>
                <p className="mt-2 text-base font-semibold leading-8 text-slate-900">
                  The focus is improving how information moves between people, processes and technology.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} {...inView} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529]">Zynex works with:</p>
              <ul className="mt-4 flex flex-1 flex-col justify-between">
                {organisationTypes.map(({ label, Icon }, i) => (
                  <li key={label} className={`group flex items-center gap-4 py-3.5 ${i < organisationTypes.length - 1 ? 'border-b border-slate-100' : ''}`}>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef4e3] text-[#719334] transition-colors duration-300 group-hover:bg-[#719334] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-slate-800 sm:text-base">{label}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#719334]" aria-hidden="true" />
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
          <SectionIntro label="Problems We Solve for Healthcare Clinics" title="Where Healthcare Operations Lose Time and Efficiency">
            <p>Healthcare teams spend a significant amount of time managing tasks outside direct patient care.</p>
            <p>Many operational challenges come from disconnected workflows rather than a lack of effort from staff.</p>
          </SectionIntro>

          <motion.div variants={fadeInUp} {...inView} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-8">
            <div className="flex min-w-0 flex-col">
              <div role="tablist" aria-label="Problems We Solve for Healthcare Clinics" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-1 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0 lg:pb-0">
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
          <SectionIntro label="How Zynex Improves Healthcare Operations" title="Understand the Workflow Before Introducing Technology">
            <p>Zynex does not begin with an AI tool or software recommendation.</p>
            <p>We first understand how your healthcare organisation currently operates.</p>
          </SectionIntro>
          <motion.div variants={fadeInUp} {...inView}>
            <SmallLabel className="mt-10">Our process:</SmallLabel>
          </motion.div>

          {/* Desktop timeline */}
          <div className="relative mt-10 hidden lg:block">
            <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-7 h-0.5 bg-gradient-to-r from-[#719334]/20 via-[#719334]/50 to-[#719334]/20" />
            <div className="grid grid-cols-5 gap-6">
              {approachSteps.map(({ title, intro, label, items, Icon }) => (
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="relative mt-8 grid gap-8 lg:hidden">
            <div aria-hidden="true" className="absolute bottom-6 left-[1.35rem] top-6 w-0.5 bg-[#719334]/25" />
            {approachSteps.map(({ title, intro, label, items, Icon }) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== Workflow Automation Opportunities =================== */}
      <section className="border-t border-slate-100 bg-[#f8faf5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <SectionIntro label="Healthcare Workflow Automation Opportunities" title="Improve Processes That Create Administrative Pressure" />

          <motion.div variants={fadeInUp} {...inView} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
            <div className="flex min-w-0 flex-col lg:col-span-4">
              <div role="tablist" aria-label="Healthcare Workflow Automation Opportunities" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-1 lg:flex-col lg:gap-3 lg:px-0 lg:pb-0">
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
              <SectionIntro small label="ERP Solutions for Healthcare Organisations" title="Connect the Business Operations Behind Patient Care">
                <p>Healthcare ERP focuses on the operational side of running a healthcare organisation.</p>
              </SectionIntro>
              <p className="mt-5 text-sm font-semibold text-slate-500">It can connect:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {erpItems.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-2xl border-l-4 border-[#719334] bg-[#f8faf5] p-5">
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">An ERP system does not replace clinical decision-making.</p>
                  <p className="mt-1 text-sm font-semibold leading-7 text-slate-900 sm:text-base">It improves the business processes that support healthcare delivery.</p>
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
              <SectionIntro small label="CRM Solutions for Healthcare Clinics" title="Manage Patient Relationships and Communication More Effectively">
                <p>CRM helps healthcare organisations manage relationship-based workflows outside clinical records.</p>
              </SectionIntro>
              <p className="mt-5 text-sm font-semibold text-slate-500">This can include:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {crmItems.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-2xl border-l-4 border-[#719334] bg-[#f8faf5] p-5">
                  <p className="text-sm font-semibold leading-7 text-slate-900 sm:text-base">CRM provides visibility into the journey before and around patient interactions.</p>
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
            <SectionIntro label="AI Automation for Healthcare Operations" title="Use AI Where It Reduces Repetitive Administrative Work">
              <p>AI is most effective when connected to a defined workflow.</p>
            </SectionIntro>
            <span className="inline-flex self-start rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529] shadow-sm ring-1 ring-[#719334]/15 lg:self-end">
              Examples include:
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
              <SectionIntro label="Keep, Connect or Replace?" title="Improve Healthcare Systems Without Unnecessary Disruption">
                <p>Healthcare organisations often already have systems that work.</p>
              </SectionIntro>

              <motion.div variants={fadeInUp} {...inView} className="mt-auto space-y-3 pt-8">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold text-slate-500">The first question should not be:</p>
                  <p className="mt-1 text-base font-semibold text-slate-400">&quot;Which software should we replace?&quot;</p>
                </div>
                <div className="rounded-2xl border border-[#719334]/30 bg-white p-4 shadow-[0_8px_24px_rgba(113,147,52,0.12)]">
                  <p className="text-xs font-semibold text-[#5a7529]">The first question should be:</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">&quot;Where is the current workflow creating unnecessary effort?&quot;</p>
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
            <h2 className="max-w-4xl text-3xl font-heading font-bold leading-tight text-slate-900 sm:text-4xl">Healthcare ERP, CRM and AI Use Cases</h2>
            <HeadingBar />
          </motion.div>

          <motion.div variants={fadeInUp} {...inView} className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#f1f5ec]">
                  <th scope="col" className="w-1/2 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:px-8">
                    Healthcare Challenge
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
              <SectionIntro label="Measuring Healthcare Operational Improvement" title="Focus on Outcomes, Not Technology">
                <p>The success of automation is measured by improvements in daily operations.</p>
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
                    Reduced Administrative Work
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-1 w-5 rounded-full bg-[#719334]" />
                    Better Staff Capacity
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
              <SectionIntro label="Why Zynex Technologies" title="We Understand the Workflow Before Applying Technology">
                <p>Healthcare organisations do not need more disconnected tools.</p>
                <p className="font-semibold text-slate-900">They need better-connected operations.</p>
              </SectionIntro>

              <motion.div variants={fadeInUp} {...inView} className="mt-8">
                <SmallLabel>Zynex helps healthcare businesses:</SmallLabel>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {zynexHelps.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} {...inView} className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-center text-sm leading-7 text-slate-600 sm:text-base">Our technology ecosystem includes platforms such as:</p>
              <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
                {platforms.map((p) => (
                  <li key={p} className="rounded-xl bg-[#f8faf5] px-5 py-2.5 text-sm font-bold text-slate-800 ring-1 ring-slate-200 sm:text-base">
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-center text-sm font-medium text-slate-700 sm:text-base">These platforms are delivery options based on business requirements.</p>
              <div className="my-4 flex justify-center" aria-hidden="true">
                <span className="h-8 w-px bg-[#719334]/50" />
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#719334] to-[#5a7529] p-6 text-center text-white shadow-lg shadow-[#719334]/25">
                <Database className="mx-auto mb-3 h-6 w-6 text-yellow-300" />
                <p className="font-heading text-lg font-bold sm:text-xl">The starting point is always the operational problem.</p>
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
          <h2 className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl">Improve Healthcare Operations With a Workflow Review</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-white sm:text-xl">
            Healthcare teams should spend more time supporting patients and less time managing disconnected processes.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90">
            Zynex Technologies helps Australian healthcare organisations identify operational friction and improve workflows through the right combination of automation, integrations, ERP and AI.
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
            Understand where your clinic is losing time and identify practical opportunities to improve operations.
          </p>
        </div>
      </section>

      <RelatedIndustryPages currentSlug="healthcare-erp-crm-ai" />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default HealthcareErpCrmAiAutomationAustralia;

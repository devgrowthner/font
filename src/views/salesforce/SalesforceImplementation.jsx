'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Database,
  Gauge,
  GitBranch,
  Layers,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import { useSeo } from '../../hooks/useSeo';

const green = '#719334';
const darkGreen = '#5a7529';

const builtFor = ['Sales teams', 'Support & service teams', 'Operations leaders', 'Growing SMEs & enterprises'];

const problems = [
  ['Low', 'Adoption when reps are forced into workflows that do not match how they actually sell.'],
  ['Manual', 'Data entry eats hours every week that should go toward customer conversations.'],
  ['Siloed', 'Records sit disconnected from email, finance and support tools, so nothing updates automatically.'],
  ['Stale', 'Dashboards get built once at launch and never reflect how the business runs a year later.'],
];

const modules = [
  ['Custom Objects & Page Layouts', 'Fields, record types and layouts built around your actual pipeline stages and service tiers, not generic templates.', Layers],
  ['Flow & Process Automation', 'Salesforce Flow builds that handle lead routing, approvals, escalations and reminders without manual triggers.', Workflow],
  ['AI Agent Integration', 'AI agents inside Salesforce that draft follow-up emails, summarise call notes and surface deals going quiet.', Bot],
  ['Data Migration & Cleanup', 'Clean extraction, de-duplication and mapping of records from spreadsheets or a legacy CRM into Salesforce.', Database],
  ['Third-Party Integrations', 'Salesforce connected to email, calendars, finance systems, support desks and marketing tools via API.', GitBranch],
  ['Reporting & Dashboards', 'Live dashboards built around the numbers your leadership team actually reviews, updated automatically.', BarChart3],
];

const deployed = [
  'Custom objects, fields and record types mapped to your sales or service process',
  'Salesforce Flow automations for routing, approvals and reminders',
  'AI agents for follow-up drafting, call summaries and deal-risk flags',
  'Data migration from spreadsheets or your existing CRM',
  'Integrations with email, finance, support and marketing platforms',
  'Reporting dashboards for leadership and frontline teams',
  'Role-based permission sets and security review',
  'Admin documentation and team training on handover',
];

const kpis = [
  ['KPI 01', 'Time to first value', 'Days from kickoff to a usable, working build your team can log into.'],
  ['KPI 02', 'Manual data entry reduced', 'Fields and updates now handled automatically instead of by hand.'],
  ['KPI 03', 'User adoption rate', 'Share of the team actively logging activity inside Salesforce weekly.'],
  ['KPI 04', 'Lead response time', 'How quickly new leads are routed, assigned and followed up.'],
  ['KPI 05', 'Data accuracy', 'Duplicate and incomplete records reduced after migration and cleanup.'],
  ['KPI 06', 'Reporting turnaround', 'Time from “we need a number” to a live dashboard answer.'],
];

const comparisons = [
  ['Configuration to spec', 'Yes', 'Yes'],
  ['AI agents built into workflows', 'Rarely', 'Standard'],
  ['Fixed-price scoping', 'Sometimes', 'Yes'],
  ['Custom integration development', 'Add-on cost', 'Included in scope'],
  ['Ongoing iteration after launch', 'Separate contract', 'Managed retainer option'],
];

const faqs = [
  ['How much does Salesforce implementation cost in Australia?', 'Cost depends on the number of clouds, objects, integrations and users involved. Most Zynex implementation projects are scoped as fixed-price engagements after a discovery call, so you know the number before work starts, not after.'],
  ['How long does Salesforce customization take?', 'A focused customization project, such as custom objects, flows and a dashboard rebuild, typically takes two to six weeks. Full implementations with data migration and integrations run longer, but Zynex phases delivery so you get working functionality early.'],
  ['Can Zynex migrate data from our old CRM into Salesforce?', 'Yes. Zynex handles data extraction, cleansing, de-duplication and mapping from spreadsheets, legacy CRMs or other platforms into Salesforce, with validation steps built in so records land correctly the first time.'],
  ['Do you work with Sales Cloud, Service Cloud and Experience Cloud?', 'Zynex builds across Sales Cloud, Service Cloud, Experience Cloud and Salesforce Flow. The right combination depends on whether your priority is pipeline, support, self-service, or all three, which we work out during discovery.'],
  ['What makes Zynex different from a standard Salesforce partner?', 'Most partners configure Salesforce to spec and leave. Zynex layers AI agents and automation on top, so the system actually reduces manual data entry and follow-up work, not just stores records in a different place.'],
  ['Can you integrate Salesforce with the other tools we already use?', 'Yes. Zynex connects Salesforce to email, calendars, finance systems, support desks and marketing tools through native connectors or custom API work, so data moves automatically instead of being re-entered by hand.'],
  ['Do we need an in-house Salesforce admin after Zynex finishes?', 'Not necessarily. Zynex documents every build and can hand over full admin training, or stay on for ongoing support and iteration through a managed retainer, whichever fits your team’s capacity.'],
];

function Label({ children }) {
  return <p className="mb-5 inline-flex rounded-full border border-[#719334]/20 bg-[#eef4e3] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a7529]">{children}</p>;
}

export default function SalesforceImplementation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) };

  useSeo({ title: 'Salesforce Implementation & Customization Services Australia | Zynex Technologies', description: 'Zynex builds and customizes Salesforce for Australian businesses, with AI-led automation baked in. Get a working system in weeks, not months. Book a call.' });

  return (
    <div className="min-h-screen bg-[#f8faf5] text-slate-900">
      <Schema schema={faqSchema} />
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fcfbf7] to-[#f1f5ec] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div aria-hidden="true" className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(113,147,52,.12) 1px, transparent 1px),linear-gradient(90deg,rgba(113,147,52,.12) 1px,transparent 1px)', backgroundSize: '72px 72px', maskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, black 35%, transparent 100%)' }} />
        <div className="relative container mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div>
            <Label>Salesforce implementation <span className="mx-2 opacity-50">•</span> Australia</Label>
            <h1 className="max-w-3xl text-4xl font-heading font-bold leading-tight sm:text-5xl lg:text-6xl">Salesforce Implementation &amp; <span className="text-[#719334]">Customization</span> Services in Australia</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Zynex builds and configures Salesforce around how your team actually sells and supports customers, then layers in automation so reps spend less time on data entry and more time on the pipeline.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#719334] to-[#5a7529] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#719334]/20">Book a Discovery Call <ArrowRight className="h-4 w-4" /></button>
              <Link href="#how-zynex-works" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-700">See How Zynex Works</Link>
            </div>
          </div>
          <div className="relative rounded-3xl border border-[#719334]/20 bg-white p-6 shadow-[0_24px_70px_rgba(113,147,52,.16)] sm:p-8">
            <div className="rounded-2xl bg-[#eef4e3] p-6">
              <Activity className="h-12 w-12 text-[#719334]" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[.2em] text-[#5a7529]">AI-led Salesforce</p>
              <p className="mt-3 text-2xl font-heading font-bold leading-tight">A CRM that keeps itself current.</p>
              <div className="mt-7 space-y-3">{['Smarter lead routing', 'Automated follow-ups', 'Live decision-ready dashboards'].map((item) => <p key={item} className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-semibold text-slate-700"><Check className="h-5 w-5 rounded-md bg-[#719334] p-1 text-white" />{item}</p>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8"><div className="container mx-auto max-w-7xl"><Label>Built for</Label><h2 className="max-w-3xl text-3xl font-heading font-bold sm:text-4xl">Built for teams outgrowing spreadsheets and stock CRM setups</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{builtFor.map((item) => <div key={item} className="rounded-2xl border border-slate-100 bg-[#f8faf5] p-6 text-lg font-bold shadow-sm"><Users className="mb-5 h-7 w-7 text-[#719334]" />{item}</div>)}</div></div></section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="container mx-auto max-w-7xl"><Label>The problem</Label><h2 className="text-3xl font-heading font-bold sm:text-4xl">Most Salesforce instances are underused, not under-featured</h2><p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">Zynex sees the same pattern across new clients: Salesforce gets switched on, a handful of default fields get filled in, and the platform ends up doing less than a shared spreadsheet ever could. The issue is rarely the platform. It is the setup.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{problems.map(([title, text]) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-3xl font-heading font-bold text-[#719334]">{title}</p><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="bg-[#19320f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"><div className="container mx-auto max-w-7xl"><Label>The solution</Label><h2 className="max-w-4xl text-3xl font-heading font-bold sm:text-4xl">Zynex is not a box-standard Salesforce setup. It is a system built to reduce admin work.</h2><p className="mt-6 max-w-4xl text-base leading-8 text-white/80">A certified partner can turn on Salesforce and map your fields. Zynex does that, then goes further: custom objects and flows built around your actual sales and service process, AI agents that draft follow-ups and flag at-risk deals, and integrations that keep records current without anyone re-typing data. The result is a CRM your team opens because it is faster than the alternative, not because it is mandatory.</p></div></section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="container mx-auto max-w-7xl"><Label>Feature modules</Label><h2 className="text-3xl font-heading font-bold sm:text-4xl">What Zynex configures inside your Salesforce org</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{modules.map(([title, text, Icon]) => <div key={title} className="rounded-2xl border border-slate-100 bg-[#f8faf5] p-6 transition hover:-translate-y-1 hover:shadow-lg"><Icon className="h-8 w-8 text-[#719334]" /><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="container mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-start"><div><Label>What gets deployed</Label><h2 className="text-3xl font-heading font-bold sm:text-4xl">What Zynex configures and deploys inside your org</h2><div className="mt-8 space-y-3">{deployed.map((item) => <div key={item} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm"><Check className="mt-0.5 h-5 w-5 flex-none rounded-md bg-[#719334] p-1 text-white" /><p className="text-sm leading-6 text-slate-700">{item}</p></div>)}</div></div><div className="rounded-3xl bg-gradient-to-br from-[#eef4e3] to-white p-8 shadow-[0_15px_45px_rgba(113,147,52,.12)]"><ShieldCheck className="h-12 w-12 text-[#719334]" /><h3 className="mt-8 text-2xl font-heading font-bold">Built around your operating model</h3><p className="mt-4 leading-8 text-slate-600">Every build is designed around the way your sales, service and operations teams work today — and the more efficient way they need to work tomorrow.</p></div></div></section>

      <section id="how-zynex-works" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="container mx-auto max-w-7xl"><Label>Measuring impact</Label><h2 className="text-3xl font-heading font-bold sm:text-4xl">How Zynex measures the impact of a Salesforce build</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{kpis.map(([number, title, text]) => <div key={number} className="rounded-2xl border border-slate-100 p-6"><p className="text-xs font-bold tracking-[.2em] text-[#719334]">{number}</p><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="container mx-auto max-w-7xl"><Label>Why Zynex</Label><h2 className="max-w-4xl text-3xl font-heading font-bold sm:text-4xl">Why Australian businesses choose Zynex over a standard Salesforce partner</h2><div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-[#eef4e3] text-[#36551d]"><tr><th className="p-5">Capability</th><th className="p-5">Standard Salesforce Partner</th><th className="p-5">Zynex</th></tr></thead><tbody>{comparisons.map(([capability, standard, zynex]) => <tr key={capability} className="border-t border-slate-100"><td className="p-5 font-semibold">{capability}</td><td className="p-5 text-slate-600">{standard}</td><td className="p-5 font-bold text-[#5a7529]">{zynex}</td></tr>)}</tbody></table></div></div></section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="container mx-auto max-w-4xl"><Label>FAQ</Label><h2 className="text-3xl font-heading font-bold sm:text-4xl">Common questions about Salesforce implementation</h2><div className="mt-10 space-y-4">{faqs.map(([question, answer], index) => <div key={question} className="overflow-hidden rounded-2xl border border-slate-100 bg-[#f8faf5]"><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 p-6 text-left font-bold"><span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[#719334] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="px-6 pb-6 text-sm leading-7 text-slate-600">{answer}</p>}</div>)}</div></div></section>

      <section className="bg-gradient-to-br from-[#719334] to-[#385b19] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"><div className="container mx-auto max-w-4xl text-center"><h2 className="text-3xl font-heading font-bold sm:text-4xl">Ready for a Salesforce setup your team will actually use?</h2><p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">Book a discovery call and Zynex will map your current process, flag the quick wins and scope a fixed-price build.</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><button type="button" onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#5a7529]">Book a Discovery Call <ArrowRight className="h-4 w-4" /></button><Link href="/agentic-ai" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-4 text-sm font-bold">Explore Salesforce AI Agents</Link></div></div></section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}

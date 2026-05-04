'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronDown,
  Inbox,
  Moon,
  FileText,
  Zap,
  BookOpen,
  LayoutDashboard,
} from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import Schema from '../components/Schema';
import { useSeo } from '../hooks/useSeo';

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
    <div className="min-h-screen bg-[#fefdfb]">
      <Schema schema={faqSchema} />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,130,80,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,130,80,0.08),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-6 sm:mb-10">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-[#719334] sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 sm:h-5 sm:w-5" />
              Back
            </button>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <h1 className="mb-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:mb-6 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                The AI Solution for Healthcare Clinics in Australia That Actually Reduces Operational Load
              </h1>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Zynex Technologies builds AI operating systems for Australian clinics. We handle patient enquiries, automate admin workflows, and give your team the tools to work without the constant pressure of being understaffed and overloaded.
              </p>
              <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#719334] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-base"
                  style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}
                >
                  Book a Discovery Call
                </button>
                <Link
                  href="/what-is-zynex"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-base"
                  style={{ borderColor: 'rgba(113, 147, 52, 0.55)', color: brandGreen }}
                >
                  See How Zynex Works
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative h-[260px] overflow-hidden rounded-2xl shadow-xl sm:h-[360px] sm:rounded-3xl lg:h-[440px]"
            >
              <img src={heroImage} alt="" className="h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(113,147,52,0.25), rgba(0,0,0,0.15))' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO THIS IS FOR */}
      <section className="border-y border-gray-100 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10 max-w-3xl sm:mb-14"
          >
            <p className="mb-2 text-sm font-semibold text-[#719334]">Built for Australian healthcare practices</p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Zynex Technologies built its healthcare AI system for the specific operational realities of running a practice in Australia. If your clinic deals with call volume, admin pressure, intake friction, or inconsistent patient follow-up, this was built for you.
            </p>
          </motion.div>
          <h2 className="mb-6 font-heading text-xl font-bold text-foreground sm:text-2xl">Business types</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whoBusinessTypes.map((item) => (
              <li
                key={item}
                className="rounded-2xl border bg-[#fefdfb] px-5 py-4 shadow-sm"
                style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}
              >
                <span className="font-heading font-semibold text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM */}
      <section className="bg-gradient-to-b from-[#f8fafc] to-[#fefdfb] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10 max-w-4xl sm:mb-14"
          >
            <h2 className="mb-4 font-heading text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
              Australian clinics are not failing because of bad staff. They are failing because of operational overload.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The pressure on Australian healthcare practices has moved well beyond missed calls. Staff are stretched across too many tasks, patient expectations have risen, and the admin burden is now heavy enough to push experienced practitioners out the door. RACGP&apos;s 2025 Health of the Nation report makes the scale of this very clear.
            </p>
          </motion.div>

          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border bg-white p-5 shadow-sm"
                style={{ borderColor: 'rgba(113, 147, 52, 0.35)' }}
              >
                <p className="text-sm font-bold leading-relaxed text-foreground sm:text-base">{s.full}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              One in three GPs intend to stop practising within five years. That is not a workforce problem you can recruit your way out of, particularly when Jobs and Skills Australia reports that around 48% of professional occupations are already in shortage, with health professions among the hardest hit.
            </p>
            <p>
              The practical consequence for clinic owners is straightforward. Every hour your trained staff spend managing routine calls, chasing referral documents, re-entering patient data, or handling enquiries that could have been captured automatically is an hour not spent on clinical work. Zynex Technologies built its healthcare AI system specifically to close that gap.
            </p>
            <div
              className="rounded-2xl border-l-4 bg-[#f0fdf4]/50 p-5 sm:p-6"
              style={{ borderLeftColor: brandGreen }}
            >
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                76% of Australian customers say after-hours AI service is the greatest benefit of AI adoption. 63% prefer self-service as a first option before speaking to a person. Australian customer-service benchmarks
              </p>
            </div>
            <p>
              Your patients expect fast, consistent responses. Your team is already at capacity. Zynex sits between those two realities and handles the operational layer so your people can focus on what actually requires them.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT ZYNEX TECHNOLOGIES DELIVERS */}
      <section className="border-y border-gray-100 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10 max-w-4xl sm:mb-12"
          >
            <h2 className="mb-4 font-heading text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
              Zynex is not a single tool. It is a full AI operating system for your clinic.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Zynex Technologies does not sell point solutions. Our healthcare AI system is a coordinated operating model that improves six areas of your clinic&apos;s operation at the same time. Each module connects to the others, which means the impact compounds rather than staying isolated.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map(({ title, description, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 rounded-2xl border bg-[#fefdfb] p-5 sm:p-6"
                style={{ borderColor: 'rgba(113, 147, 52, 0.25)' }}
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'rgba(113, 147, 52, 0.12)', color: brandGreen }}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-base font-bold text-foreground sm:text-lg">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SOLUTION MODULES */}
      <section className="bg-gradient-to-br from-[#f0fdf4]/40 via-[#fefdfb] to-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8 max-w-4xl sm:mb-10"
          >
            <h2 className="mb-4 font-heading text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
              What Zynex Technologies deploys in your clinic
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Zynex configures its healthcare AI system around your clinic&apos;s specific setup, size, and existing tools. Depending on your priorities, deployment includes a combination of the following:
            </p>
          </motion.div>

          <div className="mb-14 max-w-3xl space-y-3 text-base text-foreground sm:text-lg">
            {modules.map((m) => (
              <div key={m} className="leading-relaxed">
                {m}
              </div>
            ))}
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-6 max-w-4xl"
          >
            <h3 className="mb-3 font-heading text-xl font-bold text-foreground sm:text-2xl">
              How Zynex measures the impact
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Zynex Technologies does not present vague AI benefit claims. Before deployment, we establish your clinic&apos;s actual baseline. After deployment, we track the same numbers so you can see what has changed and by how much.
            </p>
          </motion.div>

          <div className="mb-8 max-w-3xl space-y-3 text-base text-foreground sm:text-lg">
            {kpis.map((k) => (
              <div key={k} className="leading-relaxed">
                {k}
              </div>
            ))}
          </div>

          <p className="max-w-4xl text-base leading-relaxed text-foreground sm:text-lg">
            Every outcome is measured against your clinic&apos;s own starting point. That is how Zynex holds itself accountable to results.
          </p>
        </div>
      </section>

      {/* SECTION 6: WHY ZYNEX TECHNOLOGIES */}
      <section className="border-y border-gray-100 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
            Why Australian clinics choose Zynex Technologies over individual AI tools
          </h2>
          <p>
            Most AI tools solve one problem in isolation. A phone bot handles inbound calls. An OCR tool reads forms. A CRM sends follow-up messages. You end up managing five separate systems that do not communicate with each other, still require a person to oversee them, and create new admin work while trying to reduce the old kind.
          </p>
          <p>
            Zynex Technologies takes a different approach. Our healthcare AI system combines voice AI, workflow automation, document processing, internal knowledge, analytics, and governance into a single operating model. The modules are designed to work together, which means you get compounding gains across enquiry capture, intake speed, admin hours, and staff efficiency, rather than improvement in one area and no change in another.
          </p>
          <p>
            Zynex also brings governance into the deployment from day one. AI in a healthcare context needs clear access controls, audit trails, and operating boundaries. Zynex builds that in rather than treating it as an afterthought. Clinic owners and practice managers maintain full visibility and control over how the system operates.
          </p>
          <p>
            The result is not just a more efficient clinic. It is a clinic that operates with more consistency, more accountability, and more capacity to handle growth without adding proportional headcount.
          </p>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA BLOCK */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl border border-border/30 bg-white/90 p-8 shadow-lg backdrop-blur-xl lg:p-12"
          >
            <div
              className="absolute left-0 right-0 top-0 h-1"
              style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}
            />
            <div className="text-center">
              <h2 className="mb-6 font-heading text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
                Ready to see what Zynex would look like inside your clinic?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Zynex Technologies starts every engagement with a discovery call. We look at your current setup, identify the biggest operational gaps, and show you exactly where our healthcare AI system would have the most immediate impact. No commitment required.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#719334] to-[#5a7529] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(113,147,52,0.45)] sm:w-auto sm:px-8 sm:text-base"
                >
                  Book a Discovery Call with Zynex
                </button>
                <Link
                  href="/solutions"
                  className="text-sm font-semibold text-[#719334] underline-offset-4 hover:underline sm:text-base"
                >
                  Explore other industries Zynex works with
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-emerald-50/90 to-[#ecfdf5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#719334]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="mb-12 text-center sm:mb-16"
          >
            <p className="mb-2 text-center text-sm text-muted-foreground">Faq</p>
            <h2 className="mb-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">FAQ</h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={fadeInUp}
                className="overflow-hidden rounded-2xl border border-emerald-100/70 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-emerald-200/80 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-[#f0fdf4]/50"
                >
                  <h3 className="pr-8 text-lg font-semibold text-foreground sm:text-xl">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 sm:h-6 sm:w-6 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    style={{ color: brandGreen }}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-emerald-100/50 px-6 pb-6 pt-4 text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs text-muted-foreground sm:px-6">
        Content document prepared by Growthner for Zynex Technologies | Healthcare industry page | Ready for CMS upload or design handoff
      </p>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default AiSolutionHealthcareClinicsAustralia;

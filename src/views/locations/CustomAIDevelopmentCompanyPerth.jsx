'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import RelatedLocationPages from '../../components/RelatedLocationPages';
import { useSeo } from '../../hooks/useSeo';

const bg2 = '/perth.jpeg';

const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } };

const heroStats = [
  { metric: '95%', label: 'Success Rate on Deployed Projects' },
  { metric: '3 to 6 weeks', label: 'Average Time to Deployment' },
  { metric: '3x ROI', label: 'Average Return in Year One' },
  { metric: '24/7', label: 'Post-Launch Support' },
];

const services = [
  { id: '01', title: 'Custom AI Development', description: 'We design and build AI applications tailored to your specific business workflows, data, and goals.' },
  { id: '02', title: 'AI Automation', description: 'We automate repetitive tasks, approval workflows, and customer interactions to free up your team.' },
  { id: '03', title: 'Machine Learning', description: 'Predictive models for classification, forecasting and anomaly detection built on your data.' },
];

const faqs = [
  { question: 'Q. What services do you offer in Perth?', answer: 'A. We provide custom AI development, automation, chatbots, computer vision and feasibility analysis for Perth businesses.' },
  { question: 'Q. How long does deployment take?', answer: 'A. Typical focused projects are delivered in 3 to 6 weeks depending on scope.' },
];

const brandGreen = '#719334';

const CustomAIDevelopmentCompanyPerth = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    }),
    []
  );

  useSeo({
    title: 'Custom AI Development Company in Perth | Zynex Technologies',
    description: 'Custom AI development and automation services for Perth businesses. Feasibility-first approach and rapid deployment.',
  });

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <Schema schema={faqSchema} />

      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5]">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-6 sm:mb-10">
            <button type="button" onClick={() => router.push('/')} className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 font-medium text-sm sm:text-base group hover:text-[#719334]">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-foreground mb-5 sm:mb-6 leading-tight tracking-tight">
                Custom AI Development Company in Perth
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Zynex Technologies delivers custom AI systems and automation for Perth businesses with a feasibility-first approach and fast time-to-value.
              </p>

              <button type="button" onClick={() => setIsModalOpen(true)} className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 sm:px-8 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg w-full sm:w-auto min-h-[48px]" style={{ background: `linear-gradient(to right, ${brandGreen}, ${brandGreen})` }}>
                Book a free discovery call
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <img src={bg2} alt="Perth" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-6">
            {heroStats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="bg-white/85 backdrop-blur-sm border rounded-xl p-4 sm:p-5 text-center" style={{ borderColor: 'rgba(113, 147, 52, 0.45)' }}>
                <div className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#719334] mb-1">{s.metric}</div>
                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">WHAT WE BUILD</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">AI Development Services for Perth Businesses</h2>
            <p className="text-base sm:text-lg text-muted-foreground">From automation tools to production-ready ML systems, we design solutions that deliver measurable outcomes.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {services.map((s) => (
              <div key={s.id} className="rounded-2xl border bg-white p-5 sm:p-6 shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.2)' }}>
                <p className="text-sm font-semibold text-[#719334] mb-2">{s.id}</p>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLocationPages currentSlug="perth" />

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white border rounded-3xl shadow-lg p-8 lg:p-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#719334] mb-3">GET STARTED</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6">Ready to build your AI solution in Perth?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Start with a free discovery call. We will assess feasibility and outline a clear path forward with transparent timelines and pricing.</p>
            <button type="button" onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg" style={{ background: 'linear-gradient(to right, #719334, #5a7529)' }}>Book a free discovery call</button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default CustomAIDevelopmentCompanyPerth;

'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Menu, X } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import Schema from '../components/Schema';
import { useSeo } from '../hooks/useSeo';
import { blogContents } from '../constants/blogData';
import { getIconComponent } from '../utils/iconRenderer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ─── Table of Contents ─────────────────────────────────────────────────────

const TableOfContents = ({ sections, activeSection, onSectionClick, isMobile, onClose }) => {
  const handleSectionClick = (sectionId) => {
    onSectionClick(sectionId);
    // Smooth scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobile) onClose();
  };

  return (
    <>
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <motion.div
        initial={isMobile ? { x: '-100%' } : { opacity: 0, x: -60 }}
        animate={isMobile ? { x: 0 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          fixed lg:sticky top-0 lg:top-32 left-0 h-screen lg:h-auto lg:max-h-[calc(100vh-200px)]
          w-72 lg:w-64 px-6 py-8 bg-white lg:bg-transparent
          overflow-y-auto z-50 lg:z-0 lg:border-r lg:border-gray-200
          rounded-r-2xl lg:rounded-none shadow-xl lg:shadow-none
        `}
      >
        <div className="flex items-center justify-between lg:hidden mb-6">
          <h3 className="font-heading font-bold text-foreground">Table of Contents</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleSectionClick(section.id)}
              className={`
                w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                text-sm font-medium
                ${
                  activeSection === section.id
                    ? 'bg-[#719334]/10 text-[#719334] border-l-4 border-[#719334]'
                    : 'text-muted-foreground hover:bg-gray-50 border-l-4 border-transparent'
                }
              `}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

// ─── Section Components ────────────────────────────────────────────────────

const SummarySection = ({ blogData }) => (
  <section id="summary" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <div className="bg-gradient-to-br from-[#719334]/10 to-[#719334]/5 border-l-4 border-[#719334] rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
          {blogData.summaryTitle || 'Summary'}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {blogData.summaryDescription}
        </p>
      </div>
    </motion.div>
  </section>
);

const IntroductionSection = ({ blogData }) => (
  <section id="introduction" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
        {blogData.introductionTitle || 'Introduction'}
      </h2>
      <div className="prose prose-lg max-w-none">
        {(blogData.introductionDescription || '').split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      {/* introductionBullets */}
      {blogData.introductionBullets?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {blogData.introductionBullets.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
              <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#719334' }}></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  </section>
);

const ServicesSection = ({ blogData }) => (
  <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        {blogData.servicesTitle || 'Services'}
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
        {blogData.servicesDescription}
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {blogData.services?.map((service, index) => (
        <motion.div key={index} variants={fadeInUp} className="group">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#719334]/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.1))', color: '#719334' }}
              >
                <div className="w-6 h-6">
                  {typeof service.icon === 'string' ? getIconComponent(service.icon) : service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const ProcessSection = ({ blogData }) => (
  <section id="process" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        {blogData.processTitle || 'Process'}
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
        {blogData.processDescription}
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="grid sm:grid-cols-2 gap-6"
    >
      {blogData.processSteps?.map((step, index) => (
        <motion.div key={index} variants={fadeInUp} className="relative">
          <div className="bg-gradient-to-br from-white to-[#fefdfb] border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 h-full">
            <div
              className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-bold shadow-lg"
              style={{ background: 'linear-gradient(135deg, #719334, #5a7529)' }}
            >
              {step.number}
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-3 mt-2">
              {step.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const BenefitsSection = ({ blogData }) => (
  <section id="benefits" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
          {blogData.benefitsTitle || 'Benefits'}
          {blogData.benefitsTitleHighlight && (
            <span className="block sm:inline-block ml-0 sm:ml-2 text-[#719334]">
              {blogData.benefitsTitleHighlight}
            </span>
          )}
        </h2>
      </div>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
        {blogData.benefitsDescription}
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="grid sm:grid-cols-2 gap-6"
    >
      {blogData.benefits?.map((benefit, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
          {benefit.icon && (
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.1))', color: '#719334' }}
            >
              <div className="w-6 h-6">
                {typeof benefit.icon === 'string' ? getIconComponent(benefit.icon) : benefit.icon}
              </div>
            </div>
          )}
          <h3 className="text-lg font-heading font-bold text-foreground mb-2">
            {benefit.title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

// ─── Industries Section (missing from original, now added) ─────────────────

const IndustriesSection = ({ blogData }) => (
  <section id="industries" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        {blogData.industriesTitle || 'Industries'}
        {blogData.industriesTitleHighlight && (
          <span className="ml-2 text-[#719334]">{blogData.industriesTitleHighlight}</span>
        )}
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
        {blogData.industriesDescription}
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="grid sm:grid-cols-2 gap-6"
    >
      {blogData.industries?.map((industry, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#719334]/50 hover:shadow-lg transition-all duration-300">
          {industry.icon && (
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.1))', color: '#719334' }}
            >
              <div className="w-6 h-6">
                {typeof industry.icon === 'string' ? getIconComponent(industry.icon) : industry.icon}
              </div>
            </div>
          )}
          <h3 className="text-lg font-heading font-bold text-foreground mb-2">
            {industry.title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            {industry.description}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* industriesFooterNote — only present on feasibility blog */}
    {blogData.industriesFooterNote && (
      <motion.p
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed text-center"
      >
        {blogData.industriesFooterNote}
      </motion.p>
    )}
  </section>
);

// ─── WhyChooseUs — now includes icons ──────────────────────────────────────

const WhyChooseUsSection = ({ blogData }) => (
  <section id="whyChooseUs" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
        {blogData.whyChooseUsTitle || 'Why Choose Us'}
        {blogData.whyChooseUsTitleHighlight && (
          <span className="block sm:inline-block ml-0 sm:ml-2 text-[#719334]">
            {blogData.whyChooseUsTitleHighlight}
          </span>
        )}
      </h2>
      {blogData.whyChooseUsDescription && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 mt-4">
          {blogData.whyChooseUsDescription}
        </p>
      )}
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="grid sm:grid-cols-2 gap-6"
    >
      {blogData.whyChooseUs?.map((item, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
          {/* icon — was missing before */}
          {item.icon && (
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ background: 'linear-gradient(135deg, rgba(113, 147, 52, 0.2), rgba(113, 147, 52, 0.1))', color: '#719334' }}
            >
              <div className="w-6 h-6">
                {typeof item.icon === 'string' ? getIconComponent(item.icon) : item.icon}
              </div>
            </div>
          )}
          <h3 className="text-lg font-heading font-bold text-foreground mb-3" style={{ color: '#719334' }}>
            {item.title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

// ─── Future — now includes futureBullets ───────────────────────────────────

const FutureSection = ({ blogData }) => (
  <section id="future" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        {blogData.futureTitle || 'Future'}
      </h2>
      <div className="prose prose-lg max-w-none">
        {(blogData.futureDescription || '').split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      {/* futureBullets — present in third blog */}
      {blogData.futureBullets?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {blogData.futureBullets.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
              <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#719334' }}></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  </section>
);

// ─── Conclusion — now includes conclusionBullets ───────────────────────────

const ConclusionSection = ({ blogData }) => (
  <section id="conclusion" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        {blogData.conclusionTitle || 'Conclusion'}
      </h2>
      <div className="prose prose-lg max-w-none">
        {(blogData.conclusionDescription || '').split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      {/* conclusionBullets — present in third blog */}
      {blogData.conclusionBullets?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {blogData.conclusionBullets.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
              <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#719334' }}></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  </section>
);

const FAQSection = ({ blogData }) => (
  <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        Frequently Asked Questions
      </h2>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="space-y-4"
    >
      {/* third blog uses `faq`, first two use `faqs` — handle both */}
      {(blogData.faq || blogData.faqs)?.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </motion.div>
  </section>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#719334]/50 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors duration-300 text-left"
      >
        <span className="font-heading font-bold text-foreground text-base sm:text-lg">
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ background: '#719334', color: 'white', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          ▼
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-base text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── CTA — now uses blogData fields instead of hardcoded strings ───────────

const CTASection = ({ blogData, onContactClick }) => (
  <section id="cta" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <div
        className="relative overflow-hidden rounded-2xl p-8 sm:p-12 text-center"
        style={{ background: 'linear-gradient(135deg, #719334, #5a7529)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white mb-4">
            {/* ctaTitle + ctaHighlight if present, else fallback */}
            {blogData.ctaTitle
              ? (
                <>
                  {blogData.ctaTitle}{' '}
                  {blogData.ctaHighlight && (
                    <span className="block sm:inline">{blogData.ctaHighlight}</span>
                  )}
                </>
              )
              : 'Ready to Implement AI in Your Business?'
            }
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {blogData.ctaDescription ||
              'Get expert guidance on choosing the right AI use case for your business. Our team will help you identify opportunities and implement solutions that drive real results.'}
          </p>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#719334] rounded-lg font-heading font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {blogData.ctaButtonText || 'Get Started Today'}
          </button>

          {/* ctaBadge1 / ctaBadge2 */}
          {(blogData.ctaBadge1 || blogData.ctaBadge2) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-6 border-t border-white/20">
              {blogData.ctaBadge1 && (
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{blogData.ctaBadge1}</span>
                </div>
              )}
              {blogData.ctaBadge2 && (
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{blogData.ctaBadge2}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  </section>
);

// ─── Main Blog Detail Component ────────────────────────────────────────────

const BlogDetailTemplate = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;
  const [activeSection, setActiveSection] = useState('summary');
  const [isMobileTOCOpen, setIsMobileTOCOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogData = blogContents[slug];

  // ✅ Hooks always called unconditionally — guard comes after
  useSeo({
    title: blogData?.metaTitle || 'Blog | Zynex Technologies',
    description: blogData?.metaDescription || 'Discover AI insights and solutions from Zynex Technologies.',
  });

  if (!blogData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Blog Not Found</h1>
          <button
            onClick={() => router.push('/blogs')}
            className="text-[#719334] hover:underline font-medium"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // ─── Section map — keyed by sectionOrder ids ───────────────────────────
  const sectionMap = {
    summary: blogData.summaryTitle
      ? <SummarySection blogData={blogData} />
      : null,

    introduction: blogData.introductionTitle
      ? <IntroductionSection blogData={blogData} />
      : null,

    services: blogData.services?.length > 0
      ? <ServicesSection blogData={blogData} />
      : null,

    process: blogData.processSteps?.length > 0
      ? <ProcessSection blogData={blogData} />
      : null,

    benefits: blogData.benefits?.length > 0
      ? <BenefitsSection blogData={blogData} />
      : null,

    industries: blogData.industries?.length > 0
      ? <IndustriesSection blogData={blogData} />
      : null,

    whyChooseUs: blogData.whyChooseUs?.length > 0
      ? <WhyChooseUsSection blogData={blogData} />
      : null,

    future: blogData.futureTitle
      ? <FutureSection blogData={blogData} />
      : null,

    conclusion: blogData.conclusionTitle
      ? <ConclusionSection blogData={blogData} />
      : null,

    // handle both `faq` (blog 3) and `faqs` (blogs 1 & 2)
    faq: (blogData.faq?.length > 0 || blogData.faqs?.length > 0)
      ? <FAQSection blogData={blogData} />
      : null,

    cta: <CTASection blogData={blogData} onContactClick={() => setIsModalOpen(true)} />,
  };

  // Use sectionOrder from data, with a sensible default
  const sectionOrder = blogData.sectionOrder || [
    'summary', 'introduction', 'services', 'process',
    'benefits', 'industries', 'whyChooseUs', 'future', 'conclusion', 'faq', 'cta',
  ];

  // ─── TOC: build from sectionOrder, only include sections that have data ──
  const tocLabelMap = {
    summary:      blogData.summaryTitle      || 'Summary',
    introduction: blogData.introductionTitle || 'Introduction',
    services:     blogData.servicesTitle     || 'Services',
    process:      blogData.processTitle      || 'Process',
    benefits:     blogData.benefitsTitle     || 'Benefits',
    industries:   blogData.industriesTitle   || 'Industries',
    whyChooseUs:  blogData.whyChooseUsTitle  || 'Why Choose Us',
    future:       blogData.futureTitle       || 'Future',
    conclusion:   blogData.conclusionTitle   || 'Conclusion',
    faq:          'FAQ',
    cta:          'Get Started',
  };

  const tocSections = sectionOrder
    .filter((key) => sectionMap[key] !== null)
    .map((key) => ({ id: key, label: tocLabelMap[key] }));

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={blogData.image || '/aiautomation/aiuse.webp'}
            alt={blogData.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#f0fdf4]/40 via-[#fefdfb]/30 to-[#ecfdf5]/40"></div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_20%,rgba(122,130,80,0.03),transparent_50%)]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <button
            onClick={() => router.push('/blogs')}
            className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity font-medium text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </button>

          <motion.div initial="initial" animate="animate" variants={fadeInUp} className="max-w-4xl">
            <div className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm" style={{ color: '#719334' }}>
              {blogData.badge || 'AI Solutions'}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
              {blogData.title}
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl">
              {blogData.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>{blogData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span>{blogData.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile TOC Section — shown below hero on small screens */}
      <section className="lg:hidden bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8">
          <button
            onClick={() => setIsMobileTOCOpen(!isMobileTOCOpen)}
            className="w-full flex items-center justify-between px-4 py-3 border border-[#719334] text-[#719334] rounded-lg font-medium hover:bg-[#719334]/5 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Menu className="w-5 h-5" />
              Table of Contents
            </span>
            <span className={`transition-transform duration-300 ${isMobileTOCOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {isMobileTOCOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <nav className="space-y-2">
                {tocSections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveSection(section.id);
                      const element = document.getElementById(section.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                      setIsMobileTOCOpen(false);
                    }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                      text-sm font-medium
                      ${
                        activeSection === section.id
                          ? 'bg-[#719334]/10 text-[#719334] border-l-4 border-[#719334]'
                          : 'text-muted-foreground hover:bg-gray-100 border-l-4 border-transparent'
                      }
                    `}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex gap-8 lg:gap-12">

            {/* Desktop TOC — sticky sidebar on large screens */}
            <div className="hidden lg:block">
              <TableOfContents
                sections={tocSections}
                activeSection={activeSection}
                onSectionClick={setActiveSection}
                isMobile={false}
              />
            </div>

            {/* Main Content — rendered in sectionOrder from data */}
            <div className="flex-1 min-w-0">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                {sectionOrder.map((key) => (
                  <React.Fragment key={key}>{sectionMap[key]}</React.Fragment>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Schema
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: blogData.title,
          description: blogData.metaDescription,
          image: blogData.image,
          datePublished: blogData.date,
          author: {
            '@type': 'Organization',
            name: 'Zynex Technologies',
          },
        }}
      />
    </div>
  );
};

export default BlogDetailTemplate;
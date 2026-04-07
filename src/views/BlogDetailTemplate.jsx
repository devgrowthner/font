'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Menu, X } from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import Schema from '../components/Schema';
import { useSeo } from '../hooks/useSeo';
import { blogContents, blogList } from '../constants/blogData';
import { getIconComponent } from '../utils/iconRenderer';
import { SITE_URL } from '../lib/seo';

/** Key site pages for SEO internal linking from blog posts */
const PILLAR_INTERNAL_LINKS = [
  { href: '/solutions', label: 'AI solutions' },
  { href: '/custom-ai', label: 'Custom AI development' },
  { href: '/ai-automation', label: 'AI automation' },
  { href: '/ai-feasibility-analysis', label: 'AI feasibility analysis' },
  { href: '/strategy-report', label: 'Strategy report' },
  { href: '/blogs', label: 'All blog articles' },
];

/** Insert related posts section at the end (after CTA) */
function insertRelatedLinksOrder(order) {
  if (!order?.length || order.includes('relatedLinks')) return order;
  const ctaIdx = order.indexOf('cta');
  if (ctaIdx >= 0) {
    return [...order.slice(0, ctaIdx + 1), 'relatedLinks'];
  }
  return [...order, 'relatedLinks'];
}

/** Resolve related list cards: per-page `relatedSlugs` in blogData, else first 3 other posts */
function resolveRelatedPosts(currentSlug, blogData) {
  const bySlug = Object.fromEntries(blogList.map((p) => [p.slug, p]));
  const fromConfig = blogData?.relatedSlugs
    ?.map((s) => bySlug[s])
    .filter((p) => p && p.slug !== currentSlug);
  if (fromConfig?.length) {
    return fromConfig.slice(0, 3);
  }
  return blogList.filter((p) => p.slug !== currentSlug).slice(0, 3);
}

/** Short date for card badge, e.g. "March 2026" → "Mar 2026" */
function formatDateBadge(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0].slice(0, 3)} ${parts[1]}`;
  }
  return dateStr;
}

/**
 * BlogPosting + FAQPage JSON-LD (@graph). FAQ answers match on-page FAQ from blogData.
 */
function buildBlogDetailJsonLd(blogData, slug) {
  const rawImage = blogData.image || '/aiautomation/aiuse.webp';
  const imageUrl = rawImage.startsWith('http') ? rawImage : `${SITE_URL}${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;
  const pageUrl = `${SITE_URL}/blogs/${slug}`;

  const blogPosting = {
    '@type': 'BlogPosting',
    headline: blogData.title,
    description: blogData.metaDescription,
    image: imageUrl,
    datePublished: blogData.date,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    author: {
      '@type': 'Organization',
      name: 'Zynex Technologies',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zynex Technologies',
    },
  };

  const faqItems = blogData.faq || blogData.faqs;
  const graph = [blogPosting];

  if (faqItems?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: (item.question || '').trim(),
        acceptedAnswer: {
          '@type': 'Answer',
          text: (item.answer || '').trim(),
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

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
  <section id="summary" className="py-8 sm:py-10 px-0 sm:px-0 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <div className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
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
  <section id="introduction" className="py-8 sm:py-10 px-0 sm:px-0 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
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
          <ul className="mt-6 space-y-3">
            {blogData.introductionBullets.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
                <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#719334' }}></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  </section>
);

const ServicesSection = ({ blogData }) => (
  <section id="services" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.servicesTitle || 'Services'}
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
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
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
            {service.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const ProcessSection = ({ blogData }) => (
  <section id="process" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.processTitle || 'Process'}
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {blogData.processDescription}
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {blogData.processSteps?.map((step, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex gap-6">
          <div className="flex-shrink-0">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full text-white font-heading font-bold text-lg"
              style={{ background: 'linear-gradient(135deg, #719334, #5a7529)' }}
            >
              {step.number}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const BenefitsSection = ({ blogData }) => (
  <section id="benefits" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.benefitsTitle || 'Benefits'}
        {blogData.benefitsTitleHighlight && (
          <span className="text-[#719334]"> {blogData.benefitsTitleHighlight}</span>
        )}
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {blogData.benefitsDescription}
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {blogData.benefits?.map((benefit, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {benefit.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

// ─── Industries Section (missing from original, now added) ─────────────────

const IndustriesSection = ({ blogData }) => (
  <section id="industries" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.industriesTitle || 'Industries'}
        {blogData.industriesTitleHighlight && (
          <span className="text-[#719334]"> {blogData.industriesTitleHighlight}</span>
        )}
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {blogData.industriesDescription}
      </p>
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {blogData.industries?.map((industry, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {industry.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {industry.description}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {blogData.industriesFooterNote && (
      <motion.p
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="mt-8 pt-6 border-t border-gray-200 text-base sm:text-lg text-gray-700 leading-relaxed italic"
      >
        {blogData.industriesFooterNote}
      </motion.p>
    )}
  </section>
);

// ─── WhyChooseUs — now includes icons ──────────────────────────────────────

const WhyChooseUsSection = ({ blogData }) => (
  <section id="whyChooseUs" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.whyChooseUsTitle || 'Why Choose Us'}
        {blogData.whyChooseUsTitleHighlight && (
          <span className="text-[#719334]"> {blogData.whyChooseUsTitleHighlight}</span>
        )}
      </h2>
      {blogData.whyChooseUsDescription && (
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {blogData.whyChooseUsDescription}
        </p>
      )}
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {blogData.whyChooseUs?.map((item, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {item.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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

const RelatedLinksSection = ({ currentSlug, blogData }) => {
  const otherPosts = resolveRelatedPosts(currentSlug, blogData);

  const pillarLinkClass =
    'text-sm text-[#719334] hover:text-[#5a7529] font-medium underline-offset-2 hover:underline transition-colors';

  return (
    <section id="relatedLinks" className="py-10 sm:py-14 px-0 w-full max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
          Related blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#719334] focus-visible:ring-offset-2 rounded-xl"
            >
              <article className="h-full rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#719334]/30">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/45 to-[#0f172a]/25"
                    aria-hidden
                  />
                  <span className="absolute top-3 left-3 z-10 bg-white text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    {formatDateBadge(post.date)}
                  </span>
                  <span className="absolute top-3 right-3 z-10 text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase opacity-95">
                    Zynex
                  </span>
                  <h3 className="absolute bottom-0 left-0 right-0 z-10 p-4 pt-12 text-white font-heading font-bold text-sm sm:text-base leading-snug line-clamp-3">
                    {post.title}
                  </h3>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="font-heading font-bold text-foreground text-sm sm:text-base leading-snug line-clamp-3 group-hover:text-[#719334] transition-colors">
                    {post.title}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Explore services
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Internal links">
            {PILLAR_INTERNAL_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className={pillarLinkClass}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>
    </section>
  );
};

const FAQSection = ({ blogData }) => (
  <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        Frequently Asked Questions
      </h2>
      {blogData.faqDescription && (
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          {blogData.faqDescription}
        </p>
      )}
    </motion.div>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="space-y-8"
    >
      {/* third blog uses `faq`, first two use `faqs` — handle both */}
      {(blogData.faq || blogData.faqs)?.map((item, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
            {index + 1}. {item.question}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {item.answer}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

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

  const jsonLd = useMemo(() => {
    if (!blogData || !slug) return null;
    return buildBlogDetailJsonLd(blogData, slug);
  }, [blogData, slug]);

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

    relatedLinks: <RelatedLinksSection currentSlug={slug} blogData={blogData} />,

    // handle both `faq` (blog 3) and `faqs` (blogs 1 & 2)
    faq: (blogData.faq?.length > 0 || blogData.faqs?.length > 0)
      ? <FAQSection blogData={blogData} />
      : null,

    cta: <CTASection blogData={blogData} onContactClick={() => setIsModalOpen(true)} />,
  };

  // Use sectionOrder from data, with a sensible default; related posts appended after CTA
  const defaultSectionOrder = [
    'summary', 'introduction', 'services', 'process',
    'benefits', 'industries', 'whyChooseUs', 'future', 'conclusion', 'faq', 'cta',
  ];
  const sectionOrder = insertRelatedLinksOrder(blogData.sectionOrder || defaultSectionOrder);

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
    relatedLinks: 'Related posts',
    faq:          'FAQ',
    cta:          'Get Started',
  };

  const tocSections = sectionOrder
    .filter((key) => sectionMap[key] !== null)
    .map((key) => ({ id: key, label: tocLabelMap[key] }));

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Hero Section — With Background Image */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={blogData.image || '/aiautomation/aiuse.webp'}
            alt={blogData.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Gradients — Lighter overlay for better image visibility */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-white/25 via-white/15 to-white/25"></div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_20%,rgba(113,147,52,0.02),transparent_50%)]"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          {/* <button
            onClick={() => router.push('/blogs')}
            className="inline-flex items-center gap-2 text-[#719334] hover:text-[#5a7529] transition-colors font-medium text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </button> */}

          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            {/* Badge */}
            <div className="inline-block mb-6 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mt-8" style={{ background: '#719334', color: 'white' }}>
              {blogData.badge || 'AI Solutions'}
            </div>

            {/* H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
              {blogData.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white mb-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">Published:</span>
                <span>{blogData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Read time:</span>
                <span>{blogData.readTime}</span>
              </div>
            </div>

            {/* Subtitle/Description */}
            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl">
              {blogData.description}
            </p>
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
      <Schema schema={jsonLd} />
    </div>
  );
};

export default BlogDetailTemplate;
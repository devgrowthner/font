'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Menu, X } from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import { useSeo } from '../../hooks/useSeo';
import { getIconComponent } from '../../utils/iconRenderer';
import { SITE_URL } from '../../lib/seo';

/** Key site pages for SEO internal linking from blog posts */
const PILLAR_INTERNAL_LINKS = [
  { href: 'https://zynextechnologies.com.au/solutions', label: 'AI solutions' },
  { href: 'https://zynextechnologies.com.au/custom-ai', label: 'Custom AI development' },
  { href: 'https://zynextechnologies.com.au/ai-automation', label: 'AI automation' },
  { href: 'https://zynextechnologies.com.au/ai-feasibility-analysis', label: 'AI feasibility analysis' },
  { href: 'https://zynextechnologies.com.au/strategy-report', label: 'Strategy report' },
  { href: 'https://zynextechnologies.com.au/blogs', label: 'All blog articles' },
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

/** Short date for card badge, e.g. "March 2026" → "Mar 2026" */
function formatDateBadge(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length >= 3) {
    return `${parts[0].slice(0, 3)} ${parts[1]} ${parts[2]}`;
  }
  if (parts.length >= 2) {
    return `${parts[0].slice(0, 3)} ${parts[1]}`;
  }
  return dateStr;
}

const INLINE_LINK_CLASS =
  'text-blue-600 underline underline-offset-2 decoration-1 hover:text-blue-800 font-medium';

/**
 * Apply glossary links (longest match first). `linkDefs`: [{ match, href }, ...]
 */
function renderWithInlineLinks(text, linkDefs) {
  if (text == null || text === '') return null;
  if (!linkDefs?.length) return text;

  const sorted = [...linkDefs].sort((a, b) => b.match.length - a.match.length);
  let chunks = [{ type: 'text', value: text }];

  for (const { match, href } of sorted) {
    chunks = chunks.flatMap((chunk) => {
      if (chunk.type === 'link') return [chunk];
      const val = chunk.value;
      const i = val.indexOf(match);
      if (i === -1) return [chunk];
      const out = [];
      if (i > 0) out.push({ type: 'text', value: val.slice(0, i) });
      out.push({ type: 'link', href, label: match });
      if (i + match.length < val.length) out.push({ type: 'text', value: val.slice(i + match.length) });
      return out;
    });
  }

  return chunks.map((chunk, i) => {
    if (chunk.type === 'text') {
      return <React.Fragment key={i}>{chunk.value}</React.Fragment>;
    }
    const { href, label } = chunk;
    if (href.startsWith('http')) {
      return (
        <a
          key={i}
          href={href}
          className={INLINE_LINK_CLASS}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }
    return (
      <Link key={i} href={href} className={INLINE_LINK_CLASS}>
        {label}
      </Link>
    );
  });
}

function RichParagraphs({ text, linkDefs, paragraphClassName }) {
  if (!text) return null;
  const cls = [paragraphClassName, 'whitespace-pre-line'].filter(Boolean).join(' ');
  return (text || '').split('\n\n').map((paragraph, idx) => (
    <p key={idx} className={cls}>
      {linkDefs?.length ? renderWithInlineLinks(paragraph, linkDefs) : paragraph}
    </p>
  ));
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

const PrefaceSection = ({ blogData }) => (
  <section id="preface" className="py-8 sm:py-10 px-0 sm:px-0 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="prose prose-lg max-w-none">
          <RichParagraphs
            text={blogData.prefaceDescription}
            linkDefs={blogData.inlineInternalLinks}
            paragraphClassName="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

const SummarySection = ({ blogData }) => (
  <section id="summary" className="py-8 sm:py-10 px-0 sm:px-0 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <div className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
          {blogData.summaryTitle || 'Summary'}
        </h2>
        <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-3">
          <RichParagraphs
            text={blogData.summaryDescription}
            linkDefs={blogData.inlineInternalLinks}
            paragraphClassName="leading-relaxed"
          />
        </div>
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
          <RichParagraphs
            text={blogData.introductionDescription}
            linkDefs={blogData.inlineInternalLinks}
            paragraphClassName="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4"
          />
        </div>
        {blogData.introductionBullets?.length > 0 && (
          <ul className="mt-6 space-y-3">
            {blogData.introductionBullets.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
                <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#719334' }}></span>
                <span>
                  {blogData.inlineInternalLinks?.length
                    ? renderWithInlineLinks(item, blogData.inlineInternalLinks)
                    : item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  </section>
);

const GuideStepsSection = ({ blogData }) => {
  const steps = blogData.guideSteps;
  if (!steps?.length) return null;
  const linkDefs = blogData.inlineInternalLinks;

  return (
    <section id="guideSteps" className="py-8 sm:py-10 px-0 sm:px-0 max-w-4xl">
      {blogData.guideStepsTitle ? (
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {blogData.guideStepsTitle}
          </h2>
        </motion.div>
      ) : null}
      {steps.map((step, stepIdx) => (
        <motion.div
          key={stepIdx}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className={stepIdx > 0 ? 'mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-gray-200' : ''}
        >
          {step.headingLevel === 'h2' ? (
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
              {step.heading}
            </h2>
          ) : (
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
              {step.heading}
            </h3>
          )}

          {step.bodyParagraphs?.map((para, i) => {
            if ((step.firstParagraphBullet && i === 0) || (step.numberedParagraphs?.includes(i))) return null;
            return (
              <React.Fragment key={`bp-${i}`}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                  {linkDefs?.length ? renderWithInlineLinks(para, linkDefs) : para}
                </p>
                {step.hrAfterBodyParagraphIndex === i ? (
                  <hr className="my-6 sm:my-8 border-0 border-t border-gray-200" />
                ) : null}
              </React.Fragment>
            );
          })}

          {step.numberedItems?.length > 0 && (
            <ol className="mt-4 mb-4 list-decimal pl-6 sm:pl-8 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed marker:font-medium">
              {step.numberedItems.map((item, i) => (
                <li key={i} className="pl-2">
                  {item.label ? (
                    <>
                      <strong className="font-semibold text-foreground">{item.label}</strong>
                      {linkDefs?.length ? renderWithInlineLinks(item.content, linkDefs) : item.content}
                    </>
                  ) : (
                    (linkDefs?.length ? renderWithInlineLinks(item.content, linkDefs) : item.content)
                  )}
                </li>
              ))}
            </ol>
          )}

          {step.labeledBulletItems?.length > 0 && (
            <ul className="mt-4 mb-4 list-disc pl-6 sm:pl-8 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              {step.labeledBulletItems.map((item, i) => (
                <li key={i} className="pl-1">
                  <strong className="font-semibold text-foreground">{item.label}</strong>{' '}
                  {linkDefs?.length ? renderWithInlineLinks(item.content, linkDefs) : item.content}
                </li>
              ))}
            </ul>
          )}

          {step.plainBulletItems?.length > 0 && (
            <ul className="mt-4 mb-4 list-disc pl-6 sm:pl-8 space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
              {step.plainBulletItems.map((line, i) => (
                <li key={i} className="pl-1">
                  {linkDefs?.length ? renderWithInlineLinks(line, linkDefs) : line}
                </li>
              ))}
            </ul>
          )}

          {step.closingParagraphs?.map((para, i) => (
            <p
              key={`cp-${i}`}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line"
            >
              {linkDefs?.length ? renderWithInlineLinks(para, linkDefs) : para}
            </p>
          ))}
        </motion.div>
      ))}
    </section>
  );
};

const ServicesSection = ({ blogData }) => (
  <section id="services" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.servicesTitle || 'Services'}
      </h2>
      <div className="text-lg text-gray-700 leading-relaxed mb-8 space-y-4">
        {(blogData.servicesDescription || '').split('\n\n').map((paragraph, idx) => {
          const lines = paragraph.split('\n');
          return (
            <p key={idx} className="leading-relaxed whitespace-pre-line">
              {lines.map((line, lineIdx) => {
                const trimmed = line.trim();
                const isEmphasis = blogData.servicesEmphasisLines?.includes(trimmed);
                const isBullet = blogData.servicesBulletLines?.includes(trimmed);
                const lineText = blogData.inlineInternalLinks?.length
                  ? renderWithInlineLinks(trimmed, blogData.inlineInternalLinks)
                  : trimmed;
                return (
                  <React.Fragment key={lineIdx}>
                    {isBullet ? '• ' : ''}
                    {isEmphasis ? <span className="font-semibold text-foreground">{lineText}</span> : lineText}
                    {lineIdx < lines.length - 1 ? '\n' : ''}
                  </React.Fragment>
                );
              })}
            </p>
          );
        })}
      </div>
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
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-4">
            {service.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
            {blogData.inlineInternalLinks?.length
              ? renderWithInlineLinks(service.description, blogData.inlineInternalLinks)
              : service.description}
          </p>
          
          {service.example && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-base font-semibold text-gray-700 mb-3">
                {service.exampleTitle || 'Examples:'}
              </p>
              <ul className="space-y-2">
                {service.example.map((item, exampleIndex) => (
                  <li key={exampleIndex} className="text-base text-gray-600 flex items-start">
                    <span className="text-[#719334] mr-2 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {service.footer && (
            <p className="mt-4 pt-4 border-t border-gray-100 text-base text-gray-700 italic">
              {service.footer}
            </p>
          )}
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
        {blogData.inlineInternalLinks?.length
          ? renderWithInlineLinks(blogData.processDescription, blogData.inlineInternalLinks)
          : blogData.processDescription}
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
            <h3 className="text-xl font-heading font-bold text-foreground">
              {step.title}
            </h3>
            {step.description && (
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-2 whitespace-pre-line">
                {step.description.split('\n').map((line, lineIdx, arr) => {
                  const trimmed = line.trim();
                  const isBullet = blogData.processBulletLines?.includes(trimmed);
                  const lineText = blogData.inlineInternalLinks?.length
                    ? renderWithInlineLinks(trimmed, blogData.inlineInternalLinks)
                    : trimmed;
                  return (
                    <React.Fragment key={lineIdx}>
                      {isBullet ? '• ' : ''}
                      {lineText}
                      {lineIdx < arr.length - 1 ? '\n' : ''}
                    </React.Fragment>
                  );
                })}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>

    {blogData.processFooter && (
      <motion.p
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="mt-8 pt-6 border-t border-gray-200 text-base sm:text-lg text-gray-700 leading-relaxed italic"
      >
        {blogData.processFooter}
      </motion.p>
    )}
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
      <div className="text-lg text-gray-700 leading-relaxed mb-8 space-y-4">
        {(blogData.benefitsDescription || '').split('\n\n').map((paragraph, idx) => {
          const lines = paragraph.split('\n');
          return (
            <p key={idx} className="leading-relaxed whitespace-pre-line">
              {lines.map((line, lineIdx) => {
                const trimmed = line.trim();
                const isEmphasis = blogData.benefitsEmphasisLines?.includes(trimmed);
                const isBullet = blogData.benefitsBulletLines?.includes(trimmed);
                const lineText = blogData.inlineInternalLinks?.length
                  ? renderWithInlineLinks(trimmed, blogData.inlineInternalLinks)
                  : trimmed;
                return (
                  <React.Fragment key={lineIdx}>
                    {isBullet ? '• ' : ''}
                    {isEmphasis ? <span className="font-semibold text-foreground">{lineText}</span> : lineText}
                    {lineIdx < lines.length - 1 ? '\n' : ''}
                  </React.Fragment>
                );
              })}
            </p>
          );
        })}
      </div>
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
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">
            {benefit.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
            {blogData.inlineInternalLinks?.length
              ? renderWithInlineLinks(benefit.description, blogData.inlineInternalLinks)
              : benefit.description}
          </p>
          
          {benefit.example && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-base font-semibold text-gray-700 mb-3">
                {blogData.benefitExampleTitle || 'For example:'}
              </p>
              <ul className="space-y-2">
                {benefit.example.map((item, exampleIndex) => (
                  <li key={exampleIndex} className="text-base text-gray-600 flex items-start">
                    <span className="text-[#719334] mr-2 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {benefit.footer && (
            <p className="mt-4 pt-4 border-t border-gray-100 text-base text-gray-700 italic">
              {benefit.footer}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>

    {(blogData.benefitmainfooter || blogData.benefitsClosing) && (
      <motion.p
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="mt-8 pt-6 border-t border-gray-200 text-base sm:text-lg text-gray-700 leading-relaxed"
      >
        {blogData.inlineInternalLinks?.length
          ? renderWithInlineLinks(blogData.benefitsClosing || blogData.benefitmainfooter, blogData.inlineInternalLinks)
          : blogData.benefitsClosing || blogData.benefitmainfooter}
      </motion.p>
    )}
  </section>
);

const IndustriesSection = ({ blogData }) => (
  <section id="industries" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.industriesTitle || 'Industries'}
        {blogData.industriesTitleHighlight && (
          <span className="text-[#719334]"> {blogData.industriesTitleHighlight}</span>
        )}
      </h2>
      {blogData.industriesDescription && (
      <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
        {(blogData.industriesDescription || '').split('\n').map((line, lineIdx, arr) => {
          const trimmed = line.trim();
          const isBullet = blogData.industriesBulletLines?.includes(trimmed);
          return (
            <React.Fragment key={lineIdx}>
              {isBullet ? '• ' : ''}
              {trimmed}
              {lineIdx < arr.length - 1 ? '\n' : ''}
            </React.Fragment>
          );
        })}
      </p>
      )}
    </motion.div>

    {blogData.industriesTable?.headers?.length > 0 && blogData.industriesTable?.rows?.length > 0 && (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="mb-8 overflow-x-auto"
      >
        <table className="w-full min-w-[640px]">
          <thead>
            <tr>
              {blogData.industriesTable.headers.map((header, idx) => (
                <th key={idx} className="text-left py-2 pr-6 text-2xl font-heading font-bold text-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blogData.industriesTable.rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="text-left py-2 pr-6 text-lg text-gray-700 leading-relaxed">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    )}
  </section>
);

const FAQSection = ({ blogData }) => {
  if (!blogData.faq?.length && !blogData.faqs?.length) return null;
  const faqItems = blogData.faq || blogData.faqs;

  return (
    <section id="faq" className="py-8 sm:py-10 px-0 sm:px-0">
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-8">
          {blogData.faqTitle || 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {item.question}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const CTSection = ({ blogData }) => {
  if (!blogData.ctaTitle && !blogData.ctaDescription) return null;

  return (
    <section id="cta" className="py-12 sm:py-16 px-0 sm:px-0">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="bg-gradient-to-br from-[#719334] to-[#5a7529] rounded-2xl p-8 sm:p-12 text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          {blogData.ctaTitle || 'Ready to Transform Your Business?'}
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          {blogData.ctaDescription || 'Contact us today to learn how our AI solutions can help you achieve your business goals.'}
        </p>
        <button
          onClick={() => document.getElementById('contact-modal-trigger')?.click()}
          className="inline-flex items-center gap-2 bg-white text-[#719334] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

const RelatedLinksSection = ({ relatedPosts }) => {
  if (!relatedPosts?.length) return null;

  return (
    <section id="relatedLinks" className="py-12 sm:py-16 px-0 sm:px-0 bg-gray-50">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-8 text-center">
          Related Articles
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-heading font-bold text-white line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default function BlogDetailContent({ slug, blogData, relatedPosts }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');
  const [isMobileTOCOpen, setIsMobileTOCOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useSeo({
    title: blogData?.metaTitle || blogData?.title || 'Blog | Zynex Technologies',
    description: blogData?.metaDescription || blogData?.description || 'Discover AI insights and solutions from Zynex Technologies.',
  });

  const jsonLd = useMemo(() => buildBlogDetailJsonLd(blogData, slug), [blogData, slug]);

  const sectionOrder = useMemo(() => {
    const order = blogData?.sectionOrder || ['introduction', 'services', 'process', 'benefits', 'faq', 'cta'];
    return insertRelatedLinksOrder(order);
  }, [blogData]);

  const tocSections = useMemo(() => {
    const sections = [];
    const sectionLabels = {
      preface: blogData?.prefaceTitle || 'Preface',
      summary: blogData?.summaryTitle || 'Summary',
      introduction: blogData?.introductionTitle || 'Introduction',
      guideSteps: blogData?.guideStepsTitle || 'Guide',
      services: blogData?.servicesTitle || 'Services',
      process: blogData?.processTitle || 'Process',
      benefits: blogData?.benefitsTitle || 'Benefits',
      industries: blogData?.industriesTitle || 'Industries',
      faq: blogData?.faqTitle || 'FAQ',
      cta: blogData?.ctaTitle || 'Get Started',
      relatedLinks: 'Related Articles',
    };

    sectionOrder.forEach((key) => {
      if (sectionLabels[key]) {
        sections.push({ id: key, label: sectionLabels[key] });
      }
    });

    return sections;
  }, [sectionOrder, blogData]);

  const sectionMap = useMemo(() => ({
    preface: blogData?.prefaceDescription ? <PrefaceSection blogData={blogData} /> : null,
    summary: blogData?.summaryDescription ? <SummarySection blogData={blogData} /> : null,
    introduction: blogData?.introductionDescription ? <IntroductionSection blogData={blogData} /> : null,
    guideSteps: blogData?.guideSteps?.length ? <GuideStepsSection blogData={blogData} /> : null,
    services: blogData?.services?.length ? <ServicesSection blogData={blogData} /> : null,
    process: blogData?.processSteps?.length ? <ProcessSection blogData={blogData} /> : null,
    benefits: blogData?.benefits?.length ? <BenefitsSection blogData={blogData} /> : null,
    industries: blogData?.industriesDescription ? <IndustriesSection blogData={blogData} /> : null,
    faq: <FAQSection blogData={blogData} />,
    cta: <CTSection blogData={blogData} />,
    relatedLinks: <RelatedLinksSection relatedPosts={relatedPosts} />,
  }), [blogData, relatedPosts]);

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={blogData?.image || '/aiautomation/zynex_blog_banner_ultraHD_8K.png'}
            alt={blogData?.title || 'Blog Banner'}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#f0fdf4]/40 via-[#fefdfb]/30 to-[#ecfdf5]/40"></div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_20%,rgba(122,130,80,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_80%,rgba(122,130,80,0.03),transparent_50%)]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 sm:mb-12">
            <button
              type="button"
              onClick={() => router.push('/blogs')}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 font-medium text-sm text-white sm:text-base group hover:text-brand-green"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Blogs
            </button>
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
              {blogData?.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white text-sm sm:text-base mb-6">
              <div className="flex items-center gap-2">
                <span>{blogData?.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{blogData?.readTime}</span>
              </div>
            </div>

            <p className="line-clamp-4 max-w-3xl text-base leading-relaxed text-white sm:text-lg sm:line-clamp-5">
              {blogData?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile TOC Section */}
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

            {/* Desktop TOC */}
            <div className="hidden lg:block">
              <TableOfContents
                sections={tocSections}
                activeSection={activeSection}
                onSectionClick={setActiveSection}
                isMobile={false}
              />
            </div>

            {/* Main Content */}
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
      <div id="contact-modal-trigger" onClick={() => setIsModalOpen(true)} className="hidden" />
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Menu, X } from 'lucide-react';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';
import { useSeo } from '../../hooks/useSeo';
import { blogContents, blogList } from '../../constants/blogData';
import { getIconComponent } from '../../utils/iconRenderer';
import { SITE_URL } from '../../lib/seo';

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
        {/* introductionBullets */}
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

/**
 * Step-by-step guide blocks (numbered/bulleted lists, link-led bullets) for long-form posts.
 * Data: blogData.guideSteps — [{ heading, bodyParagraphs?, hrAfterBodyParagraphIndex?, comparisonTable?, numberedItems?, labeledBulletItems?, bulletLinkItems?, plainBulletItems?, closingParagraphs? }]
 */
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

          {step.firstParagraphBullet && step.bodyParagraphs?.[0] ? (
            <ul className="mt-4 mb-4 list-disc pl-6 sm:pl-8 text-base sm:text-lg text-gray-700 leading-relaxed">
              <li className="pl-1">
                <strong className="font-semibold text-foreground">
                  {linkDefs?.length ? renderWithInlineLinks(step.bodyParagraphs[0], linkDefs) : step.bodyParagraphs[0]}
                </strong>
              </li>
            </ul>
          ) : null}

          {step.numberedParagraphs?.length > 0 ? (
            <ol className="mt-4 mb-4 list-decimal pl-6 sm:pl-8 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              {step.numberedParagraphs.map((idx) => {
                const para = step.bodyParagraphs?.[idx] || '';
                const firstDot = para.indexOf('.');
                const firstSentence = firstDot >= 0 ? para.slice(0, firstDot + 1).trim() : para.trim();
                const rest = firstDot >= 0 ? para.slice(firstDot + 1).trim() : '';
                return (
                  <li key={idx} className="pl-1">
                    <strong className="font-semibold text-foreground">
                      {linkDefs?.length ? renderWithInlineLinks(firstSentence, linkDefs) : firstSentence}
                    </strong>
                    {rest ? ' ' : ''}
                    {rest ? (linkDefs?.length ? renderWithInlineLinks(rest, linkDefs) : rest) : null}
                  </li>
                );
              })}
            </ol>
          ) : null}

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

          {step.comparisonTable?.headers?.length > 0 && step.comparisonTable?.rows?.length > 0 && (
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mb-8 mt-2 overflow-x-auto"
            >
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr>
                    {step.comparisonTable.headers.map((header, idx) => (
                      <th key={idx} className="text-left py-2 pr-6 text-2xl font-heading font-bold text-foreground">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {step.comparisonTable.rows.map((row, rowIdx) => (
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

          {step.bulletLinkItems?.length > 0 && (
            <ul className="mt-4 mb-4 list-disc pl-6 sm:pl-8 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              {step.bulletLinkItems.map((item, i) => (
                <li key={i} className="pl-1">
                  <Link href={item.href} className={INLINE_LINK_CLASS}>
                    {item.name}
                  </Link>
                  {linkDefs?.length ? renderWithInlineLinks(item.suffix, linkDefs) : item.suffix}
                </li>
              ))}
            </ul>
          )}

          {step.plainBulletItemsHeading ? (
            <p className="mt-6 text-base sm:text-lg font-semibold text-foreground">
              {linkDefs?.length ? renderWithInlineLinks(step.plainBulletItemsHeading, linkDefs) : step.plainBulletItemsHeading}
            </p>
          ) : null}

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

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {blogData.industries?.map((industry, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">
            {industry.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
            {industry.description}
          </p>
          
          {industry.example && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-base font-semibold text-gray-700 mb-3">
                {blogData.industryExampleTitle || 'Examples include:'}
              </p>
              <ul className="space-y-2">
                {industry.example.map((item, exampleIndex) => (
                  <li key={exampleIndex} className="text-base text-gray-600 flex items-start">
                    <span className="text-[#719334] mr-2 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {industry.footer && (
            <p className="mt-4 pt-4 border-t border-gray-100 text-base text-gray-700 italic">
              {industry.footer}
            </p>
          )}
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

// ─── Content Section ──────────────────────────────────────────────────────

const ContentSection = ({ blogData }) => (
  <section id="content" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      {blogData.content?.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {item.heading}
          </h2>
          {item.bodyParagraphs?.map((para, i) => (
            <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
              {blogData.inlineInternalLinks?.length
                ? renderWithInlineLinks(para, blogData.inlineInternalLinks)
                : para}
            </p>
          ))}
          {item.table?.headers?.length > 0 && item.table?.rows?.length > 0 && (
            <div className="mb-8 mt-2 overflow-x-auto">
              <table className="w-full min-w-[640px] border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    {item.table.headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="text-left py-3 px-4 text-lg font-heading font-bold text-foreground border-b border-gray-200"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className="text-left py-3 px-4 text-base sm:text-lg text-gray-700 leading-relaxed border-b border-gray-100"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {item.preListParagraphs?.map((para, i) => (
            <p key={`pre-list-${i}`} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
              {blogData.inlineInternalLinks?.length
                ? renderWithInlineLinks(para, blogData.inlineInternalLinks)
                : para}
            </p>
          ))}
          {item.numberedList?.length > 0 && (
            <ol className="mt-4 mb-8 list-decimal pl-6 sm:pl-8 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed marker:font-medium">
              {item.numberedList.map((listItem, i) => (
                <li key={i} className="pl-2">
                  {blogData.inlineInternalLinks?.length
                    ? renderWithInlineLinks(listItem, blogData.inlineInternalLinks)
                    : listItem}
                </li>
              ))}
            </ol>
          )}
          {item.bulletList?.length > 0 && (
            <ul className="mt-4 mb-8 list-disc pl-6 sm:pl-8 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed marker:font-medium">
              {item.bulletList.map((listItem, i) => (
                <li key={i} className="pl-2">
                  {blogData.inlineInternalLinks?.length
                    ? renderWithInlineLinks(listItem, blogData.inlineInternalLinks)
                    : listItem}
                </li>
              ))}
            </ul>
          )}
          {item.closingParagraphs?.map((para, i) => (
            <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
              {blogData.inlineInternalLinks?.length
                ? renderWithInlineLinks(para, blogData.inlineInternalLinks)
                : para}
            </p>
          ))}
        </div>
      ))}
    </motion.div>
  </section>
);

// ─── Pricing Section ───────────────────────────────────────────────────────

const PricingSection = ({ blogData }) => (
  <section id="pricing" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.pricingTitle || 'Pricing'}
      </h2>
      
      {blogData.pricingSteps?.length > 0 && (
        <ol className="mt-4 mb-8 list-decimal pl-6 sm:pl-8 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed marker:font-medium">
          {blogData.pricingSteps.map((step, i) => (
            <li key={i} className="pl-2">
              <strong className="font-semibold text-foreground">{step.heading}</strong>{' '}
              {blogData.inlineInternalLinks?.length
                ? renderWithInlineLinks(step.content, blogData.inlineInternalLinks)
                : step.content}
            </li>
          ))}
        </ol>
      )}

      {blogData.pricingTable?.length > 0 && (
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-8 overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 text-lg font-heading font-bold text-foreground border-b border-gray-200">Build Tier</th>
                <th className="text-left py-3 px-4 text-lg font-heading font-bold text-foreground border-b border-gray-200">Typical Cost (AUD)</th>
                <th className="text-left py-3 px-4 text-lg font-heading font-bold text-foreground border-b border-gray-200">Typical Timeline</th>
              </tr>
            </thead>
            <tbody>
              {blogData.pricingTable.map((row, rowIdx) => (
                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="text-left py-3 px-4 text-base text-gray-700 border-b border-gray-200">{row.buildTier}</td>
                  <td className="text-left py-3 px-4 text-base text-gray-700 border-b border-gray-200">{row.typicalCost}</td>
                  <td className="text-left py-3 px-4 text-base text-gray-700 border-b border-gray-200">{row.typicalTimeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {blogData.pricingClosing && (
        <motion.p
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-base sm:text-lg text-gray-700 leading-relaxed"
        >
          {blogData.inlineInternalLinks?.length
            ? renderWithInlineLinks(blogData.pricingClosing, blogData.inlineInternalLinks)
            : blogData.pricingClosing}
        </motion.p>
      )}
    </motion.div>
  </section>
);

// ─── Modules Section ───────────────────────────────────────────────────────

const ModulesSection = ({ blogData }) => (
  <section id="modules" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.modulesTitle || 'Modules'}
      </h2>
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        {blogData.modules?.map((module, index) => (
          <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
              {module.name}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {module.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {blogData.modulesClosing && (
        <motion.p
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mt-8 pt-6 border-t border-gray-200 text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line"
        >
          {blogData.inlineInternalLinks?.length
            ? renderWithInlineLinks(blogData.modulesClosing, blogData.inlineInternalLinks)
            : blogData.modulesClosing}
        </motion.p>
      )}
    </motion.div>
  </section>
);

// ─── Best Practices Section ─────────────────────────────────────────────────

const BestPracticesSection = ({ blogData }) => (
  <section id="bestPractices" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.bestPracticesTitle || 'Best Practices'}
      </h2>
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        {blogData.bestPractices?.map((practice, index) => (
          <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
              {practice.heading}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {blogData.inlineInternalLinks?.length
                ? renderWithInlineLinks(practice.content, blogData.inlineInternalLinks)
                : practice.content}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {blogData.bestPracticesClosing && (
        <motion.p
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mt-8 pt-6 border-t border-gray-200 text-base sm:text-lg text-gray-700 leading-relaxed"
        >
          {blogData.inlineInternalLinks?.length
            ? renderWithInlineLinks(blogData.bestPracticesClosing, blogData.inlineInternalLinks)
            : blogData.bestPracticesClosing}
        </motion.p>
      )}
    </motion.div>
  </section>
);

// ─── Zynex Approach Section ────────────────────────────────────────────────

const ZynexApproachSection = ({ blogData }) => (
  <section id="zynexApproach" className="py-8 sm:py-10 px-0 sm:px-0">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        {blogData.zynexApproachTitle || 'Our Approach'}
      </h2>
      
      {blogData.zynexApproachDescription && (
        <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
          {blogData.inlineInternalLinks?.length
            ? renderWithInlineLinks(blogData.zynexApproachDescription, blogData.inlineInternalLinks)
            : blogData.zynexApproachDescription}
        </p>
      )}
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        {blogData.zynexApproach?.map((step, index) => (
          <motion.div key={index} variants={fadeInUp} className="bg-white border border-gray-200 border-l-4 border-l-[#719334] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
              {step.heading}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {blogData.inlineInternalLinks?.length
                ? renderWithInlineLinks(step.content, blogData.inlineInternalLinks)
                : step.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
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
          {blogData.inlineInternalLinks?.length
            ? renderWithInlineLinks(blogData.whyChooseUsDescription, blogData.inlineInternalLinks)
            : blogData.whyChooseUsDescription}
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
            {blogData.inlineInternalLinks?.length
              ? renderWithInlineLinks(item.title, blogData.inlineInternalLinks)
              : item.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {blogData.inlineInternalLinks?.length
              ? renderWithInlineLinks(item.description, blogData.inlineInternalLinks)
              : item.description}
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
        {(blogData.futureDescription || '').split('\n\n').map((paragraph, idx) => {
          const lines = paragraph.split('\n');
          const blocks = [];
          let buffer = [];

          const flushBuffer = (key) => {
            const text = buffer.join('\n').trimEnd();
            buffer = [];
            if (!text) return;
            blocks.push(
              <p
                key={key}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 whitespace-pre-line"
              >
                {blogData.inlineInternalLinks?.length
                  ? renderWithInlineLinks(text, blogData.inlineInternalLinks)
                  : text}
              </p>
            );
          };

          lines.forEach((line, lineIdx) => {
            const trimmed = line.trim();
            const emphasisMatch = blogData.futureEmphasisLines?.find((emp) => trimmed.startsWith(emp));

            if (!emphasisMatch) {
              buffer.push(line);
              return;
            }

            flushBuffer(`future-p-${idx}-${lineIdx}`);

            const colonIdx = trimmed.indexOf(':');
            const hasColon = colonIdx !== -1;
            const headingRaw = hasColon ? trimmed.slice(0, colonIdx) : trimmed;
            const restRaw = hasColon ? trimmed.slice(colonIdx + 1).trim() : '';

            const headingContent = blogData.inlineInternalLinks?.length
              ? renderWithInlineLinks(headingRaw, blogData.inlineInternalLinks)
              : headingRaw;
            const restContent =
              restRaw && blogData.inlineInternalLinks?.length
                ? renderWithInlineLinks(restRaw, blogData.inlineInternalLinks)
                : restRaw;

            blocks.push(
              <h3
                key={`future-h-${idx}-${lineIdx}`}
                className="text-xl sm:text-2xl font-heading font-bold text-foreground mt-6 mb-2"
              >
                {headingContent}
              </h3>
            );

            if (restContent) {
              blocks.push(
                <p
                  key={`future-hp-${idx}-${lineIdx}`}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 whitespace-pre-line"
                >
                  {restContent}
                </p>
              );
            }
          });

          flushBuffer(`future-p-${idx}-final`);

          return <React.Fragment key={idx}>{blocks}</React.Fragment>;
        })}
      </div>
      {/* futureBullets — present in third blog */}
      {blogData.futureBullets?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {blogData.futureBullets.map((item, index) => (
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
        <RichParagraphs
          text={blogData.conclusionDescription}
          linkDefs={blogData.inlineInternalLinks}
          paragraphClassName="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4"
        />
      </div>
      {/* conclusionBullets — present in third blog */}
      {blogData.conclusionBullets?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {blogData.conclusionBullets.map((item, index) => (
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
    </motion.div>
  </section>
);

const FinalThoughtsSection = ({ blogData }) => (
  <section id="finalThoughts" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl">
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        {blogData.finalThoughtsTitle || 'Final Thoughts'}
      </h2>
      <div className="prose prose-lg max-w-none">
        <RichParagraphs
          text={blogData.finalThoughtsDescription}
          linkDefs={blogData.inlineInternalLinks}
          paragraphClassName="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4"
        />
      </div>
    </motion.div>
  </section>
);

const ComparisonSection = ({ blogData }) => {
  const linkDefs = blogData.inlineInternalLinks;
  return (
    <section id="comparison" className="py-8 sm:py-10 px-0 sm:px-0 max-w-4xl">
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
          {blogData.comparisonTitle || 'Comparison'}
        </h2>
        {blogData.comparisonDescription?.split('\n\n').map((para, i) => (
          <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
            {linkDefs?.length ? renderWithInlineLinks(para, linkDefs) : para}
          </p>
        ))}
      </motion.div>
    </section>
  );
};

const QuestionsSection = ({ blogData }) => {
  const linkDefs = blogData.inlineInternalLinks;
  return (
    <section id="questions" className="py-8 sm:py-10 px-0 sm:px-0 max-w-4xl">
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
          {blogData.questionsTitle || 'Questions to Ask'}
        </h2>
        {blogData.questionsDescription && (
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            {linkDefs?.length ? renderWithInlineLinks(blogData.questionsDescription, linkDefs) : blogData.questionsDescription}
          </p>
        )}
        {blogData.questions?.length > 0 && (
          <div className="space-y-6">
            {blogData.questions.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {linkDefs?.length ? renderWithInlineLinks(item.answer, linkDefs) : item.answer}
                </p>
              </div>
            ))}
          </div>
        )}
        {blogData.questionsClosing && (
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6 italic">
            {linkDefs?.length ? renderWithInlineLinks(blogData.questionsClosing, linkDefs) : blogData.questionsClosing}
          </p>
        )}
      </motion.div>
    </section>
  );
};

const ImplementationSection = ({ blogData }) => {
  const linkDefs = blogData.inlineInternalLinks;
  return (
    <section id="implementation" className="py-8 sm:py-10 px-0 sm:px-0 max-w-4xl">
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
          {blogData.implementationTitle || 'Implementation'}
        </h2>
        {blogData.implementationDescription && (
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            {linkDefs?.length ? renderWithInlineLinks(blogData.implementationDescription, linkDefs) : blogData.implementationDescription}
          </p>
        )}
        {blogData.implementationSteps?.length > 0 && (
          <div className="space-y-6">
            {blogData.implementationSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#719334] text-white flex items-center justify-center font-bold text-base">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{step.heading}</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {linkDefs?.length ? renderWithInlineLinks(step.content, linkDefs) : step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {blogData.implementationClosing && (
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6 italic">
            {linkDefs?.length ? renderWithInlineLinks(blogData.implementationClosing, linkDefs) : blogData.implementationClosing}
          </p>
        )}
      </motion.div>
    </section>
  );
};

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
  <section id="faq" className="py-12 sm:py-16 px-0 sm:px-0 max-w-4xl">
    {blogData.beforeFaqNote && (
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} className="mb-8 pb-8 border-b border-gray-200">
        <p className="text-lg sm:text-xl font-heading font-bold text-foreground">
          {blogData.inlineInternalLinks?.length
            ? renderWithInlineLinks(blogData.beforeFaqNote, blogData.inlineInternalLinks)
            : blogData.beforeFaqNote}
        </p>
      </motion.div>
    )}

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
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
            {blogData.inlineInternalLinks?.length
              ? renderWithInlineLinks(item.answer, blogData.inlineInternalLinks)
              : item.answer}
          </p>
          
          {item.bulletPoints && (
            <div className="mt-4 ml-4 sm:ml-6">
              <ul className="space-y-2">
                {item.bulletPoints.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-base sm:text-lg text-gray-600 flex items-start">
                    <span className="text-[#719334] mr-3 font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {item.footer && (
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed italic">
              {item.footer}
            </p>
          )}
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
            {blogData.inlineInternalLinks?.length &&
            blogData.ctaDescription &&
            !blogData.ctaPlainText
              ? renderWithInlineLinks(
                  blogData.ctaDescription,
                  blogData.inlineInternalLinks,
                )
              : blogData.ctaDescription ||
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

  if (!blogData || !slug) {
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

  // Use sectionOrder from data, with a sensible default; related posts appended after CTA
  const defaultSectionOrder = [
    'summary', 'introduction', 'services', 'process',
    'benefits', 'industries', 'whyChooseUs', 'future', 'conclusion', 'faq', 'cta',
  ];
  const sectionOrder = insertRelatedLinksOrder(blogData.sectionOrder || defaultSectionOrder);

  // ─── Section map — keyed by sectionOrder ids ───────────────────────────
  const sectionMap = {
    preface: blogData.prefaceDescription
      ? <PrefaceSection blogData={blogData} />
      : null,

    summary: blogData.summaryTitle
      ? <SummarySection blogData={blogData} />
      : null,

    introduction: blogData.introductionTitle
      ? <IntroductionSection blogData={blogData} />
      : null,

    services: (blogData.services?.length > 0 || blogData.servicesTitle || blogData.servicesDescription)
      ? <ServicesSection blogData={blogData} />
      : null,

    guideSteps: blogData.guideSteps?.length > 0 ? <GuideStepsSection blogData={blogData} /> : null,

    process: blogData.processSteps?.length > 0
      ? <ProcessSection blogData={blogData} />
      : null,

    benefits: (blogData.benefits?.length > 0 || blogData.benefitsTitle || blogData.benefitsDescription)
      ? <BenefitsSection blogData={blogData} />
      : null,

    industries: (blogData.industries?.length > 0 || blogData.industriesTitle || blogData.industriesDescription || blogData.industriesTable?.rows?.length > 0)
      ? <IndustriesSection blogData={blogData} />
      : null,

    whyChooseUs: (blogData.whyChooseUs?.length > 0 || blogData.whyChooseUsTitle || blogData.whyChooseUsDescription)
      ? <WhyChooseUsSection blogData={blogData} />
      : null,

    future: blogData.futureTitle
      ? <FutureSection blogData={blogData} />
      : null,

    conclusion: blogData.conclusionTitle
      ? <ConclusionSection blogData={blogData} />
      : null,

    finalThoughts: blogData.finalThoughtsTitle
      ? <FinalThoughtsSection blogData={blogData} />
      : null,

    comparison: blogData.comparisonTitle
      ? <ComparisonSection blogData={blogData} />
      : null,

    questions: blogData.questionsTitle
      ? <QuestionsSection blogData={blogData} />
      : null,

    implementation: blogData.implementationTitle
      ? <ImplementationSection blogData={blogData} />
      : null,

    content: blogData.content?.length > 0
      ? <ContentSection blogData={blogData} />
      : null,

    pricing: (blogData.pricingTitle || blogData.pricingSteps?.length > 0 || blogData.pricingTable?.length > 0)
      ? <PricingSection blogData={blogData} />
      : null,

    modules: (blogData.modulesTitle || blogData.modules?.length > 0)
      ? <ModulesSection blogData={blogData} />
      : null,

    bestPractices: (blogData.bestPracticesTitle || blogData.bestPractices?.length > 0)
      ? <BestPracticesSection blogData={blogData} />
      : null,

    zynexApproach: (blogData.zynexApproachTitle || blogData.zynexApproach?.length > 0)
      ? <ZynexApproachSection blogData={blogData} />
      : null,

    relatedLinks: <RelatedLinksSection currentSlug={slug} blogData={blogData} />,

    // handle both `faq` (blog 3) and `faqs` (blogs 1 & 2)
    faq: (blogData.faq && Array.isArray(blogData.faq) && blogData.faq.length > 0) || (blogData.faqs && Array.isArray(blogData.faqs) && blogData.faqs.length > 0)
      ? <FAQSection blogData={blogData} />
      : null,

    cta: <CTASection blogData={blogData} onContactClick={() => setIsModalOpen(true)} />,
  };

  // ─── TOC: build from sectionOrder, only include sections that have data ──
  const tocLabelMap = {
    preface: undefined,
    summary:      blogData.summaryTitle      || 'Summary',
    introduction: blogData.introductionTitle || 'Introduction',
    services:     blogData.servicesTitle     || 'Services',
    guideSteps:   blogData.guideStepsTocLabel || 'Steps',
    process:      blogData.processTitle      || 'Process',
    benefits:     blogData.benefitsTitle     || 'Benefits',
    industries:   blogData.industriesTitle   || 'Industries',
    whyChooseUs:  blogData.whyChooseUsTitle  || 'Why Choose Us',
    future:       blogData.futureTitle       || 'Future',
    conclusion:   blogData.conclusionTitle   || 'Conclusion',
    finalThoughts: blogData.finalThoughtsTitle || 'Final Thoughts',
    comparison:   blogData.comparisonTitle   || 'Comparison',
    questions:    blogData.questionsTitle    || 'Questions',
    implementation: blogData.implementationTitle || 'Implementation',
    content:      blogData.content?.[0]?.heading || 'Content',
    pricing:      blogData.pricingTitle      || 'Pricing',
    modules:      blogData.modulesTitle      || 'Modules',
    bestPractices: blogData.bestPracticesTitle || 'Best Practices',
    zynexApproach: blogData.zynexApproachTitle || 'Our Approach',
    relatedLinks: 'Related posts',
    faq:          'FAQ',
    cta:          'Get Started',
  };

  const tocSections = sectionOrder
    .filter((key) => sectionMap[key] !== null)
    .map((key) => ({ id: key, label: tocLabelMap[key] }))
    .filter((s) => s.label);

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Hero — fixed height + cover image (aligned with BlogTemplate image column: 300 / 400 / 500px) */}
      <section className={`relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden px-4 sm:px-6 lg:px-8 ${blogData.heroTopMargin ? 'mt-16 sm:mt-20 lg:mt-24' : ''}`}>

        {/* Overlay Gradients — Lighter overlay for better image visibility */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-white/25 via-white/15 to-white/25"></div>
        <div className="absolute inset-0 z-[1]">
          <img
            src="/aiautomation/zynex_blog_banner_ultraHD_8K.png"
            alt="Zynex Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-center py-6 sm:py-8">
          {/* <button
            onClick={() => router.push('/blogs')}
            className="inline-flex items-center gap-2 text-[#719334] hover:text-[#5a7529] transition-colors font-medium text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </button> */}

          <motion.div initial="initial" animate="animate" variants={fadeInUp} className="min-h-0">
            {/* Badge */}
            <div
              className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide sm:mb-4"
              style={{ background: '#719334', color: 'white' }}
            >
              {blogData.badge || 'AI Solutions'}
            </div>

            {/* H1 Title */}
            <h1 className="mb-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              {blogData.title}
            </h1>

            {/* Meta Information */}
            <div className="mb-3 flex flex-wrap gap-4 text-sm text-white sm:mb-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">Published:</span>
                <span>{blogData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Read time:</span>
                <span>{blogData.readTime}</span>
              </div>
            </div>

            {/* Subtitle — clamp so hero height matches other blogs; full copy lives in summary when present */}
            <p className="line-clamp-4 max-w-3xl text-base leading-relaxed text-white sm:text-lg sm:line-clamp-5">
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

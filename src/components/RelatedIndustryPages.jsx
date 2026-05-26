import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const industryPages = [
  {
    slug: 'healthcare',
    title: 'AI Solution for Healthcare Clinics',
    description: 'AI systems for patient intake, phone handling, admin workflows, and clinic operations.',
    href: '/ai-solution-healthcare-clinics-australia',
    image: '/AIclinic.webp',
  },
  {
    slug: 'hospitality',
    title: 'AI Solution for Hospitality',
    description: 'Automation for bookings, guest enquiries, venue operations, and owner reporting.',
    href: '/ai-solution-hospitality-businesses-australia',
    image: '/AIrestaurant.webp',
  },
  {
    slug: 'construction',
    title: 'AI Development for Construction',
    description: 'Connected AI for quoting, scheduling, compliance, subcontractors, and project workflows.',
    href: '/ai-development-company-construction-businesses-australia',
    image: '/AIconstruction.webp',
  },
  {
    slug: 'small-business',
    title: 'AI Development for Small Businesses',
    description: 'Practical AI automation for lean teams that need more capacity without more headcount.',
    href: '/ai-development-for-small-businesses-australia',
    image: '/ai1.webp',
  },
  {
    slug: 'legal',
    title: 'AI Development for Legal Firms',
    description: 'AI for document review, client intake, matter workflows, compliance, and firm reporting.',
    href: '/ai-development-company-legal-firms-australia',
    image: '/zynex1.webp',
  },
  {
    slug: 'real-estate',
    title: 'AI Development for Real Estate',
    description: 'AI for lead response, listings, property management workflows, and agency operations.',
    href: '/ai-development-company-for-real-estate-australia',
    image: '/AIrestaurant.webp',
  },
];

const preferredRelated = {
  healthcare: ['hospitality', 'legal', 'small-business'],
  hospitality: ['healthcare', 'real-estate', 'small-business'],
  construction: ['real-estate', 'small-business', 'legal'],
  'small-business': ['hospitality', 'real-estate', 'healthcare'],
  legal: ['real-estate', 'healthcare', 'small-business'],
  'real-estate': ['legal', 'hospitality', 'construction'],
};

const RelatedIndustryPages = ({ currentSlug }) => {
  const bySlug = Object.fromEntries(industryPages.map((page) => [page.slug, page]));
  const related = (preferredRelated[currentSlug] || [])
    .map((slug) => bySlug[slug])
    .filter(Boolean)
    .slice(0, 3);

  const fallback = industryPages
    .filter((page) => page.slug !== currentSlug && !related.some((item) => item.slug === page.slug))
    .slice(0, 3 - related.length);

  const pages = [...related, ...fallback];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
            Related pages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100">
                <img
                  src={page.image}
                  alt={page.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-gray-900 shadow-sm">
                  Industry
                </span>
                <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white font-heading text-lg font-bold leading-snug">
                  {page.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#719334]">
                  View page
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedIndustryPages;

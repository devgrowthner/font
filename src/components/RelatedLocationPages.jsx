import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const locationPages = [
  {
    slug: 'sydney',
    title: 'AI Development Company in Sydney',
    description: 'Custom AI development, automation, and machine learning services for Sydney businesses.',
    href: '/ai-development-company-sydney',
    image: '/AIdevSydney.webp',
  },
  {
    slug: 'melbourne',
    title: 'AI Development Company in Melbourne',
    description: 'AI strategy, custom development, and workflow automation for Melbourne teams.',
    href: '/ai-development-company-melbourne',
    image: '/AIMelbourne.webp',
  },
  {
    slug: 'brisbane',
    title: 'AI Development Company in Brisbane',
    description: 'AI automation, chatbots, and intelligent systems for Brisbane businesses.',
    href: '/ai-development-company-in-brisbane',
    image: '/AIBrisbane.webp',
  },
  {
    slug: 'adelaide',
    title: 'AI Development Company in Adelaide',
    description: 'Custom AI, machine learning, and automation support for Adelaide organisations.',
    href: '/ai-development-company-adelaide',
    image: '/adeline.jpeg',
  },
  {
    slug: 'perth',
    title: 'Custom AI Development Company in Perth',
    description: 'Custom AI systems, computer vision, chatbots, and automation for Perth businesses.',
    href: '/custom-ai-development-company-in-perth',
    image: '/perth.jpeg',
  },
  {
    slug: 'canberra',
    title: 'AI Development Company in Canberra',
    description: 'AI development, automation, and machine learning services for Canberra organisations.',
    href: '/ai-development-company-in-canberra',
    image: '/CanberraAI.webp',
  },
  {
    slug: 'gold-coast',
    title: 'AI Development Company in Gold Coast',
    description: 'Custom AI, automation, and machine learning systems for Gold Coast businesses.',
    href: '/ai-development-gold-coast',
    image: '/GoldCoast.webp',
  },
  {
    slug: 'darwin',
    title: 'AI Development Company in Darwin',
    description: 'Custom AI development and automation solutions for Darwin businesses.',
    href: '/ai-development-company-darwin',
    image: '/DarwinAI.webp',
  },
  {
    slug: 'hobart',
    title: 'AI Development Company in Hobart',
    description: 'AI development, automation, and machine learning solutions for Hobart teams.',
    href: '/ai-development-company-in-hobart',
    image: '/HobartAI.webp',
  },
];

const preferredRelated = {
  sydney: ['melbourne', 'brisbane', 'canberra'],
  melbourne: ['sydney', 'adelaide', 'hobart'],
  brisbane: ['gold-coast', 'sydney', 'melbourne'],
  adelaide: ['melbourne', 'perth', 'canberra'],
  perth: ['adelaide', 'darwin', 'melbourne'],
  canberra: ['sydney', 'melbourne', 'adelaide'],
  'gold-coast': ['brisbane', 'sydney', 'melbourne'],
  darwin: ['perth', 'brisbane', 'adelaide'],
  hobart: ['melbourne', 'sydney', 'adelaide'],
};

const RelatedLocationPages = ({ currentSlug }) => {
  const bySlug = Object.fromEntries(locationPages.map((page) => [page.slug, page]));
  const related = (preferredRelated[currentSlug] || [])
    .map((slug) => bySlug[slug])
    .filter(Boolean)
    .slice(0, 3);

  const fallback = locationPages
    .filter((page) => page.slug !== currentSlug && !related.some((item) => item.slug === page.slug))
    .slice(0, 3 - related.length);

  const pages = [...related, ...fallback];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900">
            Related location pages
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
                  Location
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

export default RelatedLocationPages;

import Link from 'next/link';

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

const RelatedIndustryPages = ({ currentSlug }) => {
  const allIndustries = industryPages.filter((page) => page.slug !== currentSlug);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fff7ed] to-[#fef3c7]/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#719334] mb-2">
            Our Industries
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            AI Solutions Across Industries
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            From healthcare to finance, manufacturing to real estate—Zynex Technologies delivers industry-specific AI systems tailored to your unique business challenges.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {allIndustries.map((industry) => (
            <Link
              key={industry.slug}
              href={industry.href}
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-gray-300 text-gray-700 font-medium text-sm sm:text-base transition-all duration-300 hover:border-[#719334] hover:text-[#719334] hover:bg-[#719334]/5"
            >
              {industry.slug === 'small-business' ? 'Small Business' : industry.slug === 'real-estate' ? 'Real Estate' : industry.title.split(' ').slice(-1)[0]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedIndustryPages;

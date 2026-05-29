import Link from 'next/link';

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

const RelatedLocationPages = ({ currentSlug }) => {
  const allLocations = locationPages.filter((page) => page.slug !== currentSlug);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fff7ed] to-[#fef3c7]/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Zynex Technologies provides AI development services across Australia. Explore our locations and find the office nearest to you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">``
          {allLocations.map((location) => (
            <Link
              key={location.slug}
              href={location.href}
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-gray-300 text-gray-700 font-medium text-sm sm:text-base transition-all duration-300 hover:border-[#719334] hover:text-[#719334] hover:bg-[#719334]/5"
            >
              {location.slug === 'gold-coast' ? 'Gold Coast' : location.slug === 'perth' ? 'Perth' : location.slug === 'darwin' ? 'Darwin' : location.slug === 'hobart' ? 'Hobart' : location.slug.charAt(0).toUpperCase() + location.slug.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLocationPages;

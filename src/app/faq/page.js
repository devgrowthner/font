import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, User } from 'lucide-react';
import Footer from '@/components/Footer';
import { buildPageMetadata } from '@/lib/seo';
import { faqContent as odooTimeline } from './how-long-does-an-odoo-implementation-take/content';
import { faqContent as aiPrivacy } from './privacy-act-small-business-exemption-ai/content';

export const metadata = buildPageMetadata({
  title: 'Frequently Asked Questions | Zynex Technologies',
  description: 'Explore practical answers to common questions about Odoo migration, ERP implementation and AI privacy for Australian small businesses.',
  path: '/faq',
});

const articles = [
  {
    slug: 'excel-to-odoo-small-business',
    title: 'How Can Small Businesses Move from Excel to Odoo?',
    excerpt: 'A practical guide to preparing your records, choosing a first process and helping your team make the change with confidence.',
    category: 'Odoo Migration',
  },
  {
    slug: 'how-long-does-an-odoo-implementation-take',
    title: odooTimeline.title,
    excerpt: odooTimeline.description,
    category: 'Odoo Implementation',
  },
  {
    slug: 'privacy-act-small-business-exemption-ai',
    title: aiPrivacy.title,
    excerpt: aiPrivacy.metaDescription,
    category: 'AI Privacy',
  },
];

export default function FAQPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fefdfb]">
        <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Image src="/aiautomation/mainblog.webp" alt="" fill preload className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative container mx-auto max-w-7xl">
            <Link href="/" className="inline-flex items-center gap-2 text-white font-medium mb-8 sm:mb-12 hover:text-lime-200">
              <ArrowLeft className="w-5 h-5" aria-hidden="true" /> Back
            </Link>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Frequently Asked <span className="text-[#b9d783]">Questions</span>
              </h1>
              <p className="text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                Practical answers and guides on Odoo, business systems and AI for Australian small businesses.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="FAQ articles" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fff7ed] to-[#fef3c7]/30">
          <div className="container mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <Link key={article.slug} href={`/faq/${article.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#719334]">
                <div className="relative h-64 bg-[#719334] overflow-hidden">
                  <Image src="/zynex_banner_natural_logo_4K.png" alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-[#587526]">{article.category}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-lg font-heading font-bold text-white mb-2 line-clamp-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{article.title}</h2>
                    <div className="flex items-center gap-1 text-xs text-white/90"><User className="w-3 h-3" aria-hidden="true" /> Zynex Team</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#587526] group-hover:gap-3 transition-all duration-300">
                    Read More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

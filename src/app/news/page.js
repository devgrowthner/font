import Footer from '@/components/Footer';
import { buildPageMetadata } from '@/lib/seo';
import { newsArticles } from '@/constants/newsData';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = buildPageMetadata({
  title: 'News & Updates | Zynex Technologies | AI & ERP Solutions',
  description:
    'Latest news and updates from Zynex Technologies on AI solutions, ERP implementation, machine learning trends, and digital transformation strategies for Australian businesses.',
  path: '/news',
});

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-gradient-to-br from-[#709034] via-[#709034] to-[#709034] px-4 pb-20 pt-32 sm:min-h-[500px] sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.35),transparent_32%),linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.08)_50%,transparent_75%)]" />
        <div className="relative mx-auto w-full max-w-5xl text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
            Zynex Technologies
          </p>
          <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Latest AI &amp; Business Transformation News
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Discover breakthrough innovations in AI solutions, ERP implementation success stories, and industry insights
            from Zynex Technologies. Stay ahead with the latest trends shaping digital transformation across Australian
            businesses.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl border-l-4 border-[#719334] pl-5 sm:pl-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#719334]">News &amp; Updates</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Industry Insights &amp; Company Updates
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              At Zynex Technologies, we&apos;re committed to keeping you informed about the latest developments in AI,
              machine learning, and enterprise transformation. Our news section brings you industry-leading insights,
              success stories from our clients, product announcements, and expert perspectives on digital transformation
              trends shaping Australian and global businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden bg-[#263313]">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#709034]/90 via-[#35491c]/80 to-[#111a0a]/95" />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#719334] shadow-sm">
                    Featured Post
                  </span>
                  <span className="absolute right-4 top-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                    Zynex Technologies
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="mb-2 line-clamp-2 font-heading text-lg font-bold leading-snug text-white">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/90">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={article.datePublished}>{article.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>Zynex Team</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="line-clamp-3 text-base leading-relaxed text-gray-600">{article.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#719334] transition-all duration-300 group-hover:gap-3">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

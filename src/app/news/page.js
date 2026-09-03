import Footer from '@/components/Footer';
import { buildPageMetadata } from '@/lib/seo';
import { newsArticles } from '@/constants/newsData';
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
              <article key={article.slug} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Link href={`/news/${article.slug}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <Image src={article.image} alt="" fill className="object-cover transition duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="font-semibold text-[#719334]">{article.category}</span>
                      <span aria-hidden="true">•</span>
                      <time dateTime={article.datePublished}>{article.date}</time>
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-bold leading-snug text-gray-900">{article.title}</h3>
                    <p className="mt-4 line-clamp-3 leading-7 text-gray-600">{article.excerpt}</p>
                    <span className="mt-5 inline-flex font-semibold text-[#719334]">Read full story →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

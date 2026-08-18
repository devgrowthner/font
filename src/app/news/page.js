import Footer from '@/components/Footer';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'News & Updates | Zynex Technologies | AI & ERP Solutions',
  description:
    'Latest news and updates from Zynex Technologies on AI solutions, ERP implementation, machine learning trends, and digital transformation strategies for Australian businesses.',
  path: '/news',
});

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-gradient-to-br from-[#123d5a] via-[#245d8b] to-[#4f82b8] px-4 pb-20 pt-32 sm:min-h-[500px] sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}

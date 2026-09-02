import Footer from '@/components/Footer';
import { newsArticles, newsBySlug } from '@/constants/newsData';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';

function renderLinkedText(text, links) {
  const link = links.find(({ text: label }) => text.includes(label));
  if (!link) return text;

  const [before, after] = text.split(link.text);
  return (
    <>
      {before}
      <Link href={link.href} className="font-medium text-[#5f8127] underline decoration-[#719334]/40 underline-offset-4 hover:text-[#46651b]">
        {link.text}
      </Link>
      {after}
    </>
  );
}

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = newsBySlug[slug];

  if (!article) return buildPageMetadata({ title: 'News | Zynex Technologies', description: 'Latest news from Zynex Technologies.', path: `/news/${slug}` });

  return buildPageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/news/${slug}`,
  });
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = newsBySlug[slug];
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    mainEntityOfPage: `${SITE_URL}/news/${article.slug}`,
    image: `${SITE_URL}${article.image}`,
    author: { '@type': 'Organization', name: 'Zynex Technologies' },
    publisher: { '@type': 'Organization', name: 'Zynex Technologies', logo: { '@type': 'ImageObject', url: `${SITE_URL}/final3.png` } },
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <header className="bg-gradient-to-br from-[#709034] via-[#709034] to-[#709034] px-4 pb-16 pt-32 text-white sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/news" className="text-sm font-semibold text-white/80 hover:text-white">← Back to news</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">{article.category}</p>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">{article.title}</h1>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
            <time dateTime={article.datePublished}>{article.date}</time>
            <span aria-hidden="true">•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="border-l-4 border-[#719334] pl-5 text-xl font-medium leading-9 text-gray-700 sm:pl-7">{article.excerpt}</p>
        <div className="mt-12 space-y-12">
          {article.sections.map((section, index) => (
            <section key={section.heading || index}>
              {section.heading && <h2 className="mb-8 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">{section.heading}</h2>}
              <div className="space-y-5 text-base leading-8 text-gray-700 sm:text-lg">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{renderLinkedText(paragraph, article.links)}</p>)}
              </div>
            </section>
          ))}
        </div>

        <aside className="mt-14 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-600 sm:p-6">
          Source: <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#5f8127] underline underline-offset-4">{article.sourceName}</a>
        </aside>
      </article>
      <Footer />
    </main>
  );
}

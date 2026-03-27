import BlogTemplate from '@/views/BlogTemplate';
import BlogDetailTemplate from '@/views/BlogDetailTemplate';
import { blogContents } from '@/constants/blogData';
import { buildPageMetadata } from '@/lib/seo';

// Slugs that use BlogDetailTemplate
const DETAIL_TEMPLATE_SLUGS = [
  'ai-use-cases-for-small-businesses',
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogData = blogContents[slug];

  return buildPageMetadata({
    title: blogData?.metaTitle || 'Blog | Zynex Technologies',
    description:
      blogData?.metaDescription ||
      'Discover AI insights and solutions from Zynex Technologies.',
    path: `/blogs/${slug}`,
  });
}

export default async function BlogTemplatePage({ params }) {
  const { slug } = await params;

  if (DETAIL_TEMPLATE_SLUGS.includes(slug)) {
    return <BlogDetailTemplate />;
  }

  return <BlogTemplate />;
}
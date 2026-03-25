import BlogTemplate from '@/pages/BlogTemplate';
import { blogContents } from '@/constants/blogData';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogData = blogContents[slug];

  return buildPageMetadata({
    title: blogData?.metaTitle || 'Blog | Zynex Technologies',
    description:
      blogData?.metaDescription || 'Discover AI insights and solutions from Zynex Technologies.',
    path: `/blogs/${slug}`,
  });
}

export default function BlogTemplatePage() {
  return <BlogTemplate />;
}

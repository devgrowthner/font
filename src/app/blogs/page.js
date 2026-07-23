import { blogList } from '@/constants/blogData';
import { buildPageMetadata } from '@/lib/seo';
import BlogsContent from '@/views/blogs/BlogsContent';

export const metadata = buildPageMetadata({
  title: 'AI Insights & Solutions | Zynex Technologies Blog',
  description:
    'Discover how AI can transform your business with expert analysis, automation strategies, and proven implementation approaches.',
  path: 'https://zynextechnologies.com.au/blogs',
});

const PAGE_SIZE = 9;

export default function BlogsPage({ searchParams }) {
  const rawPage = searchParams.page;
  const parsedPage = parseInt(rawPage || '1', 10);
  const pageFromUrl = Number.isFinite(parsedPage) && parsedPage >= 1 ? parsedPage : 1;

  const totalPages = Math.max(1, Math.ceil((blogList?.length || 0) / PAGE_SIZE));
  const currentPage = Math.min(pageFromUrl, totalPages);

  const paginatedPosts = blogList?.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE) || [];

  return (
    <BlogsContent
      blogList={blogList}
      paginatedPosts={paginatedPosts}
      currentPage={currentPage}
      totalPages={totalPages}
      pageSize={PAGE_SIZE}
    />
  );
}

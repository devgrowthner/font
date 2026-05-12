import Blogs from '@/views/blogs/Blogs';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Insights & Solutions | Zynex Technologies Blog',
  description:
    'Discover how AI can transform your business with expert analysis, automation strategies, and proven implementation approaches.',
  path: '/blogs',
});

export default function BlogsPage() {
  return <Blogs />;
}

import Blogs from '@/pages/Blogs';
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

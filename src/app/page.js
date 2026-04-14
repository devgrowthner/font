import Home from '@/views/Home';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Solutions for Business Growth | Zynex Technologies',
  description:
    'AI solutions that deliver real business value automate workflows, cut costs & scale faster. Discover what Zynex can do for you.',
  path: '/',
});

export default function HomePage() {
  return <Home />;
}

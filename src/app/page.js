import Home from '@/views/Home';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company in Australia | Zynex Technologies',
  description:
    'Leading AI Development Company in Australia businesses trust for custom AI solutions, automation, and scalable software development services.',
  path: '/',
});

export default function HomePage() {
  return <Home />;
}

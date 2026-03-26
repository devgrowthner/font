import Home from '@/views/Home';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company Australia | Zynex Technologies',
  description:
    'AI development company in Australia offering ML, chatbots, generative AI, and automation solutions to help businesses build intelligent systems.',
  path: '/',
});

export default function HomePage() {
  return <Home />;
}

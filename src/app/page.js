import Home from '@/views/Home';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI & ERP Development Company in Australia | Zynex Technologies',
  description:
    'Leading AI and ERP Development Company in Australia businesses trust for custom AI solutions, Odoo ERP, automation, and scalable software development services.',
  path: '/',
});

export default function HomePage() {
  return <Home />;
}

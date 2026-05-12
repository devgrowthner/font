import Solutions from '@/views/services/Solutions';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'CareCob: AI Companion for Everyone',
  description:
    'CareCob AI companion makes intelligent support accessible for everyone. Discover how Zynex Technologies is redefining AI-powered care. Learn more today.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return <Solutions />;
}

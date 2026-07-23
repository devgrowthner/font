import Solutions from '@/views/services/Solutions';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'CareCob: AI Companion That Calls & Monitors | Zynex Technologies',
  description:
    'AI companion CareCob checks on your loved ones 24/7 with natural conversations, mood tracking, and emergency alerts. Learn more.',
  path: 'https://zynextechnologies.com.au/solutions',
});

export default function SolutionsPage() {
  return <Solutions />;
}

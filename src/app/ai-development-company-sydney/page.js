import AiDevelopmentCompanySydney from '@/views/AiDevelopmentCompanySydney';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Best AI Development Company in Sydney | Zynex Technologies',
  description:
    "Zynex Technologies is Sydney's leading AI development company. We build custom AI solutions with measurable ROI—from strategy to deployment in weeks. Get a free consultation today.",
  path: '/ai-development-company-sydney',
  canonicalPath: '/ai-development-company-sydney',
});

export default function AiDevelopmentCompanySydneyPage() {
  return <AiDevelopmentCompanySydney />;
}

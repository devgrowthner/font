import AiDevelopmentCompanySydney from '@/views/locations/AiDevelopmentCompanySydney';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company Sydney | Zynex Technologies',
  description:
    'AI development company Sydney businesses trust for custom ML models, NLP, and multi-agent AI. Deployed in 6–12 weeks with 3x average ROI. Get started.',
  path: '/ai-development-company-sydney',
  canonicalPath: '/ai-development-company-sydney',
});

export default function AiDevelopmentCompanySydneyPage() {
  return <AiDevelopmentCompanySydney />;
}

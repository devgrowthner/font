import AiDevelopmentCompanySydney from '@/views/locations/AiDevelopmentCompanySydney';
import { buildPageMetadata } from '@/lib/seo';
import ServiceSchema from '@/components/ServiceSchema';

export const metadata = buildPageMetadata({
  title: 'AI Development Company Sydney | Zynex Technologies',
  description:
    'Zynex is an AI development company in Sydney building custom AI systems, AI agents and integrations. Validated first, live in 6 to 12 weeks. Book a free call.',
  path: '/ai-development-company-sydney',
  canonicalPath: '/ai-development-company-sydney',
});

export default function AiDevelopmentCompanySydneyPage() {
  return (
    <>
      <ServiceSchema path="/ai-development-company-sydney" />
      <AiDevelopmentCompanySydney />
    </>
  );
}

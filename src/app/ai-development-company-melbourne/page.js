import AiDevelopmentCompanyMelbourne from '@/views/locations/AiDevelopmentCompanyMelbourne';
import { buildPageMetadata } from '@/lib/seo';
import ServiceSchema from '@/components/ServiceSchema';

export const metadata = buildPageMetadata({
  title: 'AI Development Company Melbourne | Zynex Technologies',
  description:
    'AI development company Melbourne businesses trust for custom solutions. Get ROI clarity, fast deployment in 6–12 weeks. Book a free consultation.',
  path: '/ai-development-company-melbourne',
  canonicalPath: '/ai-development-company-melbourne',
});

export default function AiDevelopmentCompanyMelbournePage() {
  return (
    <>
      <ServiceSchema path="/ai-development-company-melbourne" />
      <AiDevelopmentCompanyMelbourne />
    </>
  );
}

import AiDevelopmentCompanyMelbourne from '@/views/locations/AiDevelopmentCompanyMelbourne';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company Melbourne | Zynex Technologies',
  description:
    'AI development company Melbourne businesses trust for custom solutions. Get ROI clarity, fast deployment in 6–12 weeks. Book a free consultation.',
  path: 'https://zynextechnologies.com.au/ai-development-company-melbourne',
  canonicalpath: 'https://zynextechnologies.com.au/ai-development-company-melbourne',
});

export default function AiDevelopmentCompanyMelbournePage() {
  return <AiDevelopmentCompanyMelbourne />;
}

import AiDevelopmentCompanyMelbourne from '@/views/locations/AiDevelopmentCompanyMelbourne';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Top AI Development Company in Melbourne | Zynex Technologies',
  description:
    "Zynex Technologies is Melbourne's trusted AI development company. We build custom AI solutions with measurable ROI, from strategy to deployment in weeks. Get a free consultation.",
  path: '/ai-development-company-melbourne',
  canonicalPath: '/ai-development-company-melbourne',
});

export default function AiDevelopmentCompanyMelbournePage() {
  return <AiDevelopmentCompanyMelbourne />;
}

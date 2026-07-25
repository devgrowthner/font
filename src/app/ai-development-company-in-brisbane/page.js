import AiDevelopmentCompanyBrisbane from '@/views/locations/AiDevelopmentCompanyBrisbane';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company in Brisbane: Custom AI | Zynex Technologies',
  description:
    'AI development company in Brisbane building production-ready systems tailored to your workflows and data. Feasibility validated before build. Learn more.',
  path: '/ai-development-company-in-brisbane',
  canonicalPath: '/ai-development-company-in-brisbane',
});

export default function AiDevelopmentCompanyBrisbanePage() {
  return <AiDevelopmentCompanyBrisbane />;
}

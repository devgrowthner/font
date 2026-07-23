import AiDevelopmentCompanyConstructionBusinessesAustralia from '@/views/industrypages/AiDevelopmentCompanyConstructionBusinessesAustralia';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company for Construction Businesses in Australia | Zynex',
  description:
    'Zynex Technologies is an AI development company for construction businesses in Australia. Automate scheduling, quoting, compliance, and site workflows. Book a call.',
  path: 'https://zynextechnologies.com.au/ai-development-company-construction-businesses-australia',
  canonicalpath: 'https://zynextechnologies.com.au/ai-development-company-construction-businesses-australia',
});

export default function AiDevelopmentCompanyConstructionBusinessesAustraliaPage() {
  return <AiDevelopmentCompanyConstructionBusinessesAustralia />;
}

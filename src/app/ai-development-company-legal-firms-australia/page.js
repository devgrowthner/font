import AiDevelopmentCompanyLegalFirmsAustralia from '@/views/industrypages/AiDevelopmentCompanyLegalFirmsAustralia';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company for Legal Firms Australia | Zynex Technologies',
  description:
    'AI development company for legal firms Australia—automate document review, client intake, and compliance monitoring. Book a free discovery call today.',
  path: '/ai-development-company-legal-firms-australia',
  canonicalPath: '/ai-development-company-legal-firms-australia',
});

export default function AiDevelopmentCompanyLegalFirmsAustraliaPage() {
  return <AiDevelopmentCompanyLegalFirmsAustralia />;
}

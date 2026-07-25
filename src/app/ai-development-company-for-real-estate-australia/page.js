import AiDevelopmentCompanyForRealEstateAustralia from '@/views/industrypages/AiDevelopmentCompanyForRealEstateAustralia';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company for Real Estate Australia | Zynex Technologies',
  description:
    'AI development company for real estate Australia—capture after-hours leads, automate admin, and give agents more time to close. Book a free discovery call.',
  path: '/ai-development-company-for-real-estate-australia',
  canonicalPath: '/ai-development-company-for-real-estate-australia',
});

export default function AiDevelopmentCompanyForRealEstateAustraliaPage() {
  return <AiDevelopmentCompanyForRealEstateAustralia />;
}

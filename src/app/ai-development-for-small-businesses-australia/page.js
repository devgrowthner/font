import AiDevelopmentForSmallBusinessesAustralia from '@/views/industrypages/AiDevelopmentForSmallBusinessesAustralia';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development for Small Businesses Australia | Zynex Technologies',
  description:
    'AI development company for small businesses Australia—automate repetitive work, capture after-hours leads, and recover staff time. Live in weeks. Book a free call.',
  path: 'https://zynextechnologies.com.au/ai-development-for-small-businesses-australia',
  canonicalpath: 'https://zynextechnologies.com.au/ai-development-for-small-businesses-australia',
});

export default function AiDevelopmentForSmallBusinessesAustraliaPage() {
  return <AiDevelopmentForSmallBusinessesAustralia />;
}

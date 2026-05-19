import AIDevelopmentCompanyDarwin from '@/views/locations/AIDevelopmentCompanyDarwin';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company in Darwin | Zynex Technologies',
  description:
    'AI development company in Darwin that delivers custom AI systems in 3 to 6 weeks. Get a free feasibility assessment with clear pricing from day one. Start now.',
  path: '/ai-development-company-darwin',
  canonicalPath: '/ai-development-company-darwin',
});

export default function AIDevelopmentCompanyDarwinPage() {
  return <AIDevelopmentCompanyDarwin />;
}

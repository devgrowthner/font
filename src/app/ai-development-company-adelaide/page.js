import AIDevelopmentCompanyAdelaide from '@/views/locations/AIDevelopmentCompanyAdelaide';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company Adelaide | Zynex Technologies',
  description:
    'Zynex Technologies builds custom AI systems, automation tools, and machine learning models for Adelaide businesses. From feasibility to production in 3–6 weeks. Book a free discovery call.',
  path: '/ai-development-company-adelaide',
  canonicalPath: '/ai-development-company-adelaide',
});

export default function AIDevelopmentCompanyAdelaidePage() {
  return <AIDevelopmentCompanyAdelaide />;
}


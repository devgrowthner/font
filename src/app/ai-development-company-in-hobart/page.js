import AiDevelopmentCompanyHobart from '@/views/locations/AiDevelopmentCompanyHobart';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company in Hobart | Zynex Technologies',
  description:
    "Zynex Technologies is Hobart's leading AI development company. We build custom AI solutions with measurable ROI—from strategy to deployment in weeks. Get a free consultation today.",
  path: '/ai-development-company-in-hobart',
  canonicalPath: '/ai-development-company-in-hobart',
});

export default function AiDevelopmentCompanyHobartPage() {
  return <AiDevelopmentCompanyHobart />;
}

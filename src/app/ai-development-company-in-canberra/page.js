import AIDevelopmentCompanyCanberra from '@/views/locations/AIDevelopmentCompanyCanberra';
import { buildPageMetadata } from '@/lib/seo';
import ServiceSchema from '@/components/ServiceSchema';

export const metadata = buildPageMetadata({
  title: 'AI Development Company in Canberra | Zynex Technologies',
  description:
    'AI development company in Canberra delivering custom AI, automation, and ML services with 3x average ROI. Privacy Act compliant. Start your feasibility analysis.',
  path: '/ai-development-company-in-canberra',
  canonicalPath: '/ai-development-company-in-canberra',
});

export default function AIDevelopmentCompanyCanberraPage() {
  return (
    <>
      <ServiceSchema path="/ai-development-company-in-canberra" />
      <AIDevelopmentCompanyCanberra />
    </>
  );
}

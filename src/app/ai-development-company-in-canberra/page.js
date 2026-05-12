import AIDevelopmentCompanyCanberra from '@/views/locations/AIDevelopmentCompanyCanberra';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company in Canberra | Zynex Technologies',
  description:
    'AI Development Company in Canberra delivering Custom AI, Automation, and Machine Learning Services. Book your AI Feasibility Analysis today.',
  path: '/ai-development-company-in-canberra',
  canonicalPath: '/ai-development-company-in-canberra',
});

export default function AIDevelopmentCompanyCanberraPage() {
  return <AIDevelopmentCompanyCanberra />;
}

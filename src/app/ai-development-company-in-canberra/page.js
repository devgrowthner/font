import AIDevelopmentCompanyCanberra from '@/views/AIDevelopmentCompanyCanberra';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Development Company in Canberra | Zynex Technologies',
  description:
    'Zynex Technologies is Canberra\'s trusted AI development company. We deliver Custom AI Development, AI Automation, and Machine Learning Services. Start with an AI Feasibility Analysis today.',
  path: '/ai-development-company-in-canberra',
  canonicalPath: '/ai-development-canberra',
});

export default function AIDevelopmentCompanyCanberraPage() {
  return <AIDevelopmentCompanyCanberra />;
}

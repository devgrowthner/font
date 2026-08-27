import AIDevelopmentCompanyGoldCoast from '@/views/locations/AIDevelopmentCompanyGoldCoast';
import { buildPageMetadata } from '@/lib/seo';
import ServiceSchema from '@/components/ServiceSchema';

export const metadata = buildPageMetadata({
  title: 'AI Development Gold Coast | Custom AI Solutions | Zynex Technologies',
  description:
    'AI development Gold Coast businesses trust for custom AI, automation, and ML services. ROI validated before build, strategy to deployment in weeks. Learn more.',
  path: '/ai-development-gold-coast',
  canonicalPath: '/ai-development-gold-coast',
});

export default function Page() {
  return (
    <>
      <ServiceSchema path="/ai-development-gold-coast" />
      <AIDevelopmentCompanyGoldCoast />
    </>
  );
}

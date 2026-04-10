import AiDevelopmentCompanyBrisbane from '@/views/AiDevelopmentCompanyBrisbane';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Leading AI Development Company in Brisbane | Zynex Technologies',
  description:
    "Zynex Technologies is Brisbane's leading AI Development Company. We build custom AI, chatbot, and agentic AI solutions that deliver 3x ROI. Get a free consultation.",
  path: '/ai-development-company-in-brisbane',
  canonicalPath: '/ai-development-brisbane',
});

export default function AiDevelopmentCompanyBrisbanePage() {
  return <AiDevelopmentCompanyBrisbane />;
}

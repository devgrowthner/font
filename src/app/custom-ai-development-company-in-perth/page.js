import CustomAIDevelopmentCompanyPerth from '@/views/locations/CustomAIDevelopmentCompanyPerth';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Custom AI Development Company in Perth | Zynex Technologies',
  description:
    "Zynex Technologies is Perth's leading custom AI development company. Chatbot, computer vision, agentic AI and more. Deploy in 6-12 weeks. Get a free strategy session.",
  path: '/custom-ai-development-company-in-perth',
  canonicalPath: '/custom-ai-development-company-in-perth',
});

export default function CustomAIDevelopmentCompanyPerthPage() {
  return <CustomAIDevelopmentCompanyPerth />;
}


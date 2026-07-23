import CustomAIDevelopmentCompanyPerth from '@/views/locations/CustomAIDevelopmentCompanyPerth';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Custom AI Development Company in Perth | Zynex Technologies',
  description:
    'Custom AI development company in Perth with proven 3x ROI. Chatbots, computer vision, agentic AI feasibility validated before build. Book a free session.',
  path: 'https://zynextechnologies.com.au/custom-ai-development-company-in-perth',
  canonicalpath: 'https://zynextechnologies.com.au/custom-ai-development-company-in-perth',
});

export default function CustomAIDevelopmentCompanyPerthPage() {
  return <CustomAIDevelopmentCompanyPerth />;
}


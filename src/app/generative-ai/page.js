import GenerativeAI from '@/views/GenerativeAI';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Generative AI Development Company and Services in Australia',
  description:
    'Looking for a Generative AI Development Company in Australia? We build custom AI solutions to automate workflows, create content, and scale your business.',
  path: 'https://zynextechnologies.com.au/generative-ai',
});

export default function GenerativeAIPage() {
  return <GenerativeAI />;
}

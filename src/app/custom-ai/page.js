import CustomAI from '@/pages/CustomAI';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Custom AI Development Company in Australia | Zynex Technologies',
  description:
    'Looking for a custom AI development company in Australia? Zynex Technologies builds AI automation, machine learning solutions, and tailored AI systems for businesses.',
  path: '/custom-ai',
});

export default function CustomAIPage() {
  return <CustomAI />;
}

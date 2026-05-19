import CustomAI from '@/views/CustomAI';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Custom AI Development Solutions | Zynex Technologies',
  description:
    'Custom AI development built for your business. We deliver machine learning, automation, and AI chatbots tailored to your operations. Get started.',
  path: '/custom-ai',
});

export default function CustomAIPage() {
  return <CustomAI />;
}

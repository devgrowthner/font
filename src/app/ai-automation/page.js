import AIAutomation from '@/views/services/AIAutomation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Automation Company in Australia | Zynex Technologies',
  description:
    'AI automation built for Australian businesses. Streamline workflows, reduce costs, and improve accuracy with custom-built intelligent systems. Get started.',
  path: '/ai-automation',
});

export default function AIAutomationPage() {
  return <AIAutomation />;
}

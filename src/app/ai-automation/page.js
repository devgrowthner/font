import AIAutomation from '@/views/services/AIAutomation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Automation Company in Australia | AI Workflow Solutions',
  description:
    'AI automation company in Australia helping businesses automate workflows, data processing, chatbots, and document management to improve efficiency and reduce costs.',
  path: '/ai-automation',
});

export default function AIAutomationPage() {
  return <AIAutomation />;
}

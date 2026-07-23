import AgenticAI from '@/views/AgenticAI';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Agentic AI Development Company in Australia',
  description:
    'Leading Agentic AI Development Company in Australia offering custom autonomous AI agents and intelligent automation solutions for modern businesses.',
  path: 'https://zynextechnologies.com.au/agentic-ai',
});

export default function AgenticAIPage() {
  return <AgenticAI />;
}

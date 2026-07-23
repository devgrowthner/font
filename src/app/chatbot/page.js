import Chatbot from '@/views/Chatbot';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Chatbot Development Company and Solutions in Australia',
  description:
    'Looking for a chatbot development company in Australia? We build AI-powered chatbot solutions that improve support, automate tasks, and drive growth.',
  path: 'https://zynextechnologies.com.au/chatbot',
});

export default function ChatbotPage() {
  return <Chatbot />;
}

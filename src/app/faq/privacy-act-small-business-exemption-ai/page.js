import FAQArticle from '@/components/FAQArticle';
import { buildPageMetadata } from '@/lib/seo';
import { faqContent } from './content';
export const metadata = buildPageMetadata({ title: faqContent.metaTitle, description: faqContent.metaDescription, path: '/faq/privacy-act-small-business-exemption-ai' });
export default function PrivacyActSmallBusinessFAQ() {
  return <FAQArticle content={faqContent} image="/ai-security-hero.webp" imageAlt="AI security and privacy protection" eyebrow="AI privacy guide" />;
}

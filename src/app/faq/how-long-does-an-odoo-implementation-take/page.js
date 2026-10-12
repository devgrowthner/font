import FAQArticle from '@/components/FAQArticle';
import { buildPageMetadata } from '@/lib/seo';
import { faqContent } from './content';
export const metadata = buildPageMetadata({ title: faqContent.metaTitle, description: faqContent.metaDescription, path: '/faq/how-long-does-an-odoo-implementation-take' });
export default function OdooImplementationTimelineFAQ() {
  return <FAQArticle content={faqContent} image="/odoo/oddo.png" imageAlt="Business team reviewing an Odoo ERP dashboard" eyebrow="Odoo implementation guide" />;
}

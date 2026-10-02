import Home from '@/views/Home';
import { buildPageMetadata } from '@/lib/seo';
import { homeLocalBusinessSchema } from '@/lib/homeLocalBusinessSchema';

export const metadata = buildPageMetadata({
  title: 'ERP, AI Automation & AI Security Company Melbourne | Zynex Technologies',
  description:
    'AI-powered ERP for Australian SMBs. Melbourne team implementing Odoo, SAP, Salesforce and Zoho with AI automation built in and AI security.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeLocalBusinessSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Home />
    </>
  );
}

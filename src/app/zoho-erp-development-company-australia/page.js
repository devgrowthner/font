import ZohoErpDevelopment from '@/views/erpservices/ZohoErpDevelopment';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Zoho ERP Development & Implementation Company Australia | Zynex Technologies',
  description:
    "Zynex Technologies is Australia's specialist Zoho ERP development and implementation company. AI-enhanced deployments for SMBs. Free ERP Readiness Review.",
  path: 'https://zynextechnologies.com.au/zoho-erp-development-company-australia',
});

export default function ZohoErpDevelopmentPage() {
  return <ZohoErpDevelopment />;
}

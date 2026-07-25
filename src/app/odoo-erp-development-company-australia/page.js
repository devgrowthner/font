import OdooErpDevelopment from '@/views/industrypages/OdooErpDevelopment';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Odoo ERP Development & Implementation Company Australia | Zynex Technologies',
  description:
    "Zynex Technologies is Australia's specialist Odoo ERP development and implementation company. AI-enhanced deployments for SMBs. Free ERP Readiness Review.",
  path: '/odoo-erp-development-company-australia',
});

export default function OdooDevelopmentPage() {
  return <OdooErpDevelopment />;
}

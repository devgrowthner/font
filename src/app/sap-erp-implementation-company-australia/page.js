import SapErpImplementation from '@/views/erpservices/SapErpImplementation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'SAP ERP Implementation Company Australia | Zynex Technologies',
  description:
    "Zynex Technologies is an SAP ERP implementation partner helping Australian businesses modernise operations with AI-powered ERP strategy, deployment and support.",
  path: '/sap-erp-implementation-company-australia',
});

export default function SapErpImplementationPage() {
  return <SapErpImplementation />;
}

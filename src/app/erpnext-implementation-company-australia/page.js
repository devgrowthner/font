import ErpNextImplementation from '@/views/erpservices/ErpNextImplementation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'ERPNext Implementation Company in Australia | Zynex Technologies',
  description:
    "Zynex Technologies is Australia's specialist ERPNext implementation company. AI-enhanced deployments for SMBs and mid-market businesses. Free ERP Readiness Review.",
  path: 'https://zynextechnologies.com.au/erpnext-implementation-company-australia',
});

export default function ErpNextImplementationPage() {
  return <ErpNextImplementation />;
}

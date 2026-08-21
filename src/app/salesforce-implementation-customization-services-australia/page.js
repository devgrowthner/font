import SalesforceImplementation from '@/views/salesforce/SalesforceImplementation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Salesforce Implementation & Customization in Australia | Zynex Technologies',
  description: 'Salesforce implementation and customisation for Australian businesses. AI-enabled Sales, Service and Field Service builds. Book a readiness review.',
  path: '/salesforce-implementation-services-australia',
});

export default function SalesforceImplementationPage() {
  return <SalesforceImplementation />;
}

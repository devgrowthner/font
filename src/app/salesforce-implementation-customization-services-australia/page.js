import SalesforceImplementation from '@/views/salesforce/SalesforceImplementation';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Salesforce Implementation & Customization Services Australia | Zynex Technologies',
  description: 'Zynex builds and customizes Salesforce for Australian businesses, with AI-led automation baked in. Get a working system in weeks, not months. Book a call.',
  path: '/salesforce-implementation-customization-services-australia',
});

export default function SalesforceImplementationPage() {
  return <SalesforceImplementation />;
}

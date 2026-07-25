import WhiteLabelPartner from '@/views/WhiteLabelPartner';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'White Label Software Development Partner | Zynex Technologies',
  description:
    'Looking for a White Label Software Development Partner? Zynex Technologies helps agencies deliver AI, ERP, automation, and custom software under their own brand without hiring an in-house team.',
  path: '/white-label-software-development-partner',
});

export default function WhiteLabelPartnerPage() {
  return <WhiteLabelPartner />;
}

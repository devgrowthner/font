import LearnMore from '@/views/LearnMore';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Zynex Technologies – Custom IT & Web Solutions Australia',
  description:
    'Zynex Technologies delivers custom websites, SEO & digital solutions tailored for Australian businesses. Learn more about who we are & what we do.',
  path: '/what-is-zynex',
});

export default function WhatIsZynexPage() {
  return <LearnMore />;
}

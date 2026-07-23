import AboutUs from '@/views/AboutUs';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'About Zynex Technologies | AI & ERP Development Company Australia',
  description: 'Zynex Technologies is an AI and ERP innovation partner based in Melbourne, helping Australian businesses move from AI curiosity to measurable results.',
  path: 'https://zynextechnologies.com.au/about-us',
});

export default function AboutUsPage() {
  return <AboutUs />;
}

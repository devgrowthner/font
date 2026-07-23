import AiSolutionHospitalityBusinessesAustralia from '@/views/industrypages/AiSolutionHospitalityBusinessesAustralia';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Solution for Hospitality Businesses in Australia | Zynex Technologies',
  description:
    'AI solution for hospitality businesses in Australia by Zynex captures more bookings, handles after-hours enquiries, and reduces staff pressure. Book a discovery call.',
  path: 'https://zynextechnologies.com.au/ai-solution-hospitality-businesses-australia',
  canonicalpath: 'https://zynextechnologies.com.au/ai-solution-hospitality-businesses-australia',
});

export default function AiSolutionHospitalityBusinessesAustraliaPage() {
  return <AiSolutionHospitalityBusinessesAustralia />;
}

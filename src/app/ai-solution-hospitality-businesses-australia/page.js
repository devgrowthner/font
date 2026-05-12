import AiSolutionHospitalityBusinessesAustralia from '@/views/industrypages/AiSolutionHospitalityBusinessesAustralia';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Solution for Hospitality Businesses in Australia | Zynex',
  description:
    'AI solution for hospitality businesses in Australia by Zynex captures more bookings, handles after-hours enquiries, and reduces staff pressure. Book a discovery call.',
  path: '/ai-solution-hospitality-businesses-australia',
  canonicalPath: '/ai-solution-hospitality-businesses-australia',
});

export default function AiSolutionHospitalityBusinessesAustraliaPage() {
  return <AiSolutionHospitalityBusinessesAustralia />;
}

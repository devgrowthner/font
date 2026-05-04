import AiSolutionHealthcareClinicsAustralia from '@/views/AiSolutionHealthcareClinicsAustralia';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Solution for Healthcare Clinics in Australia | Zynex',
  description:
    'AI solution for healthcare clinics in Australia that cuts admin load, captures every patient enquiry, and automates intake workflows. Book a discovery call.',
  path: '/ai-solution-healthcare-clinics-australia',
  canonicalPath: '/ai-solution-healthcare-clinics-australia',
});

export default function AiSolutionHealthcareClinicsAustraliaPage() {
  return <AiSolutionHealthcareClinicsAustralia />;
}

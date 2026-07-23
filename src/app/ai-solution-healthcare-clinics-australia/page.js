import AiSolutionHealthcareClinicsAustralia from '@/views/industrypages/AiSolutionHealthcareClinicsAustralia';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Solution for Healthcare Clinics in Australia | Zynex Technologies',
  description:
    'AI solution for healthcare clinics in Australia that cuts admin load, captures every patient enquiry, and automates intake workflows. Book a discovery call.',
  path: 'https://zynextechnologies.com.au/ai-solution-healthcare-clinics-australia',
  canonicalpath: 'https://zynextechnologies.com.au/ai-solution-healthcare-clinics-australia',
});

export default function AiSolutionHealthcareClinicsAustraliaPage() {
  return <AiSolutionHealthcareClinicsAustralia />;
}

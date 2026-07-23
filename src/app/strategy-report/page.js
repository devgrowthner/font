import StrategyReport from '@/views/services/StrategyReport';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI-Driven Competitive Strategy Report | Zynex',
  description:
    'AI-driven competitive strategy reports that reveal market gaps, threats & growth opportunities. Get your free strategy report today.',
  path: 'https://zynextechnologies.com.au/strategy-report',
});

export default function StrategyReportPage() {
  return <StrategyReport />;
}

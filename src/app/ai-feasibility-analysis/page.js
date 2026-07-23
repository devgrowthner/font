import AIFeasibilityAnalysis from '@/views/services/AIFeasibilityAnalysis';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Feasibility Analysis Company in Australia | Zynex Technologies',
  description:
    'AI feasibility analysis that assesses data readiness, ROI, and technical fit before you invest. Make smarter AI decisions with Zynex Technologies. Learn more.',
  path: 'https://zynextechnologies.com.au/ai-feasibility-analysis',
});

export default function AIFeasibilityAnalysisPage() {
  return <AIFeasibilityAnalysis />;
}

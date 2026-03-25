import AIFeasibilityAnalysis from '@/pages/AIFeasibilityAnalysis';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'AI Feasibility Analysis Company in Australia | AI Consulting',
  description:
    'Assess whether AI is right for your business. Our AI feasibility analysis in Australia evaluates data readiness, technical setup, ROI potential, and project risks.',
  path: '/ai-feasibility-analysis',
});

export default function AIFeasibilityAnalysisPage() {
  return <AIFeasibilityAnalysis />;
}

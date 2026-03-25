import RecommendationEngine from '@/pages/RecommendationEngine';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Top Recommendation Engine Development Company in Australia',
  description:
    'Looking for the best Recommendation Engine Development Company in Australia? We deliver custom, high-performing AI recommendation solutions that boost engagement and revenue.',
  path: '/recommendation-engine',
});

export default function RecommendationEnginePage() {
  return <RecommendationEngine />;
}

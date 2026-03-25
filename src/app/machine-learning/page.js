import MachineLearning from '@/pages/MachineLearning';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Machine Learning Development Services in Australia',
  description:
    'Explore expert machine learning development services in Australia. Build custom ML solutions to automate workflows, improve decisions, and scale faster.',
  path: '/machine-learning',
});

export default function MachineLearningPage() {
  return <MachineLearning />;
}

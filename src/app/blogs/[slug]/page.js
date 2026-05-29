import BlogTemplate from '@/views/BlogTemplate';
import BlogDetailTemplate from '@/views/blogs/BlogDetailTemplate';
import { blogContents } from '@/constants/blogData';
import { buildPageMetadata } from '@/lib/seo';

// Slugs that use BlogDetailTemplate
const DETAIL_TEMPLATE_SLUGS = [
  'when-should-business-invest-ai-automation',
  'ai-workflow-automation-business-efficiency',
  'ai-feasibility-analysis-why-every-business-needs-it',
  'ai-feasibility-study-businesses-first',
  'custom-ai-solutions-vs-off-the-shelf-ai-tools',
  'how-to-choose-an-ai-development-company-in-australia',
  'nemoclaw-implementation-guide-businesses',
  'openclaw-implementation-guide-businesses',
  '10-business-processes-to-automate-with-ai',
  'ai-automation-for-businesses-australia',
  'ai-use-cases-for-small-businesses',
  'ai-implementation-guide-for-businesses',
  'cost-of-ai-development-for-businesses-in-australia',
  'ai-software-development-lifecycle-guide',
  'ai-security-risk-management-safe-systems',
  'artificial-intelligence-solutions-for-business',
  'reduce-cost-using-ai-automation',
  'business-automation-using-ai',
  'ai-implementation-services-strategy-execution',
  'best-ai-companies-australia-2026',
  'ai-development-construction-businesses-australia',
  'australian-construction-companies-ai-win-tenders',
  'ai-solution-healthcare-clinics-australia-admin',
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogData = blogContents[slug];

  return buildPageMetadata({
    title: blogData?.metaTitle || 'Blog | Zynex Technologies',
    description:
      blogData?.metaDescription ||
      'Discover AI insights and solutions from Zynex Technologies.',
    path: `/blogs/${slug}`,
  });
}

export default async function BlogTemplatePage({ params }) {
  const { slug } = await params;

  if (DETAIL_TEMPLATE_SLUGS.includes(slug)) {
    return <BlogDetailTemplate />;
  }

  return <BlogTemplate />;
}

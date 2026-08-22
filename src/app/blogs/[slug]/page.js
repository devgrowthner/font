import BlogTemplate from '@/views/BlogTemplate';
import BlogDetailTemplate from '@/views/blogs/BlogDetailTemplate';
import { blogContents } from '@/constants/blogData';
import { buildPageMetadata } from '@/lib/seo';

// Slugs that use BlogDetailTemplate
const DETAIL_TEMPLATE_SLUGS = [
  'erp-food-manufacturing-compliance-traceability',
  'how-to-choose-odoo-consultant-australia',
  'top-salesforce-implementation-companies-australia',
  'erp-implementation-construction-companies-australia',
  'erp-supply-chain-warehouse-management',
  'erp-retail-australia-inventory-sales',
  'manufacturing-erp-implementation-challenges',
  'erpnext-implementation-manufacturing',
  'odoo-implementation-guide-australia',
  'migrate-spreadsheets-to-erp-system',
  'what-does-an-erp-implementation-include',
  'salesforce-implementation-small-business',
  'integrate-erp-crm-software',
  'erp-implementation-process-guide',
  'erp-implementation-australia-guide',
  'how-to-choose-erp-implementation-partner-australia',
  'erpnext-vs-zoho-erp-comparison',
  'odoo-vs-erpnext-comparison',
  'odoo-vs-zoho',
  'when-should-business-invest-ai-automation',
  'ai-workflow-automation-business-efficiency',
  'ai-feasibility-analysis-why-every-business-needs-it',
  'ai-feasibility-study-businesses-first',
  'custom-ai-solutions-vs-off-the-shelf-ai-tools',
  'how-to-choose-an-ai-development-company-in-australia',
  'nemoclaw-implementation-guide-businesses',
  'openclaw-implementation-guide-businesses',
  'business-processes-to-automate-with-ai',
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
  'best-ai-development-companies-in-australia',
  'best-odoo-development-companies-australia',
  'odoo-erp-implementation-cost-australia',
  'odoo-customization-services',
  'odoo-business-process-automation',
  'ai-development-construction-businesses-australia',
  'australian-construction-companies-ai-win-tenders',
  'how-australian-clinics-cut-admin-work-with-ai',
  'ai-gp-clinics-missed-bookings-front-desk',
  'how-australian-property-managers-ai-tenant-requests-faster',
  'how-ai-helps-australian-real-estate-agencies-win-after-hours-leads',
  'how-ai-reservation-systems-help-australian-restaurants-stop-losing-after-hours-bookings',
  'what-is-ai-for-hospitality-businesses-in-australia-and-how-does-it-actually-work',
  'best-erpnext-implementation-companies-australia',
  'best-zoho-erp-implementation-companies-australia',
  'white-label-erp-development-australia',
  'zoho-erp-software-business-efficiency',
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

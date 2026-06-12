/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ai-development-canberra',
        destination: '/ai-development-company-in-canberra',
        permanent: true,
      },
      {
        source: '/blogs/best-ai-companies-australia-2026',
        destination: '/blogs/best-ai-development-companies-in-australia',
        permanent: true,
      },
      {
        source: '/blogs/10-business-processes-to-automate-with-ai',
        destination: '/blogs/business-automation-using-ai',
        permanent: true,
      },
      {
        source: '/blogs/ai-solution-healthcare-clinics-australia-admin',
        destination: '/ai-solution-healthcare-clinics-australia',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

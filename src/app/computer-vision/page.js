import ComputerVision from '@/views/ComputerVision';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Computer Vision Development Company Australia',
  description:
    'Leading Computer Vision Development Company Australia delivering AI-powered vision solutions for automation, analytics, and real-time image processing.',
  path: 'https://zynextechnologies.com.au/computer-vision',
});

export default function ComputerVisionPage() {
  return <ComputerVision />;
}

'use client';

/**
 * Common Next.js Patterns and Examples
 * Replace your React Router code with these Next.js equivalents
 */

// ============================================
// 1. NAVIGATION
// ============================================

// Using Router (for programmatic navigation)
import { useRouter } from 'next/navigation';

export function NavigationExample() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/dashboard')}>
      Go to Dashboard
    </button>
  );
}

// Using Link Component (preferred for regular links)
import Link from 'next/link';

export function LinkExample() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/solutions">Solutions</Link>
    </nav>
  );
}

// ============================================
// 2. GET URL PARAMETERS
// ============================================

import { useParams } from 'next/navigation';

export function DynamicRouteExample() {
  const params = useParams();
  const slug = params.slug; // for /blogs/[slug]

  return <div>Blog Post: {slug}</div>;
}

// In page.js file directly:
export default function BlogPage({ params }) {
  return <div>Blog Post: {params.slug}</div>;
}

// ============================================
// 3. GET QUERY PARAMETERS
// ============================================

import { useSearchParams } from 'next/navigation';

export function SearchExample() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const sort = searchParams.get('sort');

  return (
    <div>
      Page: {page}, Sort: {sort}
    </div>
  );
}

// URL: /blogs?page=2&sort=recent

// ============================================
// 4. CHECK CURRENT ROUTE
// ============================================

import { usePathname } from 'next/navigation';

export function HeaderExample() {
  const pathname = usePathname();

  const hideHeaderOn = ['/login', '/dashboard', '/payment'];
  const shouldHideHeader = hideHeaderOn.includes(pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <main>Content</main>
    </>
  );
}

// ============================================
// 5. REDIRECT AFTER ACTION
// ============================================

export function FormWithRedirectExample() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit form
    const res = await fetch('/api/login', { method: 'POST' });

    if (res.ok) {
      // Redirect after successful submission
      router.push('/dashboard');
    }
  };

  return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
}

// ============================================
// 6. REDIRECT CONDITIONALLY IN COMPONENT
// ============================================

export function ProtectedPageExample() {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = 'useState'(false);

  'useEffect'(() => {
    if (!isAuthed) {
      router.push('/login');
    }
  }, [isAuthed, router]);

  return isAuthed ? <Dashboard /> : null;
}

// ============================================
// 7. CONTEXT API (Still works great!)
// ============================================

import { useLoader } from '@/context/LoaderContext';

export function LoaderExample() {
  const { visible, message, showLoader, hideLoader } = useLoader();

  const handleAction = async () => {
    showLoader('Processing...');

    // Do something async
    await new Promise((resolve) => setTimeout(resolve, 2000));

    hideLoader();
  };

  return (
    <div>
      <button onClick={handleAction}>Start Process</button>
      {visible && <p>{message}</p>}
    </div>
  );
}

// ============================================
// 8. DYNAMIC ROUTE WITH MULTIPLE PARAMS
// ============================================

// File structure:
// src/app/blog/[year]/[month]/[slug]/page.js

export default function ArticlePage({ params }) {
  const { year, month, slug } = params;
  return (
    <div>
      Article: {slug} from {month}/{year}
    </div>
  );
}

// Accessible at:
// /blog/2024/03/my-article

// ============================================
// 9. CATCH-ALL ROUTES
// ============================================

// File: src/app/docs/[...slug]/page.js

export default function DocPage({ params }) {
  // params.slug will be an array
  // /docs/getting-started → ['getting-started']
  // /docs/guide/setup → ['guide', 'setup']

  const breadcrumb = params.slug.join(' / ');
  return <div>Docs: {breadcrumb}</div>;
}

// ============================================
// 10. OPTIONAL CATCH-ALL ROUTES
// ============================================

// File: src/app/blog/[[...slug]]/page.js

export default function BlogPage({ params }) {
  if (!params.slug || params.slug.length === 0) {
    return <div>All Blog Posts</div>;
  }

  return <div>Blog Post: {params.slug.join('/')}</div>;
}

// /blog → shows all posts
// /blog/2024/my-post → shows specific post

// ============================================
// 11. PREFETCHING LINKS
// ============================================

export function PrefetchExample() {
  return (
    <Link href="/dashboard" prefetch={true}>
      Dashboard (preloaded)
    </Link>
  );
}

// ============================================
// 12. CUSTOM 404 PAGE
// ============================================

// File: src/app/not-found.js

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back home</Link>
    </div>
  );
}

// ============================================
// 13. LAYOUT PATTERNS
// ============================================

// Nested layouts work automatically!
// src/app/layout.js (applies to all pages)
// src/app/dashboard/layout.js (applies only to /dashboard/*)

// File: src/app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardSidebar />
      <main>{children}</main>
    </div>
  );
}

// ============================================
// 14. MIGRATION: React Router → Next.js
// ============================================

/*
BEFORE (React Router):
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

AFTER (Next.js):
import { usePathname, useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
(No need for BrowserRouter, Routes, Route - file-based routing!)
*/

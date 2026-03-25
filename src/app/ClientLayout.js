'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderProvider } from '@/context/LoaderContext';
import Header from '@/components/Header';
import AuthHeader from '@/auth/AuthHeader';
import PageLoader from '@/components/PageLoader';
import ScrollToTop from '@/components/ScrollToTop';
import { usePathname } from 'next/navigation';
import { useLoader } from '@/context/LoaderContext';

const GlobalLoader = () => {
  const { visible, message } = useLoader();
  return <PageLoader visible={visible} message={message} />;
};

function LayoutContent({ children }) {
  const pathname = usePathname();

  const hideHeaderOn = [
    '/login',
    '/change-password',
    '/payment',
    '/payment-success',
    '/b2b/payment-success',
    '/b2b/payment-failure',
    '/payment-failure',
    '/dashboard',
    '/forgot-password',
    '/reset-password',
  ];

  const authHeaderOn = [
    '/change-password',
    '/payment',
    '/b2b/payment-success',
    '/b2b/payment-failure',
    '/dashboard',
  ];

  const shouldHideHeader = hideHeaderOn.includes(pathname);
  const shouldShowAuthHeader = authHeaderOn.includes(pathname);

  return (
    <>
      <GlobalLoader />
      {shouldShowAuthHeader && <AuthHeader />}
      {!shouldHideHeader && <Header />}
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default function ClientLayout({ children }) {
  return (
    <LoaderProvider>
      <ScrollToTop />
      <LayoutContent>{children}</LayoutContent>
    </LoaderProvider>
  );
}
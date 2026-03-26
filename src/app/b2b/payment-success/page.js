'use client';

import { Suspense } from 'react';
import PaymentSuccess from '@/auth/PaymentSuccess';

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={null}>
      <PaymentSuccess />
    </Suspense>
  );
}

'use client';

import { Suspense } from 'react';
import PaymentFailure from '@/auth/PaymentFailure';

export default function PaymentFailurePage() {
  return (
    <Suspense fallback={null}>
      <PaymentFailure />
    </Suspense>
  );
}

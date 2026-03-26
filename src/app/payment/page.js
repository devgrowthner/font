'use client';

import { Suspense } from 'react';
import Payment from '@/auth/Payment';

export const dynamic = 'force-dynamic';

export default function PaymentPage() {
  return (
    <Suspense fallback={null}>
      <Payment />
    </Suspense>
  );
}

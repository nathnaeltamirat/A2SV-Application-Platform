

import ResetPasswordUI from '@/components/auth/ResetPasswordUi';
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordUI />
    </Suspense>
  );
}

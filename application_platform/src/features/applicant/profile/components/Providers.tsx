'use client'; // ✅ This makes it a Client Component

import { store } from '@/lib/redux/store';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

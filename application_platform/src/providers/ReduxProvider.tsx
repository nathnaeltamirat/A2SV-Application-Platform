'use client'; // 👈 this marks it as a client component

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/features/admin/store'; // adjust path

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

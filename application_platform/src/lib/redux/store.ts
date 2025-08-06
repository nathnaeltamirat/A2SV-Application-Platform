// lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { profileApi } from './api/profileApi';

export const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
});

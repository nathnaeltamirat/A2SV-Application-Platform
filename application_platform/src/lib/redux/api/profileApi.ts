// lib/redux/api/profileApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://a2sv-application-platform-backend-team9.onrender.com',
    prepareHeaders: (headers) => {
  const devToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MjJiMWMzMS01ODA4LTQyMTktYWU4My1jM2ZmNWIzNWZjZTQiLCJleHAiOjE3NTQ0NjQyODcsInR5cGUiOiJhY2Nlc3MifQ.TtRd43lkxDM5Ll2x7qU2V9OBeeN3aOCvp_4fFm15fBs'

  headers.set('Authorization', `Bearer ${devToken}`);
  return headers;
},

  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => '/profile/me',
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: '/profile/me',
        method: 'POST',
        body: data,
      }),
    }),
    
changePassword: builder.mutation<any, { old_password: string; new_password: string }>({
  query: (body) => ({
    url: '/profile/me/change-password',
    method: 'PATCH',
    body,
  }),
}),

  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = profileApi;

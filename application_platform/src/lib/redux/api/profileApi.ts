// lib/redux/api/profileApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://a2sv-application-platform-backend-team9.onrender.com',
    prepareHeaders: (headers) => {
  const devToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YTk0NjMwNC05ZjYxLTQyNzQtODgyZS1lMGQ2Y2Q5NDAxM2QiLCJleHAiOjE3NTQ2NTE3MzIsInR5cGUiOiJhY2Nlc3MifQ.ovvkVl0TDBRGnYbp1GPZWSmmPLNKvc6f91bwoEPWkTc'

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
        method: 'PUT',
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

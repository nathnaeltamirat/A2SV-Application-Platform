// lib/redux/api/profileApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-application-platform-backend-team9.onrender.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/profile/me",
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/profile/me",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),

    changePassword: builder.mutation<
      any,
      { old_password: string; new_password: string }
    >({
      query: (body) => ({
        url: "/profile/me/change-password",
        method: "PATCH",
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

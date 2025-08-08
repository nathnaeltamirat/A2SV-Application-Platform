import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ApiUser {
  id: string;
  full_name: string;
  email: string;
  role: string;
}

interface ApiResponse {
  success: boolean;
  data: {
    users?: ApiUser[];
    items?: ApiUser[];
    total_count: number;
    page: number;
    limit: number;
  };
  message: string;
}

interface DeleteResponse {
  success: boolean;
  data: null;
  message: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-application-platform-backend-team9.onrender.com/",
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("accessToken");
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      // const token =
      //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNWI2Yjk1NS1iYjY5LTRhNGItYmE5Ny1kYWFlNzJiNTQ4YzAiLCJleHAiOjE3NTQ2Mzg5ODYsInR5cGUiOiJhY2Nlc3MifQ.b4kiJVSwlW49yqMiwdU-DdThGCUR-fpoNWXhdFTvS-I"; // your token
      // if (token) {
      //   headers.set("Authorization", token);
      // }
      // return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<
      { users: ApiUser[]; total_count: number; page: number; limit: number },
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => ({
        url: "admin/users",
        method: "GET",
        params: { page, limit },
      }),
      transformResponse: (response: ApiResponse) => ({
        users: response.data.users || response.data.items || [],
        total_count: response.data.total_count,
        page: response.data.page,
        limit: response.data.limit,
      }),
    }),
    deleteUser: builder.mutation<DeleteResponse, { user_id: string }>({
      query: ({ user_id }) => ({
        url: `admin/users/${user_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetUsersQuery, useDeleteUserMutation } = userApi;

import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "/users/all",
        method: "GET",
      }),
      providesTags: ["AllUsers"],
    }),

    getUser: builder.query({
      query: () => ({
        url: "/users/one",
        method: "GET",
      }),
      providesTags: ["GetUser"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetUserQuery,
  useLazyGetAllUserQuery,
  useLazyGetUserQuery,
} = userApi;

export const {
  endpoints: { getAllUser, getUser },
} = userApi;

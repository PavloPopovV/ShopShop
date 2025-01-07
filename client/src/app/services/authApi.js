import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (authData) => ({
        url: "/users/registration",
        method: "POST",
        body: authData,
      }),
      providesTags: ["Registration"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.token) {
            localStorage.setItem("token", data.token);
          }
        } catch (err) {
          console.error('Failed to save token:', err);
        }
      },
    }),

    login: builder.mutation({
      query: (loginData) => ({
        url: "/users/login",
        method: "POST",
        body: loginData,
      }),
      providesTags: ["Login"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.token) {
            localStorage.setItem("token", data.token);
          }
        } catch (err) {
          console.error('Failed to save token:', err);
        }
      },
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation  } = authApi;
export const {
  endpoints: { registration, login },
} = authApi;

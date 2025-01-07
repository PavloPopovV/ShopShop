import { api } from "./api";

export const favouriteApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFavourite: builder.query({
      query: () => ({
        url: "/favourite",
        method: "GET",
      }),
      providesTags: ["GetFavourite"],
    }),
    addFavouriteProduct: builder.mutation({
      query: (productId) => ({
        url: "/favourite",
        method: "PUT",
        body: {productId}
      }),
      providesTags: ["AddFavouriteProduct"],
    }),
    deleteFavouriteProduct: builder.mutation({
      query: (favoutireProductId) => ({
        url: `/favourite/${favoutireProductId}`,
        method: "DELETE",
      }),
      providesTags: ["DeleteFavouriteProduct"],
    }),
  }),
});

export const {
  useGetFavouriteQuery,
  useAddFavouriteProductMutation,
  useDeleteFavouriteProductMutation,
  useLazyGetFavouriteQuery,
} = favouriteApi;

export const {
  endpoints: { getFavourite, addFavouriteProduct, deleteFavouriteProduct },
} = favouriteApi;

import { api } from "./api";

export const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["GetCart"],
    }),

    addCartProduct: builder.mutation({
      query: (productId) => ({
        url: "/cart",
        method: "PUT",
        body: {productId},
      }),
      providesTags: ["AddCartProduct"],
    }),

    deleteCartProduct: builder.mutation({
      query: (cartProductId) => ({
        url: `/cart/${cartProductId}`,
        method: "DELETE",
      }),
      providesTags: ["DeleteCartProduct"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddCartProductMutation,
  useDeleteCartProductMutation,
  useLazyGetCartQuery,
} = cartApi;

export const {
  endpoints: { getCart, addCartProduct, deleteCartProduct },
} = cartApi;

import { api } from "./api";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productData) => ({
        url: "/product",
        method: "POST",
        body: productData,
      }),
      provideTags: ["ProductsCreate"],
    }),

    getProducts: builder.query({
      query: ({
        categoryId = "",
        title = "",
        min_price = "",
        max_price = "",
      }) => ({
        url: `/product?categoryId=${categoryId}&title=${title}&min_price=${min_price}&max_price=${max_price}`,
        method: "GET",
      }),

      provideTags: ["ProductsAll"],
    }),

    getProductById: builder.query({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "GET",
      }),
      provideTags: ["ProductsSingle"],
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "DELETE",
      }),
      provideTags: ["ProductsDelete"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useLazyGetProductsQuery,
  useLazyGetProductByIdQuery,
} = productsApi;

export const {
  endpoints: { createProduct, getProducts, getProductById, deleteProduct },
} = productsApi;

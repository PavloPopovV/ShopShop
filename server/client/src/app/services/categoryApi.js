import { api } from "./api";

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["GetCategories"],
    }),

    addCategory: builder.mutation({
      query: (categoryData) => ({
        url: "/category",
        method: "POST",
        body: categoryData,
      }),
      providesTags: ["AddCategory"],
    }),
    
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/category/${categoryId}`,
        method: "DELETE",
      }),
      providesTags: ["DeleteCategory"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useLazyGetCategoriesQuery,
} = categoryApi;
export const {
  endpoints: { getCategories, addCategory, deleteCategory },
} = categoryApi;

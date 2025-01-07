import { useForm } from "react-hook-form";
import {
  useDeleteCategoryMutation,
  useLazyGetCategoriesQuery,
  useGetCategoriesQuery,
} from "../app/services/categoryApi";

export const useDeleteCategory = () => {
  const { data = {}, isLoading } = useGetCategoriesQuery(); 
  const [deleteCategory] = useDeleteCategoryMutation();
  const [getCategories] = useLazyGetCategoriesQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      categoryId: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      await deleteCategory(formData.categoryId).unwrap();
      await getCategories(); 
    } catch (err) {
      console.log(err);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    categoriesList: data.categories || [], 
    onSubmit,
  };
};
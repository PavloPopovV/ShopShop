import { useForm } from "react-hook-form";
import {
  useAddCategoryMutation,
  useLazyGetCategoriesQuery,
} from "../app/services/categoryApi";

export const useCreateCategory = () => {
    const [addCategory] = useAddCategoryMutation();
    const [getCategories] = useLazyGetCategoriesQuery();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      mode: "onBlur",
      defaultValues: {
        title: "",
      },
    });
  
    const onSubmit = async (data) => {
      try {
        await addCategory(data).unwrap();
        await getCategories(); 
        reset();
      } catch (err) {
        console.log(err);
      }
    };
  
    return {
      register,
      handleSubmit,
      errors,
      onSubmit,
    };
  };
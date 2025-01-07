import { useForm } from "react-hook-form";
import {
  useLazyGetProductsQuery,
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../app/services/productsApi";

export const useDeleteProductForm = (categoryId) => {
  const { data, isLoading } = useGetProductsQuery({ categoryId });
  const [deleteProduct] = useDeleteProductMutation();
  const [getProducts] = useLazyGetProductsQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      product: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await deleteProduct(data.product).unwrap();
      await getProducts({ categoryId });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    products: data?.products || [],
    onSubmit,
  };
};

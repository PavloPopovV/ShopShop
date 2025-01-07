// useCreateProductForm.js
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateProductMutation, useLazyGetProductsQuery } from "../app/services/productsApi";
import { useGetCategoriesQuery } from "../app/services/categoryApi";

export const useCreateProductForm = ({categoryId}) => {
  const [createProduct] = useCreateProductMutation();
  const { data, isLoading } = useGetCategoriesQuery();
  const [triggerGetProducts] = useLazyGetProductsQuery();
  const [images, setImages] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("categoryId", data.categoryId);

    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    await createProduct(formData);
    await triggerGetProducts({categoryId})
    reset();
    setImages([]);
  };

  const handleImageChange = (event) => {
    setImages([...event.target.files]);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    handleImageChange,
    images,
    isLoading,
    categoryList: data?.categories || [],
  };
};

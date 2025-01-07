import React from "react";
import Button from "../../ui/Button";

import { useDeleteProductForm } from "../../hooks/useDeleteProduct";

export default function DeleteProduct({ categoryId }) {
  const {
    register,
    handleSubmit,
    errors,
    isLoading,
    products,
    onSubmit,
  } = useDeleteProductForm(categoryId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="container">
        <span>Delete Product</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="categoryId">
            <select
              name="product"
              {...register("product", {
                required: "Please select a category",
              })}
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.title}
                </option>
              ))}
            </select>
            {errors.product && <span>{errors.product.message}</span>}
          </label>
          <Button title="Delete" type="submit" />
        </form>
      </div>
    </section>
  );
}

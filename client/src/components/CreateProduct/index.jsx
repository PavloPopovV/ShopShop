import React from "react";
import { useCreateProductForm } from "../../hooks/useCreateProduct";
import Button from "../../ui/Button";
import styles from "./CreateProduct.module.css";

export default function CreateProduct({categoryId}) {
  const {
    register,
    handleSubmit,
    onSubmit,
    handleImageChange,
    isLoading,
    categoryList,
  } = useCreateProductForm({categoryId});

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="container">
        <span>Add Product</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="categoryId">Category:</label>
            <select
              id="categoryId"
              {...register("categoryId", { required: true })}
            >
              <option value="">Select a category</option>
              {categoryList.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="title">Title:</label>
            <input id="title" {...register("title", { required: true })} />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="number"
              {...register("price", { required: true })}
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              {...register("description", { required: true })}
            />
          </div>

          <div>
            <label htmlFor="images">Images:</label>
            <input
              id="images"
              type="file"
              multiple
              onChange={handleImageChange}
            />
          </div>

          <Button title="Create" type="submit" />
        </form>
      </div>
    </section>
  );
}

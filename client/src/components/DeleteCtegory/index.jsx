import React from "react";
import Button from "../../ui/Button";
import {useDeleteCategory} from '../../hooks/useDeleteCategory'
import styles from "./DeleteCategory.module.css";

export default function DeleteCategory() {
    const {
        register,
        handleSubmit,
        errors,
        isLoading,
        categoriesList,
        onSubmit,
      } = useDeleteCategory();
    
      if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="container">
        <span>Delete Category</span>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.group} htmlFor="categoryId">
            <select
              className={styles.field}
              name="categoryId"
              {...register("categoryId", {
                required: "Please select a category",
              })}
            >
              <option value="">Select a category</option>
              {categoriesList.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <span className={styles.error}>{errors.categoryId.message}</span>
            )}
          </label>
          <Button title="Delete" type="submit" />
        </form>
      </div>
    </section>
  );
}

import React from "react";
import { useCreateCategory } from "../../hooks/useCreateCategory";
import Button from "../../ui/Button";
import styles from "./CreateCategory.module.css";

export default function CreateCategory() {
  const { register, handleSubmit, errors, onSubmit } = useCreateCategory();

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <span>Add Category</span>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.group} htmlFor="title">
            <input
              className={styles.field}
              type="text"
              name="title"
              placeholder="title"
              {...register("title", {
                required: "This field cannot be empty",
              })}
            />
            {errors.title && (
              <span className={styles.error}>{errors.title.message}</span>
            )}
          </label>
          <Button title="Create" type="submit" />
        </form>
      </div>
    </section>
  );
}

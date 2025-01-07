import React from "react";
import styles from './CategoryFilters.module.css'

export default function CategoryFilters({ handleSubmit,
  handleChange,
  values, }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.group}>
        <input className={styles.field}
          type="number"
          name="min_price"
          value={values.min_price}
          onChange={handleChange}
        />
        <span>Min price</span>
      </div>
      <div className={styles.group}>
        <input className={styles.field}
        type="number"
        name="max_price"
        value={values.max_price}
        onChange={handleChange}
        />
        <span>Max price</span>
      </div>
    </form>
  );
}

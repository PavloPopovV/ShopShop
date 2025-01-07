import React, { useState } from "react";
import { useGetProductsQuery } from "../../app/services/productsApi";
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoryList from "../../components/CategoryList";
import CategoryFilters from "../../components/CategoryFilters";
import styles from "./Category.module.css";
import { useParams } from "react-router-dom";

export default function Category() {
  const [values, setValues] = useState({ min_price: "", max_price: "" });
  const categoryId = useParams();

  const handleChange = ({ target: { value, name } }) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const { data, isLoading } = useGetProductsQuery({
    categoryId: categoryId.id,
    ...values,
  });

  if (isLoading) return <div>Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <Breadcrumbs title={"Catalog"} />
        <CategoryFilters
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
        />
        <CategoryList list={data.products} />
      </div>
    </section>
  );
}

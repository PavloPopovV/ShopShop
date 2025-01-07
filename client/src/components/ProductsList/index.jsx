import React from "react";
import { useGetProductsQuery } from "../../app/services/productsApi";
import ProductCard from "../ProductCard";
import styles from "./ProductList.module.css";

export default function ProductsList({
  title,
  amount = 5,
  categoryId,
  isFiltered = false,
}) {

  const { data, isLoading } = useGetProductsQuery({categoryId});

  if (isLoading) {
    return <div>Loading...</div>;
  }


  
  let filteredData = data.products.filter((_, index) => index < amount);

  console.log(filteredData)

  if (isFiltered) {
    filteredData = data.products.filter(({ price }) => price < 100);
  }

  return (
    <section className={styles.products}>
      <div className="container">
        <span className="title">{title}</span>
        <div className={styles.box}>
          {filteredData.map((item, index) => (
            <li key={index + new Date()}>
              <ProductCard product={item} />
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}

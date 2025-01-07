import React from "react";
import { useGetProductByIdQuery } from "../../app/services/productsApi";
import ProductDetails from "../ProductDetails";

export default function SingleProduct() {
  const productId = '677d30c6f145bad3aa118806'
  const { data = {}, isLoading } = useGetProductByIdQuery(productId);
  if (isLoading) return <div>Loading...</div>;
console.log(data)
  return (
    <section>
      <div className="container">
        <span className="title">Our bestseller</span>
        <ProductDetails data={data.product}/>
      </div>
    </section>
  );
}

import React from "react";
import ProductsList from "../../components/ProductsList";
import SingleProduct from "../../components/SingleProduct";

export default function Home() {
  return (
    <div>
      <ProductsList title=" New Products" />
      <SingleProduct />
      <ProductsList title=" Less than 100$" isFiltered={true}/>
    </div>
  );
}

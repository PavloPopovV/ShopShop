import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../app/services/productsApi";
import ProductDetails from "../../components/ProductDetails";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductsList from "../../components/ProductsList";

export default function Product() {
  const { id } = useParams();
  const { data = {}, isLoading } = useGetProductByIdQuery(id);
  if (isLoading) return <div>Loading...</div>;
  console.log(data)
  const { title, categoryId } = data.product;

  return (
    <section>
      <div className="container">
        <Breadcrumbs title={title} />
        <ProductDetails data={data.product} />
        <ProductsList title="Releated products" categoryId={categoryId} />
      </div>
    </section>
  );
}

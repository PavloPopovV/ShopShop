import React from "react";
import CreateCategory from "../../components/CreateCategory";
import CreateProduct from "../../components/CreateProduct";
import DeleteCategory from "../../components/DeleteCtegory";
import DeleteProduct from "../../components/DeleteProduct";

export default function Admin() {
  return (
    <>
      <span className="title">Category</span>
      <CreateCategory />
      <DeleteCategory />
      <span className="title">Product</span>
      <CreateProduct />
      <DeleteProduct />
    </>
  );
}

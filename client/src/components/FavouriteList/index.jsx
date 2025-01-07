import React from "react";
import AddCard from "../AddCard";
import {
  useDeleteFavouriteProductMutation,
  useLazyGetFavouriteQuery,
} from "../../app/services/favouriteApi";
import styles from "./FavouriteList.module.css";

export default function FavouriteList({ list }) {
  const [triggerGetAllProducts] = useLazyGetFavouriteQuery();
  const [deleteFavouriteProduct] = useDeleteFavouriteProductMutation();

  const handleDelete = async (productId) => {
    try {
      await deleteFavouriteProduct(productId).unwrap();
      triggerGetAllProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className={styles.list}>
      {list.map((item, index) => (
        <li key={index + new Date()}>
          <AddCard
            item={item}
            handleDelete={handleDelete}
            customStyles={styles.wrapper}
          />
        </li>
      ))}
    </ul>
  );
}

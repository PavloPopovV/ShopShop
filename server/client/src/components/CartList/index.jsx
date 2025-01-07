import React from "react";
import AddCard from "../AddCard";
import { useDeleteCartProductMutation, useLazyGetCartQuery } from "../../app/services/cartApi";
import styles from "./CartList.module.css";

export default function CartList({ list }) {
  const [triggerGetAllCart] = useLazyGetCartQuery(); 
  const [deleteCartProduct] = useDeleteCartProductMutation(); 
  
  const handleDelete = async (productId) => {
    try { 
      await deleteCartProduct(productId).unwrap();
      triggerGetAllCart()
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <ul className={styles.list}>
      {list.map((item) => (
          <li key={item._id}>
            <AddCard
              item={item}
              handleDelete={handleDelete}
              customStyles={styles.cart}
            />
          </li>
        ))}
    </ul>
  );
}

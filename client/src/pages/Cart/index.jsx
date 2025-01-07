import React from "react";
import { useGetCartQuery } from "../../app/services/cartApi";
import CartList from "../../components/CartList";
import CartForm from "../../components/CartForm";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Cart.module.css";

export default function Cart() {
  const { data: cartData, isLoading } = useGetCartQuery();

  if (isLoading) return <div>Loading...</div>;
  const productsList = cartData.cart;

  const totalPrice = productsList.reduce((accum, current) => {
    return accum + current.price;
  }, 0);

  return (
    <section>
      <div className="container">
        <Breadcrumbs title="Cart" />
        <h1 className="title">Cart</h1>
        {productsList.length ? (
          <div className={styles.wrapper}>
            <CartList list={productsList} />
            <CartForm price={totalPrice} />
          </div>
        ) : (
          <span>Add some products...</span>
        )}
      </div>
    </section>
  );
}

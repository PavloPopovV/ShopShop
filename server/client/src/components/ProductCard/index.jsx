import React from "react";
import { Link } from "react-router-dom";
import styles from './ProductCard.module.css';
import { SERVER_URL } from "../../constantes/url";

export default function ProductCard({ product }) {
  const { _id, images, title, price } = product;

  return (
    <Link to={`/products/${_id}`}>
      <img src={`${SERVER_URL(false)}${images[0]}`} alt="photo" className={styles.img} />
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{price.toFixed(2)}$</span>
    </Link>
  );
}

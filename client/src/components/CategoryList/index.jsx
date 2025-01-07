import React from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../constantes/url";
import styles from "./CategoryList.module.css";

export default function CategoryList({list}) {

  return (
    <ul className={styles.list}>
      {list.map(({ _id, title, price, images }) => (
        <li key={_id}>
          <Link to={`/products/${_id}`}>
            <img src={`${SERVER_URL(false)}${images[0]}`} alt="products" />
            <span>{title}</span>
            <span>{price.toFixed(2)}$</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

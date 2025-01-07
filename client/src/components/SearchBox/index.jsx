import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchBox.module.css";
import { SERVER_URL } from "../../constantes/url";

export default function SearchBox({ list, clearSearch  }) {
  return (
    <ul style={{ width: "500px" }} className={styles.wrapper}>
      {list.map(({ title, images, _id, price }) => (
        <li key={_id}>
          <Link to={`products/${_id}`} className={styles.box} onClick={clearSearch }>
            <div className={styles.info}>
              <img className={styles.image} src={`${SERVER_URL(false)}${images[0]}`} alt="photo" />
              <div>
                <span>{title}</span>
              </div>
            </div>
            <span>{price}$</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

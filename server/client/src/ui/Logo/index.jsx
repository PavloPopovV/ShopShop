import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constantes/routes";
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link to={ROUTES.HOME}>
      <h1 className={styles.logo}>ShopShop</h1>
    </Link>
  );
}

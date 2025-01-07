import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { ROUTES } from "../../constantes/routes";
import styles from './Navigation.module.css'

export default function Navigation() {

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink to={ROUTES.CART} aria-label="Basket Products">
            <FontAwesomeIcon icon={faBasketShopping} />
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.FAVOURITE} aria-label="Favourite Products">
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.AUTH} aria-label="Auth">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </li> 
      </ul>
    </nav>
  );
}

import React from "react";
import Logo from "../../ui/Logo";
import Navigation from "../Navigation";
import Search from "../Search";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <section className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.box}>
          <Search />
          <Navigation />
        </div>
      </div>
    </section>
  );
}

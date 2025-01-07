import React from "react";
import Logo from "../../ui/Logo";
import Navigation from "../Navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.box}>
          <Logo />
          <Navigation />
        </div>
        <span className={styles.developer}>Developed by Pavlo Popov</span>
      </div>
    </section>
  );
}

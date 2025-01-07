import React from "react";
import styles from './Button.module.css'

export default function Button({ title, type = "button" , onClickFn, isLoading}) {
  return <button className={styles.btn} type={type} onClick={onClickFn}>{isLoading ? 'Loading...' : title}</button>;
}

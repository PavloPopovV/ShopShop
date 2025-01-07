import React from 'react'
import { Link} from "react-router-dom";
import { ROUTES } from "../../constantes/routes";
import styles from './Breadcrumbs.module.css'

export default function Breadcrumbs({title}) {
  return (
    <div className={styles.wrapper}>
    <Link className={styles.link} to={ROUTES.HOME}>
      Home
    </Link>
    <span className={styles.title}>{title}</span>
  </div>
  )
}

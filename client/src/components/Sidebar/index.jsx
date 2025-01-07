import React from "react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../app/services/categoryApi";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { data = [], isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const list = data.categories.filter((_, index) => index < 5);

  return (
    <ul className={styles.list}>
      {list.map(({ title, _id }) => (
        <li key={_id} className={styles.btn}>
          <Link to={`/categories/${_id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

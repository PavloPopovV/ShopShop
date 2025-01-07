import React from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../constantes/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AddCard({ item, handleDelete, customStyles }) {


  return (
    <div className={customStyles}>
      <Link to={`/products/${item._id}`}>
        <img src={`${SERVER_URL(false)}${item.images[0]}`} alt="photo" />
        <div>
          <span>{item.title}</span>
          <span>{item.description}</span>
        </div>

        <p>{item.price.toFixed(2)}$</p>
      </Link>
      <button onClick={() => handleDelete(item._id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

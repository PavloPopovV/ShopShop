import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../../constantes/url";
import styles from "./ProductDetails.module.css";
import Buttons from "../Buttons";

const ProductDetails = ({ data }) => {

  const {images = [], title, price, description, _id} = data;
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    if (images.length > 0) setCurrentImage(images[0]);
  }, [images]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.img_box}>
        <img
          className={styles.big}
          src={`${SERVER_URL(false)}${currentImage}`}
          alt="Current photo"
        />
        <div className={styles.small_img}>
          {images.map((item, index) => (
            <img
              className={styles.small}
              key={index}
              src={`${SERVER_URL(false)}${item}`}
              alt={item}
              onClick={() => setCurrentImage(item)}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{title}</h1>
        <span className={styles.price}>{price ? price.toFixed(2) : 0.0}$</span>
        <div className={styles.text}>
          <p>{description}</p>
        </div>
        <div className={styles.list}>
          <Buttons productId={_id}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";
import { useAddToCollection } from "../../hooks/useAddToCollection";
import Button from "../../ui/Button";

export default function Buttons({ productId }) {

  const { handleToCollection, isFavouriteLoading, isCartLoading } =
    useAddToCollection();

  const handleOnClick = (type) => {
    handleToCollection(type, productId);
  };

  return (
    <>
      <Button
        title="Add to Cart"
        onClickFn={() => handleOnClick("cart")}
        isLoading={isCartLoading}
      />
      <Button
        title="Add to Favourite"
        onClickFn={() => handleOnClick("favourite")}
        isLoading={isFavouriteLoading}
      />
    </>
  );
}

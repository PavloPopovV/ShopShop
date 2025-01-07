import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddCartProductMutation } from "../app/services/cartApi";
import { useAddFavouriteProductMutation } from "../app/services/favouriteApi";
import { selectAuth } from "../app/selectors/userSelector";
import { ROUTES } from "../constantes/routes";

export const useAddToCollection = () => {
  const [addToCart, { isLoading: isCartLoading }] = useAddCartProductMutation();
  const [addToFavourite, { isLoading: isFavouriteLoading }] = useAddFavouriteProductMutation();

  const navigate = useNavigate();
  const isAuth = useSelector(selectAuth);
  
  const handleToCollection = async (type, productId) => {
    console.log(productId)
    if (isAuth) {
      try {
        type === "favourite"
          ? await addToFavourite(productId).unwrap()
          : await addToCart(productId).unwrap();
      } catch (err) {
        console.log("Failed to add product", err);
      }
    } else {
      navigate(ROUTES.AUTH);
    }
  };

  return { handleToCollection, isCartLoading, isFavouriteLoading };
};

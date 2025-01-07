import React from "react";
import FavouriteList from "../../components/FavouriteList";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useGetFavouriteQuery } from "../../app/services/favouriteApi";

export default function Favourite() {
  const {data, isLoading} = useGetFavouriteQuery()
  
  if (isLoading) return <div>Loading...</div>;
  const favouriteProducts = data.products

  return (
    <section>
      <div className="container">
      <Breadcrumbs title='Favourite'/>
      <h1 className="title">Favourite</h1>
      
        {favouriteProducts.length ? (
          <FavouriteList list ={favouriteProducts} />
        ) : (
          <span>Add some products...</span>
        )}
      </div>
    </section>
  );
}

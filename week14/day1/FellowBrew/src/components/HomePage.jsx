import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./partials/ItemCard";
import { store } from "./store";

const Home = () => {
  const products = useSelector((store) => store.products);
  console.log(products);
  const featured = [];

  const getFeatured = (obj) => {
    obj.map((item) => {
      if (item.featured === true) {
        featured.push(item);
      }
    });
  };
  getFeatured(products);

  return (
    <div className="home">
      <div className="homeTop">
        <h1>Fellow Brew</h1>
        <div className="homeSplash">
          <img src="/splash.png" alt="splash" />
        </div>
      </div>
      <div className="featuredDiv">
        <h1>Brew with the best</h1>
        <div className="featuredProducts">
          {featured.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

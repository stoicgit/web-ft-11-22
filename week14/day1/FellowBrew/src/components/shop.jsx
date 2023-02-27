import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./partials/ItemCard";

const Shop = () => {
  const products = useSelector((store) => store.products);
  console.log(products);
  const Cups = [];
  const Kettles = [];
  const Beans = [];

  const getKettles = (obj) => {
    obj.map((item) => {
      if (item.type === "Kettles") {
        paddles.push(item);
      }
    });
  };

  const getCups = (obj) => {
    obj.map((item) => {
      if (item.type === "Cups") {
        balls.push(item);
      }
    });
  };
  };
  getCups(products);
  getKettles(products);
  getCoffee(products);
  return (
    <div className="shop">
      <div className="sectionDiv">
        <h1 className="sectionTitle">Cups</h1>
        <div className="sectionProducts">
          {paddles.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
      <div className="sectionDiv">
        <h1 className="sectionTitle">Kettles</h1>
        <div className="sectionProducts">
          {balls.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
      <div className="sectionDiv">
        <h1 className="sectionTitle">Beans</h1>
        <div className="sectionProducts">
          {clothing.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

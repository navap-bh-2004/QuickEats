import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";

const FoodDisplay = ({ category, Ftype }) => {
  const { food_list } = useContext(StoreContext);

  console.log(Ftype);

  return (
    <div className="food-display" id="food-display">
      <h2>
        {
          "Indulge in the top-rated dishes near you, crafted to delight your taste buds!"
        }
      </h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (
            (category === "All" || category === item.category) &&
            (Ftype === "All" || Ftype === item.type)
          ) {
            return (
              <FoodItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
                type={item.type}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

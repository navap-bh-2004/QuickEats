import React, { useContext } from "react";
import "./VegType.css";

const VegType = ({ Ftype, setFType }) => {
  const FoodTypes = ["All", "veg", "nonveg"];

  const LinksImage = [
    "src/assets/variety.png",
    "src/assets/veg.png",
    "src/assets/nonveg.png",
  ];

  return (
    <div className="explore-menu" id="explore-menu">
      <div className="explore-menu-list">
        {FoodTypes.map((item, index) => {
          return (
            <div
              onClick={() => setFType((prev) => (prev === item ? "All" : item))}
              key={index}
              className="explore-menu-list-item"
            >
              <div className="myImag">
                <img
                  src={LinksImage[index]}
                  className={Ftype === item ? "active" : ""}
                  alt=""
                  height={150}
                  width={150}
                />
              </div>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default VegType;

import React from "react";

export const Tile = ({name, desription}) => {
  return (
    <div className="tile-container">

      <p className="tile-title" >{name} </p>

      {Object.values(desription).map((value, index) => {
        <p className="tile-title" key={index}>{value}</p>
      })}      
    </div>
  );
};

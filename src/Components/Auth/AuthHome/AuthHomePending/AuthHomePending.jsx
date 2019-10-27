import React from "react";
import styles from "./AuthHomePending.scss";

//WORK ON THIS ONCE BACKEND IS CONNECTED
const Item = function(props) {
  console.log("PROPS", props);
  return (
    <div>
      <div>Name: {props.name}</div>

      <div>Description: {props.description}</div>

      <div>Price: {props.price}</div>

      <div>Condition: {props.condition}</div>
    </div>
  );
};

export default Item;

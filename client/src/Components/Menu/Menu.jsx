//import liraries
import React from "react";
import { useLocation } from "react-router";
import Icon from "./Icon/Icon";
import "./Menu.scss";

// create a component named Home
let Menu = () => {
  const location = useLocation();
  console.log("Menu", location.pathname);

  if (location.pathname !== "auth")
    return (
      <div className="menu">
        <Icon
          type="home"
          active={location.pathname.includes("home") ? true : false}
        />
        <Icon
          type="printers"
          active={location.pathname.includes("printers") ? true : false}
        />
        <Icon
          type="parts"
          active={
            location.pathname.includes("rau/parts") ||
            location.pathname.includes("rhu/parts")
              ? true
              : false
          }
        />
        <Icon
          type="settings"
          active={location.pathname.includes("settings") ? true : false}
        />
      </div>
    );
  else return <div></div>;
};

/**
 *      STOCK Link
 * 
        <Icon
          type="stock"
          active={location.pathname.includes("stock") ? true : false}
        />
 */

//make this component available to the app
export default Menu;

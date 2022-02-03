//import liraries
import React from "react";
import { Field } from "redux-form";
import "./SearchFilter.scss";
import Checkbox from "../Checkbox/Checkbox";

// create a component named SearchFilter
const SearchFilter = ({ name, value }) => {
  return (
    <div className="search-filter">
      <Checkbox
        name="Only me"
        first={true}
        labelStyle={{ fontSize: "80%" }}
        boxStyle={{ width: "0.8em", height: "0.8em" }}
      />
      <Checkbox
        name="Unassigned"
        first={true}
        labelStyle={{ fontSize: "80%" }}
        boxStyle={{ width: "0.8em", height: "0.8em" }}
      />
      <Checkbox
        name="Inactive"
        first={true}
        labelStyle={{ fontSize: "80%" }}
        boxStyle={{ width: "0.8em", height: "0.8em" }}
      />
      <Checkbox
        name="Done"
        first={true}
        labelStyle={{ fontSize: "80%" }}
        boxStyle={{ width: "0.8em", height: "0.8em" }}
      />
    </div>
  );
};

//make this component available to the app
export default SearchFilter;

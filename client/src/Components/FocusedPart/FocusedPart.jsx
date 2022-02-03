//import liraries
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { getRegion } from "../../Controller/Helper";
import BasicComp from "../BasicComp/BasicComp";
import "./FocusedPart.scss";

const part = {
  name: "Toner Bw",
  pieces: "5",
};

const printers = [
  {
    name: "MPC 301",
    partno: "D125",
    pieces: "",
    disabled: true,
  },
  {
    name: "MPC 201",
    partno: "D125",
    pieces: "",
    disabled: true,
  },
];

// create a component named FocusedPart
const FocusedPart = () => {
  const history = useHistory();
  const { partno } = useParams();
  const region = getRegion();

  const handleBack = () => history.goBack();

  let parts;
  /*for (let i = 0; i < pieces; i++) {
    const item = {
      name,
      partno,
      pieces: "W916P102425",
      disabled: true,
    };

    parts.push(item);
  }*/

  if (region === "rau") {
    parts = useSelector((state) => state.parts.rau);
  } else if (region === "rhu") {
    parts = useSelector((state) => state.parts.rhu);
  }

  let name, pieces;
  console.log(parts);
  for (let i in parts) {
    const part = parts[i];
    if (part.product_number === partno) {
      name = part.name;
      pieces = part.pieces;
    }
  }

  //const { name, pieces } = part;

  return (
    <div className="mid-comp focused-part">
      <div className="back" onClick={handleBack}>
        ◄
      </div>
      <div className="title">
        <h1>{name}</h1>
        <p>{partno}</p>
        <p>{pieces}</p>
      </div>
      <BasicComp
        name="In Stock"
        type="list"
        content={parts}
        orient="left"
        style={{ marginTop: "2rem" }}
      />
      <BasicComp
        name="Connected printers"
        type="list"
        content={printers}
        orient="left"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      />
    </div>
  );
};

//make this component available to the app
export default FocusedPart;

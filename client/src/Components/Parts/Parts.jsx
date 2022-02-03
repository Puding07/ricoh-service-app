//import liraries
import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import "./Parts.scss";
import Exit from "../Exit/Exit";
import Part from "../Part/Part";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import AddPopup from "../AddPopup/AddPopup";
import { getRegion } from "../../Controller/Helper";
import SearchField from "../SearchField/SearchField";
import { sendPayload } from "../../Redux/actions/Payload";

const PartsList = (props) => {
  const { parts } = props;
  const menuState = useSelector((state) => state.menu);
  const { windowSize } = menuState;

  /*
  let parts = [];

  for (let i in partsState) {
    parts.push(partsState[i]);
  }
  */

  const actions = bindActionCreators({ sendPayload }, useDispatch());

  let doit;

  document.querySelector("body").onresize = (e) => {
    clearTimeout(doit);

    doit = setTimeout(resizedWidth(e.target.outerWidth), 100);
  };

  const resizedWidth = (width) => {
    actions.sendPayload("resize", width);
  };

  let listContents = [];

  for (let index in parts) {
    const item = parts[index];

    const { _id, name, product_number, pieces } = item;

    listContents.push(
      <Part
        key={_id}
        counter={Number(index) + 1}
        name={name}
        partno={product_number}
        pieces={pieces}
        disabled={false}
      />
    );
  }

  return (
    <div
      className="list-items"
      style={{
        flexWrap: windowSize > "1500" ? "wrap" : "nowrap",
        flexDirection: windowSize > "1500" ? "row" : "column",
        justifyContent: windowSize > "1500" ? "center" : "start",
      }}
    >
      {listContents}
    </div>
  );
};

// create a component named Parts
const Parts = () => {
  const [add, setAdd] = useState(false);
  const rauParts = useSelector((state) => state.parts.rau);
  const rhuParts = useSelector((state) => state.parts.rhu);

  const history = useHistory();

  const region = getRegion();

  return (
    <Fragment>
      <Menu />
      <div className="mid-comp parts">
        <SearchField label="Keresés" />
        <div className="buttons">
          <Button type="add" onClick={() => setAdd(!add)} />
          <Button
            type="RAU"
            inactive={region === "rau" ? false : true}
            onClick={() => history.replace("/rau/parts")}
          />
          <Button
            type="RHU"
            inactive={region === "rhu" ? false : true}
            onClick={() => history.replace("/rhu/parts")}
          />
        </div>
        <PartsList parts={region === "rhu" ? rhuParts : rauParts} />
        {add && (
          <Exit close={() => setAdd(false)}>
            <AddPopup
              title="Nyomtató hozzáadása"
              tag={"Cikkszám"}
              close={() => setAdd(false)}
            />
          </Exit>
        )}
      </div>
    </Fragment>
  );
};

//make this component available to the app
export default Parts;

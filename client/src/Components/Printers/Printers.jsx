//import liraries
import React, { Fragment, useState } from "react";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Printers.scss";
import Menu from "../Menu/Menu";
import Exit from "../Exit/Exit";
import Button from "../Button/Button";
import AddPopup from "../AddPopup/AddPopup";
import ListItem from "../ListItem/ListItem";
import { getRegion } from "../../Controller/Helper";
import SearchField from "../SearchField/SearchField";
import { sendPayload } from "../../Redux/actions/Payload";

const PopulateItems = ({ printers }) => {
  let listItems = [];
  for (let i in printers) {
    listItems.push(
      <ListItem
        key={printers[i]._id}
        name={printers[i].type}
        serial={printers[i].serial}
        status={printers[i].status}
        user={printers[i].user}
        alert={printers[i].sideState}
        level={printers[i].difficulty}
        _id={printers[i]._id}
        clickable={true}
      />
    );
  }
  return listItems;
};

// create a component named Printers
let Printers = () => {
  const history = useHistory();
  const [add, setAdd] = useState(false);
  //const [region, setRegion] = useState(false); // false = RAU true = RHU
  const menuState = useSelector((state) => state.menu);
  const rauPrinters = useSelector((state) => state.printers.rau);
  const rhuPrinters = useSelector((state) => state.printers.rhu);
  const defaultPrinters = useSelector((state) => state.printers.printers);
  const { windowSize } = menuState;

  const region = getRegion();

  const actions = bindActionCreators({ sendPayload }, useDispatch());

  let doit;
  document.querySelector("body").onresize = (e) => {
    clearTimeout(doit);

    doit = setTimeout(resizedWidth(e.target.outerWidth), 100);
  };

  const resizedWidth = (width) => {
    actions.sendPayload("resize", width);
  };

  return (
    <Fragment>
      <Menu />
      <div className="mid-comp printers">
        <SearchField label="Keresés" />
        <div className="buttons">
          <Button type="add" onClick={() => setAdd(!add)} />
          <Button
            type="RAU"
            inactive={region === "rau" ? false : true}
            onClick={() => history.replace("/rau/printers")}
          />
          <Button
            type="custom"
            inactive={region === "printers" ? false : true}
            onClick={() => history.replace("/printers")}
          />
          <Button
            type="RHU"
            inactive={region === "rhu" ? false : true}
            onClick={() => history.replace("/rhu/printers")}
          />
        </div>
        {add && (
          <Exit close={() => setAdd(false)}>
            <AddPopup
              title="Nyomtató hozzáadása"
              tag={"Sorozatszám"}
              close={() => setAdd(false)}
            />
          </Exit>
        )}
        <div
          className="printer-items"
          style={{
            flexWrap: windowSize > "1500" ? "wrap" : "nowrap",
            flexDirection: windowSize > "1500" ? "row" : "column",
            justifyContent: windowSize > "1500" ? "center" : "start",
          }}
        >
          {region !== "printers" && (
            <PopulateItems
              printers={region === "rhu" ? rhuPrinters : rauPrinters}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

//make this component available to the app
export default Printers;

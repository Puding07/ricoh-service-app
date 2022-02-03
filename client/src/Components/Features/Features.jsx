//import liraries
import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Features.scss";

// create a component named Features
const Features = ({ disabled, items }) => {
  const {
    documentFeeder,
    duplex,
    paperBank,
    bypass,
    sortingTray,
    largeCapacityTray,
    puncher,
    printerScanner,
    fax,
    wheeledTable,
    ps,
    faxTray,
    java,
    fiery,
  } = items;
  return (
    <div className="features">
      <Checkbox
        name="DF"
        first={true}
        up={true}
        checked={documentFeeder}
        disabled={disabled}
      />
      <Checkbox
        name="Dx"
        first={true}
        up={true}
        checked={duplex}
        disabled={disabled}
      />
      <Checkbox
        name="PB"
        first={true}
        up={true}
        checked={paperBank}
        disabled={disabled}
      />
      <Checkbox
        name="By"
        first={true}
        up={true}
        checked={bypass}
        disabled={disabled}
      />
      <Checkbox
        name="ST"
        first={true}
        up={true}
        checked={sortingTray}
        disabled={disabled}
      />
      <Checkbox
        name="LCT"
        first={true}
        up={true}
        checked={largeCapacityTray}
        disabled={disabled}
      />
      <Checkbox
        name="Pun"
        first={true}
        up={true}
        checked={puncher}
        disabled={disabled}
      />
      <Checkbox
        name="Pr/Sc"
        first={true}
        up={true}
        checked={printerScanner}
        disabled={disabled}
      />
      <Checkbox
        name="Fax"
        first={true}
        up={true}
        checked={fax}
        disabled={disabled}
      />
      <Checkbox
        name="WT"
        first={true}
        up={true}
        checked={wheeledTable}
        disabled={disabled}
      />
      <Checkbox
        name="PS"
        first={true}
        up={true}
        checked={ps}
        disabled={disabled}
      />
      <Checkbox
        name="FaT"
        first={true}
        up={true}
        checked={faxTray}
        disabled={disabled}
      />
      <Checkbox
        name="Java"
        first={true}
        up={true}
        checked={java}
        disabled={disabled}
      />
      <Checkbox
        name="Fiery"
        first={true}
        up={true}
        checked={fiery}
        disabled={disabled}
      />
    </div>
  );
};

//make this component available to the app
export default Features;

//import liraries
import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import "./AddPopup.scss";

// create a component named AddPopup
const AddPopup = (props) => {
  const { title, tag, close, options } = props;

  const type = useRef(null);
  const serial = useRef(null);

  const handleAdd = () => {
    console.log("Típus: ", type.current.value);
    console.log("Gyári szám: ", serial.current.value);
  };

  return (
    <div className="addPopup">
      <div className="close" onClick={() => close()}>
        x
      </div>
      <div className="title">{title}</div>
      <div className="serial">
        <InputField label="Típus" state={type} />
        <datalist id="printers"></datalist>
      </div>
      <div>
        <InputField label={tag} state={serial} />
      </div>
      <div>
        <Button type="add" onClick={() => handleAdd()} />
      </div>
    </div>
  );
};

//make this component available to the app
export default AddPopup;

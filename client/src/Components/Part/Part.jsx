//import liraries
import React, { useState } from "react";
import "./Part.scss";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { sendPayload } from "../../Redux/actions/Payload";
import ItemButton from "../ItemButton/ItemButton";

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

// create a component named Parts
const Part = (props) => {
  const {
    counter,
    _id,
    name,
    partno,
    pieces,
    status,
    disabled,
    partStatus,
    action,
  } = props;
  const history = useHistory();
  const [edit, setEdit] = useState(false);

  const actions = bindActionCreators({ sendPayload }, useDispatch());

  const handleCLick = () => {
    actions.sendPayload("open", _id);

    const thirdSlash = getPosition(window.location.href, "/", 3);

    const link =
      window.location.href.slice(thirdSlash, window.location.href.length) +
      `/${partno}`;

    history.push(link);
  };

  return (
    <div
      className={`part${disabled ? " disabled-part" : ""}${
        status ? " statused" : " nonstatused"
      }`}
      onClick={() => !disabled && handleCLick()}
      key={counter}
    >
      <ItemButton
        style={{
          backgroundColor: "#ff0000",
          top: "1rem",
          left: "-0.7rem",
        }}
        type="delete"
      />
      <div className="item counter">
        <p>{counter}</p>
      </div>
      <div className="item">
        <p>{name}</p>
        <p>{partno}</p>
        <p>{pieces}</p>
      </div>
      {status && (
        <div
          className={"item status"}
          onClick={() => {
            setEdit(!edit);
          }}
        >
          <p>{status}</p>
          {edit && (
            <Options
              edit={edit}
              status={status}
              partStatus={partStatus}
              action={action}
            />
          )}
        </div>
      )}
    </div>
  );
};

const Options = (props) => {
  const { status, partStatus, action } = props;
  const options = [];
  for (let i in partStatus) {
    if (status !== partStatus[i].name) {
      options.push(partStatus[i].name);
    }
  }

  const paragraphs = options.map((item) => {
    return (
      <p
        onClick={() => {
          action(item);
        }}
      >
        {item}
      </p>
    );
  });

  return <div className={"opened"}>{paragraphs}</div>;
};

//make this component available to the app
export default Part;

//import liraries
import React from "react";
import { bindActionCreators } from "redux";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./FocusedItem.scss";
import Level from "../Level/Level";
import Features from "../Features/Features";
import BasicComp from "../BasicComp/BasicComp";
import StatusIcon from "../StatusIcon/StatusIcon";
import { getRegion } from "../../Controller/Helper";
import PrinterInfo from "../PrinterInfo/PrinterInfo";
import { sendPayload } from "../../Redux/actions/Payload";

// create a component named FocusedItem
const FocusedItem = () => {
  const history = useHistory();
  const { serial } = useParams();
  const handleBack = () => history.goBack();
  const partStatus = useSelector((state) => state.parts.status);
  const actions = bindActionCreators({ sendPayload }, useDispatch());

  const region = getRegion();

  let printers;

  if (region === "rau") {
    printers = useSelector((state) => state.printers.rau);
  } else if (region === "rhu") {
    printers = useSelector((state) => state.printers.rhu);
  }

  let printer;
  for (let i in printers) {
    if (printers[i].serial === serial) {
      printer = printers[i];
    }
  }

  const {
    type,
    user,
    status,
    features,
    difficulty,
    eventLog,
    parts,
    sideState,
    startOfDoc,
    endOfDoc,
    inPrints,
    outPrints,
    trader,
    hdd,
  } = printer;

  console.log("Alkatrészek: ", parts);

  const printerInfo = {
    startOfDoc,
    endOfDoc,
    inPrints,
    outPrints,
    trader,
    status,
    hdd,
  };

  return (
    <div className="mid-comp focused-item">
      <div className="back" onClick={handleBack}>
        ◄
      </div>
      <div className="title">
        <p>{type}</p>
        <p>{serial}</p>
        <p>{user}</p>
        <StatusIcon level={sideState} />
        <Level level={difficulty} />
      </div>
      <Features items={features} disabled={true} />
      <PrinterInfo items={printerInfo} />
      <div className="printer-parts">
        <BasicComp
          name="ALkatrészek"
          type="list"
          content={parts}
          orient="left"
          disabled={true}
          partStatus={partStatus}
          action={actions.sendPayload}
        />
        <BasicComp
          name="Esemény napló"
          type="list"
          content={eventLog}
          orient="left"
          disabled={true}
        />
      </div>
      <BasicComp
        name="Komment"
        type="input"
        orient="left"
        style={{ marginTop: "2rem", marginBottom: "1rem", minHeight: "10rem" }}
      />
    </div>
  );
};

//make this component available to the app
export default FocusedItem;

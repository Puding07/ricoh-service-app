//import liraries
import React from "react";
import { Field, reduxForm } from "redux-form";
import { PRINTERS } from "../../Redux/types/Types";
import Part from "../Part/Part";
import PlusPart from "../PlusPart/PlusPart";
import "./BasicComp.scss";

const Content = ({ content, disabled, partStatus, action }) => {
  const listContents = content.map((item, index) => {
    const { name, partno, pieces, status } = item;

    if (name !== "PLUS") {
      return (
        <Part
          key={index}
          counter={index + 1}
          name={name}
          partno={partno}
          pieces={pieces}
          status={status}
          disabled={disabled}
          partStatus={partStatus}
          action={(setStatus) => {
            action(PRINTERS.rau.parts.update, { name, status: setStatus });
          }}
        />
      );
    } else {
      return <PlusPart key={index} />;
    }
  });
  return <div className="list-items">{listContents}</div>;
};

// create a component named BasicComp
let BasicComp = (props) => {
  const { name, type, content, orient, style, disabled, partStatus, action } =
    props;
  let arrayContent = [];
  for (let i in content) {
    arrayContent.push(content[i]);
  }

  arrayContent.push({ name: "PLUS" });

  return (
    <div className="basic-comp" style={style ? style : {}}>
      <h1
        style={
          orient === "left" ? { textAlign: "left" } : { textAlign: "center" }
        }
      >
        {name}
      </h1>
      {type === "list" ? (
        <Content
          content={arrayContent}
          disabled={disabled}
          partStatus={partStatus}
          action={action}
        />
      ) : (
        <Field
          className="comment"
          name="note"
          component="textarea"
          rows="7"
          placeholder="Write here anything..."
        />
      )}
    </div>
  );
};

BasicComp = reduxForm({
  form: "note",
})(BasicComp);

//make this component available to the app
export default BasicComp;

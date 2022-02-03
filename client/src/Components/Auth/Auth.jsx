import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import Checkbox from "../Checkbox/Checkbox";
import { login } from "../../Api/User";
import { setSessionItem } from "../../Storage/appStorage";
import { getPrinters } from "../../Api/Printers";
import Exit from "../Exit/Exit";
import Alert from "../Alert/Alert";

let Auth = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [pwTrans, setPwTrans] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const style = import("./Auth.scss");

  const history = useHistory();

  const handleSubmit = () => {
    const email = emailRef.current.value;
    const passw = passwordRef.current.value;

    login(email, passw).then((value) => {
      if (value.success) {
        setSessionItem("user", value.message);
        getPrinters().then(() => {
          history.go(0);
        });
      } else {
        setError(true);
        setMessage(value.message);
      }
    });
  };

  return (
    <div className="auth">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1>Ricoh Szervíz</h1>
        <input
          ref={emailRef}
          className="input_email"
          name="email"
          type="string"
          placeholder="Felhasználónév"
        />
        <div className="password-conatiner">
          <input
            ref={passwordRef}
            className="input_passw"
            name="passw"
            type={pwTrans ? "string" : "password"}
            placeholder="Jelszó"
          />
          <Checkbox
            checked={pwTrans}
            onClick={() => setPwTrans(!pwTrans)}
            name=""
          />
        </div>

        <button
          className="login"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Bejelentkezés
        </button>
      </form>
      {error && (
        <Exit close={() => setError(false)}>
          <Alert
            title="Hiba:"
            message={message}
            close={() => setError(false)}
          />
        </Exit>
      )}
    </div>
  );
};

export default Auth;

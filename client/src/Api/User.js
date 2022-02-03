import { getReq } from "./Api";
import { deleteCookie } from "../Check/Check";
export const login = async (username, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ username, password });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    credentials: "include",
    body: raw,
  };

  const uri = "/api/auth/login";

  return getReq(uri, requestOptions);
};

export const logout = async (refresh) => {
  deleteCookie();

  refresh();
};

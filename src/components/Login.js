import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  //
  const signIn = (e) => {
    // e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="./logo.jpeg" alt="" />
        <img src="" alt="" />
      </div>
      <Button onClick={signIn}>zalogowac sie !</Button>
      <p>strona nie przechowuje hasel i ciastkow</p>
    </div>
  );
}

export default Login;

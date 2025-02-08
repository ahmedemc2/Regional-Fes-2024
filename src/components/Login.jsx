import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { seConnecter } from "../Redux/store";

function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      userName: userRef.current.value,
      password: passRef.current.value,
    };
    dispatch(seConnecter(dataUser));
  };

  return (
    <div>
      <h2>Vous êtes déjà membre :</h2>
      <p>Saisissez vos paramètres d'accès</p>
      <form onSubmit={handleSubmit}>
        Nom d'utilisateur:
        <input
          type="text"
          name=""
          id="username"
          className="form-control"
          ref={userRef}
        />
        Mot de passe:
        <input
          type="password"
          name=""
          id="userpass"
          className="form-control"
          ref={passRef}
        />
        <button type="submit" className="btn btn-primary my-3">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;

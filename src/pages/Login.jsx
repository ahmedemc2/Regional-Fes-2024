import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seConnecter } from "../Redux/store";
import { useNavigate } from "react-router-dom";

function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      seConnecter({
        username: userRef.current.value,
        password: passRef.current.value,
      })
    );
    navigate("/annsbyreg");
  };

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <h3>Vous êtes déjà membre:</h3>
      <p>Saisissez vos paramètres d'accès.</p>
      Nom d'utilisateur :
      <input
        type="text"
        className="form-control"
        placeholder="user1"
        ref={userRef}
      />
      Mot de passe :
      <input
        type="text"
        className="form-control"
        placeholder="pass1"
        ref={passRef}
      />
      <button type="submit" className="btn btn-primary my-3">
        Se connecter
      </button>
    </form>
  );
}

export default Login;

import React from "react";
import { useSelector } from "react-redux";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <h3>Vous êtes déjà membre:</h3>
      <p>Saisissez vos paramètres d'accès.</p>
      Nom d'utilisateur :
      <input type="text" className="form-control" placeholder="user1" />
      Mot de passe :
      <input type="text" className="form-control" placeholder="pass1" />
      <button type="submit" className="btn btn-primary my-3">
        Se connecter
      </button>
    </form>
  );
}

export default Login;

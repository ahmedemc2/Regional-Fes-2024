import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Menu() {
  const user = useSelector((state) => state.affaires.user);

  return (
    <aside className="col-4 h-100 border">
      <h3>Espace membre</h3>
      <p>Bienvenue ...</p>

      <ul>
        {user === null ? (
          <>
            <li>
              <NavLink to="/login">Connexion</NavLink>
            </li>
            <li>
              <NavLink to="/register">Inscription</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/logout">Se déconnecter</NavLink>
          </li>
        )}
      </ul>
      <h3>Nos annonces</h3>
      <p>Consulter ...</p>
      <ul>
        <li>
          <NavLink to="/annsbyreg">Consulter Nos Annonces</NavLink>
        </li>
        <li>
          <NavLink to="/addann">Diffuser une annonce</NavLink>
        </li>
        <li>
          <NavLink to="/adminanns">Administrer les annonces</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;

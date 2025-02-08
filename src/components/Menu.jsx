import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <aside className="col-4 border">
      <h3>Espace membre</h3>
      <p>Bienvenu ...</p>
      <ul>
        <li>
          <NavLink to="/login">Connexion</NavLink>
        </li>
        <li>
          <NavLink to="/register">Inscription</NavLink>
        </li>
      </ul>
      <h3>Nos annonces</h3>
      <p>Consulter ...</p>
      <ul>
        <li>
          <NavLink to="/annsbyreg">Consulter Nos annonce</NavLink>
        </li>
        <li>
          <NavLink to="/addann">diffuser une annonce</NavLink>
        </li>
        <li>
          <NavLink to="/adminanns">Administrer les annonces</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;

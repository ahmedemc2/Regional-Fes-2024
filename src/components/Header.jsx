import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="col-12 px-5 py-3 bg-secondary">
      <ul className="d-flex justify-content-end gap-5 list-unstyled">
        <li>
          <Link className="text-white" to="/">
            Plan du site
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/">
            Contacter nous
          </Link>
        </li>
        <li>
          <Link className="text-white" to="/">
            Ajouter Aux Favoris
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

import React from "react";

function Header() {
  return (
    <header className="col-12 border">
      <ul className=" d-flex gap-5">
        <li>
          <a href="#">Plan du site</a>
        </li>
        <li>
          <a href="#">Contacter Nous</a>
        </li>
        <li>
          <a href="#">Ajouter aux favoris</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

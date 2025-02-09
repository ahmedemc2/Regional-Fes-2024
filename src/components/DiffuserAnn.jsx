import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insererAnnonce, modifierAnnonce } from "../Redux/store";

function DiffuserAnn() {
  const categories = useSelector((state) => state.affaires.categories);
  const regions = useSelector((state) => state.affaires.regions);
  const dispatch = useDispatch();

  const textRef = useRef();
  const catRef = useRef();
  const regRef = useRef();
  const prixRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const codeRef = useRef();
  const villeRef = useRef();

  const AjouterAnnonce = (e) => {
    e.preventDefault();

    const newAnnonce = {
      id: 5,
      texte: textRef.current.value,
      tel: telRef.current.value,
      email: emailRef.current.value,
      prix: prixRef.current.value,
      ville: villeRef.current.value,
      codepostal: parseInt(codeRef.current.value),
      regid: parseInt(regRef.current.value),
      catid: parseInt(catRef.current.value),
    };

    dispatch(insererAnnonce(newAnnonce));
  };

  return (
    <form onSubmit={AjouterAnnonce}>
      Texte de l'annonce (250 caractères max)
      <textarea className="form-control my-3" ref={textRef}></textarea>
      <div className="container row gap-3">
        Catégories:
        <select className="form-select my-3 col" ref={catRef}>
          {categories.map((category) => (
            <option key={category.catid} value={category.catid}>
              {category.catnom}
            </option>
          ))}
        </select>
        Régions:
        <select className="form-select my-3 col" ref={regRef}>
          {regions.map((region) => (
            <option key={region.regid} value={region.regid}>
              {region.regnom}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        Prix:
        <input type="text" className="form-control my-3" ref={prixRef} />
      </div>
      <div className="container row gap-3">
        Numéro de téléphone:
        <input type="tel" className="form-control my-3 col" ref={telRef} />
        Email:
        <input type="email" className="form-control my-3 col" ref={emailRef} />
      </div>
      <div className="container row gap-3">
        Code Postale:
        <input type="number" className="form-control my-3 col" ref={codeRef} />
        Ville:
        <input type="text" className="form-control my-3 col" ref={villeRef} />
      </div>
      <button type="submit" className="btn btn-primary m-3">
        Valider votre Annonce
      </button>
    </form>
  );
}

export default DiffuserAnn;

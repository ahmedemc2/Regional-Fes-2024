import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insereAnnonce } from "../Redux/store";

function DiffuserAnn() {
  const categories = useSelector((state) => state.affaires.categories);
  const regions = useSelector((state) => state.affaires.regions);

  const dispatch = useDispatch();

  const texteRef = useRef();
  const categoyRef = useRef();
  const regionRef = useRef();
  const prixRef = useRef();
  const teleRef = useRef();
  const emailRef = useRef();
  const codePostalRef = useRef();
  const villeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const annonces = {
      id: 4,
      texte: texteRef.current.value,
      tel: teleRef.current.value,
      email: emailRef.current.value,
      prix: prixRef.current.value,
      ville: villeRef.current.value,
      codepostal: parseInt(codePostalRef.current.value),
      regid: parseInt(regionRef.current.value),
      catid: parseInt(categoyRef.current.value),
    };
    dispatch(insereAnnonce(annonces));
  };

  return (
    <form>
      <div>
        Text de l'annonce (250 caractères max)
        <textarea
          className="form-control"
          name="textAnnonce"
          id="textAnnonce"
          ref={texteRef}
        ></textarea>
      </div>
      <div>
        catégorie:
        <select name="" id="" className="form-select" ref={categoyRef}>
          {categories.map((category) => (
            <option key={category.catid} value={category.catid}>
              {category.catnom}
            </option>
          ))}
        </select>
        Régions:
        <select name="" id="" className="form-select" ref={regionRef}>
          {regions.map((region) => (
            <option key={region.regid} value={region.regid}>
              {region.regnom}
            </option>
          ))}
        </select>
      </div>
      <div>
        Prix (Proposé){" "}
        <input type="text" className="form-control" ref={prixRef} />
      </div>
      <div>
        Numéro de Téléphone{" "}
        <input
          type="tel"
          name=""
          id=""
          className="form-control"
          ref={teleRef}
        />
        Email{" "}
        <input
          type="email"
          name=""
          id=""
          className="form-control"
          ref={emailRef}
        />
      </div>
      <div>
        Code Postal{" "}
        <input
          type="number"
          name=""
          id=""
          className="form-control"
          ref={codePostalRef}
        />
        Ville{" "}
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          ref={villeRef}
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary my-3">
        Valider votre annonce
      </button>
    </form>
  );
}

export default DiffuserAnn;

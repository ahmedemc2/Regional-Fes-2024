import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifierAnnonce } from "../Redux/store";

function UpdateAnn() {
  const categories = useSelector((state) => state.affaires.categories);
  const regions = useSelector((state) => state.affaires.regions);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const textRef = useRef();
  const catRef = useRef();
  const regRef = useRef();
  const prixRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const codeRef = useRef();
  const villeRef = useRef();

  const annonces = useSelector((state) => state.affaires.annonces);

  const annonce = annonces.filter(
    (annonce) => annonce.id === parseInt(params.id)
  )[0];

  const UpdateAnnonce = (e) => {
    e.preventDefault();

    const newAnnonce = {
      id: parseInt(params.id),
      texte: textRef.current.value,
      tel: telRef.current.value,
      email: emailRef.current.value,
      prix: prixRef.current.value,
      ville: villeRef.current.value,
      codepostal: parseInt(codeRef.current.value),
      regid: parseInt(regRef.current.value),
      catid: parseInt(catRef.current.value),
    };

    dispatch(
      modifierAnnonce({ id: parseInt(params.id), newAnnonce: newAnnonce })
    );
    navigate(`/anndetail/${params.id}`);
  };

  return (
    <form onSubmit={UpdateAnnonce}>
      id:
      <input
        type="text"
        disabled
        defaultValue={params.id}
        className="form-control"
      />
      Texte de l'annonce (250 caractères max)
      <textarea
        className="form-control my-3"
        ref={textRef}
        defaultValue={annonce.texte}
      ></textarea>
      <div className="container row gap-3">
        Catégories:
        <select
          className="form-select my-3 col"
          ref={catRef}
          defaultValue={annonce.catid}
        >
          {categories.map((category) => (
            <option key={category.catid} value={category.catid}>
              {category.catnom}
            </option>
          ))}
        </select>
        Régions:
        <select
          className="form-select my-3 col"
          ref={regRef}
          defaultValue={annonce.regid}
        >
          {regions.map((region) => (
            <option key={region.regid} value={region.regid}>
              {region.regnom}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        Prix:
        <input
          type="text"
          className="form-control my-3"
          ref={prixRef}
          defaultValue={annonce.prix}
        />
      </div>
      <div className="container row gap-3">
        Numéro de téléphone:
        <input
          type="tel"
          className="form-control my-3 col"
          ref={telRef}
          defaultValue={annonce.tel}
        />
        Email:
        <input
          type="email"
          className="form-control my-3 col"
          ref={emailRef}
          defaultValue={annonce.email}
        />
      </div>
      <div className="container row gap-3">
        Code Postale:
        <input
          type="number"
          className="form-control my-3 col"
          ref={codeRef}
          defaultValue={annonce.codepostal}
        />
        Ville:
        <input
          type="text"
          className="form-control my-3 col"
          ref={villeRef}
          defaultValue={annonce.ville}
        />
      </div>
      <button type="submit" className="btn btn-warning m-3">
        Mettre à jour
      </button>
      <button
        type="reset"
        className="btn btn-danger"
        onClick={() => navigate(`/anndetail/${params.id}`)}
      >
        Annuler
      </button>
    </form>
  );
}

export default UpdateAnn;

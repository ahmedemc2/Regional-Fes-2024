import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function DetailAnn() {
  const params = useParams();

  const annonces = useSelector((state) => state.affaires.annonces);
  const categories = useSelector((state) => state.affaires.categories);
  const regions = useSelector((state) => state.affaires.regions);

  const annonce = annonces.filter(
    (annonce) => annonce.id === parseInt(params.id)
  )[0];

  const category = categories.filter(
    (category) => category.catid === annonce.catid
  )[0];
  const region = regions.filter((region) => region.regid === annonce.regid)[0];

  return (
    <div className="container">
      <p>
        <b>id de l'annonce:</b> {annonce.id}
      </p>
      <p>
        <b>Texte de l'annonce:</b> {annonce.texte}
      </p>
      <p>
        <b>Numéro de téléphone:</b> {annonce.tel}
      </p>
      <p>
        <b>Adresse de messagerie:</b> {annonce.email}
      </p>
      <p>
        <b>Ville:</b> {annonce.ville}
      </p>
      <p>
        <b>CodePostal:</b> {annonce.codepostal}
      </p>
      <p>
        <b>Montant:</b> {annonce.prix}
      </p>
      <p>
        <b>Utilisateur du site:</b>{" "}
      </p>
      <p>
        <b>Région:</b> {region.regnom}
      </p>
      <p>
        <b>Catégorie:</b> {category.catnom}
      </p>
      <div>
        <Link to={`/editann/${params.id}`}>Modifier</Link> |{" "}
        <Link to={`/delann/${params.id}`}>Supprimer</Link> |{" "}
        <Link to="/annsbyreg">Retourner a la liste des annonces</Link>
      </div>
    </div>
  );
}

export default DetailAnn;

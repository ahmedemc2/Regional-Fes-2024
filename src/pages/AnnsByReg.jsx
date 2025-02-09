import React, { useState } from "react";
import { useSelector } from "react-redux";
import { annonces } from "../db";

function AnnsByReg() {
  const regions = useSelector((state) => state.affaires.regions);
  const annonces = useSelector((state) => state.affaires.annonces);

  const [newAnnonce, setNewAnnonces] = useState(annonces);

  const handleAnnonceByReg = (e) => {
    const idReg = parseInt(e.target.value);
    const anns = annonces.filter((annonce) => annonce.regid === idReg);
    setNewAnnonces(anns);
  };
  return (
    <>
      <form className="m-5">
        <select
          name="region"
          id="region"
          className="form-select"
          onChange={handleAnnonceByReg}
        >
          {regions.map((region) => (
            <option key={region.regid} value={region.regid}>
              {region.regnom}
            </option>
          ))}
        </select>
      </form>
      <div className="m-5 container">
        {newAnnonce.map((annonce) => (
          <div key={annonce.id}>
            <p className="d-flex justify-content-between my-2 p-2 bg-light w-75">
              <span>
                {annonce.ville}({annonce.codepostal})
              </span>
              <span>{annonce.email}</span>
            </p>
            <p className="px-3">{annonce.texte}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AnnsByReg;

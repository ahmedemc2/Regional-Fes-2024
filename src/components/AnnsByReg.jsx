import React, { useState } from "react";
import { useSelector } from "react-redux";

function AnnsByReg() {
  const regions = useSelector((state) => state.affaires.regions);
  const annonces = useSelector((state) => state.affaires.annonces);

  const [selectedAnnonce, setAnnonce] = useState(annonces);

  const handleRegion = (e) => {
    const id = e.target.value;
    const newAnnonce = annonces.filter(
      (annonce) => annonce.regid === parseInt(id)
    );
    setAnnonce(newAnnonce);
  };

  return (
    <div>
      <select name="" id="jkfhkj" onChange={handleRegion}>
        {regions.map((region) => (
          <option key={region.regid} value={region.regid}>
            {region.regnom}
          </option>
        ))}
      </select>
      {selectedAnnonce.map((annonce) => (
        <table key={annonce.id}>
          <tr>
            <th>
              {annonce.ville}({annonce.codepostal})
            </th>
            <th>{annonce.email}</th>
          </tr>
          <tr>
            <td>{annonce.texte}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default AnnsByReg;

import React from "react";
import { useSelector } from "react-redux";

function AdminAnns() {
  const annonces = useSelector((state) => state.affaires.annonces);

  return (
    <div>
      <table>
        <tr>
          <th>Email</th>
          <th>Ville</th>
          <th>CodePostal</th>
          <th>Détails</th>
        </tr>
        {annonces.map((annonce) => (
          <tr key={annonce.id}>
            <td>{annonce.email}</td>
            <td>{annonce.ville}</td>
            <td>{annonce.codepostal}</td>
            <td>
              <button className="btn btn-danger">Détails</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AdminAnns;

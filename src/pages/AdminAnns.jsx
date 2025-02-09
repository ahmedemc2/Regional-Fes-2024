import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AdminAnns() {
  const annonces = useSelector((state) => state.affaires.annonces);
  const navigate = useNavigate();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Ville</th>
          <th>Code Postal</th>
          <th>Détails</th>
        </tr>
      </thead>
      <tbody>
        {annonces.map((annonce) => (
          <tr className="" key={annonce.id}>
            <td className="">{annonce.email}</td>
            <td className="">{annonce.ville}</td>
            <td className="">{annonce.codepostal}</td>
            <td className="">
              {/* <button
              onClick={() => navigate(`/anndetail/${annonce.id}`)}
              className="btn btn-danger"
            >
              Détail
            </button> */}
              <Link className="btn btn-danger" to={`/anndetail/${annonce.id}`}>
                Détail
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminAnns;

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supprimerAnnonce } from "../Redux/store";
import { useDispatch } from "react-redux";

function DelAnn() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(supprimerAnnonce(parseInt(params.id)));
    navigate("/adminanns");
  }, [params.id]);

  return <></>;
}

export default DelAnn;

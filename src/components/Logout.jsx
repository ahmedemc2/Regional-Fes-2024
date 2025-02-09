import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { seDeconnecter } from "../Redux/store";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(seDeconnecter());
    navigate("/login");
  });

  return <></>;
}

export default Logout;

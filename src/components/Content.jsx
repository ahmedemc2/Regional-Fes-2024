import React from "react";
import Login from "./Login";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Content() {
  const isLogged = useSelector((state) => state.affaires.isLogged);

  return (
    <div className="col-8 border">
      {!isLogged && <Login />}
      {/* Outlet katkhlina ndakhelu xii f xii */}
      <Outlet />
    </div>
  );
}

export default Content;

import React from "react";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <main className="col-8 border h-100">
      <Outlet />
    </main>
  );
}

export default Content;

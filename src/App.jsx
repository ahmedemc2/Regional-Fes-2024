import React from "react";
import Layout from "./components/Layout";

import { Route, Routes } from "react-router-dom";
import AnnsByReg from "./components/AnnsByReg";
import DiffuserAnn from "./components/DiffuserAnn";
import AdminAnns from "./components/AdminAnns";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="annsbyreg" element={<AnnsByReg />} />
        <Route path="addann" element={<DiffuserAnn />} />
        <Route path="adminanns" element={<AdminAnns />} />
      </Route>
    </Routes>
  );
}

export default App;

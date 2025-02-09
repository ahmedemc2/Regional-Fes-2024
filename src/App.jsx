import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import AnnsByReg from "./components/AnnsByReg";
import DiffuserAnn from "./components/DiffuserAnn";
import AdminAnns from "./components/AdminAnns";
import DetailAnn from "./components/DetailAnn";
import UpdateAnn from "./components/UpdateAnn";
import DelAnn from "./components/DelAnn";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route end path="/" element={<Layout />}>
        <Route path="annsbyreg" element={<AnnsByReg />} />
        <Route path="addann" element={<DiffuserAnn />} />
        <Route path="login" element={<Login />} />
        <Route path="adminanns" element={<AdminAnns />} />
        <Route path="anndetail/:id" element={<DetailAnn />} />
        <Route path="editann/:id" element={<UpdateAnn />} />
        <Route path="delann/:id" element={<DelAnn />} />
        {/* <Route path="register" element={} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

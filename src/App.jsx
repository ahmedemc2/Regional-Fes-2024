import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layouts/Layout";
import Login from "./pages/Login";
import AnnsByReg from "./pages/AnnsByReg";
import DiffuserAnn from "./pages/DiffuserAnn";
import AdminAnns from "./pages/AdminAnns";
import DetailAnn from "./pages/DetailAnn";
import UpdateAnn from "./pages/UpdateAnn";
import DelAnn from "./components/DelAnn";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Logout from "./components/Logout";

function App() {
  return (
    <Routes>
      <Route end path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        {/* <Route path="register" element={} /> */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="annsbyreg" element={<AnnsByReg />} />
          <Route path="addann" element={<DiffuserAnn />} />
          <Route path="adminanns" element={<AdminAnns />} />
          <Route path="anndetail/:id" element={<DetailAnn />} />
          <Route path="editann/:id" element={<UpdateAnn />} />
          <Route path="delann/:id" element={<DelAnn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

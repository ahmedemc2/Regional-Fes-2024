import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="row mx-5 h-100">
      <Header />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default Layout;

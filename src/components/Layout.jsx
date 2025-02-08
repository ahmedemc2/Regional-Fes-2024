import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="row">
      <Header />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default Layout;

import React from "react";
import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";
import Routes from "../routes";

function Layout() {
  return (
    <div className="wrapper flex col">
      <Topbar />
      <Routes />
      <Navigation />
    </div>
  );
}

export default Layout;

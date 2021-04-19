import { Route } from "react-router-dom";
import React from "react";
import Home from "./containers/Home";
import Activity from "./containers/Activity";
import Wallet from "./containers/Wallet";
import Market from "./containers/Market";
import Earn from "./containers/Earn";
import Hoc from "./hoc";

const Routes = () => (
  <Hoc>
    <Route path="/" exact component={Home} />
    <Route path="/activity" exact component={Activity} />
    <Route path="/wallet" exact component={Wallet} />
    <Route path="/market" exact component={Market} />
    <Route path="/earn" exact component={Earn} />
  </Hoc>
);

export default Routes;

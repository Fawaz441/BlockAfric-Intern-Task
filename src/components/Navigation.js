import React from "react";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Activity } from "../assets/icons/activity.svg";
import { ReactComponent as Wallet } from "../assets/icons/wallet.svg";
import { ReactComponent as Market } from "../assets/icons/market.svg";
import { ReactComponent as Earn } from "../assets/icons/gift.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="grid nav">
      <NavLink exact to="/" activeClassName="active">
        <div className="flex col">
          <Home />
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink exact to="/activity" activeClassName="active">
        <div className="flex col">
          <Activity />
          <span>Activity</span>
        </div>
      </NavLink>
      <NavLink exact to="/wallet" activeClassName="active">
        <div className="flex col">
          <Wallet />
          <span>Wallet</span>
        </div>
      </NavLink>
      <NavLink exact to="/market" activeClassName="active">
        <div className="flex col">
          <Market />
          <span>Market</span>
        </div>
      </NavLink>
      <NavLink exact to="/earn" activeClassName="active">
        <div className="flex col">
          <Earn />
          <span>Earn</span>
        </div>
      </NavLink>
    </div>
  );
}

export default Navigation;

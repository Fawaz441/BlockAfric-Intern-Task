import React from "react";
import logo from "../assets/logos/logo.JPG";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Notification } from "../assets/icons/notification.svg";
import { ReactComponent as Medicine } from "../assets/icons/medicine.svg";

class Topbar extends React.Component {
  render() {
    return (
      <div className="top flex spaced">
        <div className='flex acent logo'>
          <Medicine/>
          <h3>Medicine</h3>
          {/* <img src={logo} alt="ribbon" /> */}
        </div>
        <div className="flex">
          <div className="circle user">
            <User />
          </div>
          <div className="notification">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;

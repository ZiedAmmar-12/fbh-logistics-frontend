import React from "react";
import logoIcon from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import settingsIcon from "../assets/settings.png";
import helpIcon from "../assets/help.png";
import "../styles/Sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logoIcon} alt="FulfillmentBridge" />
        <span>FulfillmentBridge</span>
      </div>
      <nav>
        <ul>
          <li className="active">
            <img src={homeIcon} alt="Dashboard" />
            <span>Dashboard</span>
          </li>
          <li>
            <img src={settingsIcon} alt="Setting" />
            <span>Setting</span>
          </li>
        </ul>
      </nav>
      <div className="support">
        <img src={helpIcon} alt="Help" className="help-icon" />
        <p>Need help ? contact us</p>
        <button>Account Manager</button>
        <button>Sales Manager</button>
      </div>
    </aside>
  );
};

export default Sidebar;

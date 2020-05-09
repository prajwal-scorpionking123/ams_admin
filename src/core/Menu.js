import React from "react";
import { Link, withRouter } from "react-router-dom";



const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/AdminLogin")} className="nav-link" to="/AdminLogin">
          Admin Login
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/AdminRegister")} className="nav-link" to="/AdminRegister">
          Admin Registration
        </Link>
      </li>
      
    </ul>
  </div>
);

export default withRouter(Menu);

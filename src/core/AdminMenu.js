import React from "react";
import { Link, withRouter } from "react-router-dom";



const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const AdminMenu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/AdminDashboard")} className="nav-link" to="/AdminDashboard">
        Admin Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/UploadStudentData")} className="nav-link" to="/UploadStudentData">
         Students Data Upload
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/UploadTeacherData")} className="nav-link" to="/UploadTeacherData">
          Teacher Data Upload
        </Link>
      </li>
       
    </ul>
  </div>
);

export default withRouter(AdminMenu);

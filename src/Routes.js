import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import AdminDashboard from "./Admin/AdminDashboard"
import AdminLogin from "./Auth/AdminLogin";
import AdminRegister from "./Auth/AdminRegister";
import UploadStudentData from "./Admin/UploadStudentData";
import UploadTeacherData from "./Admin/UploadTeacherData";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/AdminDashboard" exact component={AdminDashboard} />
        <Route path="/AdminLogin" exact component={AdminLogin}/>
        <Route path="/AdminRegister" exact component={AdminRegister}/>
        <Route path="/UploadStudentData" exact component={UploadStudentData}/>
        <Route path="/UploadTeacherData" exact component={UploadTeacherData}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;


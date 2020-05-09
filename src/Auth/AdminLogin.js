import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";
import { API } from "../backend";

class AdminLogin extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {name: '',pass: '',redirect:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(key) {
        return function (e) {
          var state = {};
          state[key] = e.target.value;
          this.setState(state);
        }.bind(this);
        
      }
      async signin(name,pass){
        const url=`${API}/adminOp/login/${name}/${pass}`;
        const response=await fetch(url);
        const data=await response.json();
        if(data.found===1){
          console.log("success")
          this.setState({name:'',pass:'',redirect:true});
        }
        else{
        alert('failed');
        }
     }
      handleSubmit(event) {
     
        var data = {
                name: this.state.name,
            pass: this.state.pass,
          }
          this.signin(data.name,data.pass);
          event.preventDefault();
      }
      performRedirect(){
        if (this.state.redirect===true) {
            return <Redirect to="/AdminDashboard" />;
          } else {
            return <Redirect to="/AdminLogin" />;
          }
      }
   signInForm () {
       return(
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                onChange={this.handleChange("name")}
                value={this.state.name}
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={this.handleChange("pass")}
                value={this.state.pass}
                className="form-control"
                type="password"
              />
            </div>
            <button  className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>)
  }
render(){
  return (
    <Base>
      {/* {loadingMessage()} */}
      {this.signInForm()}
      {this.performRedirect()}
    </Base>
  );
}
}

export default AdminLogin;

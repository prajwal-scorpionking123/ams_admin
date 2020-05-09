import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect ,Link} from "react-router-dom";
import {API} from '../backend';

class AdminRegister extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {name: '',pass: '',branch:'',loading:false,success:false};
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
      async signup(name,pass,branch){
        const url=`${API}/adminOp/register/${name}/${pass}/${branch}`;
        const response=await fetch(url);
        const data=await response.json();
        if(data.created===1){
          this.setState({name:'',pass:'',branch:'',success:true});
        }
        else if(data.created===0&&data.status==='PRESENT'){
        alert("Account is Already Present")
        }
     }
      handleSubmit(event) {
        event.preventDefault();
        var data = {
                name: this.state.name,
            pass: this.state.pass,
            branch:this.state.branch
          }
          this.signup(data.name,data.pass,data.branch);
       
      }

   
      successMessage() {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              {this.state.success&&(<div
                className="alert alert-success"
                style={{ display: this.state.success ? "" : "none" }}
              >
                New account was created successfully. Please
                <Link to="/AdminLogin">Login Here</Link>
              </div>)}
            </div>
          </div>
        );
      };
   signUpForm () {
       return(
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                required
                onChange={this.handleChange("name")}
                value={this.state.name}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Branch</label>
              {/* <input
                onChange={this.handleChange("branch")}
                value={this.state.branch}
                className="form-control"
                type="text"
              /> */}
              <select
          onChange={this.handleChange("branch")}
          className="form-control"
          placeholder="Category"
          required
              >
          <option>select branch</option>
          <option value={"CSE"}>Computer Science</option>
          <option value={"EE"}>Electrical</option>
          <option value={"ETC"}>Electronic</option>
          <option value={"ME"}>Mechanical</option>
          <option value={"CE"}>Civil</option>
         
          
        </select>
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={this.handleChange("pass")}
                value={this.state.pass}
                className="form-control"
                type="password"
                required

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
      {this.successMessage()}
      {this.signUpForm()}
      {/* {this.performRedirect()} */}
    </Base>
  );
}
}

export default AdminRegister;

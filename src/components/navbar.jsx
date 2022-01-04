import React, { Component } from 'react';
import {Link,NavLink} from "react-router-dom"

import NotFound from '../components/notFound';
import Register from "./register";
import Login from "./login";
import Dashboard from "./dashboard";
import { Navigate } from "react-router-dom";
import {Route,Routes } from "react-router-dom";
import User from '../components/user';
import App from "../app";
class Navbar extends Component {
    render() { 
     
        return (<>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">login</Link>
      </li>
     
       {!this.props.User ? (
         <>
          <li className="nav-item">
    <NavLink className="nav-link" to="/register">register</NavLink>
     </li>
         </>
  
       ):(
         <>
           <li className="nav-item">
        <NavLink className="nav-link" to="/logout">logout</NavLink>
         </li>
         </>
      

       )}
    </ul>
  </div>
</nav>
        </>);
    }
}
 
export default Navbar;
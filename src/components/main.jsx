import App from "../app";
import Home from '../components/home';
import User from '../components/user';
import NotFound from '../components/notFound';
import Register from "./register";
import Login from "./login";
import Dashboard from "./dashboard";
import { Navigate } from "react-router-dom";
import {Route,Routes } from "react-router-dom";
import React, { Component,createRef } from 'react';
import Navbar from "./navbar";

class Main extends Component {
    state={
        users:[],
        isloading:true,
        
        FirstNameText:"",
        LastNameText:"",
        SearchText:"",
        user:null
    }
    render() { 
        return (
            <>
      
  {/* <App/> */}
  
  </> 
        );
    }
}
 
export default Main;

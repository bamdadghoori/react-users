import ReactDOM from 'react-dom';
// import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.jsx';
import {Route,Routes,Link,BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard"
import Main from "./components/main"
ReactDOM.render(
    <BrowserRouter>
  
  
    <App/>
   
    </BrowserRouter>
,document.getElementById("root"))
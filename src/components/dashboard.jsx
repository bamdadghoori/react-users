import axios from "axios";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
axios.defaults.headers.common["token"]=localStorage.getItem("token")

const Dashboard = () => {
    console.log("x")
    var navigate=useNavigate()
    // useEffect(async()=>{
    //     const token=localStorage.getItem("token")
    //     if(!token){
    //         navigate("/notFound")
    //     }
    // const response=await axios.get("https://reqres.in/api/users?page=2")
    // console.log(response)
    // },[])
    return ( <h1>dashboard</h1> );
}
 
export default Dashboard;
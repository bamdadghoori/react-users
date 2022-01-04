import { useEffect } from "react";
import {useLocation} from "react-router-dom"

const Logout = () => {
   useEffect(()=>{
       console.log("xx")
       window.location="/"
       localStorage.removeItem("token")
   },[])
    return (null);
}
 
export default Logout;
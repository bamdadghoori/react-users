import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import { BrowserRouter } from 'react-router-dom';
const Protect = (props) => {
  const token=  localStorage.getItem("token")
//   useEffect(()=>{
//     console.log("xxx")
//   },[])
  
    return (
        <>
        {
            console.log(props.element)
        }
       
       <Routes>
           {
                token ? (
            
                    <Route path="/dashboard" element={props.element}/> 
                 
                   ):(
                <Route path="/dashboard" element={<Navigate to="/login"/>}/> 
                   )
           }
        
         </Routes>
         
        </>
           
        
      
      );
}
 
export default Protect;
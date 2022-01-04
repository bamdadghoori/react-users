import axios from "axios";
import queryString from "query-string"
import { useEffect, useRef,useState } from "react";
import React from "react"
import {useLocation, useRouteMatch,useParams} from "react-router-dom"
import Input from "./input";
import * as yup from 'yup';
const Login = () => {
    

    var [user,setUser]=useState({email:'',password:''});
 var [errors,setErrors]=useState([])
 useEffect(async()=>{
   
    if(errors.length===0){

        const response= await axios.post("https://reqres.in/api/login",user)
        console.log(response)
      }
   
    console.log(errors)
},[errors])
 let schema=yup.object().shape({
    email:yup.string().email("ایمیل نامعتبر است").required("فیلد ایمیل الزامیست"),
    password:yup.string().min(8,"رمز عبور باید حداقل 8 رقم باشد")
})
const validate=async()=>{
    try  {
       const resultValidate=await schema.validate(user, { abortEarly: false })
       
    }
    catch(er){
       console.log(er.errors)
      setErrors([...er.errors])
     
       
    }
   }
  const  handleSubmit= async(e)=>{
      
    e.preventDefault();
await validate();
console.log(errors.length)
// if(errors.length===0){
    
//    const response= await axios.post("https://reqres.in/api/login",user)
//    console.log(response)
//  }
  }

const handleInputChange=async(e)=>{
 
  setUser({...user,[e.currentTarget.name]:e.currentTarget.value})


}
    return ( 
    <>
     <div id="login-box" className="col-md-12">
                        
                        {/* to ternary operator vase tak if (bedoone else) az && estefade mikonim */}
                        {errors.length!==0  && (<div className="alert">
                            <ul>
                               {errors.map((element,item)=>{
                                    return(
                                    <>
                                     <li key={item}>
                                           {element}
                                    </li>
                                    </>
                                   )
                                })}
                            </ul>
                        </div>) }
                        <form onSubmit={handleSubmit} id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info">Login</h3>
                            <Input  onChange={handleInputChange} name="email" id="email" label="نام کاربری" value={user.email}/>
                            <Input  name="password" onChange={handleInputChange} id="password" value={user.password} label="رمز عبور"/>
                            
                         
                          
                            {/* <div id="register-link" className="text-right">
                                <a href="#" className="text-info">Register here</a>
                            </div> */}
                            <input type="submit"   className="btn btn-primary" value="ثبت"/>
                        </form>
                    </div>
    </>
    );
}
 
export default Login;
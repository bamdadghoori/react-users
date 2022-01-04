// queryString hatman bayed kharej az akoolad bashe
import axios from "axios";
import queryString from "query-string"
import { useEffect, useRef,useState } from "react";
import React from "react"
import {useLocation, useRouteMatch,useParams} from "react-router-dom"
import Input from "./input";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    let location = useLocation();
    let Params=useParams();
 
//   let userName= useRef();
//   let password= useRef();
 var [user,setUser]=useState({email:'',password:''});
 var [errors,setErrors]=useState([])
    var [disabled,setDisabled]=useState(false)
    var navigate=useNavigate();
// var errors=new Array();
// useEffect(async()=>{
   
   
//    })
 let schema=yup.object().shape({
        email:yup.string().email("ایمیل نامعتبر است").required("فیلد ایمیل الزامیست"),
        password:yup.string().min(8,"رمز عبور باید حداقل 8 رقم باشد")
})
//   const MyInput=React.forwardRef((props,ref)=>( 
//       <>
//   <Input ref={ref} name={props.name} id={props.id}       label={props.label} />
//   {console.log(password)}
//   </>
//     ))

    const validate=async()=>{
     try  {
        const resultValidate=await schema.validate(user, { abortEarly: false })
        return true;
     }
     catch(er){
        console.log([...er.errors])
       setErrors([...er.errors])
        //  errors=er.errors
        return false;
     }
    }
   const  handleSubmit= async(e)=>{
       setDisabled(true)
e.preventDefault();
const validateResult=await validate();
if(validateResult==true){
   
  try{
    const response=  await axios.post("https://reqres.in/api/login",user)
    console.log(response.data.token)
    localStorage.setItem("token",response.data.token)
    // navigate("/dashboard")
    window.location="/dashboard"
    setErrors([]);
   } 
   catch(e){
    //    console.log(e)
    //    alert("y")
         setErrors(["کاربری با این اطلاعات وجود ندارد"])
   }
  
   
 }
 setDisabled(false)
 
}
// if(user.email && user.password){
//         const response=  await axios.post("https://reqres.in/api/login",user)
//         console.log(response)
//     }
// const user={email:email.current.value,password:password.current.value}
// in yani age email.current.value && password.current.value khali naboodan va meghdar dashtan
//
const handleInputChange=async(e)=>{
  
   await setUser({...user,[e.currentTarget.name]:e.currentTarget.value})
//   var  newUser=[{...user}]
//   console.log(newUser)
//     newUser[e.currentTarget.id]=e.currentTarget.value; 
//      setUser(newUser);
 

}

    
    return ( 
        <>

<div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                     {console.log(errors)}
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
                            <input type="submit" disabled={disabled}  className="btn btn-primary" value="ثبت"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
 {/* { console.log(location.search)} */}
        {/* <div>login</div>  */}
        
        </>
        );
   }



 
export default Login;
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { useEffect,useState,useCallback } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import {queryString} from 'query-string'

const User = (props) => {
 
  const{id}=useParams();
          const [userData,setUserData]= useState({
            //  firstName:"",
            //  lastName:""
           });
           var updatedUserData;
           var [loading,setLoading]=useState(false)
 console.log(id)
    var changed=false;
   
    useEffect(async()=>{
     
      const user=await axios.get(`https://reqres.in/api/users/${id}`)
            
      var response=user.data.data
      console.log(user.data.data)
      setUserData(response)

           
           
           
    },[])


  
    const RegistUpdate=async()=>{
    
      console.log(updatedUserData)
     
     const response= await axios.put(`https://reqres.in/api/users/${id}`,updatedUserData);
   
    }
    const changeText=(e)=>{
      
      console.log(e.currentTarget.value)
      if(changed===false){
        var updatedUser=  {...userData}
        changed=true;
      }
     else{
       updatedUser=updatedUserData;
     }
      switch (e.currentTarget.id){
      case"firstName":
      {
     
     updatedUser.first_name=e.currentTarget.value;
    
        //  setUserData(updatedUser)
       
        // setTimeout(()=>{console.log(userData)},3000) 
         console.log(updatedUser)
         updatedUserData=updatedUser;
        //  setUserData(updatedUserData)
         console.log(userData)
        //  setTimeout(() => {
        //   console.log(userData)
        //  }, 3000); 
     break;
      }
      case "lastName":
        {
        
          updatedUser.last_name=e.currentTarget.value;
          updatedUserData=updatedUser;
          // setUserData(updatedUserData)
          console.log(updatedUserData)
         
        
          break;
        }
       
}

console.log(userData)
}
    const changeTextBox=async(e)=>{
     
     changeText(e)
   
  }
    return (

              <>
            
              <div className="wrapper-new-coding fadeInDown">
            <div id="formContent">
            

             
              <div className="fadeIn first new-coding-title">
                انواع کدینگ
                <Link  className="fa fa-window-close" to="/" ></Link>
              </div>
              <div className="p-3 mb-2 bg-danger text-white vali row">
              <div className="valiWhole"></div> 

                <span className="valiWhole"></span>
                <i className="fa fa-exclamation-triangle"></i>
              </div>
               
              <form>
                <div  className="fadeIn second" style={{position:"relative"}}>
                  <input type="text" className="blur" id="firstName" name="name" 
                  onChange={changeTextBox}
                  defaultValue={userData.first_name}/>
                  <label className="floating-label">نام</label>
                  <div className="forcible">*</div>
                </div>
                <div  className="fadeIn second" style={{position:"relative"}}>
                  <input
                   onChange={changeTextBox}
                    type="text"
                    className="blur-title"
                    id="lastName"
                    name="title"
                    defaultValue={userData.last_name}
                  />
                  <label className="floating-label-title" id="title" >عنوان</label>
                  <div className="forcible">*</div>
                </div>
                <div
                  className="row activity-radio-group"
                  style={{position:"relative"}}
                >
                  <div className="col-md-4">
                    <span className="activity-radio-span"> وضعیت : </span>
                  </div>
                  <div className="col-md-4 div-active">
                    <label for="inlineCheckbox1">فعال</label>
                    <input
                      type="radio"
                      id="activity-radio1"
                      name="activity-radio"
                      value="active"
                    />
                  </div>
                  <div className="col-md-4 div-non-active">
                    <label for="inlineCheckbox1">غیر فعال</label>
                    <input
                      type="radio"
                      id="activity-radio2"
                      name="activity-radio"
                      value="non-active"
                    />
                  </div>
                  <div className="forcible-activity">*</div>
                </div>

                <div>
                  <input onClick={(e)=>{e.preventDefault();
                  
                  RegistUpdate()
                
                }}
                
                    type="submit"
                    className="fadeIn fourth buttonLoc"
                    id="regist-coding"
                    value="ثبت"
                  />
                </div>
              </form>
            </div>
          </div>
              </>

      );
}
 
export default User;
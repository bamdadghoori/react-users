import React, { Component } from 'react';
import { useState } from 'react';
import User from "./user"
import {Link,Route,Routes,useNavigate,useHistory} from "react-router-dom"
 
const Users = (props) => {
    // dastoore zir male react-router-dom version 6 hast
    let navivgate=useNavigate();
    var [displayUpdateForm,setDisplayUpdateForm]=useState(false)
    const registUpdate=(user,id)=>{
        setDisplayUpdateForm(false)
        
        props.RegistUpdate(user,id);
    }
 const   update=async (userId,user)=>{
  
        //    var oldFirstName= user.first_name;
        //    var oldLastName= user.last_name;
        //    this.setState({FirstNameText:oldFirstName})
        //    this.setState({LastNameText:oldLastName})
          
           setDisplayUpdateForm(true);
           
        }
    const closeWindow=()=>{
        
        
            setDisplayUpdateForm(false)
        }
    return ( 
        <>
        
     
     <>
                      <div className="row">
                                
                                <div className="col-md-3">
                                    {props.userData.first_name}
                                    
                                    </div>  
                                    <div className="col-md-3">
                                    {props.userData.last_name}
                                    </div>  
                                    <div className="col-md-3">
                                   <img src={props.userData.avatar}/>
                                    </div>  
                                    <div className="col-md-3">
                                   
                                    <button className="btn btn-warning" onClick={()=>{
                                       navivgate(`user/${props.userData.id}`)
                                    }} >
                                        {/* <Link to={`/user/${props.userData.id}`}> */}
                                        update
                                        {/* </Link> */}
                                        </button>
                                        <button className="btn btn-danger" onClick={()=>props.Delete(props.userData.id)}>
                                        delete
                                        </button>
                                        </div>
                               </div>
                               
                    </>
        {/* {
displayUpdateForm ?    <User FirstName={props.userData.first_name} LastName={props.userData.last_name} 
userData={props.userData}
closeWindow={closeWindow}
RegistUpdate={registUpdate}
changeTextBox={props.changeTextBox}
displayUpdateForm={displayUpdateForm}
/>
      
    
      
       
        :( */}
            
                    {/* <>
                      <div className="row">
                                
                                <div className="col-md-3">
                                    {props.userData.first_name}
                                    
                                    </div>  
                                    <div className="col-md-3">
                                    {props.userData.last_name}
                                    </div>  
                                    <div className="col-md-3">
                                   <img src={props.userData.avatar}/>
                                    </div>  
                                    <div className="col-md-3">
                                   
                                    <button className="btn btn-warning" >
                                        <Link to="/user">
                                        update
                                        </Link>
                                        </button>
                                        <button className="btn btn-danger" onClick={()=>props.Delete(props.userData.id)}>
                                        delete
                                        </button>
                                        </div>
                               </div>
                               
                    </>
                    )
            
      
} */}
       </>
     );
}
 
export default Users;
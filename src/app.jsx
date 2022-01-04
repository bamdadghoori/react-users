import React, { Component,createRef } from 'react';
import axios from "axios"
import LoadingUsers from './components/loadingUsers.jsx';
import "./main.css"
// import User from './components/user.jsx';
import Users from './components/users.jsx';
import Register from './components/register.jsx';
import Login from './components/login.jsx';
import {Route,Routes,Link } from "react-router-dom";
import Navbar from './components/navbar.jsx';
import { BrowserRouter,Navigate } from "react-router-dom";
// import { withRouter } from "react-router";
import Home from './components/home.jsx';
import User from './components/user.jsx';
import NotFound from './components/notFound.jsx';
import Test from './components/stackTest.jsx';
import Dashboard from './components/dashboard.jsx';
import Logout from './components/logout.jsx';
import Protect from './components/protect.jsx';
 var displayUpdateForm=false;
 var FirstNameText="";
 var LastNameText="";
 const user={
        id:37,
        first_name:"bamdad",
        last_name:"saremi",
        email:"bamdad@gmail.com",
         avatar:"../public/logo192.png",
    }

class App extends Component {
    models=createRef();

    state={
        users:[],
        isloading:true,

        FirstNameText:"",
        LastNameText:"",
        SearchText:"",
        user:null
    }
    // vase fahmidan code zir be in link morajee kon:https://ditty.ir/posts/javascript-async-await/JAaVJ
   async componentDidMount(){
        const response=await axios.get("https://reqres.in/api/users?page=2");
        console.log(response)
        this.setState({users:response.data.data,isloading:false})
        // searchText=document.getElementById("search").value
        
        {console.log(this.models.current.value)}
    
    const token=localStorage.getItem("token")
    if(!token){
      this.setState({user:null})
      return
    }
   
  const responseToken={
      data:{
           name:"bamdad",
           email:"a@b.com"
      }

    }
    
    if(!responseToken){     
      this.setState({user:null})
      return
  
    }
    this.setState({user:responseToken.data})
console.log(this.state.user)
    }
   

    create= async ()=>{

             const response=  await axios.post("https://reqres.in/api/users",user)
               const updatedUsers=[...this.state.users,user]
               console.log(response)
               this.setState({users:updatedUsers})


    }
    update=async (userId,user)=>{


       displayUpdateForm=true;







    }
    registUpdate=async(user,id)=>{
        console.log(user)
        console.log(id)
    //     console.log(user.id)
    //    const userId= user.id

        if(FirstNameText!=="")
        {
            user.first_name=FirstNameText;
        }

       else if(LastNameText!=="")
       {
        user.last_name=LastNameText;
       }
       console.log(this.state.users)

    //   console.log(user)
    //    await  axios.put("https://reqres.in/api/users/"+{id},user)
    //  const index= [...this.state.users].findIndex((Element)=>{
    //     return Element.id=id;
    //  })
    //    var Users= [...this.state.users];

    }

    changeTextBox=async (e)=>{
   var textBoxId= e.currentTarget.id
     switch(textBoxId){
         case "firstName":
        {

           FirstNameText=e.currentTarget.value

        }
         break;
         case "lastName":
          LastNameText=e.currentTarget.value
         break;
     }
    }
    changeSearch=async(e)=>{
      this.setState({SearchText:e.currentTarget.value})
        console.log(this.stateSearchText)
    }
    delete=async (userId)=>{
       const updatedUsers= [...this.state.users].filter((item)=>{
           return userId!=item.id

        })
        this.setState({users:updatedUsers})
    }



    render() {
        return (
            <>

    
             <Navbar User={this.state.user}/>
             <Protect  element={<Dashboard/>}/>
             <Routes>
             
<Route path="/register" element={<Register/>} />
{/* dar versione 6 mitooni injoori mostaghim props ha ro pass bedi.too version haye ghadimi tar ravesh fargh dare! */}
<Route path="/login" element={<Login Users={this.state.users}/>} />


<Route path="/user/:id" element={<User
//   userData={props.userData}
/>

}/>
<Route path="/notFound" element={<NotFound/>}/>
{/* <Route element={<Navigate from="/" replace to="/notFound" />} /> */}
{/* age khasti url be ye url dg nazir sazi she in karo kon */}
<Route path="/xyzb" element={<Navigate  to="/login" />}/>



{/* in yani harchi gheyr az safahate bala bood ro notFound bezan.to router haye version ghabli in kar ba redirect anjam mishod */}

{/* <Route path="/dashboard" element={<Dashboard/>}/> */}
<Route path="/logout" element={<Logout/>}/>
{/* <Route  path="/" element={<App/>} /> */}
{/* <Route  path="/*" element={<NotFound/>} /> */}

</Routes>
            {/* Routes hamoon Switch hast. dar version 6 be bad az route be jaye switch estefade mishe.  */}



            {this.state.users.map((item)=>{

              return(
                  <>

              <Users  userData={item}  changeTextBox={this.changeTextBox }  Delete={this.delete}
              RegistUpdate={this.registUpdate}
              />

              </>
              )
            })

            }
            <div class="search-section-not-member">


          <div>
            <Test/>
           <form class="form-inline my-2 my-lg-0">
              <input id="search" class="form-control mr-sm-2" type="search" placeholder="search models" aria-label="Search" onChange={this.changeSearch}/>
              <select id="select-search-box"><option>All</option>
                <option ref={this.models} id="models" value="models">Models</option>
              </select>
              <Link to={`/login/?query=${this.state.SearchText}`}>
              <button id="search-button-not-member"  type="button" class="btn btn-primary">
                  <i class="fa fa-search"></i>
                </button>
                </Link>

            </form>
            </div>


            </div>

            </>
        )




        }
}

export default App;
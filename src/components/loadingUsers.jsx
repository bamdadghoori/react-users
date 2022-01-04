import React, { Component } from 'react';
// import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import ContentLoader,{ rect,Code,circle } from "react-content-loader"
const LoadingUsers = () => {
    return ( 
        
        
        Array(6).fill({}).map(()=>{
            return(<>
            <div className="row" style={{width:"100%"}}>
           <ContentLoader 
    rtl
    speed={4}
    width={100}
    height={150}
    viewBox="0 0 380 70"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{width:"100%",textAlign:"center",marginTop:"4vh",marginLeft:"2vw"}}
    // className="content-loader"
  >
   
   <circle cx="30" cy="30" r="30" width="100" height="100" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  
  </ContentLoader>
  </div>
                        
                        </>)

        })
      
     );
}
 
export default LoadingUsers;
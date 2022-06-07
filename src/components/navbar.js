import React from "react";
 
import logo1 from "./img/logo2.jpg"

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand ms-5 w-75" to="/">
         <img style={{"width" : 100 + '%'}} src={logo1}></img>
       </NavLink>
       
       <div className="navbar-collapse row justify-content-center alert alert-primary" id="navbarSupportedContent">
         <ul className="ms-5 navbar-nav w-50 justify-content-center">
           <li className="nav-item justify-content-center" >
             <NavLink className="nav-link justify-content-center" to="/create">
               <button className="justify-content-center">Create Record</button>
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}
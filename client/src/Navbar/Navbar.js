import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css"




function Navbar ({onLogout, user}) {

    function handleLogout() {
        console.log("logout clicked")
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

 console.log(!!user.username)
    if  (!!user.username) {
        return  <header>
             <button onClick={handleLogout}>Logout</button>
             <h2>Welcome, {user.username}!</h2>
                </header>
                
    } else {

    return (
        <div className="navbar-container">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
    )
    }
}



export default Navbar
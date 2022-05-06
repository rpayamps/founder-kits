import React from 'react'
import {Link} from "react-router-dom"
import {v4 as uuid} from "uuid"
import "./Navbar.css"




function Navbar ({onLogout, user}) {

    const linkTarget = {
        pathname: "/login",
        key: uuid(), // we could use Math.random, but that's not guaranteed unique.
        state: {
          applied: true
        }
      };


    function handleLogout() {
        console.log("logout clicked")
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

 console.log(!!user)
return (

    user ? 
    
        <header>
             <button onClick={handleLogout}>Logout</button>
             <h2>Welcome, {user.username}!</h2>
        </header>   
         :
        <div className="navbar-container">
            <Link to={linkTarget}>Login</Link>
            <Link to="/signup">Sign Up</Link>
        </div>


    )
}



export default Navbar
import React from 'react'
import {Link, useHistory} from "react-router-dom"
import "./Navbar.css"




function Navbar ({onLogout, user}) {
    
    const history = useHistory();

    function handleClick(route) {
      history.push(route)
      history.go(route)
    }

    function handleLogout() {
        console.log("logout clicked")
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

return (

    user ? 
    
        <header>
             <button onClick={handleLogout}>Logout</button>
             <h2>Welcome, {user.username}!</h2>
        </header>   
         :
        <div className="navbar-container">
            <a href="#" onClick={() => handleClick("/login") }>Login</a>
            <a href="#" onClick={() => handleClick("/signup") }>Sign Up</a>
        </div>


    )
}



export default Navbar
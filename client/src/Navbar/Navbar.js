import React from 'react'
import {Link, useHistory} from "react-router-dom"
import "./Navbar.css"
import Home from "../Home/Home"




function Navbar ({onLogout, user}) {

    const history = useHistory();

    function handleLogout() {
        console.log("logout clicked")
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

      function handleClick(route) {
        history.push(route)
        history.go(route)
      }


return (

    user ? 
      <div className='navbar-container'>
        <header className="navbar-header">
              <a href="#" className='home' onClick={() => handleClick("/home") }>Home</a>
              <a href="#" className='profile' onClick={() => handleClick("/profile") }>Profile</a>
             <button className="button" onClick={handleLogout}>Logout</button>
        </header> 
        <h2> ,  {user.username}</h2>
        </div>  
         :
        <div className="navbar-container-no-user">
            <a href="#" onClick={() => handleClick("/login") }>Login</a>
            <a href="#" onClick={() => handleClick("/signup") }>Sign Up</a>
        </div>


    )
}



export default Navbar
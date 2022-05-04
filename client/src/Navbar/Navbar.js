import React from 'react'
import {Navlink} from "react-dom"
import "./Navbar.css"




function Navbar () {



    return (
        <div className="navbar-container">
            <Navlink to="/login">Login</Navlink>
            <Navlink to="/signup">Sign Up</Navlink>
        </div>
    )
}



export default Navbar
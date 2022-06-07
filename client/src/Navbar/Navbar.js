import React from 'react'
import {useHistory} from "react-router-dom"
import {motion} from 'framer-motion'
import "./Navbar.css"





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
<>

<nav>
<motion.a href="#" className='logo' onClick={() => handleClick("/home") }
whileHover={{ scale: 1.1,}} 
> Founders <strong style={{color: "2b6777"}}>Kits</strong> </motion.a>
    {user ? 
      <div className='navbar-container'>
        <ul className="navbar-header">
              <motion.li
               whileHover={{ scale: 1.3,
              }}

              >             
              <a href="#" className='profile' onClick={() => handleClick("/profile") }>Profile</a>
              </motion.li>
              <motion.li
               whileHover={{ scale: 1.3}}
              > 
             <button className="login-button" onClick={handleLogout}>Logout, {user.username}</button>
             </motion.li>
        </ul>
        </div>  
         :
        <div className="navbar-container-no-user">
          <ul>
          <motion.li
               whileHover={{ scale: 1.3,
          
              }}
              > 
            <a className="a-login" href="#" onClick={() => handleClick("/login") }>Login</a>
            </motion.li>
            <motion.li
               whileHover={{ scale: 1.3}}
              > 
            <a className="a-login" href="#" onClick={() => handleClick("/signup") }>Sign Up</a>
            </motion.li>
          </ul>
        </div>}
</nav>

    </>

    )
}



export default Navbar
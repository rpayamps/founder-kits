import {React, useState} from 'react'
import {useHistory} from "react-router-dom"
import "./SignUp.css"

function SignUp({ onLogin }) {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    //Sign Up / Sign In Toggle 
    const [toggle, setToggle] = useState(false)


    const history = useHistory();

    function handleSubmitSignUp(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then(json => onLogin(json))
    }

    // Login 
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
      function handleSubmitLogin(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            username: usernameLogin,
            password: passwordLogin,
           }),
        })
          .then((r) => r.json())
          .then((user) => {
            onLogin(user)
            console.log(user)
          })
          .then(() => {
            history.push("/home")
            history.go("/home")
          }
          );
      }
  
  
    return (

      <>
      <div className='signup-login-container'>
      <div className={toggle ? "container right-panel-active" : "container"} id="container">
      <div className="form-container sign-up-container">
        <form action="#" onSubmit={handleSubmitSignUp}>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" id="password_confirmation" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required/>
          <button >Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={handleSubmitLogin}>
          <h1 className='sign-in'>Sign in</h1>
          <input type="username" placeholder="Username"  value={usernameLogin} onChange={(e) => setUsernameLogin(e.target.value)}/>
          <input type="password" placeholder="Password"  value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)}/>
          <a href="#">Forgot your password?</a>
          <button >Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button  onClick={() => {setToggle(false)}} className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={() => { setToggle(true)}} className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  
    </>

    );
  }

  export default SignUp
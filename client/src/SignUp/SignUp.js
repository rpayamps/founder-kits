import {React, useState} from 'react'
import "./SignUp.css"

function SignUp({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
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
  
    return (
      // <form className='signup-form' onSubmit={handleSubmit}>
      //   <label htmlFor="username">Username:</label>
      //   <input
      //     type="text"
      //     id="username"
      //     value={username}
      //     onChange={(e) => setUsername(e.target.value)}
      //   />
      //   <label htmlFor="password">Password:</label>
      //   <input
      //     type="password"
      //     id="password"
      //     value={password}
      //     onChange={(e) => setPassword(e.target.value)}
      //   />
      //   <label htmlFor="password_confirmation">Confirm Password:</label>
      //   <input
      //     type="password"
      //     id="password_confirmation"
      //     value={passwordConfirmation}
      //     onChange={(e) => setPasswordConfirmation(e.target.value)}
      //   />
      //   <button type="submit">Submit</button>
      // </form>

<form onSubmit={handleSubmit}>
<div class="group">
  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><span class="highlight"></span><span class="bar"></span>
  <label>Username</label>
</div>
<div class="group">
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><span class="highlight"></span><span class="bar"></span>
  <label>Password</label>
</div>
<div className="group">
<input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} /><span class="highlight"></span><span class="bar"></span>
        <label>Confirm Password</label>
        </div>
<button className="login-button" type="sumbit" class="button buttonBlue">Create Account</button>
</form>

    );
  }

  export default SignUp
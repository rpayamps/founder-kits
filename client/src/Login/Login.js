import React,{useState} from "react"
import "./Login.css"


function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username,
          password,
         }),
      })
        .then((r) => r.json())
        .then((user) => {
          onLogin(user)
          console.log(user)
        }
        );
    }
  
    return (
  
      <form onSubmit={handleSubmit}>
      <div class="group">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><span class="highlight"></span><span class="bar"></span>
        <label>Username</label>
      </div>
      <div class="group">
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><span class="highlight"></span><span class="bar"></span>
        <label>Password</label>
      </div>
      <button className="login-button" type="sumbit" class="button buttonBlue">Login</button>
    </form>
    );
  }

 


  export default Login
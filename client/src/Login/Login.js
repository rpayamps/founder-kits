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
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Password</p>
         <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      
    );
  }


  export default Login
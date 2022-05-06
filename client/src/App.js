import {React, useEffect, useState} from "react"
import { Route, Switch } from 'react-router';
import './App.css';
import Login from "./Login/Login";
import Home from "./Home/Home"
import Signup from "./SignUp/SignUp"
import Navbar from "./Navbar/Navbar"

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);



  function handlelogin (user) {
    console.log(user)
    setUser(user)
  }

return (
  <div className="App">
    <Navbar user={user}/>
      <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
           {/* <Route path="/mypage">
            <MyPage/>
          </Route> */}
          <Route  path="/login">
            <Login onLogin={handlelogin} setUser={setUser}/>
          </Route>
          <Route  path="/signup">
            <Signup setUser={setUser} onLogin={handlelogin}/>
          </Route> 
          <Route exact path="/" >
            <Home />
          </Route>
      </Switch>
  </div>
);

}



export default App;

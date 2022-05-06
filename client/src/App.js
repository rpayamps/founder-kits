import {React, useEffect, useState} from "react"
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./Login/Login";
import Home from "./Home/Home"
import Signup from "./SignUp/SignUp"

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!!user.username) {
      return <h2>Welcome, {user.username}!</h2> && <Home/>;
    }else{
        <Home/> 
    }

  function handlelogin (user) {
    console.log(user)
    setUser(user)
  }

return (
  <div className="App">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
           {/* <Route path="/mypage">
            <MyPage/>
          </Route> */}
          <Route path="/login">
            <Login onLogin={handlelogin} setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser}/>
          </Route> 
      </Switch>
  </div>
);

}



export default App;

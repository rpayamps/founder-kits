import {React, useEffect, useState} from "react"
import { Route, Switch } from 'react-router';
import './App.css';
import Login from "./Login/Login";
import Home from "./Home/Home"
import Signup from "./SignUp/SignUp"
import Navbar from "./Navbar/Navbar"
import ReviewPage from "./ReviewPage/ReviewPage"
import CurrentUserProfile from "./CurrentUserProfile/CurrentUserProfile";

function App() {

  const [user, setUser] = useState(null);
  const [review, setReview] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
        console.log(user);
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
          <Route exact path="/login">
            <Login onLogin={handlelogin} setUser={setUser}/>
          </Route>
          <Route  exact path="/signup">
            <Signup setUser={setUser} onLogin={handlelogin}/>
          </Route> 
          <Route exact path="/review/:id" >
            <ReviewPage />
          </Route>
          <Route exact path ="/profile">
            <CurrentUserProfile/>
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/home" >
            <Home />
          </Route>
      </Switch>
  </div>
);

}



export default App;

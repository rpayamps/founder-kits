import {React, useEffect, useState} from "react"
import { Route, Switch } from 'react-router';
import { useHistory, useParams } from "react-router-dom"
import './App.css';
import Login from "./Login/Login";
import Home from "./Home/Home"
import Signup from "./SignUp/SignUp"
import Navbar from "./Navbar/Navbar"
import ReviewPage from "./ReviewPage/ReviewPage"
import CurrentUserProfile from "./CurrentUserProfile/CurrentUserProfile";
import UserProfile from "./UserProfile/UserProfile";
// import { useParams } from "react-router-dom";

function App() {

  let history = useHistory()

  let { id } = useParams();
  console.log(id)

  
  const [user, setUser] = useState(null);
    
  // const [users, setUsesr] = useState([]);
  // const [review, setReview] = useState([])

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

  function handleUserClick(id) {
    history.push(`/users/${id}`)
    history.go(`/users/${id}`)
  }

  function handleReviewClick(review) {
    history.push(`/review/${review.id}`)
    history.go(`/review/${review.id}`)
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
            <ReviewPage onUserClick={handleUserClick} />
          </Route>
          <Route exact path ="/profile">
            <CurrentUserProfile onCardClick={handleReviewClick}/>
          </Route>
          <Route exact path ="/users/:id">
            <UserProfile onCardClick={handleReviewClick}/>
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

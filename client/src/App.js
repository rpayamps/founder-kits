import {React, useEffect} from "react"
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./Login/Login";

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

  if (!user) return <Login setUser={setUser} />

return (
  <div className="App">
      {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/mypage">
            <MyPage/>
          </Route>
          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser}/>
            </Route>
      </Switch> */}
  </div>
);

}



export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Profile from "./pages/Profile";
import Trending from "./pages/Trending";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import react,  {useState, useEffect} from "react";



function App() {
  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Profile" component={Profile} > 
          {
              user && user._id ? <Profile updateUser={updateUser} /> : <Login updateUser={updateUser}/>
          }
          </Route>
          <Route path="/About" component={About} />
          <Route path="/Trending" component={Trending} />
          <Route path="/Login" component={Login} >
          <Login updateUser={updateUser}/>
          </Route>
          <Route path="/Register" component={Register} />
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Trending from "./pages/Trending";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Trending" exact component={Trending} />
          <Route path="/About" exact component={About} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
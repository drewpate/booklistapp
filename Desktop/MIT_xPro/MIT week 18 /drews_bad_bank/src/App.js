import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

function App() {
  return (
    <div >
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/CreateAccount" component={CreateAccount} />
        <Route exact path="/Login" component={Login}/>

      </Router>
    </div>
  );
}

export default App;
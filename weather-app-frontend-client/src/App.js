import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    homeWeather: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/user_locations/render_request")
      .then((res) => res.json())
      .then((weather) => console.log(weather));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/Home" component={Home} />
          <Route path="/Signup" component={Signup} />
          <Route path="/LogIn" component={LogIn} />
        </div>
      </Router>
    );
  }
}

export default App;

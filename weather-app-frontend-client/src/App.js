import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import LogIn from "./components/LogIn";
import UserContainer from './components/UserContainer'
import EditAccount from "./components/EditAccount";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

  state = {
    email: "",
    username: "",
    password: "",
    user: {},
    redirect: false,
    logged: false
  }

  getUser = (userObject) => {
    this.setState({
      user: userObject
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Welcome" render={() => {return <UserContainer getUser={this.getUser} />}}/>
          <Route path="/Edit" render={() => {return <EditAccount userInfo={this.state.user} />}}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// return (
//   <Router>
//     <div className="App">
//       <Nav />
//       <Route path="/Home" component={Home} />
//       <Route path="/Welcome" component={UserContainer} />
//     </div>
//   </Router>
// );

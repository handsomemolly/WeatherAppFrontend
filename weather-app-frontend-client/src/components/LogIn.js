import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import Nav from "../Nav";


class LogIn extends Component {

  state = {
    username: "",
    password: "",
    user: {},
    redirect: false,
    logged: false
  }

  handleLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      username: this.state.username,
      password: this.state.password
    }

    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
    .then (res => res.json())
    .then (user => this.props.getUser(user))
    .then (user => {
      this.setState ({
        user: user,
        redirect: true,
        logged: true
      })})
  }

  render(){
    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit ={(e) => this.handleSubmit(e)}>
          <label>
            <input onChange={(e) => this.handleLogin(e)}type="text" placeholder="username" id="username" name="username"/> <br/>
          </label>

          <label>
            <input onChange={(e) => this.handleLogin(e)} type="password" placeholder="password"id="password" name="password"/> <br/>
          </label>

          <button type="submit">Login</button>
        </form>
          <button onClick={this.props.toggleButton} >Sign Up</button>
          {this.state.logged? <Redirect to='/Home'/> : null}


      </div>
    );
  }
}

export default LogIn;

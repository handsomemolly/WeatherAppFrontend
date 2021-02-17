import React, {Component} from 'react'


class LogIn extends Component {

  state = {
    username: "",
    password: "",
    user: {}
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
    .then (user => {
      this.setState ({
        user: user
      })
    })
  }

  render(){
    return (
      <div>
        <h3> Log In </h3>
        <form onSubmit ={(e) => this.handleSubmit(e)}>

          <label>
            <input onChange={(e) => this.handleLogin(e)}type="text" placeholder="username" id="username" name="username"/> <br/>
          </label>

          <label>
            <input onChange={(e) => this.handleLogin(e)} type="password" placeholder="password"id="password" name="password"/> <br/>
          </label>

          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;

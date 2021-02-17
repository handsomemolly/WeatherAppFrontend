import React, {Component} from 'react'


class Signup extends Component {

  state ={
    email: "",
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }

    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
    .then (res => res.json())
    .then (user => {
      console.log(user)
    })
  }
  render(){
    return (

      <div>
        <h3> Sign up here </h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            <input onChange={e => this.handleChange(e)} type="text" placeholder="email" id="email" name="email"/> <br/>
          </label>

          <label>
            <input onChange={e => this.handleChange(e)} type="text" placeholder="username" id="username" name="username"/> <br/>
          </label>

          <label>
            <input onChange={e => this.handleChange(e)} type="password" placeholder="password"id="password" name="password"/> <br/>
          </label>
          <button type="submit">Create Account</button>
        </form>
        <button onClick={this.props.toggleButton} >Login</button>
      </div>
    );
  }
}

export default Signup;

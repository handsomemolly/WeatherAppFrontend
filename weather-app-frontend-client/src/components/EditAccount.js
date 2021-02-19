import React, { Component } from "react";
import Nav from "../Nav";
import {Redirect} from 'react-router-dom'
import LogOut from './LogOut'

class EditAccount extends Component {

  state = {
    email: this.props.userInfo.email,
    username: this.props.userInfo.username,
    password: this.props.userInfo.password,
    login: !this.props.logged,
    redirect: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    let updatedUser = this.state
    fetch(`http://localhost:3000/users/${this.props.userInfo.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser)
    })
    .then (res => res.json())
    .then (console.log("UPDATED"))
    .then (message => alert("Account Updated!"))
  }

  handleDelete = () => {
    fetch(`http://localhost:3000/users/${this.props.userInfo.id}`, {
      method: "DELETE",
    })
    .then (res => res.json())
    .then (redir => this.setState({
      redirect: true
    }))
    .then (message => alert("Account Deleted! :( )"))
  }

  render() {
    return (
      <div>
        <Nav/>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            <input onChange={e => this.handleChange(e)} type="text" defaultValue={this.props.userInfo.email} id="email" name="email"/> <br/>
          </label>

          <label>
            <input onChange={e => this.handleChange(e)} type="text" defaultValue={this.props.userInfo.username}  id="username" name="username"/> <br/>
          </label>

          <label>
            <input onChange={e => this.handleChange(e)} type="text" defaultValue={this.props.userInfo.password}id="password" name="password"/> <br/>
          </label>
            <button type="submit">Update Account</button>
        </form>
          <button onClick ={() =>  this.handleDelete()}> Delete Account </button>
          <button onClick ={() =>  this.props.handleLogout()}> Log Out </button>
          {this.state.redirect ? <Redirect to='/Welcome'/> : null}
      </div>
    );
  }
}

export default EditAccount;

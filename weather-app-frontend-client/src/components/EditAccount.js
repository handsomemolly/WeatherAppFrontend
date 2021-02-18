import React, { Component } from "react";
import Nav from "../Nav";
class EditAccount extends Component {


  handleChange = (e) => {

  }

  render() {
    return (
      <div>
        <Nav/>
        {console.log(this.props.userInfo)}
        <form>
          <label>
            <input onChange={e => this.handleChange(e)} type="text" value={this.props.userInfo.email} id="email" name="email"/> <br/>
          </label>

          <label>
            <input onChange={e => this.handleChange(e)} type="text" value={this.props.userInfo.username}  id="username" name="username"/> <br/>
          </label>

          <label>
            <input onChange={e => this.handleChange(e)} type="text" value={this.props.userInfo.password}id="password" name="password"/> <br/>
          </label>
            <button type="submit">Update Account</button>
        </form>
          <button onClick ={() =>  this.handleDelete}> Delete Account </button>
      </div>
    );
  }
}

export default EditAccount;

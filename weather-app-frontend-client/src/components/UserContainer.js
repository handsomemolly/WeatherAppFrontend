import React, {Component} from 'react'
import Signup from './Signup'
import LogIn from './LogIn'

class UserContainer extends Component {

  state = {
    loginSwitch: false
  }

  showLogIn = () => {
    this.setState(prevState => {
      return{
        loginSwitch: !prevState.loginSwitch
      }
    })
  }

  render(){
    return (
      <div>
        {this.state.loginSwitch ? <LogIn toggleButton={this.showLogIn}/> : <Signup toggleButton={this.showLogIn}/>}
      </div>
    );
  }
}

export default UserContainer;

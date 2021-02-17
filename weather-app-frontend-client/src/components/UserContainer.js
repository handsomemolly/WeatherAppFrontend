import React, {Component} from 'react'
import Signup from './Signup'
import LogIn from './LogIn'

class UserContainer extends Component {

  state = {
    thingy: false
  }

  showLogIn = () => {
    this.setState(prevState => {
      return{
        thingy: !prevState.thingy
      }
    })
  }

  render(){
    return (
      <div>
        {this.state.thingy ? <LogIn toggleButton={this.showLogIn}/> : <Signup toggleButton={this.showLogIn}/>}
      </div>
    );
  }
}

export default UserContainer;

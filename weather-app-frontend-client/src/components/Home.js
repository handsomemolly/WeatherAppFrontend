import React, { Component } from "react";
import CurrentContainer from "./CurrentContainer";
import WeeklyContainer from "./WeeklyContainer";
import UserLocations from './UserLocations'

class Home extends Component {
  state = {
    current: { weather: [{ description: "" }] },
    daily: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/user_locations/render_request")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ current: data.lmao.current, daily: data.lmao.daily });
        console.log(this.state);
      });
  }
  render() {
    return (
      <div>
        <h3> Home </h3>
        <div>{<CurrentContainer current={this.state.current} />}</div>
        <div>{<WeeklyContainer daily={this.state.daily} />}</div>
        <div>{<UserLocations />}</div>

      </div>
    );
  }
}

export default Home;

// class Home extends Component {
//   state = {
//     current: { weather: [{ description: "" }] },
//     daily: {},
//   };

//   componentDidMount() {
//     fetch("http://localhost:3000/user_locations/render_request")
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState(
//           { current: data.lmao.current },
//           { daily: data.lmao.daily }
//         );
//         console.log(this.state);
//       });
//   }
//   render() {
//     return (
//       <div>
//         <h3> Home </h3>
//         <div>{<CurrentContainer allData={this.state.current} />}</div>
//         <div>{<WeeklyContainer allData={this.state.daily} />}</div>
//       </div>
//     );
//   }
// }

// export default Home;

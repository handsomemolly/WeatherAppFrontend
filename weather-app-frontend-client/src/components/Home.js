import React, { Component } from "react";
import CurrentContainer from "./CurrentContainer";
import WeeklyContainer from "./WeeklyContainer";
import CitySelect from "./CitySelect";
import EditAccount from "./EditAccount";
import userEvent from "@testing-library/user-event";
import Nav from "../Nav";
import UserContainer from './UserContainer'
import { BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component {
  state = {
    current: { weather: [{ description: "" }] },
    daily: [],
    name: "",
    location_id: 0,
    selectedLocations: {}
  };

  submitName = (e, name) => {
    e.preventDefault();
    console.log(name);
  };

  addToUserLocation = (e, location_id) => {
    console.log(location_id);
    let newUserLocation = {
      default: false,
      user_id: this.props.userInfo.id,
      location_id: location_id,
    };

    fetch("http://localhost:3000/user_locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserLocation),
    })
      .then((res) => res.json())
      .then((userloc) => {
        console.log(userloc);
      });
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
        <Nav/>
        <h3> Home </h3>

        <div>
          {" "}
          <CitySelect
            submitName={this.submitName}
            addToUserLocation={this.addToUserLocation}
          />{" "}
        </div>
        <div>{<CurrentContainer current={this.state.current} />}</div>
        <div>{<WeeklyContainer daily={this.state.daily} />}</div>
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

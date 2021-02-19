import React, { Component } from "react";
import CurrentContainer from "./CurrentContainer";
import WeeklyContainer from "./WeeklyContainer";
import UserLocations from "./UserLocations";
import CitySelect from "./CitySelect";
import EditAccount from "./EditAccount";
import userEvent from "@testing-library/user-event";
import Nav from "../Nav";
import UserContainer from './UserContainer'
import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component {
  state = {
    current: { weather: [{ description: "" }] },
    daily: [],
    name: "",
    location_id: 0,
    user_locations: [],
    selected: "San Francisco",
    locations: [],
  };

  // deleteUserLocation = (location) => {
  //   fetch(`http://localhost:3000/user_locations/${location.id}`,{
  //     method: "DELETE",
  //   })
  // }

  cityList = () => {
    fetch("http://localhost:3000/locations")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locations: data,
        });
      });
  };

  showLocations = () => {
    return fetch(`http://localhost:3000/users/${this.props.userInfo.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user_locations: data.locations });
        console.log(this.state);
      });
    // selectedLocations: {}
  };

  selectLocation = (e) => {
    this.setState({ selected: e.target.value });
    // return e.target.value;
  };

  selectLocation2 = (name) => {
    console.log(name);
    this.setState({
      selected: name,
    });
    this.fetchSelectedForecast(name);
  };

  fetchSelectedForecast = (name) => {
    fetch(`http://localhost:3000/user_locations/render_request?name=${name}`)
      .then((res) => res.json())
      .then((name) => {
        this.setState({ current: name.lmao.current, daily: name.lmao.daily });
      });
  };

  submitName = (e, name) => {
    e.preventDefault();
    this.fetchSelectedForecast(name);
    console.log(name);
  };

  addToUserLocation = (e, location) => {
    console.log(location);
    let newUserLocation = {
      default: false,
      user_id: this.props.userInfo.id,
      location_id: location.id,
    };
    this.setState({
      user_locations: [...this.state.user_locations, location],
    });

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
        // console.log(this.state);
      });
  }
  render() {
    return (
      <div>
        <Nav/> <br/>
        <h3 className="text-white"> Weather </h3>

        <div>
          {" "}
          <CitySelect
            submitName={this.submitName}
            addToUserLocation={this.addToUserLocation}
            selectLocation={this.selectLocation}
            cityList={this.cityList}
            stateData={this.state}
          />{" "}
        </div>
        <div>
          {
            <CurrentContainer
              current={this.state.current}
              selected={this.state.selected}
            />
          }
        </div>
        <div>{<WeeklyContainer daily={this.state.daily} />}</div>
        <div>
          <UserLocations
            showLocations={this.showLocations}
            user_locations={this.state.user_locations}
            selectLocation={this.selectLocation2}
            stateData={this.state}
          />
        </div>
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

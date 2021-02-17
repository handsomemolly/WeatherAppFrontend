import React, { Component } from "react";
import CurrentContainer from "./CurrentContainer";
import WeeklyContainer from "./WeeklyContainer";
import CitySelect from "./CitySelect";
import userEvent from "@testing-library/user-event";

class Home extends Component {
  state = {
    current: { weather: [{ description: "" }] },
    daily: [],
    name: "",
    id: 0,
  };

  submitName = (e, name) => {
    e.preventDefault();
    console.log(name);
  };

  addToUserLocation = (e, id) => {
    console.log(id);
    //   let newUserLocation = {
    //     default: false,
    //     user_id: "",
    //     location_id: id,
    //   };

    //   fetch("http://localhost:3000/user_locations", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newUserLocation),
    //   })
    //     .then((res) => res.json())
    //     .then((ul) => {
    //       console.log(ul);
    //     });
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

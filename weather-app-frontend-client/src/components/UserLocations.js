import React from "react";
class UserLocations extends React.Component {
  //   state = {
  //     user_locations: [],
  //   };

  //   showLocations = () => {
  //     return fetch(`http://localhost:3000/user_locations`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         this.setState({ user_locations: data });
  //         console.log(this.state);
  //       });
  //   };

  renderLocations = () => {
    return this.props.user_locations.map((location) => {
      return (
        <div>
          <li>{location.id}</li>
          <button>Test</button>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>My Locations</h2>
        <ul>{this.renderLocations()}</ul>
      </div>
    );
  }
}
export default UserLocations;

// fetch(`http://localhost:3000/users/${}/locations`)

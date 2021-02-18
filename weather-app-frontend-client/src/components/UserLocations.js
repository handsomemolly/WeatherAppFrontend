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
        <tr>
          <td>{location.id}</td>
          <td>
            <button>Show Forecast</button>
          </td>
          <td>
            <button>Remove Location</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>My Locations</h2>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Test</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderLocations()}</tbody>
        </table>
      </div>
    );
  }
}
export default UserLocations;

// fetch(`http://localhost:3000/users/${}/locations`)

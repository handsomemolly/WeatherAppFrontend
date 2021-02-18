import React from "react";
class UserLocations extends React.Component {
  state = {
    selected: "",
  };

  componentDidMount() {
    this.renderLocations();
  }

  renderLocations = () => {
    return this.props.user_locations.map((location) => {
      return (
        <tr>
          <td>{location.city}</td>
          <td>
            <button
              onClick={(e) => this.setState({ selected: e.target.value })}
            >
              >Show Forecast
            </button>
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

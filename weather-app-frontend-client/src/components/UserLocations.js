import React from "react";
class UserLocations extends React.Component {
  //   componentDidMount() {
  //     this.showLocations();
  //   }
  showLocations = () => {
    // fetch(`http://localhost:3000/users/${}/locations`)
    fetch(`http://localhost:3000/user_locations`)
      .then((res) => res.json())
      .then((data) => {
        return data.map((location) => {
          console.log(location);
        });
      });
  };
  render() {
    return (
      <div>
        <h2>My Locations</h2>
        <div>{this.showLocations()}</div>
      </div>
    );
  }
}
export default UserLocations;

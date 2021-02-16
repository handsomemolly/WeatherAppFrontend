import React from "react";

class UserLocations extends React.Component {
    displayCities = () => {
        fetch("http://localhost:3000/user_locations")
          .then((res) => res.json())
          .then((data) => { 
            data.map(location => <li>{location.city}</li>);
          });
      }
  
  render() {
    return (
      <div>
        <h3>
          My Locations:
        </h3>
        <ul>{this.displayCities}</ul>

      </div>
    );
  }
}

export default UserLocations;

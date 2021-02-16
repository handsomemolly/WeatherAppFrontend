import React from "react";

class CurrentContainer extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Current Weather:
          {this.props.current.weather[0].description}
        </h3>
        <p>Temp: {this.props.current.temp}</p>
        <p>Feels Like: {this.props.current.feels_like}</p>
        <p>Humidity: {this.props.current.humidity}%</p>
        <p>Wind: {this.props.current.wind_speed} mph</p>
      </div>
    );
  }
}

export default CurrentContainer;

import React from "react";

class CurrentContainer extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Current Weather:
          {this.props.allData.lmao.current.weather[0].description}
        </h3>
        <p>Temp: {this.props.allData.lmao.current.temp}</p>
        <p>Feels Like: {this.props.allData.lmao.current.feels_like}</p>
        <p>Humidity: {this.props.allData.lmao.current.humidity}%</p>
        <p>Wind: {this.props.allData.lmao.current.wind_speed} mph</p>
      </div>
    );
  }
}

export default CurrentContainer;

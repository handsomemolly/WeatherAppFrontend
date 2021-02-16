import React from "react";

class WeeklyContainer extends React.Component {
  generateForecast = () => {
    return this.props.daily.map((eachDay) => {
      let unixTime = eachDay.dt;
      let date = new Date(unixTime * 1000);
      return (
        <div>
          <tr>
            <h3>Date:{date.toLocaleDateString("en-US")} </h3>
            <td>Conditions: {eachDay.weather[0].description}</td>
            <td>High:{eachDay.temp.max}</td>
            <td>Low: {eachDay.temp.min}</td>
          </tr>
        </div>
      );
    });
  };
  render() {
    return <div>{<ul> {this.generateForecast()} </ul>}</div>;
  }
}

export default WeeklyContainer;

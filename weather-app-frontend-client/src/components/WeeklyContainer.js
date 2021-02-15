import React from "react";

class WeeklyContainer extends React.Component {
  generateForecast = () => {
    return this.props.allData.lmao.daily.map((eachDay) => {
      let unixTime = eachDay.dt;
      let date = new Date(unixTime * 1000);
      return (
        <div>
          <h3>Date:{date.toLocaleDateString("en-US")} </h3>
          <p>Conditions: {eachDay.weather[0].description}</p>
          <p>High:{eachDay.temp.max}</p>
          <p>Low: {eachDay.temp.min}</p>
        </div>
      );
    });
  };
  render() {
    return <div>{<ul> {this.generateForecast()} </ul>}</div>;
  }
}

export default WeeklyContainer;

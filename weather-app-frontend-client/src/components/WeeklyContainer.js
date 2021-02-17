import React from "react";
import { Card } from 'semantic-ui-react'

class WeeklyContainer extends React.Component {
  generateForecast = () => {
    return this.props.daily.map((eachDay) => {
      let unixTime = eachDay.dt;
      let date = new Date(unixTime * 1000);
      return (
        <Card>
        <Card.Content className = "cardInfo">
            <Card.Header>Date:{date.toLocaleDateString("en-US")}</Card.Header>
            <ul>
              <li>Conditions: {eachDay.weather[0].description}</li>
              <li>High:{eachDay.temp.max}</li>
              <li>Low: {eachDay.temp.min}</li>
            </ul>
        </Card.Content>
        </Card>
      );
    });
  };
  render() {
    return <div>{<ul> {this.generateForecast()} </ul>}</div>;
  }
}

export default WeeklyContainer;

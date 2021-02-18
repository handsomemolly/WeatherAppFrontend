import React from "react";
import { Card } from "semantic-ui-react";

class WeeklyContainer extends React.Component {
  generateForecast = () => {
    let newForecast = [...this.props.daily];
    newForecast.shift();
    return newForecast.map((eachDay) => {
      let unixTime = eachDay.dt;
      let date = new Date(unixTime * 1000);

      return (
        <td>
          <Card>
            <Card.Content className="cardInfo">
              <Card.Header>{date.toLocaleDateString("en-US")}</Card.Header>
              <div className={"i" + eachDay.weather[0].icon}>
                <ul>
                  <p>Conditions: {eachDay.weather[0].description}</p>
                  <p>High: {Math.round(eachDay.temp.max)}°F</p>
                  <p>Low: {Math.round(eachDay.temp.min)}°F</p>
                </ul>
              </div>
            </Card.Content>
          </Card>
        </td>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="Weekly">
          <tbody>
            <tr>{this.generateForecast()}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeeklyContainer;

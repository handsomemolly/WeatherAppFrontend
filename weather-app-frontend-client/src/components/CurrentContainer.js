import React from "react";
import { Card } from "semantic-ui-react";
import CitySelect from "./CitySelect";

class CurrentContainer extends React.Component {
  render() {
    return (
      <Card className="Current-Card">
        <Card.Content>
          <div className="Current-Weather">
            <h3>
              Current Weather: <br></br>
              {this.props.current.weather[0].description}
            </h3>
            <p>Temp: {Math.round(this.props.current.temp)}°F</p>
            <p>Feels Like: {Math.round(this.props.current.feels_like)}°F</p>
            <p>Humidity: {this.props.current.humidity}%</p>
            <p>Wind: {Math.round(this.props.current.wind_speed)} mph</p>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default CurrentContainer;

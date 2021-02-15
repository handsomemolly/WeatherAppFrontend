import React, { Component } from "react";
import CurrentContainer from "./CurrentContainer";
import WeeklyContainer from "./WeeklyContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <h3> Home </h3>
        <div>
          <CurrentContainer allData={this.props.allData} />
        </div>
        <div>
          <WeeklyContainer allData={this.props.allData} />
        </div>
      </div>
    );
  }
}

export default Home;

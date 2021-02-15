import React from "react";

class WeeklyContainer extends React.Component {
  render() {
    console.log(this.props.allData);
    return <div>{<ul> {this.props.allData.lmao.daily[0].temp.day} </ul>}</div>;
  }
}

export default WeeklyContainer;

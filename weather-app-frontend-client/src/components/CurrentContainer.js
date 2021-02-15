import React from "react";

class CurrentContainer extends React.Component {
  render() {
    return <div>{<ul> {this.props.allData.lmao.daily[0].temp.day} </ul>}</div>;
  }
}

export default CurrentContainer;

import React from "react";

class CitySelect extends React.Component {

  state = {
    locations: [],
    selected: ""
  }

  componentDidMount() {
    this.cityList()
  }
  cityList = () => {
    fetch("http://localhost:3000/locations")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locations: data
        })
      });
  }



  render() {
    return (
      <form onSubmit = {(e) => this.props.submitName(e, this.state.selected)} >
        <select onChange = {(e) => this.setState({selected: e.target.value})}>
          <option selected="">Select City </option>
          {this.state.locations.length > 0 && this.state.locations.map(location => {
            return <option>{location.city}</option>
          })}
        </select>
        <input type="submit" value="GO"/>
      </form>
    )
  }
}

export default CitySelect;

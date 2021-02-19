import React from "react";

class CitySelect extends React.Component {
  // state = {
  //   locations: [],
  //   id: 0,
  // };

  componentDidMount() {
    this.props.cityList();
  }

  render() {
    return (
      <form
        onSubmit={(e) =>
          this.props.submitName(e, this.props.stateData.selected)
        }
      >
        <select onChange={(e) => this.props.selectLocation(e)}>
          <option selected="">Select City </option>
          {this.props.stateData.locations.length > 0 &&
            this.props.stateData.locations.map((location) => {
              return <option>{location.city}</option>;
            })}
        </select>
        <input type="submit" value="GO" />
        <input
          onClick={(e) =>
            this.props.addToUserLocation(
              e,
              this.props.stateData.locations.find(
                (location) => this.props.stateData.selected === location.city
              )
            )
          }
          type="button"
          value="Add to Favorites"
        />
      </form>
    );
  }
}

export default CitySelect;

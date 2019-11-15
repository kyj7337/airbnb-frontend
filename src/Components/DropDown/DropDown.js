import React, { Component } from "react";
import "./DropDown.scss";
export class DropDown extends Component {
  render() {
    const { name, array } = this.props;
    const option = array.map(el => {
      return <option value={el}>{el}</option>;
    });

    return (
      <>
        <div className="dropdown-container">
          <div className="dropdown-name">{name} :</div>
          <select
            onChange={this.handleData}
            name="language"
            className="dropdown-field"
          >
            {option}
          </select>
        </div>
      </>
    );
  }
}

export default DropDown;

import React, { Component } from "react";
import "./DropDown.scss";
export class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      tag: [],
      id: [],
      list: [],
      el: []
    };
  }
  handleData = e => {
    console.dir(e.target.selectedOptions[0].text);
    this.setState(
      {
        id: this.state.id.concat({ id: e.target.value }),
        tag: this.state.tag.concat(e.target.selectedOptions[0].text)
      },
      () => this.props.drop(this.state.id, this.state.tag, this.props.name)
    );
  };
  render() {
    const { name, data, type } = this.props;

    const option = data.map((el, index) => {
      return <option value={el.id}>{el[type]}</option>;
    });
    const tag = this.state.tag.map(el => {
      return <div className="tag">{el}</div>;
    });
    return (
      <>
        <div style={this.props.margin} className="dropdown-container">
          <div className="dropdown-name">{name} </div>
          <select
            style={this.props.style}
            onChange={this.handleData}
            name="dropdown"
            className="dropdown-field"
          >
            {option}
          </select>
        </div>
        <div style={this.props.none} className="tag-container">
          {this.state.tag && tag}
        </div>
      </>
    );
  }
}

export default DropDown;

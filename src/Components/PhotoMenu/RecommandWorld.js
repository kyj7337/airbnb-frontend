import React, { Component } from "react";

export class RecommandWorld extends Component {
  render() {
    return (
      <div className="recommand__photoContainer">
        <div className="recommand__photoContainer__menu">
          <img src={this.props.img} alt="textImg" />
          <div className="countryName">{this.props.location}</div>
        </div>
      </div>
    );
  }
}

export default RecommandWorld;

import React, { Component } from "react";

export class RecommendWorld extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        onClick={this.props.clicked}
        className="recommend__photoContainer"
      >
        <div className="recommend__photoContainer__menu">
          <img src={this.props.img} alt="textImg" />
          <div className="countryName">{this.props.location}</div>
        </div>
      </div>
    );
  }
}

export default RecommendWorld;

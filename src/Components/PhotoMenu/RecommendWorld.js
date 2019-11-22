import React, { Component } from "react";

export class RecommendWorld extends Component {
  handleClick = () => {
    const { _id } = this.props;
    this.props.clicked(_id);
  };
  render() {
    return (
      <div onClick={this.handleClick} className="recommend__photoContainer">
        <div className="recommend__photoContainer__menu">
          <img src={this.props.img} alt="textImg" />
          <div className="countryName">{this.props.location}</div>
        </div>
      </div>
    );
  }
}

export default RecommendWorld;

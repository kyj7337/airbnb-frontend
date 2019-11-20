import React, { Component } from "react";
import "./Google.scss";

class Google extends Component {
  render() {
    return (
      <div className="loc">
        <img src={require("../../../Styles/location.png")} alt="" />
      </div>
    );
  }
}

export default Google;

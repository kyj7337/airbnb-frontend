import React, { Component } from "react";
import "./Warning.scss";
// import WarningMockup from "./WarningMockup";

export class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warninglist: []
    };
  }

  render() {
    const { warninglist } = this.props;
    return (
      <div className="warning-wrapper">
        <div className="warning-name">유의 사항</div>
        <div className="warning-subname">숙소 이용규칙</div>
        <div className="warning-list">
          {warninglist &&
            warninglist.map((e, index) => <span key={index}>{e}</span>)}
        </div>
      </div>
    );
  }
}

export default Warning;

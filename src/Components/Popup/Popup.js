import React, { Component } from "react";
import "./Popup.scss";
// import PopupMockup from "./PopupMockup";

export class Popup extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { utilitylist } = this.props;
    console.log(utilitylist);
    return (
      <div className="popup-wrapper">
        <div className="popup-inner">
          <div className="utility-title">편의 시설</div>
          <div className="utility-list">
            {/* {PopupMockup.list.map(e => (
              <div className="list">{e}</div>
            ))} */}

            {utilitylist.map(e => (
              <div className="list">{e}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;

import React, { Component } from "react";
import RoomDetailMockUp from "Pages/RoomsDetailPage/RoomDetailMain/RoomDetailMockup";
import Popup from "Components/Popup/Popup";
import "./Utility.scss";

export class Utility extends Component {
  constructor() {
    super();
    this.state = {
      showpopup: false
    };
  }
  popupswitch = () => {
    const { showpopup } = this.state;
    this.setState({ showpopup: !showpopup });
  };
  //팝업에 사용되는 함수, 실행될때마다 false, true 바뀜
  render() {
    const { showpopup } = this.state;
    const { utilitycount, utilitylist } = this.props;
    return (
      <div className="utility-wrapper">
        <div className="subt">편의시설</div>
        <div className="utility-column1">
          <div className="utility-one">
            <img
              className="utility-wifi"
              alt=""
              src={require("Styles/wifi.png")}
            />
            <span className="wifi">무선 인터넷</span>
          </div>
          <div className="utility-two">
            <img
              className="utility-pargking"
              alt=""
              src={require("Styles/parking.png")}
            />
            <span className="wifi">건물 내 무료주차</span>
          </div>
        </div>
        <div className="utility-column2">
          <div className="utility-three">
            <img
              className="utility-kitchen"
              alt=""
              src={require("Styles/kitchen.png")}
            />
            <span className="wifi">주방</span>
          </div>
          <div className="utility-four">
            <img
              className="utility-temperature"
              alt=""
              src={require("Styles/temperature.png")}
            />
            <span className="wifi">난방</span>
          </div>
        </div>
        <div className="popup-button-wrapper">
          <button className="popup-button" onClick={this.popupswitch}>
            {utilitycount}개 편의 시설 모두 보기
            {/* 편의시설 개수 넣는건 상의해서 지워도 좋을지 */}
            {showpopup ? (
              <Popup utilitylist={utilitylist} closepopup={this.popupswitch} />
            ) : null}
          </button>
        </div>
      </div>
    );
  }
}

export default Utility;

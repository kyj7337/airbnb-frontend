import React, { Component } from "react";
// import RoomDetailMockUp from "Pages/RoomsDetailPage/RoomDetailMain/RoomDetailMockup";
import "./Room.scss";

export class Room extends Component {
  render() {
    const { roomtype, roomtypedesc } = this.props;
    return (
      <div className="room-wrapper">
        <div className="room-info-one">
          <img
            className="house-icon"
            src={require("Styles/house.png")}
            alt=""
          />
          <div className="room-category">{roomtype}</div>
          <div className="information">{roomtypedesc}</div>
        </div>
        <div className="room-info-two">
          <img
            className="spray-icon"
            src={require("Styles/spray.png")}
            alt=""
          />
          <div className="room-category">높은 청결도</div>
          <div className="information">
            최근게스트가 이 숙소는 티 없이 깨끗하다고 후기를 남겼습니다.
          </div>
        </div>
        <div className="room-info-three">
          <img
            className="location-icon"
            src={require("Styles/location.png")}
            alt=""
          />
          <div className="room-category">훌륭한 숙소 위치</div>
          <div className="information">
            최근 숙박한 게스트가 위치에 별점 5점을 준 숙소입니다.
          </div>
        </div>
      </div>
    );
  }
}

export default Room;

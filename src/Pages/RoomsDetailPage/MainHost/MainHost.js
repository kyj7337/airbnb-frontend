import React, { Component } from "react";
// import RoomDetailMockUp from "Pages/RoomsDetailPage/RoomDetailMain/RoomDetailMockup";
import "./MainHost.scss";

export class MainHost extends Component {
  render() {
    const { name, hostpic, hostname, maxpeople, bed, bathroom } = this.props;
    return (
      <div className="main-host">
        <div className="room-name">{name}</div>

        <div className="host-pic">
          <img src={hostpic} alt="" className="host-pic-image" />
          <span className="host-name">{hostname}</span>
        </div>
        <div className="host-room-count">
          <span className="people-count">인원{maxpeople}명</span>

          <span className="bed-count">침대{bed}개</span>
          <span className="bathroom-count">욕실{bathroom}개</span>
        </div>
      </div>
    );
  }
}

export default MainHost;

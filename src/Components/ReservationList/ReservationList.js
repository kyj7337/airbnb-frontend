import React, { Component } from "react";

import "./ReservationList.scss";
export class ReservationList extends Component {
  render() {
    return (
      <>
        <div className="hostadmin-rooms-list">
          <div className="hostadmin-image"></div>
          <div className="hostadmin-room-info-container">
            <div className="hostadmin-room-name-container">Mongsang</div>
            <div className="hostadmin-reservation-date">
              <br />
              예약날짜:
              <br />
              <br />
              2019-11-22 ~ 2019-11-27
            </div>
            <div className="hostadmin-guest-name">
              <br />
              게스트: 조인호 외 1명
            </div>
            <div className="hostadmin-reservation-status">
              <br />
              예약현황: 예약신청
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ReservationList;

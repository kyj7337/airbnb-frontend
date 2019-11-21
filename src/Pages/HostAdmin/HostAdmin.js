import React, { Component } from "react";
import Reservation from "../../Components/ReservationList";
import "./HostAdmin.scss";
import ReservationList from "../../Components/ReservationList";
export class HostAdmin extends Component {
  render() {
    return (
      <div className="hostadmin-page">
        <div className="hostadmin-image-container">
          <div className="hostadmin-text">예약관리</div>
          <div className="hostadmin-image"></div>
        </div>
        <div className="hostadmin-rooms-list-container">
          <ReservationList />
          <ReservationList />
          <ReservationList />
          <ReservationList />
          <ReservationList />
        </div>
      </div>
    );
  }
}

export default HostAdmin;

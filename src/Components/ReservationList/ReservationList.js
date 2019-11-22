import React, { Component } from "react";

import "./ReservationList.scss";

export class ReservationList extends Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }
  handleStatus = () => {
    fetch("http://10.58.1.221:8000/reservation/confirm", {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNDh9.QBOVJMpQS_PUbX-hDecNlC3vvTiCrm8kc6aRAn3h9gc"
      },
      body: JSON.stringify({ reservation_id: this.props.data.reservation_id })
    });
    this.setState({});
    alert("예약이 완료 되었습니다.");
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <div className="hostadmin-rooms-list">
          <div
            className="hostadmin-image"
            style={{ backgroundImage: `url(${data.room_picture})` }}
          ></div>
          <div className="hostadmin-room-info-container">
            <div className="hostadmin-room-name-container">
              {data.room_title}
            </div>
            <div className="hostadmin-reservation-date">
              <br />
              <br />
              예약날짜:
              <br />
              <br />
              {data.check_in_year}- {data.check_in_month}- {data.check_in_day} ~
              {data.check_out_year}- {data.check_out_month}-{data.check_out_day}
            </div>
            <div className="hostadmin-guest-name">
              <br />
              게스트: {data.guest_name} 외 {data.guest_number - 1}명
            </div>
            <div className="hostadmin-reservation-status">
              <br />
              예약현황:{" "}
              <div className={data.is_confirmed ? "status" : ""}>
                <br />
                {data.is_confirmed ? "예약완료" : "예약신청"}
              </div>
              <br />
              <button className="hostadmin-cancle">예약거부</button>
              <button className="hostadmin-accept" onClick={this.handleStatus}>
                &nbsp;예약확인
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ReservationList;

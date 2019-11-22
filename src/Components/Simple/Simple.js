import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Simple.scss";

export class Simple extends Component {
  handlerclick = () => {
    this.props.history.push(
      "/RoomsDetailPage?id=" + this.props.children.room_id
    );
  };
  render() {
    const {
      check_in_year,
      check_in_month,
      check_in_day,
      check_out_year,
      check_out_month,
      check_out_day,
      price,
      room_picture,
      refund_desc,
      confirmation
    } = this.props.children;
    // console.log("넘어와서", this.props);
    return (
      <div onClick={this.handlerclick} className="simple-wrapper">
        <div className="simple-pic">
          <img src={room_picture} alt="" />
        </div>
        <div className="simple-text-wrapper">
          <div className="for-center">
            <div className="info">
              <span>· &nbsp;예약날짜</span> : {check_in_year}년 {check_in_month}
              월 {check_in_day}일 ~&nbsp;
              {check_out_year}년 {check_out_month}월{check_out_day}일까지
            </div>
            <div className="info">
              <span>· &nbsp;가격</span> : {price}&nbsp;원
            </div>
            <div className="info">
              <span>· &nbsp;숙소 예약 정책</span> : {refund_desc}
            </div>
            <div className="info2">자세히보기</div>
            {this.props.children.confirmation ? (
              <div className="true">예약완료</div>
            ) : (
              <div className="false">예약 대기중</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Simple);

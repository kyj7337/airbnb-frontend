import React, { Component } from "react";
import Simple from "Components/Simple/Simple";
import { GuestDetailAPI } from "config.js";
import "./GuestDetail.scss";
import Left from "./Left";

export class GuestDetail extends Component {
  state = {
    data: []
  };
  //fetch 내에서 주소만 바꿔주면됨
  componentDidMount() {
    fetch(GuestDetailAPI, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("access_token")
      }
    })
      .then(res => res.json())
      .then(info => {
        this.setState(
          {
            data: info
          },
          () => {
            // console.log("GuestDetail에서 state", this.state);
          }
        );
      });
  }
  handlerclick = () => {
    this.props.history.push("/RoomsDetailPage?id=" + this.state.data.id);
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
      room_id,
      refund_desc
    } = this.state.data;
    // console.log("render끝날때", this.state);
    return (
      <div className="guest-detail-wrapper">
        <img className="test" src={require("./aa.PNG")} alt="" />
        <div className="large-text">
          <span className="text">숙소 </span>
          <br />
          <span className="text">예약을</span>
          <br />
          <span className="text">확인하세요</span>
        </div>
        <div className="detail-left">
          <Left />
        </div>
        <div className="detail-right">
          {this.state.data.reservation_data &&
            this.state.data.reservation_data.map((e, index) => (
              <Simple
                onClick={this.handlerclick}
                key={index}
                S_year={check_in_year}
                S_month={check_in_month}
                S_day={check_in_day}
                E_year={check_out_year}
                E_month={check_out_month}
                E_day={check_out_day}
                price={price}
                picture={room_picture}
                id={room_id}
                refund_desc={refund_desc}
              >
                {e}
              </Simple>
            ))}
          {/* <Simple
            S_year={S_year}
            S_month={S_month}
            S_day={S_day}
            E_year={E_year}
            E_month={E_month}
            E_day={E_day}
            price={price}
            picture={picture}
          /> */}
        </div>
      </div>
    );
  }
}

export default GuestDetail;

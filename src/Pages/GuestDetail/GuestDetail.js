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
    window.addEventListener("scroll", this.handlescrol);
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
  handlescrol = () => {
    this.setState({ location: window.scrollY < 600 });
  };

  render() {
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
              <Simple>{e}</Simple>
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

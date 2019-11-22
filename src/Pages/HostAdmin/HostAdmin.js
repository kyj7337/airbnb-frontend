import React, { Component } from "react";
import ReservationList from "../../Components/ReservationList";
import Header from "../../Components/Header/DetailHeader";
import "./HostAdmin.scss";
export class HostAdmin extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("http://10.58.1.221:8001/reservation/host", {
      method: "get",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNDh9.QBOVJMpQS_PUbX-hDecNlC3vvTiCrm8kc6aRAn3h9gc"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ data: res.reservation_data }, () => {
          console.log(this.state.data);
        });
      });
  }
  render() {
    const list = this.state.data.map(el => {
      return <ReservationList data={el} />;
    });
    return (
      <>
        <Header />
        <div className="hostadmin-page">
          <div className="hostadmin-image-container">
            <div className="hostadmin-text">예약관리</div>
            <div className="hostadmin-image"></div>
          </div>
          <div className="hostadmin-rooms-list-container">
            {this.state.data && list}
          </div>
        </div>
      </>
    );
  }
}

export default HostAdmin;

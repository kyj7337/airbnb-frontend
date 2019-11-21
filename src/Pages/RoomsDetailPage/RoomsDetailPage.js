import React, { Component } from "react";
import "./RoomsDetailPage.scss";
import { withRouter } from "react-router-dom";
import Picture from "./Picture/Picture";
import RoomDetailMain from "./RoomDetailMain";
import { RoomDetailAPI } from "config.js";

export class RoomsDetailPage extends Component {
  state = {
    payment: true,
    data: {
      pic1: null,
      pic2: null,
      pic3: null,
      pic4: null,
      pic5: null
    }
  };

  PaymentClick = () => {
    this.setState({ payment: !this.state.payment });
  };

  componentDidMount() {
    fetch(RoomDetailAPI + this.props.location.search.split("=")[1], {
      method: "get"
    })
      .then(res => res.json())
      .then(info => {
        this.setState(
          {
            data: info.room_information
          },
          () => {
            // console.log(this.state.data);
          }
        );
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="whole-wrapper">
        <Picture
          pic1={data.pic1}
          pic2={data.pic2}
          pic3={data.pic3}
          pic4={data.pic4}
          pic5={data.pic5}
        ></Picture>

        <RoomDetailMain />
      </div>
    );
  }
}

export default withRouter(RoomsDetailPage);

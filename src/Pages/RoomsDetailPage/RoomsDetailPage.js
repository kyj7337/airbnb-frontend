import React, { Component } from "react";
import "./RoomsDetailPage.scss";
import { withRouter } from "react-router-dom";
import Picture from "./Picture/Picture";
import RoomDetailMain from "./RoomDetailMain";
import { RoomDetailAPI } from "config.js";
import DetailHeader from "Components/Header/DetailHeader.js";

export class RoomsDetailPage extends Component {
  state = {
    hd: true,
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
  handleScroll = () => {
    this.setState({ hd: window.scrollY < 450 });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
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
    const { data, hd } = this.state;
    const on = "hd";
    const off = "hd-off";
    return (
      <>
        <div className={hd ? on : off}>
          <DetailHeader />
        </div>
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
      </>
    );
  }
}

export default withRouter(RoomsDetailPage);

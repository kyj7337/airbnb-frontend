import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { withRouter } from "react-router-dom";
import { RoomDetailAPI } from "config.js";
import Google from "./Google.js";
import "./Map.scss";
// import RoomDetailMockUp from "Pages/RoomsDetailPage/RoomDetailMain/RoomDetailMockup";

export class Map extends Component {
  state = {
    center: {
      lat: null,
      lng: null
    },
    zoom: 3
  };

  componentDidMount() {
    fetch(RoomDetailAPI + this.props.location.search.split("=")[1], {
      method: "get"
    })
      .then(res => res.json())
      .then(info => {
        const center = {};
        center["lat"] = parseFloat(info.room_information.center.lat);
        center["lng"] = parseFloat(info.room_information.center.lng);
        this.setState(
          {
            center: center
          },
          () => {
            // console.log(this.state);
          }
        );
      });
  }

  _onchange = ({ center, zoom }) => {
    this.setState({ center: this.state.center, zoom: zoom });
  };

  render() {
    const { zoom, center } = this.state;
    const { hostname } = this.props;
    // console.log(this.props.lat, this.props.lng);
    return (
      <div className="map-wrapper">
        <div className="map-text">지역 정보</div>
        <div className="map-sub">
          {hostname}님의 숙소는 &nbsp;이곳에 있습니다.
        </div>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDQ8dLm7habhEQDScEm1viMB0pk9Xgw9oQ"
            }}
            center={{ lat: center.lat, lng: center.lng }}
            zoom={zoom}
            onChange={this._onchange}
          >
            <Google className="marker" lat={center.lat} lng={center.lng} />
          </GoogleMapReact>
        </div>
        <div className="map-bot">
          정확한 위치 정보는 예약이 확정된 후 알려드립니다.
        </div>
      </div>
    );
  }
}

export default withRouter(Map);

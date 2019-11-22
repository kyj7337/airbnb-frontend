import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class RoomListGoogleMap extends Component {
  componentDidMount() {
    const center = [];
    center["lat"] = this.props.lat;
    center["lng"] = this.props.lng;
    this.setState({ center: center }, () => {});
  }
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    console.log(typeof this.props.lat);

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
          center={{ lat: this.props.lat, lng: this.props.lng }}
        >
          {/* {this.state.center.map(e => {
            <Marker position={ lat: e.lat, lng: e.lng } />;
          })} */}
          <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDcgMH0W454KF6trMNnllNaS0LQaGSOY94"
})(RoomListGoogleMap);

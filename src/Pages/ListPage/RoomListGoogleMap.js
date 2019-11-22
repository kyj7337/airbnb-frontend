import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class RoomListGoogleMap extends Component {
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
          // initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
        >
          <Marker position={{ lat: 5, lng: 50 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDcgMH0W454KF6trMNnllNaS0LQaGSOY94"
})(RoomListGoogleMap);

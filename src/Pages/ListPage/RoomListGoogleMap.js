import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class RoomListGoogleMap extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 0, lng: 0 }}
        >
          <Marker position={{ lat: 0, lng: 0 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDcgMH0W454KF6trMNnllNaS0LQaGSOY94"
})(RoomListGoogleMap);

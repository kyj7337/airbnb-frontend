import React, { Component } from "react";
import DetailHeader from "Components/Header/DetailHeader";
import RoomList from "Components/RoomList/RoomList";
import "./ListPage.scss";
import RoomListGoogleMap from "./RoomListGoogleMap";

export class ListPage extends Component {
  state = {
    roomListArr: []
  };
  componentDidMount() {
    const id = this.props.history.location.search.split("=")[1];

    fetch(`http://10.58.1.221:8000/rooms/cities/${id}`, {})
      .then(res => res.json())
      .then(
        res => {
          console.log("res", res);
          this.setState(
            {
              roomListArr: res["searched_results"]
              // mapLat: Number(res.lat),
              // mapLng: Number(res["searched_results"].lng)
            },
            () => {
              //console.log(res);
            }
          );
        },
        () => {
          //console.log("여기", this.state);
        }
      );
  }

  render() {
    console.log("여기", this.state);
    const viewList = this.state.roomListArr.map(el => {
      return (
        <RoomList
          //clickPhotoMenu={this.handlePhotoMenu}
          _id={el.room_id}
          location={el.room_city}
          hotelInfo={el.room_title}
          pplNum={el.person}
          bedNum={el.beds}
          washroomNum={el.bathroom}
          img={el.pic1}
          lat={el.lat}
          lng={el.lng}
        />
      );
    });
    console.log({ viewList });
    return (
      <div className="WholeListContainer">
        <DetailHeader />

        <div className="listPageLeftSide">
          <div className="seperateLine" />
          <div className="infoMsg">
            <div className="infoMsgIcon" />
            <div className="infoMsgline">
              숙소에 대해 150,000개 이상의 게스트 후기가 있으며, 평점은 5점
              만점에 4.8점입니다.{" "}
            </div>
          </div>
          <div className="listpageTitle">300개 이상의 숙소</div>
          {viewList}
        </div>
        <div className="listPageRightSide">
          <RoomListGoogleMap
          // lat={this.state.roomsListArr.lat}
          // lng={this.state.roomsListArr.lng}
          />
        </div>
      </div>
    );
  }
}

export default ListPage;

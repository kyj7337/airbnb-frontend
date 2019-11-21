import React, { Component } from "react";
import DetailHeader from "Components/Header/DetailHeader";
import RoomList from "Components/RoomList/RoomList";
import "./ListPage.scss";
import RoomListGoogleMap from "./RoomListGoogleMap";

export class ListPage extends Component {
  render() {
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
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
        </div>
        <div className="listPageRightSide">
          <RoomListGoogleMap />
        </div>
      </div>
    );
  }
}

export default ListPage;

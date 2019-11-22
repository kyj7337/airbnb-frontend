import React, { Component } from "react";
import "./RoomList.scss";

export class RoomList extends Component {
  state = {
    img:
      "https://a0.muscache.com/im/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?aki_policy=x_large",
    roomType: "아파트 전체",
    roomTitle: "홍대입구역 whatever",
    reviewStar: "4.76",
    reviewNum: "188",
    pplNum: "2",
    bedNum: "1",
    washroomNum: "1",
    etcOption: "무선인터넷 • 난방 • 헤어드라이어 • 주방",
    roomPrice: "32,000"
  };

  handleClick = () => {
    const { _id } = this.props;
    this.props.clickList(_id);
  };
  render() {
    // <RoomList
    //   //clickPhotoMenu={this.handlePhotoMenu}
    //   _id={el.room_id}
    //   location={el.room_city}
    //   hotelInfo={el.room_title}
    //   pplNum={el.person}
    //   washroomNum={el.bathroom}
    //   img={el.pic1}
    //   lat={el.lat}
    //   lng={el.lng}
    // />;
    console.log("dll", this.props);
    return (
      <div onClick={this.handleClick} className="listPageContainer">
        <div className="listContainer">
          <img
            className="listImg"
            src={this.props.img}
            alt="listPage-roomsImg"
          />
          <div className="rightSideInfo">
            <div className="firstLine">
              <div className="hostInfo">
                <span className="superhost">슈퍼호스트</span>
                <div className="roomType">{this.state.roomType}</div>
              </div>
              <div className="reviewInfo">
                <div className="redStar" />
                {this.state.reviewStar} ({this.state.reviewNum})
              </div>
            </div>

            <div className="roomTitle">{this.props.hotelInfo}</div>
            <div className="insideInfo">
              인원 {this.props.pplNum}명 • 원룸 • 침대 {this.props.bedNum}개 •
              욕실
              {this.props.washroomNum}개
            </div>
            <div className="optionInfo">{this.state.etcOption}</div>
            <div className="roomPriceInfo">
              ₩<span>{this.props.roomPrice}</span> /1박
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomList;

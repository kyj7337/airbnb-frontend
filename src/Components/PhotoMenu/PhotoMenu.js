import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

export class PhotoMenu extends Component {
  // handleclick = () => {
  //   this.props.history.push("/RoomDetailPage?id=346");
  // };
  render() {
    console.log("이거", this.props);
    const { location, superHost, reviewNum, hotelInfo, img, id } = this.props;
    return (
      <div id={id} className="recommendByReview__photoContainer">
        <div className="recommendByReview__photoContainer__menu">
          <img
            src={img}
            onClick={this.handleclick}
            alt="recommend by review pictures"
          />
          <div className="hotelInfo">
            <div className="hotelInfo__Bar">
              <span className="superhost">{superHost}</span>
              <div className="location">{location}</div>
              <span className="starReview">
                <div className="starReview__redStar" />
                {reviewNum}
                {/* {Number(Math.random().toFixed(2)) + 4} */}
              </span>
            </div>
            <div className="hotelInfo__title">{hotelInfo}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoMenu;

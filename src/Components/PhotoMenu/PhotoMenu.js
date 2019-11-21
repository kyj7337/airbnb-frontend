import React from "react";

function PhotoMenu(props) {
  const { location, superHost, reviewNum, hotelInfo, img, id } = props;

  return (
    <div id={id} className="recommandByReview__photoContainer">
      <div className="recommandByReview__photoContainer__menu">
        <img src={img} alt="recommand by review pictures" />
        <div className="hotelInfo">
          <div className="hotelInfo__Bar">
            <span className="superhost">{superHost}</span>
            <div className="location">{location}</div>
            <span className="starReview">
              <div className="starReview__redStar" />
              {reviewNum}
            </span>
          </div>
          <div className="hotelInfo__title">{hotelInfo}</div>
        </div>
      </div>
    </div>
  );
}

export default PhotoMenu;

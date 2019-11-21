import React from "react";

function BiggerPhotoMenu(props) {
  const { location, superHost, reviewNum, hotelInfo, img, id } = props;
  //const { randNum } = parseFloat(Math.random().toFixed(2)) + 4;
  return (
    <div id={id} className="recommendByReview__biggerPhotoContainer">
      <div className="recommendByReview__biggerPhotoContainer__menu">
        <img src={img} alt="recommend by review pictures" />
        <div className="hotelInfo">
          <div className="hotelInfo__Bar">
            <span className="superhost">{superHost}</span>
            <div className="location">{location}</div>
            <span className="starReview">
              <div className="starReview__redStar" />
              {/* {reviewNum} */}
              {Number(Math.random().toFixed(2)) + 4}
            </span>
          </div>
          <div className="hotelInfo__title">{hotelInfo}</div>
        </div>
      </div>
    </div>
  );
}

export default BiggerPhotoMenu;

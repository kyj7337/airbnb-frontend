import React, { Component } from "react";
import "./Address.scss";
export class Address extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleAddressData = data => {
    this.setState({ address: data }, () =>
      console.log("성공", this.state.address.postcode)
    );
  };
  searchAddress = e => {
    e.preventDefault();
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
      };
    var map = new window.daum.maps.Map(mapContainer, mapOption);
    //주소-좌표 변환 객체를 생성
    var geocoder = new window.daum.maps.services.Geocoder();
    //마커를 미리 생성
    var marker = new window.daum.maps.Marker({
      position: new window.daum.maps.LatLng(37.537187, 127.005476),
      map: map
    });

    new window.daum.Postcode({
      oncomplete: data => {
        console.log(data);
        this.handleAddressData(data);
        var addr = data.address; // 최종 주소 변수

        // 주소 정보를 해당 필드에 넣는다.
        document.getElementById("address-search-box").value = addr;
        // 주소로 상세 정보를 검색

        geocoder.addressSearch(data.address, (results, status) => {
          // 정상적으로 검색이 완료됐으면
          if (status === window.daum.maps.services.Status.OK) {
            var result = results[0]; //첫번째 결과의 값을 활용

            // 해당 주소에 대한 좌표를 받아서
            var coords = new window.daum.maps.LatLng(result.y, result.x);
            // 지도를 보여준다.
            mapContainer.style.display = "block";
            map.relayout();
            // 지도 중심을 변경한다.
            map.setCenter(coords);
            // 마커를 결과값으로 받은 위치로 옮긴다.
            marker.setPosition(coords);
          }
        });
      }
    }).open();
  };
  render() {
    return (
      <>
        <form className="address-container">
          <div className="host-address">위치 :</div>
          <div className="inner-address-container">
            <input type="text" id="address-search-box" placeholder="주소" />
            <button
              id="address-search-button"
              onClick={this.searchAddress}
              type="submit"
            >
              주소검색
            </button>
          </div>
          <div className="address-detail-container">
            <div className="address-eng"></div>
          </div>
          <div
            id="map"
            style={{
              width: "500px",
              height: "500px",
              marginTop: "10px",
              marginLeft: "10px",
              display: "none"
            }}
          ></div>
        </form>
      </>
    );
  }
}

export default Address;

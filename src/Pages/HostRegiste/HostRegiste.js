import React, { Component } from "react";
import "./HostRegiste.scss";

export class HostRegiste extends Component {
  constructor() {
    super();
    this.state = {};
  }
  log = e => {
    console.log(e.target);
  };
  //   handleData = data => {
  //     this.setState({ address: data }, () => console.log(this.state));
  //   };
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
      oncomplete: function(data) {
        console.log(data);
        //   this.handleData(data);
        var addr = data.address; // 최종 주소 변수

        // 주소 정보를 해당 필드에 넣는다.
        document.getElementById("address-search-box").value = addr;
        // 주소로 상세 정보를 검색

        geocoder.addressSearch(data.address, function(results, status) {
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
      <div className="host-registe-page">
        <div className="hr-step-container">
          <div className="hr-step-1"></div>
          <div className="hr-step-2"></div>
        </div>
        <div className="hr-step">step: 1</div>
        <div className="hr-guide-text-container">
          <div className="hr-guide-text">
            <h1>
              호스트가 되어보세요!! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 전 세계
              각국의 게스트를 만나보세요.
            </h1>
          </div>
          <div className="hr-guide-image"></div>
        </div>

        <div className="hr-registe-container">
          호스트 이미지 등록:
          <div className="hr-registe-profile-container">
            <div className="hr-registe-profile-image"></div>
            <input
              onClick={this.log}
              type="file"
              className="hr-registe-profile-input"
            ></input>
          </div>
          <div className="hr-host-nick-container">
            <div className="host-nick-name">호스트 이름 :</div>
            <input
              type="text"
              className="host-nick-name-field"
              placeholder="닉네임으로 사용할 이름을 입력하세요."
            ></input>
          </div>
          <div className="host-intro-container">
            <div className="host-intro">호스트 소개 :</div>
            <textarea
              type="text"
              className="host-intro-field"
              placeholder="게스트에 전할 글을 작성해 주세요."
            ></textarea>
          </div>
          <div className="host-relation-container">
            <div className="host-relation">게스트와의 교류 :</div>
            <textarea
              className="host-relation-field"
              placeholder="게스트와 어떤 종류의 교류를 원하시나요?"
            ></textarea>
          </div>
          <div className="host-language-container">
            <div className="host-language">사용가능 언어 :</div>
            <select className="language-drop">
              <option value="한국어">한국어</option>
              <option value="영어">영어</option>
            </select>
          </div>
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
        </div>
      </div>
    );
  }
}

export default HostRegiste;

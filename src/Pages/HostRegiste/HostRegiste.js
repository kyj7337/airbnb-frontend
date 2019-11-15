import React, { Component } from "react";
import "./HostRegiste.scss";

export class HostRegiste extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      hostName: "",
      hostIntro: "",
      relation: "",
      language: ""
    };
  }

  imgUpload = e => {
    e.persist();
    let reader = new FileReader();
    let file = e.target.files[0];
    this.setState({ image: reader }, () =>
      console.log(e.target.files[0], this.state)
    );

    reader.onloadend = () => {
      this.setState({ ...this.state, imgArr: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    let formData = new FormData();
    formData.append("image", file);

    let headers = {
      "content-type": "multipart/form-data"
    };

    // Axios.post("http://10.58.3.112:8000/aws/upload", formData, {
    //   headers
    // });
  };

  handleData = e => {
    if (e.target.name === "hostName") {
      this.setState({ hostName: e.target.value });
    } else if (e.target.name === "hostIntro") {
      this.setState({ hostIntro: e.target.value });
    } else if (e.target.name === "relation") {
      this.setState({ relation: e.target.value });
    } else if (e.target.value === "한국어") {
      this.setState({ language: e.target.value }, () => {
        console.log(this.state.language);
      });
    } else if (e.target.value === "영어") {
      this.setState({ language: e.target.value }, () => {
        console.log(this.state.language);
      });
    }
    console.log(this.state);
  };
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
      <div className="host-registe-page">
        <div className="hr-step-container">
          <div className="hr-step-1"></div>
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
            <div
              className="hr-registe-profile-image"
              style={{ backgroundImage: `url(${this.state.image.result})` }}
            ></div>
            <form method="post" encType="multipart/form-data">
              <input
                onChange={this.imgUpload}
                type="file"
                className="hr-registe-profile-input"
              ></input>
            </form>
          </div>
          <div className="hr-host-nick-container">
            <div className="host-nick-name">호스트 이름 :</div>
            <input
              onChange={this.handleData}
              name="hostName"
              type="text"
              className="host-nick-name-field"
              placeholder="닉네임으로 사용할 이름을 입력하세요."
            ></input>
          </div>
          <div className="host-intro-container">
            <div className="host-intro">호스트 소개 :</div>
            <textarea
              onChange={this.handleData}
              name="hostIntro"
              type="text"
              className="host-intro-field"
              placeholder="게스트에 전할 글을 작성해 주세요."
            ></textarea>
          </div>
          <div className="host-relation-container">
            <div className="host-relation">게스트와의 교류 :</div>
            <textarea
              onChange={this.handleData}
              name="relation"
              className="host-relation-field"
              placeholder="게스트와 어떤 종류의 교류를 원하시나요?"
            ></textarea>
          </div>
          <div className="host-language-container">
            <div className="host-language">사용가능 언어 :</div>
            <select
              onChange={this.handleData}
              name="language"
              className="language-drop"
            >
              <option name="한국어" value="한국어">
                한국어
              </option>
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
          <div className="hr-button-container">
            <button className="hr-cancle-button">취소</button>
            <button className="hr-next-button">다음&nbsp;&nbsp;></button>
          </div>
        </div>
      </div>
    );
  }
}

export default HostRegiste;

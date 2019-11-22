import React, { Component } from "react";
import "./Maps.scss";

export class Maps extends Component {
  state = {
    search: "",
    loc: [],
    roomName: "",
    roomType: "",
    countPerson: "",
    countRoom: "",
    countBed: "",
    countBath: "",
    localInfo: "",
    amenities: "",
    roomPhoto: "",
    roomLocation: []
  };
  input = null;

  componentDidMount() {
    const { kakao } = window;
    var mapContainer = this.input, // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
  }

  handleloc = e => {
    e.preventDefault();

    const { kakao } = window;
    var mapContainer = this.input, // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(this.state.search, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        this.setState({ loc: coords }, () => {
          this.props.handleLoc(this.state.loc.Ga, this.state.loc.Ha);
        });
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:6px 0;">나의숙소</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  };

  handleText = e => {
    this.setState({ search: e.target.value }, () => {
      console.log(this.state.search);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleloc}>
        <div className="textarea-container">
          <div className="textarea-name">숙소위치 :</div>
          <input
            className="textarea-field"
            type="textarea"
            value={this.state.search}
            onChange={this.handleText}
            placeholder="지번 또는 도로명 주소를 입력해주세요"
            style={{ marginBottom: "30px" }}
          />
          <div
            ref={ref => {
              this.input = ref;
            }}
            id="map"
            style={{ width: "61%", height: "450px", marginLeft: "10px" }}
          ></div>
        </div>
      </form>
    );
  }
}

export default Maps;

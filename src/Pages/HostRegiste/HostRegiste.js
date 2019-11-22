import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios, { post } from "axios";
import "./HostRegiste.scss";
import DropDown from "../../Components/DropDown";
// const getBase64 = file => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
//     reader.readAsDataURL(file);
//   });
// };
export class HostRegiste extends Component {
  constructor() {
    super();
    this.state = {
      image: {
        result:
          "https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png"
      },
      hostName: "",
      hostIntro: "",
      relation: "",
      language: [],
      address: "",
      file: "",
      language_list: [],
      tag: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    console.log(this.state.file);
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then(res => {
      console.log(res);
    });
    this.nextStep();
  }
  onChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      this.setState({ ...this.state, imgArr: reader.result });
    };
    this.setState({ file: file });
    this.setState({ image: reader }, () =>
      console.log("로드앤드", this.state.image)
    );
  }
  //multiple selector append
  fileUpload(file) {
    console.log(file);
    const url = "http://10.58.7.71:8000/registration/host_image";
    const formData = new FormData();
    formData.append("host_image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMzl9.IPsnya-POvVfcE-9OavKtcALGPxy61uXJJ7nQaCSazc"
      }
    };

    return post(url, formData, config);
  }
  // imageUpload = e => {
  //   const file = e.target.files[0];
  //   getBase64(file).then(base64 => {
  //     localStorage["fileBase64"] = base64;

  //     console.debug("file stored", base64);
  //   });

  //   this.setState({ a: localStorage.getItem("fileBase64") });

  //   let formData = new FormData();
  //   formData.append("images", this.state.file);
  //   console.log(formData.append("image", this.state.file));
  //   let headers = {
  //     "content-type": "multipart/form-data"
  //   };
  //   fetch("http://10.58.3.114:8000/registration/host_info", {
  //     method: "post",
  //     formData,
  //     headers: headers,

  //     FILES: { thumbnail: this.state.a }
  //   })
  //     .then(response => response.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // };
  // imgUpload = e => {
  //   e.persist();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   let formData = new FormData();
  //   formData.append("images", this.state.file);
  //   console.log(formData);
  //   for (let key in formData) {
  //     console.log(key);
  //   }
  //   this.setState({ file: file });
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }

  //   this.setState({ image: reader }, () =>
  //     console.log("로드앤드", this.state.image)
  //   );
  //   reader.onloadend = () => {
  //     this.setState({ ...this.state, imgArr: reader.result });
  //   };
  // };
  // nextStep = e => {
  //   let formData = new FormData();
  //   formData.append("images", this.state.file);
  //   console.log(formData.append("image", this.state.file));
  //   let headers = {
  //     "content-type": "multipart/form-data"
  //   };

  //   fetch("http://10.58.3.114:8000/registration/host_info", {
  //     method: "post",
  //     formData,
  //     headers: headers,
  //     body: JSON.stringify({
  //       nickname: this.state.hostName,
  //       intro: this.state.hostIntro,
  //       interaction: this.state.relation,
  //       country: this.state.address.roadAddressEnglish,
  //       city: this.state.address.query,
  //       language: []
  //     }),
  //     FILES: { thumbnail: this.state.image }
  //   })
  //     .then(response => response.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // };

  handleText = e => {
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
  componentDidMount() {
    fetch("http://10.58.7.71:8000/registration", {
      method: "get"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ language: res.language_list }, () => {
          console.log(this.state.language);
        });
      });
  }
  nextStep = () => {
    console.log(this.state);
    fetch("http://10.58.7.71:8000/registration/host_info", {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMzl9.IPsnya-POvVfcE-9OavKtcALGPxy61uXJJ7nQaCSazc"
      },
      body: JSON.stringify({
        nickname: this.state.hostName,
        intro: this.state.hostIntro,
        interaction: this.state.relation,
        country: this.state.address.address,
        city: "",
        language_list: this.state.language_list
      })
    }).then(res => {
      if (res.status === 200) {
        this.props.history.push("/hostRegisteStep2");
      }
    });
    // .then(res => {
    //   console.log(res);
    // });
  };
  handledata = e => {
    console.log(e.target.id);
    this.setState(
      {
        language_list: this.state.language_list.concat([
          { id: e.target.value }
        ]),
        tag: this.state.tag.concat(
          this.state.language.filter(el => el.id === e.target.value)
        )
      },
      () => {
        console.log(this.state.value);
      }
    );
  };
  render() {
    const languageTag = this.state.tag.map(el => {
      return <div className="language-tag">{el}</div>;
    });

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
          <form onSubmit={this.onFormSubmit}>
            <div className="hr-registe-profile-container">
              <div
                className="hr-registe-profile-image"
                style={{
                  backgroundImage: `url(${this.state.image.result})`
                }}
              ></div>
              {/* <input
                type="file"
                id="imageFile"
                name="imageFile"
                onChange={this.imageUpload}
              /> */}
              <input
                onChange={this.onChange}
                type="file"
                className="hr-registe-profile-input"
              ></input>
            </div>
            <div className="hr-host-nick-container">
              <div className="host-nick-name">호스트 이름 :</div>
              <input
                onChange={this.handText}
                name="hostName"
                type="text"
                className="host-nick-name-field"
                placeholder="닉네임으로 사용할 이름을 입력하세요."
              ></input>
            </div>
            <div className="host-intro-container">
              <div className="host-intro">호스트 소개 :</div>
              <textarea
                onChange={this.handText}
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
            {this.state.language && (
              <DropDown
                name="사용가능 언어 "
                data={this.state.language}
                handle={this.handledata}
              />
            )}
            <div className="language-tag-container">
              {this.state.language && languageTag}
            </div>
            <div className="address-container">
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
            </div>
            <div className="hr-button-container">
              <button className="hr-cancle-button">취소</button>
              <Link
                to={"/hostRegiste/2"}
                type="submit"
                className="hr-next-button"
              >
                다음&nbsp;&nbsp;>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default HostRegiste;

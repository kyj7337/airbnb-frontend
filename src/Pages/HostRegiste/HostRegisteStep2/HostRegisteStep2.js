import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios, { post } from "axios";
import PlusMinus from "../../../Components/PlusMinus";
import Address from "../../../Components/Address";
import TextArea from "../../../Components/TextArea";
import DropDown from "../../../Components/DropDown";
import Maps from "../../../Components/Maps/Maps";
import "./HostRegisteStep2.scss";

let upload = [];
export class HostRegisteStep2 extends Component {
  constructor() {
    super();
    this.state = {
      hostName: "인호",
      data: ["필수품목", "에어컨", "난방"],
      images: [],
      imgArr: [],
      load: [],
      file: [],
      image: [],
      roomName: "",
      address: "",
      roomsDetail: "",
      clean: "",
      pay: "",
      bedType: [],
      roomType: [],
      rules: [],
      policy: [],
      amenities: []
    };
  }

  // onFormSubmit = e => {
  //   e.preventDefault(); // Stop form submit
  //   this.fileUpload(this.state.file);

  //   // this.nextStep();
  // };
  onChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      this.setState({ ...this.state, imgArr: reader.result });
    };
    console.log(this.state.file.data);
    this.setState({ file: this.state.file.concat(file) }, () =>
      console.log(this.state.file, "감어")
    );
    this.setState({ image: this.state.image.concat(reader) }, () =>
      console.log("로드앤드", this.state.image)
    );
  };
  fileUpload = () => {
    fetch("http://10.58.0.155:8002/registration/room_info", {
      method: "post",
      headers: {
        Authorization: localStorage.getItem("access_token")
      },
      body: JSON.stringify({
        room_type_id: this.state.숙소유형,
        refund_policy_id: this.state.정책유형,
        title: this.state.roomName,
        person_limit: this.state.최대인원,
        bathroom: this.state.욕실,
        cleaning_fee: Number(this.state.clean),
        fee: Number(this.state.pay),
        lat: this.state.lat,
        lng: this.state.lng,
        number_of_beds: this.state.침대,
        amenitiy_list: this.state.편의시설,
        bed_type_list: this.state.침대유형,
        rule_list: this.state.이용규칙,
        description: this.state.roomName
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res.room_id);
        if (res.room_id) {
          const url = `http://10.58.0.155:8002/registration/room_images?room_id=${res.room_id}`;
          const formData = new FormData();
          for (let i = 0; i < this.state.file.length; i++) {
            formData.append("room_images", this.state.file[i]);
          }
          const config = {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: localStorage.getItem("access_token")
            }
          };

          return post(url, formData, config);
        }
      });
  };
  handlePlus = e => {
    console.log(e.target);
    let plusMinus = this.state.num;
    if (e.target.name === "minus" && this.state.num > 0) {
      this.setState({ num: (plusMinus -= 1) }, () => console.log(this.state));
    } else if (e.target.name === "plus" && this.state.num <= 20) {
      this.setState({ num: (plusMinus += 1) }, () => console.log(this.state));
    }
  };

  up = () => {
    return upload.push(this.state.images.result);
  };
  pickPhoto = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);
    let formData = new FormData();
    formData.append("image", file);

    reader.onloadend = () => {
      this.setState({ ...this.state, imgArr: reader });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    this.setState({ images: reader });
    this.up();
    this.setState({ load: upload }, () => console.log(upload));
  };
  componentDidMount() {
    fetch("http://10.58.0.155:8002/registration/room_type", {
      method: "get"
    }) //숙소유형
      .then(res => {
        return res.json();
      })
      .then(
        res => {
          console.log(res);
          this.setState({ roomType: res.room_types });
        },
        () => console.log(this.state.roomType)
      );
    fetch("http://10.58.0.155:8002/registration/bed_type", {
      method: "get"
    }) //침대유형
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ bedType: res.bed_types });
      });
    fetch("http://10.58.0.155:8002/registration/policy", {
      method: "get"
    }) //정책유형
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ policy: res.refund_policies });
      });
    fetch("http://10.58.0.155:8002/registration/rule", {
      method: "get"
    }) //이용규칙
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ rules: res.rules });
      });
    fetch("http://10.58.0.155:8002/registration/amenities", {
      method: "get"
    }) //편의시설
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ amenities: res.amenities });
      });
  }
  handleText = e => {
    this.setState({ roomName: e.target.value }, () => {
      console.log(this.state.roomName);
    });
  };
  handleSubmit = () => {};

  handleProps = (text, name) => {
    this.setState({ [name]: text }, () =>
      console.log(this.state[name], "성공", this.state)
    );
  };
  handleDrop = (id, tag, name) => {
    this.setState({ [name]: id }, () => console.log(this.state, "드랍"));
  };
  handlePM = (num, name) => {
    this.setState({ [name]: num }, () => {
      console.log("피엠", this.state);
    });
  };
  handleLoc = (lat, lng) => {
    this.setState({ lat: lat, lng: lng });
  };
  render() {
    const {
      hostName,
      data,
      roomType,
      bedType,
      rules,
      policy,
      amenities
    } = this.state;
    const photo = this.state.image.map(el => {
      if (el) {
        return (
          <div
            className="images"
            style={{ backgroundImage: `url(${el.result})` }}
          />
        );
      }
    });

    return (
      <div className="host-registe-page">
        <div className="hr-step-container">
          <div className="hr-step-2"></div>
        </div>
        <div className="hr-step">step: 2</div>
        <div className="hr-guide-text-container">
          <div className="hr-guide-text">
            <h1>{hostName}님, 숙소 등록을 계속 진행해 볼까요? </h1>
          </div>
          <div className="hr-guide-image2"></div>
        </div>

        <div className="hr-registe-container">
          <div className="rooms-name-container">
            <div className="rooms-name">숙소 이름 :</div>
            <input
              name="roomName"
              onChange={this.handleText}
              className="rooms-name-field"
              placeholder="숙소의 이름을 지어주세요"
            ></input>
          </div>
          <div className="dropdown-container">
            <DropDown
              drop={this.handleDrop}
              name="숙소유형"
              type={"room_type"}
              data={roomType}
            />
            <DropDown
              drop={this.handleDrop}
              name="침대유형"
              type={"bed_type"}
              data={bedType}
            />
            <DropDown
              drop={this.handleDrop}
              name="이용규칙"
              type={"rule"}
              data={rules}
            />
            <DropDown
              drop={this.handleDrop}
              name="정책유형"
              type={"policy"}
              data={policy}
            />
            <DropDown
              drop={this.handleDrop}
              name="편의시설"
              type={"amenity"}
              data={amenities}
            />
          </div>
          <div className="button-container">
            <PlusMinus pm={this.handlePM} nameProps="최대인원" />
            <PlusMinus pm={this.handlePM} nameProps="침대" />
            <PlusMinus pm={this.handlePM} nameProps="욕실" />
          </div>
          <div className="rooms-picture">숙소 사진등록 :</div>
          <form method="post" encType="multipart/form-data">
            <input
              onChange={this.onChange}
              type="file"
              className="hr-registe-profile-input"
              multiple
            />
            <div className="images-container">{photo}</div>
          </form>
          <Maps handleLoc={this.handleLoc} />
          <TextArea
            handleText={this.handleProps}
            name="지역정보"
            holder="숙소가 있는 지역의 소개를 해주세요"
          />
          <TextArea
            handleText={this.handleProps}
            name="숙소 상세설명"
            value="roomsDetail"
            holder="숙소에 대한 상세설명을 해주세요"
          />
          <TextArea
            handleText={this.handleProps}
            name="청소비"
            value="clean"
            holder="1일 청소비용 금액만 입력해주세요 ex)12000"
          />
          <TextArea
            handleText={this.handleProps}
            name="숙박요금"
            value="pay"
            holder="1일 숙박요금 금액만 입력해 주세요 ex) 55900"
          />
          <div className="hr-button-container">
            <Link to={"/hostRegiste"} className="hr-cancle-button">
              이전
            </Link>
            <button
              onClick={this.fileUpload}
              type="submit"
              className="hr-next-button"
            >
              다음&nbsp;&nbsp;>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HostRegisteStep2;

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PlusMinus from "../../../Components/PlusMinus";
import Address from "../../../Components/Address";
import TextArea from "../../../Components/TextArea";
import DropDown from "../../../Components/DropDown";
import "./HostRegisteStep2.scss";
let upload = [];
export class HostRegisteStep2 extends Component {
  constructor() {
    super();
    this.state = {
      hostName: "인호",
      array: ["필수품목", "에어컨", "난방"],
      images: [],
      imgArr: [],
      load: []
    };
  }

  imgUpload = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    this.setState({ images: reader });

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

  handlePlus = e => {
    console.log(e.target);
    let plusMinus = this.state.num;
    if (e.target.name === "minus" && this.state.num > 0) {
      this.setState({ num: (plusMinus -= 1) }, () => console.log(this.state));
    } else if (e.target.name === "plus" && this.state.num <= 20) {
      this.setState({ num: (plusMinus += 1) }, () => console.log(this.state));
    }
  };

  pickPhoto = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    this.setState({ images: reader }, () =>
      console.log(this.state.images.result)
    );

    reader.onloadend = () => {
      this.setState({ ...this.state, imgArr: reader });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    upload.push(this.state.images.result);
    this.setState({ load: upload }, () =>
      console.log(upload, this.state.images.result)
    );
  };

  render() {
    const { hostName, num, array, images, imgArr } = this.state;
    const photo = this.state.load.map(el => {
      return (
        <div className="images" style={{ backgroundImage: `url(${el})` }} />
      );
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
              className="rooms-name-field"
              placeholder="숙소의 이름을 지어주세요"
            ></input>
          </div>
          <div className="dropdown-container">
            <div className="dropdown-name">숙소유형 :</div>
            <select
              onChange={this.handleData}
              name="language"
              className="dropdown-field"
            >
              <option name="집전체" value="집전체">
                집 전체
              </option>
              <option value="개인실">개인실</option>
              <option value="다인실">다인실</option>
            </select>
          </div>
          <div className="button-container">
            <PlusMinus nameProps="최대인원" />
            <PlusMinus nameProps="침실" />
            <PlusMinus nameProps="침대" />
            <PlusMinus nameProps="욕실" />
          </div>
          <Address />
          <TextArea
            name="지역정보"
            holder="숙소가 있는 지역의 소개를 해주세요"
          />
          <TextArea
            name="숙소 상세설명"
            holder="숙소에 대한 상세설명을 해주세요"
          />
          <DropDown name="편의시설" array={array} />
          <form method="post" encType="multipart/form-data">
            <div className="images-container">{images && photo}</div>
            <input
              onChange={this.pickPhoto}
              type="file"
              className="hr-registe-profile-input"
              multiple
            />
          </form>
        </div>
      </div>
    );
  }
}

export default HostRegisteStep2;

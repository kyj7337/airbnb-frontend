import React, { Component } from "react";
import "./Picture.scss";
// import PictureMockup from "./PictureMockup";

export class Picture extends Component {
  state = {
    status: ""
  };

  mouse = () => {
    this.setState({ status: "-on" });
  };
  out = () => {
    this.setState({ status: "" });
  };
  render() {
    const { pic1, pic2, pic3, pic4, pic5 } = this.props;
    const { status } = this.state;
    return (
      <div
        className="pic-wrapper"
        onMouseEnter={this.mouse}
        // onMouseOut={this.Out}
      >
        <div className="hidden">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
            alt=""
            className="pic-shareicon"
          />
          <img src={require("./repl_heart.png")} alt="" className="pic-heart" />
        </div>
        <div className="pic-left">
          <img
            className={`pic-one${status}`}
            src={pic1}
            alt=""
            onMouseOut={this.out} //제일 큰 사진(지금사진)으로 이동 후 MouseOut 해야 원래 색 돌아옴, 개선 필요!
          />
        </div>
        <div className="pic-right-wrapper">
          <div className="pic-right-column1">
            <div className="pic-right-one">
              <img className={`pic-two${status}`} src={pic2} alt="" />
            </div>
            <div className="pic-right-two">
              <img className={`pic-three${status}`} src={pic3} alt="" />
            </div>
          </div>
          <div className="pic-right-column2">
            <div className="pic-right-three">
              <img className={`pic-four${status}`} src={pic4} alt="" />
              <div className="pic-share">
                <button className="share" value="Submit">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                    alt=""
                    className="pic-shareicon"
                  />
                  공유하기
                </button>
              </div>
              <div className="pic-save">
                <button className="save" value="Submit">
                  <img
                    src={require("./repl_heart.png")}
                    alt=""
                    className="pic-heart"
                  />
                  저장
                </button>
              </div>
            </div>
            <div className="pic-right-four">
              <img className={`pic-five${status}`} src={pic5} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Picture;

import React, { Component } from "react";
// import RoomDetailMockUp from "Pages/RoomsDetailPage/RoomDetailMain/RoomDetailMockup";
import "./HostIntro.scss";

export class HostIntro extends Component {
  state = {
    arr: [1, 2, 3]
  };
  alert = () => {
    alert("개발중입니다.");
  };

  render() {
    const { hostpic, hostname, hostintro, language } = this.props;
    return (
      <div className="host-intro-wrapper">
        <div className="host-top">
          <img className="host-top-pic" src={hostpic} alt="" />
          <div className="host-name">호스트 : {hostname} 님</div>

          <div className="auth">
            <img src={require("Styles/check.png")} alt="" />
            <span className="span">인증됨</span>
          </div>
        </div>
        <div className="host-bot">
          <div className="host-text">{hostintro}</div>
          <div className="host-language">
            언어 :
            <span>
              {language &&
                language.map((e, index) => <span key={index}> {e} </span>)}
            </span>
          </div>
          <div className="response">
            응답률 :<span> 100%</span>
          </div>
          <div className="response-time">
            응답에 소요된 시간 :<span> 1시간 이내</span>
          </div>
          <button className="to-host" onClick={this.alert}>
            호스트에게 연락하기
          </button>
        </div>
        <div className="between">
          <span className="bold">
            언제나 에어비엔비를 통해 대화를 나누세요 ·
          </span>
          <span>
            &nbsp;안전한 결제를 위해 에어비엔비 웹사이트나 앱 외부에서
            송금하거나 대화를 나누지 마세요.
          </span>
          <a
            className="color"
            href="https://www.airbnb.co.kr/help/article/199/"
          >
            &nbsp;더 알아보기
          </a>
        </div>
      </div>
    );
  }
}

export default HostIntro;

import React, { Component } from "react";
import "./SignUpDetail.scss";
import { Link, withRouter } from "react-router-dom";
export class SignUpDetail extends Component {
  faceBookLogin = () => {
    window.FB.login(
      function(response) {
        // handle the response
      },
      { scope: "public_profile,email" }
    );
  };
  loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        alert(JSON.stringify(authObj));
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
  };

  render() {
    return (
      <div className="sd-page">
        <div className="sd-container">
          <div className="close-button"></div>
          <div className="sd-sign-up-text">
            <div onClick={this.faceBookLogin} style={{ color: "#008489" }}>
              페이스북
            </div>
            &nbsp; 또는 &nbsp;
            <div onClick={this.loginWithKakao} style={{ color: "#008489" }}>
              카카오톡
            </div>
            으로 회원 가입하세요
          </div>
          <div className="or-container">
            <div className="under-border"></div>
            <span className="or">또는</span>
            <div className="under-border"></div>
          </div>
          <input
            className="sd-email-box"
            placeholder="이메일주소"
            type="text"
          />
          <input
            className="sd-first-name-box"
            placeholder="이름(예:길동)"
            type="text"
          />
          <input
            className="sd-last-name-box"
            placeholder="성(예:홍)"
            type="text"
          />
          <input
            className="sd-password-box"
            placeholder="비밀번호 설정"
            type="text"
          />
          <div className="warn-container">
            <div className="warn-protection-container">
              <svg className="x-mark" fill="red"></svg>
              <div className="warn-protection">비밀번호 보안 수준: 약함</div>
            </div>
            <div className="warn-name-email-container">
              <svg className="x-mark" fill="red"></svg>
              <div className="warn-name-email">
                이름이나 이메일 주소를 포함할 수 없습니다
              </div>
            </div>
            <div className="warn-length-container">
              <svg className="x-mark" fill="red"></svg>
              <div className="warn-length">최소 8자</div>
            </div>
            <div className="warn-num-mark-container">
              <svg className="x-mark" fill="red"></svg>
              <div className="warn-num-mark">숫자나 기호를 포함하세요</div>
            </div>
          </div>
          <div className="birth-day">생일</div>
          <div className="birth-day-guidance">
            만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
            위앤비 이용자에게 공개되지 않습니다.
          </div>
          <div className="yy-mm-dd-container">
            <select className="month" name="월" placeholder="월">
              <option value="월">월</option>
              <option value="1월">1월</option>
              <option value="2월">2월</option>
              <option value="3월">3월</option>
              <option value="4월">4월</option>
              <option value="5월">5월</option>
              <option value="6월">6월</option>
              <option value="7월">7월</option>
              <option value="8월">8월</option>
              <option value="9월">9월</option>
              <option value="10월">10월</option>
              <option value="11월">11월</option>
              <option value="12월">12월</option>
            </select>
            <select className="day" name="일" placeholder="일">
              <option value="일">일</option>
              <option value="1일">1일</option>
              <option value="2일">2일</option>
            </select>
            <select className="year">
              <option value="년">년</option>
              <option value="2019년">2019년</option>
              <option value="2018년">2018년</option>
              <option value="2017년">2017년</option>
            </select>
          </div>
          <div style={{ color: "#5c5c5c", fontSize: "13px" }}>
            에어비앤비의 마케팅 프로모션, 특별 할인 및 추천 여행 정보, 정책
            변경사항을 이메일로 보내드립니다.
          </div>
          <button className="sign-up-submit">가입하기</button>
          <div className="denied-container">
            <input className="denied-check-box" type="checkbox" />
            <div className="denied-message">
              에어비앤비에서 보내는 마케팅 메시지를 받고 싶지 않습니다. 계정
              관리 설정 또는 메시지의 링크에서 언제든지 수신을 거부할 수
              있습니다.
            </div>
          </div>
          <div className="sign-up-login-container">
            <div className="sign-up-script">이미 위앤비 계정이 있나요?</div>
            <Link to="/Login" style={{ color: "#008489", marginLeft: "10px" }}>
              로그인
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpDetail;

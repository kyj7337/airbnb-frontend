import React, { Component } from "react";

import { Link } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import "./SignUpDetail.scss";
export class SignUpDetail extends Component {
  constructor() {
    super();
    this.state = {
      hideMode: true,
      emailVal: "",
      passwordVal: "",
      firstName: "",
      lastName: "",
      fullDate: "",
      year: [],
      month: [],
      day: []
    };
  }
  componentDidMount() {
    fetch("http://10.58.0.155:8002/account/year", {
      method: "get"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          year: res.year_list
        });
      })
      .then(
        fetch("http://10.58.0.155:8002/account/month", {
          method: "get"
        })
          .then(res => {
            return res.json();
          })
          .then(res => {
            this.setState({
              month: res.month_list
            });
          })
      )
      .then(
        fetch("http://10.58.0.155:8002/account/day", {
          method: "get"
        })
          .then(res => {
            return res.json();
          })
          .then(res => {
            this.setState(
              {
                day: res.day_list
              },
              () => console.log(this.state)
            );
          })
      );
  }
  handleDrop = (id, tag, name) => {
    this.setState({ [name]: id }, () => console.log(this.state, "드랍"));
  };
  submitSignUp = e => {
    e.preventDefault();
    fetch("http://10.58.0.155:8002/account/signup", {
      method: "post",
      body: JSON.stringify({
        email: this.state.emailVal,
        password: this.state.passwordVal,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        birth_year: this.state.년,
        birth_month: this.state.월,
        birth_day: this.state.일
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.message === "SUCCESS") {
          this.props.history.push("/Login");
        }
      });
  };
  handleEmail = e => {
    this.setState({ emailVal: e.target.value });
  };
  handlePassword = e => {
    this.setState({ passwordVal: e.target.value });
  };
  handleFirstName = e => {
    this.setState({ firstName: e.target.value });
  };
  handleLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };
  handlehide = e => {
    this.state.hideMode
      ? this.setState({
          hideMode: false
        })
      : this.setState({
          hideMode: true
        });
  };

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
    const {
      hideMode,
      emailVal,
      passwordVal,
      firstName,
      lastName,
      year,
      month,
      day
    } = this.state;

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

          <div className="sd-email-box-container">
            <input
              onChange={this.handleEmail}
              className="sd-email-box"
              placeholder="이메일주소"
              type="text"
              value={emailVal}
            />
            <div className="sd-email-image"></div>
          </div>
          <div className="sd-first-container">
            <input
              onChange={this.handleFirstName}
              className="sd-first-name-box"
              placeholder="이름(예:길동)"
              type="text"
              value={firstName}
            />
            <div className="first-image"></div>
          </div>
          <div className="sd-last-container">
            <input
              onChange={this.handleLastName}
              className="sd-last-name-box"
              placeholder="성(예:홍)"
              type="text"
              value={lastName}
            />
            <div className="last-image"></div>
          </div>
          <div className="password-box-container">
            <input
              onChange={this.handlePassword}
              className="sd-password-box"
              placeholder="비밀번호 설정"
              type={hideMode ? "password" : "text"}
              value={passwordVal}
            />
            <div
              onClick={this.handlehide}
              className={hideMode ? "password-image" : "password-image-on"}
            ></div>
          </div>

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
            <DropDown
              none={{ display: "none" }}
              margin={{ margin: "0px" }}
              style={{ width: "100px", height: "40px", margin: "0" }}
              drop={this.handleDrop}
              data={month}
              type={"month"}
              name="월"
            />
            <DropDown
              none={{ display: "none" }}
              margin={{ margin: "0px" }}
              style={{ width: "100px", height: "40px", margin: "0" }}
              drop={this.handleDrop}
              data={day}
              type={"day"}
              name="일"
            />{" "}
            <DropDown
              none={{ display: "none" }}
              margin={{ margin: "0px" }}
              style={{ width: "100px", height: "40px", margin: "0" }}
              drop={this.handleDrop}
              data={year}
              type={"year"}
              name="년"
            />
          </div>
          <div style={{ color: "#5c5c5c", fontSize: "13px" }}>
            에어비앤비의 마케팅 프로모션, 특별 할인 및 추천 여행 정보, 정책
            변경사항을 이메일로 보내드립니다.
          </div>

          <button onClick={this.submitSignUp} className="sign-up-submit">
            가입하기
          </button>

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

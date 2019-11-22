import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.scss";
import { loginAPI } from "../../config.js";

export class Login extends Component {
  state = {
    emailValue: "",
    passwordValue: "",
    passwordView: true
  };

  submitLogin = e => {
    fetch(loginAPI, {
      method: "post",
      body: JSON.stringify({
        email: this.state.emailValue,
        password: this.state.passwordValue
      })
    })
      .then(res => {
        return res.json();
      })

      .then(res => {
        console.log(res);
        if (res.access_token) {
          console.log("성공");
          localStorage.setItem("access_token", res.access_token);
        } else {
          alert("이메일 및 패스워드를 확인하세요.");
        }
      });
  };
  handleInput = e => {
    console.log(e.target.name);
    if (e.target.name === "email") {
      this.setState({ emailValue: e.target.value }, () =>
        console.log("mail", this.state.emailValue)
      );
    } else if (e.target.name === "password") {
      this.setState(
        {
          passwordValue: e.target.value
        },
        () => console.log("word", this.state.passwordValue)
      );
    }
  };

  handlePassowordView = () => {
    this.setState({ passwordView: !this.state.passwordView }, () =>
      console.log(this.state.passwordView)
    );
  };
  loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        fetch("http://10.58.0.155:8002/account/kakao_signin", {
          method: "get",
          headers: {
            Authorization: authObj.access_token
          }
        })
          .then(res => {
            return res.json();
          })
          .then(res => {
            if (res.access_token) {
              localStorage.setItem("access_token", res.access_token);
            } else {
              alert("실패");
            }
          });
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
    this.props.history.push("/");
  };
  render() {
    const { emailValue, passwordView } = this.state;
    return (
      <div className="login-page">
        <div className="login-page-container">
          <button className="close-button"></button>
          <div className="kakao-login" onClick={this.loginWithKakao}></div>
          <div className="facebook-login"></div>
          <div className="or-container">
            <div className="under-border"></div>
            <span className="or">또는</span>
            <div className="under-border"></div>
          </div>
          <div className="email-box-container">
            <input
              name="email"
              onChange={this.handleInput}
              className="sd-email-box"
              placeholder="이메일주소"
              type="text"
              value={emailValue}
            />
            <div className="email-image"></div>
          </div>
          <div className="password-box-container">
            <input
              name="password"
              onChange={this.handleInput}
              className="sd-password-box"
              placeholder="비밀번호 설정"
              type={passwordView ? "password" : "text"}
            />
            <div className="password-image"></div>
          </div>
          <div className="password-guide-container">
            <div className="save-password-container">
              <input type="checkbox" className="save-password-check"></input>
              <div className="save-check-text">비밀번호 저장 </div>
            </div>
            <div className="hide-password-container">
              <div onClick={this.handlePassowordView} className="hide-password">
                {passwordView ? "비밀번호 보기" : "비밀번호 숨기기"}
              </div>
            </div>
          </div>
          <button onClick={this.submitLogin} className="login-submit">
            로그인
          </button>
          <div className="before-sign-up-container">
            <div className="before-sign-up-guide">
              위앤비 계정이 없으세요?&nbsp;
            </div>
            <Link to="/SignUp" className="before-sign-up-button">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

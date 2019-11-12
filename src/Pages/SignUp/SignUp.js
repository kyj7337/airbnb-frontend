import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.scss";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }
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
      <div className="sign-up-page">
        <div className="sign-up-container">
          <button className="close-button"></button>
          <div className="kakao-login" onClick={this.loginWithKakao}></div>
          <div className="facebook-login" onClick={this.faceBookLogin}></div>
          <div className="or-container">
            <div className="under-border"></div>
            <span className="or">또는</span>
            <div className="under-border"></div>
          </div>
          <Link to="/SignUpDetail">
            <div className="email-login" />
          </Link>
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

export default SignUp;

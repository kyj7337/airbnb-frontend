import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.scss";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // faceBookLogin = () => {
  //   window.FB.login(
  //     function(response) {
  //       // handle the response
  //     },
  //     { scope: "public_profile,email" }
  //   );
  // };

  loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        fetch("http://10.58.1.8:8000/users/kakao", {
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
  // handleKakao = () => {
  //   console.log("성공");
  //   if (localStorage.getItem("kakao_afadfd8d437ad846ee5a924c15cbe1eb")) {
  //     fetch("http://10.58.1.8:8000/users/kakao", {
  //       method: "post",
  //       headers: {
  //         Authorization: localStorage.getItem(
  //           "kakao_afadfd8d437ad846ee5a924c15cbe1eb"
  //         )
  //       }
  //     });
  //   }
  // };
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
